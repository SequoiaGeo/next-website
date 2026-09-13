import { vcard } from '@/lib/contact-card.mjs';

export function GET() {
  return new Response(vcard, { headers: {
    'Content-Type': 'text/vcard; charset=utf-8',
    'Content-Disposition': 'attachment; filename="Aaron-Husak-Sequoia-GEO.vcf"',
    'Cache-Control': 'public, max-age=3600',
    'X-Content-Type-Options': 'nosniff',
  } });
}
