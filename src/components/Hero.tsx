import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ChevronDown, User, BarChart3, ShieldCheck, DollarSign, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import { useForm } from '../context/FormContext';

// Import images
import dashboardImg from '../assets/images/dashboard.png';
import scofflawLogo from '../assets/images/scofflaw-logo.png';
import cobbLogo from '../assets/images/cobb-logo.png';

// Define role-specific content
const roleContent = {
  default: {
    subtitle: "Faster workflows, leaner teams, and real operational lift through applied AI.",
    ctaText: "Schedule Strategy Call",
    emphasize: ""
  },
  technical: {
    subtitle: "Build intelligent infrastructure that scales across your enterprise stack.",
    ctaText: "Explore Technical Architecture",
    emphasize: "technical"
  },
  operations: {
    subtitle: "Optimize workflows and reduce manual tasks by up to 70% with enterprise AI.",
    ctaText: "See Efficiency Metrics",
    emphasize: "operations"
  },
  security: {
    subtitle: "Enterprise-grade AI with SOC 2 compliance and secure data handling built-in.",
    ctaText: "Review Security Framework",
    emphasize: "security"
  },
  finance: {
    subtitle: "Achieve 3.5x ROI within the first year with measurable operational improvements.",
    ctaText: "Calculate Your ROI",
    emphasize: "finance"
  }
};

// Animation variants for content transitions
const contentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 100,
      damping: 15
    }
  },
  exit: { 
    opacity: 0, 
    y: -10,
    transition: { 
      duration: 0.2
    }
  }
};

