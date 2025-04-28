import React, { useState, useEffect, useRef } from 'react';
import { Brain, Cog, Network, LineChart, Building2, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronRight, X } from 'lucide-react';

const features = [
  {
    icon: <Cog className="w-8 h-8" />,
    title: 'SmartStack™',
    description: 'Unify your SaaS tools into one powerful connected system.',
    details: 'Create a unified, intelligent ecosystem that connects all your tools and data for seamless operations.',
    image: 'https://imgur.com/FaeyNdb.png',
    color: 'from-primary-800/90 to-primary-900/95'
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'AI Co-Pilots',
    description: 'From sales to HR, we deploy AI assistants that reduce friction.',
    details: 'Empower every department with AI co-pilots that understand context and automate workflows.',
    image: 'https://imgur.com/8RN9Qbx.png',
    color: 'from-primary-800/90 to-primary-900/95'
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: 'Agentic Infrastructure',
    description: 'Deploy AI agents that act across your stack—not inside it.',
    details: 'Smart automations that run your ops, not just answer questions. Transform your business with intelligent automation.',
    image: 'https://imgur.com/Cj4oAgb.png',
    color: 'from-primary-800/90 to-primary-900/95'
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: 'AI Consulting',
    description: 'Transform business processes into AI-powered workflows.',
    details: 'Get strategic guidance on AI implementation, process optimization, and digital transformation.',
    image: 'https://imgur.com/Iq1BZKy.png',
    color: 'from-primary-800/90 to-primary-900/95'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'White-Label',
    description: 'MSPs and consultants use our systems under their brand.',
    details: 'Offer enterprise-grade AI solutions to your clients under your brand with full support.',
    image: 'https://imgur.com/jFyogDW.png',
    color: 'from-primary-800/90 to-primary-900/95'
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: 'PE & M&A',
    description: 'Help PE firms increase portfolio value with AI tooling and automation.',
    details: 'Accelerate value creation in portfolio companies through strategic AI implementation.',
    image: 'https://imgur.com/1xjpfzq.png',
    color: 'from-primary-800/90 to-primary-900/95'
  }
];

export default function Features() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  // Setup individual feature refs and inView states
  const featureRefs = features.map(() => useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 100
  }));

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.5 
      }
    })
  };

  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(null);
  
  const handleMobileExpand = (index: number) => {
    setExpandedCardIndex(expandedCardIndex === index ? null : index);
  };

  return (
    <section 
      id="features" 
      className="bg-white pt-12 md:pt-24 lg:pt-32 pb-28 md:pb-40 lg:pb-48 overflow-hidden relative"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20"
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-900 to-primary-700">
            Empowering Enterprise AI Workflows
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Our comprehensive suite of tools empowers teams to build, deploy, and manage AI workflows with confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => {
            const [ref, inView] = featureRefs[index];
            const isExpanded = expandedCardIndex === index;
            
            return (
              <motion.div
                key={index}
                ref={ref}
                className="group flex flex-col rounded-xl overflow-hidden transform transition-all bg-white relative shadow-lg md:hover:shadow-xl md:hover:-translate-y-1"
                variants={featureVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={index}
              >
                {/* Card image */}
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <motion.img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover object-center max-w-full align-middle border-none"
                    loading="lazy"
                    width="600"
                    height="338"
                    decoding="async"
                  />
                </div>
                {/* Title + short description area, always dark background */}
                <div className="relative flex-1 flex flex-col justify-between bg-primary-900 px-0 md:px-6 py-5">
                  <div className="px-5 md:px-0"> 
                    <h3 className="text-xl md:text-2xl font-bold text-cream-50 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-cream-100 text-sm md:text-base mb-4 group-hover:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">
                      {feature.description}
                    </p>
                  </div>
                  {/* Learn more button: Triggers expand on mobile */}
                  <motion.button 
                    className="mt-auto pt-2 flex items-center text-secondary-400 font-medium text-sm px-5 md:px-0 pb-0 md:pb-5 md:block group-hover:hidden"
                    onClick={() => handleMobileExpand(index)}
                    aria-label={`Learn more about ${feature.title}`}
                  >
                    Learn more <ChevronRight size={16} className="ml-1" />
                  </motion.button>
                </div>
                
                {/* Hover/Expand overlay: covers whole card, shows icon + details */}
                <motion.div
                  className={`absolute inset-0 bg-primary-900/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-5 transition-opacity duration-300 ${
                    isExpanded ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none md:group-hover:opacity-100 md:group-hover:pointer-events-auto'
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isExpanded ? 1 : 0 }}
                >
                  <button 
                    onClick={() => handleMobileExpand(index)} 
                    className="absolute top-3 right-3 text-cream-100/70 hover:text-cream-50 md:hidden"
                    aria-label="Close details"
                  >
                    <X size={24} />
                  </button>
                  <span className="mb-3 text-cream-50">{React.cloneElement(feature.icon, { className: "w-10 h-10" })}</span>
                  <h3 className="text-lg font-semibold text-cream-50 mb-2">{feature.title}</h3>
                  <p className="text-cream-100 text-sm leading-relaxed">{feature.details}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile-optimized feature grid */}
        <style>{`
          @media (max-width: 768px) {
            .grid-cols-1 > div {
              margin-bottom: 1.25rem;
            }
            
            .grid-cols-1 > div:last-child {
              margin-bottom: 0.5rem;
            }
            
            .grid-cols-1 > div .object-cover {
              height: auto !important;
              max-height: 220px;
              object-fit: contain !important;
              background-color: #f7f7f5;
            }
            
            .grid-cols-1 > div .relative.w-full {
              border-bottom: 1px solid rgba(0,0,0,0.05);
            }
          }
        `}</style>
      </div>

      {/* Wave Section Divider - Correct fill color */}
      <div className="absolute bottom-0 left-0 right-0 w-full" style={{ zIndex: 5 }}>
        <div className="wave-divider relative h-20 md:h-32 lg:h-40 overflow-hidden">
          <svg 
            className="absolute bottom-0 w-full"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{ height: '100%', width: '100%' }}
          >
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              fill="#f8fafc" // Ensure this is gray-50 equivalent
            />
          </svg>
        </div>
      </div>
    </section>
  );
}