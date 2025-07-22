import React, { useState } from 'react';
import { AnimatedMapPinIcon, AnimatedMailIcon, AnimatedPhoneIcon, AnimatedInstagramIcon, AnimatedLinkedInIcon, AnimatedFacebookIcon, AnimatedYoutubeIcon } from './icons/AnimatedIcons';
import { Button } from '@/components/ui/button';

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
                <AnimatedMapPinIcon className="w-5 h-5 text-secondary" />
                <span className="text-gray-300">Near Jnana Probodhini, Sadashiv Peth, Pune</span>
              </div>
              <div className="flex items-center space-x-3">
                <AnimatedMailIcon className="w-5 h-5 text-secondary" />
                <span className="text-gray-300">info@upscguide.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <AnimatedPhoneIcon className="w-5 h-5 text-secondary" />
                <span className="text-gray-300">+91 88888 88888</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/upsc_guide/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <AnimatedInstagramIcon className="w-5 h-5" />
              </a>
              <a href="https://in.linkedin.com/company/upscguide" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <AnimatedLinkedInIcon className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/upscguideindia/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <AnimatedFacebookIcon className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@UPSCGUIDEINDIA" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <AnimatedYoutubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-700 mt-8 pt-8 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <div className="flex justify-center md:justify-start mb-2">
                  <AnimatedMailIcon className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="text-lg font-semibold text-center md:text-left">Subscribe to our newsletter for the latest updates and insights.</h4>
              </div>
              <div className="flex-1 w-full">
                <div className="flex w-full max-w-md mx-auto md:mx-0">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-4 py-2 rounded-l-md border-0 focus:ring-2 focus:ring-secondary" 
                  />
                  <Button className="bg-secondary hover:bg-secondary/80 text-white rounded-l-none">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 UPSC Guide. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;