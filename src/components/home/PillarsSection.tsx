import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { pillars } from '../../data/pillars';
import type { Pillar } from '../../types/content';
import { WordReveal } from '../ui/WordReveal';

const tones: Record<Pillar['tone'], {bg: string;text: string;muted: string;rule: string;}> = {
  emerald: { bg: 'bg-emerald', text: 'text-ivory', muted: 'text-ivory/70', rule: 'border-ivory/15' },
  cream: { bg: 'bg-cream', text: 'text-charcoal', muted: 'text-charcoal/70', rule: 'border-charcoal/10' },
  forest: { bg: 'bg-forest', text: 'text-ivory', muted: 'text-ivory/70', rule: 'border-ivory/15' },
  ivory: { bg: 'bg-ivory', text: 'text-charcoal', muted: 'text-charcoal/70', rule: 'border-charcoal/10' }
};

export function PillarsSection({ showIntro = true }: {showIntro?: boolean;}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useMotionValueEvent(scrollYProgress, 'change', (v) => setActive(Math.min(3, Math.floor(v * 4 + 0.12))));

  const horizontal = isDesktop && !reduce;

  return (
    <section aria-labelledby="pillars-heading">
      {showIntro &&
      <div className="bg-ivory">
          <div className="mx-auto grid max-w-page gap-8 px-5 pb-16 pt-24 md:px-10 md:pt-32 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-gold">The Total Transformation Method</p>
              <WordReveal as="h2" text="Four quiet shifts. One transformed life." className="font-serif text-5xl leading-[1.04] text-forest md:text-7xl" />
            </div>
            <p className="text-[15px] leading-relaxed text-charcoal/70 lg:col-span-4">
              Aware, Align, Awaken and Achieve form the foundation of every coaching journey — a clear path from seeing yourself honestly to living differently every day.
            </p>
          </div>
        </div>
      }
      <span id="pillars-heading" className="sr-only">Aware, Align, Awaken, Achieve</span>

      <div ref={ref} className={horizontal ? 'relative h-[400vh]' : 'relative'}>
        {horizontal ?
        <div className="sticky top-0 h-screen overflow-hidden">
            <motion.div style={{ x }} className="flex h-full w-[400%]">
              {pillars.map((p, i) =>
            <PillarPanel key={p.id} pillar={p} index={i} className="h-full w-1/4" />
            )}
            </motion.div>
            <ol className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-charcoal/70 p-1.5" aria-label="Pillar progress">
              {pillars.map((p, i) =>
            <li
              key={p.id}
              className={`rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors duration-200 ${
              active === i ? 'bg-gold text-emerald' : 'text-ivory/60'}`
              }
              aria-current={active === i ? 'step' : undefined}>
              
                  {p.word}
                </li>
            )}
            </ol>
          </div> :

        pillars.map((p, i) => <PillarPanel key={p.id} pillar={p} index={i} />)
        }
      </div>
    </section>);

}

function PillarPanel({ pillar, index, className = '' }: {pillar: Pillar;index: number;className?: string;}) {
  const t = tones[pillar.tone];
  const flip = index % 2 === 1;
  return (
    <article className={`${t.bg} ${t.text} ${className}`}>
      <div className={`mx-auto grid h-full max-w-page items-center gap-10 px-5 py-20 md:px-10 lg:grid-cols-12 lg:gap-16 lg:py-0 lg:pt-16`}>
        <div className={`lg:col-span-5 ${flip ? 'lg:order-2 lg:col-start-8' : ''}`}>
          <div className="flex items-baseline gap-5">
            <span className="font-serif text-7xl italic text-gold md:text-8xl">{pillar.number}</span>
            <span className={`h-px flex-1 border-t ${t.rule}`} aria-hidden />
          </div>
          <h3 className="mt-4 font-serif text-6xl leading-none md:text-8xl">{pillar.word}</h3>
          <p className="mt-6 font-serif text-2xl italic leading-snug md:text-3xl">{pillar.tagline}</p>
          <p className={`mt-6 max-w-md text-[15px] leading-relaxed ${t.muted}`}>{pillar.description}</p>
          <ul className={`mt-8 space-y-3 border-t pt-6 ${t.rule}`}>
            {pillar.practices.map((pr) =>
            <li key={pr} className="flex items-center gap-3 text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
                {pr}
              </li>
            )}
          </ul>
          <Link to="/method" className="mt-8 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold underline-offset-8 hover:underline">
            Explore the method
          </Link>
        </div>
        <div className={`lg:col-span-6 ${flip ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-7'}`}>
          <div className={`relative overflow-hidden ${index % 2 === 0 ? 'rounded-[2rem]' : 'rounded-t-[999px]'} aspect-[4/5] w-full lg:aspect-auto lg:h-[68vh]`}>
            <img src={pillar.image} alt={pillar.imageAlt} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </article>);

}