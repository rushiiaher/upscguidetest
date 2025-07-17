import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Mentors from '@/components/Mentors';
import ContactOptions from '@/components/ContactOptions';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ScrollToTop from '@/components/ScrollToTop';
import ResultsPoster from '@/components/ResultsPoster';

import StudentVideoTestimonials from '@/components/StudentVideoTestimonials';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <main>
        <Hero />
        <ResultsPoster />
        <StudentVideoTestimonials />
        <Mentors />
        <ContactOptions />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
};

export default Index;
