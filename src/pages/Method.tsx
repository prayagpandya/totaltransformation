import React from 'react';
import { pillars } from '../data/pillars';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/ui/PageHero';
import { Button } from '../components/ui/Button';
import { PillarsSection } from '../components/home/PillarsSection';
import { JourneySection } from '../components/home/JourneySection';

export function Method() {
  return (
    <>
      <Seo title="The Method — Aware · Align · Awaken · Achieve" description="Explore the Aware, Align, Awaken, Achieve method behind every Total Transformation coaching journey." />
      <PageHero
        eyebrow="The Method"
        title={'Aware. Align.\nAwaken. Achieve.'}
        intro="A simple, structured method for meaningful change — from seeing yourself clearly to living differently, every day.">
        
        <Button to="/assessment" variant="gold">Take the free assessment</Button>
      </PageHero>
      <PillarsSection showIntro={false} />
      <section className="bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-page px-5 md:px-10">
          <h2 className="font-serif text-4xl text-forest md:text-6xl">How the pillars work together</h2>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b border-gold/60 text-xs uppercase tracking-[0.2em] text-charcoal/55">
                  <th scope="col" className="py-4 pr-6 font-semibold">Pillar</th>
                  <th scope="col" className="py-4 pr-6 font-semibold">The shift</th>
                  <th scope="col" className="py-4 font-semibold">What we practise</th>
                </tr>
              </thead>
              <tbody>
                {pillars.map((p) =>
                <tr key={p.id} className="border-b border-charcoal/10 align-top">
                    <th scope="row" className="py-6 pr-6 font-serif text-3xl font-normal text-forest">{p.word}</th>
                    <td className="py-6 pr-6 font-serif text-xl italic text-charcoal">{p.tagline}</td>
                    <td className="py-6 text-sm text-charcoal/70">{p.practices.join(' · ')}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <JourneySection />
    </>);

}