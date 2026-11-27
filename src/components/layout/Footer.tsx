import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';
import { site } from '../../data/site';
import { coachingPaths } from '../../data/coaching';
import { programs } from '../../data/programs';
import { legalLinks } from '../../data/navigation';
import { whatsappLink } from '../../utils/contact';
import { Logo } from '../ui/Logo';

const explore = [
{ label: 'About', to: '/about' },
{ label: 'The Method', to: '/method' },
{ label: 'Your Journey', to: '/journey' },
{ label: 'Founders', to: '/founders' },
{ label: 'Resources', to: '/resources' },
{ label: 'FAQs', to: '/faqs' },
{ label: 'Free Assessment', to: '/assessment' }];


export function Footer() {
  const socials = [
  { href: site.social.instagram, label: 'Instagram', Icon: InstagramIcon },
  { href: site.social.facebook, label: 'Facebook', Icon: FacebookIcon },
  { href: site.social.linkedin, label: 'LinkedIn', Icon: LinkedinIcon },
  { href: site.social.youtube, label: 'YouTube', Icon: YoutubeIcon }].
  filter((s) => s.href);
  const { phone, email, address, hours } = site.contact;
  const hasContact = phone || email || address;

  return (
    <footer className="bg-emerald text-ivory">
      <div className="mx-auto max-w-page px-5 pb-10 pt-20 md:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="plate" className="h-20" />
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-ivory/65">{site.tagline}</p>
            {socials.length > 0 &&
            <ul className="mt-8 flex gap-3">
                {socials.map(({ href, label, Icon }) =>
              <li key={label}>
                    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 transition-colors duration-200 hover:border-gold hover:text-gold">
                      <Icon className="h-4 w-4" aria-hidden />
                    </a>
                  </li>
              )}
              </ul>
            }
          </div>

          <FooterColumn title="Explore" links={explore} />
          <FooterColumn title="Coaching" links={coachingPaths.map((c) => ({ label: c.name, to: `/coaching/${c.slug}` }))} />
          <FooterColumn title="Programs" links={programs.map((p) => ({ label: p.name, to: `/programs/${p.slug}` }))} />

          <div className="lg:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Contact</h2>
            <ul className="mt-6 space-y-3 text-sm text-ivory/75">
              {phone && <li><a href={`tel:${phone}`} className="font-medium text-ivory hover:text-gold transition-colors">{phone}</a></li>}
              {email && <li><a href={`mailto:${email}`} className="hover:text-ivory transition-colors">{email}</a></li>}
              {site.url && <li><a href={site.url} target="_blank" rel="noopener noreferrer" className="hover:text-ivory transition-colors">{site.url.replace(/^https?:\/\//, '')}</a></li>}
              {address && <li className="whitespace-pre-line leading-relaxed">{address}</li>}
              {hours && <li className="text-xs text-ivory/60">{hours}</li>}
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium text-gold hover:text-ivory transition-colors">
                  <img src="/whatsapp-icon.svg" alt="WhatsApp" className="h-4 w-4" />
                  WhatsApp us
                </a>
              </li>
              <li><Link to="/contact" className="hover:text-ivory transition-colors">Book a discovery session</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-ivory/10 pt-8 text-xs text-ivory/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Total Transformation · A division of {site.parent}</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((l) =>
            <li key={l.to}><Link to={l.to} className="hover:text-ivory">{l.label}</Link></li>
            )}
            <li><Link to="/member-login" className="hover:text-ivory">Member Login</Link></li>
          </ul>
        </div>
      </div>
    </footer>);

}

function FooterColumn({ title, links }: {title: string;links: {label: string;to: string;}[];}) {
  return (
    <div className="lg:col-span-2">
      <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">{title}</h2>
      <ul className="mt-6 space-y-3 text-sm text-ivory/75">
        {links.map((l) =>
        <li key={l.to}><Link to={l.to} className="transition-colors duration-150 hover:text-ivory">{l.label}</Link></li>
        )}
      </ul>
    </div>);

}