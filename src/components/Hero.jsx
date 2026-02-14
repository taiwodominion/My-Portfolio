import React, { Suspense, lazy, useState, useEffect, useRef } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiGit,
  SiPostman,
  SiFirebase,
} from "react-icons/si";
import { FaGithub, FaWhatsapp } from "react-icons/fa6";
import heroImage from "../assets/my_animated_pic.jpg";
import { useNavigate } from "react-router-dom";
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
      setDisplayText((prev) =>
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
    decode();
    return () => clearInterval(timeoutRef.current);
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
  const [isVisible, setIsVisible] = useState(false);

  function onLoad(spline) {
    splineRef.current = spline;
  }

  useEffect(() => {
    setIsVisible(true);

    const handleGlobalMouseMove = (e) => {
      if (splineRef.current) {
        splineRef.current.emitEvent("mousemove", {
          x: e.clientX,
          y: e.clientY,
        });
      }
    };

    const checkScreen = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
      if (desktop) {
        setTimeout(() => setShouldLoad3D(true), 1000);
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    window.addEventListener("mousemove", handleGlobalMouseMove);

    return () => {
      window.removeEventListener("resize", checkScreen);
      window.removeEventListener("mousemove", handleGlobalMouseMove);
    };
  }, []);

  const techStack = [
    { icon: <SiHtml5 />, label: "HTML5", color: "#E34F26" },
    { icon: <SiCss3 />, label: "CSS3", color: "#1572B6" },
    { icon: <SiJavascript />, label: "JS", color: "#F7DF1E" },
    { icon: <SiReact />, label: "React", color: "#61DAFB" },
    { icon: <SiGit />, label: "Git", color: "#F05032" },
    { icon: <SiPostman />, label: "APIs", color: "#FF6C37" },
    { icon: <SiFirebase />, label: "Firebase", color: "#FFCA28" },
  ];

  return (
    <section className={`hero ${isVisible ? "fade-in" : ""}`}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-content-head">
            <div className="hero-identity">
              <div className="img-glow-wrapper">
                <img src={heroImage} alt="Taiwo Dominion" />
              </div>
              <div className="hero-id-text">
                <DecodeText text="Taiwo Dominion" />
                <p className="role-badge">Frontend Developer</p>
              </div>
            </div>
            <div className="social-links">
              <a
                href="https://github.com/taiwodominion"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
              >
                <FaGithub />
              </a>
              <a
                href="https://wa.me/+2349162527468"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn whatsapp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <h2 className="hero-headline">
            I'm the <span>bridge</span> between user's needs and business goals.
          </h2>
          <p className="hero-description">
            I build beautiful, responsive, and user-friendly websites with a
            focus on performance and accessibility.
          </p>

          <div className="hero-btns">
            <button
              className="btn btn-primary"
              onClick={() => navigate("/projects")}
            >
              View Work
            </button>
            <button
              className="btn btn-outline contact-btn"
              onClick={() => navigate("/contact")}
            >
              Let's Talk
            </button>
          </div>

          <div className="tech-stack">
            {techStack.map((tech, index) => (
              <div
                className="tech-item"
                key={index}
                style={{ "--hover-color": tech.color }}
              >
                <span className="tech-icon">{tech.icon}</span>
                <span className="tech-label">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-3d-container">
        {isDesktop && shouldLoad3D ? (
          <Suspense fallback={<div className="loader"></div>}>
            <Spline
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="spline-canvas"
              onLoad={onLoad}
            />
          </Suspense>
        ) : (
          <div className="hero-bg-glow"></div>
        )}
      </div>
    </section>
  );
};

export default Hero;
