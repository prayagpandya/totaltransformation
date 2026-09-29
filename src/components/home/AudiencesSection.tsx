import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { audiences } from '../../data/audiences';
import { WordReveal } from '../ui/WordReveal';

export function AudiencesSection() {
  const [active, setActive] = useState(0);
  const current = audiences[active];

  return (
    <section className="bg-ivory py-24 md:py-36" aria-labelledby="audiences-heading">
      <div className="mx-auto grid max-w-page gap-14 px-5 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Who it is for</p>
          <span id="audiences-heading" className="sr-only">Designed for Different Seasons of Life</span>
          <WordReveal text="Designed for Different Seasons of Life." className="font-serif text-5xl leading-[1.04] text-forest md:text-6xl" />

          <ul className="mt-12 border-t border-charcoal/10" role="tablist" aria-label="Audiences" aria-orientation="vertical">
            {audiences.map((a, i) => {
              const selected = i === active;
              return (
                <li key={a.title} className="border-b border-charcoal/10">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls="audience-panel"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="flex w-full items-center gap-5 py-5 text-left">
                    
                    <span className={`h-px transition-[width,background-color] duration-200 ease-silk ${selected ? 'w-10 bg-gold' : 'w-4 bg-charcoal/25'}`} aria-hidden />
                    <span className={`font-serif text-2xl transition-colors duration-200 md:text-3xl ${selected ? 'text-forest' : 'text-charcoal/50'}`}>{a.title}</span>
                  </button>
                </li>);

            })}
          </ul>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <div id="audience-panel" role="tabpanel" className="relative lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-sage/30">
              <AnimatePresence initial={false}>
                <motion.img
                  key={current.image + active}
                  src={current.image}
                  alt={current.imageAlt}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="absolute inset-0 h-full w-full object-cover" />
                
              </AnimatePresence>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="relative -mt-24 ml-6 mr-6 bg-forest p-7 text-ivory md:-ml-12 md:mr-12">
                
                <p className="font-serif text-3xl">{current.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-ivory/75">{current.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>);

}