import React from 'react';
import { useParams } from 'react-router-dom';
import { legalPages } from '../data/legal';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/ui/PageHero';
import { NotFound } from './NotFound';

export function Legal() {
  const { slug = '' } = useParams();
  const page = legalPages[slug];
  if (!page) return <NotFound />;
  return (
    <>
      <Seo title={page.title} description={page.intro} />
      <PageHero eyebrow="Legal" title={page.title} intro={page.intro} />
      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-2xl space-y-12 px-5">
          {page.sections.map((s) =>
          <div key={s.heading}>
              <h2 className="font-serif text-3xl text-forest">{s.heading}</h2>
              <p className="mt-4 text-[16px] leading-[1.8] text-charcoal/75">{s.text}</p>
            </div>
          )}
        </div>
      </section>
    </>);

}