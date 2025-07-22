import React from 'react';
import { cn } from '@/lib/utils';

interface TextShineProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const TextShine: React.FC<TextShineProps> = ({
  as: Component = 'h2',
  children,
  className,
  delay = 0
}) => {
  const delayStyle = delay ? { animationDelay: `${delay}ms` } : {};
  
  return (
    <Component className={cn('premium-shine', className)}>
      <span className="relative z-10">{children}</span>
      <style jsx>{`
        .premium-shine::after {
          animation-delay: ${delay}ms;
        }
      `}</style>
    </Component>
  );
};

export default TextShine;