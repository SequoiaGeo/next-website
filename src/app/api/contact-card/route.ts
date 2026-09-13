import { Resend } from 'resend';
import { handleContactCard } from '@/lib/contact-card.mjs';

export const runtime = 'nodejs';
export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  return handleContactCard(req, {
    apiKey,
    previewHost: process.env.VERCEL_URL,
    development: process.env.NODE_ENV === 'development',
    send: (payload, options) => new Resend(apiKey).emails.send(payload, options),
  });
}
