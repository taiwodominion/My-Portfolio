import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import "../css/Header.css"
import { FaCode, FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  // const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('about');
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.replace('/', '').replace('#', '');
    if (currentPath && ['about', 'skills', 'projects', 'contact'].includes(currentPath)) {
      setActiveLink(currentPath);
    } else {
      setActiveLink('about');
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const toggleTheme = () => {
  //   setDarkMode(!darkMode);
  //   document.body.classList.toggle('dark-mode');
  // };

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
          <Link to="/" className="logo" onClick={() => handleLinkClick('about')}>
            <FaCode className="logo-icon" />
            <span>Taiwo Dominion</span>
          </Link>
          
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li>
              <Link 
                to="/" 
                onClick={() => handleLinkClick('about')} 
                className={activeLink === 'about' ? 'active' : ''}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/skills" 
                onClick={() => handleLinkClick('skills')} 
                className={activeLink === 'skills' ? 'active' : ''}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                onClick={() => handleLinkClick('projects')} 
                className={activeLink === 'projects' ? 'active' : ''}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                onClick={() => handleLinkClick('contact')} 
                className={activeLink === 'contact' ? 'active' : ''}
              >
                Contact
              </Link>
            </li>
          </ul>
          
          {/* <div className="theme-toggle" id="themeToggle" onClick={toggleTheme}>
            <FaMoon className={darkMode ? 'active' : ''} />
          </div> */}
          
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