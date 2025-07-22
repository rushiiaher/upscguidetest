import React from 'react';
import { ShineButton } from '@/components/ui/shine-button';
import { ShineHeading } from '@/components/ui/shine-heading';
import { GlowButton } from '@/components/ui/glow-button';
import { Button } from '@/components/ui/button';

const ShineEffectExample = () => {
  return (
    <div className="container mx-auto p-8 space-y-12">
      <div className="space-y-6">
        <ShineHeading as="h1" className="text-4xl font-bold text-navy">
          Shine Effect Headings
        </ShineHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <ShineHeading as="h3" intensity="low" className="text-2xl font-bold text-navy mb-4">
              Low Intensity
            </ShineHeading>
            <p className="text-text-gray">
              This heading has a subtle shine effect that doesn't distract from the content.
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md">
            <ShineHeading as="h3" intensity="medium" className="text-2xl font-bold text-navy mb-4">
              Medium Intensity
            </ShineHeading>
            <p className="text-text-gray">
              This heading has a moderate shine effect that draws some attention.
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md">
            <ShineHeading as="h3" intensity="high" className="text-2xl font-bold text-navy mb-4">
              High Intensity
            </ShineHeading>
            <p className="text-text-gray">
              This heading has a prominent shine effect that really stands out.
            </p>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        <ShineHeading as="h2" className="text-3xl font-bold text-navy">
          Shine Effect Buttons
        </ShineHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center space-y-4">
            <ShineButton intensity="low" className="w-full">
              Low Intensity
            </ShineButton>
            <p className="text-text-gray text-center">
              Subtle shine effect for less important actions.
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center space-y-4">
            <ShineButton intensity="medium" className="w-full">
              Medium Intensity
            </ShineButton>
            <p className="text-text-gray text-center">
              Standard shine effect for important actions.
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center space-y-4">
            <ShineButton intensity="high" className="w-full">
              High Intensity
            </ShineButton>
            <p className="text-text-gray text-center">
              Prominent shine effect for critical call-to-actions.
            </p>
          </div>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow-md space-y-6">
          <ShineHeading as="h3" className="text-2xl font-bold text-navy">
            Button Variants with Shine
          </ShineHeading>
          
          <div className="flex flex-wrap gap-4">
            <ShineButton variant="default">Default</ShineButton>
            <ShineButton variant="secondary">Secondary</ShineButton>
            <ShineButton variant="destructive">Destructive</ShineButton>
            <ShineButton variant="outline">Outline</ShineButton>
            <Button variant="important">Important (Built-in)</Button>
          </div>
        </div>
        
        <div className="p-6 bg-gradient-to-br from-navy/10 to-navy/5 rounded-lg shadow-md space-y-6">
          <ShineHeading as="h3" intensity="high" className="text-2xl font-bold text-navy">
            Premium Glow Buttons
          </ShineHeading>
          
          <div className="flex flex-wrap gap-4">
            <GlowButton variant="default" glowIntensity="subtle" glowColor="rgba(255, 255, 255, 0.8)">
              Subtle Glow
            </GlowButton>
            <GlowButton variant="secondary" glowIntensity="medium" glowColor="rgba(255, 255, 255, 0.8)">
              Medium Glow
            </GlowButton>
            <GlowButton variant="destructive" glowIntensity="strong" glowColor="rgba(255, 255, 255, 0.8)">
              Strong Glow
            </GlowButton>
            <GlowButton variant="default" glowIntensity="strong" glowColor="rgba(255, 215, 0, 0.6)">
              Golden Glow
            </GlowButton>
            <GlowButton variant="default" glowIntensity="strong" glowColor="rgba(135, 206, 250, 0.6)">
              Blue Glow
            </GlowButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShineEffectExample;