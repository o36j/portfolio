import { FaGithub, FaLinkedin } from 'react-icons/fa';
import InfinityLogo from './InfinityLogo';

const Footer = ({ onAboutClick, onProjectsClick, onResumeClick, onContactClick }) => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-5 border-top border-dark">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo(0, 0);
              }}
              className="fs-4 fw-semibold text-white text-decoration-none d-flex align-items-center"
            >
              <div className="me-2">
                <InfinityLogo size={30} animated={false} />
              </div>
              <span>Osama Saud</span>
            </a>
            <p className="mt-2 text-gray-400">
              Full-Stack Developer | Data Analyst | Computer Engineering
            </p>
          </div>
          
          <div className="col-md-6 d-flex flex-column align-items-start align-items-md-end">
            <ul className="nav mb-3">
              <li className="nav-item">
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onAboutClick) onAboutClick();
                  }}
                  className="nav-link text-white-50 px-2"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onProjectsClick) onProjectsClick();
                  }}
                  className="nav-link text-white-50 px-2"
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onResumeClick) onResumeClick();
                  }}
                  className="nav-link text-white-50 px-2"
                >
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onContactClick) onContactClick();
                  }}
                  className="nav-link text-white-50 px-2"
                >
                  Contact
                </a>
              </li>
            </ul>
            
            <div className="d-flex gap-3 mb-3">
              <a 
                href="https://github.com/o36j" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white fs-4 hover-text-white"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/osama-m-126355227/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white fs-4 hover-text-white"
              >
                <FaLinkedin />
              </a>
            </div>
            <p className="text-gray-400">
              © {year} Osama Saud. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 