import React from 'react';
import { AnimatedWhatsAppIcon } from './icons/AnimatedIcons';

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918888888888?text=Hi! I need guidance for UPSC preparation.', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <AnimatedWhatsAppIcon className="w-6 h-6" fillColor="white" />
      </button>
      <div className="absolute -top-12 right-0 bg-gray-800 text-white text-xs px-3 py-1 rounded-lg opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
        Need help? Chat with us!
      </div>
    </div>
  );
};

export default FloatingWhatsApp;