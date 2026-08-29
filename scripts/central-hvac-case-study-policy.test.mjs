import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pagePath = new URL(
  "../src/app/case-studies/hvac-marketing-control/page.tsx",
  import.meta.url,
);
const sitemapPath = new URL("../src/app/sitemap.ts", import.meta.url);
const indexPath = new URL("../src/app/case-studies/page.tsx", import.meta.url);

test("Central HVAC case study stays gated in Preview", async () => {
  const [page, sitemap, index] = await Promise.all([
    readFile(pagePath, "utf8"),
    readFile(sitemapPath, "utf8"),
    readFile(indexPath, "utf8"),
  ]);

  assert.match(page, /index:\s*false/);
  assert.match(page, /follow:\s*false/);
  assert.match(page, /Protected Preview draft/);
  assert.match(page, /Client approval is required before public release/);
  assert.doesNotMatch(sitemap, /case-studies\/hvac-marketing-control/);
  assert.doesNotMatch(index, /case-studies\/hvac-marketing-control/);
});

test("Central HVAC case study preserves the measurement limits", async () => {
  const page = await readFile(pagePath, "utf8");

  assert.match(page, /implementation outputs, not lead, booking, customer, or revenue/);
  assert.match(page, /Early traffic windows are too small and incomplete to establish a trend/);
  assert.match(page, /Historical Housecall Pro records did not contain reliable source data/);
  assert.match(page, /No paid-search[\s\S]*result is claimed/);
  assert.doesNotMatch(page, /26 (approved )?(Google )?(Business Profile )?review/i);
  assert.doesNotMatch(page, /1\.60%|2\.83%|41\.1%|CA\$41\.47|CA\$24\.42|929 impressions|44 clicks/);
});

test("Central HVAC case study follows Sequoia writing constraints", async () => {
  const page = await readFile(pagePath, "utf8");

  assert.doesNotMatch(page, /[\u2013\u2014]/);
  assert.doesNotMatch(page, /\b(simple|quick|easy|affordable|inexpensive)\b/i);
});
