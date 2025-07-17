import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
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
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-text-black hover:text-navy transition-colors font-medium text-sm">Home</a>
            <a href="https://upscguide.in/web/Course/course_details_title/step-up-mentorship-program-with-test-series" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-secondary transition-colors font-medium text-sm">Enroll Now</a>
            <a href="#mentors" className="text-text-black hover:text-navy transition-colors font-medium text-sm">Faculty</a>
            <a href="#contact-options" className="text-text-black hover:text-navy transition-colors font-medium text-sm">Contact</a>
          </nav>

          {/* Call Now Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="default" 
              className="bg-gradient-to-r from-navy to-secondary hover:from-secondary hover:to-navy text-white shadow-button transition-all duration-300 border border-white/20 font-semibold relative overflow-hidden group text-sm h-9 px-4"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-navy/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2 relative z-10 animate-pulse">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span className="relative z-10">Call Now</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-1.5 rounded-md hover:bg-light-gray transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-3 pt-4">
              <a href="#home" className="text-text-black hover:text-navy transition-colors px-2 py-1 font-medium">Home</a>
              <a href="https://upscguide.in/web/Course/course_details_title/step-up-mentorship-program-with-test-series" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-secondary transition-colors px-2 py-1 font-medium">Enroll Now</a>
              <a href="#mentors" className="text-text-black hover:text-navy transition-colors px-2 py-1 font-medium">Faculty</a>
              <a href="#contact-options" className="text-text-black hover:text-navy transition-colors px-2 py-1 font-medium">Contact</a>
              <div className="pt-2">
                <Button 
                  variant="default" 
                  className="bg-gradient-to-r from-navy to-secondary hover:from-secondary hover:to-navy text-white shadow-button transition-all duration-300 w-full border border-white/20 font-semibold relative overflow-hidden group"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-navy/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2 relative z-10 animate-pulse">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
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