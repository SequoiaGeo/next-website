'use client';

import { useState, type FormEvent } from 'react';

export default function ContactCardForm() {
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const data = new FormData(event.currentTarget);
    setBusy(true); setError('');
    try {
      const response = await fetch('/api/contact-card', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: data.get('email'), website: data.get('website') }) });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.error || 'Email could not be sent. Please try again.');
      setSent(true);
    } catch (err) { setError(err instanceof Error ? err.message : 'Email could not be sent. Please try again.'); }
    finally { setBusy(false); }
  }
  return <div className="mt-8 border-t border-gray-200 pt-8">
    <h2 className="text-2xl font-bold text-dark-green">Email me these details</h2>
    <p className="mt-2 text-gray-600">Enter your own email and we’ll send Aaron’s contact details, including a contact file you can save to your phone.</p>
    {sent ? <div role="status" className="mt-5 rounded-xl bg-green-50 p-5 text-green-900"><p className="font-semibold">Your contact-details email is on its way.</p><p className="mt-2">Check your inbox and spam folder. You can also save the contact below.</p><button type="button" onClick={() => setSent(false)} className="mt-3 underline">Use another email</button></div> :
      <form onSubmit={submit} className="mt-5" aria-busy={busy}>
        <label htmlFor="card-email" className="block font-semibold text-dark-green">Your email address</label>
        <input id="card-email" name="email" type="email" required maxLength={254} autoComplete="email" inputMode="email" data-clarity-mask="true" className="mt-2 w-full rounded-xl border border-gray-400 p-3 text-base focus:outline-green-800" aria-describedby="card-privacy card-error" />
        <div className="hidden" aria-hidden="true"><label htmlFor="card-website">Leave blank</label><input id="card-website" name="website" tabIndex={-1} autoComplete="off" /></div>
        <button disabled={busy} type="submit" className="mt-4 w-full rounded-xl bg-dark-green px-5 py-4 text-base font-semibold text-white disabled:opacity-60">{busy ? 'Sending…' : 'Send Aaron’s contact details'}</button>
        <p id="card-error" role="alert" className="mt-3 text-red-800">{error}</p>
      </form>}
    <p id="card-privacy" className="mt-3 text-sm text-gray-600">One requested email. No newsletter signup or marketing subscription. <a href="/privacy-policy#contact-card" className="underline">Privacy details</a>.</p>
  </div>;
}
