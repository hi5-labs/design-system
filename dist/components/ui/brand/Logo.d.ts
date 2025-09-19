import React from 'react';
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
export declare const Logo: React.FC<LogoProps>;
export default Logo;
//# sourceMappingURL=Logo.d.ts.map