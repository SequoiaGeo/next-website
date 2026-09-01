import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = process.cwd();
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8");

test("founder positioning separates career start from owner and operator tenure", () => {
  const files = [
    "src/components/Hero.tsx",
    "src/app/page.tsx",
    "src/app/contact/page.tsx",
    "src/app/fractional-cmo/page.tsx",
    "src/app/geo-agency/page.tsx",
    "src/app/found-me-in-chatgpt/page.tsx",
    "src/app/immanuel/page.tsx",
  ];
  const combined = files.map(read).join("\n");

  assert.match(combined, /career began in 2006|career that began in 2006|working in home services in 2006/);
  assert.match(combined, /13 years as an owner|13 years building and (?:running|operating)/);
  assert.doesNotMatch(combined, /13 years in home services/i);
  assert.doesNotMatch(combined, /13 years of experience/i);
});

test("booking intent stays separate and preserves privacy-safe attribution fields", () => {
  const component = read("src/components/BookingCalendar.tsx");
  const runbook = read("docs/growth/booking-and-call-reconciliation-runbook.md");

  assert.match(component, /trackEvent\("booking_intent"/);
  assert.match(component, /trackEvent\("booking_widget_view"/);
  assert.match(component, /intent_type/);
  assert.match(component, /page_path/);
  assert.match(component, /first_touch_landing_path/);
  assert.match(component, /landing_path: campaignLandingPath/);
  assert.match(component, /landing_path: aiLandingPath/);
  assert.match(component, /readCampaignAttribution/);
  assert.match(component, /readAiAttribution/);
  assert.doesNotMatch(component, /generate_lead/);
  assert.match(runbook, /cannot report booking completion/);
  assert.match(runbook, /Do not copy anonymous browser attribution into a named booking/);
});

test("first-call notes include the four approved AI-source questions", () => {
  const notes = read("docs/growth/ai-source-first-call-capture.md");
  for (const phrase of ["Which AI platform", "About what did you ask", "Where did Sequoia appear", "cite or link to a Sequoia page"]) {
    assert.match(notes, new RegExp(phrase, "i"));
  }
  assert.match(notes, /prospect-reported, not identity-verified/);
});

test("only roofing and plumbing agency comparisons receive the evidence treatment", () => {
  const roofing = read("src/app/best-roofing-marketing-agencies/page.tsx");
  const plumbing = read("src/app/best-plumbing-marketing-agencies/page.tsx");
  const hvac = read("src/app/best-hvac-marketing-agencies/page.tsx");
  const component = read("src/components/AiSearchEvidencePath.tsx");

  assert.match(roofing, /<AiSearchEvidencePath \/>/);
  assert.match(plumbing, /<AiSearchEvidencePath \/>/);
  assert.doesNotMatch(hvac, /AiSearchEvidencePath/);
  for (const href of ["/ai-search-methodology", "/case-studies/ai-search-readiness", "/ai-search-assessment"]) {
    assert.match(component, new RegExp(href));
  }
});

test("Hicks case names outputs and preserves outcome boundaries", () => {
  const page = read("src/app/case-studies/ai-search-readiness/page.tsx");
  for (const phrase of ["Evidence register", "Public-surface scorecard", "Prioritized correction sequence", "Measurement boundary and recheck date"]) {
    assert.match(page, new RegExp(phrase));
  }
  assert.match(page, /No recommendation, lead, job, or causation result is claimed/);
  assert.match(page, /Client approved use of Hicks Paving as the named example/);
});

test("buyer-language panel is frozen without GEO and requires five repetitions", () => {
  const protocol = read("docs/growth/chatgpt-home-services-buyer-language-panel-2026-08-31.md");
  const promptSection = protocol.split("## Frozen prompts")[1].split("## Run protocol")[0];
  const promptCount = (promptSection.match(/^\d+\./gm) || []).length;

  assert.equal(promptCount, 6);
  assert.doesNotMatch(promptSection, /\bGEO\b/);
  assert.match(protocol, /Run each prompt five times/);
  assert.match(protocol, /appearance rate/);
});

test("the approved starting price remains public", () => {
  const pricing = read("src/app/ai-seo-pricing/page.tsx");
  const homepage = read("src/components/Hero.tsx");
  assert.match(pricing, /\$2,500/);
  assert.match(homepage, /\$2,500\/mo/);
});
