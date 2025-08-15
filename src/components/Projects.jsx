import "../css/Projects.css";
import novaImage from "../assets/NovaReach.png";
import chefImage from "../assets/Chef's-Table.png";


const Projects = () => {
  const projects = [
    {
      title: "NovaReach",
      description: "A responsive, dark-themed digital marketing site...",
      technologies: ["CSS", "JavaScript", "HTML"],
      image: novaImage,
      liveUrl: "https://nova-reach-sigma.vercel.app/",
      codeUrl: "https://github.com/taiwodominion/NovaReach" // Add code URL
    },
    {
       title: "Chef's Table",
       description: "Modern culinary storytelling meets refined tehnique -- a chef's personal table of seasonal recipes, notes and kitchen craft",
       technologies: ["HTML", "CSS", "JavaScript"],
       image: chefImage,
       liveUrl: "https://chef-s-table-nine.vercel.app/",
      codeUrl: "https://github.com/taiwodominion/Chef-s-Table"
    },
    {
      title: "Flow Pay - Landing Page",
      description: "A sleek, student-focused VTU platform offering instant airtime/data, exam pins, and bill payments with exclusive discounts, showcased through a responsive, conversion-optimized landing page.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",
      liveUrl: "https://flow-pay-landing-page.vercel.app/",
      codeUrl: "https://github.com/taiwodominion/Flow-Pay---Landing-Page"
    },
    // Add links to other projects...
  ];

  return (
    <section id="projects">
      <div className="container">
        <h1 className="section-title">My Projects</h1>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy" // Add lazy loading
                />
                {/* Overlay with link to live demo */}
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
    </section>
  );
};

export default Projects;