import { useRef } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="bg-dark text-white d-flex flex-column min-vh-100">
        <Navbar 
          onAboutClick={() => scrollToSection(aboutRef)}
          onProjectsClick={() => scrollToSection(projectsRef)}
          onResumeClick={() => scrollToSection(resumeRef)}
          onContactClick={() => scrollToSection(contactRef)}
        />
        <main className="flex-grow-1">
          <AnimatePresence mode="wait">
            {/* Home/Hero Section */}
            <Home />
            
            {/* About Section */}
            <div ref={aboutRef} id="about">
              <About />
            </div>
            
            {/* Projects Section */}
            <div ref={projectsRef} id="projects">
              <Projects />
            </div>
            
            {/* Resume Section */}
            <div ref={resumeRef} id="resume">
              <Resume />
            </div>
            
            {/* Contact Section */}
            <div ref={contactRef} id="contact">
              <Contact />
            </div>
          </AnimatePresence>
        </main>
        <Footer 
          onAboutClick={() => scrollToSection(aboutRef)}
          onProjectsClick={() => scrollToSection(projectsRef)}
          onResumeClick={() => scrollToSection(resumeRef)}
          onContactClick={() => scrollToSection(contactRef)}
        />
      </div>
    </Router>
  );
}

export default App;
