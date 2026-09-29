import React from 'react';
import { media } from '../../data/media';
import { whatsappLink } from '../../utils/contact';
import { CinematicMedia } from '../ui/CinematicMedia';
import { WordReveal } from '../ui/WordReveal';
import { Button } from '../ui/Button';

export function FinalCtaSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-emerald py-32 text-ivory" aria-labelledby="final-cta">
      <CinematicMedia image={media.images.finalCta} video={media.videos.finalCta} alt="A golden field at sunset with a single tree" />
      <div className="absolute inset-0 bg-emerald/60" aria-hidden />
      <div className="relative mx-auto w-full max-w-5xl px-5 text-center md:px-10">
        <span id="final-cta" className="sr-only">Your Transformation Can Begin With One Conscious Decision.</span>
        <WordReveal text="Your Transformation Can Begin With One Conscious Decision." className="font-serif text-5xl leading-[1.02] md:text-7xl lg:text-8xl" />
        <div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
          <Button to="/contact" variant="gold">Start your transformation</Button>
          <Button href={whatsappLink()} variant="outlineLight">Talk to us on WhatsApp</Button>
        </div>
      </div>
    </section>);

}