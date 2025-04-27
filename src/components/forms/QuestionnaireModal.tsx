import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useForm } from '../../context/FormContext';

export const QuestionnaireModal: React.FC = () => {
  const { showQuestionnaireModal, hideQuestionnaire, submitForm, email, source } = useForm();
  const [formData, setFormData] = useState({
    interests: [] as string[],
    industry: '',
    role: '',
    challenges: '',
    timeframe: '',
  });

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData(prev => ({
        ...prev,
        interests: [...prev.interests, value]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        interests: prev.interests.filter(i => i !== value)
      }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm({
      ...formData,
      email, // Include the email from the newsletter signup
      formName: 'Newsletter Questionnaire',
    });
    hideQuestionnaire();
  };

  const handleSkip = () => {
    hideQuestionnaire();
  };

  return (
    <AnimatePresence>
      {showQuestionnaireModal && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={hideQuestionnaire}
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
                    Help Us Customize Your Experience
                  </h2>
                  <button 
                    onClick={hideQuestionnaire}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="mb-6">
                  <p className="text-gray-600">
                    Thanks for subscribing! Please take a moment to help us personalize your newsletter experience.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What AI topics are you most interested in? (Select all that apply)
                    </label>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="interest-infrastructure"
                          value="AI Infrastructure"
                          onChange={handleCheckboxChange}
                          className="mt-1 mr-2"
                        />
                        <label htmlFor="interest-infrastructure" className="text-sm text-gray-600">
                          AI Infrastructure & Implementation
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="interest-automation"
                          value="Process Automation"
                          onChange={handleCheckboxChange}
                          className="mt-1 mr-2"
                        />
                        <label htmlFor="interest-automation" className="text-sm text-gray-600">
                          Process Automation & Workflows
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="interest-agents"
                          value="Intelligent Agents"
                          onChange={handleCheckboxChange}
                          className="mt-1 mr-2"
                        />
                        <label htmlFor="interest-agents" className="text-sm text-gray-600">
                          Intelligent Agents & Co-Pilots
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="interest-strategy"
                          value="AI Strategy"
                          onChange={handleCheckboxChange}
                          className="mt-1 mr-2"
                        />
                        <label htmlFor="interest-strategy" className="text-sm text-gray-600">
                          AI Strategy & Business Impact
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="interest-trends"
                          value="Industry Trends"
                          onChange={handleCheckboxChange}
                          className="mt-1 mr-2"
                        />
                        <label htmlFor="interest-trends" className="text-sm text-gray-600">
                          Industry Trends & Case Studies
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                      Which industry do you work in?
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select an industry</option>
                      <option value="Finance">Financial Services</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Technology">Technology</option>
                      <option value="RealEstate">Real Estate</option>
                      <option value="Retail">Retail</option>
                      <option value="Education">Education</option>
                      <option value="Government">Government</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                      What is your role?
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select your role</option>
                      <option value="C-Suite">C-Suite/Executive</option>
                      <option value="Director">Director/Manager</option>
                      <option value="IT">IT Professional</option>
                      <option value="Developer">Developer/Engineer</option>
                      <option value="Operations">Operations</option>
                      <option value="Analytics">Analytics/Data Science</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="challenges" className="block text-sm font-medium text-gray-700 mb-1">
                      What challenges are you looking to solve with AI?
                    </label>
                    <textarea
                      id="challenges"
                      name="challenges"
                      rows={3}
                      value={formData.challenges}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700 mb-1">
                      What is your implementation timeframe?
                    </label>
                    <select
                      id="timeframe"
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select timeframe</option>
                      <option value="Immediate">Currently implementing</option>
                      <option value="Near-term">Within 3-6 months</option>
                      <option value="Medium-term">6-12 months</option>
                      <option value="Long-term">Beyond 12 months</option>
                      <option value="Research">Just researching</option>
                    </select>
                  </div>

                  {/* Hidden fields */}
                  <input type="hidden" name="source" value={source || ''} />
                  <input type="hidden" name="email" value={email || ''} />

                  <div className="flex gap-4 mt-6">
                    <button
                      type="button"
                      onClick={handleSkip}
                      className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-md hover:bg-gray-300 transition-colors"
                    >
                      Skip
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-6 py-3 bg-primary-700 text-white font-medium rounded-md hover:bg-primary-800 transition-colors"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}; 