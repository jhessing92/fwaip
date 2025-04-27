import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { Logo } from './ui/Logo';
import { useForm } from '../context/FormContext';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openForm } = useForm();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleDemoRequest = () => {
    openForm('strategy-session', 'Header CTA', undefined, 'Schedule a Demo');
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-primary-950 py-3">
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
          className="md:hidden text-cream-100 hover:text-cream-50 focus:outline-none" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary-950">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-sm font-medium py-2 text-cream-100 hover:text-cream-50 transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}
            >
              Features
            </a>
            <a 
              href="#solutions" 
              className="text-sm font-medium py-2 text-cream-100 hover:text-cream-50 transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('solutions'); }}
            >
              Industry Solutions
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium py-2 text-cream-100 hover:text-cream-50 transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            >
              Contact
            </a>
            <Button 
              variant="primary" 
              className="w-full"
              onClick={handleDemoRequest}
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};