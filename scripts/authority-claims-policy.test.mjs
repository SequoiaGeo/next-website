import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), "utf8");

test("Sequoia engagement terms are consistent on buyer-facing pages", () => {
  const about = read("src/app/about-sequoia-geo/page.tsx");
  const process = read("src/app/how-it-works/page.tsx");
  const switching = read("src/app/leaving-my-marketing-agency/page.tsx");
  const ads = read("src/app/google-ads-fresno/page.tsx");

  for (const [name, source] of Object.entries({ about, process, switching, ads })) {
    assert.match(source, /90-day|three-month/i, `${name} must state the initial term`);
    assert.match(source, /month to month/i, `${name} must state the continuation term`);
  }

  const all = [about, process, switching, ads, read("src/components/AIAutomation.tsx")].join("\n");
  assert.doesNotMatch(all, /10 contractors at a time/i);
  assert.doesNotMatch(all, /max 10/i);
  assert.doesNotMatch(all, /working with 10 home service/i);
  assert.doesNotMatch(all, /30-day engagement/i);
  assert.doesNotMatch(all, /month-to-month\. no contracts/i);
  assert.doesNotMatch(all, /see results in 30 days/i);
});

test("AI SEO pages do not revive known schema or recommendation overclaims", () => {
  const sources = [
    "src/app/geo-agency/page.tsx",
    "src/app/geo-for-plumbers/page.tsx",
    "src/app/geo-for-restoration/page.tsx",
    "src/app/hvac-seo/page.tsx",
    "src/app/blog/[slug]/page.tsx",
  ].map(read).join("\n");

  assert.doesNotMatch(sources, /companies without schema markup are invisible/i);
  assert.doesNotMatch(sources, /AI tools can confidently understand/i);
  assert.doesNotMatch(sources, /schema is a direct local SEO signal/i);
  assert.doesNotMatch(sources, /schema.*decide whether.*reads your headline/i);
  assert.match(read("src/app/geo-agency/page.tsx"), /Google says no special schema/i);
  assert.match(read("src/app/geo-agency/page.tsx"), /ai-search-methodology/);
});

test("public AI search methodology contains the reporting controls", () => {
  const methodology = read("src/app/ai-search-methodology/page.tsx");

  for (const required of [
    "Mentioned",
    "Recommended",
    "Primary recommendation",
    "Cited",
    "Referral visit",
    "Inquiry",
    "Qualified lead",
    "Job booked",
    "five times in separate fresh sessions",
    "not statistically independent trials",
    "Publish misses",
    "Changelog",
  ]) {
    assert.match(methodology, new RegExp(required, "i"), `methodology missing: ${required}`);
  }
});

test("superseded generic GEO article consolidates into the evidence page", () => {
  const config = read("next.config.mjs");
  const blogIndex = read("src/app/blog/page.tsx");
  const sitemapData = read("src/data/blog-posts.ts");

  assert.match(config, /source: "\/blog\/what-is-a-geo-agency", destination: "\/geo-agency"/);
  assert.doesNotMatch(blogIndex, /slug: "what-is-a-geo-agency"/);
  assert.doesNotMatch(sitemapData, /slug: "what-is-a-geo-agency"/);
});

test("new authority pages follow Sequoia punctuation and pricing language rules", () => {
  const sources = [
    "src/app/geo-agency/page.tsx",
    "src/app/ai-search-methodology/page.tsx",
    "src/app/about-sequoia-geo/page.tsx",
    "src/app/how-it-works/page.tsx",
  ].map(read).join("\n");

  assert.doesNotMatch(sources, /[—–]/);
  assert.doesNotMatch(sources, /\b(?:simple|quick|easy|affordable|inexpensive)\b/i);
});
