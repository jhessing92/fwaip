import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  Target, 
  Users, 
  DollarSign, 
  Lightbulb, 
  Briefcase, 
  BarChart3, 
  ChevronRight,
  X,
  Check,
  FileText,
  LayoutList,
  Workflow,
  Moon,
  Sun,
  Share2,
  MousePointer,
  ArrowDown,
  PanelLeftClose,
  Sparkles
} from 'lucide-react';

export const HowWeWork = () => {
  // Theme mode state (light/dark)
  const [darkMode, setDarkMode] = useState(false);
  
  // Track which section is active for animations
  const [activeSection, setActiveSection] = useState(1);
  
  // Mouse position for custom cursor
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 400 });
  
  // Handle cursor position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);
  
  // Scroll progress for progress indicator
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Create refs for each major section
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  
  // Track if sections are in view
  const sectionInView = sectionRefs.map(ref => 
    useInView(ref, { once: false, amount: 0.3, margin: "-100px 0px -100px 0px" })
  );
  
  // Handle hover state for interactive elements
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
  // Side panel state for supplementary info
  const [panelOpen, setPanelOpen] = useState(false);
  const [panelContent, setPanelContent] = useState('');
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  // 3D tilt effect parameters
  const tiltCardEffect = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = (y - centerY) / 10;
    const tiltY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
  };
  
  const resetTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };
  
  // Update active section based on scroll position
  React.useEffect(() => {
    sectionInView.forEach((inView, index) => {
      if (inView) {
        setActiveSection(index + 1);
      }
    });
  }, [sectionInView]);
  
  // Toggle dark/light mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  
  // Open side panel with additional info
  const openPanel = (content: string) => {
    setPanelContent(content);
    setPanelOpen(true);
  };

  // Interactive cards for positioning clarity
  const positioningTiers = [
    {
      title: "Small to Mid-Sized Business (SMB)",
      description: "Applied AI-in-a-box (pre-built AI with light customization).",
      icon: <Users className="w-8 h-8" />,
      stats: { implementations: 120, avgTimeToValue: "4 weeks" },
      moreInfo: "Our SMB solutions focus on quick wins with pre-built AI capabilities that require minimal setup and customization. Perfect for organizations looking to quickly modernize operations without extensive IT resources."
    },
    {
      title: "Mid-Market",
      description: "AI Roadmaps + Applied AI Implementation.",
      icon: <BarChart3 className="w-8 h-8" />,
      stats: { implementations: 85, avgTimeToValue: "8 weeks" },
      moreInfo: "Mid-market solutions combine strategic roadmapping with targeted implementations, allowing companies to prioritize high-impact areas while building toward a comprehensive AI strategy."
    },
    {
      title: "Enterprise",
      description: "Custom Agentic AI Infrastructure & Strategic Advisory.",
      icon: <Briefcase className="w-8 h-8" />,
      stats: { implementations: 40, avgTimeToValue: "12 weeks" },
      moreInfo: "Enterprise engagements focus on building customized AI infrastructure that integrates deeply with existing systems. Our strategic advisory ensures alignment with long-term business objectives and proper governance frameworks."
    }
  ];
  
  // Data for the phased model table with expanded details
  const phasedModel = [
    {
      phase: "Phase 1: Initial Discovery",
      role: "First call, needs scoping",
      revenue: "Free",
      duration: "1-2 hours",
      details: "We conduct an initial assessment to understand your business context, pain points, and opportunities for AI-driven improvements."
    },
    {
      phase: "Phase 2: Deep Dive Discovery",
      role: "Workshops, needs mapping",
      revenue: "Paid",
      duration: "1-2 weeks",
      details: "Our team works with your stakeholders to map processes, identify data sources, and create a comprehensive needs assessment."
    },
    {
      phase: "Phase 3: Roadmap + SOW Design",
      role: "Custom AI strategy",
      revenue: "Paid",
      duration: "2-3 weeks",
      details: "We develop a tailored AI implementation roadmap with clear milestones, resource requirements, and expected outcomes."
    },
    {
      phase: "Phase 4: Deployment",
      role: "Build solutions",
      revenue: "Paid milestone or fixed fee",
      duration: "4-12 weeks",
      details: "Our technical team implements the solutions, integrating with your existing systems and ensuring proper data flows."
    },
    {
      phase: "Phase 5: Vendor Management",
      role: "Manage execution partners",
      revenue: "Optional, success fee or project fee",
      duration: "Ongoing",
      details: "We can optionally manage third-party vendors and partners to ensure seamless integration and accountability."
    }
  ];
  
  // Enhanced lead segmentation cards with visualization
  const leadTiers = [
    {
      tier: "Tier 1",
      description: "Strategic enterprise and high-growth mid-market (Full Flywheel engagement).",
      color: "from-secondary-500 to-secondary-700",
      engagementLevel: 95,
      focusAreas: ["Custom LLM Development", "Enterprise Integration", "Strategic Advisory"],
      caseStudyLink: "#enterprise-case-study"
    },
    {
      tier: "Tier 2",
      description: "Mid-market scaling businesses (Discovery + Selective Build).",
      color: "from-primary-600 to-primary-800",
      engagementLevel: 70,
      focusAreas: ["Workflow Automation", "Department-Specific AI", "Data Pipeline Optimization"],
      caseStudyLink: "#midmarket-case-study"
    },
    {
      tier: "Tier 3",
      description: "SMBs (Pre-built AI packages or partner referrals).",
      color: "from-cream-500 to-cream-700",
      engagementLevel: 45,
      focusAreas: ["Managed AI Services", "SaaS Integration", "Quick-Win Automations"],
      caseStudyLink: "#smb-case-study"
    }
  ];

  // Background pattern class based on dark/light mode
  const bgPatternClass = darkMode 
    ? "bg-[radial-gradient(circle_at_center,rgba(81,147,179,0.05),transparent_70%)] bg-[linear-gradient(45deg,rgba(81,147,179,0.03)_1px,transparent_1px)]" 
    : "bg-[radial-gradient(circle_at_center,rgba(81,147,179,0.15),transparent_70%)] bg-[linear-gradient(45deg,rgba(81,147,179,0.08)_1px,transparent_1px)]";

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-500`}>
      {/* Custom Cursor */}
      <motion.div 
        className="fixed w-8 h-8 rounded-full pointer-events-none z-[999] mix-blend-difference hidden md:flex items-center justify-center"
        style={{ 
          left: smoothMouseX, 
          top: smoothMouseY,
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          boxShadow: '0 0 15px 5px rgba(255, 255, 255, 0.3)',
          backdropFilter: 'blur(4px)'
        }}
      >
        <motion.div 
          className="w-2 h-2 bg-white rounded-full"
          initial={{ scale: 0.8 }}
          animate={{ scale: [0.8, 1.2, 0.8] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.div>
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-secondary-500 z-[100]"
        style={{ scaleX: scrollProgress, transformOrigin: '0% 50%' }}
      />
    
      {/* Theme Toggle */}
      <button 
        onClick={toggleTheme}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transition-all duration-300 hover:scale-110`}
        aria-label="Toggle dark mode"
      >
        {darkMode ? 
          <Sun size={20} className="text-cream-100" /> : 
          <Moon size={20} className="text-primary-900" />
        }
      </button>
      
      {/* Side Panel */}
      <AnimatePresence>
        {panelOpen && (
          <motion.div 
            className={`fixed top-0 right-0 h-full w-80 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg z-40 p-6 overflow-y-auto`}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30 }}
          >
            <button 
              onClick={() => setPanelOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Close panel"
            >
              <X size={20} />
            </button>
            <h3 className="text-xl font-semibold mb-4 pt-8">Additional Information</h3>
            <div className="prose dark:prose-invert">
              <p>{panelContent}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Hero Section with Enhanced Parallax Effect - Fixed Layout */}
      <section className={`relative h-[60vh] md:h-[70vh] bg-gradient-to-b ${darkMode ? 'from-gray-950 via-gray-900 to-gray-800' : 'from-primary-950 via-primary-900 to-primary-800'} flex items-center justify-center overflow-hidden transition-colors duration-500`}>
        <motion.div 
          className={`absolute inset-0 z-0 ${bgPatternClass} bg-[length:32px_32px]`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-secondary-400/30"
              style={{ 
                left: `${Math.random() * 100}%`, 
                top: `${Math.random() * 100}%` 
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            {/* Sparkles icon positioned above the text, not behind it */}
            <motion.div
              className="mb-8"
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <Sparkles size={40} className="text-secondary-400 mx-auto" />
            </motion.div>
            
            {/* Simplified heading with better spacing */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-cream-50 tracking-tight">
              <span className="block mb-2">How We</span>
              <motion.span 
                className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-secondary-400 to-cream-400"
                animate={{ 
                  backgroundPosition: ["0% center", "100% center"],
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                Transform
              </motion.span>
              <span className="block mt-2">Enterprise AI</span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-cream-100 max-w-2xl mx-auto opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              Our Framework for Delivering Enterprise AI Solutions
            </motion.p>
          </motion.div>
        </div>
        
        {/* Simplified scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
          onClick={() => sectionRefs[0].current?.scrollIntoView({ behavior: 'smooth' })}
          whileHover={{ scale: 1.1 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <motion.p 
            className="text-cream-100/70 text-sm mb-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Explore
          </motion.p>
          <ArrowDown size={18} className="text-cream-100/70" />
        </motion.div>
      </section>

      <div className={`container mx-auto px-4 py-16 md:py-24 transition-colors duration-500 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
        {/* Simplified Navigation dots for sections */}
        <div className="hidden lg:flex fixed z-50 right-8 top-1/2 transform -translate-y-1/2 flex-col space-y-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => sectionRefs[index].current?.scrollIntoView({ behavior: 'smooth' })}
              className={`group relative flex items-center ${
                activeSection === index + 1 
                  ? `text-${darkMode ? 'secondary-400' : 'secondary-500'}` 
                  : `text-${darkMode ? 'gray-600' : 'gray-400'} hover:text-${darkMode ? 'gray-300' : 'gray-600'}`
              } transition-all duration-300`}
              whileHover={{ scale: 1.1 }}
              aria-label={`Navigate to section ${index + 1}`}
            >
              <span className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === index + 1 
                  ? `bg-${darkMode ? 'secondary-400' : 'secondary-500'} scale-150` 
                  : `bg-${darkMode ? 'gray-600' : 'gray-400'} group-hover:bg-${darkMode ? 'gray-300' : 'gray-600'}`
              }`} />
              
              <span className={`absolute left-4 opacity-0 whitespace-nowrap text-sm group-hover:opacity-100 transition-opacity duration-300 ${
                activeSection === index + 1 ? 'font-medium' : ''
              }`}>
                {['Positioning', 'Qualification', 'Revenue', 'Enablement', 'Roles', 'Segmentation'][index]}
              </span>
            </motion.button>
          ))}
        </div>
      
        {/* Section 1: Positioning Clarity */}
        <motion.section 
          ref={sectionRefs[0]}
          className={`mb-32 ${darkMode ? 'text-white' : ''}`}
          variants={containerVariants}
          initial="hidden"
          animate={sectionInView[0] ? "visible" : "hidden"}
        >
          <motion.div 
            className="flex items-center mb-8 gap-3"
            variants={itemVariants}
          >
            <div className={`flex items-center justify-center w-12 h-12 rounded-full ${darkMode ? 'bg-gray-800 text-secondary-400' : 'bg-primary-100 text-primary-800'} transition-colors duration-500`}>
              <Target size={24} />
            </div>
            <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold ${darkMode ? 'text-white' : 'text-primary-800'} transition-colors duration-500`}>
              Positioning Clarity <span className="text-secondary-500 font-normal text-xl md:text-2xl">(Critical Priority)</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-10">
            <motion.div 
              className={`col-span-1 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} p-8 rounded-xl shadow-md transition-colors duration-500`}
              variants={itemVariants}
            >
              <h3 className={`font-semibold text-xl mb-4 ${darkMode ? 'text-white' : 'text-primary-900'} transition-colors duration-500`}>The Challenge</h3>
              <ul className={`list-disc pl-6 space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-500`}>
                <li>Partners frequently asked "what exactly do you do?"</li>
                <li>Our value proposition wasn't distilled enough.</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className={`col-span-2 ${darkMode ? 
                'bg-gradient-to-br from-gray-800 to-gray-700' : 
                'bg-gradient-to-br from-primary-50 to-primary-100'
              } p-8 rounded-xl shadow-md transition-colors duration-500`}
              variants={itemVariants}
            >
              <h3 className={`font-semibold text-xl mb-4 ${darkMode ? 'text-white' : 'text-primary-900'} transition-colors duration-500`}>Our Solution</h3>
              <motion.p 
                className={`mb-6 font-medium ${darkMode ? 'text-gray-200' : 'text-primary-800'} transition-colors duration-500`}
                whileHover={{ scale: 1.01 }}
              >
                <span className={`inline-flex items-center ${darkMode ? 'bg-gray-700' : 'bg-white'} px-3 py-1 rounded-full shadow-sm transition-colors duration-500`}>
                  <Check size={16} className="mr-2 text-secondary-500" />
                  Adopt simple tiered positioning
                </span>
              </motion.p>
              
              <div className="grid md:grid-cols-3 gap-4">
                {positioningTiers.map((tier, index) => (
                  <motion.div
                    key={index}
                    className={`${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg shadow-lg overflow-hidden transform transition-all duration-500`}
                    whileHover={{ scale: 1.03, y: -5 }}
                    onMouseMove={tiltCardEffect}
                    onMouseLeave={resetTilt}
                    variants={cardVariants}
                    style={{ transition: 'transform 0.2s ease-out' }}
                  >
                    <div className="p-5 relative overflow-hidden">
                      {/* 3D-ish decorative elements */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary-400/30 to-transparent" />
                      <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-secondary-400/30 to-transparent" />
                      
                      <div className={`${darkMode ? 'bg-gray-800' : 'bg-primary-100'} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto transition-colors duration-500 ${darkMode ? 'text-secondary-400' : 'text-primary-700'}`}>
                        {tier.icon}
                      </div>
                      <h4 className={`text-lg font-semibold mb-2 text-center transition-colors duration-500 ${darkMode ? 'text-white' : 'text-primary-900'}`}>
                        {tier.title}
                      </h4>
                      <p className={`text-center transition-colors duration-500 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {tier.description}
                      </p>
                      
                      {/* Interactive button */}
                      <motion.button
                        className={`mt-4 text-xs w-full py-1.5 px-3 rounded ${darkMode ? 'bg-gray-800 text-secondary-400 hover:bg-gray-900' : 'bg-primary-50 text-primary-700 hover:bg-primary-100'} transition-colors duration-300 flex items-center justify-center`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => openPanel(tier.moreInfo)}
                      >
                        Learn more <ChevronRight size={12} className="ml-1" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                className={`mt-8 ${darkMode ? 'bg-gray-700' : 'bg-primary-200'} p-6 rounded-lg transition-colors duration-500`}
                variants={itemVariants}
                whileHover={{ 
                  boxShadow: darkMode ? 
                    "0 4px 30px rgba(81, 147, 179, 0.2)" : 
                    "0 4px 30px rgba(11, 59, 90, 0.1)" 
                }}
              >
                <h4 className={`font-semibold mb-2 transition-colors duration-500 ${darkMode ? 'text-white' : 'text-primary-900'}`}>Elevator Pitch:</h4>
                <p className={`italic transition-colors duration-500 ${darkMode ? 'text-gray-300' : 'text-primary-800'}`}>
                  "Flywheel AI Partners builds enterprise-grade AI systems that simplify operations, accelerate growth, and unlock new efficiencies. We deliver practical AI — tailored to your roadmap — not just theoretical transformation."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Next Steps Section - Enhanced */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`py-12 px-8 ${darkMode ? 
            'bg-gradient-to-br from-gray-800 to-gray-900' : 
            'bg-gradient-to-br from-primary-900 to-primary-800'
          } rounded-2xl shadow-lg text-white mb-12 transition-colors duration-500 relative overflow-hidden`}
        >
          {/* Animated background particles - reduced for cleaner look */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-secondary-400/20"
                style={{ 
                  left: `${Math.random() * 100}%`, 
                  top: `${Math.random() * 100}%` 
                }}
                animate={{
                  x: [0, Math.random() * 50 - 25],
                  y: [0, Math.random() * 50 - 25],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                  duration: 3 + Math.random() * 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            ))}
          </div>
        
          <motion.div 
            className="relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3"
              variants={itemVariants}
            >
              <ArrowRight size={24} className="text-secondary-400" />
              Immediate Next Steps
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-5 gap-5"
              variants={containerVariants}
            >
              {[
                "Build First Call Kit",
                "Finalize Engagement Framework",
                "Create Mini Proposals Templates",
                "Host Enablement Workshop",
                "Launch Pilot Engagements"
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-md p-5 rounded-lg text-center hover:bg-white/20 transition-all duration-300"
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                  }}
                  onMouseMove={tiltCardEffect}
                  onMouseLeave={resetTilt}
                  style={{ transition: 'transform 0.2s ease-out' }}
                >
                  <div className="w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center text-primary-900 font-bold mb-3 mx-auto">
                    {index + 1}
                  </div>
                  <p className="font-medium">{step}</p>
                  
                  {/* Progress indicator */}
                  <div className="w-full h-1 bg-white/20 rounded-full mt-3 overflow-hidden">
                    <motion.div
                      className="h-full bg-secondary-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${20 * (index + 1)}%` }}
                      transition={{ delay: 0.3, duration: 1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="mt-12 flex items-center justify-center gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                className="px-6 py-3 bg-secondary-500 text-primary-900 rounded-full font-medium flex items-center shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your AI Journey <ArrowRight size={16} className="ml-2" />
              </motion.button>
              
              <motion.button
                className="px-6 py-3 bg-transparent border border-white/30 text-white rounded-full font-medium flex items-center hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Share Framework <Share2 size={16} className="ml-2" />
              </motion.button>
            </motion.div>
            
            <motion.p 
              className="mt-8 text-sm text-white/70 text-center italic"
              variants={itemVariants}
            >
              Prepared for internal team use. Flywheel strategic collaboration alignment.
            </motion.p>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}; 