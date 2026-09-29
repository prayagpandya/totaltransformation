import React from 'react';
import { Seo } from '../components/ui/Seo';
import { WordReveal } from '../components/ui/WordReveal';
import { AssessmentFlow } from '../components/assessment/AssessmentFlow';

export function Assessment() {
  return (
    <>
      <Seo title="Free Transformation Assessment" description="A short self-reflection across clarity, balance, mindfulness and consistency. Not a medical or psychological test." />
      <section className="min-h-screen bg-forest pb-24 pt-36 text-ivory md:pt-44">
        <div className="mx-auto grid max-w-page gap-14 px-5 md:px-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Free Transformation Assessment</p>
            <WordReveal as="h1" immediate text="Where Are You in Your Life Journey?" className="font-serif text-5xl leading-[1.02] md:text-7xl" />
            <p className="mt-8 max-w-md leading-relaxed text-ivory/70">
              Eight gentle reflections across clarity, balance, mindfulness and consistency. Answer honestly — there are no right or wrong responses.
            </p>
            <p className="mt-6 max-w-md text-xs leading-relaxed text-ivory/50">
              This is a self-reflection tool for personal insight. It is not a medical or psychological diagnostic test, and your answers are not stored.
            </p>
          </div>
          <div className="lg:col-span-7">
            <AssessmentFlow tone="light" />
          </div>
        </div>
      </section>
    </>);

}