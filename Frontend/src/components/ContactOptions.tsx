import React from 'react';
import { Button } from '@/components/ui/button';
import { AnimatedWhatsAppIcon, AnimatedPhoneIcon } from './icons/AnimatedIcons';

const ContactOptions = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918888888888', '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+918888888888', '_blank');
  };

  return (
    <section id="contact-options" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Prefer to Talk Directly?
          </h2>
          <p className="text-lg text-text-black font-medium">
            Connect with our counselors instantly for immediate assistance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* WhatsApp Card */}
          <div className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AnimatedWhatsAppIcon className="w-8 h-8" fillColor="#25D366" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Chat on WhatsApp</h3>
              <p className="text-text-black mb-6 font-medium">
                Get instant responses to your queries and quick guidance from our experts
              </p>
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-success-green hover:bg-green-700 text-white transition-all duration-200 shadow-lg"
              >
                <AnimatedWhatsAppIcon className="w-4 h-4 mr-2" fillColor="white" />
                Start WhatsApp Chat
              </Button>
            </div>
          </div>

          {/* Call Card */}
          <div className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <AnimatedPhoneIcon className="w-8 h-8" color="#0a2463" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Direct Call</h3>
              <p className="text-text-black mb-6 font-medium">
                Speak directly with our counselors for detailed discussion about your preparation
              </p>
              <Button
                onClick={handleCallClick}
                className="w-full bg-gradient-to-r from-navy to-secondary hover:from-secondary hover:to-navy text-white shadow-button transition-all duration-300 border border-white/20 font-semibold relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-navy/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute -inset-x-full bottom-0 h-px bg-gradient-to-r from-transparent via-white to-transparent group-hover:animate-[shimmer_2s_infinite]"></span>
                <AnimatedPhoneIcon className="w-4 h-4 mr-2 relative z-10" />
                <span className="relative z-10">Call Now</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactOptions;