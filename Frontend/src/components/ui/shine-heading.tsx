import React from 'react';
import { cn } from '@/lib/utils';

interface ShineHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  intensity?: 'low' | 'medium' | 'high';
}

const ShineHeading = React.forwardRef<HTMLHeadingElement, ShineHeadingProps>(
  ({ className, as = 'h2', intensity = 'medium', children, ...props }, ref) => {
    // Define different shine intensities
    const intensityClasses = {
      low: 'after:animate-[shine-effect_7s_infinite_ease-out]',
      medium: 'after:animate-[shine-effect_5s_infinite_ease-out]',
      high: 'after:animate-[shine-effect_4s_infinite_ease-out]',
    };

    const Component = as;

    return (
      <Component
        className={cn('shine-effect-heading', intensityClasses[intensity], className)}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

ShineHeading.displayName = 'ShineHeading';

export { ShineHeading };