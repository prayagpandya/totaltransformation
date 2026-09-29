import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
import { articles } from '../data/resources';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/ui/PageHero';
import { Button } from '../components/ui/Button';
import { NotFound } from './NotFound';

export function Article() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);
  if (!article) return <NotFound />;
  const next = articles[(articles.indexOf(article) + 1) % articles.length];

  return (
    <>
      <Seo
        title={article.title}
        description={article.excerpt}
        image={article.image}
        jsonLd={{ '@context': 'https://schema.org', '@type': 'Article', headline: article.title, image: article.image, description: article.excerpt }} />
      
      <PageHero variant="full" eyebrow={`${article.category} · ${article.readTime}`} title={article.title} image={article.image} imageAlt={article.imageAlt} />
      <article className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-5">
          <Link to="/resources" className="inline-flex items-center gap-2 text-sm text-charcoal/60 hover:text-forest">
            <ArrowLeftIcon className="h-4 w-4" aria-hidden /> All resources
          </Link>
          <p className="mt-10 font-serif text-3xl leading-snug text-charcoal">{article.excerpt}</p>
          {article.body.map((block, i) =>
          <div key={i} className="mt-10">
              {block.heading && <h2 className="mb-4 font-serif text-3xl text-forest">{block.heading}</h2>}
              {block.paragraphs.map((p, j) =>
            <p key={j} className="mt-4 text-[17px] leading-[1.8] text-charcoal/80">{p}</p>
            )}
            </div>
          )}
          <div className="mt-16 border-t border-gold/60 pt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/50">Read next</p>
            <Link to={`/resources/${next.slug}`} className="mt-3 block font-serif text-3xl text-charcoal hover:text-forest">{next.title}</Link>
            <div className="mt-10"><Button to="/assessment" variant="dark">Take the free assessment</Button></div>
          </div>
        </div>
      </article>
    </>);

}