import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaLock, FaCode, FaJava, FaChartBar, FaTable, FaChartLine, FaChartPie, FaChartArea, FaServer, FaTools, FaFileExcel, FaFileCode } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTypescript, SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, SiTableau } from 'react-icons/si';

const About = () => {
  const skillCategories = [
    {
      name: "Data Analysis",
      skills: [
        { name: 'Pandas', icon: <SiPandas />, category: 'Data Analysis' },
        { name: 'NumPy', icon: <SiNumpy />, category: 'Data Analysis' },
        { name: 'Tableau', icon: <SiTableau />, category: 'Data Analysis' },
        { name: 'Power BI', icon: <FaChartPie />, category: 'Data Analysis' },
        { name: 'KNIME', icon: <FaTools />, category: 'Data Analysis' },
        { name: 'Data Visualization', icon: <FaChartBar />, category: 'Data Analysis' },
        { name: 'ETL Processes', icon: <FaTable />, category: 'Data Analysis' },
        { name: 'Statistical Analysis', icon: <FaChartLine />, category: 'Data Analysis' },
        { name: 'Jupyter Notebook', icon: <FaFileCode />, category: 'Data Analysis' },
        { name: 'R', icon: <FaCode />, category: 'Data Analysis' },
      ]
    },
    {
      name: "Machine Learning",
      skills: [
        { name: 'TensorFlow', icon: <SiTensorflow />, category: 'Machine Learning' },
        { name: 'scikit-learn', icon: <SiScikitlearn />, category: 'Machine Learning' },
        { name: 'Predictive Modeling', icon: <FaChartArea />, category: 'Machine Learning' },
        { name: 'Data Mining', icon: <FaDatabase />, category: 'Machine Learning' },
      ]
    },
    {
      name: "Web Development",
      skills: [
        { name: 'React.js', icon: <FaReact />, category: 'Frontend' },
        { name: 'Node.js', icon: <FaNodeJs />, category: 'Backend' },
        { name: 'Express.js', icon: <SiExpress />, category: 'Backend' },
        { name: 'TypeScript', icon: <SiTypescript />, category: 'Programming' },
      ]
    },
    {
      name: "Databases",
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, category: 'Database' },
        { name: 'SQL', icon: <FaDatabase />, category: 'Database' },
        { name: 'MySQL', icon: <FaServer />, category: 'Database' },
        { name: 'PostgreSQL', icon: <FaDatabase />, category: 'Database' },
      ]
    },
    {
      name: "Programming & Other",
      skills: [
        { name: 'Python', icon: <FaPython />, category: 'Programming' },
        { name: 'Java', icon: <FaJava />, category: 'Programming' },
        { name: 'Cybersecurity', icon: <FaLock />, category: 'Security' },
      ]
    }
  ];
  
  const education = [
    {
      degree: 'Bachelor of Science in Computer Engineering',
      institution: 'Ostim Teknik University',
      year: '2021 - 2025',
    },
  ];
  
  const experience = [
    {
      role: 'Software Developer Intern',
      company: 'BLUESENSE',
      period: 'September 2025 - Present',
      description: 'Developed Android applications using Kotlin and Java, improving UI responsiveness and app performance. Contributed to front-end development of the company website using React and JavaScript. Collaborated with engineers to debug, test, and optimize mobile app features.',
    },
    {
      role: 'Machine Learning Scientist Intern',
      company: 'DataCamp',
      period: 'March 2025 - June 2025',
      description: 'Built and evaluated machine learning models using Python, scikit-learn, and XGBoost. Focused on classification and regression tasks, including data preprocessing and model tuning.',
    },
    {
      role: 'Machine Learning Intern',
      company: 'DataCamp',
      period: 'June 2024 - July 2024',
      description: 'Analyzed large datasets using Python and SQL, extracting insights and building predictive models. Utilized Pandas, NumPy, and Matplotlib for data manipulation and visualization.',
    },
    {
      role: 'Associate Data Science Intern',
      company: 'DataCamp',
      period: 'January 2024 - February 2024',
      description: 'Worked on ML projects using Python, TensorFlow, and Scikit-learn. Handled data cleaning, model evaluation, and optimization processes.',
    },
    {
      role: 'Cybersecurity Intern',
      company: 'Cisco Networking Academy',
      period: 'June 2023 - July 2023',
      description: 'Focused on network security, risk management, and threat detection. Completed hands-on labs to simulate network attacks and defense strategies.',
    },
    {
      role: 'Cybersecurity Blue Team Intern',
      company: 'MAYDATA Bilgi Teknolojileri',
      period: 'January 2023 - March 2023',
      description: 'Monitored networks, detected threats, and collaborated on incident response protocols.',
    },
    {
      role: 'Cybersecurity Red Team Intern',
      company: 'MAYDATA Bilgi Teknolojileri',
      period: 'June 2022 - August 2022',
      description: 'Conducted penetration tests, used Nmap and Metasploit for vulnerability assessment.',
    },
  ];
  
  return (
    <section className="py-5 bg-black" id="about">
      <div className="container py-5">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-5"
        >
          <h2 className="display-4 fw-bold mb-4">About Me</h2>
          <div className="row">
            <div className="col-lg-8">
              <p className="lead text-gray-300 mb-3">
                I'm a Computer Engineering graduate from Ostim Teknik University with comprehensive experience in full-stack web development using the MERN stack, machine learning, and cybersecurity.
              </p>
              <p className="lead text-gray-300 mb-3">
                My expertise spans both front-end and back-end development, allowing me to create seamless user experiences while ensuring solid architectural foundations. I'm adept at designing, developing, and deploying secure, scalable applications that meet business requirements.
              </p>
              <p className="lead text-gray-300">
                With a strong foundation in software engineering principles combined with hands-on expertise in data analysis and cybersecurity best practices, I'm passionate about continuous learning and applying innovative technologies to drive impactful solutions.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Skills section */}
        <motion.section 
          className="mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="fs-1 fw-bold mb-4">Skills</h3>
          
          {skillCategories.map((category, catIndex) => (
            <div key={category.name} className="mb-5">
              <h4 className="fs-3 fw-bold mb-4 text-gray-300">{category.name}</h4>
              <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4">
                {category.skills.map((skill, index) => (
                  <div className="col" key={skill.name}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: (catIndex * 0.1) + (index * 0.05) }}
                      viewport={{ once: true }}
                      className="p-3 border border-dark rounded bg-black bg-opacity-70 hover-scale text-center h-100"
                    >
                      <div className="fs-1 mb-2">{skill.icon}</div>
                      <h4 className="fw-medium fs-5">{skill.name}</h4>
                      <span className="badge bg-dark">{skill.category}</span>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.section>
        
        {/* Education and Experience sections in 2 columns */}
        <div className="row g-4">
          <div className="col-lg-4">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="fs-1 fw-bold mb-4">Education</h3>
              <div className="d-flex flex-column gap-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="p-4 border border-dark rounded bg-black bg-opacity-70"
                  >
                    <h4 className="fs-4 fw-bold mb-2">{edu.degree}</h4>
                    <p className="text-gray-300 mb-1">{edu.institution}</p>
                    <p className="text-gray-400">{edu.year}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
          
          <div className="col-lg-8">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="fs-1 fw-bold mb-4">Experience</h3>
              <div className="d-flex flex-column gap-4">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="p-4 border border-dark rounded bg-black bg-opacity-70"
                  >
                    <h4 className="fs-4 fw-bold mb-2">{exp.role}</h4>
                    <div className="d-flex justify-content-between mb-3">
                      <p className="text-gray-300">{exp.company}</p>
                      <p className="text-gray-400">{exp.period}</p>
                    </div>
                    <p className="text-gray-400">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 