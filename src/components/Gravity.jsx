import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { debounce } from "lodash";
import Matter, {
  Bodies,
  Common,
  Engine,
  Events,
  Mouse,
  MouseConstraint,
  Query,
  Render,
  Runner,
  World,
} from "matter-js";
import decomp from "poly-decomp";

function calculatePosition(value, containerSize, elementSize) {
  if (typeof value === "string" && value.endsWith("%")) {
    const percentage = parseFloat(value) / 100;
    return containerSize * percentage;
  }
  return typeof value === "number"
    ? value
    : elementSize - containerSize + elementSize / 2;
}

const GravityContext = createContext(null);

export const MatterBody = ({
  children,
  className = "",
  matterBodyOptions = {
    friction: 0.1,
    restitution: 0.4,
    density: 0.002,
    isStatic: false,
  },
  bodyType = "rectangle",
  isDraggable = true,
  x = 0,
  y = 0,
  angle = 0,
  ...props
}) => {
  const elementRef = useRef(null);
  const idRef = useRef(Math.random().toString(36).substring(7));
  const context = useContext(GravityContext);

  useEffect(() => {
    if (!elementRef.current || !context) return;
    context.registerElement(idRef.current, elementRef.current, {
      children,
      matterBodyOptions,
      bodyType,
      isDraggable,
      x,
      y,
      angle,
      ...props,
    });
    return () => context.unregisterElement(idRef.current);
  }, []);

  return (
    <div
      ref={elementRef}
      className={`matter-body ${className}`}
      style={{
        position: "absolute",
        pointerEvents: isDraggable ? "none" : "auto",
      }}
    >
      {children}
    </div>
  );
};

