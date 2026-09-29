import React from 'react';
import { site } from '../data/site';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/ui/PageHero';
import { FoundersSection } from '../components/home/FoundersSection';
import { FinalCtaSection } from '../components/home/FinalCtaSection';

export function Founders() {
  return (
    <>
      <Seo title="Founders" description={`Meet Dr. Sohan S. Chouhan and Mrs. Pritee Mehta, founders of ${site.parent}.`} />
      <PageHero eyebrow="Founders" title="Founded with care. Built on purpose." intro={`Total Transformation is a division of ${site.parent}, founded by Dr. Sohan S. Chouhan and Mrs. Pritee Mehta.`} />
      <FoundersSection showLink={false} />
      <FinalCtaSection />
    </>);

}