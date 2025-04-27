import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Building2, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

const industries = [
  'Healthcare & Insurance',
  'Legal & Professional Services',
  'E-Commerce & Retail',
  'Financial Services',
  'Manufacturing & Logistics',
  'Technology & SaaS'
];

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    
    if (!formData.industry.trim()) {
      newErrors.industry = 'Please select an industry';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setTimeout(() => {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          industry: '',
          message: '',
        });
      }, 500);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-primary-900 to-primary-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(81,147,179,0.1)_1px,transparent_1px)] bg-[length:32px_32px]"></div>
      </div>

      <motion.div 
        className="container mx-auto px-4 md:px-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div className="text-center mb-16" variants={item}>
          <motion.span 
            className="inline-block px-4 py-1.5 mb-4 text-xs font-medium uppercase tracking-wider text-cream-100 bg-secondary-600/30 rounded-full border border-secondary-400/20"
            whileHover={{ scale: 1.05 }}
          >
            Let's Connect
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-cream-50">
            Start Your AI Journey
          </h2>
          <p className="text-xl text-cream-100/80 max-w-3xl mx-auto">
            Ready to transform your enterprise with AI? Our team of experts is here to help you build a customized solution.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <motion.div variants={item}>
            <div className="bg-cream-50/5 backdrop-blur-sm rounded-2xl border border-cream-100/10 p-8">
              <h3 className="text-2xl font-bold mb-8 text-cream-50">Why Partner With Us</h3>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary-400/20 text-secondary-400 flex items-center justify-center mr-4">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-cream-50">Enterprise-Ready Solutions</h4>
                    <p className="text-cream-100/70">
                      Built for scale with enterprise-grade security, compliance, and support.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary-400/20 text-secondary-400 flex items-center justify-center mr-4">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-cream-50">Dedicated Support Team</h4>
                    <p className="text-cream-100/70">
                      Expert guidance from strategy through implementation and beyond.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary-400/20 text-secondary-400 flex items-center justify-center mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-cream-50">Email</h4>
                    <a href="mailto:enterprise@fwaip.com" className="text-secondary-400 hover:text-secondary-300 transition-colors">
                      enterprise@fwaip.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary-400/20 text-secondary-400 flex items-center justify-center mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-cream-50">Phone</h4>
                    <a href="tel:+16785179652" className="text-secondary-400 hover:text-secondary-300 transition-colors">
                      +1 (678) 517-9652
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary-400/20 text-secondary-400 flex items-center justify-center mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-cream-50">Location</h4>
                    <p className="text-cream-100/70">
                      5755 North Point Parkway<br />
                      Suite 90<br />
                      Alpharetta, GA 30022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={item}>
            <div className="bg-cream-50/5 backdrop-blur-sm rounded-2xl border border-cream-100/10 p-8">
              {isSubmitted ? (
                <motion.div 
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-20 h-20 bg-secondary-400/20 rounded-full flex items-center justify-center text-secondary-400 mb-6">
                    <Send size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-cream-50">Message Received!</h3>
                  <p className="text-cream-100/80 mb-8 max-w-md">
                    Thank you for reaching out. Our enterprise team will contact you within 24 hours to discuss your AI infrastructure needs.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsSubmitted(false)}
                    className="text-cream-100 border-cream-100/20 hover:bg-cream-100/10"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-8 text-cream-50">Schedule a Consultation</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-cream-100/80 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-cream-50/5 border ${
                            errors.name ? 'border-red-400' : 'border-cream-100/20'
                          } rounded-lg focus:ring-2 focus:ring-secondary-400 focus:border-secondary-400 text-cream-50 placeholder-cream-100/50`}
                          placeholder="John Smith"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-cream-100/80 mb-2">
                          Work Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-cream-50/5 border ${
                            errors.email ? 'border-red-400' : 'border-cream-100/20'
                          } rounded-lg focus:ring-2 focus:ring-secondary-400 focus:border-secondary-400 text-cream-50 placeholder-cream-100/50`}
                          placeholder="john@company.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-cream-100/80 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-cream-50/5 border ${
                            errors.company ? 'border-red-400' : 'border-cream-100/20'
                          } rounded-lg focus:ring-2 focus:ring-secondary-400 focus:border-secondary-400 text-cream-50 placeholder-cream-100/50`}
                          placeholder="Company, Inc."
                        />
                        {errors.company && (
                          <p className="mt-1 text-sm text-red-400">{errors.company}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="industry" className="block text-sm font-medium text-cream-100/80 mb-2">
                          Industry
                        </label>
                        <select
                          id="industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-cream-50/5 border ${
                            errors.industry ? 'border-red-400' : 'border-cream-100/20'
                          } rounded-lg focus:ring-2 focus:ring-secondary-400 focus:border-secondary-400 text-cream-50`}
                        >
                          <option value="" className="bg-primary-900">Select Industry</option>
                          {industries.map((industry) => (
                            <option 
                              key={industry} 
                              value={industry}
                              className="bg-primary-900"
                            >
                              {industry}
                            </option>
                          ))}
                        </select>
                        {errors.industry && (
                          <p className="mt-1 text-sm text-red-400">{errors.industry}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-cream-100/80 mb-2">
                        How can we help?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-cream-50/5 border ${
                          errors.message ? 'border-red-400' : 'border-cream-100/20'
                        } rounded-lg focus:ring-2 focus:ring-secondary-400 focus:border-secondary-400 text-cream-50 placeholder-cream-100/50`}
                        placeholder="Tell us about your AI infrastructure needs..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                      )}
                    </div>
                    
                    <Button variant="primary" type="submit" className="w-full group">
                      Schedule Consultation
                      <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};