import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface GlowButtonProps extends ButtonProps {
  glowColor?: string;
  glowIntensity?: 'subtle' | 'medium' | 'strong';
}

const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, glowColor = 'rgba(255, 255, 255, 0.8)', glowIntensity = 'medium', children, ...props }, ref) => {
    // Define different glow intensities
    const intensityStyles = {
      subtle: {
        before: 'opacity-30',
        after: 'opacity-40',
        animation: 'animate-[shine-effect_6s_infinite_ease-out]'
      },
      medium: {
        before: 'opacity-50',
        after: 'opacity-60',
        animation: 'animate-[shine-effect_4s_infinite_ease-out]'
      },
      strong: {
        before: 'opacity-70',
        after: 'opacity-80',
        animation: 'animate-[shine-effect_3s_infinite_ease-out]'
      }
    };

    const intensity = intensityStyles[glowIntensity];

    return (
      <Button
        className={cn(
          'relative overflow-hidden shine-effect group',
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        
        {/* Inner glow effect */}
        <span 
          className={cn(
            "absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-current to-transparent",
            "opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          )}
        />
        
        {/* Shine effect */}
        <span 
          className={cn(
            "absolute inset-0 w-full h-full",
            intensity.animation
          )}
          style={{
            background: `linear-gradient(60deg, transparent 25%, ${glowColor} 50%, transparent 75%)`,
            backgroundSize: '200% 100%',
            zIndex: 0
          }}
        />
      </Button>
    );
  }
);

GlowButton.displayName = 'GlowButton';

export { GlowButton };