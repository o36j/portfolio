import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import InfinityLogo from './InfinityLogo';

const Navbar = ({ onAboutClick, onProjectsClick, onResumeClick, onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'projects', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (
            scrollPosition >= offsetTop && 
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = (callback) => {
    setIsOpen(false);
    if (callback) {
      callback();
    }
  };

  const navbarClasses = `navbar navbar-expand-lg fixed-top ${
    scrolled ? 'bg-black bg-opacity-90 py-2 shadow' : 'bg-transparent py-3'
  } transition-all`;

  return (
    <nav className={navbarClasses}>
      <div className="container">
        <Link 
          to="/"
          onClick={() => handleLinkClick(() => window.scrollTo(0, 0))} 
          className="navbar-brand fw-bold text-white text-decoration-none d-flex align-items-center"
        >
          <div className="me-2">
            <InfinityLogo size={32} animated={true} />
          </div>
          <span>Osama Saud</span>
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          className="navbar-toggler text-white border-0"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          {/* Navigation */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-0 gap-lg-3 align-items-center">
            <li className="nav-item">
              <NavLink 
                active={activeSection === 'home'} 
                onClick={() => handleLinkClick(() => window.scrollTo(0, 0))}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                active={activeSection === 'about'} 
                onClick={() => handleLinkClick(onAboutClick)}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                active={activeSection === 'projects'} 
                onClick={() => handleLinkClick(onProjectsClick)}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                active={activeSection === 'resume'} 
                onClick={() => handleLinkClick(onResumeClick)}
              >
                Resume
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                active={activeSection === 'contact'} 
                onClick={() => handleLinkClick(onContactClick)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          
          <div className="d-flex ms-lg-4 mt-3 mt-lg-0">
            <a 
              href="https://github.com/o36j" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white fs-5 me-3 hover-text-white"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/osama-m-126355227/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white fs-5 hover-text-white"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ children, active, onClick }) => {
  return (
    <a 
      href="#"
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick();
      }}
      className={`nav-link text-white ${
        active 
          ? 'fw-medium border-bottom border-white' 
          : 'text-white-50 hover-text-white'
      }`}
    >
      {children}
    </a>
  );
};

export default Navbar; 