import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const read = path => readFileSync(new URL('../src/' + path, import.meta.url), 'utf8');
test('calculators retain ranges with labels and a single layout-owned main', () => {
  for (const route of ['csr-calculator', 'marketing-leak-calculator']) {
    const s = read(`app/${route}/page.tsx`);
    assert.match(s, /htmlFor=\{inputId\}/);
    assert.match(s, /id=\{inputId\}/);
    assert.match(s, /aria-valuetext=\{format\(value\)\}/);
    assert.doesNotMatch(s, /<main\b/);
  }
  assert.match(read('app/marketing-leak-calculator/page.tsx'), /htmlFor="marketing-booking-rate"/);
});
test('mobile help has a direct navigation alternative and no floating overlap', () => {
  assert.match(read('components/Navigation.tsx'), /href="\/ask-sequoia" aria-label="Ask Sequoia"/);
  assert.match(read('components/SequoiaKnowledgeInterface.tsx'), /hidden lg:block fixed/);
});
test('hero and video preserve the headline, form and opt-in playback', () => {
  const hero = read('components/Hero.tsx');
  assert.match(hero, /Get Recommended/);
  assert.match(hero, /<WebsiteAssessmentForm/);
  assert.match(read('components/FounderIntroVideo.tsx'), /autoplay=0/);
  assert.match(read('components/FounderIntroVideo.tsx'), /items-end justify-center/);
});
test('overflow and dark overline repairs remain scoped', () => {
  const css = read('app/globals.css');
  assert.match(css, /\.prose\s*\{\s*overflow-wrap: anywhere;/);
  assert.match(css, /\.section-overline\.on-dark/);
  for (const route of ['best-roofing-marketing-agencies', 'best-plumbing-marketing-agencies']) {
    assert.match(read(`app/${route}/page.tsx`), /flex flex-col items-start justify-between/);
  }
});
