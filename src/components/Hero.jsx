import { FaHtml5, FaCss3Alt, FaJs, FaMobileAlt, FaGitAlt, FaReact, FaNetworkWired } from 'react-icons/fa';
import heroImage from "../assets/my_animated_pic.jpg"
import "../css/Hero.css"

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>Hi, I'm Taiwo Dominion</h1>
          <h2>A Frontend Developer who crafts elegant web experiences.</h2>
          <p>I build beautiful, responsive, and user-friendly websites with a focus on performance and accessibility.</p>
          
          <div className="hero-btns">
            <a href="#projects" className="btn">View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
          
          <div className="tech-stack">
            <div className="tech-item">
              <FaHtml5 />
              <span>HTML5</span>
            </div>
            <div className="tech-item">
              <FaCss3Alt />
              <span>CSS3</span>
            </div>
            <div className="tech-item">
              <FaJs />
              <span>JavaScript</span>
            </div>
            <div className="tech-item">
              <FaReact />
              <span>React.Js</span>
            </div>
            <div className="tech-item">
              <FaMobileAlt />
              <span>Responsive</span>
            </div>
            <div className="tech-item">
              <FaGitAlt />
              <span>Git</span>
            </div>
            <div className="tech-item">
              <FaNetworkWired />
              <span>Api Integration</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-image-container">
        <img 
          src={heroImage} 
          alt="Taiwo Dominion" 
          className="profile-image"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;