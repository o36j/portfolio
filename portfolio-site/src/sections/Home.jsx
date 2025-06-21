import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getAssetPath } from '../config';

const Home = () => {
  return (
    <section className="position-relative min-vh-100 d-flex align-items-center" id="home">
      {/* Background */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-black"></div>
      
      {/* Content */}
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <motion.h1 
              className="display-3 fw-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Osama Saud
            </motion.h1>
            <motion.h2 
              className="fs-2 text-gray-300 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Full-Stack Developer & Data Analyst
            </motion.h2>
            <motion.p 
              className="lead text-gray-400 mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Computer Engineering graduate specializing in MERN stack development and advanced data analysis. Experienced with Python, Pandas, NumPy, Tableau, and machine learning frameworks to extract meaningful insights from complex datasets.
            </motion.p>
            <motion.div 
              className="d-flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a href="#projects" className="btn btn-light px-4 py-2">
                View Projects
              </a>
              <a href="#contact" className="btn btn-outline-light px-4 py-2">
                Contact Me
              </a>
            </motion.div>
          </div>
          
          <div className="col-lg-5 d-flex justify-content-center">
            <motion.div 
              animate={{ 
                y: [0, -15, 0],
                rotateZ: [0, -2, 0, 2, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 5,
                ease: "easeInOut"
              }}
              className="position-relative"
            >
              <img 
                src={getAssetPath("borderless me.png")} 
                alt="Osama Saud" 
                className="img-fluid"
                style={{ 
                  maxWidth: '380px',
                  filter: 'drop-shadow(0 10px 15px rgba(0, 0, 0, 0.7))'
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="position-absolute bottom-0 start-50 translate-middle-x mb-4"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="d-flex justify-content-center">
          <div className="border border-2 border-light border-opacity-50 rounded-pill p-2 d-flex justify-content-center" style={{ width: '2rem', height: '3rem' }}>
            <div className="bg-light bg-opacity-50 rounded-circle" style={{ width: '0.5rem', height: '0.75rem' }}></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home; 