// Scroll animation variants
const scrollRevealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 50,
      damping: 20
    }
  }
};

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const { openForm } = useForm();
  
  // Role selection state
  const [selectedRole, setSelectedRole] = useState<'default' | 'technical' | 'operations' | 'security' | 'finance'>('default');
  const [showMobileRoleMenu, setShowMobileRoleMenu] = useState(false);
  const content = roleContent[selectedRole];

  // Refs for scroll animations
  const trustSectionRef = useRef(null);
  const ctaSectionRef = useRef(null);
  const clientsRef = useRef(null);
  
  // InView hooks for scroll animations
  const trustSectionInView = useInView(trustSectionRef, { once: false, amount: 0.3 });
  const ctaSectionInView = useInView(ctaSectionRef, { once: false, amount: 0.5 });
  const clientsInView = useInView(clientsRef, { once: false, amount: 0.4 });

  const handleCtaClick = () => {
    openForm('strategy-session', 'Hero Section', selectedRole, content.ctaText);
  };

  return (
    <section className="relative min-h-screen pt-12 pb-16 bg-gradient-to-b from-primary-950 via-primary-900 to-primary-800 overflow-hidden">
      {/* Enhanced Parallax Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(81,147,179,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(81,147,179,0.08)_1px,transparent_1px)] bg-[length:32px_32px]" />
      </motion.div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-20 pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 md:pb-24">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hero Section - Main Content */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 pt-4 sm:pt-6 md:pt-8 lg:pt-10">
            {/* Left Content Column */}
            <div className="text-left w-full lg:max-w-[50%]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <h1 className="text-cream-50">
                  <span className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 tracking-tight">
                    Simplify, Automate, Accelerate
                  </span>
                  <span className="block text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-400 mb-3 sm:mb-6">
                    With Enterprise-Ready AI Systems
                  </span>
                </h1>
              </motion.div>

              {/* Enhanced content transition */}
              <AnimatePresence mode="wait">
                <motion.p 
                  key={selectedRole} 
                  className="text-sm sm:text-lg md:text-xl text-cream-100/90 mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed min-h-[60px]"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {content.subtitle}
                </motion.p>
              </AnimatePresence>

              {/* CTA button with enhanced animation */}
              <div 
                ref={ctaSectionRef}
                className="flex flex-col sm:flex-row items-start justify-start gap-3 sm:gap-4 mb-6 sm:mb-10 lg:mb-12"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedRole}
                    className="w-full sm:w-auto"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <Button 
                      variant="primary" 
                      size="large"
                      className="group text-xs sm:text-base md:text-lg w-full sm:w-auto px-4 sm:px-8 py-2.5 sm:py-4 shadow-md hover:shadow-lg transition-all"
                      onClick={handleCtaClick}
                    >
                      {content.ctaText}
                      <ArrowRight size={14} className="ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right Image Column */}
            <motion.div 
              className="w-full lg:max-w-[50%] mt-4 sm:mt-6 lg:mt-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="relative max-w-[500px] mx-auto lg:mx-0 lg:ml-auto">
                {/* Glowing effect behind image */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-[#59B6E6]/20 via-[#59DDD2]/20 to-[#59B6E6]/20 rounded-xl blur-xl"></div>
                
                {/* Dashboard Image */}
                <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border border-white/10">
                  <img 
                    src={dashboardImg} 
                    alt="Enterprise AI Dashboard" 
                    className="w-full h-auto"
                    loading="lazy"
                    width="500"
                    height="300"
                    decoding="async"
                  />
                </div>

                {/* Enhanced dashboard UI decoration with subtle animation */}
                <motion.div 
                  className="absolute -bottom-4 -right-4 w-16 sm:w-20 h-16 sm:h-20 bg-secondary-400/10 rounded-full blur-md"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.7, 0.9, 0.7]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                ></motion.div>
                <motion.div 
                  className="absolute -top-4 -left-4 w-10 sm:w-12 h-10 sm:h-12 bg-secondary-400/10 rounded-full blur-sm"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.6, 0.8, 0.6]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1
                  }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
          
          {/* Role Selector - Improved Mobile Version */}
          <motion.div 
            className="max-w-2xl mx-auto mt-8 sm:mt-12 md:mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="text-cream-100/90 text-sm mb-3">Experience working with:</div>
            
            {/* Mobile Dropdown (visible on small screens) */}
            <div className="sm:hidden relative">
              <button 
                onClick={() => setShowMobileRoleMenu(!showMobileRoleMenu)}
                className="w-full px-4 py-3 rounded-md text-sm font-medium flex items-center justify-between bg-white/10 text-cream-100 hover:bg-white/20 transition-all"
              >
                <span className="flex items-center gap-2">
                  {selectedRole === 'technical' && <User size={14} />}
                  {selectedRole === 'operations' && <BarChart3 size={14} />}
                  {selectedRole === 'security' && <ShieldCheck size={14} />}
                  {selectedRole === 'finance' && <DollarSign size={14} />}
                  {selectedRole === 'default' ? 'Select your focus' : 
                    selectedRole === 'technical' ? 'Technical Teams' :
                    selectedRole === 'operations' ? 'Operations' :
                    selectedRole === 'security' ? 'Security & Compliance' : 'Finance'
                  }
                </span>
                <ChevronDown size={14} className={`transition-transform ${showMobileRoleMenu ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Enhanced animation for dropdown menu */}
              <AnimatePresence>
                {showMobileRoleMenu && (
                  <motion.div 
                    className="absolute z-20 mt-1 w-full rounded-md shadow-lg bg-white/10 backdrop-blur-md border border-white/10 overflow-hidden"
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="py-1">
                      <button
                        onClick={() => { setSelectedRole('technical'); setShowMobileRoleMenu(false); }}
                        className="flex items-center gap-2 w-full px-4 py-3 text-left text-sm text-cream-100 hover:bg-white/10"
                      >
                        <User size={14} /> Technical Teams
                      </button>
                      <button
                        onClick={() => { setSelectedRole('operations'); setShowMobileRoleMenu(false); }}
                        className="flex items-center gap-2 w-full px-4 py-3 text-left text-sm text-cream-100 hover:bg-white/10"
                      >
                        <BarChart3 size={14} /> Operations
                      </button>
                      <button
                        onClick={() => { setSelectedRole('security'); setShowMobileRoleMenu(false); }}
                        className="flex items-center gap-2 w-full px-4 py-3 text-left text-sm text-cream-100 hover:bg-white/10"
                      >
                        <ShieldCheck size={14} /> Security & Compliance
                      </button>
                      <button
                        onClick={() => { setSelectedRole('finance'); setShowMobileRoleMenu(false); }}
                        className="flex items-center gap-2 w-full px-4 py-3 text-left text-sm text-cream-100 hover:bg-white/10"
                      >
                        <DollarSign size={14} /> Finance
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Desktop Buttons (hidden on mobile) - with enhanced transitions */}
            <div className="hidden sm:flex flex-wrap justify-center gap-3">
              <motion.button 
                onClick={() => setSelectedRole('technical')}
                className={`px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-all ${selectedRole === 'technical' 
                  ? 'bg-secondary-400 text-primary-950' 
                  : 'bg-white/10 text-cream-100 hover:bg-white/20'}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <User size={14} /> Technical Teams
              </motion.button>
              <motion.button 
                onClick={() => setSelectedRole('operations')}
                className={`px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-all ${selectedRole === 'operations' 
                  ? 'bg-secondary-400 text-primary-950' 
                  : 'bg-white/10 text-cream-100 hover:bg-white/20'}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <BarChart3 size={14} /> Operations
              </motion.button>
              <motion.button 
                onClick={() => setSelectedRole('security')}
                className={`px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-all ${selectedRole === 'security' 
                  ? 'bg-secondary-400 text-primary-950' 
                  : 'bg-white/10 text-cream-100 hover:bg-white/20'}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <ShieldCheck size={14} /> Security & Compliance
              </motion.button>
              <motion.button 
                onClick={() => setSelectedRole('finance')}
                className={`px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-all ${selectedRole === 'finance' 
                  ? 'bg-secondary-400 text-primary-950' 
                  : 'bg-white/10 text-cream-100 hover:bg-white/20'}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <DollarSign size={14} /> Finance
              </motion.button>
            </div>
          </motion.div>

          {/* Trust Section - with scroll-triggered animation */}
          <div 
            ref={trustSectionRef}
            className="mt-16 sm:mt-20 md:mt-24 lg:mt-32 pt-8 sm:pt-12"
          >
            <motion.div 
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white/10 shadow-lg"
              variants={scrollRevealVariants}
              initial="hidden"
              animate={trustSectionInView ? "visible" : "hidden"}
            >
              <h2 className="text-white text-center text-lg sm:text-xl font-semibold mb-6 sm:mb-10">Trusted By Industry Leaders</h2>
              
              <div 
                ref={clientsRef}
                className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-24"
              >
                <motion.div 
                  className="flex flex-col items-center"
                  variants={scrollRevealVariants}
                  custom={0}
                  initial="hidden"
                  animate={clientsInView ? "visible" : "hidden"}
                  transition={{ delay: 0.1 }}
                >
                  <div className="bg-white/10 p-3 sm:p-5 rounded-xl mb-3 backdrop-blur-md shadow-inner">
                    <img 
                      src={scofflawLogo}
                      alt="Scofflaw Beverage Co. Logo" 
                      className="h-10 sm:h-12 md:h-16 w-auto brightness-[2.5] contrast-[1.2] filter"
                      loading="lazy"
                      width="120"
                      height="60"
                      decoding="async"
                    />
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col items-center"
                  variants={scrollRevealVariants}
                  custom={1}
                  initial="hidden"
                  animate={clientsInView ? "visible" : "hidden"}
                  transition={{ delay: 0.2 }}
                >
                  <div className="bg-white/10 p-3 sm:p-5 rounded-xl mb-3 backdrop-blur-md shadow-inner">
                    <img 
                      src={cobbLogo}
                      alt="Cobb County School District Logo" 
                      className="h-10 sm:h-12 md:h-16 w-auto brightness-[2.5] contrast-[1.2] filter"
                      loading="lazy"
                      width="120" 
                      height="60"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-cream-100/70 cursor-pointer z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={() => {
          const featuresSection = document.querySelector('section:nth-child(2)');
          featuresSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-sm mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
      
      {/* Enhanced gradient transition to Features section */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[15vh] bg-gradient-to-b from-primary-800/90 to-transparent z-10"></div>
      
      {/* Subtle noise texture for visual richness */}
      <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-10 z-5" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      ></div>
    </section>
  );
};