import React from 'react';
import { media } from '../../data/media';
import { WordReveal } from '../ui/WordReveal';
import { ParallaxImage } from '../ui/ParallaxImage';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';

export function IntroSection() {
  return (
    <section id="intro" className="bg-ivory py-24 md:py-36">
      <div className="mx-auto grid max-w-page gap-14 px-5 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <WordReveal
            text={"You Don't Need a New Life.\nYou May Need a New Way of Living."}
            className="font-serif text-[2.6rem] leading-[1.04] text-forest md:text-6xl lg:text-7xl" />
          
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:mt-20 lg:pr-10">
            <Reveal>
              <p className="font-serif text-2xl leading-snug text-charcoal">
                Total Transformation is the happiness, mindfulness, personal growth and life coaching division of One Wellness Clinic & Research Center.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-[15px] leading-relaxed text-charcoal/70">
                We help people pause, understand where they are, and become intentional about where they want to go — not by changing everything at once, but by gently changing the way they think, feel, choose and live.
              </p>
              <p className="mt-5 text-[15px] leading-relaxed text-charcoal/70">
                Our coaching brings clarity, balance, presence and consistency into everyday life, one conscious decision at a time.
              </p>
              <div className="mt-8">
                <Button to="/about" variant="outlineDark">Our approach</Button>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="lg:col-span-4 lg:col-start-9 lg:pt-28">
          <ParallaxImage src={media.images.intro} alt="A woman sitting peacefully in a meadow at golden hour" className="aspect-[4/5] w-full rounded-t-[999px]" />
          <p className="mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-charcoal/50">
            <span className="h-px w-8 bg-gold" aria-hidden /> Pause · Reflect · Choose
          </p>
        </div>
      </div>
    </section>);

}