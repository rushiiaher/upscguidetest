import React, { useState, useEffect, useRef } from 'react';
import { AnimatedStarIcon, AnimatedTrophyIcon, AnimatedWifiIcon, AnimatedNotebookPenIcon, AnimatedSearchCheckIcon, AnimatedUsersIcon, AnimatedAwardIcon, AnimatedTargetIcon, AnimatedArrowRightIcon, AnimatedCheckCircleIcon, AnimatedPhoneIcon, AnimatedGlobeIcon, AnimatedMapPinIcon, AnimatedPlayIcon } from './icons/AnimatedIcons';
import { Button } from '@/components/ui/button';
import { GlowButton } from '@/components/ui/glow-button';
import TextShine from '@/components/ui/text-shine';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    aspirantType: '',
    attemptedPrelims: '',
    currentCity: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isScrollEffect, setIsScrollEffect] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    let scrollTimer: ReturnType<typeof setTimeout>;
    let isAnimating = false;
    
    const handleScroll = () => {
      if (!heroRef.current || isAnimating) return;
      
      const heroRect = heroRef.current.getBoundingClientRect();
      const isVisible = heroRect.top < window.innerHeight && heroRect.bottom >= 0;
      const scrollPercentage = 1 - (heroRect.top / window.innerHeight);
      
      // Only trigger when hero section is prominently visible (30% to 80% in view)
      if (isVisible && scrollPercentage > 0.3 && scrollPercentage < 0.8) {
        isAnimating = true;
        setIsScrollEffect(true);
        
        // Clear any existing timer
        clearTimeout(scrollTimer);
        
        // Set a new timer to remove the effect
        scrollTimer = setTimeout(() => {
          setIsScrollEffect(false);
          isAnimating = false;
        }, 2500); // Match animation duration
      }
    };
    
    // Throttle scroll event for better performance
    let lastScrollTime = 0;
    const throttledScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime > 200) { // Throttle to once every 200ms
        lastScrollTime = now;
        handleScroll();
      }
    };
    
    window.addEventListener('scroll', throttledScroll);
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create submission data with default values for required fields
    const submissionData = {
      fullName: formData.name || '',
      email: formData.email || '',
      mobile: formData.mobile || '',
      aspirantType: formData.aspirantType || 'full-time', // Default value
      attemptedPrelims: formData.attemptedPrelims || 'no', // Default value
      currentCity: formData.currentCity || ''
    };

    // Basic validation for required fields
    if (!submissionData.fullName || !submissionData.email || !submissionData.mobile || !submissionData.currentCity) {
      toast.error('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    try {
      console.log('Submitting data:', submissionData);
      const response = await fetch('https://upscguidetest.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        toast.success('Thank you! Our mentorship coordinator will contact you within 24 hours.');
        setFormData({ name: '', email: '', mobile: '', aspirantType: '', attemptedPrelims: '', currentCity: '' });
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Form submission error:', errorData);
        throw new Error(errorData.error || 'Failed to submit form');
      }
    } catch (error) {
      toast.error('Error submitting form. Please try again later.');
    }
    setIsSubmitting(false);
  };

  const phases = [
    { phase: 1, title: "Foundation Building", desc: "Clarity on core concepts, answer writing basics, note-making, analytical skills." },
    { phase: 2, title: "Pre + Mains Integration", desc: "Unified prep for Prelims + Mains. Improve MCQ solving & answer articulation." },
    { phase: 3, title: "Mains Exclusive", desc: "Focus on GS, Essay, high-yield content, PYQs, & structured answers." },
    { phase: 4, title: "Prelims Intensive", desc: "Full Prelims Mock Series, PYQs, test-taking strategy, revision plan." },
    { phase: 5, title: "Mains Intensive", desc: "Advanced answer writing, Ethics & Essay enhancement, 60-Test Series." },
    { phase: 6, title: "Pre-Exclusive Revision", desc: "Exclusive focus on Prelims. Score-maximization approach & mocks." },
    { phase: 7, title: "Mains 600+", desc: "Value addition & scoring strategy to cross 600+ in Mains GS + Essay." }
  ];

  const features = [
    "Dedicated One-to-One Mentorship from Interview-Appeared Mentors",
    "Personal Study Planning & Performance Tracking",
    "Current Affairs Special Program – Weekly Live Lectures & Notes",
    "Full GS & CSAT Recorded Course",
    "Prelims Test – Customized Prelims Test Series (50+ Tests)",
    "Mains Test Series– 21 Mains Test Series (13 Sectional + 4 Full-length + 4 Essay)",
    "Mains Enrichment Content – Ethics, Essay Boosters, FactSheets, Keywords",
    "Content on Demand – Notes & Handouts as per requirement",
    "Doubt Resolution Session with Mentor",
    "Interview Guidance – DAF Analysis + Mock Interview Support"
  ];

  const testimonials = [
    {
      name: "Aaditya Sharma",
      rank: "AIR 70, UPSC CSE 2022",
      video: "https://youtube.com/shorts/ZBJdwPBlDyI"
    },
    {
      name: "Prashanth S.",
      rank: "AIR 78, UPSC CSE 2023",
      video: "https://youtube.com/shorts/mtKqZ9Gg_3I"
    },
    {
      name: "Seema Kumari",
      rank: "AIR 823, UPSC CSE 2024",
      video: "https://youtube.com/shorts/zLDet7-hyUA"
    }
  ];

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen bg-white"
    >
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Main Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Title, Trust Indicators, and Form */}
          <div className="space-y-8">
            {/* Main Title */}
            <div className="opacity-0 animate-slide-in-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4 text-shadow premium-shine" data-text="One-to-One Mentorship Program for UPSC CSE 2026">
                One-to-One Mentorship Program for UPSC CSE 2026
              </h1>
              <div className="w-24 h-1 bg-navy mb-6 animate-pulse-glow"></div>
              <p className="text-lg md:text-xl text-text-black mb-6 leading-relaxed font-medium">
                Get <span className="text-navy font-semibold">Personalized UPSC Preparation</span> with our flagship One-to-One Mentorship Program. Our mentors have appeared in UPSC Interviews and cracked Mains multiple times.
              </p>
            </div>

            {/* Trust Indicators - 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 opacity-0 animate-slide-in-left animate-delay-200">
              <div className="flex items-center space-x-3 p-4 glass-effect rounded-lg">
                <AnimatedSearchCheckIcon className="w-6 h-6 text-navy" />
                <div>
                  <div className="font-semibold text-navy">5000+ Students</div>
                  <div className="text-sm text-text-black">Trusted By</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 glass-effect rounded-lg">
                <AnimatedWifiIcon className="w-6 h-6 text-navy" />
                <div>
                  <div className="font-semibold text-navy">10,000+ Hours</div>
                  <div className="text-sm text-text-black">Sessions Conducted</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 glass-effect rounded-lg">
                <AnimatedNotebookPenIcon className="w-6 h-6 text-navy" />
                <div>
                  <div className="font-semibold text-navy">50,000+</div>
                  <div className="text-sm text-text-black">Questions Attempted</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 glass-effect rounded-lg">
                <AnimatedTrophyIcon className="w-6 h-6 text-navy" />
                <div>
                  <div className="font-semibold text-navy">50+</div>
                  <div className="text-sm text-text-black">Guest Lectures</div>
                </div>
              </div>
            </div>

            {/* Form under Trust Indicators */}
            <div className="opacity-0 animate-slide-in-left animate-delay-400">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-card-hover border border-white/30">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-navy mb-2 shine-effect-heading">Fill Your Details for Free Guidance</h2>
                  <p className="text-text-black font-medium">Our mentorship coordinator will reach out within 24 hours</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-navy font-medium">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-orange focus:ring-orange"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-navy font-medium">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-orange focus:ring-orange"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="mobile" className="text-navy font-medium">Contact No. *</Label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        +91
                      </span>
                      <Input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        required
                        className="rounded-l-none border-gray-300 focus:border-orange focus:ring-orange"
                        placeholder="Enter contact number"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="aspirantType" className="text-navy font-medium">Type of Aspirant *</Label>
                    <Select value={formData.aspirantType} onValueChange={(value) => setFormData(prev => ({ ...prev, aspirantType: value }))} required>
                      <SelectTrigger className="border-gray-300 focus:border-orange focus:ring-orange">
                        <SelectValue placeholder="Select aspirant type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">Full time preparation</SelectItem>
                        <SelectItem value="college-student">College Student</SelectItem>
                        <SelectItem value="working-professional">Working Professional</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="attemptedPrelims" className="text-navy font-medium">Ever Attempted UPSC Prelims Exam *</Label>
                    <Select value={formData.attemptedPrelims} onValueChange={(value) => setFormData(prev => ({ ...prev, attemptedPrelims: value }))} required>
                      <SelectTrigger className="border-gray-300 focus:border-orange focus:ring-orange">
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="currentCity" className="text-navy font-medium">Current City *</Label>
                    <Input
                      id="currentCity"
                      name="currentCity"
                      type="text"
                      value={formData.currentCity}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-orange focus:ring-orange"
                      placeholder="Enter your current city"
                    />
                  </div>

                  <GlowButton
                    type="submit"
                    disabled={isSubmitting}
                    variant="default"
                    glowIntensity="strong"
                    glowColor="rgba(255, 255, 255, 0.8)"
                    className="w-full bg-gradient-to-r from-navy to-secondary hover:from-secondary hover:to-navy text-white font-semibold py-3 px-6 rounded-lg shadow-button transition-all duration-300 group"
                  >
                    <span className="absolute inset-0 w-0 bg-white/20 group-hover:w-full transition-all duration-700 ease-out"></span>
                    <span className="absolute inset-0 w-full h-full animate-pulse-glow"></span>
                    <div className="flex items-center justify-center">
                      {isSubmitting ? 'Submitting...' : 'Get Free Guidance'}
                      <AnimatedArrowRightIcon className="w-5 h-5 ml-2" />
                    </div>
                  </GlowButton>

                  <p className="text-xs text-gray-500 text-center">
                    We respect your privacy. Your information is secure and will not be shared.
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Right Column - About Program and What You Get */}
          <div className="space-y-8 opacity-0 animate-slide-in-right animate-delay-300">
            {/* Program Details */}
            <div className="space-y-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/30">
                <h2 className="text-2xl font-bold text-navy mb-4 premium-shine">About the Program</h2>
                <p className="text-text-black mb-4 font-medium">
                  Our Mentors have attempted <span className="text-navy font-semibold">UPSC Mains and Interviews</span> multiple times. They understand the exam pattern and can guide you with effective strategies.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <AnimatedCheckCircleIcon className="w-5 h-5 text-navy" />
                    <span className="text-sm text-text-black font-medium">Duration: Till Mains (extended if qualified)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <AnimatedCheckCircleIcon className="w-5 h-5 text-navy" />
                    <span className="text-sm text-text-black font-medium">Mode: One-on-One via portal/Zoom</span>
                  </div>
                </div>
              </div>
            </div>

            {/* What You Get */}
            <div>
              <h3 className="text-2xl font-bold text-navy mb-4 premium-shine">What You Get</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <AnimatedCheckCircleIcon className="w-5 h-5 text-navy mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-black font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Student Results Section */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-navy mb-4 premium-shine">Student Results</h3>
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
          </div>
        </div>

        {/* Phase-wise Journey */}
        <div className="mt-16 opacity-0 animate-float-up animate-delay-800">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy inline-block premium-shine">Phase-wise Journey of the Mentorship</h2>
          </div>
          
          {/* Zigzag Timeline Container */}
          <div className="relative max-w-4xl mx-auto">
            <style>{`
              .phase-timeline {
                counter-reset: phase-counter;
                position: relative;
              }
              .phase-item {
                counter-increment: phase-counter;
                position: relative;
                margin: 0;
                padding: 2rem;
                min-height: 120px;
              }
              .phase-item:not(:first-child) {
                border-top: 4px solid;
                border-image: linear-gradient(to right, hsl(220, 70%, 20%), hsl(220, 60%, 30%)) 1;
              }
              .phase-item:first-child {
                padding-top: 2rem;
              }
              .phase-item:last-child {
                padding-bottom: 2rem;
              }
              .phase-item:nth-child(odd) {
                border-left: 4px solid;
                border-image: linear-gradient(to right, hsl(220, 70%, 20%), hsl(220, 60%, 30%)) 1;
                padding-right: 2rem;
                padding-left: 0;
              }
              .phase-item:nth-child(even) {
                border-right: 4px solid;
                border-image: linear-gradient(to right, hsl(220, 70%, 20%), hsl(220, 60%, 30%)) 1;
                padding-left: 2rem;
                padding-right: 0;
              }
              .phase-circle {
                position: absolute;
                width: 3rem;
                height: 3rem;
                border-radius: 50%;
                background-color: hsl(220, 70%, 20%);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: bold;
                font-size: 1rem;
                z-index: 10;
                top: 50%;
                transform: translateY(-50%);
              }
              .phase-item:nth-child(odd) .phase-circle {
                right: 100%;
                margin-right: -1.5rem;
              }
              .phase-item:nth-child(even) .phase-circle {
                left: 100%;
                margin-left: -1.5rem;
              }
              .phase-item:first-child {
                border-top: 0;
                padding-top: 2rem;
              }
              .phase-item:last-child {
                padding-bottom: 2rem;
              }
            `}</style>
            
            <div className="phase-timeline">
              {phases.map((phase, index) => (
                <div key={index} className="phase-item opacity-0 animate-slide-in-left" style={{ animationDelay: `${900 + index * 200}ms` }}>
                  {/* Phase Number Circle */}
                  <div className="phase-circle">
                    {phase.phase}
                  </div>
                  
                  {/* Phase Content */}
                  <div className={`bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-md border border-white/20 hover:shadow-lg transition-shadow duration-300 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <h3 className="font-bold text-navy text-xl mb-3">{phase.title}</h3>
                    <p className="text-text-black leading-relaxed font-medium">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 opacity-0 animate-float-up animate-delay-1200">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8 border border-white/30 text-center">
            <h2 className="text-2xl font-bold text-navy mb-6 shine-effect-heading">Ready to Begin?</h2>
            <p className="text-text-black mb-8 font-medium">
              If you're preparing for UPSC CSE, connect with our experienced mentors who can guide you through the process.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3">
                <AnimatedPhoneIcon className="w-6 h-6 text-navy" />
                <div>
                  <div className="font-semibold text-navy">+91-788 788 8819</div>
                  <div className="text-sm text-text-black font-medium">Call us now</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <AnimatedGlobeIcon className="w-6 h-6 text-navy" />
                <div>
                  <div className="font-semibold text-navy">www.upscguide.com</div>
                  <div className="text-sm text-text-black font-medium">Visit our website</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <AnimatedMapPinIcon className="w-6 h-6 text-navy" />
                <div>
                  <div className="font-semibold text-navy">Near Jnana Probodhini</div>
                  <div className="text-sm text-text-black font-medium">Sadashiv Peth, Pune</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;