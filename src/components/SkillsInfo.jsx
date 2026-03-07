import React, { useEffect, useRef } from "react";
import "../css/SkillsInfo.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiFirebase, SiFigma, SiVite } from "react-icons/si";

const SkillsInfo = () => {
  const sectionRef = useRef(null);

  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26", level: 95 },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6", level: 92 },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E", level: 88 },
    { name: "React.js", icon: <FaReact />, color: "#61DAFB", level: 90 },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032", level: 85 },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28", level: 80 },
    { name: "Vite", icon: <SiVite />, color: "#646CFF", level: 83 },
    { name: "Figma - to - code", icon: <SiFigma />, color: "#F24E1E", level: 85 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("skills--visible");
          }
        });
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef}>
      <div className="skills__orb skills__orb--1" />
      <div className="skills__orb skills__orb--2" />
      <div className="skills__grain" />

      <div className="skills__inner">
        <div className="skills__header">
          <div className="skills__header-left">
            <p className="skills__eyebrow">
              <span className="skills__eyebrow-line" />
              What I bring to the table
            </p>
            <h2 className="skills__title">
              Technologies I<br />
              <span className="skills__title-accent">mostly</span> work with
            </h2>
          </div>
          <div className="skills__header-right">
            <p className="skills__desc">
              I'm a frontend developer who turns complex problems into elegant,
              performant interfaces. Every pixel is intentional. Every line of
              code has purpose.
            </p>
            <p className="skills__desc">
              Pixel-perfect. Responsive. Accessible. I build things that make
              people stop scrolling — and start clicking.
            </p>
            <div className="skills__badges">
              <span className="skills__badge skills__badge--blue">
                Frontend Specialist
              </span>
              <span className="skills__badge skills__badge--green">
                <span className="skills__badge-dot" />
                Open to Work
              </span>
            </div>
          </div>
        </div>

        <div className="skills__rule">
          <span>Stack</span>
        </div>

        <div className="skills__grid">
          {skills.map((skill, i) => (
            <div
              className="skill-card"
              key={i}
              style={{
                "--c": skill.color,
                "--i": i,
                "--level": `${skill.level}%`,
              }}
            >
              <div className="skill-card__top">
                <span className="skill-card__icon">{skill.icon}</span>
                <span className="skill-card__level">{skill.level}%</span>
              </div>
              <span className="skill-card__name">{skill.name}</span>
              <div className="skill-card__bar-track">
                <div className="skill-card__bar-fill" />
              </div>
              <div className="skill-card__glow" />
            </div>
          ))}
        </div>

        <div className="skills__cta">
          <div className="skills__cta-text">
            <span className="skills__cta-label">
              Ready to build something great?
            </span>
            <span className="skills__cta-sub">
              I'm available for freelance & full-time roles
            </span>
          </div>
          <div className="skills__cta-actions">
            <a
              href="#contact"
              className="skills__cta-btn skills__cta-btn--primary"
            >
              Hire Me
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
            </a>
            <a
              href="#projects"
              className="skills__cta-btn skills__cta-btn--outline"
            >
              See Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsInfo;
