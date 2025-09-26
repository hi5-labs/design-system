import React from 'react';
import { cn } from '../../../lib/utils';

interface LogoProps {
  /**
   * Size of the logo
   * @default "default"
   */
  size?: 'sm' | 'default' | 'lg' | 'xl' | '2xl';
  
  /**
   * Color variant of the logo
   * @default "default"
   */
  variant?: 'default' | 'primary' | 'secondary' | 'muted' | 'white';
  
  /**
   * Whether to show the spinning animation
   * @default false
   */
  animated?: boolean;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Accessibility label for the logo
   * @default "Logo"
   */
  'aria-label'?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  default: 'w-8 h-8',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16',
  '2xl': 'w-24 h-24',
};

const variantClasses = {
  default: 'text-foreground',
  primary: 'text-primary',
  secondary: 'text-secondary',
  muted: 'text-muted-foreground',
  white: 'text-white',
};

export const Logo: React.FC<LogoProps> = ({
  size = 'default',
  variant = 'default',
  animated = false,
  className,
  'aria-label': ariaLabel = 'Logo',
  ...props
}) => {
  return (
    <svg
      className={cn(
        sizeClasses[size],
        variantClasses[variant],
        animated && 'animate-spin',
        className
      )}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={ariaLabel}
      role="img"
      {...props}
    >
      <path 
        d="M17.0745 0.333374L22.7405 3.69369L17.2884 13.3941L11.6225 10.0338L17.0745 0.333374Z" 
        fill="currentColor" 
      />
      <path 
        d="M33.6666 12.8777L32.3064 19.4515L21.6406 17.1226L23.0008 10.5489L33.6666 12.8777Z" 
        fill="currentColor" 
      />
      <path 
        d="M27.1795 32.9642L20.6729 33.6667L19.5331 22.527L26.0397 21.8245L27.1795 32.9642Z" 
        fill="currentColor" 
      />
      <path 
        d="M6.57831 32.8335L3.91725 26.6939L13.8786 22.138L16.5397 28.2776L6.57831 32.8335Z" 
        fill="currentColor" 
      />
      <path 
        d="M0.333313 12.6665L5.19531 8.16956L12.4916 16.4936L7.62959 20.9905L0.333313 12.6665Z" 
        fill="currentColor" 
      />
    </svg>
  );
};

export default Logo;
