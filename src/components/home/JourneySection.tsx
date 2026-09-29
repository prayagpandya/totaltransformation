import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { journeySteps, journeyStatement } from '../../data/journey';
import type { JourneyStep } from '../../types/content';
import { WordReveal } from '../ui/WordReveal';
import { Button } from '../ui/Button';

export function JourneySection({ detailed = false }: {detailed?: boolean;}) {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 65%', 'end 55%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section className="bg-cream py-24 md:py-36" aria-labelledby="journey-heading">
      <div className="mx-auto grid max-w-page gap-14 px-5 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Your transformation journey</p>
            <h2 id="journey-heading" className="font-serif text-5xl leading-[1.04] text-forest md:text-6xl">From first conversation to everyday change.</h2>
            <div className="mt-10"><Button to="/journey" variant="outlineDark">See the journey</Button></div>
          </div>
        </div>
        <ol ref={ref} className="relative lg:col-span-7 lg:col-start-6">
          <span className="absolute bottom-6 left-[19px] top-6 w-px bg-charcoal/15" aria-hidden />
          <motion.span
            className="absolute bottom-6 left-[19px] top-6 w-px origin-top bg-gold"
            style={reduce ? undefined : { scaleY }}
            aria-hidden />
          
          {journeySteps.map((s) =>
          <Step key={s.number} step={s} detailed={detailed} />
          )}
        </ol>
      </div>
      <div className="mx-auto mt-24 max-w-5xl px-5 text-center md:mt-36 md:px-10">
        <WordReveal as="p" text={journeyStatement} className="font-serif text-4xl italic leading-tight text-charcoal md:text-6xl" />
      </div>
    </section>);

}

function Step({ step, detailed }: {step: JourneyStep;detailed: boolean;}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { margin: '-45% 0px -45% 0px' });
  const seen = useInView(ref, { once: true, margin: '0px 0px -40% 0px' });
  const on = inView || seen;
  return (
    <li ref={ref} className="relative pb-20 pl-16 last:pb-0 md:pl-24">
      <span
        className={`absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border text-xs font-semibold transition-colors duration-300 ${
        on ? 'border-gold bg-gold text-emerald' : 'border-charcoal/20 bg-cream text-charcoal/50'}`
        }>
        
        {step.number}
      </span>
      <motion.div animate={{ opacity: on ? 1 : 0.4 }} transition={{ duration: 0.3 }}>
        <h3 className="font-serif text-5xl leading-none text-charcoal md:text-6xl">{step.title}</h3>
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-charcoal/70 md:text-base">{step.description}</p>
        {detailed && <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-forest">{step.detail}</p>}
      </motion.div>
    </li>);

}