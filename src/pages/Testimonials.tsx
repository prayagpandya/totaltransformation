import React from 'react';
import { testimonialDisclaimer, testimonials } from '../data/testimonials';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { FinalCtaSection } from '../components/home/FinalCtaSection';

export function Testimonials() {
  return (
    <>
      <Seo title="Testimonials" description="Real people, real journeys, real change — consent-approved stories from Total Transformation clients." />
      <PageHero eyebrow="Testimonials" title="Real People. Real Journeys. Real Change." intro={testimonialDisclaimer} />
      <section className="bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-page columns-1 gap-10 px-5 md:columns-2 md:px-10 lg:columns-3">
          {testimonials.map((t, i) =>
          <Reveal key={i} delay={i * 0.05} className="mb-10 break-inside-avoid">
              <figure className="border-t border-gold/60 pt-8">
                {t.isPlaceholder &&
              <span className="mb-5 inline-block rounded-full border border-dashed border-gold px-3 py-1 text-[11px] font-semibold text-charcoal/65">
                    Placeholder — editable
                  </span>
              }
                <blockquote className={`font-serif text-3xl leading-snug ${t.isPlaceholder ? 'text-charcoal/40' : 'text-charcoal'}`}>“{t.quote}”</blockquote>
                <figcaption className="mt-6 text-sm"><span className="font-semibold">{t.name}</span><span className="text-charcoal/50"> · {t.context}</span></figcaption>
              </figure>
            </Reveal>
          )}
        </div>
      </section>
      <FinalCtaSection />
    </>);

}