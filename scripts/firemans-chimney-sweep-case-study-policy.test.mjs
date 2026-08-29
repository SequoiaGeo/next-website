import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pagePath = new URL(
  "../src/app/case-studies/firemans-chimney-sweep/page.tsx",
  import.meta.url,
);
const indexPath = new URL("../src/app/case-studies/page.tsx", import.meta.url);
const websitesPath = new URL("../src/app/websites/page.tsx", import.meta.url);
const hvacPath = new URL("../src/app/hvac-seo/page.tsx", import.meta.url);
const processPath = new URL("../src/app/how-it-works/page.tsx", import.meta.url);
const catalogPath = new URL("../src/data/sequoia-knowledge.catalog.json", import.meta.url);

test("Fireman's Chimney Sweep case study keeps the dated evidence exact", async () => {
  const page = await readFile(pagePath, "utf8");

  assert.match(page, /56 to 87/);
  assert.match(page, /10\.1s to 2\.8s/);
  assert.match(page, /8,090/);
  assert.match(page, /average position of 5\.8/);
  assert.match(page, /28 days ending July 7, 2026/);
  assert.match(page, /all queries, including searches for the\s+business name/);
  assert.match(page, /dated single lab runs/);
  assert.match(page, /not field Core\s+Web Vitals/);
});

test("Fireman's Chimney Sweep case study preserves measurement limits", async () => {
  const page = await readFile(pagePath, "utf8");

  assert.match(page, /does not claim traffic growth, lead growth, return on investment, or cost\s+per job/);
  assert.match(page, /not evidence\s+that impressions or rankings increased/);
  assert.match(page, /not evidence of inquiries or booked work/);
  assert.match(page, /cannot say that every lead has a source/);
  assert.doesNotMatch(page, /first full month/i);
  assert.doesNotMatch(page, /page one/i);
});

test("Fireman's Chimney Sweep case study separates inherited trust from project evidence", async () => {
  const page = await readFile(pagePath, "utf8");

  assert.match(page, /Google\s+Business Profile showed a 4\.8 rating across 367 reviews when verified June 16/);
  assert.match(page, /not by Sequoia\s+GEO and not by the new website/);
  assert.match(page, /The required field, validation, and linked address in the lead notification email\s+were updated, deployed, and verified the same day/);
  assert.doesNotMatch(page, /firefighter[- ]owned/i);
  assert.doesNotMatch(page, /I really like the layout|layout and simplicity/i);
});

test("Fireman's Chimney Sweep case study avoids absolute migration and outcome claims", async () => {
  const page = await readFile(pagePath, "utf8");

  assert.match(page, /Legacy Wix routes were mapped to current equivalents and verified after launch/);
  assert.match(page, /28 towns the owner confirmed/);
  assert.doesNotMatch(page, /Every page of the old site/i);
  assert.doesNotMatch(page, /rankings .* carried over/i);
  assert.doesNotMatch(page, /paid-call|repair estimate|revenue|cost-per-job/i);
});

test("Fireman's Chimney Sweep case study follows Sequoia writing constraints", async () => {
  const page = await readFile(pagePath, "utf8");

  assert.doesNotMatch(page, /[\u2013\u2014]/);
  assert.doesNotMatch(page, /\b(simple|quick|easy|affordable|inexpensive)\b/i);
  assert.doesNotMatch(page, /text-xs/);
});

test("Fireman's Chimney Sweep corrections propagate across public callouts and the knowledge catalog", async () => {
  const [index, websites, hvac, process, catalog] = await Promise.all([
    readFile(indexPath, "utf8"),
    readFile(websitesPath, "utf8"),
    readFile(hvacPath, "utf8"),
    readFile(processPath, "utf8"),
    readFile(catalogPath, "utf8"),
  ]);
  const publicDependencies = [index, websites, hvac, process, catalog].join("\n");

  assert.doesNotMatch(publicDependencies, /firefighter-owned chimney company/i);
  assert.doesNotMatch(publicDependencies, /protected every\s+ranking/i);
  assert.doesNotMatch(publicDependencies, /page one within three weeks/i);
  assert.doesNotMatch(publicDependencies, /Average search position, first month/i);
  assert.doesNotMatch(publicDependencies, /To page one/i);
  assert.match(catalog, /"catalogVersion": "2026-08-28\.3"/);
  assert.match(catalog, /28 days ending July 7/);
  assert.match(catalog, /owner approved being named/);
});
