"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface GradientIconProps {
  icon: IconDefinition;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8'
};

export default function GradientIcon({ icon, size = 'md', className = '' }: GradientIconProps) {
  return (
    <div className={`gradient-icon ${sizeClasses[size]} ${className}`}>
      <FontAwesomeIcon icon={icon} />
    </div>
  );
}
