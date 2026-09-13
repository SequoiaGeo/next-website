import { test } from 'node:test';
import assert from 'node:assert/strict';
import { normalizeAssessmentWebsite } from '../src/lib/assessment-website.mjs';
import { classifyLeadAttribution } from './lead-reconciliation-policy.mjs';

test('new homepage form source is recognized without claiming qualification', () => {
  const result = classifyLeadAttribution({ websiteSource: 'homepage_website_assessment' });
  assert.ok(JSON.stringify(result).includes('website-source-homepage-website-assessment'));
  assert.ok(!JSON.stringify(result).includes('qualified-website-lead'));
});

test('accepts domains and public HTTP pages, strips query and fragment', () => {
  assert.equal(normalizeAssessmentWebsite(' Example.com '), 'https://example.com');
  assert.equal(normalizeAssessmentWebsite('http://www.example.com/services?token=private#foo'), 'http://www.example.com/services');
});
test('rejects invalid or unsafe website input', () => {
  for (const value of [null, {}, '', 'example', 'not a domain.com', 'https://', 'javascript:alert(1)', 'ftp://example.com', 'https://user:pass@example.com', 'https://127.0.0.1', 'https://localhost', 'https://host.internal', 'https://example.com:8080', 'https://-bad.com', 'https://bad..com']) {
    assert.equal(normalizeAssessmentWebsite(value), '', String(value));
  }
});
