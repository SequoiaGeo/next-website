import { createHmac } from 'node:crypto';

export const card = Object.freeze({ name: 'Aaron Husak', company: 'Sequoia GEO', email: 'Aaron@sequoiageo.com', phone: '+15595213122', website: 'https://www.sequoiageo.com' });
export const vcard = ['BEGIN:VCARD','VERSION:3.0','N:Husak;Aaron;;;','FN:Aaron Husak','ORG:Sequoia GEO','TITLE:Founder','TEL;TYPE=WORK,VOICE:+15595213122','EMAIL;TYPE=INTERNET,WORK:Aaron@sequoiageo.com','URL:https://www.sequoiageo.com','END:VCARD',''].join('\r\n');

// Supplemental, bounded instance-local limits. Resend's shared idempotency
// prevents repeated delivery to the same recipient/day across instances.
// This is not a distributed global quota or a replacement for platform WAF.
const buckets = new Map();
function take(key, limit, windowMs, now) {
  for (const [k, b] of buckets) if (b.until <= now) buckets.delete(k);
  const b = buckets.get(key);
  if (b && b.count >= limit) return false;
  if (!b && buckets.size >= 10000) return false;
  buckets.set(key, { count: (b?.count || 0) + 1, until: b?.until || now + windowMs });
  return true;
}
export function resetCardLimits() { buckets.clear(); }

const reply = (status, body) => Response.json(body, { status, headers: { 'Cache-Control': 'no-store', ...(status === 429 ? { 'Retry-After': '3600' } : {}) } });
export async function handleContactCard(req, { apiKey, send, now = Date.now(), previewHost = '', development = false }) {
  const origin = req.headers.get('origin');
  const allowed = new Set(['https://www.sequoiageo.com', 'https://sequoiageo.com']);
  if (previewHost && /^[a-z0-9.-]+\.vercel\.app$/i.test(previewHost)) allowed.add(`https://${previewHost}`);
  if (development) { allowed.add('http://localhost:3000'); allowed.add('http://localhost:3105'); }
  if (!origin || !allowed.has(origin)) return reply(403, { error: 'Please use the contact card on our website.' });
  if (!req.headers.get('content-type')?.toLowerCase().startsWith('application/json')) return reply(415, { error: 'Invalid request format.' });
  if (Number(req.headers.get('content-length')) > 2048) return reply(413, { error: 'Request too large.' });
  let body;
  try {
    const reader = req.body?.getReader();
    if (!reader) return reply(400, { error: 'Please enter your email address.' });
    const chunks = []; let size = 0;
    while (true) {
      const { value, done } = await reader.read(); if (done) break;
      size += value.byteLength;
      if (size > 2048) { await reader.cancel(); return reply(413, { error: 'Request too large.' }); }
      chunks.push(value);
    }
    body = JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch { return reply(400, { error: 'Please enter a valid email address.' }); }
  if (!body || typeof body !== 'object' || Array.isArray(body)) return reply(400, { error: 'Please enter a valid email address.' });
  if (body.website) return reply(200, { success: true });
  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  if (email.length > 254 || !/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+$/i.test(email)) return reply(400, { error: 'Please enter a valid email address.' });
  if (!apiKey) return reply(503, { error: 'Email is temporarily unavailable. Please use Save contact below.' });
  const digest = value => createHmac('sha256', apiKey).update(value).digest('hex');
  // On Vercel this header is platform-controlled. Do not trust user-supplied XFF.
  const ip = req.headers.get('x-vercel-forwarded-for')?.split(',')[0].trim() || 'unknown';
  if (!take('global', 60, 3600000, now) || !take(`ip:${digest(ip)}`, 5, 3600000, now)) return reply(429, { error: 'Too many requests. Please use Save contact or try again later.' });
  const recipient = digest(email);
  if (!take(`recipient:${recipient}`, 1, 86400000, now)) return reply(429, { error: 'Contact details were requested recently. Check your inbox or use Save contact.' });
  try {
    const result = await send({
      from: 'Sequoia GEO <aaron@sequoiageo.com>', to: email,
      replyTo: card.email, subject: 'Aaron Husak | Sequoia GEO contact details',
      text: `Here are the contact details you requested.\n\nAaron Husak\nFounder, Sequoia GEO\nPhone: (559) 521-3122\nEmail: Aaron@sequoiageo.com\nWebsite: https://www.sequoiageo.com\nSchedule a conversation: https://www.sequoiageo.com/contact#book\n\nOpen the attached contact file to save these details.\n\nThis is a one-time email requested through our digital business card. You have not been subscribed to marketing emails. If you did not request it, you can disregard it.`,
      attachments: [{ filename: 'Aaron-Husak-Sequoia-GEO.vcf', content: Buffer.from(vcard).toString('base64'), contentType: 'text/vcard' }],
    }, { idempotencyKey: `contact-card-v1/${Math.floor(now / 86400000)}/${recipient}` });
    if (result?.error || !result?.data?.id) throw new Error('mail-not-accepted');
    return reply(200, { success: true });
  } catch {
    buckets.delete(`recipient:${recipient}`);
    return reply(502, { error: 'We could not send the email. Please try again or use Save contact.' });
  }
}
