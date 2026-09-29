import React from 'react';
import { founders } from '../../data/founders';
import { site } from '../../data/site';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';

export function FoundersSection({ showLink = true }: {showLink?: boolean;}) {
  return (
    <section className="bg-emerald py-24 text-ivory md:py-36" aria-labelledby="founders-heading">
      <div className="mx-auto max-w-page px-5 md:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <h2 id="founders-heading" className="font-serif text-5xl leading-[1.04] md:text-7xl lg:col-span-7">
            The people behind the practice.
          </h2>
          <p className="text-[15px] leading-relaxed text-ivory/65 lg:col-span-4 lg:col-start-9">
            Total Transformation is founded by the founders of {site.parent}.
          </p>
        </div>

        <div className="mt-20 grid gap-16 md:grid-cols-2 md:gap-10 lg:gap-24">
          {founders.map((f, i) =>
          <Reveal key={f.name} delay={i * 0.06} className={i === 1 ? 'md:mt-32' : ''}>
              <article>
                <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] bg-forest">
                  {f.portrait ?
                <img src={f.portrait} alt={`Portrait of ${f.name}`} loading="lazy" className="h-full w-full object-cover" /> :

                <div className="flex h-full flex-col items-center justify-center gap-4">
                      <span className="font-serif text-[7rem] italic leading-none text-gold/80 md:text-[9rem]">{f.initials}</span>
                      <span className="text-[11px] uppercase tracking-[0.3em] text-ivory/40">Approved portrait to be supplied</span>
                    </div>
                }
                </div>
                <h3 className="mt-8 font-serif text-4xl md:text-5xl">{f.name}</h3>
                <p className="mt-2 text-sm text-gold">{f.role}</p>
                <p className={`mt-6 max-w-md text-[15px] leading-relaxed ${f.bio ? 'text-ivory/75' : 'italic text-ivory/45'}`}>
                  {f.bio ?? 'Founder biography from the Total Transformation brief will appear here.'}
                </p>
              </article>
            </Reveal>
          )}
        </div>
        {showLink &&
        <div className="mt-16">
            <Button to="/founders" variant="outlineLight">Meet the founders</Button>
          </div>
        }
      </div>
    </section>);

}