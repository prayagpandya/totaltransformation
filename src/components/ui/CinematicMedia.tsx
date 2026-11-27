import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type CinematicMediaProps = {
  image: string;
  video?: string;
  alt: string;
  priority?: boolean;
  zoom?: boolean;
  className?: string;
};

// Full-bleed background media: plays a video when a source is configured, otherwise
// (or on error / reduced motion) shows the poster image with a slow ambient zoom.
export function CinematicMedia({ image, video, alt, priority = false, zoom = true, className = '' }: CinematicMediaProps) {
  const reduce = useReducedMotion();
  const [failed, setFailed] = useState(false);
  const showVideo = Boolean(video) && !failed && !reduce;
  const animateZoom = zoom && !reduce;

  return (
    <div className={`absolute inset-0 overflow-hidden bg-emerald ${className}`}>
      <motion.div
        className="absolute inset-0"
        initial={animateZoom ? { scale: 1.12 } : false}
        animate={animateZoom ? { scale: 1 } : undefined}
        transition={{ duration: 18, ease: 'linear' }}>
        
        {showVideo ?
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload={priority ? 'auto' : 'metadata'}
          poster={image}
          onError={() => setFailed(true)}
          aria-hidden>
          
            <source src={video} type="video/mp4" onError={() => setFailed(true)} />
          </video> :

        <img src={image} alt={alt} loading={priority ? 'eager' : 'lazy'} decoding="async" className="h-full w-full object-contain" />
        }
      </motion.div>
    </div>);

}