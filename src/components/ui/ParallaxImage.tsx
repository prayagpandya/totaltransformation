import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  strength?: number;
  eager?: boolean;
};

export function ParallaxImage({ src, alt, className = '', strength = 8, eager = false }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden bg-sage/30 ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        style={reduce ? undefined : { y, scale: 1 + strength * 2.4 / 100 }}
        className="absolute inset-0 h-full w-full object-cover" />
      
    </div>);

}