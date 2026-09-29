import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CinematicMedia } from './CinematicMedia';
import { ParallaxImage } from './ParallaxImage';
import { WordReveal } from './WordReveal';

type PageHeroProps = {
  variant?: 'full' | 'split' | 'type';
  eyebrow?: string;
  title: string;
  intro?: string;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
};

export function PageHero({ variant = 'type', eyebrow, title, intro, image, imageAlt = '', children }: PageHeroProps) {
  const reduce = useReducedMotion();
  const fade = {
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, delay: 0.35, ease: [0.23, 1, 0.32, 1] as const }
  };

  if (variant === 'full' && image) {
    return (
      <section className="relative flex min-h-[600px] items-end overflow-hidden bg-emerald text-ivory md:h-[88vh]">
        <CinematicMedia image={image} alt={imageAlt} priority />
        <div className="absolute inset-0 bg-emerald/60" aria-hidden />
        <div className="relative mx-auto w-full max-w-page px-5 pb-16 pt-40 md:px-10 md:pb-24">
          {eyebrow && <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-gold">{eyebrow}</p>}
          <WordReveal as="h1" immediate text={title} className="max-w-5xl font-serif text-5xl leading-[1.02] md:text-7xl lg:text-8xl" />
          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            {intro &&
            <motion.p {...fade} className="max-w-xl text-base leading-relaxed text-ivory/80 md:text-lg">
                {intro}
              </motion.p>
            }
            {children && <motion.div {...fade} className="flex flex-wrap gap-3">{children}</motion.div>}
          </div>
        </div>
      </section>);

  }

  if (variant === 'split' && image) {
    return (
      <section className="relative overflow-hidden bg-emerald text-ivory">
        <div className="mx-auto grid max-w-page items-end gap-12 px-5 pb-16 pt-36 md:px-10 lg:grid-cols-12 lg:pb-24 lg:pt-44">
          <div className="lg:col-span-7">
            {eyebrow && <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-gold">{eyebrow}</p>}
            <WordReveal as="h1" immediate text={title} className="font-serif text-5xl leading-[1.04] md:text-6xl lg:text-7xl" />
            {intro &&
            <motion.p {...fade} className="mt-8 max-w-xl text-base leading-relaxed text-ivory/75 md:text-lg">
                {intro}
              </motion.p>
            }
            {children && <motion.div {...fade} className="mt-10 flex flex-wrap gap-3">{children}</motion.div>}
          </div>
          <div className="lg:col-span-5">
            <ParallaxImage src={image} alt={imageAlt} eager className="aspect-[4/5] w-full rounded-t-[999px]" />
          </div>
        </div>
      </section>);

  }

  return (
    <section className="relative overflow-hidden bg-forest text-ivory">
      <div className="mx-auto grid max-w-page gap-10 px-5 pb-16 pt-40 md:px-10 lg:grid-cols-12 lg:pb-24 lg:pt-48">
        <div className="lg:col-span-8">
          {eyebrow && <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-gold">{eyebrow}</p>}
          <WordReveal as="h1" immediate text={title} className="font-serif text-5xl leading-[1.02] md:text-7xl lg:text-[5.5rem]" />
        </div>
        <div className="flex flex-col justify-end gap-8 lg:col-span-4">
          <span className="h-px w-16 bg-gold" aria-hidden />
          {intro &&
          <motion.p {...fade} className="text-base leading-relaxed text-ivory/75 md:text-lg">
              {intro}
            </motion.p>
          }
          {children && <motion.div {...fade} className="flex flex-wrap gap-3">{children}</motion.div>}
        </div>
      </div>
    </section>);

}