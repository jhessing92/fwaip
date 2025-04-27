import React, { useEffect, useRef } from 'react';
import { Check, X } from 'lucide-react';
import { Button } from './ui/Button';
import { useForm } from '../context/FormContext';

const plans = [
  {
    name: 'Starter',
    price: 49,
    description: 'Perfect for small teams getting started',
    features: [
      'Up to 5 team members',
      'Basic analytics',
      'Standard support',
      '1GB storage',
      'Access to core features',
    ],
    notIncluded: [
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    price: 99,
    description: 'Ideal for growing businesses',
    features: [
      'Up to 20 team members',
      'Advanced analytics',
      'Priority support',
      '10GB storage',
      'Access to all features',
      'API access',
    ],
    notIncluded: [
      'Custom integrations',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 249,
    description: 'For large organizations with complex needs',
    features: [
      'Unlimited team members',
      'Advanced analytics',
      '24/7 dedicated support',
      'Unlimited storage',
      'Access to all features',
      'API access',
      'Custom integrations',
      'Dedicated account manager',
    ],
    notIncluded: [],
    cta: 'Contact Sales',
    popular: false,
  },
];

export const Pricing: React.FC = () => {
  const pricingRef = useRef<HTMLDivElement>(null);
  const { openForm } = useForm();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const planElements = entry.target.querySelectorAll('.pricing-plan');
          planElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('opacity-100', 'translate-y-0');
              el.classList.remove('opacity-0', 'translate-y-8');
            }, index * 150);
          });
        }
      },
      { threshold: 0.1 }
    );
    
    if (pricingRef.current) {
      observer.observe(pricingRef.current);
    }
    
    return () => {
      if (pricingRef.current) {
        observer.unobserve(pricingRef.current);
      }
    };
  }, []);

  const handlePlanClick = (planName: string, ctaText: string) => {
    openForm('consulting', 'Pricing Section', undefined, ctaText);
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium uppercase tracking-wider text-blue-600 bg-blue-50 rounded-full">
            Pricing Plans
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Choose the Perfect Plan for Your Business
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Flexible options designed to scale with your business needs. All plans include core features.
          </p>
        </div>

        <div 
          ref={pricingRef}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-plan relative rounded-xl overflow-hidden transition-all duration-300 opacity-0 translate-y-8 ${
                plan.popular 
                  ? 'border-2 border-blue-600 shadow-xl bg-white' 
                  : 'border border-gray-200 shadow-sm bg-white hover:shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 w-full text-center py-2 bg-blue-600 text-white text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className={`p-6 ${plan.popular ? 'pt-12' : 'pt-6'}`}>
                <h3 className="text-xl font-bold mb-1 text-gray-900">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                
                <Button 
                  variant={plan.popular ? 'primary' : 'secondary'} 
                  className="w-full mb-6"
                  onClick={() => handlePlanClick(plan.name, plan.cta)}
                >
                  {plan.cta}
                </Button>
                
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 mt-0.5">
                        <Check size={14} />
                      </div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start text-gray-400">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mr-2 mt-0.5">
                        <X size={14} />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};