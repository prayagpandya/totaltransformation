import React from 'react';
import { faqs } from '../data/faqs';
import { whatsappLink } from '../utils/contact';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/ui/PageHero';
import { Accordion } from '../components/ui/Accordion';
import { Button } from '../components/ui/Button';

export function FAQs() {
  const categories = Array.from(new Set(faqs.map((f) => f.category)));
  return (
    <>
      <Seo
        title="Frequently Asked Questions"
        description="Answers about coaching, programmes, fees, privacy and getting started with Total Transformation."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } }))
        }} />
      
      <PageHero eyebrow="FAQs" title="Questions, gently answered." intro="Everything you may want to know before beginning your journey." />
      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto grid max-w-page gap-14 px-5 md:px-10 lg:grid-cols-12">
          <div className="space-y-16 lg:col-span-8">
            {categories.map((c) =>
            <div key={c}>
                <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-gold">{c}</h2>
                <Accordion items={faqs.filter((f) => f.category === c)} />
              </div>
            )}
          </div>
          <aside className="lg:col-span-3 lg:col-start-10">
            <div className="lg:sticky lg:top-28">
              <p className="font-serif text-3xl leading-snug text-charcoal">Still have a question?</p>
              <p className="mt-4 text-sm text-charcoal/65">We're happy to help you find the right starting point.</p>
              <div className="mt-8 flex flex-col gap-3">
                <Button to="/contact" variant="dark">Contact us</Button>
                <Button href={whatsappLink()} variant="outlineDark">WhatsApp</Button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>);

}