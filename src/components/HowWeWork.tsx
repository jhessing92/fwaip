import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
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
  Workflow
} from 'lucide-react';

export const HowWeWork = () => {
  // Track which section is active for animations
  const [activeSection, setActiveSection] = useState(1);
  
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
  
  // Update active section based on scroll position
  React.useEffect(() => {
    sectionInView.forEach((inView, index) => {
      if (inView) {
        setActiveSection(index + 1);
      }
    });
  }, [sectionInView]);

  // Interactive cards for positioning clarity
  const positioningTiers = [
    {
      title: "Small to Mid-Sized Business (SMB)",
      description: "Applied AI-in-a-box (pre-built AI with light customization).",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Mid-Market",
      description: "AI Roadmaps + Applied AI Implementation.",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "Enterprise",
      description: "Custom Agentic AI Infrastructure & Strategic Advisory.",
      icon: <Briefcase className="w-8 h-8" />
    }
  ];
  
  // Data for the phased model table
  const phasedModel = [
    {
      phase: "Phase 1: Initial Discovery",
      role: "First call, needs scoping",
      revenue: "Free"
    },
    {
      phase: "Phase 2: Deep Dive Discovery",
      role: "Workshops, needs mapping",
      revenue: "Paid"
    },
    {
      phase: "Phase 3: Roadmap + SOW Design",
      role: "Custom AI strategy",
      revenue: "Paid"
    },
    {
      phase: "Phase 4: Deployment",
      role: "Build solutions",
      revenue: "Paid milestone or fixed fee"
    },
    {
      phase: "Phase 5: Vendor Management",
      role: "Manage execution partners",
      revenue: "Optional, success fee or project fee"
    }
  ];
  
  // Interactive lead segmentation cards
  const leadTiers = [
    {
      tier: "Tier 1",
      description: "Strategic enterprise and high-growth mid-market (Full Flywheel engagement).",
      color: "from-secondary-500 to-secondary-700"
    },
    {
      tier: "Tier 2",
      description: "Mid-market scaling businesses (Discovery + Selective Build).",
      color: "from-primary-600 to-primary-800"
    },
    {
      tier: "Tier 3",
      description: "SMBs (Pre-built AI packages or partner referrals).",
      color: "from-cream-500 to-cream-700"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[50vh] md:h-[60vh] bg-gradient-to-b from-primary-950 via-primary-900 to-primary-800 flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(81,147,179,0.15),transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(81,147,179,0.08)_1px,transparent_1px)] bg-[length:32px_32px]" />
        </motion.div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-cream-50">
              How We Work
            </h1>
            <p className="text-xl md:text-2xl text-cream-100 max-w-3xl mx-auto">
              Our Framework for Delivering Enterprise AI Solutions
            </p>
          </motion.div>
        </div>
        
        {/* Animated scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronRight size={32} className="text-cream-100/70 transform rotate-90" />
        </motion.div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Navigation dots for sections */}
        <div className="hidden lg:flex fixed z-50 right-8 top-1/2 transform -translate-y-1/2 flex-col space-y-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <button
              key={index}
              onClick={() => sectionRefs[index].current?.scrollIntoView({ behavior: 'smooth' })}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === index + 1 
                  ? 'bg-secondary-500 scale-125' 
                  : 'bg-gray-300 hover:bg-primary-300'
              }`}
              aria-label={`Navigate to section ${index + 1}`}
            />
          ))}
        </div>
      
        {/* Section 1: Positioning Clarity */}
        <motion.section 
          ref={sectionRefs[0]}
          className="mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={sectionInView[0] ? "visible" : "hidden"}
        >
          <motion.div 
            className="flex items-center mb-8 gap-3"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-800">
              <Target size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-800">
              Positioning Clarity <span className="text-secondary-500 font-normal text-xl md:text-2xl">(Critical Priority)</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-10">
            <motion.div 
              className="col-span-1 bg-gray-50 p-6 rounded-xl shadow-sm"
              variants={itemVariants}
            >
              <h3 className="font-semibold text-xl mb-4 text-primary-900">The Challenge</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Partners frequently asked "what exactly do you do?"</li>
                <li>Our value proposition wasn't distilled enough.</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="col-span-2 bg-gradient-to-br from-primary-50 to-primary-100 p-6 md:p-8 rounded-xl shadow-sm"
              variants={itemVariants}
            >
              <h3 className="font-semibold text-xl mb-4 text-primary-900">Our Solution</h3>
              <p className="mb-6 font-medium text-primary-800">
                <span className="inline-flex items-center bg-white px-3 py-1 rounded-full shadow-sm">
                  <Check size={16} className="mr-2 text-secondary-500" />
                  Adopt simple tiered positioning
                </span>
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                {positioningTiers.map((tier, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    whileHover={{ scale: 1.03 }}
                    variants={cardVariants}
                  >
                    <div className="p-5">
                      <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-primary-700 mx-auto">
                        {tier.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-primary-900 mb-2 text-center">
                        {tier.title}
                      </h4>
                      <p className="text-gray-600 text-center">
                        {tier.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                className="mt-8 bg-primary-200 p-6 rounded-lg"
                variants={itemVariants}
              >
                <h4 className="font-semibold mb-2 text-primary-900">Elevator Pitch:</h4>
                <p className="italic text-primary-800">
                  "Flywheel AI Partners builds enterprise-grade AI systems that simplify operations, accelerate growth, and unlock new efficiencies. We deliver practical AI — tailored to your roadmap — not just theoretical transformation."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Section 2: Pre-Qualification Framework */}
        <motion.section 
          ref={sectionRefs[1]}
          className="mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={sectionInView[1] ? "visible" : "hidden"}
        >
          <motion.div 
            className="flex items-center mb-8 gap-3"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-800">
              <Users size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-800">
              Pre-Qualification Framework
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-10">
            <motion.div 
              className="col-span-1 bg-gray-50 p-6 rounded-xl shadow-sm"
              variants={itemVariants}
            >
              <h3 className="font-semibold text-xl mb-4 text-primary-900">The Challenge</h3>
              <p className="text-gray-700">Sales teams are securing meetings but not qualifying deeply.</p>
            </motion.div>
            
            <motion.div 
              className="col-span-2 bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-xl shadow-sm"
              variants={itemVariants}
            >
              <h3 className="font-semibold text-xl mb-4 text-primary-900">Our Solution</h3>
              <p className="mb-6 font-medium text-primary-800">
                <span className="inline-flex items-center bg-white px-3 py-1 rounded-full shadow-sm">
                  <Check size={16} className="mr-2 text-secondary-500" />
                  Introduce a 5-question qualification checklist
                </span>
              </p>
              
              <div className="space-y-4">
                {[
                  { question: "Size", detail: "50+ employees or $25M+ revenue?" },
                  { question: "Urgency", detail: "\"We know we need AI\" vs \"We want to learn about AI\"?" },
                  { question: "Pain Point", detail: "Clear business challenge surfaced?" },
                  { question: "Budget", detail: "Any preliminary budget awareness?" },
                  { question: "Department", detail: "Ops, Finance, CX, IT, etc.?" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                    whileHover={{ x: 5 }}
                    variants={cardVariants}
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`flex items-center justify-center w-8 h-8 rounded-full text-white ${hoveredItem === index ? 'bg-secondary-500' : 'bg-primary-600'} transition-colors duration-300`}>
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-900">{item.question}</h4>
                        <p className="text-gray-600">{item.detail}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Section 3: Revenue Model */}
        <motion.section 
          ref={sectionRefs[2]}
          className="mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={sectionInView[2] ? "visible" : "hidden"}
        >
          <motion.div 
            className="flex items-center mb-8 gap-3"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-800">
              <DollarSign size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-800">
              Revenue Model + Engagement Structure
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-10">
            <motion.div 
              className="col-span-1 bg-gray-50 p-6 rounded-xl shadow-sm"
              variants={itemVariants}
            >
              <h3 className="font-semibold text-xl mb-4 text-primary-900">The Challenge</h3>
              <p className="text-gray-700">Potential partners want to understand: "How do we all make money together?"</p>
            </motion.div>
            
            <motion.div 
              className="col-span-2 bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-xl shadow-sm"
              variants={itemVariants}
            >
              <h3 className="font-semibold text-xl mb-4 text-primary-900">Our Solution</h3>
              <p className="mb-6 font-medium text-primary-800">
                <span className="inline-flex items-center bg-white px-3 py-1 rounded-full shadow-sm">
                  <Check size={16} className="mr-2 text-secondary-500" />
                  Two primary paths to value creation
                </span>
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  variants={cardVariants}
                >
                  <div className="bg-primary-700 text-white p-4">
                    <h4 className="text-lg font-semibold">Transactional Commission</h4>
                  </div>
                  <div className="p-6">
                    <p>When Flywheel refers a vendor.</p>
                    <div className="mt-4 p-3 bg-primary-50 rounded-lg">
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Check size={16} className="text-green-500" />
                          <span>Percentage-based referral fees</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={16} className="text-green-500" />
                          <span>Revenue sharing with partners</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  variants={cardVariants}
                >
                  <div className="bg-secondary-500 text-white p-4">
                    <h4 className="text-lg font-semibold">Service Revenue</h4>
                  </div>
                  <div className="p-6">
                    <p>When Flywheel sells advisory or builds internal solutions.</p>
                    <div className="mt-4 p-3 bg-primary-50 rounded-lg">
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Check size={16} className="text-green-500" />
                          <span>Project-based fixed fees</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={16} className="text-green-500" />
                          <span>Ongoing support subscriptions</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Section 4: Internal Enablement Tools */}
        <motion.section 
          ref={sectionRefs[3]}
          className="mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={sectionInView[3] ? "visible" : "hidden"}
        >
          <motion.div 
            className="flex items-center mb-8 gap-3"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-800">
              <Lightbulb size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-800">
              Internal Enablement Tools
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-10">
            <motion.div 
              className="col-span-1 bg-gray-50 p-6 rounded-xl shadow-sm"
              variants={itemVariants}
            >
              <h3 className="font-semibold text-xl mb-4 text-primary-900">The Challenge</h3>
              <p className="text-gray-700">Sales teams need lightweight, clear tools to pitch Flywheel.</p>
            </motion.div>
            
            <motion.div 
              className="col-span-2 bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-xl shadow-sm"
              variants={itemVariants}
            >
              <h3 className="font-semibold text-xl mb-4 text-primary-900">Our Solution</h3>
              <p className="mb-6 font-medium text-primary-800">
                <span className="inline-flex items-center bg-white px-3 py-1 rounded-full shadow-sm">
                  <Check size={16} className="mr-2 text-secondary-500" />
                  Develop a comprehensive "Sales Kit"
                </span>
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { title: "One-Pager", desc: "Who We Are and What We Solve", icon: <FileText size={24} /> },
                  { title: "FAQ Cheat Sheet", desc: "Answering common questions", icon: <LayoutList size={24} /> },
                  { title: "Discovery Questions", desc: "Effective qualifying questions", icon: <Lightbulb size={24} /> },
                  { title: "Engagement Pathway", desc: "Visual process diagram", icon: <Workflow size={24} /> }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-5 text-center hover:bg-primary-600 hover:text-white group transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                    variants={cardVariants}
                  >
                    <div className="flex justify-center items-center mb-3">
                      <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center text-primary-700 group-hover:bg-white group-hover:text-primary-700 transition-colors duration-300">
                        {item.icon}
                      </div>
                    </div>
                    <h4 className="font-semibold text-primary-900 group-hover:text-white transition-colors duration-300">{item.title}</h4>
                    <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300 mt-1">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Section 5: Role Clarification */}
        <motion.section 
          ref={sectionRefs[4]}
          className="mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={sectionInView[4] ? "visible" : "hidden"}
        >
          <motion.div 
            className="flex items-center mb-8 gap-3"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-800">
              <Briefcase size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-800">
              Role Clarification
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-10">
            <motion.div 
              className="col-span-1 bg-gray-50 p-6 rounded-xl shadow-sm"
              variants={itemVariants}
            >
              <h3 className="font-semibold text-xl mb-4 text-primary-900">The Challenge</h3>
              <p className="text-gray-700">Partners ask: "Are you just advisors or do you deploy?"</p>
            </motion.div>
            
            <motion.div 
              className="col-span-2 bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-xl shadow-sm"
              variants={itemVariants}
            >
              <h3 className="font-semibold text-xl mb-4 text-primary-900">Our Solution</h3>
              <p className="mb-6 font-medium text-primary-800">
                <span className="inline-flex items-center bg-white px-3 py-1 rounded-full shadow-sm">
                  <Check size={16} className="mr-2 text-secondary-500" />
                  Define a simple, phased model
                </span>
              </p>
              
              <div className="overflow-x-auto rounded-xl shadow-md">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th className="py-3 px-4 text-left bg-primary-700 text-white font-semibold rounded-tl-lg">Phase</th>
                      <th className="py-3 px-4 text-left bg-primary-700 text-white font-semibold">Flywheel Role</th>
                      <th className="py-3 px-4 text-left bg-primary-700 text-white font-semibold rounded-tr-lg">Revenue Model</th>
                    </tr>
                  </thead>
                  <tbody>
                    {phasedModel.map((phase, index) => (
                      <motion.tr 
                        key={index}
                        className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-primary-50 transition-colors duration-200`}
                        variants={itemVariants}
                        whileHover={{ scale: 1.01, x: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <td className="py-3 px-4 border-b font-medium text-primary-800">{phase.phase}</td>
                        <td className="py-3 px-4 border-b text-gray-700">{phase.role}</td>
                        <td className="py-3 px-4 border-b text-gray-700">{phase.revenue}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Section 6: Lead Segmentation Strategy */}
        <motion.section 
          ref={sectionRefs[5]}
          className="mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={sectionInView[5] ? "visible" : "hidden"}
        >
          <motion.div 
            className="flex items-center mb-8 gap-3"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-800">
              <Target size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-800">
              Lead Segmentation Strategy
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-10">
            <motion.div 
              className="col-span-1 bg-gray-50 p-6 rounded-xl shadow-sm"
              variants={itemVariants}
            >
              <h3 className="font-semibold text-xl mb-4 text-primary-900">The Challenge</h3>
              <p className="text-gray-700">All meetings were being treated equally.</p>
            </motion.div>
            
            <motion.div 
              className="col-span-2 bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-xl shadow-sm"
              variants={itemVariants}
            >
              <h3 className="font-semibold text-xl mb-4 text-primary-900">Our Solution</h3>
              <p className="mb-6 font-medium text-primary-800">
                <span className="inline-flex items-center bg-white px-3 py-1 rounded-full shadow-sm">
                  <Check size={16} className="mr-2 text-secondary-500" />
                  Introduce tiering system for leads
                </span>
              </p>
              
              <div className="space-y-6">
                {leadTiers.map((tier, index) => (
                  <motion.div
                    key={index}
                    className={`bg-gradient-to-r ${tier.color} rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl text-white`}
                    whileHover={{ scale: 1.02, x: 10 }}
                    variants={cardVariants}
                  >
                    <div className="p-6 flex items-center">
                      <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mr-5 text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-1">{tier.tier}</h4>
                        <p className="text-white/90">{tier.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Next Steps Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="py-12 px-8 bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl shadow-lg text-white mb-12"
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
                className="bg-white/10 backdrop-blur-md p-5 rounded-lg text-center hover:bg-white/20 transition-colors duration-300"
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center text-primary-900 font-bold mb-3 mx-auto">
                  {index + 1}
                </div>
                <p className="font-medium">{step}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.p 
            className="mt-8 text-sm text-white/70 text-center italic"
            variants={itemVariants}
          >
            Prepared for internal team use. Flywheel strategic collaboration alignment.
          </motion.p>
        </motion.section>
      </div>
    </div>
  );
}; 