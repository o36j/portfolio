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
