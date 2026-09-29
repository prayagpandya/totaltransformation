import React, { useRef } from 'react';
import { motion, MotionValue, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { media } from '../../data/media';
import { CinematicMedia } from '../ui/CinematicMedia';

const words = ['Pause.', 'Reflect.', 'Reconnect.', 'Begin Again.'];

export function VideoBreakSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  return (
    <section ref={ref} aria-label="Pause. Reflect. Reconnect. Begin Again." className="relative flex h-[95vh] min-h-[560px] items-center overflow-hidden bg-emerald text-ivory">
      <CinematicMedia image={media.images.videoBreak} video={media.videos.videoBreak} alt="A misty green forest valley at dawn" />
      <div className="absolute inset-0 bg-charcoal/45" aria-hidden />
      <div className="relative mx-auto w-full max-w-page px-5 md:px-10">
        <p className="font-serif text-6xl leading-[1.02] md:text-8xl lg:text-[8.5rem]">
          {words.map((w, i) =>
          <ScrollWord key={w} word={w} index={i} progress={scrollYProgress} />
          )}
        </p>
      </div>
    </section>);

}

function ScrollWord({ word, index, progress }: {word: string;index: number;progress: MotionValue<number>;}) {
  const reduce = useReducedMotion();
  const start = 0.2 + index * 0.08;
  const opacity = useTransform(progress, [start, start + 0.1], [0.18, 1]);
  return (
    <motion.span style={reduce ? undefined : { opacity }} className={`block ${index % 2 === 1 ? 'pl-[10%] italic' : ''} ${index === 3 ? 'text-gold' : ''}`}>
      {word}
    </motion.span>);

}