// import { useState, useEffect } from 'react';
// import { useNavigate, useLocation, Link } from 'react-router-dom';
// import "../css/Header.css"
// import { FaCode } from 'react-icons/fa';

// const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeLink, setActiveLink] = useState('about');
  
//   const location = useLocation();

//   useEffect(() => {
//     const currentPath = location.pathname.replace('/', '').replace('#', '');
//     if (currentPath && ['about', 'skills', 'projects', 'contact'].includes(currentPath)) {
//       setActiveLink(currentPath);
//     } else {
//       setActiveLink('about');
//     }
//   }, [location]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMobileMenu = (e) => {
//     e.stopPropagation();
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   const closeMobileMenu = () => {
//     setMobileMenuOpen(false);
//   };

//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//     closeMobileLink();
//   };

//   return (
//     <header id="header" className={`${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}>
//       <div className="header-container">
//         <nav className="navbar">
//           <Link to="/" className="logo" onClick={() => handleLinkClick('about')}>
//             <FaCode className="logo-icon" />
//             {/* <span>Taiwo Dominion</span> */}
//           </Link>
          
//           <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
//             <li>
//               <Link to="/" onClick={() => handleLinkClick('about')} className={activeLink === 'about' ? 'active' : ''}>About</Link>
//             </li>
//             <li>
//               <Link to="/skills" onClick={() => handleLinkClick('skills')} className={activeLink === 'skills' ? 'active' : ''}>Skills</Link>
//             </li>
//             <li>
//               <Link to="/projects" onClick={() => handleLinkClick('projects')} className={activeLink === 'projects' ? 'active' : ''}>Projects</Link>
//             </li>
//             <li>
//               <Link to="/contact" onClick={() => handleLinkClick('contact')} className={activeLink === 'contact' ? 'active' : ''}>Contact</Link>
//             </li>
//           </ul>          

//           <div 
//             className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} 
//             onClick={toggleMobileMenu}
//             aria-label="Menu"
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

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
    e.stopPropagation(); // Prevents clicks from bleeding into the Spline background
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
          {/* Balanced Top Section */}
          <div className="nav-top">
            <Link to="/" className="logo" onClick={() => handleLinkClick('about')}>
              <FaCode className="logo-icon" />
            </Link>
          </div>
          
          {/* Middle Navigation with Equal Slots */}
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

          {/* Balanced Bottom Section */}
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