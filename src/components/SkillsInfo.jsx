import React, { useEffect, useRef, useState } from "react";
import "../css/SkillsInfo.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiFirebase, SiFigma, SiVite, SiSupabase } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const SkillsInfo = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const animRef = useRef(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [visible, setVisible] = useState(false);

  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      color: "#E34F26",
      x: "15%",
      y: "10%",
      angle: -8,
      level: 95,
      desc: "Semantic markup, accessibility, SEO structure",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      color: "#1572B6",
      x: "55%",
      y: "8%",
      angle: 5,
      level: 92,
      desc: "Animations, layouts, responsive design systems",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      color: "#F7DF1E",
      x: "80%",
      y: "15%",
      angle: -4,
      level: 88,
      desc: "ES6+, async patterns, DOM manipulation",
    },
    {
      name: "React.js",
      icon: <FaReact />,
      color: "#61DAFB",
      x: "25%",
      y: "45%",
      angle: 10,
      level: 90,
      desc: "Hooks, context, component architecture",
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      color: "#F05032",
      x: "65%",
      y: "40%",
      angle: -6,
      level: 82,
      desc: "Version control, branching, collaboration",
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
      color: "#FFCA28",
      x: "10%",
      y: "70%",
      angle: 7,
      level: 75,
      desc: "Auth, Firestore, realtime database",
    },
    {
      name: "Vite",
      icon: <SiVite />,
      color: "#646CFF",
      x: "50%",
      y: "72%",
      angle: -3,
      level: 85,
      desc: "Fast builds, HMR, modern dev tooling",
    },
    {
      name: "Figma",
      icon: <SiFigma />,
      color: "#F24E1E",
      x: "78%",
      y: "68%",
      angle: 8,
      level: 78,
      desc: "UI design, prototyping, design systems",
    },
    {
      name: "Supabase",
      icon: <SiSupabase />,
      color: "#3ECF8E",
      x: "40%",
      y: "30%",
      angle: -5,
      level: 80,
      desc: "Auth, Postgres database, realtime, storage",
    },
  ];

  const orbitRings = [
    { radius: 80, speed: 0.4, skills: [skills[0], skills[3]] },
    { radius: 150, speed: 0.25, skills: [skills[1], skills[4], skills[6]] },
    {
      radius: 220,
      speed: 0.15,
      skills: [skills[2], skills[5], skills[7], skills[8]],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("skills--visible");
            setVisible(true);
          }
        });
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const angles = orbitRings.map((ring) =>
      ring.skills.map((_, i) => (360 / ring.skills.length) * i),
    );

    let last = performance.now();

    const animate = (now) => {
      const delta = (now - last) / 1000;
      last = now;

      orbitRings.forEach((ring, ri) => {
        ring.skills.forEach((skill, si) => {
          angles[ri][si] += ring.speed * delta * 60 * 0.3;
          const rad = (angles[ri][si] * Math.PI) / 180;
          const el = document.getElementById(`orbit-skill-${ri}-${si}`);
          if (!el) return;
          const x = Math.cos(rad) * ring.radius;
          const y = Math.sin(rad) * ring.radius;
          el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
        });
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [visible]);

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

        <div className="skills__orbit-section">
          <div className="orbit-left">
            <div className="orbit-stage">
              <svg className="orbit-rings-svg" viewBox="-240 -240 480 480">
                {orbitRings.map((ring, ri) => (
                  <circle
                    key={ri}
                    cx="0"
                    cy="0"
                    r={ring.radius}
                    fill="none"
                    stroke="rgba(255,255,255,0.04)"
                    strokeWidth="1"
                    strokeDasharray="4 8"
                  />
                ))}
                {orbitRings.map((ring, ri) =>
                  ring.skills.map((skill, si) => {
                    const startAngle =
                      ((360 / ring.skills.length) * si * Math.PI) / 180;
                    const x2 = Math.cos(startAngle) * ring.radius;
                    const y2 = Math.sin(startAngle) * ring.radius;
                    return (
                      <line
                        key={`line-${ri}-${si}`}
                        x1={0}
                        y1={0}
                        x2={x2}
                        y2={y2}
                        stroke={`${skill.color}18`}
                        strokeWidth="1"
                      />
                    );
                  }),
                )}
              </svg>

              <div className="orbit-center">
                <div className="orbit-center-pulse" />
                <div className="orbit-center-pulse orbit-center-pulse--2" />
                <span className="orbit-center-label">
                  {hoveredSkill ? (
                    <span style={{ color: hoveredSkill.color }}>
                      {hoveredSkill.name}
                    </span>
                  ) : (
                    "Stack"
                  )}
                </span>
              </div>

              {orbitRings.map((ring, ri) =>
                ring.skills.map((skill, si) => {
                  const startAngle =
                    ((360 / ring.skills.length) * si * Math.PI) / 180;
                  const x = Math.cos(startAngle) * ring.radius;
                  const y = Math.sin(startAngle) * ring.radius;
                  const isHovered =
                    hoveredSkill && hoveredSkill.name === skill.name;
                  return (
                    <div
                      key={`${ri}-${si}`}
                      id={`orbit-skill-${ri}-${si}`}
                      className={`orbit-skill-node ${isHovered ? "orbit-skill-node--hovered" : ""}`}
                      style={{
                        "--c": skill.color,
                        transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                      }}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <span className="orbit-node-icon">{skill.icon}</span>
                    </div>
                  );
                }),
              )}
            </div>
          </div>

          <div className="orbit-right">
            <div className="orbit-info-panel">
              {hoveredSkill ? (
                <>
                  <div className="orbit-info-top">
                    <span
                      className="orbit-info-icon"
                      style={{ color: hoveredSkill.color }}
                    >
                      {hoveredSkill.icon}
                    </span>
                    <div>
                      <h3 className="orbit-info-name">{hoveredSkill.name}</h3>
                      <p className="orbit-info-desc">{hoveredSkill.desc}</p>
                    </div>
                  </div>
                  <div className="orbit-info-bar-wrap">
                    <div className="orbit-info-bar-track">
                      <div
                        className="orbit-info-bar-fill"
                        style={{
                          width: `${hoveredSkill.level}%`,
                          background: hoveredSkill.color,
                        }}
                      />
                    </div>
                    <span
                      className="orbit-info-bar-label"
                      style={{ color: hoveredSkill.color }}
                    >
                      {hoveredSkill.level}%
                    </span>
                  </div>
                </>
              ) : (
                <div className="orbit-info-empty">
                  <div className="orbit-info-empty-icon">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v4M12 16h.01" />
                    </svg>
                  </div>
                  <p>Hover over any node in the orbit to see skill details</p>
                </div>
              )}
            </div>

            <div className="orbit-skills-list">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className={`orbit-list-item ${hoveredSkill && hoveredSkill.name === skill.name ? "orbit-list-item--active" : ""}`}
                  style={{ "--c": skill.color }}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <span className="orbit-list-icon">{skill.icon}</span>
                  <span className="orbit-list-name">{skill.name}</span>
                  <div className="orbit-list-bar">
                    <div
                      className="orbit-list-bar-fill"
                      style={{
                        width: visible ? `${skill.level}%` : "0%",
                        background: skill.color,
                      }}
                    />
                  </div>
                  <span className="orbit-list-pct">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
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
              href=""
              className="skills__cta-btn skills__cta-btn--primary"
              onClick={() => navigate("/contact")}
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
              href=""
              className="skills__cta-btn skills__cta-btn--outline"
              onClick={() => navigate("/projects")}
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
