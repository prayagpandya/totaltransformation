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
    <section aria-label="Introduction" className="relative min-h-[100svh] overflow-hidden bg-emerald text-ivory">
      <div className="mx-auto grid min-h-[100svh] max-w-page grid-cols-1 items-center gap-8 px-5 pb-10 pt-24 sm:gap-10 md:grid-cols-2 md:gap-12 md:px-10 md:pb-14 md:pt-28">
        <div className="order-1 md:order-2">
          <div className="relative mx-auto aspect-[768/840] w-full max-w-[390px] overflow-hidden rounded-2xl md:max-w-none">
            <CinematicMedia image={media.images.hero} video={media.videos.hero} alt="A woman meditating in a green field beneath the words Pause, Reflect, Choose" priority zoom={false} />
          </div>
          <p className="mt-4 hidden text-right text-[10px] uppercase tracking-[0.25em] text-ivory/50 xl:block">
            {site.name} · A division of {site.parent}
          </p>
        </div>

        <div className="order-2 md:order-1">
          <WordReveal
            as="h1"
            immediate
            delay={0.2}
            stagger={0.06}
            text={'Transform Your Inner World.\nTransform Your Life.'}
            className="max-w-2xl font-serif text-2xl leading-[1.12] sm:text-4xl md:text-5xl xl:text-[3.6rem]" />

          <motion.p {...enter(0.4)} className="mt-6 text-[11px] font-semibold uppercase tracking-[0.35em] text-gold md:text-xs">
            Aware • Align • Awaken • Achieve
          </motion.p>

          <div className="mt-8 border-t border-ivory/15 pt-7 md:mt-10 md:pt-8">
            <motion.p {...enter(0.75)} className="max-w-lg text-base leading-relaxed text-ivory/80 md:text-lg">
              Life transformation begins when you pause long enough to understand where you are—and become intentional about where you want to go.
            </motion.p>
            <div className="mt-7 flex flex-col gap-3 xl:flex-row">
              <motion.div {...enter(0.9)}>
                <Button to="/contact" variant="gold" className="w-full xl:w-auto">Start your transformation</Button>
              </motion.div>
              <motion.div {...enter(1.0)}>
                <Button to="/contact" variant="outlineLight" arrow={false} className="w-full xl:w-auto">Talk to a transformation coach</Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <motion.a
        href="#intro"
        {...enter(1.2)}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-ivory/60 lg:flex"
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
    </section>);

}