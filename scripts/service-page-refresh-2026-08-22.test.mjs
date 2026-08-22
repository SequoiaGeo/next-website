import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), "utf8");
const plumbing = read("src/app/plumbing-seo/page.tsx");
const roofing = read("src/app/roofing-seo/page.tsx");

function heroWordCount(page) {
  const match = page.match(
    /<p className="mt-6[^"]*leading-relaxed text-gray-600[^"]*">\s*([\s\S]*?)\s*<\/p>/,
  );
  assert.ok(match, "hero direct answer was not found");
  const text = match[1]
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text.match(/[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*/g)?.length ?? 0;
}

test("plumbing refresh contains the registered search and conversion elements", () => {
  for (const phrase of [
    "Plumbing SEO Services Managed by a Former Plumbing Operator",
    "Plumbing SEO Services Built to Generate",
    "Calls and Jobs Booked",
    "How Sequoia GEO Runs Plumbing SEO",
    "Verify the Baseline",
    "Separate Real Demand",
    "Fix the Foundations",
    "Build Service Coverage",
    "Report and Prioritize",
    'source="plumbing_seo_page"',
  ]) assert.match(plumbing, new RegExp(phrase));

  const words = heroWordCount(plumbing);
  assert.ok(words >= 40 && words <= 80, `plumbing hero contains ${words} words`);
});

test("roofing refresh contains the registered search and conversion elements", () => {
  for (const phrase of [
    "Roofing SEO Services Managed by a Home Services Operator",
    "Roofing SEO Services Built to Generate",
    "Calls and Jobs Booked",
    "How Sequoia GEO Runs Roofing SEO",
    "Verify the Baseline",
    "Fix the Foundations",
    "Build Service Coverage",
    "Strengthen Authority",
    "Report and Prioritize",
    'source="roofing_seo_page"',
  ]) assert.match(roofing, new RegExp(phrase));

  const words = heroWordCount(roofing);
  assert.ok(words >= 40 && words <= 80, `roofing hero contains ${words} words`);
});

test("the combined refresh preserves approved proof limits and current authority language", () => {
  assert.match(plumbing, /116 Google Business Profile call-button clicks over six months/);
  assert.match(plumbing, /does\s+not establish completed calls, unique callers,\s+qualified leads, or jobs booked/);
  assert.match(roofing, /Top 3 map-pack coverage across 88% to 96%/);
  assert.match(roofing, /not a claim about roofing leads or jobs booked/);
  assert.match(roofing, /no provider controls the answer an AI product gives/i);
  assert.doesNotMatch(plumbing + roofing, /<<<<<<<|=======|>>>>>>>/);
});

test("visible roofing FAQ copy matches the structured-data source strings", () => {
  assert.match(roofing, /text: item\.a/);
  assert.match(roofing, /<p className="mt-3 text-sm leading-relaxed text-gray-600">\{item\.a\}<\/p>/);
  assert.doesNotMatch(roofing, /i === 1|i === 5/);
});
