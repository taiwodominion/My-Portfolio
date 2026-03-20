import React, { Suspense, lazy, useState, useEffect, useRef } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiGit,
  SiPostman,
  SiFirebase,
  SiGreensock,
  SiThreedotjs,
  SiSupabase,
} from "react-icons/si";
import { FaGithub, FaWhatsapp } from "react-icons/fa6";
import heroImage from "/my_animated_pic.jpg";
import { useNavigate } from "react-router-dom";
import { projects } from "./ProjectsInfo";
import { Gravity, MatterBody } from "./Gravity";
import "../css/Hero.css";

const Spline = lazy(() => import("@splinetool/react-spline"));

const DecodeText = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  const timeoutRef = useRef(null);

  const decode = () => {
    let iteration = 0;
    clearInterval(timeoutRef.current);
    timeoutRef.current = setInterval(() => {
      setDisplayText(() =>
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join(""),
      );
      if (iteration >= text.length) clearInterval(timeoutRef.current);
      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    const timer = setTimeout(() => decode(), 600);
    return () => {
      clearTimeout(timer);
      clearInterval(timeoutRef.current);
    };
  }, [text]);

  return (
    <h1 className="glimmer-text" onMouseEnter={decode}>
      {displayText}
    </h1>
  );
};

const Hero = () => {
  const navigate = useNavigate();
  const splineRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [shouldLoad3D, setShouldLoad3D] = useState(false);
  const [mounted, setMounted] = useState(false);

  function onLoad(spline) {
    splineRef.current = spline;
  }

  useEffect(() => {
    requestAnimationFrame(() => {
      setTimeout(() => setMounted(true), 50);
    });

    const checkScreen = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
      if (desktop) setTimeout(() => setShouldLoad3D(true), 1200);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const techStack = [
    { icon: <SiHtml5 />, label: "HTML5", color: "#E34F26" },
    { icon: <SiCss3 />, label: "CSS3", color: "#1572B6" },
    { icon: <SiJavascript />, label: "JS", color: "#F7DF1E" },
    { icon: <SiReact />, label: "React", color: "#61DAFB" },
    { icon: <SiGit />, label: "Git", color: "#F05032" },
    { icon: <SiPostman />, label: "APIs", color: "#FF6C37" },
    { icon: <SiFirebase />, label: "Firebase", color: "#FFCA28" },
    { icon: <SiGreensock />, label: "GSAP", color: "#88CE02" },
    { icon: <SiThreedotjs />, label: "Three.js", color: "#eecbcb" },
    { icon: <SiSupabase />, label: "Supabase", color: "#3ECF8E" },
  ];

  const projectCountDisplay =
    projects.length > 5 ? `${projects.length - 1}+` : projects.length;

  return (
    <section className={`hero ${mounted ? "hero--mounted" : ""}`}>
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />
      <div className="hero__grain" />

      <div className="hero__left">
        <div
          className="hero__tag animate-slide-up"
          style={{ "--delay": "0.1s" }}
        >
          <span className="hero__tag-dot" />
          Available for work
        </div>

        <div
          className="hero__identity animate-slide-up"
          style={{ "--delay": "0.2s" }}
        >
          <div className="hero__avatar-ring">
            <img
              src={heroImage}
              alt="Taiwo Dominion"
              className="hero__avatar"
            />
            <div className="hero__avatar-glow" />
          </div>
          <div>
            <DecodeText text="TAIWO DOMINION" />
            <p className="hero__role">Frontend Developer</p>
          </div>
        </div>

        <h2
          className="hero__headline animate-slide-up"
          style={{ "--delay": "0.35s" }}
        >
          I'm the{" "}
          <span className="hero__headline-accent">
            bridge
            <svg
              className="hero__underline"
              viewBox="0 0 200 12"
              preserveAspectRatio="none"
            >
              <path
                d="M0,8 Q50,0 100,8 Q150,16 200,8"
                stroke="currentColor"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <br />
          between user's needs
          <br />& business goals.
        </h2>

        <div
          className="hero__socials animate-slide-up"
          style={{ "--delay": "0.5s" }}
        >
          <a
            href="https://github.com/taiwodominion"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-btn"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a
            href="https://wa.me/+2349162527468"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-btn hero__social-btn--wa"
          >
            <FaWhatsapp />
            <span>WhatsApp</span>
          </a>
        </div>

        <div
          className="hero__stats animate-slide-up"
          style={{ "--delay": "0.6s" }}
        >
          <div className="hero__stat">
            <span className="hero__stat-num">2+</span>
            <span className="hero__stat-label">Years Exp.</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">{projectCountDisplay}</span>
            <span className="hero__stat-label">Projects</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">100%</span>
            <span className="hero__stat-label">Passion</span>
          </div>
        </div>
      </div>

      {/* ref={canvasWrapperRef} */}
      <div className="hero__3d">
        <div className="hero__3d-ring hero__3d-ring--outer" />
        <div className="hero__3d-ring hero__3d-ring--inner" />
        {isDesktop && shouldLoad3D ? (
          <Suspense
            fallback={
              <div className="hero__loader">
                <div className="hero__loader-ring" />
                <span>Loading 3D</span>
              </div>
            }
          >
            <Spline
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="hero__spline"
              onLoad={onLoad}
            />
          </Suspense>
        ) : (
          <div className="hero__3d-fallback">
            <div className="hero__3d-pulse" />
          </div>
        )}
      </div>

      <div className="hero__right">
        <p
          className="hero__desc animate-slide-up"
          style={{ "--delay": "0.2s" }}
        >
          I craft pixel-perfect, performant interfaces that delight users and
          drive results. Clean code. Bold design. No compromises.
        </p>

        <div
          className="hero__btns animate-slide-up"
          style={{ "--delay": "0.35s" }}
        >
          <button
            className="hero__btn hero__btn--primary"
            onClick={() => navigate("/projects")}
          >
            <span>View Work</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button
            className="hero__btn hero__btn--outline"
            onClick={() => navigate("/contact")}
          >
            <span>Let's Talk</span>
          </button>
        </div>

        <div
          className="hero__divider animate-slide-up"
          style={{ "--delay": "0.45s" }}
        >
          <span>Tech Stack</span>
        </div>
        <div
          className="hero__tech animate-slide-up"
          style={{ "--delay": "0.55s" }}
        >
          <div className="hero__divider">
            <span>Tech Stack</span>
          </div>
          <div className="hero__tech-arena">
            <Gravity
              gravity={{ x: 0, y: 0.6 }}
              grabCursor
              addTopWall={true}
              resetOnResize={true}
              className="hero__tech-gravity"
            >
              {techStack.map((tech, i) => (
                <MatterBody
                  key={i}
                  x={`${10 + i * 13}%`}
                  y={`${15 + (i % 3) * 25}%`}
                  angle={(i % 2 === 0 ? -1 : 1) * (i * 3)}
                  matterBodyOptions={{
                    friction: 0.3,
                    restitution: 0.5,
                    density: 0.002,
                    isStatic: false,
                  }}
                  isDraggable
                >
                  <div
                    className="hero__tech-pill"
                    style={{ "--c": tech.color }}
                  >
                    <span className="hero__tech-icon">{tech.icon}</span>
                    <span className="hero__tech-label">{tech.label}</span>
                  </div>
                </MatterBody>
              ))}
            </Gravity>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
