import { useState, useEffect } from 'react';
import "../css/Header.css"
import { FaCode, FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Optional: Update active link based on scroll position
      const sections = ['home', 'about', 'projects', 'contact'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    closeMobileMenu();
  };

  return (
    <header id="header" className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <nav className="navbar">
          <a href="/" className="logo" onClick={() => handleLinkClick('home')}>
            <FaCode className="logo-icon" />
            <span>Taiwo Dominion</span>
          </a>
          
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li>
              <a 
                href="#" 
                onClick={() => handleLinkClick('home')} 
                className={activeLink === 'home' ? 'active' : ''}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={() => handleLinkClick('about')} 
                className={activeLink === 'about' ? 'active' : ''}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                onClick={() => handleLinkClick('projects')} 
                className={activeLink === 'projects' ? 'active' : ''}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={() => handleLinkClick('contact')} 
                className={activeLink === 'contact' ? 'active' : ''}
              >
                Contact
              </a>
            </li>
          </ul>
          
          <div className="theme-toggle" id="themeToggle" onClick={toggleTheme}>
            <FaSun className={darkMode ? '' : 'active'} />
            <FaMoon className={darkMode ? 'active' : ''} />
          </div>
          
          <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} id="hamburger" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;