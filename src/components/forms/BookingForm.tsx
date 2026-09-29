import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckIcon, Loader2Icon, AlertCircleIcon } from 'lucide-react';
import { programs } from '../../data/programs';
import { site } from '../../data/site';
import { isEmail, isPhone, submitForm, whatsappLink } from '../../utils/contact';
import { Button } from '../ui/Button';

type Status = 'idle' | 'loading' | 'success' | 'not-configured' | 'error';
type Fields = {name: string;email: string;phone: string;program: string;date: string;message: string;consent: string;};
type Errors = Partial<Record<keyof Fields, string>>;

export function BookingForm({ defaultProgram = '' }: {defaultProgram?: string;}) {
  const [fields, setFields] = useState<Fields>({ name: '', email: '', phone: '', program: defaultProgram, date: '', message: '', consent: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');
  const today = new Date().toISOString().split('T')[0];

  const set = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const value = e.target instanceof HTMLInputElement && e.target.type === 'checkbox' ? e.target.checked ? 'yes' : '' : e.target.value;
    setFields((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const validate = () => {
    const next: Errors = {};
    if (fields.name.trim().length < 2) next.name = 'Please enter your name.';
    if (!isEmail(fields.email)) next.email = 'Please enter a valid email address.';
    if (!isPhone(fields.phone)) next.phone = 'Please enter a valid phone number.';
    if (!fields.program) next.program = 'Please choose what you are interested in.';
    if (fields.date && fields.date < today) next.date = 'Please choose a future date.';
    if (!fields.consent) next.consent = 'Please confirm to continue.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    const result = await submitForm(site.formEndpoint, { ...fields, type: 'discovery-session' });
    setStatus(result.ok ? 'success' : result.reason === 'not-configured' ? 'not-configured' : 'error');
  };

  if (status === 'success') {
    return (
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl bg-forest p-10 text-ivory" role="status">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-emerald"><CheckIcon className="h-6 w-6" aria-hidden /></span>
        <h3 className="mt-6 font-serif text-4xl">Thank you, {fields.name.split(' ')[0]}.</h3>
        <p className="mt-4 text-ivory/75">Your request has been received. Our team will reach out to confirm your discovery session.</p>
      </motion.div>);

  }

  const inputClass = (key: keyof Fields) =>
  `mt-2 w-full rounded-none border-0 border-b bg-transparent px-0 py-3 text-base text-charcoal placeholder:text-charcoal/35 focus:outline-none focus:ring-0 ${
  errors[key] ? 'border-red-700' : 'border-charcoal/20 focus:border-forest'}`;


  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      <div className="grid gap-8 md:grid-cols-2">
        <Field label="Full name" error={errors.name} id="bf-name">
          <input id="bf-name" autoComplete="name" value={fields.name} onChange={set('name')} className={inputClass('name')} aria-invalid={!!errors.name} placeholder="Your name" />
        </Field>
        <Field label="Email" error={errors.email} id="bf-email">
          <input id="bf-email" type="email" autoComplete="email" value={fields.email} onChange={set('email')} className={inputClass('email')} aria-invalid={!!errors.email} placeholder="you@example.com" />
        </Field>
        <Field label="Phone" error={errors.phone} id="bf-phone">
          <input id="bf-phone" type="tel" autoComplete="tel" value={fields.phone} onChange={set('phone')} className={inputClass('phone')} aria-invalid={!!errors.phone} placeholder="+91" />
        </Field>
        <Field label="Preferred date (optional)" error={errors.date} id="bf-date">
          <input id="bf-date" type="date" min={today} value={fields.date} onChange={set('date')} className={inputClass('date')} aria-invalid={!!errors.date} />
        </Field>
      </div>
      <Field label="I'm interested in" error={errors.program} id="bf-program">
        <select id="bf-program" value={fields.program} onChange={set('program')} className={inputClass('program')} aria-invalid={!!errors.program}>
          <option value="">Select a programme or pathway</option>
          <option value="discovery">A discovery session — not sure yet</option>
          {programs.map((p) =>
          <option key={p.slug} value={p.slug}>{p.name} · {p.duration}</option>
          )}
        </select>
      </Field>
      <Field label="What would you like to change? (optional)" id="bf-message">
        <textarea id="bf-message" rows={3} value={fields.message} onChange={set('message')} className={`${inputClass('message')} resize-none`} placeholder="A few words about where you are right now" />
      </Field>
      <p className="text-xs leading-relaxed text-charcoal/55">Please don't share medical or clinical details here — we'll discuss what matters in a private conversation.</p>
      <div>
        <label className="flex items-start gap-3 text-sm text-charcoal/75">
          <input type="checkbox" checked={!!fields.consent} onChange={set('consent')} className="mt-1 h-4 w-4 rounded border-charcoal/30 text-forest focus:ring-gold" aria-invalid={!!errors.consent} />
          I agree to be contacted about my enquiry and have read the privacy policy.
        </label>
        {errors.consent && <p className="mt-2 text-xs text-red-700">{errors.consent}</p>}
      </div>

      <AnimatePresence>
        {(status === 'not-configured' || status === 'error') &&
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} role="alert" className="flex gap-3 rounded-2xl bg-cream p-5 text-sm text-charcoal">
            <AlertCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
            <p>
              {status === 'not-configured' ?
            'Your request was not sent — online booking is not connected yet. ' :
            'Something went wrong while sending your request. '}
              Please{' '}
              <a href={whatsappLink(`Hello, I'd like to book a discovery session. My name is ${fields.name}.`)} target="_blank" rel="noopener noreferrer" className="font-semibold text-forest underline underline-offset-4">message us on WhatsApp</a>{' '}
              instead.
            </p>
          </motion.div>
        }
      </AnimatePresence>

      <Button type="submit" variant="dark" disabled={status === 'loading'} arrow={status !== 'loading'}>
        {status === 'loading' ?
        <span className="inline-flex items-center gap-2"><Loader2Icon className="h-4 w-4 animate-spin" aria-hidden />Sending</span> :

        'Request discovery session'
        }
      </Button>
    </form>);

}

function Field({ label, error, id, children }: {label: string;error?: string;id: string;children: React.ReactNode;}) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/60">{label}</label>
      {children}
      {error && <p className="mt-2 text-xs text-red-700">{error}</p>}
    </div>);

}