import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = process.cwd();
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8");

const pages = {
  assessment: read("src/app/ai-search-assessment/page.tsx"),
  report: read("src/app/home-services-ai-recommendation-report/page.tsx"),
  comparison: read("src/app/best-ai-seo-agencies-home-services/page.tsx"),
  cases: read("src/app/case-studies/page.tsx"),
  audit: read("src/app/audit/page.tsx"),
};

test("the AI Search assessment owns a distinct captured-lead path", () => {
  assert.match(pages.assessment, /source="ai_search_assessment_page"/);
  assert.match(pages.assessment, /collectCompany/);
  assert.match(pages.assessment, /href="\/audit"/);
  assert.match(pages.audit, /source="audit_page"/);
  assert.match(pages.audit, /href="\/ai-search-assessment"/);
  assert.doesNotMatch(pages.audit, /Does your business appear when a homeowner asks ChatGPT/);
});

test("the pre-publication report is noindex and excluded from the sitemap", () => {
  const sitemap = read("src/app/sitemap.ts");
  assert.match(pages.report, /robots:\s*\{\s*index:\s*false,\s*follow:\s*true\s*\}/);
  assert.match(pages.report, /results not yet published/i);
  assert.match(pages.report, /180/);
  assert.match(pages.report, /20 percent/);
  assert.doesNotMatch(sitemap, /home-services-ai-recommendation-report/);
});

test("the agency comparison discloses its conflict and links official provider pages", () => {
  for (const domain of [
    "firstpagesage.com",
    "ipullrank.com",
    "searchbloom.com",
    "thriveagency.com",
    "webfx.com",
  ]) {
    assert.match(pages.comparison, new RegExp(domain.replace(".", "\\.")));
  }
  assert.match(pages.comparison, /Sequoia GEO publishes this page and is included/i);
  assert.match(pages.comparison, /not assigned a universal score or rank/i);
  assert.match(pages.comparison, /No provider\s+paid for inclusion/i);
});

test("the indexed acquisition pages are discoverable while the report remains controlled", () => {
  const discovery = [
    read("src/app/sitemap.ts"),
    read("src/components/Navigation.tsx"),
    read("src/components/Footer.tsx"),
  ].join("\n");

  assert.match(discovery, /\/ai-search-assessment/);
  assert.match(discovery, /\/best-ai-seo-agencies-home-services/);
  assert.doesNotMatch(discovery, /\/home-services-ai-recommendation-report/);
  assert.match(pages.cases, /href="\/home-services-ai-recommendation-report"/);
});

test("the case-study page operates as the proof hub", () => {
  assert.match(pages.cases, /The Sequoia Proof Library/);
  assert.match(pages.cases, /Founder operating history/);
  assert.match(pages.cases, /Client implementation records/);
  assert.match(pages.cases, /AI Search diagnostic evidence/);
  assert.match(pages.cases, /href="\/proof-system"/);
  assert.match(pages.cases, /href="\/case-studies\/ai-search-readiness"/);
});

test("the five-page package follows language and claims rules", () => {
  const source = Object.values(pages).join("\n");
  assert.doesNotMatch(source, /[\u2013\u2014]/);
  assert.doesNotMatch(source, /\b(?:simple|quick|easy|affordable|inexpensive)\b/i);
  assert.doesNotMatch(source, /\b(?:Sequoia|we|our (?:work|service|assessment))\s+(?:will\s+)?guarantee(?:s|d)? (?:a |an )?(?:ranking|recommendation|citation|lead|job)/i);
  assert.doesNotMatch(pages.report, /provider results (?:show|found|demonstrate)/i);
});
