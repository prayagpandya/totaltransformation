import React from 'react';
import { Link } from 'react-router-dom';
import { media } from '../data/media';
import { programs } from '../data/programs';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/ui/PageHero';
import { Button } from '../components/ui/Button';
import { ProgramsShowcase } from '../components/home/ProgramsShowcase';
import { FinalCtaSection } from '../components/home/FinalCtaSection';

export function Programs() {
  return (
    <>
      <Seo title="Signature Programs" description="Happiness Reset, Mindful Life, Total Transformation and Executive Transformation — structured coaching programmes for lasting change." />
      <PageHero
        variant="full"
        eyebrow="Signature Programs"
        title="Four journeys. One intention: a life that feels aligned."
        intro="Choose the pace and depth that fits where you are. Every programme begins with a discovery conversation."
        image={media.images.achieve}
        imageAlt="A person walking along a mountain ridge at sunrise" />
      
      <ProgramsShowcase showHeading={false} />
      <section className="bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-page px-5 md:px-10">
          <h2 className="font-serif text-4xl text-forest md:text-6xl">Compare programmes</h2>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[760px] text-left">
              <thead>
                <tr className="border-b border-gold/60 text-xs uppercase tracking-[0.2em] text-charcoal/55">
                  <th scope="col" className="py-4 pr-6 font-semibold">Programme</th>
                  <th scope="col" className="py-4 pr-6 font-semibold">Duration</th>
                  <th scope="col" className="py-4 pr-6 font-semibold">Ideal for</th>
                  <th scope="col" className="py-4 pr-6 font-semibold">Fee</th>
                  <th scope="col" className="py-4 font-semibold"><span className="sr-only">Details</span></th>
                </tr>
              </thead>
              <tbody>
                {programs.map((p) =>
                <tr key={p.slug} className="border-b border-charcoal/10">
                    <th scope="row" className="py-6 pr-6 font-serif text-3xl font-normal text-charcoal">{p.name}</th>
                    <td className="py-6 pr-6 text-sm text-charcoal/75">{p.duration}</td>
                    <td className="py-6 pr-6 text-sm text-charcoal/70">{p.idealFor}</td>
                    <td className="py-6 pr-6 font-serif text-2xl text-forest">{p.price}</td>
                    <td className="py-6 text-right">
                      <Link to={`/programs/${p.slug}`} className="text-xs font-semibold uppercase tracking-[0.18em] text-forest underline-offset-4 hover:underline">Details</Link>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="mt-12"><Button to="/assessment" variant="outlineDark">Not sure? Take the assessment</Button></div>
        </div>
      </section>
      <FinalCtaSection />
    </>);

}