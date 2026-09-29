import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';
import { programDisclaimer, programs } from '../data/programs';
import { whatsappLink } from '../utils/contact';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { NotFound } from './NotFound';

export function ProgramDetail() {
  const { slug } = useParams();
  const program = programs.find((p) => p.slug === slug);
  if (!program) return <NotFound />;
  const others = programs.filter((p) => p.slug !== program.slug);

  return (
    <>
      <Seo
        title={`${program.name} — ${program.duration}`}
        description={program.description}
        image={program.image}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: program.name,
          description: program.description,
          offers: { '@type': 'Offer', price: program.price.replace(/[^\d]/g, ''), priceCurrency: 'INR' }
        }} />
      
      <PageHero variant="split" eyebrow={`Signature Program · ${program.duration}`} title={program.name} intro={program.tagline} image={program.image} imageAlt={program.imageAlt} />

      <section className="bg-ivory py-24 md:py-32">
        <div className="mx-auto grid max-w-page gap-14 px-5 md:px-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-serif text-3xl leading-snug text-charcoal md:text-4xl">{program.description}</p>
            </Reveal>
            <h2 className="mt-16 text-xs font-semibold uppercase tracking-[0.25em] text-gold">What's included</h2>
            <ul className="mt-6 border-t border-charcoal/10">
              {program.inclusions.map((inc) =>
              <li key={inc} className="flex items-center gap-4 border-b border-charcoal/10 py-5 text-charcoal">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
                  <span className="font-serif text-2xl">{inc}</span>
                </li>
              )}
            </ul>
            <h2 className="mt-16 text-xs font-semibold uppercase tracking-[0.25em] text-gold">What you can work towards</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {program.outcomes.map((o) =>
              <li key={o} className="border-l border-gold pl-4 text-[15px] text-charcoal/75">{o}</li>
              )}
            </ul>
            <p className="mt-8 text-sm italic text-charcoal/50">Every journey is personal — outcomes vary from person to person.</p>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="bg-forest p-8 text-ivory lg:sticky lg:top-28 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Programme fee</p>
              <p className="mt-4 font-serif text-6xl">{program.price}</p>
              <p className="mt-2 text-ivory/70">{program.duration}</p>
              <div className="my-8 h-px bg-gold/50" />
              <p className="text-sm text-ivory/75"><span className="font-semibold text-ivory">Ideal for:</span> {program.idealFor}</p>
              <div className="mt-8 flex flex-col gap-3">
                <Button to={`/contact?program=${program.slug}`} variant="gold">Book a discovery session</Button>
                <Button href={whatsappLink(`Hello, I'd like to enquire about the ${program.name} programme.`)} variant="outlineLight">Enquire on WhatsApp</Button>
              </div>
              <p className="mt-8 text-xs leading-relaxed text-ivory/55">{programDisclaimer}</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-page px-5 md:px-10">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-charcoal/50">Other programmes</h2>
          <ul className="mt-6 border-t border-gold/60">
            {others.map((p) =>
            <li key={p.slug} className="border-b border-gold/60">
                <Link to={`/programs/${p.slug}`} className="group flex items-center justify-between gap-6 py-6">
                  <span className="font-serif text-3xl text-charcoal group-hover:text-forest md:text-4xl">{p.name}</span>
                  <span className="flex items-center gap-6 text-sm text-charcoal/65">
                    <span className="hidden sm:inline">{p.duration}</span>
                    <span className="font-serif text-2xl text-forest">{p.price}</span>
                    <ArrowUpRightIcon className="h-5 w-5 text-gold transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </section>
    </>);

}