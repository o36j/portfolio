import { motion } from 'framer-motion';
import { FaFileDownload } from 'react-icons/fa';
import { getAssetPath } from '../config';

const Resume = () => {
  return (
    <section className="py-5 bg-black" id="resume">
      <div className="container py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-5"
        >
          <h2 className="display-4 fw-bold mb-4">Resume</h2>
          <div className="row align-items-center mb-4">
            <div className="col-md-8">
              <p className="lead text-gray-300">
                View my professional experience, skills, and qualifications. Download the full resume as a PDF.
              </p>
            </div>
            <div className="col-md-4 d-flex justify-content-md-end mt-3 mt-md-0">
              <a 
                href={getAssetPath("cv.pdf")} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-light d-flex align-items-center gap-2 px-4 py-2"
              >
                <FaFileDownload /> Download PDF
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-black border border-dark p-0"
          style={{ height: "700px", maxWidth: "100%" }}
        >
          <iframe
            src={getAssetPath("cv.pdf")}
            title="Resume"
            className="w-100 h-100 border-0"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-5"
        >
          <h3 className="fs-2 fw-bold mb-4">Certifications</h3>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div className="col">
              <div className="p-4 border border-dark rounded bg-black bg-opacity-70">
                <h4 className="fs-5 fw-bold">Machine Learning Scientist with Python</h4>
                <p className="text-gray-400 mb-0">DataCamp</p>
              </div>
            </div>
            <div className="col">
              <div className="p-4 border border-dark rounded bg-black bg-opacity-70">
                <h4 className="fs-5 fw-bold">Extreme Gradient Boosting with XGBoost</h4>
                <p className="text-gray-400 mb-0">DataCamp</p>
              </div>
            </div>
            <div className="col">
              <div className="p-4 border border-dark rounded bg-black bg-opacity-70">
                <h4 className="fs-5 fw-bold">CyberOps Training</h4>
                <p className="text-gray-400 mb-0">Cisco Networking Academy</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume; 