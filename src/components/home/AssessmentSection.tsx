import React from 'react';
import { WordReveal } from '../ui/WordReveal';
import { AssessmentFlow } from '../assessment/AssessmentFlow';

export function AssessmentSection() {
  return (
    <section id="assessment" className="bg-cream py-24 md:py-36" aria-labelledby="assessment-heading">
      <div className="mx-auto grid max-w-page gap-14 px-5 md:px-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Free Transformation Assessment</p>
          <span id="assessment-heading" className="sr-only">Where Are You in Your Life Journey?</span>
          <WordReveal text="Where Are You in Your Life Journey?" className="font-serif text-5xl leading-[1.04] text-forest md:text-6xl" />
          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-charcoal/70">
            A short self-reflection across clarity, balance, mindfulness and consistency — to help you notice where you are, and where a gentle shift might matter most.
          </p>
        </div>
        <div className="lg:col-span-7">
          <AssessmentFlow tone="dark" />
        </div>
      </div>
    </section>);

}