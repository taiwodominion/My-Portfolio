import React, { Suspense, lazy, useState, useEffect } from "react";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiPostman } from "react-icons/si";

import { FaGithub, FaWhatsapp } from "react-icons/fa6";
import heroImage from "../assets/my_animated_pic.jpg";
import { useNavigate } from "react-router-dom";
import "../css/Hero.css";

// Lazy load the heavy 3D engine with a specific chunk name
const Spline = lazy(() => import('@splinetool/react-spline'));

const Hero = () => {
  const navigate = useNavigate();
  const [isDesktop, setIsDesktop] = useState(false);
  const [shouldLoad3D, setShouldLoad3D] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      const desktop = window.innerWidth >= 1200;
      setIsDesktop(desktop);

      if (desktop) {
        const timer = setTimeout(() => {
          setShouldLoad3D(true);
        }, 1500);
        return () => clearTimeout(timer);
      }
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const techStack = [
    { icon: <SiHtml5 />, label: "HTML5" },
    { icon: <SiCss3 />, label: "CSS3" },
    { icon: <SiJavascript />, label: "JavaScript" },
    { icon: <SiReact />, label: "React.js" },
    { icon: <SiGit />, label: "Git" },
    { icon: <SiPostman />, label: "API Integration" }
  ];

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-content-head">
            <div className="hero-identity">
              <img src={heroImage} alt="Taiwo Dominion" />
              <div className="hero-id-info">
                <h1>Hi, I'm Taiwo Dominion</h1>
                <p>A Frontend Developer</p>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/taiwodominion" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub />
              </a>
              <a href="https://wa.me/+2349162527468" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <h2>I'm the bridge between user's needs and business goals.</h2>
          <p>
            I build beautiful, responsive, and user-friendly websites with a
            focus on performance and accessibility.
          </p>

          <div className="hero-btns">
            <button className="btn" onClick={() => navigate("/projects")}>
              View my work
            </button>
            <button className="btn btn-outline" onClick={() => navigate("/contact")}>
              Contact me
            </button>
          </div>

          <div className="tech-stack">
            {techStack.map((tech, index) => (
              <div className="tech-item" key={index}>
                {tech.icon}
                <span>{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-3d-container">
        {/* Only render Spline if on Desktop AND after the 1.5s delay */}
        {isDesktop && shouldLoad3D && (
          <Suspense fallback={<div className="loader"></div>}>
            <Spline 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" 
              className="spline-canvas"
            />
          </Suspense>
        )}
        
        {/* While loading or on mobile, show a simple background light/blob */}
        {(!isDesktop || !shouldLoad3D) && <div className="hero-bg-glow"></div>}
      </div>
    </section>
  );
};

export default Hero;