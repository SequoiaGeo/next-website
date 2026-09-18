import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('homepage uses the approved introduction after the form in mobile document order', () => {
  const hero = read('src/components/Hero.tsx');
  assert.ok(hero.indexOf('<WebsiteAssessmentForm />') < hero.indexOf('<FounderIntroVideo />'));
  assert.match(hero, /lg:grid-cols-/);
  assert.match(hero, /AI recommendations are earned, not guaranteed/);
});

test('introduction loads a local poster and defers the privacy-enhanced player until requested', () => {
  const video = read('src/components/FounderIntroVideo.tsx');
  assert.match(video, /const videoId = "uBxniRk_KFg"/);
  assert.doesNotMatch(video, /iSvjrBFPTfk/);
  assert.match(video, /useState\(false\)/);
  assert.match(video, /opened \? \(/);
  assert.match(video, /onClick=\{\(\) => setOpened\(true\)\}/);
  assert.match(video, /youtube-nocookie\.com\/embed/);
  assert.match(video, /autoplay=0/);
  assert.match(video, /aria-label="Open Aaron's introduction video/);
  assert.match(video, /player\.current\?\.focus\(\)/);
  assert.match(video, /Watch on YouTube/);
  assert.ok(existsSync(new URL('../public/images/aaron-intro-video.jpg', import.meta.url)));
});
