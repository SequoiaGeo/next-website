import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import test from "node:test";

const read = (path) => readFileSync(path, "utf8");
const base = "7db85b81b23c5ff369613a70d76b751032063856";
const coverage = read("src/components/TradeSearchCoverage.tsx");

for (const trade of ["plumbing", "hvac", "roofing"]) {
  test(`${trade} recovery preserves the complete production page and adds coverage once`, () => {
    const path = `src/app/${trade}-seo/page.tsx`;
    const before = execFileSync("git", ["show", `${base}:${path}`], { encoding: "utf8" }).replaceAll("\r\n", "\n");
    const after = read(path).replaceAll("\r\n", "\n");
    assert.equal(after.split(`<TradeSearchCoverage trade="${trade}" />`).length - 1, 1);
    const stripped = after
      .replace('import TradeSearchCoverage from "@/components/TradeSearchCoverage";\n', "")
      .replace(`      <TradeSearchCoverage trade="${trade}" />\n\n`, "");
    assert.equal(stripped, before, "Do not overwrite current proof, pricing, schema, titles, forms, or AI content");
  });
}

test("coverage restores specific topics without promises or client statistics", () => {
  for (const phrase of ["Plumbing keyword research", "Local SEO for plumbing companies", "On-page SEO for plumbing", "HVAC keyword research", "Heating and cooling service-area", "Roofing keyword research", "Local SEO, Google Maps", "On-page SEO for roofing"]) {
    assert.ok(coverage.includes(phrase), phrase);
  }
  assert.doesNotMatch(coverage, /dangerouslySetInnerHTML|use client|guaranteed rankings|\$\d|\u2014|\u2013/);
  assert.match(coverage, /aria-labelledby/);
  assert.match(coverage, /text-base leading-relaxed/);
});

test("rendering assets remain crawlable and service sitemap dates match this edit", () => {
  const robots = read("src/app/robots.ts");
  assert.doesNotMatch(robots, /["']\/_next\/["']/);
  assert.match(robots, /"\/api\/"/);
  const sitemap = read("src/app/sitemap.ts");
  for (const trade of ["hvac", "plumbing", "roofing"]) {
    assert.ok(sitemap.includes(`/${trade}-seo\`, lastModified: "2026-09-09"`));
  }
});
