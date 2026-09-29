import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircleIcon, EyeIcon, EyeOffIcon, Loader2Icon } from 'lucide-react';
import { media } from '../data/media';
import { site } from '../data/site';
import { isEmail, submitForm } from '../utils/contact';
import { Seo } from '../components/ui/Seo';
import { Logo } from '../components/ui/Logo';
import { Button } from '../components/ui/Button';

type Status = 'idle' | 'loading' | 'not-configured' | 'error';

export function MemberLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState<{email?: string;password?: string;}>({});
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    if (!isEmail(email)) next.email = 'Please enter a valid email address.';
    if (password.length < 6) next.password = 'Password must be at least 6 characters.';
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus('loading');
    const res = await submitForm(site.memberAuthEndpoint, { email, password });
    setStatus(res.ok ? 'idle' : res.reason === 'not-configured' ? 'not-configured' : 'error');
  };

  return (
    <>
      <Seo title="Member Login" description="Sign in to the Total Transformation member portal." />
      <section className="grid min-h-screen bg-ivory lg:grid-cols-2">
        <div className="relative hidden lg:block">
          <img src={media.images.aware} alt="A still lake at dawn" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-emerald/50" aria-hidden />
          <p className="absolute bottom-16 left-12 right-12 font-serif text-5xl leading-tight text-ivory">Welcome back to your practice.</p>
        </div>
        <div className="flex items-center px-5 pb-16 pt-32 md:px-10">
          <div className="mx-auto w-full max-w-md">
            <Logo className="h-16" />
            <h1 className="mt-10 font-serif text-5xl text-charcoal">Member login</h1>
            <p className="mt-3 text-[15px] text-charcoal/65">Access your programme resources and session notes.</p>
            <form onSubmit={onSubmit} noValidate className="mt-10 space-y-7">
              <div>
                <label htmlFor="ml-email" className="text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/60">Email</label>
                <input id="ml-email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} aria-invalid={!!errors.email} className="mt-2 w-full border-0 border-b border-charcoal/20 bg-transparent px-0 py-3 focus:border-forest focus:outline-none focus:ring-0" />
                {errors.email && <p className="mt-2 text-xs text-red-700">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="ml-password" className="text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/60">Password</label>
                <div className="relative">
                  <input id="ml-password" type={show ? 'text' : 'password'} autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} aria-invalid={!!errors.password} className="mt-2 w-full border-0 border-b border-charcoal/20 bg-transparent px-0 py-3 pr-10 focus:border-forest focus:outline-none focus:ring-0" />
                  <button type="button" onClick={() => setShow((s) => !s)} aria-label={show ? 'Hide password' : 'Show password'} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-charcoal/50">
                    {show ? <EyeOffIcon className="h-4 w-4" aria-hidden /> : <EyeIcon className="h-4 w-4" aria-hidden />}
                  </button>
                </div>
                {errors.password && <p className="mt-2 text-xs text-red-700">{errors.password}</p>}
              </div>
              {(status === 'not-configured' || status === 'error') &&
              <div role="alert" className="flex gap-3 bg-cream p-4 text-sm text-charcoal">
                  <AlertCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
                  <p>{status === 'not-configured' ? 'The member portal is not connected yet. Please contact your coach for access.' : 'We couldn’t sign you in. Please check your details and try again.'}</p>
                </div>
              }
              <Button type="submit" variant="dark" disabled={status === 'loading'} arrow={status !== 'loading'} className="w-full">
                {status === 'loading' ? <span className="inline-flex items-center gap-2"><Loader2Icon className="h-4 w-4 animate-spin" aria-hidden />Signing in</span> : 'Sign in'}
              </Button>
            </form>
            <p className="mt-8 text-sm text-charcoal/60">Not a member yet? <Link to="/contact" className="font-semibold text-forest underline-offset-4 hover:underline">Book a discovery session</Link></p>
          </div>
        </div>
      </section>
    </>);

}