import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = process.cwd();
const pagePath = join(root, "src/app/case-studies/kabam-plumbing/page.tsx");
const indexPath = join(root, "src/app/case-studies/page.tsx");
const catalogPath = join(root, "src/data/sequoia-knowledge.catalog.json");

const page = readFileSync(pagePath, "utf8");
const index = readFileSync(indexPath, "utf8");
const catalog = readFileSync(catalogPath, "utf8");

test("KABAM page separates client context from attributable implementation proof", () => {
  assert.match(page, /What this case study proves/);
  assert.match(page, /does\s+not claim that the work produced/);
  assert.match(page, /client&rsquo;s reviews/);
  assert.match(page, /A strong reputation that belongs to the plumber/);
  assert.match(page, /not a claim that Sequoia caused every new\s+review/);
  assert.match(page, /5\.0 Google rating across 166 reviews/);
  assert.match(page, /141 reviews in May and 154 on July 8/);
});

test("KABAM profile and historical search metrics remain bounded", () => {
  assert.match(page, /116 Google Business Profile call-button clicks/);
  assert.match(page, /does not establish completed calls, unique callers,/);
  assert.match(page, /qualified leads, or jobs booked/);
  assert.match(page, /Those windows overlap and both predate the August technical release/);
  assert.match(page, /not a before-and-after trend/);
  assert.doesNotMatch(page, /\b116 calls\b/i);
  assert.doesNotMatch(page, /impressions grew/i);
  assert.doesNotMatch(page, /search impressions, climbing/i);
});

test("KABAM no-rebuild decision and crawler evidence stay page-scoped", () => {
  assert.match(page, /The evidence available did not justify forcing a platform migration/);
  assert.match(page, /That is one\s+page-level observation/);
  assert.match(page, /not a claim that every route or crawler behavior was\s+verified/);
  assert.doesNotMatch(page, /verified crawler behavior/i);
  assert.doesNotMatch(page, /indexed cleanly/i);
  assert.doesNotMatch(page, /rankings kept/i);
});

test("KABAM sitemap, measurement, disclosure, and limits are explicit", () => {
  assert.match(page, /104-URL sitemap/);
  assert.match(page, /Discovered is not the same as indexed/);
  assert.match(page, /one success-only event/);
  assert.match(page, /measurement correction, not a decline/);
  assert.match(page, /KABAM Plumbing is an ongoing paying client of Sequoia GEO/);
  assert.match(page, /Known open issues include/);
  assert.match(page, /The page does not claim that every technical or measurement issue is fixed/);
});

test("dependent KABAM surfaces no longer carry the unsupported migration claims", () => {
  assert.match(index, /5\.0", label: "Across 166 reviews, Aug\. 14"/);
  assert.doesNotMatch(index, /Rankings kept through rebuild/);
  assert.doesNotMatch(index, /Search impressions, climbing/);
  assert.match(catalog, /5\.0 Google rating across 166 reviews/);
  assert.match(catalog, /104-URL sitemap/);
});
