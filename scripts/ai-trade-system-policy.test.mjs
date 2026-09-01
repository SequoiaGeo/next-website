import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = process.cwd();
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8");

const tradePages = [
  "src/app/geo-for-plumbers/page.tsx",
  "src/app/geo-for-restoration/page.tsx",
  "src/app/ai-seo-for-hvac/page.tsx",
  "src/app/ai-seo-for-roofers/page.tsx",
];

test("the national hub and four trade pages share one AI search architecture", () => {
  const surfaces = read("src/lib/ai-search-trades.ts");
  const sharedNav = read("src/components/TradeAiSearchNav.tsx");
  const hub = read("src/app/geo-agency/page.tsx");

  for (const route of [
    "/geo-for-plumbers",
    "/geo-for-restoration",
    "/ai-seo-for-hvac",
    "/ai-seo-for-roofers",
  ]) {
    assert.match(surfaces, new RegExp(route));
  }

  assert.match(hub, /TradeAiSearchNav/);
  for (const file of tradePages) assert.match(read(file), /TradeAiSearchNav/);

  for (const route of ["/geo-agency", "/ai-search-methodology", "/ai-seo-pricing"]) {
    assert.match(sharedNav, new RegExp(route));
  }
});

test("AI trade discovery routes are available through public navigation and the sitemap", () => {
  const publicDiscovery = [
    read("src/components/Navigation.tsx"),
    read("src/components/Footer.tsx"),
    read("src/app/sitemap.ts"),
  ].join("\n");

  for (const route of [
    "/geo-for-plumbers",
    "/geo-for-restoration",
    "/ai-seo-for-hvac",
    "/ai-seo-for-roofers",
  ]) {
    assert.match(publicDiscovery, new RegExp(route));
  }
});

test("AI trade pages use the AI Search assessment path and avoid known recommendation promises", () => {
  const source = tradePages.map(read).join("\n");

  for (const file of tradePages) assert.match(read(file), /href="\/ai-search-assessment"/);

  for (const blocked of [
    /We make plumbers visible and recommendable/i,
    /We make restoration businesses visible and recommendable/i,
    /Be the Name AI Recommends/i,
    /GEO authority builds over time/i,
    /AI visibility is wide open/i,
    /Companies with strong local SEO foundations are the ones AI assistants recommend/i,
    /Get Your Plumbing Company Recommended/i,
    /Get Recommended in AI Search/i,
  ]) {
    assert.doesNotMatch(source, blocked);
  }
});

test("the conventional trade pages point to, but do not duplicate, the AI trade pillars", () => {
  const hvac = read("src/app/hvac-seo/page.tsx");
  const roofing = read("src/app/roofing-seo/page.tsx");

  assert.match(hvac, /href="\/ai-seo-for-hvac"/);
  assert.match(roofing, /href="\/ai-seo-for-roofers"/);
  assert.doesNotMatch(hvac, /Companies with strong local SEO foundations are the ones AI assistants recommend/i);
  assert.doesNotMatch(roofing, /AI SEO for Roofing Companies[\s\S]{0,2000}What AI Search Systems Look For/i);
});

test("new AI trade-system copy follows Sequoia language rules", () => {
  const source = [
    ...tradePages.map(read),
    read("src/app/geo-agency/page.tsx"),
    read("src/components/TradeAiSearchNav.tsx"),
    read("src/lib/ai-search-trades.ts"),
  ].join("\n");

  assert.doesNotMatch(source, /[\u2013\u2014]/);
  assert.doesNotMatch(source, /\b(?:simple|quick|easy|affordable|inexpensive)\b/i);
});
