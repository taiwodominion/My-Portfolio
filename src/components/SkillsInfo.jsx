import "../css/SkillsInfo.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

const About = () => {
  return (
    <section id="skills">
      <div className="container">

        <div className="skills-wrapper">
          <div className="skills-content">
            <div className="skills-text">
              <h1 className="section-title">Technologies i mostly work with</h1>
              <p>
                I'm a passionate frontend developer 
                crafting modern web applications. What began as curiosity about
                how websites work has blossomed into a full-fledged love for
                creating digital experiences that users adore.
              </p>
              <p>
                I specialize in crafting pixel-perfect, responsive interfaces
                with clean, efficient code. I believe in the power of design and
                technology to create meaningful experiences that make people's
                lives better.
              </p>
              <p>
                When I'm not coding, you can find me reading tech blogs, gaming
                with friends, or exploring new JavaScript frameworks in my free
                time.
              </p>
            </div>

            <div className="tech-skills">
              <span className="skill">
                <FaHtml5 color="red"/>
                HTML5</span>
              <span className="skill">
                <FaCss3Alt color="blue"/>
                CSS3</span>
              <span className="skill">
                <FaJs color="#F7DF1E" />
                JavaScript</span>
              <span className="skill">
                 <FaReact color="#61DAFB" />
                React.Js</span>
              <span className="skill">
                <FaGitAlt color="red"/>
                Git</span>
              <span className="skill">
                <SiFirebase color="#FFCA28"/>
                Firebase</span>
              <span className="skill">Responsive Design</span>
              <span className="skill">Web Performance</span>
              <span className="skill">Design to code</span>
              <span className="skill">Accessibility</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
