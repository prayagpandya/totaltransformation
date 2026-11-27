import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { ExternalLinkIcon, MailIcon, MapPinIcon, MessageCircleIcon, PhoneIcon } from 'lucide-react';
import { site } from '../data/site';
import { programs } from '../data/programs';
import { whatsappLink } from '../utils/contact';
import { Seo } from '../components/ui/Seo';
import { WordReveal } from '../components/ui/WordReveal';
import { BookingForm } from '../components/forms/BookingForm';

export function Contact() {
  const [params] = useSearchParams();
  const requested = params.get('program') ?? '';
  const defaultProgram = programs.some((p) => p.slug === requested) ? requested : '';
  const { phone, email, address } = site.contact;

  return (
    <>
      <Seo title="Contact & Discovery Session" description="Book a discovery session or get in touch with Total Transformation." />
      <section className="bg-forest pb-16 pt-36 text-ivory md:pt-44">
        <div className="mx-auto max-w-page px-5 md:px-10">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Contact & Discovery Session</p>
          <WordReveal as="h1" immediate text="Begin with a conversation." className="max-w-4xl font-serif text-5xl leading-[1.02] md:text-7xl lg:text-8xl" />
        </div>
      </section>
      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto grid max-w-page gap-16 px-5 md:px-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl text-charcoal md:text-4xl">Request a discovery session</h2>
            <p className="mt-3 max-w-lg text-[15px] text-charcoal/65">Tell us a little about yourself and we'll reach out to arrange a time that suits you.</p>
            <div className="mt-12"><BookingForm defaultProgram={defaultProgram} /></div>
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="bg-cream p-8 md:p-10">
              <h2 className="font-serif text-3xl text-charcoal">Reach us directly</h2>
              <ul className="mt-8 space-y-5 text-[15px] text-charcoal/80">
                {phone && <li className="flex gap-3"><PhoneIcon className="mt-0.5 h-5 w-5 text-gold" aria-hidden /><a href={`tel:${phone}`}>{phone}</a></li>}
                {email && <li className="flex gap-3"><MailIcon className="mt-0.5 h-5 w-5 text-gold" aria-hidden /><a href={`mailto:${email}`}>{email}</a></li>}
                {site.url && <li className="flex gap-3"><ExternalLinkIcon className="mt-0.5 h-5 w-5 text-gold" aria-hidden /><a href={site.url} target="_blank" rel="noopener noreferrer">{site.url.replace(/^https?:\/\//, '')}</a></li>}
                {address && <li className="flex gap-3"><MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden /><span className="whitespace-pre-line">{address}</span></li>}
                {!phone && !email && !address && <li className="text-sm text-charcoal/55">Phone, email and address will be published here soon.</li>}
                <li className="flex gap-3">
                  <MessageCircleIcon className="mt-0.5 h-5 w-5 text-gold" aria-hidden />
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="font-semibold text-forest underline-offset-4 hover:underline">Message us on WhatsApp</a>
                </li>
              </ul>
              <p className="mt-8 border-t border-charcoal/10 pt-6 text-xs leading-relaxed text-charcoal/55">
                For your privacy, please avoid sharing medical or clinical information over WhatsApp. {site.name} is a division of {site.parent}.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>);

}