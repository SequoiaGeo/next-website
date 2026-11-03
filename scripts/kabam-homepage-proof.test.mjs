import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const read = path => readFileSync(new URL(path, import.meta.url), 'utf8');
const page = read('../src/app/page.tsx');
const studies = read('../src/components/HomepageCaseStudies.tsx');
const testimonials = read('../src/components/HomepageTestimonials.tsx');

test('homepage retains sourced KABAM feedback without the duplicate website story', () => {
  assert.match(page, /<HomepageTestimonials \/>/);
  assert.match(page, /<HomepageCaseStudies \/>/);
  assert.match(testimonials, /https:\/\/www\.youtube\.com\/watch\?v=IpbCaelX2jo/);
  assert.doesNotMatch(page, /kabam-proof-heading|amazing-air-proof-heading/);
  assert.doesNotMatch(page, /Mobile performance improved from 56 to 87/);
});

test('homepage preserves the founder hero and limits KABAM outcome claims', () => {
  assert.match(page, /<Hero \/>/);
  const card = studies.split('name: "KABAM Plumbing Services"')[1].split('];')[0];
  assert.match(card, /Client-reported experience/);
  assert.match(card, /not an independently reconciled measurement of booked jobs/);
  assert.doesNotMatch(card, /116|166|154|18\.8|revenue|guaranteed/i);
});
