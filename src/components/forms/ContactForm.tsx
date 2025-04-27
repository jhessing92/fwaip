import React, { useState } from 'react';
import { useForm } from '../../context/FormContext';

interface ContactFormProps {
  source: string;
  ctaText: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ source, ctaText }) => {
  const { submitForm } = useForm();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
      ...formData,
      formName: 'Contact Us',
      source,
      ctaText
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          placeholder="How can we help you?"
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
          {ctaText || 'Send Message'}
        </button>
      </div>
      
      <p className="text-xs text-gray-500 mt-4">
        By submitting this form, you agree to our privacy policy and terms of service.
        We aim to respond to all inquiries within 24-48 business hours.
      </p>
    </form>
  );
};

export default ContactForm; 