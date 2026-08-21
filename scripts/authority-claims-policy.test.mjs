import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), "utf8");
const readTree = (path) => {
  const absolute = join(root, path);
  return readdirSync(absolute, { withFileTypes: true })
    .flatMap((entry) => {
      const child = join(path, entry.name);
      if (entry.isDirectory()) return readTree(child);
      if (!statSync(join(root, child)).isFile() || !/\.(?:ts|tsx|md)$/.test(entry.name)) return [];
      return [read(child)];
    })
    .join("\n");
};

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

test("public source blocks the cleaned AI SEO claim families", () => {
  const publicSource = readTree("src");

  assert.doesNotMatch(
    publicSource,
    /(?:dominat(?:e|es|ing|ion)|first-mover)[^.\n]{0,120}(?:AI search|GEO)|(?:AI search|GEO)[^.\n]{0,120}(?:dominat(?:e|es|ing|ion)|first-mover)/i,
  );
  assert.doesNotMatch(
    publicSource,
    /meaningful visibility improvements in AI search typically take|consistent AI recommendations can take|GEO results? (?:take|within) \d+/i,
  );
  assert.doesNotMatch(
    publicSource,
    /same signals[^.\n]{0,120}(?:AI|Google)|(?:AI|Google)[^.\n]{0,120}same signals/i,
  );
  assert.doesNotMatch(
    publicSource,
    /review velocity (?:matters more|is the|directly|correlates|determines|drives|affects)|(?:weights|rewards)[^.\n]{0,100}review velocity|will outrank[^.\n]{0,120}review/i,
  );
  assert.doesNotMatch(publicSource, /reviews drive conversion rates directly/i);
  assert.doesNotMatch(publicSource, /better results within 90 days/i);
  assert.match(publicSource, /Google does not publish a review-velocity formula/i);
});

test("Evidence System copy discloses the collector activation limit", () => {
  const sources = [
    "src/app/geo-agency/page.tsx",
    "src/app/ai-search-methodology/page.tsx",
    "src/app/ai-seo-pricing/page.tsx",
  ].map(read).join("\n");

  assert.match(sources, /pilot-only[^.]*first live (?:observation|validation)/i);
  assert.doesNotMatch(sources, /completed automated baseline|live automated baseline/i);
});

test("Ahrefs is credited as a source without certification or endorsement language", () => {
  const guide = read("src/app/contractors-guide-ai-search/page.tsx");

  assert.match(guide, /Ahrefs Academy: Answer Engine Optimization course/);
  assert.match(guide, /helped frame the questions addressed in this guide/i);
  assert.match(guide, /checked platform-specific claims against primary documentation/i);
  assert.doesNotMatch(guide, /certified by Ahrefs|Ahrefs certified|endorsed by Ahrefs/i);
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

test("published Sequoia starting prices stay aligned", () => {
  const pricing = read("src/app/ai-seo-pricing/page.tsx");
  const process = read("src/app/how-it-works/page.tsx");
  const websites = read("src/app/web-design-fresno/page.tsx");

  assert.match(pricing, /Search Foundation starts at \$2,500/i);
  assert.match(pricing, /Fractional Marketing Lead starts at \$5,000/i);
  assert.match(pricing, /Complex Leadership starts at \$6,500/i);
  assert.match(pricing, /Custom website projects start at \$7,500/i);
  assert.match(process, /Engagements start at \$2,500 per month/i);
  assert.match(websites, /Website Foundation starts at \$2,500/i);
  assert.match(websites, /Custom website projects start at \$7,500/i);
});
