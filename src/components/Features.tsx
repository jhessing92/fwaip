import React from 'react';
import { Brain, Cog, Network, LineChart, Building2, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

export const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden pb-28 md:pb-32 lg:pb-36 mt-[-60px] bg-white"
      id="features"
    >
      {/* White background for Features section */}
      <div className="absolute inset-0 bg-white z-0"></div>
      
      <div className="container mx-auto px-4 relative z-20" ref={ref}>
        <motion.div 
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block px-3 py-1 md:px-4 md:py-1.5 mb-3 md:mb-4 text-xs font-medium uppercase tracking-wider text-secondary-600 bg-secondary-50 rounded-full border border-secondary-100 shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            Enterprise Solutions
          </motion.span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
            Transform Your Enterprise with AI
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Deploy intelligent systems that integrate seamlessly with your existing infrastructure.
          </p>
        </motion.div>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
            >
              {/* Image Container */}
              <div className="relative h-[180px] md:h-[240px] bg-primary-950">
                <img 
                  src={feature.image}
                  alt={feature.title}
                  width="600"
                  height="400"
                  decoding="async"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Container */}
              <div className="bg-primary-950 p-4 md:p-6">
                <div className="flex items-center mb-2 md:mb-3">
                  <div className="p-1.5 md:p-2 rounded-lg bg-secondary-400/20 text-secondary-400">
                    {React.cloneElement(feature.icon, {
                      className: "w-5 h-5 md:w-6 md:h-6"
                    })}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-cream-50 ml-2 md:ml-3">{feature.title}</h3>
                </div>
                <p className="text-xs md:text-sm text-cream-100 leading-relaxed">{feature.description}</p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary-950/95 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-20 flex items-center justify-center p-4 md:p-6 backdrop-blur-sm">
                <div className="transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {React.cloneElement(feature.icon, {
                    className: "w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 mx-auto text-secondary-400"
                  })}
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-cream-50 text-center">{feature.title}</h3>
                  <p className="text-xs md:text-sm text-cream-100 leading-relaxed text-center">{feature.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* No wave divider here - moved to Solutions component */}
    </section>
  );
};