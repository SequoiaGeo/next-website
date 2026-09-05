import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import { answerSequoiaQuestion } from "../src/lib/sequoia-knowledge-engine.mjs";

const read = (file) => readFileSync(join(process.cwd(), file), "utf8");
const termPattern = /(?:three[- ]month|3[- ]month|90[- ]day)\s+(?:initial|commitment|term)|initial term|month to month|three months initially/i;
const visibleHtml = (file) => read(file)
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
  .replace(/<[^>]+>/g, " ")
  .replace(/\s+/g, " ");

test("homepage copy does not present service fees or contract terms", () => {
  const homepageCopy = [
    "src/components/Hero.tsx",
    "src/app/page.tsx",
    "src/components/FirstThirtyDays.tsx",
  ].map(read).join("\n");
  assert.doesNotMatch(homepageCopy, /\$2,500|Engagements start at/i);
  assert.doesNotMatch(homepageCopy, termPattern);
});

test("desktop and first-level mobile navigation expose pricing without a submenu", () => {
  const navigation = read("src/components/Navigation.tsx");
  const desktop = navigation.split("{/* Desktop navigation */}")[1].split("{/* Desktop CTA */}")[0];
  const mobile = navigation.split("{/* Mobile menu */}")[1];
  for (const source of [desktop, mobile]) {
    assert.match(source, /href="\/ai-seo-pricing"[\s\S]*?>\s*Services &amp; Pricing\s*<\/Link>/);
  }
  assert.ok(mobile.indexOf('href="/ai-seo-pricing"') < mobile.indexOf("{/* Mobile Resources accordion */}"));
  assert.match(mobile, /href="\/ai-seo-pricing"\s+onClick=\{\(\) => setMobileOpen\(false\)\}/);
});

test("homepage opts out of term copy without changing the contact-page default", () => {
  assert.match(read("src/app/page.tsx"), /<ContactForm showEngagementTerms=\{false\} \/>/);
  assert.match(read("src/components/ContactForm.tsx"), /showEngagementTerms = true/);
  assert.match(read("src/components/ContactForm.tsx"), /\.\.\.\(showEngagementTerms\s*\?/);
  assert.match(read("src/app/contact/page.tsx"), /<ContactForm \/>/);
});

test("published fees and terms remain available and Ask Sequoia still cites them", () => {
  const pricing = read("src/app/ai-seo-pricing/page.tsx");
  assert.match(pricing, /\$2,500/);
  assert.match(pricing, /90-day initial term, then continues month to month/);
  const catalog = JSON.parse(read("src/data/sequoia-knowledge.catalog.json"));
  assert.ok(catalog.publishedStartingPrices.some((price) => price.amountUsd === 2500));
  const answer = answerSequoiaQuestion(catalog, "What does working with Sequoia cost?");
  assert.equal(answer.refused, false);
  assert.equal(answer.intent, "pricing");
  assert.ok(answer.citations.some((citation) => citation.path === "/ai-seo-pricing"));
});

test("built homepage omits fees and terms while pricing and contact retain them", () => {
  const homepage = visibleHtml(".next/server/app/index.html");
  assert.doesNotMatch(homepage, /\$2,500|Engagements start at/i);
  assert.doesNotMatch(homepage, termPattern);
  assert.match(homepage, /Services &amp; Pricing/);
  const pricing = visibleHtml(".next/server/app/ai-seo-pricing.html");
  assert.match(pricing, /\$2,500/);
  assert.match(pricing, /90-day initial term/);
  assert.match(visibleHtml(".next/server/app/contact.html"), /Three months initially, then month to month/);
});
