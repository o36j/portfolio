import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'HealthBridge',
      description: 'Hospital Appointment Management System built with MERN stack. Features role-based access, EHR, messaging, notifications, chatbot, and real-time analytics dashboards.',
      image: 'https://placehold.co/600x400/111/FFF?text=HealthBridge',
      technologies: ['React', 'TypeScript', 'MongoDB', 'Node.js', 'JWT', 'Cloudinary', 'Zod', 'Chart.js'],
      category: 'web',
      github: 'https://github.com/o36j/healthbridge',
      demo: null,
    },
    {
      id: 2,
      title: 'QR Code Scanner Android App',
      description: 'Android application for scanning and generating QR codes. Built with Java using Android SDK and ZXing library.',
      image: 'https://placehold.co/600x400/111/FFF?text=QR+Code+Scanner',
      technologies: ['Java', 'Android SDK', 'ZXing'],
      category: 'mobile',
      github: 'https://github.com/o36j/QR-Code-Scanner-Android-App.git',
      demo: null,
    },
    {
      id: 3,
      title: 'Machine Learning Models',
      description: 'Collection of machine learning models built during my internship at DataCamp. Includes classification, regression, and optimization techniques.',
      image: 'https://placehold.co/600x400/111/FFF?text=ML+Models',
      technologies: ['Python', 'scikit-learn', 'XGBoost', 'TensorFlow', 'Pandas'],
      category: 'machine-learning',
      github: null,
      demo: null,
    },
    {
      id: 4,
      title: 'Sales Analytics Dashboard',
      description: 'Interactive data visualization dashboard for sales performance analysis. Features trend analysis, forecasting, and customizable KPI tracking.',
      image: 'https://placehold.co/600x400/111/FFF?text=Sales+Dashboard',
      technologies: ['Python', 'Pandas', 'NumPy', 'Tableau', 'SQL', 'ETL'],
      category: 'data-analysis',
      github: null,
      demo: null,
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React and Bootstrap. Features smooth animations and a modern design.',
      image: 'https://placehold.co/600x400/111/FFF?text=Portfolio+Website',
      technologies: ['React', 'Bootstrap', 'Framer Motion'],
      category: 'web',
      github: 'https://github.com/o36j',
      demo: null,
    },
    {
      id: 7,
      title: 'Network Security Tools',
      description: 'Collection of cybersecurity tools developed during my internship at Cisco and MAYDATA. Includes network monitoring and vulnerability assessment tools.',
      image: 'https://placehold.co/600x400/111/FFF?text=Security+Tools',
      technologies: ['Python', 'Nmap', 'Metasploit', 'Shell Scripting'],
      category: 'security',
      github: null,
      demo: null,
    },
    {
      id: 8,
      title: 'Smart Beauty App',
      description: 'Android application developed at BlueSense. A smart beauty app featuring advanced UI/UX design, real-time beauty analysis, and personalized recommendations. Built with Kotlin and Java, focusing on performance optimization and responsive design.',
      image: 'https://placehold.co/600x400/111/FFF?text=Smart+Beauty+App',
      technologies: ['Kotlin', 'Java', 'Android SDK', 'React', 'JavaScript'],
      category: 'mobile',
      github: null,
      demo: null,
    },
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
    
  return (
    <section className="py-5 bg-black" id="projects">
      <div className="container py-5">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-5"
        >
          <h2 className="display-4 fw-bold mb-4">Projects</h2>
          <p className="lead text-gray-300 mb-5">
            Explore my projects spanning web development, mobile apps, data analysis, machine learning, and cybersecurity.
          </p>
        </motion.div>
        
        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
          className="d-flex flex-wrap gap-2 mb-5"
        >
          <FilterButton 
            active={filter === 'all'} 
            onClick={() => setFilter('all')}
          >
            All
          </FilterButton>
          <FilterButton 
            active={filter === 'web'} 
            onClick={() => setFilter('web')}
          >
            Web Dev
          </FilterButton>
          <FilterButton 
            active={filter === 'mobile'} 
            onClick={() => setFilter('mobile')}
          >
            Mobile Apps
          </FilterButton>
          <FilterButton 
            active={filter === 'data-analysis'} 
            onClick={() => setFilter('data-analysis')}
          >
            Data Analysis
          </FilterButton>
          <FilterButton 
            active={filter === 'machine-learning'} 
            onClick={() => setFilter('machine-learning')}
          >
            Machine Learning
          </FilterButton>
          <FilterButton 
            active={filter === 'security'} 
            onClick={() => setFilter('security')}
          >
            Security
          </FilterButton>
        </motion.div>
        
        {/* Projects Grid */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FilterButton = ({ children, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${active ? 'btn-light' : 'btn-outline-light'} rounded-pill px-4`}
    >
      {children}
    </button>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="card h-100 bg-black border border-dark hover-scale">
        <div className="card-img-top">
          <img 
            src={project.image} 
            alt={project.title} 
            className="img-fluid w-100"
            style={{ height: "200px", objectFit: "cover" }}
          />
        </div>
        
        <div className="card-body">
          <h3 className="card-title fs-4 fw-bold">{project.title}</h3>
          <p className="card-text text-gray-300">
            {project.description}
          </p>
          
          <div className="mb-3 d-flex flex-wrap gap-1">
            {project.technologies.map((tech, i) => (
              <span 
                key={i}
                className="badge bg-dark"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="d-flex gap-3 mt-auto">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-decoration-none d-flex align-items-center text-white-50"
              >
                <FaGithub className="me-1" /> View Code
              </a>
            )}
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-decoration-none d-flex align-items-center text-white-50"
              >
                <FaExternalLinkAlt className="me-1" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects; 