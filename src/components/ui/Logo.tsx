import React from 'react';
import { site } from '../../data/site';

type LogoProps = {variant?: 'plain' | 'plate';className?: string;};

// The supplied logo has a white ground: on light surfaces it is multiplied into the
// background; on dark surfaces it sits on a white plate so its colours stay intact.
export function Logo({ variant = 'plain', className = '' }: LogoProps) {
  return (
    <span
      className={`relative inline-block aspect-[2/1] overflow-hidden transition-colors duration-300 ${
      variant === 'plate' ? 'rounded-xl bg-white shadow-sm' : 'bg-transparent'} ${
      className}`}>
      
      <img
        src={site.logo}
        alt="Total Transformation — a division of One Wellness Clinic & Research Center"
        className={`absolute inset-0 h-full w-full scale-[1.2] object-contain ${variant === 'plain' ? 'mix-blend-multiply' : ''}`} />
      
    </span>);

}