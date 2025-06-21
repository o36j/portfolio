import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { sendContactEmail } from '../services/emailService';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);
    setSubmitSuccess(false);
    
    try {
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        setSubmitError(true);
        setErrorMessage('Failed to send message. Please try again later.');
      }
    } catch (error) {
      setSubmitError(true);
      setErrorMessage('An unexpected error occurred. Please try again later.');
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section className="py-5 bg-black" id="contact">
      <div className="container py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-5"
        >
          <h2 className="display-4 fw-bold mb-4">Contact Me</h2>
          <p className="lead text-gray-300">
            Interested in working together? Feel free to reach out using the form below or through my contact details.
          </p>
        </motion.div>
        
        <div className="row g-5">
          {/* Contact Form */}
          <div className="col-lg-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="needs-validation">
                {submitSuccess && (
                  <div className="alert alert-success">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Thank you! Your message has been sent successfully. I'll get back to you soon.
                  </div>
                )}
                
                {submitError && (
                  <div className="alert alert-danger">
                    <i className="bi bi-exclamation-triangle-fill me-2"></i>
                    {errorMessage || 'Something went wrong. Please try again later.'}
                  </div>
                )}
                
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label text-gray-300">Name</label>
                    <input
                      type="text"
                      className="form-control bg-black text-white border-dark"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label text-gray-300">Email</label>
                    <input
                      type="email"
                      className="form-control bg-black text-white border-dark"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label text-gray-300">Subject</label>
                  <input
                    type="text"
                    className="form-control bg-black text-white border-dark"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="form-label text-gray-300">Message</label>
                  <textarea
                    className="form-control bg-black text-white border-dark"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn btn-light px-4 py-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </motion.div>
          </div>
          
          {/* Contact Info */}
          <div className="col-lg-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="p-4 bg-black border border-dark rounded">
                <h3 className="fs-3 fw-bold mb-4">Contact Information</h3>
                
                <ul className="list-unstyled mb-5">
                  <ContactItem icon={<FaEnvelope />} title="Email">
                    osamasaud33@gmail.com
                  </ContactItem>
                  
                  <ContactItem icon={<FaPhone />} title="Phone">
                    +90 552 659 03 05
                  </ContactItem>
                  
                  <ContactItem icon={<FaLinkedin />} title="LinkedIn">
                    <a 
                      href="https://www.linkedin.com/in/osama-m-126355227/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white text-decoration-none"
                    >
                      linkedin.com/in/osama-m-126355227
                    </a>
                  </ContactItem>
                  
                  <ContactItem icon={<FaMapMarkerAlt />} title="Location">
                    Ankara, Türkiye
                  </ContactItem>
                </ul>
                
                <h4 className="fs-5 fw-bold mb-3">Languages</h4>
                <p className="text-gray-400">
                  Arabic (Native)<br />
                  English (Fluent)<br />
                  Turkish (Intermediate)<br />
                  Somali (Native)
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, title, children }) => {
  return (
    <li className="mb-4">
      <p className="mb-0 d-flex align-items-center text-gray-300">
        <span className="fs-4 me-3 text-white">{icon}</span>
        <span className="fw-medium">{title}</span>
      </p>
      <p className="ps-5 mb-0 text-gray-400">
        {children}
      </p>
    </li>
  );
};

export default Contact; 