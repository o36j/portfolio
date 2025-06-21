import emailjs from '@emailjs/browser';

// Get environment variables - replace these comments with actual values before deployment
// if environment variables are not available
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_45ek921';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_tvjato5';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'xKbZOR2L9QacdY5ef';

/**
 * Sends an email using EmailJS
 * @param {Object} formData - The form data containing name, email, subject, and message
 * @returns {Promise} - Promise resolving to the EmailJS response
 */
export const sendContactEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );
    
    return { success: true, response };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error };
  }
};

/**
 * Initialize EmailJS
 */
export const initEmailService = () => {
  emailjs.init(PUBLIC_KEY);
}; 