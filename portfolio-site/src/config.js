// Site configuration
const siteConfig = {
  // Basic site info
  name: "Osama Saud Mohamed",
  title: "Osama Saud Mohamed - Full-Stack Developer & Data Analyst",
  description: "Computer Engineering graduate with experience across software development (MERN stack), machine learning, and cybersecurity. Skilled in building full-stack applications, developing predictive ML models, and performing network security analysis.",
  url: "https://osamasaud.portfolio.com", // Replace with your actual domain
  
  // Social media profiles
  social: {
    github: "https://github.com/o36j",
    linkedin: "https://www.linkedin.com/in/osama-m-126355227/",
    email: "osamasaud33@gmail.com",
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
      "Osama Saud Mohamed",
      "Android developer",
      "Kotlin",
      "BlueSense",
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