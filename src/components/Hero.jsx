import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaMobileAlt,
  FaGitAlt,
  FaGithub,
  FaReact,
  FaNetworkWired,
  FaWhatsapp,
} from "react-icons/fa";
import heroImage from "../assets/my_animated_pic.jpg";
import { useNavigate } from "react-router-dom";
import "../css/Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-content-head">
            <div className="hero-identity">
              <img src={heroImage} alt="my image" />
              <div className="hero-id-info">
                <h1>Hi, I'm Taiwo Dominion</h1>
                <p>A Frontend Developer</p>
              </div>
            </div>
            {/* <div className="social-links">
              <div className="social-link">
                <a
                href="https://github.com/taiwodominion"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <p>Github</p>
              </div>
              <div className="social-link">
                <a
                href="https://wa.me/+2349162527468" target="_blank"
                rel="noopener noreferrer" >
                <FaWhatsapp />
              </a>
              Whatsapp
              </div>
            </div> */}
<div className="social-links">
  <div className="social-link">
    <div className="icon">
      <a href="https://github.com/taiwodominion" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </div>
    <p className="label">Github</p>
  </div>

  <div className="social-link">
    <div className="icon">
      <a href="https://wa.me/+2349162527468" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
    </div>
    <p className="label">Whatsapp</p>
  </div>
</div>

          </div>
          <h2>I'm the bridge between user's needs and business goals.</h2>
          <p>
            I build beautiful, responsive, and user-friendly websites with a
            focus on performance and accessibility.
          </p>

          <div className="hero-btns">
            <button className="btn"
            onClick={() => navigate('/projects')}
            >
              View my work
            </button>
            <button className="btn btn-outline"
            onClick={() => navigate('/contact')}
            >
              Contact me
            </button>
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
