import React from 'react';

const ResultsPoster = () => {
  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Student Results</h2>
        <div className="flex justify-center">
          <div className="relative max-w-2xl">
            {/* Creative border styling */}
            <div className="absolute inset-0 border-8 border-double border-yellow-500 transform rotate-1 rounded-lg"></div>
            <div className="absolute inset-0 border-4 border-blue-600 transform -rotate-1 rounded-lg"></div>
            
            {/* Poster image */}
            <img 
              src="/Result.jpg" 
              alt="Student Results Poster" 
              className="relative z-10 rounded-lg shadow-xl"
            />
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-red-500 rounded-full z-0 opacity-70"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-green-500 rounded-full z-0 opacity-70"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPoster;