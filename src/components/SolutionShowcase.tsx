import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowRight, Database, Factory, Briefcase, Building2, ChevronRight, CheckCircle2, Building } from 'lucide-react';
import { useForm } from '../context/FormContext';

// Define industry-specific solutions with placeholder images
const industries = [
  {
    id: 'finance',
    name: 'Finance',
    icon: <Briefcase size={20} />,
    color: 'from-blue-600 to-indigo-600',
    title: 'Enterprise AI for Financial Services',
    subtitle: 'Streamline operations and enhance decision-making with AI-powered financial solutions',
    metrics: [
      {
        label: 'Efficiency Gain',
        value: '47%',
        description: 'Average operational efficiency improvement'
      },
      {
        label: 'Cost Reduction',
        value: '32%',
        description: 'Reduction in processing costs'
      },
      {
        label: 'Enterprise SLA',
        value: '99.9%',
        description: 'Guaranteed system availability'
      }
    ],
    capabilitiesTitle: 'Transform your financial operations with:',
    features: [
      'Fraud Detection & Prevention',
      'Automated Credit Risk Assessment',
      'Real-time Market Analysis'
    ],
    featureDescriptions: [
      'Identify and prevent suspicious transactions in real-time',
      'Instantly assess creditworthiness using ML algorithms',
      'Uncover market insights and trading opportunities'
    ],
    ctaText: 'Request Enterprise Strategy Session',
    image: 'https://imgur.com/DJhu3O2.jpg'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: <Factory size={20} />,
    color: 'from-orange-500 to-amber-500',
    title: 'AI-Powered Manufacturing Solutions',
    subtitle: 'Optimize production and quality control through intelligent automation',
    metrics: [
      {
        label: 'Downtime Reduction',
        value: '63%',
        description: 'Less unplanned machine downtime'
      },
      {
        label: 'Defect Detection',
        value: '94%',
        description: 'Accuracy in quality inspection'
      },
      {
        label: 'Yield Increase',
        value: '18%',
        description: 'Average production yield improvement'
      }
    ],
    capabilitiesTitle: 'Elevate manufacturing performance with:',
    features: [
      'Predictive Maintenance',
      'Quality Control Automation',
      'Supply Chain Optimization'
    ],
    featureDescriptions: [
      'Anticipate failures and schedule proactive maintenance',
      'Detect quality issues in real-time with computer vision',
      'Optimize inventory with AI-powered demand forecasting'
    ],
    ctaText: 'Request Manufacturing Solution Demo',
    image: 'https://imgur.com/2xJVyCK.jpg'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: <Building size={20} />,
    color: 'from-green-600 to-green-800',
    title: 'AI Systems for Enhanced Healthcare Delivery',
    subtitle: 'Proven Healthcare Outcomes. Enterprise-Grade Automation.',
    metrics: [
      { label: 'Patient Outcomes', value: '23%', description: 'Smart scheduling reducing patient delays.' },
      { label: 'Admin Task Reduction', value: '76%', description: 'Automated processes freeing clinical staff time.' },
      { label: 'Recording Accuracy', value: '99.2%', description: 'Precise automated clinical documentation.' },
    ],
    capabilitiesTitle: 'Delivering Real Results Across Healthcare Operations',
    features: [
      'Intelligent Patient Scheduling & Resource Allocation',
      'Clinical Decision Support Systems',
      'Predictive Analytics for Patient Care'
    ],
    featureDescriptions: [
      'AI agents prioritize appointments and resources based on clinical urgency.',
      'Real-time analysis for accurate diagnoses and optimized care pathways.',
      'Data-driven forecasting of patient risks for proactive interventions.'
    ],
    ctaText: 'Request an Enterprise Healthcare AI Strategy Session',
    image: 'https://imgur.com/2lbxWyX.jpg'
  },
  {
    id: 'tech',
    name: 'Technology',
    icon: <Database size={20} />,
    color: 'from-violet-600 to-violet-800',
    title: 'Building Smarter, Scalable Technology Operations',
    subtitle: 'Unlock operational leverage and future-proof your digital ecosystem with applied AI systems.',
    metrics: [
      { label: 'Platform Uptime', value: '99.9%', description: 'AI-driven monitoring and failover automation' },
      { label: 'IT Response', value: '65%', description: 'Faster response times across service operations' },
      { label: 'Deployment', value: '4x', description: 'Increased efficiency in product rollouts' },
    ],
    capabilitiesTitle: 'Delivering Real Outcomes Across Technology Organizations',
    features: [
      'Predictive IT Infrastructure Management',
      'Automated Cybersecurity Workflows',
      'AI-Augmented DevOps and Deployment Pipelines'
    ],
    featureDescriptions: [
      'AI agents proactively detect system anomalies and optimize performance.',
      'AI-driven threat detection, incident response, and compliance automation.',
      'Intelligent automation for deployment pipelines and system updates.'
    ],
    ctaText: 'Request an Enterprise Technology AI Strategy Session',
    image: 'https://imgur.com/6dKExGw.jpg'
  },
  {
    id: 'realestate',
    name: 'Real Estate',
    icon: <Building2 size={20} />,
    color: 'from-red-600 to-red-800',
    title: 'AI Solutions for Real Estate Management',
    subtitle: 'Transform property management, sales, and operations with AI-driven insights and automation',
    metrics: [
      { label: 'Processing', value: '65%', description: 'Faster document processing and closing' },
      { label: 'Lead Gen', value: '47%', description: 'Increase in qualified leads' },
      { label: 'Management', value: '32%', description: 'More efficient property management' },
    ],
    capabilitiesTitle: 'Enhance real estate operations with:',
    features: [
      'Intelligent property valuation systems',
      'Automated contract processing',
      'Personalized client matching'
    ],
    featureDescriptions: [
      'AI agents analyze market data and trends for accurate property valuations',
      'Document workflows extract and organize contract data to streamline transactions',
      'Match buyers with ideal properties based on preferences and behavior patterns'
    ],
    ctaText: 'Request Real Estate AI Solution Demo',
    image: 'https://imgur.com/ze8Dq0z.jpg'
  }
];

