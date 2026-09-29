import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { media } from '../../data/media';
import { site } from '../../data/site';
import { CinematicMedia } from '../ui/CinematicMedia';
import { WordReveal } from '../ui/WordReveal';
import { Button } from '../ui/Button';

export function HeroSection() {
  const reduce = useReducedMotion();
  const enter = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, delay, ease: [0.23, 1, 0.32, 1] as const }
  });

  return (
    <section aria-label="Introduction" className="relative h-[100svh] min-h-[660px] overflow-hidden bg-emerald text-ivory">
      <CinematicMedia image={media.images.hero} video={media.videos.hero} alt="A person walking through a sunlit misty forest" priority />
      <div className="absolute inset-0 bg-emerald/55" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-charcoal/25" aria-hidden />

      <p className="absolute right-10 top-1/2 hidden origin-right -translate-y-1/2 translate-x-1/2 rotate-90 text-[11px] uppercase tracking-[0.35em] text-ivory/50 xl:block">
        {site.name} · A division of {site.parent}
      </p>

      <div className="relative mx-auto flex h-full max-w-page flex-col justify-end px-5 pb-10 pt-32 md:px-10 md:pb-14">
        <WordReveal
          as="h1"
          immediate
          delay={0.2}
          stagger={0.06}
          text={'Transform Your Inner World.\nTransform Your Life.'}
          className="max-w-5xl font-serif text-2xl leading-[1.12] sm:text-4xl md:text-5xl lg:text-5xl xl:text-[3.6rem]" />

        <motion.p {...enter(0.4)} className="mt-6 text-[11px] font-semibold uppercase tracking-[0.35em] text-gold md:text-xs">
          Aware • Align • Awaken • Achieve
        </motion.p>
        

        <div className="mt-10 grid gap-8 border-t border-ivory/15 pt-8 md:mt-14 lg:grid-cols-12 lg:items-end">
          <motion.p {...enter(0.75)} className="max-w-lg text-base leading-relaxed text-ivory/80 md:text-lg lg:col-span-5">
            Life transformation begins when you pause long enough to understand where you are—and become intentional about where you want to go.
          </motion.p>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-6 lg:col-start-7 lg:justify-end">
            <motion.div {...enter(0.9)}>
              <Button to="/contact" variant="gold" className="w-full sm:w-auto">Start your transformation</Button>
            </motion.div>
            <motion.div {...enter(1.0)}>
              <Button to="/contact" variant="outlineLight" arrow={false} className="w-full sm:w-auto">Talk to a transformation coach</Button>
            </motion.div>
          </div>
        </div>

        <motion.a
          href="#intro"
          {...enter(1.2)}
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-ivory/60 lg:flex"
          aria-label="Scroll to continue">
          
          <span className="relative h-12 w-px overflow-hidden bg-ivory/20">
            {!reduce &&
            <motion.span
              className="absolute left-0 top-0 h-4 w-px bg-gold"
              animate={{ y: ['-100%', '300%'] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }} />

            }
          </span>
          Scroll
        </motion.a>
      </div>
    </section>);

}