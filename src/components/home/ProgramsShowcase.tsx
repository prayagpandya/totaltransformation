import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';
import { programDisclaimer, programs } from '../../data/programs';
import { WordReveal } from '../ui/WordReveal';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { ParallaxImage } from '../ui/ParallaxImage';

export function ProgramsShowcase({ showHeading = true }: {showHeading?: boolean;}) {
  const featured = programs.find((p) => p.featured) ?? programs[0];
  const others = programs.filter((p) => p.slug !== featured.slug);

  return (
    <section className="bg-cream py-24 md:py-36" aria-labelledby="programs-heading">
      <div className="mx-auto max-w-page px-5 md:px-10">
        {showHeading &&
        <div className="mb-16 grid gap-8 lg:mb-24 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Signature Programs</p>
              <WordReveal text="Structured journeys for real, lasting change." className="font-serif text-5xl leading-[1.04] text-forest md:text-7xl" />
            </div>
            <p className="text-[15px] leading-relaxed text-charcoal/70 lg:col-span-4 lg:col-start-9">
              Each programme is personalised after an initial consultation, so the journey reflects where you are and where you want to go.
            </p>
          </div>
        }
        <span id="programs-heading" className="sr-only">Signature Programs</span>

        <article className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Link to={`/programs/${featured.slug}`} className="block lg:col-span-7" aria-label={`View ${featured.name}`}>
            <ParallaxImage src={featured.image} alt={featured.imageAlt} className="aspect-[4/3] w-full rounded-[2rem] lg:aspect-auto lg:h-[640px]" />
          </Link>
          <Reveal className="flex flex-col justify-center lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Our signature journey</p>
            <h3 className="mt-5 font-serif text-5xl leading-none text-charcoal md:text-6xl">{featured.name}</h3>
            <div className="mt-6 flex items-center gap-4 border-y border-gold/50 py-4 text-sm font-semibold text-charcoal">
              <span>{featured.duration}</span>
              <span className="h-4 w-px bg-gold" aria-hidden />
              <span className="font-serif text-2xl font-medium text-forest">{featured.price}</span>
            </div>
            <p className="mt-6 text-[15px] leading-relaxed text-charcoal/70">{featured.description}</p>
            <ul className="mt-6 space-y-2.5">
              {featured.inclusions.map((inc) =>
              <li key={inc} className="flex items-start gap-3 text-sm text-charcoal/80">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                  {inc}
                </li>
              )}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button to={`/programs/${featured.slug}`} variant="dark">View program</Button>
              <Button to={`/contact?program=${featured.slug}`} variant="outlineDark" arrow={false}>Enquire</Button>
            </div>
          </Reveal>
        </article>

        <ul className="mt-20 border-t border-gold/60 lg:mt-28">
          {others.map((p) =>
          <li key={p.slug} className="border-b border-gold/60">
              <Link to={`/programs/${p.slug}`} className="group grid items-center gap-4 py-8 md:grid-cols-12 md:gap-8 md:py-10">
                <div className="flex items-center gap-5 md:col-span-5">
                  <span className="relative hidden h-16 w-16 shrink-0 overflow-hidden rounded-full md:block">
                    <img src={p.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-300 ease-silk group-hover:scale-110" />
                  </span>
                  <h3 className="font-serif text-4xl leading-none text-charcoal transition-colors duration-200 group-hover:text-forest md:text-5xl">{p.name}</h3>
                </div>
                <p className="text-sm text-charcoal/65 md:col-span-4">{p.tagline}</p>
                <div className="flex items-center justify-between gap-6 md:col-span-3 md:justify-end">
                  <span className="text-sm font-semibold text-charcoal/70">{p.duration}</span>
                  <span className="font-serif text-2xl text-forest">{p.price}</span>
                  <ArrowUpRightIcon className="h-5 w-5 text-gold transition-transform duration-200 ease-silk group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden />
                </div>
              </Link>
            </li>
          )}
        </ul>

        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-xs leading-relaxed text-charcoal/55">{programDisclaimer}</p>
          <Button to="/contact" variant="dark">Book a discovery session</Button>
        </div>
      </div>
    </section>);

}