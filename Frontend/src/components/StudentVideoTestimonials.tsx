import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

interface VideoTestimonial {
  id: string;
  name: string;
  title: string;
  videoUrl: string;
  thumbnailUrl: string;
  quote: string;
}

const StudentVideoTestimonials = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const testimonials: VideoTestimonial[] = [
    {
      id: '1',
      name: 'Aaditya Sharma',
      title: 'AIR 70, UPSC CSE 2022',
      videoUrl: 'https://www.youtube.com/embed/ZBJdwPBlDyI?autoplay=1&mute=1&controls=1&showinfo=0&rel=0&modestbranding=1',
      thumbnailUrl: 'https://img.youtube.com/vi/ZBJdwPBlDyI/maxresdefault.jpg',
      quote: 'The personalized guidance and mock interviews were game-changers for my preparation.'
    },
    {
      id: '2',
      name: 'Prashanth S.',
      title: 'AIR 78, UPSC CSE 2023',
      videoUrl: 'https://www.youtube.com/embed/mtKqZ9Gg_3I?autoplay=1&mute=1&controls=1&showinfo=0&rel=0&modestbranding=1',
      thumbnailUrl: 'https://img.youtube.com/vi/mtKqZ9Gg_3I/maxresdefault.jpg',
      quote: 'Expert mentors helped me identify my weak areas and develop a strategic approach.'
    },
    {
      id: '3',
      name: 'Seema Kumari',
      title: 'AIR 823, UPSC CSE 2024',
      videoUrl: 'https://www.youtube.com/embed/zLDet7-hyUA?autoplay=1&mute=1&controls=1&showinfo=0&rel=0&modestbranding=1',
      thumbnailUrl: 'https://img.youtube.com/vi/zLDet7-hyUA/maxresdefault.jpg',
      quote: 'B.tech from IIT Bombay, Personal Mentor at UPSC GUIDE'
    }
  ];

  const handleVideoPlay = (id: string) => {
    setActiveVideo(id);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-navy-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-navy bg-opacity-20 text-white rounded-full text-sm font-semibold mb-4">
            SUCCESS STORIES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            What Our Students Say
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Hear directly from our successful students about their journey with UPSC Guide
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-navy to-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 text-center border border-gray-100 hover:border-navy-200 transform hover:-translate-y-3"
              >
                <div 
                  className="relative w-full aspect-[9/16] mb-6 cursor-pointer rounded-2xl overflow-hidden group shadow-lg"
                  onClick={() => handleVideoPlay(testimonial.id)}
                >
                  <img
                    src={testimonial.thumbnailUrl}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                    <div className="bg-white bg-opacity-90 rounded-full p-4 shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-navy" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    SHORTS
                  </div>
                </div>
                
                {activeVideo === testimonial.id && (
                  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setActiveVideo(null)}>
                    <div className="relative w-full max-w-2xl mx-4" onClick={(e) => e.stopPropagation()}>
                      <iframe
                        src={testimonial.videoUrl}
                        className="w-full aspect-video rounded-lg"
                        allow="autoplay; encrypted-media"
                        sandbox="allow-scripts allow-same-origin allow-presentation"
                        frameBorder="0"
                      />
                      <button 
                        onClick={() => setActiveVideo(null)}
                        className="absolute -top-8 right-0 text-white text-xl hover:text-gray-300"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                )}
                
                <h3 className="font-bold text-navy text-xl mb-2">{testimonial.name}</h3>
                <p className="text-navy text-base font-semibold mb-4">{testimonial.title}</p>
                <p className="text-gray-700 text-sm leading-relaxed">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentVideoTestimonials;