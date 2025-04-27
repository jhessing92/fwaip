import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import { useForm } from '../../context/FormContext';

export const SuccessModal: React.FC = () => {
  const { showSuccessModal, hideSuccess } = useForm();

  return (
    <AnimatePresence>
      {showSuccessModal && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={hideSuccess}
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
              <div className="p-6">
                <div className="flex justify-end">
                  <button 
                    onClick={hideSuccess}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    <CheckCircle size={64} className="text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Thank You!
                  </h2>
                  <p className="text-lg text-gray-600">
                    Your submission has been received. We'll be in touch shortly.
                  </p>
                </div>
                
                <button
                  onClick={hideSuccess}
                  className="w-full px-6 py-3 bg-primary-700 text-white font-medium rounded-md hover:bg-primary-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}; 