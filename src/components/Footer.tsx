import React from 'react';
import { Linkedin } from 'lucide-react';
import { Logo } from './ui/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-5 py-8 md:py-12">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-5 md:mb-6">
            <Logo variant="light" />
          </div>
          
          <p className="text-gray-400 text-sm md:text-base text-center max-w-md mx-auto mb-6 md:mb-8 px-2">
            We help businesses transform ideas into impactful digital experiences
            that drive growth and deliver exceptional results.
          </p>
          
          {/* LinkedIn link updated */}
          <div className="mb-6 md:mb-8">
            <a 
              href="https://www.linkedin.com/company/flywheel-ai-partners/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="text-gray-300" />
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-5 md:pt-6 w-full max-w-md">
            <p className="text-xs text-gray-500 text-center">
              © {new Date().getFullYear()} Flywheel AI Partners. All rights reserved.
            </p>
          </div>
        </div>
        
        {/* Hidden sections preserved */}
        <div className="hidden">
          {/* Hidden company links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Our Team</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a>
              </li>
            </ul>
          </div>
          
          {/* Hidden resources links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">API Reference</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Status</a>
              </li>
            </ul>
          </div>
          
          {/* Hidden legal links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Data Processing</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">GDPR Compliance</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};