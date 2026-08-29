import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pagePath = new URL(
  "../src/app/case-studies/amazing-air-solutions/page.tsx",
  import.meta.url,
);
const sitemapPath = new URL("../src/app/sitemap.ts", import.meta.url);
const indexPath = new URL("../src/app/case-studies/page.tsx", import.meta.url);

test("Amazing Air case study stays gated in Preview", async () => {
  const [page, sitemap, index] = await Promise.all([
    readFile(pagePath, "utf8"),
    readFile(sitemapPath, "utf8"),
    readFile(indexPath, "utf8"),
  ]);

  assert.match(page, /index:\s*false/);
  assert.match(page, /follow:\s*false/);
  assert.match(page, /Protected Preview draft/);
  assert.match(page, /Client review of the named implementation details is required/);
  assert.doesNotMatch(sitemap, /case-studies\/amazing-air-solutions/);
  assert.doesNotMatch(index, /case-studies\/amazing-air-solutions/);
});

test("Amazing Air case study separates inventories and outcomes", async () => {
  const page = await readFile(pagePath, "utf8");

  assert.match(page, /189 legacy pages/);
  assert.match(page, /129 URLs/);
  assert.match(page, /different inventories/);
  assert.match(page, /not a before-and-after\s+page count/);
  assert.match(page, /does not claim that\s+the rebuild increased traffic, rankings, leads, bookings, or return/);
  assert.match(page, /no lead, booking, ranking,\s+traffic, impression, or return figures/);
});

test("Amazing Air case study preserves verification limits", async () => {
  const page = await readFile(pagePath, "utf8");

  assert.match(page, /End-to-end form delivery/);
  assert.match(page, /source through booked job\s+remain unverified/);
  assert.match(page, /Other third-party directories remain unresolved/);
  assert.match(page, /60,000-impression figure[\s\S]*excluded/);
  assert.match(page, /No private owner quotation is\s+used/);
  assert.doesNotMatch(page, /36 (?:documented )?(?:website )?(?:improvements|commits)/i);
  assert.doesNotMatch(page, /could only trust|trust you guys/i);
});

test("Amazing Air case study follows Sequoia writing constraints", async () => {
  const page = await readFile(pagePath, "utf8");

  assert.doesNotMatch(page, /[\u2013\u2014]/);
  assert.doesNotMatch(page, /\b(simple|quick|easy|affordable|inexpensive)\b/i);
  assert.doesNotMatch(page, /\$\d|account ID|campaign ID|customer revenue/i);
});
