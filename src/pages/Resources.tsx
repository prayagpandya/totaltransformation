import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/resources';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';

export function Resources() {
  const categories = ['All', ...Array.from(new Set(articles.map((a) => a.category)))];
  const [cat, setCat] = useState('All');
  const list = cat === 'All' ? articles : articles.filter((a) => a.category === cat);
  const [lead, ...rest] = list;

  return (
    <>
      <Seo title="Journal & Resources" description="Reflections, practices and ideas on happiness, mindfulness, habits and purpose from Total Transformation." />
      <PageHero eyebrow="Journal & Resources" title="Reflections for a more conscious life." intro="Short reads and simple practices to bring clarity, presence and balance into your everyday." />
      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-page px-5 md:px-10">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            {categories.map((c) =>
            <button
              key={c}
              type="button"
              aria-pressed={cat === c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-5 py-2 text-sm transition-colors duration-150 ${cat === c ? 'border-forest bg-forest text-ivory' : 'border-charcoal/15 text-charcoal/70 hover:border-forest'}`}>
              
                {c}
              </button>
            )}
          </div>

          {lead &&
          <Link to={`/resources/${lead.slug}`} className="group mt-14 grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="aspect-[16/10] overflow-hidden rounded-[2rem] lg:col-span-7">
                <img src={lead.image} alt={lead.imageAlt} className="h-full w-full object-cover transition-transform duration-300 ease-silk group-hover:scale-[1.03]" />
              </div>
              <div className="lg:col-span-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{lead.category} · {lead.readTime}</p>
                <h2 className="mt-4 font-serif text-4xl leading-tight text-charcoal group-hover:text-forest md:text-5xl">{lead.title}</h2>
                <p className="mt-5 text-[15px] leading-relaxed text-charcoal/70">{lead.excerpt}</p>
              </div>
            </Link>
          }

          {rest.length > 0 &&
          <ul className="mt-20 grid gap-12 md:grid-cols-2">
              {rest.map((a, i) =>
            <li key={a.slug}>
                  <Reveal delay={i * 0.05}>
                    <Link to={`/resources/${a.slug}`} className="group block">
                      <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                        <img src={a.image} alt={a.imageAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 ease-silk group-hover:scale-[1.03]" />
                      </div>
                      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold">{a.category} · {a.readTime}</p>
                      <h3 className="mt-3 font-serif text-3xl leading-tight text-charcoal group-hover:text-forest">{a.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-charcoal/65">{a.excerpt}</p>
                    </Link>
                  </Reveal>
                </li>
            )}
            </ul>
          }
        </div>
      </section>
    </>);

}