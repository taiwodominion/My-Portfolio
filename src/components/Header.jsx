import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import "../css/Header.css"
import { FaCode } from 'react-icons/fa';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('about');
  
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

  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMobileMenuOpen(false);
  };

  return (
    <header id="header" className={scrolled ? 'scrolled' : ''}>
      <div className="header-container">
        <nav className="navbar">
          <div className="nav-top">
            <Link to="/" className="logo" onClick={() => handleLinkClick('about')}>
              <FaCode className="logo-icon" />
            </Link>
          </div>
          
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <Link to="/" onClick={() => handleLinkClick('about')} className={activeLink === 'about' ? 'active' : ''}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/skills" onClick={() => handleLinkClick('skills')} className={activeLink === 'skills' ? 'active' : ''}>Skills</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" onClick={() => handleLinkClick('projects')} className={activeLink === 'projects' ? 'active' : ''}>Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" onClick={() => handleLinkClick('contact')} className={activeLink === 'contact' ? 'active' : ''}>Contact</Link>
            </li>
          </ul>          

          <div className="nav-bottom">
             <div className="nav-indicator"></div>
          </div>

          <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
            <span></span><span></span><span></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;