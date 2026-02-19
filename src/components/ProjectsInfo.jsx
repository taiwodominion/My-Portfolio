import novaImage from "../assets/NovaReach.jpg";
import vintexcImage from "../assets/vintexc-hero.png";
import tdstoreImg from "../assets/td-store.jpg";
import gideonPortfolioImg from "../assets/gideon-portfolio-preview.png"
import nexuxImage from "../assets/nexux-preview.jpg"
import chefImage from "../assets/Chef-s-Table.jpg";
import flowImage from "../assets/flowpay1.png";
import flowPayDashboard from "../assets/flow-pay-dashboard.png";
import "../css/ProjectsInfo.css";

const Projects = () => {
  const projects = [
    {
      title: "Vintexc",
      description:
        "Vintexc is a fullstack modern and intuitive cryptocurrency web application designed to keep users informed, empowered, and supported as they navigate the world of digital assets.",
      technologies: [
        "React.js",
        "Css3",
        "Postman Api Integration",
        "Responsive Design",
      ],
      image: vintexcImage,
      liveUrl: "https://vintexc-ui-taiwo-dominion.vercel.app/",
      codeUrl: "https://github.com/taiwodominion/vintexc-ui",
    },
    {
      title: "Flow Pay - Dashboard Ui",
      description:
        "A sleek, virtual top up platform offering instant airtime/data, exam pins, and bill payments with exclusive discounts, showcased through a responsive, conversion-optimized Dashboard.",
      technologies: ["React.js", "Css3", "Responsive Design"],
      image: flowPayDashboard,
      liveUrl: "https://taiwo-dominion-flow-pay-dashboard-ui.vercel.app/",
      codeUrl: "https://github.com/taiwodominion/Flow-Pay-Dashboard-Ui",
    },
    {
      title: "TD-Store",
      description: "A full-stack e-commerce platform featuring a real-time product management system. Integrated Firebase for live data synchronization, cloud image storage, and secure user authentication, complemented by a custom-built admin dashboard for inventory control.",
      technologies: ["React.js", "CSS", "Firebase" , "Responsive Design", "API Integration"],
      image: tdstoreImg,
      liveUrl: "https://td-store.vercel.app/",
      codeUrl: "https://github.com/taiwodominion/TD-Store",
    },
    {
      title: "Roland Gideon Portfolio",
      description: "A high-converting design solution rooted in deep user research, aimed at solving complex pain points through intuitive navigation and clean UI.",
      technologies: ["React.js", "Css3", "GSAP", "Responsive Design", "API Integration"],
      image: gideonPortfolioImg,
      liveUrl: "https://roland-gideon-portfolio.vercel.app/",
      codeUrl: "https://github.com/taiwodominion/Roland-Gideon-Portfolio",
    },
    {
      title: "NexusFlow",
      description: "A high-fidelity, conversion-optimized React engine designed for B2B SaaS acquisition..",
      technologies: ["React.js", "CSS3" , "Responsive Design"],
      image: nexuxImage,
      liveUrl: "https://nexuxflow.vercel.app/",
      codeUrl: "https://github.com/taiwodominion/Nexuxflow",
    },
    {
      title: "NovaReach",
      description: "A responsive, dark-themed digital marketing site...",
      technologies: ["CSS", "JavaScript", "HTML"],
      image: novaImage,
      liveUrl: "https://nova-reach-sigma.vercel.app/",
      codeUrl: "https://github.com/taiwodominion/NovaReach",
    },
    {
      title: "Chef-s Table",
      description:
        "Modern culinary storytelling meets refined technique - a chef's personal table of seasonal recipes, notes and kitchen craft",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: chefImage,
      liveUrl: "https://chef-s-table-nine.vercel.app/",
      codeUrl: "https://github.com/taiwodominion/Chef-s-Table",
    },
    {
      title: "Flow Pay - Landing Page",
      description:
        "A sleek, student-focused VTU platform offering instant airtime/data, exam pins, and bill payments with exclusive discounts, showcased through a responsive, conversion-optimized landing page.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      image: flowImage,
      liveUrl: "https://flow-pay-landing-page.vercel.app/",
      codeUrl: "https://github.com/taiwodominion/Flow-Pay---Landing-Page",
    },
  ];

  return (
    <section id="projects">
      <div className="container">
        <div className="projects-wrapper">
          <div className="projects-text">
            <h1 className="section-title">Projects i've worked on.</h1>
            <p>
              Each project represents a unique challenge and learning
              opportunity in my journey as a frontend developer. From responsive
              landing pages to complex web applications, I've poured attention
              to detail and clean code into every creation.
            </p>
            {/* <p>
              Below you'll find a collection of my work showcasing modern design
              principles, responsive layouts, and user-focused experiences. Each
              project demonstrates my ability to transform ideas into
              functional, visually appealing digital solutions.
            </p> */}
            <p>
              I believe in building products that not only look great but also
              deliver exceptional user experiences through intuitive interfaces
              and smooth interactions.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <a
                    href={project.liveUrl}
                    className="image-overlay"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <span>View Project</span>
                  </a>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={project.liveUrl}
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.codeUrl}
                      className="btn btn-outline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
