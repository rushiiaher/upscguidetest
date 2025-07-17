import React from 'react';
import { MapPin, Mail, Phone, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/UPSC_GUIDE_LOGO.png" 
                alt="UPSC Guide" 
                className="h-12 sm:h-14 md:h-16 w-auto"
              />
            </div>
            <p className="text-gray-300">
              Helping UPSC aspirants with guidance, study materials, and mentorship to succeed in civil services exams.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-gray-300">Near Jnana Probodhini, Sadashiv Peth, Pune</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-gray-300">info@upscguide.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-gray-300">+91 88888 88888</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/upsc_guide/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://in.linkedin.com/company/upscguide" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://www.facebook.com/upscguideindia/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@UPSCGUIDEINDIA" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 UPSC Guide. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;