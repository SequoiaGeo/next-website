import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const page = readFileSync(new URL('../src/app/page.tsx', import.meta.url), 'utf8');
test('homepage features the existing KABAM testimonial beside its website story', () => {
  assert.match(page, /videoId="IpbCaelX2jo"/);
  assert.match(page, /href="\/case-studies\/kabam-plumbing"/);
  assert.match(page, /md:grid-cols-\[1\.3fr_0\.7fr\]/);
  assert.match(page, /aspect-\[9\/16\]/);
  assert.doesNotMatch(page, /Mobile performance improved from 56 to 87/);
});
test('homepage keeps the founder hero and does not inflate KABAM results', () => {
  assert.match(page, /<Hero \/>/);
  const card = page.split('aria-labelledby="kabam-proof-heading"')[1].split('</article>')[0];
  assert.match(card, /Client testimonial/);
  assert.doesNotMatch(card, /116|166|154|18\.8|revenue|guaranteed/i);
});
