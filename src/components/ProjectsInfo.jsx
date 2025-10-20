import novaImage from "../assets/NovaReach.png";
import vintexcImage from "../assets/vintexc-hero.png";
import chefImage from "../assets/Chef-s-Table.png";
import flowImage from "../assets/flowpay1.png";
import flowPayDashboard from "../assets/flow-pay-dashboard.png";
import "../css/ProjectsInfo.css";

const Projects = () => {
  const projects = [
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
      title: "Vintexc",
      description:
        "Vintexc is a modern and intuitive cryptocurrency web application designed to keep users informed, empowered, and supported as they navigate the world of digital assets.",
      technologies: [
        "React.js",
        "Css3",
        "Api Integration",
        "Responsive Design",
      ],
      image: vintexcImage,
      liveUrl: "https://vintexc-ui-taiwo-dominion.vercel.app/",
      codeUrl: "https://github.com/taiwodominion/vintexc-ui",
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
              I'm a passionate frontend developer crafting modern web
              applications. What began as curiosity about how websites work has
              blossomed into a full-fledged love for creating digital
              experiences that users adore.
            </p>
            <p>
              I specialize in crafting pixel-perfect, responsive interfaces with
              clean, efficient code. I believe in the power of design and
              technology to create meaningful experiences that make people's
              lives better.
            </p>
            <p>
              When I'm not coding, you can find me reading tech blogs, gaming
              with friends, or exploring new JavaScript frameworks in my free
              time.
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
