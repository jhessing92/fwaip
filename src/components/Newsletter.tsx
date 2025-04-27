import React, { useState } from 'react';
import { Send, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setTimeout(() => {
      setIsSubmitted(true);
      setEmail('');
    }, 500);
  };

  return (
    <section id="newsletter" className="py-20 bg-[#f5f7fa] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(81,147,179,0.1)_1px,transparent_1px)] bg-[length:32px_32px]"></div>
      </div>

      <motion.div 
        className="container mx-auto px-4 md:px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto bg-cream-50/80 backdrop-blur-sm rounded-2xl border border-cream-100 shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            <div>
              <motion.span 
                className="inline-block px-4 py-1.5 mb-4 text-xs font-medium uppercase tracking-wider text-primary-600 bg-cream-100 rounded-full"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Stay Updated
              </motion.span>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4 text-primary-700"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Get Enterprise AI Insights
              </motion.h2>
              <motion.p 
                className="text-lg text-primary-600/80 mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Join industry leaders receiving our weekly insights on AI infrastructure, automation strategies, and digital transformation.
              </motion.p>
              <div className="space-y-4 text-primary-600/80">
                <div className="flex items-center">
                  <ArrowRight size={16} className="mr-2 text-secondary-400" />
                  <span>Enterprise case studies</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight size={16} className="mr-2 text-secondary-400" />
                  <span>Implementation guides</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight size={16} className="mr-2 text-secondary-400" />
                  <span>Industry research & trends</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              {isSubmitted ? (
                <motion.div 
                  className="text-center w-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-100 text-secondary-600 mb-4">
                    <Send size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-primary-700">Welcome Aboard!</h3>
                  <p className="text-primary-600/80 mb-6">
                    You're now part of our community. Watch your inbox for exclusive insights.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsSubmitted(false)}
                  >
                    Subscribe Another Email
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="w-full space-y-4">
                  <div>
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your work email"
                      className={`w-full px-4 py-3 rounded-lg bg-white border ${
                        error ? 'border-red-300' : 'border-cream-200'
                      } focus:ring-2 focus:ring-secondary-400 focus:border-secondary-400 transition-colors`}
                    />
                    {error && (
                      <p className="mt-1 text-sm text-red-600">{error}</p>
                    )}
                  </div>
                  
                  <Button variant="primary" className="w-full" type="submit">
                    Subscribe to Newsletter
                    <Send size={18} className="ml-2" />
                  </Button>
                  
                  <p className="text-xs text-center text-primary-600/60">
                    By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};