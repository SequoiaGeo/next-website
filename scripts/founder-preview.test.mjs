import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const read = (file) => readFileSync(new URL(`../${file}`, import.meta.url), 'utf8');
test('hero retains the assessment component and makes recommendation limits visible', () => {
  const hero = read('src/components/Hero.tsx');
  assert.match(hero, /Get Recommended/);
  assert.match(hero, /<WebsiteAssessmentForm \/>/);
  assert.match(hero, /AI recommendations are earned, not guaranteed/);
  assert.match(hero, /Built by a home-service owner\./);
  assert.doesNotMatch(hero, /For home-service owners/);
  assert.match(read('src/components/Navigation.tsx'), /Marketing Your Home Service Business/);
  assert.doesNotMatch(hero, /\$2,500|YouTubeFacade/);
});
test('operator story appears below client proof and above the assessment explanation', () => {
  const home = read('src/app/page.tsx');
  assert.ok(home.indexOf('id="proof"') < home.indexOf('<OperatorStory />'));
  assert.ok(home.indexOf('<OperatorStory />') < home.indexOf('id="snapshot"'));
  const story = read('src/components/OperatorStory.tsx');
  assert.match(story, /before founding Sequoia GEO/);
  assert.match(story, /An AI mention is never presented as a booked job/);
});
test('photos exist and the office caption does not invent a historical photo date', () => {
  for (const name of ['aaron-crawlspace.jpg', 'aaron-first-office.jpg']) {
    assert.ok(existsSync(new URL(`../public/images/${name}`, import.meta.url)));
  }
  assert.match(read('src/app/about-sequoia-geo/page.tsx'), /Outside the building where Aaron opened his first office/);
});
test('plumbing opening answers homeowner intent before cross-trade navigation', () => {
  const page = read('src/app/geo-for-plumbers/page.tsx');
  assert.match(page, /fix a leaking pipe, clear a blocked drain/);
  assert.ok(page.indexOf('AI-Assisted Search Creates') < page.indexOf('<TradeAiSearchNav'));
  assert.match(page, /No provider can guarantee an AI recommendation/);
});
