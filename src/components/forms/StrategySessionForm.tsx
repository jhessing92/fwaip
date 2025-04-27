import React, { useState } from 'react';
import { useForm } from '../../context/FormContext';

const StrategySessionForm: React.FC = () => {
  const { submitForm, source, ctaText } = useForm();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phoneNumber: '',
    jobTitle: '',
    interestArea: '',
    message: '',
  });

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
      name: formData.name.trim(),
      email: formData.email.trim(),
      company: formData.company.trim(),
      phoneNumber: formData.phoneNumber.trim(),
      jobTitle: formData.jobTitle.trim(),
      interestArea: formData.interestArea.trim(),
      message: formData.message.trim(),
      formName: 'Strategy Session',
      formType: 'strategy-session',
      timestamp: new Date().toISOString(),
      source: source || '',
      ctaText: ctaText || '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Company *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
          Job Title *
        </label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          required
          value={formData.jobTitle}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
        />
      </div>

      <div>
        <label htmlFor="interestArea" className="block text-sm font-medium text-gray-700 mb-1">
          Area of Interest *
        </label>
        <select
          id="interestArea"
          name="interestArea"
          required
          value={formData.interestArea}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="">Select an option</option>
          <option value="AI Infrastructure">AI Infrastructure</option>
          <option value="Process Automation">Process Automation</option>
          <option value="Data Solutions">Data Solutions</option>
          <option value="Custom LLM Development">Custom LLM Development</option>
          <option value="AI Strategy Consulting">AI Strategy Consulting</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Additional Information
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
        ></textarea>
      </div>

      {/* Hidden fields to track source */}
      <input type="hidden" name="source" value={source || ''} />
      <input type="hidden" name="ctaText" value={ctaText || ''} />

      <div className="mt-6">
        <button
          type="submit"
          className="w-full px-6 py-3 bg-primary-700 text-white font-medium rounded-md hover:bg-primary-800 transition-colors"
        >
          Schedule Strategy Call
        </button>
      </div>
      
      <p className="text-xs text-gray-500 mt-4">
        By submitting this form, you agree to our privacy policy and terms of service.
        We'll use your information to process your request and contact you about our services.
      </p>
    </form>
  );
};

export default StrategySessionForm; 