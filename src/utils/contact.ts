import { site } from '../data/site';

export function whatsappLink(message = 'Hello, I would like to know more about Total Transformation coaching.') {
  const text = encodeURIComponent(message);
  const number = site.contact.whatsappNumber.replace(/\D/g, '');
  return number ? `https://wa.me/${number}?text=${text}` : `https://wa.me/?text=${text}`;
}

export type SubmitResult = {ok: true;} | {ok: false;reason: 'not-configured' | 'network';};

export async function submitForm(endpoint: string, payload: Record<string, string>): Promise<SubmitResult> {
  if (!endpoint) {
    await new Promise((r) => setTimeout(r, 600));
    return { ok: false, reason: 'not-configured' };
  }
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload)
    });
    return res.ok ? { ok: true } : { ok: false, reason: 'network' };
  } catch {
    return { ok: false, reason: 'network' };
  }
}

export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
export const isPhone = (v: string) => /^\+?[\d\s-]{8,16}$/.test(v.trim());