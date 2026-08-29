import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = process.cwd();
const paths = {
  page: "src/app/case-studies/luma-exteriors/page.tsx",
  index: "src/app/case-studies/page.tsx",
  homepage: "src/components/ClientResults.tsx",
  lsa: "src/app/lsa-management/page.tsx",
  roofing: "src/app/roofing-seo/page.tsx",
  sitemap: "src/app/sitemap.ts",
};

const files = Object.fromEntries(
  Object.entries(paths).map(([name, path]) => [name, readFileSync(join(root, path), "utf8")]),
);
const publicSurface = Object.values(files).join("\n");

test("Luma rewrite is a protected engagement spotlight", () => {
  assert.match(files.page, /Client Engagement Spotlight/);
  assert.match(files.page, /Protected Preview draft/);
  assert.match(files.page, /index: false/);
  assert.match(files.page, /follow: false/);
  assert.match(files.page, /requires written approval\s+before Production/);
});

test("Luma page separates billing states from business outcomes", () => {
  assert.match(files.page, /A charged lead is not a booked job/);
  assert.match(files.page, /A notification is a summary, not the ledger/);
  assert.match(files.page, /Charged, not charged, in review, submitted for dispute, and credited/);
  assert.match(files.page, /Missing evidence does not become an assumed outcome/);
  assert.match(files.page, /does not report lead volume, rankings, review growth, lead outcomes,\s+booked jobs, or financial outcomes/);
});

test("Luma operating scope and cadence remain bounded", () => {
  assert.match(files.page, /Local Services Ads and Google Business Profile\s+oversight/);
  assert.match(files.page, /daily lead and review checks, a weekly operating\s+review, and monthly client reporting/);
  assert.match(files.page, /Not every layer is a client-facing report/);
  assert.match(files.page, /Public actions on the Business Profile remain approval-gated/);
});

test("dependent public surfaces no longer repeat the old Luma performance story", () => {
  assert.doesNotMatch(publicSurface, /9\s*(?:to|→|->)\s*28/i);
  assert.doesNotMatch(publicSurface, /88\s*(?:-|to)\s*96\s*%/i);
  assert.doesNotMatch(publicSurface, /about 90%/i);
  assert.doesNotMatch(publicSurface, /calls and website traffic are climbing/i);
  assert.doesNotMatch(publicSurface, /61[^\n]{0,80}39%/i);
  assert.doesNotMatch(publicSurface, /~49[^\n]{0,80}director/i);
  assert.doesNotMatch(publicSurface, /Owning the map/i);
});

test("related pages identify the revised artifact while the draft stays out of the sitemap", () => {
  assert.match(files.index, /Client Engagement Spotlight/);
  assert.match(files.homepage, /Read the engagement spotlight/);
  assert.match(files.lsa, /Read the engagement spotlight/);
  assert.match(files.roofing, /Luma Exteriors engagement spotlight/);
  assert.doesNotMatch(files.sitemap, /luma-exteriors/);
});
