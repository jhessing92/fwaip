import React, { useState, useEffect } from 'react';
import { Brain, Cog, Network, LineChart, Building2, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronRight } from 'lucide-react';

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

  return (
    <section 
      id="features" 
      className="bg-white pt-12 md:pt-24 lg:pt-32 pb-20 md:pb-40 overflow-hidden relative"
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
            
            return (
              <motion.div
                key={index}
                ref={ref}
                className="group flex flex-col bg-cream-50 rounded-xl overflow-hidden transform transition-all hover:shadow-lg hover:-translate-y-1"
                variants={featureVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={index}
              >
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-primary-900/20 to-primary-900/0 z-10"
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                  <motion.img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover object-center"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.4 }
                    }}
                    loading="lazy"
                    width="600"
                    height="338"
                  />
                </div>
                
                <div className="flex-1 flex flex-col p-5 md:p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-primary-900 mb-3 group-hover:text-primary-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base flex-1 mb-4">
                    {feature.description}
                  </p>
                  
                  <motion.div 
                    className="mt-auto pt-2 flex items-center text-primary-700 font-medium text-sm"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Learn more <ChevronRight size={16} className="ml-1" />
                  </motion.div>
                </div>
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
    </section>
  );
}