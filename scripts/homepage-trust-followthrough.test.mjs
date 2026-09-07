import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
const read = p => readFileSync(p, 'utf8');

test('fit guidance and shared branding match the search offer', () => {
  const fit = read('src/components/WhoIsItFor.tsx');
  assert.doesNotMatch(fit, /\$2M|\$15M|\$300K|financials|P&L/);
  assert.match(fit, /Company size alone does not decide it/);
  assert.match(fit, /href="\/ai-search-assessment"/);
  assert.doesNotMatch(read('src/components/Footer.tsx'), /companies doing \$2M/);
});

test('sample separates observed evidence from proposed corrections', () => {
  const sample = read('src/components/SnapshotExample.tsx');
  for (const label of ['Finding', 'Evidence', 'Recommended correction', 'August 14, 2026', 'not a screenshot or proof the correction was completed']) assert.ok(sample.includes(label));
  assert.match(sample, /\/case-studies\/ai-search-readiness/);
  for (const path of ['src/app/page.tsx', 'src/app/ai-search-assessment/page.tsx']) assert.match(read(path), /<SnapshotExample\s*\/>/);
});

test('delivery expectations are shared before and after snapshot submission', () => {
  for (const path of ['src/app/page.tsx', 'src/app/ai-search-assessment/page.tsx', 'src/components/InlineLeadForm.tsx']) assert.match(read(path), /<SnapshotNextSteps\s*\/>/);
  const next = read('src/components/SnapshotNextSteps.tsx');
  assert.match(next, /expected delivery date/);
  assert.match(next, /shared by email/);
  assert.doesNotMatch(next, /within \d|one business day|instant results/);
  const form = read('src/components/InlineLeadForm.tsx');
  assert.match(form, /source === "ai_search_assessment_page"/);
  assert.match(form, /trackCapturedLead\(result/);
});

test('buyer navigation stays accessible and retains direct pricing', () => {
  const nav = read('src/components/Navigation.tsx');
  for (const label of ['AI Search', 'Client Work', 'How We Measure', 'Services &amp; Pricing', 'Contact']) assert.ok(nav.includes(label));
  assert.match(nav, /hidden=\{!mobileOpen\}/);
  assert.match(nav, /aria-expanded=\{mobileServicesOpen\}/);
  assert.match(nav, /max-h-\[70vh\]/);
});

test('measurement retains separate stages and adds a release label', () => {
  const analytics = read('src/lib/analytics.ts');
  assert.match(analytics, /EXPERIENCE_VERSION = "homepage-trust-20260907"/);
  assert.match(analytics, /dispatchCapturedLead\(response/);
  const form = read('src/components/InlineLeadForm.tsx');
  assert.match(form, /trackEvent\("form_view"/);
  assert.match(form, /trackEvent\("form_start"/);
  assert.match(read('src/components/SitewideIntentTracker.tsx'), /link.pathname === "\/ai-search-assessment"/);
});
