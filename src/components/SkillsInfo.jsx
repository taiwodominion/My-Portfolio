import React from "react";
import "../css/SkillsInfo.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiFirebase, SiFigma, SiVite } from "react-icons/si";

const SkillsInfo = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "React.Js", icon: <FaReact />, color: "#61DAFB" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
    { name: "Responsive", icon: <SiVite />, color: "#646CFF" },
    { name: "Figma to Code", icon: <SiFigma />, color: "#F24E1E" },
  ];

  return (
    <section id="skills">
      <div className="container">
        <div className="skills-wrapper">
          <div className="skills-content">
            <div className="skills-text">
              <h1 className="section-title">
                Technologies I <span>mostly</span> work with
              </h1>
              <p>
                I'm a passionate frontend developer crafting modern web
                applications. What began as curiosity about how websites work
                has blossomed into a full-fledged love for creating digital
                experiences.
              </p>
              <p>
                I specialize in crafting pixel-perfect, responsive interfaces
                with clean, efficient code. I believe in the power of design and
                technology to make people's lives better.
              </p>
              <div className="experience-badge">
                <span>Frontend Specialist</span>
              </div>
            </div>

            <div className="tech-skills-grid">
              {skills.map((skill, index) => (
                <div
                  className="skill-card"
                  key={index}
                  style={{ "--brand-color": skill.color }}
                >
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsInfo;
