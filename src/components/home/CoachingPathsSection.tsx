import React from 'react';
import { Link } from 'react-router-dom';
import { coachingPaths } from '../../data/coaching';
import type { CoachingPath } from '../../types/content';
import { WordReveal } from '../ui/WordReveal';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';

export function CoachingPathsSection() {
  const [happiness, mindfulness, personal, executive] = coachingPaths;
  return (
    <section className="bg-ivory" aria-labelledby="coaching-heading">
      <div className="mx-auto max-w-page px-5 pb-16 pt-24 md:px-10 md:pt-36">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Coaching Pathways</p>
        <span id="coaching-heading" className="sr-only">A More Conscious Way of Living</span>
        <WordReveal text="A More Conscious Way of Living." className="max-w-4xl font-serif text-5xl leading-[1.04] text-forest md:text-7xl" />
      </div>

      {/* 1 — wide landscape image, text right */}
      <div className="mx-auto grid max-w-page items-center gap-10 px-5 pb-24 md:px-10 lg:grid-cols-12 lg:pb-36">
        <ImageLink path={happiness} className="aspect-[4/3] rounded-[2rem] lg:col-span-7" />
        <PathText path={happiness} className="lg:col-span-4 lg:col-start-9" />
      </div>

      {/* 2 — text left, tall arched portrait right */}
      <div className="mx-auto grid max-w-page items-end gap-10 px-5 pb-24 md:px-10 lg:grid-cols-12 lg:pb-36">
        <PathText path={mindfulness} className="lg:order-1 lg:col-span-5 lg:pb-16" />
        <ImageLink path={mindfulness} className="aspect-[4/5] rounded-t-[999px] lg:order-2 lg:col-span-5 lg:col-start-8" />
      </div>

      {/* 3 — full-bleed cinematic image with overlapping panel */}
      <div className="relative">
        <Link to={`/coaching/${personal.slug}`} className="group block h-[80vh] min-h-[520px] overflow-hidden" aria-label={`Explore ${personal.name}`}>
          <img src={personal.image} alt={personal.imageAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 ease-silk group-hover:scale-[1.03]" />
        </Link>
        <div className="mx-auto max-w-page px-5 md:px-10">
          <Reveal className="relative -mt-40 max-w-xl bg-emerald p-8 text-ivory md:-mt-56 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">{personal.name}</p>
            <h3 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">{personal.headline}</h3>
            <p className="mt-5 text-[15px] leading-relaxed text-ivory/75">{personal.summary}</p>
            <div className="mt-8"><Button to={`/coaching/${personal.slug}`} variant="gold">Explore</Button></div>
          </Reveal>
        </div>
      </div>

      {/* 4 — dark split, executive */}
      <div className="mt-24 bg-forest text-ivory lg:mt-36">
        <div className="mx-auto grid max-w-page lg:grid-cols-2">
          <div className="flex flex-col justify-center px-5 py-20 md:px-10 lg:py-28 lg:pr-20">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">{executive.name}</p>
            <h3 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">{executive.headline}</h3>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ivory/75">{executive.summary}</p>
            <ul className="mt-8 grid max-w-md grid-cols-2 gap-x-6 gap-y-3 border-t border-ivory/15 pt-6 text-sm text-ivory/80">
              {executive.explore.map((e) => <li key={e}>{e}</li>)}
            </ul>
            <div className="mt-10"><Button to={`/coaching/${executive.slug}`} variant="gold">Explore</Button></div>
          </div>
          <ImageLink path={executive} className="min-h-[480px] lg:min-h-[720px]" />
        </div>
      </div>
    </section>);

}

function ImageLink({ path, className = '' }: {path: CoachingPath;className?: string;}) {
  return (
    <Link to={`/coaching/${path.slug}`} aria-label={`Explore ${path.name}`} className={`group relative block overflow-hidden bg-sage/30 ${className}`}>
      <img src={path.image} alt={path.imageAlt} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-silk group-hover:scale-[1.04]" />
    </Link>);

}

function PathText({ path, className = '' }: {path: CoachingPath;className?: string;}) {
  return (
    <Reveal className={className}>
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">{path.name}</p>
      <h3 className="mt-5 font-serif text-4xl leading-tight text-charcoal md:text-5xl">{path.headline}</h3>
      <p className="mt-5 text-[15px] leading-relaxed text-charcoal/70">{path.summary}</p>
      <div className="mt-8"><Button to={`/coaching/${path.slug}`} variant="outlineDark">Explore</Button></div>
    </Reveal>);

}