import React, { useState } from 'react';
import { useForm } from '../../context/FormContext';

const IndustrySpecificForm: React.FC = () => {
  const { submitForm, industry, source, ctaText } = useForm();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phoneNumber: '',
    jobTitle: '',
    companySize: '',
    timeframe: '',
    message: '',
    currentChallenges: '',
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
      formName: `${industry} Industry Solution`,
    });
  };

  // Helper to get industry-specific placeholders and labels
  const getIndustrySpecificContent = () => {
    switch (industry) {
      case 'finance':
        return {
          title: 'Financial Services AI Strategy Session',
          challengesLabel: 'Current Financial Workflow Challenges',
          challengesPlaceholder: 'Describe your current challenges with financial operations, compliance, or customer experience...',
          messageLabel: 'Specific Financial Use Cases',
          messagePlaceholder: 'Share any specific financial use cases you\'re interested in exploring with AI...'
        };
      case 'manufacturing':
        return {
          title: 'Manufacturing AI Strategy Session',
          challengesLabel: 'Current Production Challenges',
          challengesPlaceholder: 'Describe your current challenges with production efficiency, quality control, or supply chain...',
          messageLabel: 'Specific Manufacturing Use Cases',
          messagePlaceholder: 'Share any specific manufacturing processes you\'re looking to optimize with AI...'
        };
      case 'healthcare':
        return {
          title: 'Healthcare AI Strategy Session',
          challengesLabel: 'Current Healthcare Challenges',
          challengesPlaceholder: 'Describe your current challenges with patient care, administrative efficiency, or data management...',
          messageLabel: 'Specific Healthcare Use Cases',
          messagePlaceholder: 'Share any specific healthcare workflows you\'re looking to enhance with AI...'
        };
      case 'tech':
        return {
          title: 'Technology AI Strategy Session',
          challengesLabel: 'Current Technical Challenges',
          challengesPlaceholder: 'Describe your current challenges with development, operations, or customer support...',
          messageLabel: 'Specific Technology Use Cases',
          messagePlaceholder: 'Share any specific technical processes you\'re looking to automate with AI...'
        };
      case 'realestate':
        return {
          title: 'Real Estate AI Strategy Session',
          challengesLabel: 'Current Real Estate Challenges',
          challengesPlaceholder: 'Describe your current challenges with property management, client acquisition, or document processing...',
          messageLabel: 'Specific Real Estate Use Cases',
          messagePlaceholder: 'Share any specific real estate processes you\'re looking to optimize with AI...'
        };
      default:
        return {
          title: 'Industry-Specific AI Strategy Session',
          challengesLabel: 'Current Business Challenges',
          challengesPlaceholder: 'Describe your current business challenges...',
          messageLabel: 'Specific Use Cases',
          messagePlaceholder: 'Share any specific use cases you\'re interested in exploring with AI...'
        };
    }
  };

  const content = getIndustrySpecificContent();

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-sm text-primary-700 mb-4">
        <p>Request an industry-specific consultation for <strong>{industry}</strong> solutions.</p>
      </div>

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
          <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-1">
            Company Size *
          </label>
          <select
            id="companySize"
            name="companySize"
            required
            value={formData.companySize}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">Select size</option>
            <option value="1-10">1-10 employees</option>
            <option value="11-50">11-50 employees</option>
            <option value="51-200">51-200 employees</option>
            <option value="201-500">201-500 employees</option>
            <option value="501-1000">501-1000 employees</option>
            <option value="1001+">1001+ employees</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700 mb-1">
            Implementation Timeframe *
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
            <option value="Immediate">Immediate (0-3 months)</option>
            <option value="Near-term">Near-term (3-6 months)</option>
            <option value="Medium-term">Medium-term (6-12 months)</option>
            <option value="Long-term">Long-term (12+ months)</option>
            <option value="Exploring">Just exploring options</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="currentChallenges" className="block text-sm font-medium text-gray-700 mb-1">
          {content.challengesLabel} *
        </label>
        <textarea
          id="currentChallenges"
          name="currentChallenges"
          rows={3}
          required
          placeholder={content.challengesPlaceholder}
          value={formData.currentChallenges}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
        ></textarea>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          {content.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder={content.messagePlaceholder}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
        ></textarea>
      </div>

      {/* Hidden fields to track source */}
      <input type="hidden" name="source" value={source || ''} />
      <input type="hidden" name="ctaText" value={ctaText || ''} />
      <input type="hidden" name="industry" value={industry || ''} />

      <div className="mt-6">
        <button
          type="submit"
          className="w-full px-6 py-3 bg-primary-700 text-white font-medium rounded-md hover:bg-primary-800 transition-colors"
        >
          Submit Request
        </button>
      </div>
      
      <p className="text-xs text-gray-500 mt-4">
        By submitting this form, you agree to our privacy policy and terms of service.
        We'll use your information to process your request and contact you about our services.
      </p>
    </form>
  );
};

export default IndustrySpecificForm; 