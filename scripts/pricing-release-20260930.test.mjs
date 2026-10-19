import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { answerSequoiaQuestion } from '../src/lib/sequoia-knowledge-engine.mjs';

const read = (path) => readFileSync(path, 'utf8');
test('approved prices and terms agree in catalog and pricing page', () => {
  const catalog = JSON.parse(read('src/data/sequoia-knowledge.catalog.json'));
  const pricing = read('src/app/ai-seo-pricing/page.tsx') + read('src/lib/marketing-offer.ts') + read('src/components/MarketingLeadershipOffer.tsx');
  for (const [id, amount, term] of [
    ['search_foundation', 4500, '90-day'],
    ['fractional_marketing_lead', 7000, 'six-month'],
  ]) {
    const entry = catalog.publishedStartingPrices.find(p => p.id === id);
    assert.equal(entry.amountUsd, amount);
    assert.ok(entry.conditions.includes(term));
    assert.ok(pricing.includes('$' + amount.toLocaleString('en-US')));
  }
  assert.equal(catalog.publishedStartingPrices.find(p => p.id === 'website_foundation').amountUsd, 2500);
  assert.ok(!catalog.publishedStartingPrices.some(p => p.id === 'complex_leadership'));
  assert.match(pricing, /execution is optional|Optional marketing execution|optional and separately priced/i);
  assert.match(pricing, /approve hiring and spending commitments/);
  const answer = answerSequoiaQuestion(catalog, 'What does working with Sequoia cost?');
  assert.equal(answer.refused, false);
  const text = JSON.stringify(answer);
  for (const fee of ['$4,500', '$7,000']) assert.ok(text.includes(fee));
});

test('related search pages no longer publish the old monthly search fee', () => {
  for (const page of ['how-much-does-seo-cost-for-contractors','how-it-works','plumbing-seo','hvac-seo','roofing-seo','best-plumbing-marketing-agencies','best-roofing-marketing-agencies','best-hvac-marketing-agencies','fractional-cmo']) {
    const text = read(`src/app/${page}/page.tsx`);
    assert.ok((text + read('src/components/MarketingLeadershipOffer.tsx')).includes('$4,500'), page);
    assert.ok(!text.includes('$2,500'), page);
  }
});
