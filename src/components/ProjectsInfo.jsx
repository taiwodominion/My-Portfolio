import { useEffect, useRef, useState } from "react";
import kinetixImage from "../assets/kinetix.png";
import novaImage from "../assets/NovaReach.jpg";
import vintexcImage from "../assets/vintexc-hero.png";
import tdstoreImg from "../assets/td-store.jpg";
import gideonPortfolioImg from "../assets/gideon-portfolio-preview.png";
import nexuxImage from "../assets/nexux-preview.jpg";
import chefImage from "../assets/Chef-s-Table.jpg";
import flowImage from "../assets/flowpay1.png";
import flowPayDashboard from "../assets/flow-pay-dashboard.png";
import "../css/ProjectsInfo.css";

export const projects = [
  {
    title: "Kinetix",
    tag: "SaaS Platform",
    year: "2026",
    description:
      "A full-stack SaaS platform with an animated landing page, Three.js globe visualizations, GSAP scroll animations, Supabase authentication, and a protected console dashboard with live user data.",
    technologies: [
      "React.js",
      "Supabase",
      "Three.js",
      "GSAP",
      "React Router",
      "CSS3",
    ],
    image: kinetixImage,
    liveUrl: "https://td-kinetix.vercel.app/",
    codeUrl: "https://github.com/taiwodominion/Kinetix",
    accent: "#00f2fe",
  },
  {
    title: "Vintexc",
    tag: "Crypto Platform",
    year: "2024",
    description:
      "A fullstack modern cryptocurrency web app keeping users informed and empowered as they navigate digital assets.",
    technologies: ["React.js", "CSS3", "Postman API", "Responsive"],
    image: vintexcImage,
    liveUrl: "https://vintexc-ui-taiwo-dominion.vercel.app/",
    codeUrl: "https://github.com/taiwodominion/vintexc-ui",
    accent: "#4a7a88",
  },
  {
    title: "Flow Pay Dashboard",
    tag: "VTU Ecosystem",
    year: "2024",
    description:
      "High-performance VTU dashboard with integrated wallet funding, real-time transaction tracking, and seamless airtime/data services.",
    technologies: ["React.js", "CSS3", "Responsive"],
    image: flowPayDashboard,
    liveUrl: "https://taiwo-dominion-flow-pay-dashboard-ui.vercel.app/",
    codeUrl: "https://github.com/taiwodominion/Flow-Pay-Dashboard-Ui",
    accent: "#4361ee",
  },
  {
    title: "TD-Store",
    tag: "E-Commerce",
    year: "2024",
    description:
      "Full-stack e-commerce platform with real-time product management, Firebase live sync, cloud image storage, and a custom admin dashboard.",
    technologies: ["React.js", "CSS", "Firebase", "API Integration"],
    image: tdstoreImg,
    liveUrl: "https://td-store.vercel.app/",
    codeUrl: "https://github.com/taiwodominion/TD-Store",
    accent: "#FFCA28",
  },
  {
    title: "Roland Gideon Portfolio",
    tag: "Portfolio",
    year: "2024",
    description:
      "High-converting design solution rooted in deep user research with intuitive navigation and clean UI.",
    technologies: ["React.js", "CSS3", "GSAP", "API Integration"],
    image: gideonPortfolioImg,
    liveUrl: "https://roland-gideon-portfolio.vercel.app/",
    codeUrl: "https://github.com/taiwodominion/Roland-Gideon-Portfolio",
    accent: "#7b2ff7",
  },
  {
    title: "NexusFlow",
    tag: "B2B SaaS",
    year: "2024",
    description:
      "High-fidelity, conversion-optimized React engine designed for B2B SaaS acquisition.",
    technologies: ["React.js", "CSS3", "Responsive"],
    image: nexuxImage,
    liveUrl: "https://nexuxflow.vercel.app/",
    codeUrl: "https://github.com/taiwodominion/Nexuxflow",
    accent: "#3ddc84",
  },
  {
    title: "NovaReach",
    tag: "Marketing Site",
    year: "2023",
    description:
      "Responsive, dark-themed digital marketing site with bold visual identity and conversion-focused layout.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: novaImage,
    liveUrl: "https://nova-reach-sigma.vercel.app/",
    codeUrl: "https://github.com/taiwodominion/NovaReach",
    accent: "#FF6C37",
  },
  {
    title: "Chef's Table",
    tag: "Culinary",
    year: "2023",
    description:
      "Modern culinary storytelling meets refined technique — a chef's personal table of seasonal recipes and kitchen craft.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: chefImage,
    liveUrl: "https://chef-s-table-nine.vercel.app/",
    codeUrl: "https://github.com/taiwodominion/Chef-s-Table",
    accent: "#E34F26",
  },
  {
    title: "Flow Pay Landing",
    tag: "Landing Page",
    year: "2023",
    description:
      "Sleek, student-focused VTU platform with instant airtime/data, exam pins, and bill payments through a conversion-optimized page.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive"],
    image: flowImage,
    liveUrl: "https://flow-pay-landing-page.vercel.app/",
    codeUrl: "https://github.com/taiwodominion/Flow-Pay---Landing-Page",
    accent: "#4361ee",
  },
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`proj-card ${visible ? "proj-card--visible" : ""}`}
      style={{ "--accent": project.accent, "--delay": `${index * 0.08}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="proj-card__num">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="proj-card__img-wrap">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="proj-card__img"
        />
        <div className="proj-card__img-overlay" />
        <span className="proj-card__year">{project.year}</span>
      </div>

      <div className="proj-card__body">
        <div className="proj-card__meta">
          <span className="proj-card__tag">{project.tag}</span>
        </div>

        <h3 className="proj-card__title">{project.title}</h3>
        <p className="proj-card__desc">{project.description}</p>

        <div className="proj-card__tech">
          {project.technologies.map((t, i) => (
            <span key={i} className="proj-card__tech-item">
              {t}
            </span>
          ))}
        </div>

        <div className="proj-card__links">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-card__btn proj-card__btn--primary"
          >
            Live Demo
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </a>
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-card__btn proj-card__btn--outline"
          >
            Code
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
            </svg>
          </a>
        </div>
      </div>

      <div className="proj-card__accent-bar" />
    </div>
  );
};

const Projects = () => {
  const headerRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeaderVisible(true);
      },
      { threshold: 0.2 },
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects">
      <div className="proj__orb proj__orb--1" />
      <div className="proj__orb proj__orb--2" />
      <div className="proj__grain" />

      <div className="proj__inner">
        <div
          ref={headerRef}
          className={`proj__header ${headerVisible ? "proj__header--visible" : ""}`}
        >
          <div className="proj__header-left">
            <p className="proj__eyebrow">
              <span className="proj__eyebrow-line" />
              Selected Work
            </p>
            <h2 className="proj__title">
              Projects I've
              <br />
              <span className="proj__title-accent">shipped.</span>
            </h2>
          </div>
          <div className="proj__header-right">
            <p className="proj__subtitle">
              From crypto platforms to e-commerce engines — each project is a
              problem solved, a deadline met, and a client satisfied. Clean
              code. Real results.
            </p>
            <div className="proj__count">
              <span className="proj__count-num">{projects.length}</span>
              <span className="proj__count-label">Projects shipped</span>
            </div>
          </div>
        </div>

        <div className="proj__rule">
          <span>Work</span>
        </div>

        <div className="proj__list">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