export const Gravity = forwardRef(
  (
    {
      children,
      debug = false,
      gravity = { x: 0, y: 1 },
      grabCursor = true,
      resetOnResize = true,
      addTopWall = false,
      autoStart = true,
      className = "",
      style = {},
      ...props
    },
    ref,
  ) => {
    const canvas = useRef(null);
    const engine = useRef(Engine.create());
    const render = useRef();
    const runner = useRef();
    const bodiesMap = useRef(new Map());
    const frameId = useRef();
    const mouseConstraint = useRef();
    const mouseDown = useRef(false);
    const isRunning = useRef(false);
    const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

    const registerElement = useCallback(
      (id, element, props) => {
        if (!canvas.current) return;
        const width = element.offsetWidth;
        const height = element.offsetHeight;
        const canvasRect = canvas.current.getBoundingClientRect();
        const angle = (props.angle || 0) * (Math.PI / 180);
        const x = calculatePosition(props.x, canvasRect.width, width);
        const y = calculatePosition(props.y, canvasRect.height, height);

        let body;
        if (props.bodyType === "circle") {
          const radius = Math.max(width, height) / 2;
          body = Bodies.circle(x, y, radius, {
            ...props.matterBodyOptions,
            angle,
            render: {
              fillStyle: debug ? "#888" : "#00000000",
              strokeStyle: debug ? "#333" : "#00000000",
              lineWidth: debug ? 3 : 0,
            },
          });
        } else {
          body = Bodies.rectangle(x, y, width, height, {
            ...props.matterBodyOptions,
            angle,
            render: {
              fillStyle: debug ? "#888" : "#00000000",
              strokeStyle: debug ? "#333" : "#00000000",
              lineWidth: debug ? 3 : 0,
            },
          });
        }

        if (body) {
          World.add(engine.current.world, [body]);
          bodiesMap.current.set(id, { element, body, props });
        }
      },
      [debug],
    );

    const unregisterElement = useCallback((id) => {
      const entry = bodiesMap.current.get(id);
      if (entry) {
        World.remove(engine.current.world, entry.body);
        bodiesMap.current.delete(id);
      }
    }, []);

    const updateElements = useCallback(() => {
      bodiesMap.current.forEach(({ element, body }) => {
        const { x, y } = body.position;
        const rotation = body.angle * (180 / Math.PI);
        element.style.transform = `translate(${x - element.offsetWidth / 2}px, ${
          y - element.offsetHeight / 2
        }px) rotate(${rotation}deg)`;
      });
      frameId.current = requestAnimationFrame(updateElements);
    }, []);

    const startEngine = useCallback(() => {
      if (runner.current) {
        runner.current.enabled = true;
        Runner.run(runner.current, engine.current);
      }
      if (render.current) Render.run(render.current);
      frameId.current = requestAnimationFrame(updateElements);
      isRunning.current = true;
    }, [updateElements]);

    const stopEngine = useCallback(() => {
      if (!isRunning.current) return;
      if (runner.current) Runner.stop(runner.current);
      if (render.current) Render.stop(render.current);
      if (frameId.current) cancelAnimationFrame(frameId.current);
      isRunning.current = false;
    }, []);

    const clearRenderer = useCallback(() => {
      if (frameId.current) cancelAnimationFrame(frameId.current);
      if (mouseConstraint.current)
        World.remove(engine.current.world, mouseConstraint.current);
      if (render.current) {
        Mouse.clearSourceEvents(render.current.mouse);
        Render.stop(render.current);
        render.current.canvas.remove();
      }
      if (runner.current) Runner.stop(runner.current);
      World.clear(engine.current.world, false);
      Engine.clear(engine.current);
      bodiesMap.current.clear();
    }, []);

    const initializeRenderer = useCallback(() => {
      if (!canvas.current) return;
      const height = canvas.current.offsetHeight;
      const width = canvas.current.offsetWidth;

      Common.setDecomp(decomp);

      engine.current.gravity.x = gravity.x;
      engine.current.gravity.y = gravity.y;

      render.current = Render.create({
        element: canvas.current,
        engine: engine.current,
        options: {
          width,
          height,
          wireframes: false,
          background: "#00000000",
        },
      });

      const mouse = Mouse.create(render.current.canvas);
      mouseConstraint.current = MouseConstraint.create(engine.current, {
        mouse,
        constraint: {
          stiffness: 0.2,
          render: { visible: debug },
        },
      });

      const walls = [
        Bodies.rectangle(width / 2, height + 10, width, 20, {
          isStatic: true,
          friction: 1,
          render: { visible: debug },
        }),
        Bodies.rectangle(width + 10, height / 2, 20, height, {
          isStatic: true,
          friction: 1,
          render: { visible: debug },
        }),
        Bodies.rectangle(-10, height / 2, 20, height, {
          isStatic: true,
          friction: 1,
          render: { visible: debug },
        }),
      ];

      if (addTopWall) {
        walls.push(
          Bodies.rectangle(width / 2, -10, width, 20, {
            isStatic: true,
            friction: 1,
            render: { visible: debug },
          }),
        );
      }

      const touchingMouse = () =>
        Query.point(
          engine.current.world.bodies,
          mouseConstraint.current?.mouse.position || { x: 0, y: 0 },
        ).length > 0;

      if (grabCursor) {
        Events.on(engine.current, "beforeUpdate", () => {
          if (canvas.current) {
            canvas.current.style.cursor =
              !mouseDown.current && !touchingMouse()
                ? "default"
                : touchingMouse()
                  ? mouseDown.current
                    ? "grabbing"
                    : "grab"
                  : "default";
          }
        });
        canvas.current.addEventListener("mousedown", () => {
          mouseDown.current = true;
          if (canvas.current)
            canvas.current.style.cursor = touchingMouse()
              ? "grabbing"
              : "default";
        });
        canvas.current.addEventListener("mouseup", () => {
          mouseDown.current = false;
          if (canvas.current)
            canvas.current.style.cursor = touchingMouse() ? "grab" : "default";
        });
      }

      World.add(engine.current.world, [mouseConstraint.current, ...walls]);
      render.current.mouse = mouse;
      runner.current = Runner.create();
      Render.run(render.current);
      updateElements();
      runner.current.enabled = false;
      if (autoStart) {
        runner.current.enabled = true;
        startEngine();
      }
    }, [updateElements, debug, autoStart, gravity, grabCursor, addTopWall]);

    const handleResize = useCallback(() => {
      if (!canvas.current || !resetOnResize) return;
      setCanvasSize({
        width: canvas.current.offsetWidth,
        height: canvas.current.offsetHeight,
      });
      clearRenderer();
      initializeRenderer();
    }, [clearRenderer, initializeRenderer, resetOnResize]);

    const reset = useCallback(() => {
      stopEngine();
      handleResize();
    }, [stopEngine, handleResize]);

    useImperativeHandle(
      ref,
      () => ({ start: startEngine, stop: stopEngine, reset }),
      [startEngine, stopEngine, reset],
    );

    useEffect(() => {
      if (!resetOnResize) return;
      const debouncedResize = debounce(handleResize, 500);
      window.addEventListener("resize", debouncedResize);
      return () => {
        window.removeEventListener("resize", debouncedResize);
        debouncedResize.cancel();
      };
    }, [handleResize, resetOnResize]);

    useEffect(() => {
      initializeRenderer();
      return clearRenderer;
    }, []);

    return (
      <GravityContext.Provider value={{ registerElement, unregisterElement }}>
        <div
          ref={canvas}
          className={className}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            ...style,
          }}
          {...props}
        >
          {children}
        </div>
      </GravityContext.Provider>
    );
  },
);

Gravity.displayName = "Gravity";
