import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { testimonialDisclaimer, testimonials } from '../../data/testimonials';
import { WordReveal } from '../ui/WordReveal';

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];
  const go = (dir: number) => setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <section className="bg-ivory py-24 md:py-36" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-page px-5 md:px-10">
        <span id="testimonials-heading" className="sr-only">Real People. Real Journeys. Real Change.</span>
        <WordReveal text="Real People. Real Journeys. Real Change." className="max-w-4xl font-serif text-5xl leading-[1.04] text-forest md:text-7xl" />

        <div className="mt-16 grid gap-10 border-t border-charcoal/10 pt-12 lg:grid-cols-12">
          <div className="flex items-start gap-3 lg:col-span-3">
            <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial" className="flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/15 transition-colors duration-200 hover:border-forest">
              <ArrowLeftIcon className="h-4 w-4" aria-hidden />
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className="flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/15 transition-colors duration-200 hover:border-forest">
              <ArrowRightIcon className="h-4 w-4" aria-hidden />
            </button>
            <span className="ml-3 mt-3.5 text-sm text-charcoal/50">{index + 1} / {testimonials.length}</span>
          </div>
          <div className="min-h-[260px] lg:col-span-8 lg:col-start-5" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.figure key={index} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
                {t.isPlaceholder &&
                <span className="mb-6 inline-block rounded-full border border-dashed border-gold px-4 py-1.5 text-xs font-semibold text-charcoal/70">
                    Placeholder — awaiting consent-approved testimonial
                  </span>
                }
                <blockquote className={`font-serif text-3xl leading-snug md:text-5xl ${t.isPlaceholder ? 'text-charcoal/40' : 'text-charcoal'}`}>
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 text-sm">
                  <span className="font-semibold text-charcoal">{t.name}</span>
                  <span className="text-charcoal/50"> · {t.context}</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
        </div>
        <p className="mt-12 text-xs text-charcoal/50">{testimonialDisclaimer}</p>
      </div>
    </section>);

}