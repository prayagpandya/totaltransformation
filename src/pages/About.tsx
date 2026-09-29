import React from 'react';
import { media } from '../data/media';
import { site } from '../data/site';
import { pillars } from '../data/pillars';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/ui/PageHero';
import { WordReveal } from '../components/ui/WordReveal';
import { ParallaxImage } from '../components/ui/ParallaxImage';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { FinalCtaSection } from '../components/home/FinalCtaSection';

const beliefs = [
{ title: 'Awareness before action', text: 'Lasting change begins with understanding — not with pressure to change everything at once.' },
{ title: 'Small shifts, repeated', text: 'We favour sustainable daily practices over short bursts of motivation.' },
{ title: 'Whole-life perspective', text: 'Mind, habits, relationships, work and purpose are connected. We work with all of them.' }];


export function About() {
  return (
    <>
      <Seo title="About" description="Total Transformation is the happiness, mindfulness, personal growth and life coaching division of One Wellness Clinic & Research Center." />
      <PageHero
        variant="split"
        eyebrow="About Total Transformation"
        title="A more intentional way of living starts here."
        intro={site.tagline}
        image={media.images.conversation}
        imageAlt="Two people in a warm conversation in a garden" />
      

      <section className="bg-ivory py-24 md:py-36">
        <div className="mx-auto grid max-w-page gap-14 px-5 md:px-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <WordReveal text="Why we exist." className="font-serif text-5xl text-forest md:text-7xl" />
          </div>
          <Reveal className="space-y-6 text-[15px] leading-relaxed text-charcoal/75 lg:col-span-5 lg:col-start-8 md:text-base">
            <p className="font-serif text-3xl leading-snug text-charcoal">
              Many people are doing everything “right” — and still feel exhausted, disconnected or unsure of what comes next.
            </p>
            <p>Total Transformation was created to offer a space to pause, reflect and realign. As part of {site.parent}, we bring a thoughtful, human and structured approach to happiness, mindfulness and personal growth.</p>
            <p>Our coaching is not about becoming someone else. It is about understanding yourself more clearly and choosing, intentionally, how you want to live.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-page lg:grid-cols-2">
          <ParallaxImage src={media.images.reflection} alt="A man sitting by a calm lake in the morning" className="min-h-[420px] lg:min-h-[640px]" />
          <div className="px-5 py-20 md:px-10 lg:px-20 lg:py-28">
            <h2 className="font-serif text-4xl leading-tight text-forest md:text-5xl">What we believe</h2>
            <dl className="mt-12 space-y-10">
              {beliefs.map((b) =>
              <Reveal key={b.title}>
                  <dt className="font-serif text-3xl text-charcoal">{b.title}</dt>
                  <dd className="mt-3 max-w-md text-[15px] leading-relaxed text-charcoal/70">{b.text}</dd>
                </Reveal>
              )}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-forest py-24 text-ivory md:py-32">
        <div className="mx-auto max-w-page px-5 md:px-10">
          <h2 className="font-serif text-4xl md:text-6xl">Guided by four pillars.</h2>
          <div className="mt-14 grid gap-px bg-ivory/10 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) =>
            <div key={p.id} className="flex flex-col bg-forest p-8 lg:p-10">
                <span className="font-serif text-5xl italic text-gold">{p.number}</span>
                <h3 className="mt-6 font-serif text-4xl">{p.word}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/70">{p.tagline}</p>
              </div>
            )}
          </div>
          <div className="mt-12"><Button to="/method" variant="gold">Explore the method</Button></div>
        </div>
      </section>
      <FinalCtaSection />
    </>);

}