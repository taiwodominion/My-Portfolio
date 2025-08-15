import "../css/About.css"

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h1 className="section-title">About Me</h1>
        
        <div className="about">
          <div className="about-content">
            <div className="about-text">
              <p>I'm a passionate frontend developer with 1+ years of experience crafting modern web applications. What began as curiosity about how websites work has blossomed into a full-fledged love for creating digital experiences that users adore.</p>
              <p>I specialize in crafting pixel-perfect, responsive interfaces with clean, efficient code. I believe in the power of design and technology to create meaningful experiences that make people's lives better.</p>
              <p>When I'm not coding, you can find me reading tech blogs, gaming with friends, or exploring new JavaScript frameworks in my free time.</p>
              
              <div className="about-skills">
                <span className="skill">HTML5</span>
                <span className="skill">CSS3</span>
                <span className="skill">JavaScript</span>
                <span className="skill">React.Js</span>
                <span className="skill">UI/UX</span>
                <span className="skill">Responsive Design</span>
                <span className="skill">Web Performance</span>
                <span className="skill">API Integration</span>
                <span className="skill">Git</span>
                <span className="skill">Accessibility</span>
              </div>
            </div>
            
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Taiwo Dominion working" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;