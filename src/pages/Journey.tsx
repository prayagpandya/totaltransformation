import React from 'react';
import { media } from '../data/media';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/ui/PageHero';
import { Button } from '../components/ui/Button';
import { JourneySection } from '../components/home/JourneySection';
import { FinalCtaSection } from '../components/home/FinalCtaSection';

export function Journey() {
  return (
    <>
      <Seo title="Your Transformation Journey" description="Discover, Understand, Transform, Integrate — how a Total Transformation coaching journey unfolds." />
      <PageHero
        variant="full"
        eyebrow="Your Transformation Journey"
        title="Discover. Understand. Transform. Integrate."
        intro="A clear, supportive path — so you always know where you are and what comes next."
        image={media.images.personal}
        imageAlt="A woman walking down a sunlit forest trail">
        
        <Button to="/contact" variant="gold">Begin with a discovery session</Button>
      </PageHero>
      <JourneySection detailed />
      <FinalCtaSection />
    </>);

}