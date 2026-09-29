import React from 'react';
import { media } from '../../data/media';
import { innerWorldExperiences } from '../../data/innerWorld';
import { ParallaxImage } from '../ui/ParallaxImage';
import { WordReveal } from '../ui/WordReveal';
import { Reveal } from '../ui/Reveal';

export function InnerWorldSection() {
  return (
    <section className="bg-emerald text-ivory" aria-labelledby="inner-world">
      <div className="relative h-[75vh] min-h-[520px]">
        <ParallaxImage src={media.images.innerWorld} alt="A professional looking out of an office window over the city at dusk" strength={10} className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-emerald/55" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-page px-5 pb-14 md:px-10 md:pb-20">
          <span id="inner-world" className="sr-only">The inner world</span>
          <WordReveal
            text={'Sometimes Life Looks Successful From the Outside.\nBut Feels Disconnected on the Inside.'}
            stagger={0.035}
            className="max-w-5xl font-serif text-4xl leading-[1.05] md:text-6xl lg:text-7xl" />
          
        </div>
      </div>

      <div className="mx-auto grid max-w-page gap-14 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <p className="font-serif text-3xl italic leading-snug text-gold">If any of this feels familiar, you are not alone.</p>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-ivory/65">
              These are some of the most common reasons people begin working with us. None of them mean something is wrong with you — they are signals that it may be time to pause and realign.
            </p>
          </div>
        </div>
        <ul className="lg:col-span-8">
          {innerWorldExperiences.map((item, i) =>
          <li key={item} className={`border-t border-ivory/10 py-7 md:py-9 ${i % 2 === 1 ? 'md:pl-[16%]' : ''}`}>
              <Reveal delay={0.03}>
                <p className="flex gap-5 font-serif text-3xl leading-tight md:text-[2.6rem]">
                  <span className="mt-5 h-px w-6 shrink-0 bg-gold md:mt-6" aria-hidden />
                  {item}
                </p>
              </Reveal>
            </li>
          )}
        </ul>
      </div>
    </section>);

}