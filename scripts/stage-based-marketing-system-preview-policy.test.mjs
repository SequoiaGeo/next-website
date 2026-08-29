import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = process.cwd();
const pagePath = join(
  root,
  "src/app/case-studies/stage-based-marketing-system/page.tsx",
);
const page = readFileSync(pagePath, "utf8");
const config = readFileSync(join(root, "next.config.mjs"), "utf8");
const index = readFileSync(join(root, "src/app/case-studies/page.tsx"), "utf8");
const sitemap = readFileSync(join(root, "src/app/sitemap.ts"), "utf8");
const catalog = readFileSync(join(root, "src/data/sequoia-knowledge.catalog.json"), "utf8");

test("engagement note is disabled in Production and blocked from discovery", () => {
  assert.match(page, /VERCEL_ENV === "production"/);
  assert.match(page, /notFound\(\)/);
  assert.match(page, /index: false/);
  assert.match(page, /follow: false/);
  assert.match(config, /stage-based-marketing-system/);
  assert.match(config, /private, no-store, max-age=0/);
  assert.match(config, /noindex, nofollow, noarchive, nosnippet/);
});

test("engagement note is not linked, cataloged, or added to the sitemap", () => {
  assert.doesNotMatch(index, /stage-based-marketing-system/);
  assert.doesNotMatch(sitemap, /stage-based-marketing-system/);
  assert.doesNotMatch(catalog, /stage-based-marketing-system/);
});

test("engagement note contains the required claim limits", () => {
  assert.match(page, /This is not a results case study/);
  assert.match(page, /No verified paid-sourced booked meeting/);
  assert.match(page, /No causal increase in customers, pipeline, or revenue/);
  assert.match(page, /No traffic, ranking, or AI-assistant citation result/);
  assert.match(page, /No holdout or controlled comparison was run/);
  assert.match(page, /full chain was not reconciled through the customer stage/);
  assert.match(page, /not endorsements of Sequoia GEO or the engagement/);
});

test("engagement note keeps delivery scope distinct from verified outcomes", () => {
  assert.match(page, /Live assets and campaign-ready drafts remained separately labeled/);
  assert.match(page, /Findings the account evidence did not support were not implemented/);
  assert.match(page, /firm&rsquo;s standard measurement model/);
  assert.match(page, /used the first six stages as reporting definitions/);
  assert.doesNotMatch(page, /35\+/);
  assert.doesNotMatch(page, /13-slide/i);
  assert.doesNotMatch(page, /independent auditors/i);
});

test("engagement note remains category-neutral", () => {
  assert.doesNotMatch(page, /home-service software/i);
  assert.doesNotMatch(page, /software company/i);
  assert.doesNotMatch(page, /answering service/i);
  assert.doesNotMatch(page, /receptionist/i);
  assert.doesNotMatch(page, /CRM platform/i);
});
