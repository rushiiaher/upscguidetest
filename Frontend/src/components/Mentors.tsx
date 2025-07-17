import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const mentors = [
  {
    name: "Jaiprakash Rau Sir",
    image: "/Mentor/Jaiprakash Rau Sir.png",
    title: "Ex. IRS, Enforcement Directorate",
    experience: "7 Years + Experience"
  },
  {
    name: "Vinay Gowda Sir",
    image: "/Mentor/vinay.png",
    title: "1 Interview + 2 Mains",
    experience: "6 Years+ Experience"
  },
  {
    name: "Pritha Hosur Ma'am",
    image: "/Mentor/pritha.png",
    title: "5 Interview + 6 Mains",
    experience: "5 Years + Interview"
  },
  {
    name: "Paras Chitkara Sir",
    image: "/Mentor/paras.png",
    title: "4 UPSC Interview + 5 UPSC Mains",
    experience: "4 Years + Experience"
  },
  {
    name: "Megha Gupta Ma'am",
    image: "/Mentor/Megha-Gupta.png",
    title: "AIR 674, UPSC CSE",
    experience: "4 Years+ Experience"
  },
  {
    name: "Venus Awatini Ma'am",
    image: "/Mentor/Venus Maam.png",
    title: "1 Interview + 3 Mains",
    experience: "4 Years + Experience"
  },
  {
    name: "Seema Kumari Ma'am",
    image: "/Mentor/seemakumari.png",
    title: "1 Interview + 3 Mains",
    experience: "4 Years + Experience"
  }
];

const Mentors = () => {
  return (
    <section id="mentors" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border-l-4 border-t-4 border-navy/20 rounded-tl-3xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 border-r-4 border-b-4 border-navy/20 rounded-br-3xl"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          {/* Decorative L-shaped elements */}
          <div className="absolute top-0 left-1/4 w-16 h-2 bg-navy hidden md:block"></div>
          <div className="absolute top-0 left-1/4 w-2 h-16 bg-navy hidden md:block"></div>
          <div className="absolute top-0 right-1/4 w-16 h-2 bg-navy hidden md:block"></div>
          <div className="absolute top-0 right-1/4 w-2 h-16 bg-navy hidden md:block"></div>
          
          <h2 className="text-4xl font-bold text-navy mb-4 relative inline-block px-8">
            <span className="relative z-10">Meet Our Faculty</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-navy"></div>
          </h2>
          
          <p className="text-lg text-text-gray max-w-3xl mx-auto leading-relaxed mt-8">
            Learn from experienced professionals who have successfully navigated the UPSC journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {mentors.slice(0, 4).map((mentor, index) => (
            <div key={index} className="text-center hover:scale-105 transition-transform duration-300 relative p-6 group">
              {/* L-shaped frame */}
              <div className="absolute top-0 left-0 w-12 h-2 bg-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 left-0 w-2 h-12 bg-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 w-12 h-2 bg-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-12 h-2 bg-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 right-0 w-12 h-2 bg-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 right-0 w-2 h-12 bg-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Glowing effect on hover */}
              <div className="absolute inset-0 bg-navy/5 opacity-0 group-hover:opacity-100 rounded-lg transition-all duration-300"></div>
              
              {/* Image Section */}
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10 group-hover:border-navy/20 transition-all duration-300">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content Section */}
              <h3 className="font-bold text-xl text-navy mb-2 leading-tight relative z-10">
                {mentor.name}
              </h3>
              <p className="text-text-gray text-sm mb-4 leading-relaxed relative z-10">
                {mentor.title}
              </p>
              
              {/* Experience with Trophy */}
              <div className="flex items-center justify-center gap-2 relative z-10">
                <span className="text-navy text-lg">🏆</span>
                <span className="text-navy text-sm font-semibold">
                  {mentor.experience}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom 3 cards centered */}
        <div className="flex justify-center mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl">
            {mentors.slice(4).map((mentor, index) => (
              <div key={index + 4} className="text-center hover:scale-105 transition-transform duration-300 relative p-6 group">
                {/* L-shaped frame */}
                <div className="absolute top-0 left-0 w-12 h-2 bg-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 left-0 w-2 h-12 bg-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-12 h-2 bg-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-12 h-2 bg-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-12 h-2 bg-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-2 h-12 bg-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Glowing effect on hover */}
                <div className="absolute inset-0 bg-navy/5 opacity-0 group-hover:opacity-100 rounded-lg transition-all duration-300"></div>
                
                {/* Image Section */}
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10 group-hover:border-navy/20 transition-all duration-300">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content Section */}
                <h3 className="font-bold text-xl text-navy mb-2 leading-tight relative z-10">
                  {mentor.name}
                </h3>
                <p className="text-text-gray text-sm mb-4 leading-relaxed relative z-10">
                  {mentor.title}
                </p>
                
                {/* Experience with Trophy */}
                <div className="flex items-center justify-center gap-2 relative z-10">
                  <span className="text-navy text-lg">🏆</span>
                  <span className="text-navy text-sm font-semibold">
                    {mentor.experience}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentors;