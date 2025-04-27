import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    content: "Flywheel AI has transformed how we operate. Their agentic AI infrastructure automated 70% of our routine tasks, leading to a 40% increase in team productivity.",
    author: "Sarah Johnson",
    role: "CTO, TechNova",
    image: "https://images.pexels.com/photos/3760608/pexels-photo-3760608.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    stats: {
      label: "Productivity Increase",
      value: "40%"
    }
  },
  {
    content: "The SmartStack™ deployment revolutionized our tech infrastructure. We're now processing customer requests 5x faster with 99.9% accuracy.",
    author: "Michael Chen",
    role: "Director of Operations, Quantum Enterprises",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    stats: {
      label: "Process Efficiency",
      value: "5x"
    }
  },
  {
    content: "Their enterprise-grade security and compliance standards gave us confidence to deploy AI across our sensitive operations. The ROI has been remarkable.",
    author: "Alicia Ramirez",
    role: "Product Manager, InnovateCorp",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    stats: {
      label: "Security Rating",
      value: "A+"
    }
  }
];

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="py-32 bg-[#001219] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:32px_32px]" />
      </div>
      
      {/* Subtle gradient at the bottom for transition */}
      <div className="absolute left-0 right-0 bottom-0 h-16 bg-gradient-to-t from-[#001e29] to-[#001219]"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block px-4 py-1.5 mb-4 text-xs font-medium uppercase tracking-wider text-secondary-400 bg-secondary-400/10 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Client Success Stories
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            See how leading enterprises are transforming their operations with our AI infrastructure solutions.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative h-[400px]">
            <AnimatePresence initial={false} custom={activeIndex}>
              {testimonials.map((testimonial, index) => (
                index === activeIndex && (
                  <motion.div
                    key={index}
                    className="absolute inset-0"
                    custom={activeIndex}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                  >
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 h-full">
                      <div className="grid md:grid-cols-2 gap-8 h-full">
                        <div className="flex flex-col justify-between">
                          <div>
                            <div className="flex gap-1 mb-6">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} size={20} className="text-secondary-400 fill-secondary-400" />
                              ))}
                            </div>
                            <Quote size={48} className="text-secondary-400/30 mb-6" />
                            <blockquote className="text-xl md:text-2xl font-medium mb-8 text-white leading-relaxed">
                              "{testimonial.content}"
                            </blockquote>
                          </div>
                          
                          <div className="flex items-center mt-auto">
                            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-secondary-400/20">
                              <img
                                src={testimonial.image}
                                alt={testimonial.author}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-semibold text-white">{testimonial.author}</p>
                              <p className="text-white/60 text-sm">{testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-6xl md:text-7xl font-bold text-secondary-400 mb-4">
                              {testimonial.stats.value}
                            </div>
                            <p className="text-lg text-white/60">
                              {testimonial.stats.label}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};