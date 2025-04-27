import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import { Logo } from './ui/Logo';
import { useForm } from '../context/FormContext';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const { openForm } = useForm();
  
  const [isScrolled, setIsScrolled] = useState(false);

  // Listen for scroll position to change header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDemoRequest = () => {
    openForm('strategy-session', 'Header', 'default', 'Schedule a Demo');
  };
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      const closeMenu = () => setIsMobileMenuOpen(false);
      document.body.addEventListener('click', closeMenu);
      return () => document.body.removeEventListener('click', closeMenu);
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary-950/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-3 md:py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Logo variant="light" />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#features" 
            className="text-sm font-medium text-cream-100 hover:text-cream-50 transition-colors"
            onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}
          >
            Features
          </a>
          <a 
            href="#solutions" 
            className="text-sm font-medium text-cream-100 hover:text-cream-50 transition-colors"
            onClick={(e) => { e.preventDefault(); scrollToSection('solutions'); }}
          >
            Industry Solutions
          </a>
          <a 
            href="#contact" 
            className="text-sm font-medium text-cream-100 hover:text-cream-50 transition-colors"
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
          >
            Contact
          </a>
          <Button variant="primary" onClick={handleDemoRequest}>Schedule a Demo</Button>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-cream-100 hover:text-cream-50 focus:outline-none p-2 -mr-2" 
          onClick={(e) => { 
            e.stopPropagation();
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X size={24} className="transition-all" />
          ) : (
            <Menu size={24} className="transition-all" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-primary-950/95 backdrop-blur-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="container mx-auto px-4 py-6 flex flex-col space-y-5"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <a 
                href="#features" 
                className="text-base font-medium py-2 text-cream-100 hover:text-cream-50 transition-colors"
                onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}
              >
                Features
              </a>
              <a 
                href="#solutions" 
                className="text-base font-medium py-2 text-cream-100 hover:text-cream-50 transition-colors"
                onClick={(e) => { e.preventDefault(); scrollToSection('solutions'); }}
              >
                Industry Solutions
              </a>
              <a 
                href="#contact" 
                className="text-base font-medium py-2 text-cream-100 hover:text-cream-50 transition-colors"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              >
                Contact
              </a>
              <Button 
                variant="primary" 
                className="w-full mt-2 py-3"
                onClick={() => {
                  handleDemoRequest();
                  setIsMobileMenuOpen(false);
                }}
              >
                Schedule a Demo
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};