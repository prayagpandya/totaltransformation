import React from 'react';
import { Seo } from '../components/ui/Seo';
import { Button } from '../components/ui/Button';

export function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="The page you are looking for could not be found." />
      <section className="flex min-h-screen items-center bg-forest px-5 pt-24 text-ivory md:px-10">
        <div className="mx-auto w-full max-w-page">
          <p className="font-serif text-[8rem] italic leading-none text-gold md:text-[12rem]">404</p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-tight md:text-7xl">This path leads nowhere — yet.</h1>
          <p className="mt-6 max-w-md text-ivory/70">The page you're looking for may have moved. Let's find your way back.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button to="/" variant="gold">Return home</Button>
            <Button to="/contact" variant="outlineLight" arrow={false}>Contact us</Button>
          </div>
        </div>
      </section>
    </>);

}