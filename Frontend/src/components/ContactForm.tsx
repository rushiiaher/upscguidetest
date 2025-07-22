import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { GlowButton } from '@/components/ui/glow-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ArrowRight, CheckCircle, Clock, Phone, UserCheck } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    aspirantType: '',
    attemptedPrelims: '',
    currentCity: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Set default values for any empty fields
    const submissionData = {
      fullName: formData.fullName || '',
      email: formData.email || '',
      mobile: formData.mobile || '',
      aspirantType: formData.aspirantType || 'full-time', // Default value
      attemptedPrelims: formData.attemptedPrelims || 'no', // Default value
      currentCity: formData.currentCity || ''
    };

    // Validate all required fields
    if (!submissionData.fullName || !submissionData.email || !submissionData.mobile || !submissionData.currentCity) {
      toast({
        title: "Please fill all required fields",
        description: "All fields are required to submit the form.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Use the global ENV variable that's set in main.tsx
      const apiUrl = window.ENV?.VITE_API_URL || 'https://upscguidetest.onrender.com';
      console.log('Submitting data:', submissionData);
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        toast({
          title: "Form submitted successfully!",
          description: "Our mentorship coordinator will reach out within 24 hours.",
        });
        setFormData({
          fullName: '',
          email: '',
          mobile: '',
          aspirantType: '',
          attemptedPrelims: '',
          currentCity: ''
        });
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Form submission error:', errorData);
        throw new Error(errorData.error || 'Failed to submit form');
      }
    } catch (error) {
      toast({
        title: "Error submitting form",
        description: "Please try again later.",
      });
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact-form" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Column - Form */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 premium-shine">
                Fill Your Details for Free Guidance
              </h2>
              <p className="text-lg text-text-gray mb-8">
                Our mentorship coordinator will reach out within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className="h-12"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="mobile">Contact No.</Label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-text-gray bg-light-gray border border-r-0 border-input rounded-l-md">
                    +91
                  </span>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="Enter your contact number"
                    value={formData.mobile}
                    onChange={(e) => handleInputChange('mobile', e.target.value)}
                    required
                    className="h-12 rounded-l-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="aspirantType">Type of Aspirant</Label>
                <RadioGroup 
                  value={formData.aspirantType} 
                  onValueChange={(value) => handleInputChange('aspirantType', value)}
                  className="flex flex-col space-y-2 mt-2"
                  required
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="full-time" id="full-time" />
                    <Label htmlFor="full-time" className="cursor-pointer">Full time preparation</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="college-student" id="college-student" />
                    <Label htmlFor="college-student" className="cursor-pointer">College Student</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="working-professional" id="working-professional" />
                    <Label htmlFor="working-professional" className="cursor-pointer">Working Professional</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="attemptedPrelims">Ever Attempted UPSC Prelims Exam</Label>
                <RadioGroup 
                  value={formData.attemptedPrelims} 
                  onValueChange={(value) => handleInputChange('attemptedPrelims', value)}
                  className="flex flex-col space-y-2 mt-2"
                  required
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="prelims-yes" />
                    <Label htmlFor="prelims-yes" className="cursor-pointer">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="prelims-no" />
                    <Label htmlFor="prelims-no" className="cursor-pointer">No</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="currentCity">Current City</Label>
                <Input
                  id="currentCity"
                  type="text"
                  placeholder="Enter your current city"
                  value={formData.currentCity}
                  onChange={(e) => handleInputChange('currentCity', e.target.value)}
                  required
                  className="h-12"
                />
              </div>



              <GlowButton 
                type="submit" 
                variant="default"
                glowIntensity="strong"
                glowColor="rgba(255, 255, 255, 0.8)"
                className="w-full h-12 bg-navy hover:bg-secondary text-white shadow-button transition-all duration-200 text-lg font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Processing...
                  </div>
                ) : (
                  <>
                    Get Free Guidance
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </GlowButton>

              <p className="text-xs text-text-gray text-center">
                By submitting this form, you agree to our privacy policy.
              </p>
            </form>
          </div>

          {/* Right Column - Value Proposition */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-card">
              <h3 className="text-2xl font-bold text-navy mb-6 premium-shine">What Happens Next?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-navy flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Receive confirmation within minutes
                    </h4>
                    <p className="text-text-gray text-sm">You'll get an instant confirmation message on your registered mobile number</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-navy flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      Personal counselor contacts you
                    </h4>
                    <p className="text-text-gray text-sm">Our experienced counselor will call you within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-navy flex items-center">
                      <UserCheck className="w-4 h-4 mr-2" />
                      Get customized study plan
                    </h4>
                    <p className="text-text-gray text-sm">Receive a personalized roadmap based on your current preparation level</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Card */}
            <div className="bg-gradient-to-br from-navy to-teal rounded-xl p-8 text-white">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 premium-shine">Next Batch Starts</h3>
                <p className="text-3xl font-bold">1st August 2025</p>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm">Limited Seats Available</span>
                  <span className="text-sm font-semibold">75% filled</span>
                </div>
                <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                  <div className="bg-secondary h-2 rounded-full transition-all duration-300" style={{ width: '75%' }}></div>
                </div>
              </div>
              
              <p className="text-sm opacity-90">
                Secure your seat in our UPSC program today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;