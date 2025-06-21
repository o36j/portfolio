import React from 'react';
import { motion } from 'framer-motion';

const InfinityLogo = ({ size = 40, color = '#ffffff', animated = true }) => {
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { 
          type: "spring", 
          duration: 2,
          bounce: 0,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0.5
        },
        opacity: { duration: 0.5 }
      }
    }
  };

  if (!animated) {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 60" 
        width={size} 
        height={size * 0.6}
        style={{ display: 'block' }}
      >
        <path 
          d="M30,30 C20,15 0,15 0,30 C0,45 20,45 30,30 C40,15 60,15 70,30 C80,45 100,45 100,30 C100,15 80,15 70,30 C60,45 40,45 30,30 Z" 
          fill={color} 
        />
      </svg>
    );
  }

  return (
    <motion.svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 60" 
      width={size} 
      height={size * 0.6}
      initial="hidden"
      animate="visible"
      style={{ display: 'block' }}
    >
      <motion.path 
        d="M30,30 C20,15 0,15 0,30 C0,45 20,45 30,30 C40,15 60,15 70,30 C80,45 100,45 100,30 C100,15 80,15 70,30 C60,45 40,45 30,30 Z" 
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        variants={pathVariants}
      />
    </motion.svg>
  );
};

export default InfinityLogo; 