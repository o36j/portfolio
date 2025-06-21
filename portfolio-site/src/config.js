// Site configuration
const siteConfig = {
  // Basic site info
  name: "John Doe",
  title: "John Doe - Full-Stack Developer & Data Analyst",
  description: "Professional portfolio of John Doe, a full-stack web developer and data analyst with expertise in MERN stack, Python, and machine learning.",
  url: "https://johndoe.portfolio.com", // Replace with your actual domain
  
  // Social media profiles
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "johndoe@example.com",
  },
  
  // SEO configuration
  seo: {
    keywords: [
      "full-stack developer",
      "data analyst",
      "web developer",
      "MERN stack",
      "React developer",
      "Node.js developer",
      "machine learning engineer",
      "computer engineering",
      "cybersecurity",
      "portfolio",
      "John Doe",
    ],
    metaImage: "/me.png",
    locale: "en_US",
  },
  
  // Navigation
  navigation: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Resume",
      path: "/resume",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ],
};

// Helper function to handle asset paths for GitHub Pages deployment
export const getAssetPath = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // For development, use the path as is
  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  }
  // For production, prefix with the base path
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

export default siteConfig; 