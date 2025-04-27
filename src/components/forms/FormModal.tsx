import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useForm } from '../../context/FormContext';
import StrategySessionForm from './StrategySessionForm';
import IndustrySpecificForm from './IndustrySpecificForm';
import NewsletterForm from './NewsletterForm';
import ConsultingForm from './ConsultingForm';

export const FormModal: React.FC = () => {
  const { isFormOpen, formType, closeForm } = useForm();

  // Render different form based on type
  const renderForm = () => {
    switch (formType) {
      case 'strategy-session':
        return <StrategySessionForm />;
      case 'industry-specific':
        return <IndustrySpecificForm />;
      case 'newsletter':
        return <NewsletterForm />;
      case 'consulting':
        return <ConsultingForm />;
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isFormOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeForm}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div 
              className="bg-white rounded-2xl shadow-xl max-w-md w-full mx-auto overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-primary-800">
                    {formType === 'strategy-session' && 'Schedule a Strategy Call'}
                    {formType === 'industry-specific' && 'Industry Solution Request'}
                    {formType === 'newsletter' && 'Subscribe to Newsletter'}
                    {formType === 'consulting' && 'Request Consulting Services'}
                  </h2>
                  <button 
                    onClick={closeForm}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {renderForm()}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}; 