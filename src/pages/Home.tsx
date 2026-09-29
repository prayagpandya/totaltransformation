import React from 'react';
import { site } from '../data/site';
import { Seo } from '../components/ui/Seo';
import { HeroSection } from '../components/home/HeroSection';
import { IntroSection } from '../components/home/IntroSection';
import { InnerWorldSection } from '../components/home/InnerWorldSection';
import { PillarsSection } from '../components/home/PillarsSection';
import { CoachingPathsSection } from '../components/home/CoachingPathsSection';
import { VideoBreakSection } from '../components/home/VideoBreakSection';
import { ProgramsShowcase } from '../components/home/ProgramsShowcase';
import { AudiencesSection } from '../components/home/AudiencesSection';
import { JourneySection } from '../components/home/JourneySection';
import { FoundersSection } from '../components/home/FoundersSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { AssessmentSection } from '../components/home/AssessmentSection';
import { FinalCtaSection } from '../components/home/FinalCtaSection';

export function Home() {
  return (
    <>
      <Seo
        description={site.description}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: site.name,
          description: site.tagline,
          logo: site.logo,
          parentOrganization: { '@type': 'MedicalOrganization', name: site.parent }
        }} />
      
      <HeroSection />
      <IntroSection />
      <InnerWorldSection />
      <PillarsSection />
      <CoachingPathsSection />
      <VideoBreakSection />
      <ProgramsShowcase />
      <AudiencesSection />
      <JourneySection />
      <FoundersSection />
      <TestimonialsSection />
      <AssessmentSection />
      <FinalCtaSection />
    </>);

}