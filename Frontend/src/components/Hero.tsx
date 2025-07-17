import React, { useState } from 'react';
import { Star, Trophy, Wifi, NotebookPen, SearchCheck, Users, Award, Target, ArrowRight, CheckCircle, Phone, Globe, MapPin, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    preparationYears: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, preparationYears: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.mobile || !formData.email) {
      toast.error('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.name,
          mobile: formData.mobile,
          email: formData.email,
          preparationYears: formData.preparationYears,
          message: formData.message
        }),
      });

      if (response.ok) {
        toast.success('Thank you! Our mentorship coordinator will contact you within 24 hours.');
        setFormData({ name: '', mobile: '', email: '', preparationYears: '', message: '' });
      } else {
        throw new Error('Failed to submit form');
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
    <section id="home" className="relative min-h-screen hero-bg-animated">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/10 to-navy/5"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Main Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Main Title */}
            <div className="opacity-0 animate-slide-in-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4 text-shadow">
                One-to-One Mentorship Program for UPSC CSE 2026
              </h1>
              <div className="w-24 h-1 bg-navy mb-6 animate-pulse-glow"></div>
              <p className="text-lg md:text-xl text-text-black mb-6 leading-relaxed font-medium">
                Get <span className="text-navy font-semibold">Personalized UPSC Preparation</span> with our flagship One-to-One Mentorship Program. Our mentors have appeared in UPSC Interviews and cracked Mains multiple times.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 opacity-0 animate-slide-in-left animate-delay-200">
              <div className="flex items-center space-x-3 p-4 glass-effect rounded-lg">
                <SearchCheck className="w-6 h-6 text-navy" />
                <div>
                  <div className="font-semibold text-navy">5000+ Students</div>
                  <div className="text-sm text-text-black">Trusted By</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 glass-effect rounded-lg">
                <Wifi className="w-6 h-6 text-navy" />
                <div>
                  <div className="font-semibold text-navy">10,000+ Hours</div>
                  <div className="text-sm text-text-black">Sessions Conducted</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 glass-effect rounded-lg">
                <NotebookPen className="w-6 h-6 text-navy " />
                <div>
                  <div className="font-semibold text-navy">50,000+</div>
                  <div className="text-sm text-text-black">Questions Attempted</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 glass-effect rounded-lg">
                <Trophy className="w-6 h-6 text-navy " />
                <div>
                  <div className="font-semibold text-navy">50+</div>
                  <div className="text-sm text-text-black">Guest Lectures</div>
                </div>
              </div>

            </div>

            {/* Program Details */}
            <div className="space-y-6 opacity-0 animate-slide-in-left animate-delay-400">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/30">
                <h2 className="text-2xl font-bold text-navy mb-4">About the Program</h2>
                <p className="text-text-black mb-4 font-medium">
                  Our Mentors have attempted <span className="text-navy font-semibold">UPSC Mains and Interviews</span> multiple times. They understand the exam pattern and can guide you with effective strategies.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-navy" />
                    <span className="text-sm text-text-black font-medium">Duration: Till Mains (extended if qualified)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-navy" />
                    <span className="text-sm text-text-black font-medium">Mode: One-on-One via portal/Zoom</span>
                  </div>
                </div>
              </div>
            </div>

            {/* What You Get */}
            <div className="opacity-0 animate-slide-in-left animate-delay-600">
              <h3 className="text-2xl font-bold text-navy mb-4">What You Get</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-navy mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-black font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="opacity-0 animate-slide-in-right animate-delay-300">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-card-hover border border-white/30">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-navy mb-2">Fill Your Details for Free Guidance</h2>
                <p className="text-text-black font-medium">Our mentorship coordinator will reach out within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-navy font-medium">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-orange focus:ring-orange"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobile" className="text-navy font-medium">Mobile Number *</Label>
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
                      placeholder="Enter mobile number"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-navy font-medium">Email Address *</Label>
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
                  <Label htmlFor="preparationYears" className="text-navy font-medium">How many years are you preparing?</Label>
                  <Select value={formData.preparationYears} onValueChange={(value) => setFormData(prev => ({ ...prev, preparationYears: value }))}>
                    <SelectTrigger className="border-gray-300 focus:border-orange focus:ring-orange">
                      <SelectValue placeholder="Select preparation duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="less-than-1">Less than 1 year</SelectItem>
                      <SelectItem value="1-year">1 year</SelectItem>
                      <SelectItem value="2-years">2 years</SelectItem>
                      <SelectItem value="3-years">3 years</SelectItem>
                      <SelectItem value="more-than-3">More than 3 years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-navy font-medium">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="border-gray-300 focus:border-orange focus:ring-orange"
                    placeholder="Any specific questions or requirements?"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-navy to-secondary hover:from-secondary hover:to-navy text-white font-semibold py-3 px-6 rounded-lg shadow-button transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 w-0 bg-white/20 group-hover:w-full transition-all duration-700 ease-out"></span>
                  <span className="absolute inset-0 w-full h-full animate-pulse-glow"></span>
                  <span className="relative z-10">{isSubmitting ? 'Submitting...' : 'Get Free Guidance'}</span>
                  <ArrowRight className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  We respect your privacy. Your information is secure and will not be shared.
                </p>
              </form>
            </div>

            
            
          </div>
        </div>

        {/* Phase-wise Journey */}
        <div className="mt-16 opacity-0 animate-float-up animate-delay-800">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">Phase-wise Journey of the Mentorship</h2>
          
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
            <h2 className="text-2xl font-bold text-navy mb-6">Ready to Begin?</h2>
            <p className="text-text-black mb-8 font-medium">
              If you're preparing for UPSC CSE, connect with our experienced mentors who can guide you through the process.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-navy" />
                <div>
                  <div className="font-semibold text-navy">+91-788 788 8819</div>
                  <div className="text-sm text-text-black font-medium">Call us now</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Globe className="w-6 h-6 text-navy" />
                <div>
                  <div className="font-semibold text-navy">www.upscguide.com</div>
                  <div className="text-sm text-text-black font-medium">Visit our website</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6 text-navy" />
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