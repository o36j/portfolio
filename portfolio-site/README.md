# Modern Portfolio Website

A sleek, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. This template is perfect for showcasing your work as a developer, designer, or creative professional.

## Features

- **Responsive Design**: Optimized for all screen sizes and devices
- **Modern UI/UX**: Minimalist black & white design with smooth animations
- **React Router**: Client-side routing for seamless navigation
- **Framer Motion**: Elegant page transitions and animations
- **Tailwind CSS**: Utility-first CSS framework for custom styling
- **PDF Viewer**: Built-in resume viewer with download option
- **Contact Form**: Ready-to-use contact form
- **SEO Optimized**: Pre-configured meta tags for better search engine visibility
- **Easy Deployment**: Configuration files for GitHub Pages, Netlify, and Vercel

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or Yarn

### Installation

1. Clone the repository or download the zip file
   ```
   git clone <repository-url>
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Customization

1. **Personal Information**: Update the information in `src/config.js` with your details.
2. **Content**: Modify the page components in the `src/pages` directory.
3. **Resume**: Replace `public/cv.pdf` with your own resume.
4. **Profile Picture**: Replace `public/me.png` with your profile picture.
5. **Projects**: Update the project data in `src/pages/Projects.jsx`.

## Deployment

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Push your code to a GitHub repository.
2. Log in to Netlify and select "New site from Git".
3. Choose your repository and configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to a GitHub repository.
2. Import your repository on Vercel.
3. The project will be automatically configured using the `vercel.json` file.

### GitHub Pages

1. Update the `base` in `vite.config.js` to match your repository name:
   ```js
   base: '/your-repo-name/',
   ```

2. Set up GitHub Actions by creating a `.github/workflows/deploy.yml` file.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com/)
- [React PDF](https://react-pdf.org/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Contact Form Setup with EmailJS

This portfolio uses [EmailJS](https://www.emailjs.com/) to send emails directly from the contact form without requiring a server.

### Steps to Set Up EmailJS:

1. **Create an EmailJS Account**:
   - Sign up for a free account at [EmailJS](https://www.emailjs.com/)
   - Verify your account through the email they send

2. **Connect Your Email Service**:
   - In the EmailJS dashboard, go to "Email Services"
   - Click "Add New Service" and choose your email provider (Gmail, Outlook, etc.)
   - Follow the authentication steps to connect your email account

3. **Create an Email Template**:
   - Go to "Email Templates" and create a new template
   - Design your email template using these variables:
     - `{{from_name}}` - The sender's name
     - `{{reply_to}}` - The sender's email address
     - `{{subject}}` - The email subject
     - `{{message}}` - The message content

4. **Configure Environment Variables**:
   - Create a `.env` file in the root directory with the following variables:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```
   - Replace the values with your actual EmailJS credentials:
     - `your_service_id` - From the Email Services tab
     - `your_template_id` - From the Email Templates tab
     - `your_public_key` - From Account > API Keys

   - Alternatively, you can directly replace the placeholder values in `src/services/emailService.js`:
     ```javascript
     const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_ACTUAL_SERVICE_ID';
     const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_ACTUAL_TEMPLATE_ID';
     const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_ACTUAL_PUBLIC_KEY';
     ```

5. **Test the Form**:
   - After deployment, test the form to ensure emails are being sent correctly
   - Check your inbox to confirm you're receiving submissions

Note: The free plan includes 200 emails per month, which is sufficient for most portfolio sites.
