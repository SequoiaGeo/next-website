import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pagePath = new URL("../src/app/case-studies/car-and-air/page.tsx", import.meta.url);
const sitemapPath = new URL("../src/app/sitemap.ts", import.meta.url);
const indexPath = new URL("../src/app/case-studies/page.tsx", import.meta.url);

test("Car and Air case study stays gated in Preview", async () => {
  const [page, sitemap, index] = await Promise.all([
    readFile(pagePath, "utf8"),
    readFile(sitemapPath, "utf8"),
    readFile(indexPath, "utf8"),
  ]);

  assert.match(page, /index:\s*false/);
  assert.match(page, /follow:\s*false/);
  assert.match(page, /Protected Preview draft/);
  assert.match(page, /Client approval is required before public release/);
  assert.doesNotMatch(sitemap, /case-studies\/car-and-air/);
  assert.doesNotMatch(index, /case-studies\/car-and-air/);
});

test("Car and Air case study separates activity, leads, and paid jobs", async () => {
  const page = await readFile(pagePath, "utf8");

  assert.match(page, /July 13 through July 31, 2026/);
  assert.match(page, /174/);
  assert.match(page, /Platform-reported phone leads/);
  assert.match(page, /Client-confirmed paid job/i);
  assert.match(page, /They are not four independently verified customers/);
  assert.match(page, /overlaps the first reporting period/);
  assert.match(page, /not added to the first 19-day results/);
  assert.match(page, /no ad-attributed form lead had\s+been observed/);
  assert.doesNotMatch(page, /\b(PPF|ceramic(?:-coating)?) paid job\b/i);
  assert.doesNotMatch(page, /return on ad spend|ROAS|conversion rate|cost per lead/i);
});

test("Car and Air case study keeps approval and evidence limits visible", async () => {
  const page = await readFile(pagePath, "utf8");

  assert.match(page, /Written\s+publication approval is required/);
  assert.match(page, /Current\s+locator presence is not claimed/);
  assert.match(page, /One paid job is not a mature trend/);
  assert.match(page, /not an independently traced\s+attribution path/);
  assert.match(page, /The engagement remains active/);
  assert.doesNotMatch(page, /\$\d|campaign ID|account ID|customer revenue/i);
});

test("Car and Air case study follows Sequoia writing constraints", async () => {
  const page = await readFile(pagePath, "utf8");

  assert.doesNotMatch(page, /[\u2013\u2014]/);
  assert.doesNotMatch(page, /\b(simple|quick|easy|affordable|inexpensive)\b/i);
});
