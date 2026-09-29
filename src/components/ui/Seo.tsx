import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { site } from '../../data/site';
import { media } from '../../data/media';

type SeoProps = {
  title?: string;
  description: string;
  image?: string;
  jsonLd?: Record<string, unknown>;
};

export function Seo({ title, description, image = media.images.hero, jsonLd }: SeoProps) {
  const { pathname } = useLocation();
  const origin = site.url || (typeof window !== 'undefined' ? window.location.origin : '');
  const fullTitle = title ? `${title} | Total Transformation` : 'Total Transformation — Happiness, Mindfulness & Life Coaching';
  const url = `${origin}${pathname}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>);

}