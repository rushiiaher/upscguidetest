import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      rank: "IAS Rank 45",
      image: "/api/placeholder/80/80",
      quote: "The personalized guidance and mock interviews were game-changers for my preparation.",
      rating: 5
    },
    {
      name: "Rahul Kumar",
      rank: "IPS Rank 23",
      image: "/api/placeholder/80/80",
      quote: "Expert mentors helped me identify my weak areas and develop a strategic approach.",
      rating: 5
    },
    {
      name: "Anita Patel",
      rank: "IFS Rank 67",
      image: "/api/placeholder/80/80",
      quote: "The study material and regular tests kept me motivated throughout my journey.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Why Students Choose UPSC Guide
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-semibold text-navy">{testimonial.name}</h3>
                  <p className="text-navy font-medium text-sm">{testimonial.rank}</p>
                </div>
              </div>
              
              <div className="relative">
                <Quote className="w-8 h-8 text-navy opacity-20 absolute -top-2 -left-2" />
                <p className="text-text-gray mb-4 relative z-10">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="flex items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-navy fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;