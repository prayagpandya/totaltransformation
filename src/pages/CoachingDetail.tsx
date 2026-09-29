import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { coachingPaths } from '../data/coaching';
import { programs } from '../data/programs';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { ParallaxImage } from '../components/ui/ParallaxImage';
import { FinalCtaSection } from '../components/home/FinalCtaSection';
import { NotFound } from './NotFound';

export function CoachingDetail() {
  const { slug } = useParams();
  const path = coachingPaths.find((c) => c.slug === slug);
  if (!path) return <NotFound />;
  const program = programs.find((p) => p.slug === path.relatedProgram);
  const others = coachingPaths.filter((c) => c.slug !== path.slug);

  return (
    <>
      <Seo title={path.name} description={path.summary} image={path.image} />
      <PageHero variant="full" eyebrow={path.name} title={path.headline} intro={path.summary} image={path.image} imageAlt={path.imageAlt}>
        <Button to="/contact" variant="gold">Book a discovery session</Button>
      </PageHero>

      <section className="bg-ivory py-24 md:py-32">
        <div className="mx-auto grid max-w-page gap-14 px-5 md:px-10 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-6">
            {path.overview.map((p, i) =>
            <Reveal key={i} delay={i * 0.05}>
                <p className={i === 0 ? 'font-serif text-3xl leading-snug text-charcoal md:text-4xl' : 'text-[15px] leading-relaxed text-charcoal/70 md:text-base'}>{p}</p>
              </Reveal>
            )}
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">This may be for you if</h2>
            <ul className="mt-6 border-t border-charcoal/10">
              {path.forYou.map((f) =>
              <li key={f} className="border-b border-charcoal/10 py-5 font-serif text-2xl text-charcoal">{f}</li>
              )}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-forest text-ivory">
        <div className="mx-auto grid max-w-page lg:grid-cols-2">
          <div className="px-5 py-20 md:px-10 lg:py-28 lg:pr-20">
            <h2 className="font-serif text-4xl md:text-6xl">What we explore together</h2>
            <ol className="mt-12 grid gap-8 sm:grid-cols-2">
              {path.explore.map((e) =>
              <li key={e} className="border-t border-ivory/15 pt-5">
                  <span className="font-serif text-2xl">{e}</span>
                </li>
              )}
            </ol>
          </div>
          <ParallaxImage src={path.image} alt={path.imageAlt} className="min-h-[420px]" />
        </div>
      </section>

      {program &&
      <section className="bg-cream py-24 md:py-28">
          <div className="mx-auto flex max-w-page flex-col gap-8 px-5 md:flex-row md:items-end md:justify-between md:px-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Recommended programme</p>
              <h2 className="mt-4 font-serif text-5xl text-charcoal md:text-6xl">{program.name}</h2>
              <p className="mt-3 text-charcoal/70">{program.duration} · {program.price} · {program.tagline}</p>
            </div>
            <Button to={`/programs/${program.slug}`} variant="dark">View programme</Button>
          </div>
        </section>
      }

      <section className="bg-ivory py-20">
        <div className="mx-auto max-w-page px-5 md:px-10">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-charcoal/50">Other pathways</h2>
          <ul className="mt-6 grid gap-6 md:grid-cols-3">
            {others.map((o) =>
            <li key={o.slug}>
                <Link to={`/coaching/${o.slug}`} className="group block">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                    <img src={o.image} alt={o.imageAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 ease-silk group-hover:scale-105" />
                  </div>
                  <p className="mt-4 font-serif text-2xl text-charcoal group-hover:text-forest">{o.name}</p>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </section>
      <FinalCtaSection />
    </>);

}