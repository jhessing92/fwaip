import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark' }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div 
      className="flex items-center cursor-pointer"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={scrollToTop}
    >
      <motion.img 
        src="https://imgur.com/mXbBqO6.png" 
        alt="Flywheel AI Logo" 
        className="h-12 w-auto"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
    </motion.div>
  );
};