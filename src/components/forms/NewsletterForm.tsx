import React, { useState } from 'react';
import { useForm } from '../../context/FormContext';

const NewsletterForm: React.FC = () => {
  const { submitForm, setEmail, source } = useForm();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    company: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmail(formData.email); // Store email for questionnaire
    await submitForm({
      ...formData,
      formName: 'Newsletter Subscription',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-center mb-4">
        <p className="text-sm text-gray-600">
          Subscribe to our newsletter for AI trends, industry insights, and exclusive updates.
        </p>
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

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
        />
      </div>

      {/* Hidden field to track source */}
      <input type="hidden" name="source" value={source || ''} />

      <div className="mt-6">
        <button
          type="submit"
          className="w-full px-6 py-3 bg-primary-700 text-white font-medium rounded-md hover:bg-primary-800 transition-colors"
        >
          Subscribe to Newsletter
        </button>
      </div>
      
      <p className="text-xs text-gray-500 mt-4">
        By subscribing, you agree to receive our newsletter and marketing communications.
        You can unsubscribe at any time. We respect your privacy and will never share your information.
      </p>
    </form>
  );
};

export default NewsletterForm; 