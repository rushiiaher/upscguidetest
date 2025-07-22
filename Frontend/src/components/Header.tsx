import React, { useState } from 'react';
import { AnimatedMenuIcon, AnimatedCloseIcon, AnimatedPhoneIcon } from './icons/AnimatedIcons';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center py-0 px-1 rounded bg-white">
            <img 
              src="/UG LOGO.png" 
              alt="UPSC Guide" 
              className="h-12 md:h-14 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link group relative overflow-hidden px-3 py-2">
              <span className="relative z-10 text-text-black group-hover:text-white font-medium text-base transition-colors duration-300">Home</span>
              <span className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-navy to-secondary group-hover:h-full transition-all duration-300 -z-0"></span>
            </a>
            <a href="https://upscguide.in/web/Course/course_details_title/step-up-mentorship-program-with-test-series" target="_blank" rel="noopener noreferrer" className="nav-link group relative overflow-hidden px-3 py-2">
              <span className="relative z-10 text-navy group-hover:text-white font-medium text-base transition-colors duration-300">Enroll Now</span>
              <span className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-navy to-secondary group-hover:h-full transition-all duration-300 -z-0"></span>
            </a>
            <a href="#mentors" className="nav-link group relative overflow-hidden px-3 py-2">
              <span className="relative z-10 text-text-black group-hover:text-white font-medium text-base transition-colors duration-300">Faculty</span>
              <span className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-navy to-secondary group-hover:h-full transition-all duration-300 -z-0"></span>
            </a>
            <a href="#contact-options" className="nav-link group relative overflow-hidden px-3 py-2">
              <span className="relative z-10 text-text-black group-hover:text-white font-medium text-base transition-colors duration-300">Contact</span>
              <span className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-navy to-secondary group-hover:h-full transition-all duration-300 -z-0"></span>
            </a>
          </nav>

          {/* Call Now Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="default" 
              className="bg-gradient-to-r from-navy to-secondary hover:from-secondary hover:to-navy text-white shadow-button transition-all duration-300 border border-white/20 font-semibold relative overflow-hidden group text-sm h-9 px-4"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-navy/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <AnimatedPhoneIcon className="w-4 h-4 mr-2 relative z-10" />
              <span className="relative z-10">Call Now</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-1.5 rounded-md hover:bg-light-gray transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <AnimatedCloseIcon className="w-5 h-5" /> : <AnimatedMenuIcon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="mobile-nav-link relative overflow-hidden px-3 py-2 font-medium text-base">
                <span className="relative z-10 text-text-black">Home</span>
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-navy to-secondary group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="https://upscguide.in/web/Course/course_details_title/step-up-mentorship-program-with-test-series" target="_blank" rel="noopener noreferrer" className="mobile-nav-link relative overflow-hidden px-3 py-2 font-medium text-base text-navy">
                <span className="relative z-10">Enroll Now</span>
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-navy to-secondary group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#mentors" className="mobile-nav-link relative overflow-hidden px-3 py-2 font-medium text-base">
                <span className="relative z-10 text-text-black">Faculty</span>
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-navy to-secondary group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact-options" className="mobile-nav-link relative overflow-hidden px-3 py-2 font-medium text-base">
                <span className="relative z-10 text-text-black">Contact</span>
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-navy to-secondary group-hover:w-full transition-all duration-300"></span>
              </a>
              <div className="pt-2">
                <Button 
                  variant="default" 
                  className="bg-gradient-to-r from-navy to-secondary hover:from-secondary hover:to-navy text-white shadow-button transition-all duration-300 w-full border border-white/20 font-semibold relative overflow-hidden group"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-navy/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <AnimatedPhoneIcon className="w-4 h-4 mr-2 relative z-10" />
                  <span className="relative z-10">Call Now</span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;