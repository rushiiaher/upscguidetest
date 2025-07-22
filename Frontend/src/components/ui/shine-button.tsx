import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ShineButtonProps extends ButtonProps {
  intensity?: 'low' | 'medium' | 'high';
}

const ShineButton = React.forwardRef<HTMLButtonElement, ShineButtonProps>(
  ({ className, intensity = 'medium', children, ...props }, ref) => {
    // Define different shine intensities
    const intensityClasses = {
      low: 'after:animate-[shine-effect_6s_infinite_ease-out]',
      medium: 'after:animate-[shine-effect_4s_infinite_ease-out]',
      high: 'after:animate-[shine-effect_3s_infinite_ease-out]',
    };

    return (
      <Button
        className={cn('shine-effect', intensityClasses[intensity], className)}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

ShineButton.displayName = 'ShineButton';

export { ShineButton };