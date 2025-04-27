import React, { useState } from 'react';
import { useForm } from '../../context/FormContext';

const ConsultingForm: React.FC = () => {
  const { submitForm, source, ctaText } = useForm();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phoneNumber: '',
    jobTitle: '',
    projectType: '',
    budget: '',
    timeframe: '',
    projectDescription: '',
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
      ...formData,
      formName: 'Consulting Request',
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

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
            Project Type *
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">Select project type</option>
            <option value="AI Strategy">AI Strategy Development</option>
            <option value="Process Automation">Process Automation</option>
            <option value="LLM Implementation">LLM Implementation</option>
            <option value="Custom AI Solutions">Custom AI Solutions</option>
            <option value="Data Integration">Data Integration & ETL</option>
            <option value="White-Label Solutions">White-Label Solutions</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">Select budget range</option>
            <option value="Under $10k">Under $10,000</option>
            <option value="$10k-$25k">$10,000 - $25,000</option>
            <option value="$25k-$50k">$25,000 - $50,000</option>
            <option value="$50k-$100k">$50,000 - $100,000</option>
            <option value="$100k+">$100,000+</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700 mb-1">
          Desired Timeframe *
        </label>
        <select
          id="timeframe"
          name="timeframe"
          required
          value={formData.timeframe}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="">Select timeframe</option>
          <option value="Immediate">Immediate (ASAP)</option>
          <option value="1-3 months">1-3 months</option>
          <option value="3-6 months">3-6 months</option>
          <option value="6+ months">6+ months</option>
        </select>
      </div>

      <div>
        <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-1">
          Project Description *
        </label>
        <textarea
          id="projectDescription"
          name="projectDescription"
          rows={4}
          required
          placeholder="Please describe your project, goals, and any specific requirements..."
          value={formData.projectDescription}
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
          Submit Consulting Request
        </button>
      </div>
      
      <p className="text-xs text-gray-500 mt-4">
        By submitting this form, you agree to our privacy policy and terms of service.
        We'll use your information to process your request and contact you about our services.
      </p>
    </form>
  );
};

export default ConsultingForm; 