export const SolutionShowcase: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const { openForm } = useForm();

  const handleIndustryChange = (industry: typeof selectedIndustry) => {
    // Make sure we're working with a fully populated industry object
    const selectedIndustryObj = industries.find(i => i.id === industry.id) || industry;
    setSelectedIndustry(selectedIndustryObj);
  };

  const handleCtaClick = () => {
    openForm('industry-specific', 'Industry Showcase', selectedIndustry.id, 
      (selectedIndustry.id === 'finance' || selectedIndustry.id === 'manufacturing' || selectedIndustry.id === 'healthcare') && selectedIndustry.ctaText ? 
        selectedIndustry.ctaText : 
        `Request a demo for ${selectedIndustry.name}`
    );
  };

  return (
    <section 
      ref={sectionRef}
      id="solutions"
      className="pt-12 md:pt-16 pb-16 md:pb-24 bg-gray-50 relative overflow-hidden border-t-0"
    >
      {/* Background Elements - Keep this or make it match gray-50? Let's simplify */}
      <div className="absolute inset-0 bg-gray-50">
        {/* Removed gradient and patterns, just using plain bg-gray-50 */}
      </div>

      {/* Wave coming from Features is already #f8fafc (gray-50), so it will blend */}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block px-4 py-1 mb-3 text-xs font-medium uppercase tracking-wider text-primary-700 bg-primary-50 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            Industry Solutions
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-900">
            AI Solutions Tailored For Your Industry
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Explore how our enterprise AI platform delivers specialized solutions across diverse industries.
          </p>
        </motion.div>

        {/* Industry Selector Tabs */}
        <div className="mb-8 md:mb-10">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {industries.map((industry) => (
              <motion.button
                key={industry.id}
                onClick={() => handleIndustryChange(industry)}
                className={`flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full text-sm font-medium transition-all ${
                  selectedIndustry.id === industry.id
                    ? `bg-gradient-to-r ${industry.color} text-white shadow-md`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="mr-1.5">{industry.icon}</span>
                {industry.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Solution Display */}
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedIndustry.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left Column - Image */}
                <div className="relative h-[200px] md:h-auto overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20 z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.img 
                    src={selectedIndustry.image} 
                    alt={selectedIndustry.name}
                    className="w-full h-full object-cover max-w-full align-middle border-none"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    loading="lazy"
                    width="800"
                    height="450"
                    decoding="async"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5 z-20">
                    <div className={`inline-flex items-center rounded-full px-2 py-0.5 md:py-1 text-xs md:text-sm font-medium bg-gradient-to-r ${selectedIndustry.color} text-white mb-1 md:mb-2`}>
                      {selectedIndustry.icon}
                      <span className="ml-1.5">{selectedIndustry.name}</span>
                    </div>
                    <h3 className="text-lg md:text-2xl font-bold text-white">
                      {selectedIndustry.id === 'finance' ? selectedIndustry.title : `AI-Powered Solutions for ${selectedIndustry.name}`}
                    </h3>
                  </div>
                </div>

                {/* Right Column - Content */}
                <div className="p-3 md:p-6">
                  {/* Metrics */}
                  {selectedIndustry.subtitle && (
                    <p className="text-sm md:text-base font-medium text-gray-700 mb-2 md:mb-3">{selectedIndustry.subtitle}</p>
                  )}
                  <div className="grid grid-cols-3 gap-2 md:gap-3 mb-4 md:mb-5">
                    {selectedIndustry.metrics.map((metric, index) => (
                      <motion.div 
                        key={index}
                        className="text-center bg-gray-50 p-2 md:p-3 rounded-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.5 }}
                      >
                        <h4 className="text-xl md:text-3xl font-bold text-primary-700">
                          {metric.value}
                        </h4>
                        <p className="text-[10px] md:text-sm text-gray-600 font-medium">
                          {metric.label}
                        </p>
                        {/* Show descriptions only on desktop */}
                        <p className="hidden md:block text-xs text-gray-500 mt-1 leading-tight">
                          {metric.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-3 md:mb-4">
                    <h4 className="text-sm md:text-base font-semibold mb-2 md:mb-3 text-gray-800">
                      {selectedIndustry.capabilitiesTitle || 'Key Capabilities'}
                    </h4>
                    <ul className="grid grid-cols-1 gap-2 md:gap-3">
                      {selectedIndustry.features.map((feature, index) => (
                        <motion.li 
                          key={index}
                          className="flex flex-col"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index, duration: 0.4 }}
                        >
                          <div className="flex items-start">
                            <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-green-500 mr-1 md:mr-1.5 mt-0.5 flex-shrink-0" />
                            <span className="text-xs md:text-sm text-gray-700 font-medium">{feature}</span>
                          </div>
                          {/* Show feature descriptions only on desktop */}
                          {selectedIndustry.featureDescriptions && (
                            <div className="hidden md:block ml-6 text-xs text-gray-600 mt-1">
                              {selectedIndustry.featureDescriptions[index]}
                            </div>
                          )}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <motion.button 
                    className="mt-1 md:mt-2 group flex items-center text-primary-700 text-xs md:text-sm font-medium"
                    whileHover={{ x: 5 }}
                    onClick={handleCtaClick}
                  >
                    {selectedIndustry.ctaText ? 
                      selectedIndustry.ctaText : 
                      `Request a demo for ${selectedIndustry.name}`}
                    <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}; 