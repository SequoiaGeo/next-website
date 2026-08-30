import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = process.cwd();
const read = (relativePath) => readFileSync(join(root, relativePath), "utf8");
const readTree = (relativePath) =>
  readdirSync(join(root, relativePath), { withFileTypes: true })
    .flatMap((entry) => {
      const child = join(relativePath, entry.name);
      if (entry.isDirectory()) return readTree(child);
      return /\.(?:ts|tsx|json)$/.test(entry.name) ? [read(child)] : [];
    })
    .join("\n");

test("public AI Search trust surfaces stay connected", () => {
  for (const page of [
    "src/app/geo-agency/page.tsx",
    "src/app/ai-seo-pricing/page.tsx",
    "src/app/ai-search-assessment/page.tsx",
  ]) {
    assert.match(read(page), /AiSearchTrustPanel/);
  }

  for (const surface of [
    "src/components/AiSearchTrustPanel.tsx",
    "src/components/Navigation.tsx",
    "src/components/Footer.tsx",
    "src/app/sitemap.ts",
  ]) {
    const source = read(surface);
    assert.match(source, /ai-and-client-data-policy/);
    assert.match(source, /case-studies\/ai-search-readiness/);
  }
});

test("Hicks Paving sample stays permissioned, dated, sourced, and bounded", () => {
  const page = read("src/app/case-studies/ai-search-readiness/page.tsx");

  assert.match(page, /Permissioned named example/);
  assert.match(page, /Client approved use of Hicks Paving as the named example/);
  assert.match(page, /August 14, 2026/);
  assert.match(page, /historical after November 12, 2026 unless they are reverified/);
  assert.match(page, /Official primary record/);
  assert.match(page, /Self-recorded public observation/);
  assert.match(page, /does not show a change in AI assistant recommendations, leads/);
  assert.match(page, /No controlled ChatGPT, Gemini, or Google AI recommendation panel was run/);
  assert.match(page, /not a legal opinion/);
  assert.doesNotMatch(page, /<Testimonials|testimonial|blockquote|leaderboard|overall score/i);
});

test("AI and client data policy contains the minimum safeguards", () => {
  const page = read("src/app/ai-and-client-data-policy/page.tsx");
  for (const required of [
    "Credentials stay out of model prompts",
    "Customer data is not public prompt material",
    "Human review remains required",
    "Named examples require approval",
    "Clients retain ownership",
    "does not promise zero retention",
  ]) {
    assert.match(page, new RegExp(required, "i"), `missing policy control: ${required}`);
  }
});

test("public source blocks obsolete award years and unconditional attribution claims", () => {
  const source = readTree("src");
  assert.doesNotMatch(source, /2020 to 2023|2020-2023|2020–2023/);
  assert.doesNotMatch(source, /connect(?:s|ed)? every (?:marketing )?dollar[^.\n]{0,140}(?:job|revenue)/i);
  assert.doesNotMatch(source, /every dollar[^.\n]{0,140}(?:tracked|traced|connect)[^.\n]{0,140}(?:booked|revenue|outcome)/i);
  assert.doesNotMatch(source, /single pipeline view/i);
  assert.doesNotMatch(source, /accountable for the booked job/i);
});

test("credential and testimonials are not presented as AI Search outcomes", () => {
  const panel = read("src/components/AiSearchTrustPanel.tsx");
  const media = read("src/app/media/page.tsx");

  assert.match(panel, /They are not presented as proof that AI recommendations increased/);
  assert.match(panel, /AI Search training, not evidence of client outcomes/);
  assert.match(media, /It does not establish client results/);
  assert.match(media, /not evidence of a client outcome/);
  assert.match(read("src/app/ai-and-client-data-policy/page.tsx"), /removes the named example from its current public pages and public knowledge catalog/);
});

test("trust release follows Sequoia language rules", () => {
  const source = [
    read("src/components/AiSearchTrustPanel.tsx"),
    read("src/app/ai-and-client-data-policy/page.tsx"),
    read("src/app/case-studies/ai-search-readiness/page.tsx"),
  ].join("\n");

  assert.doesNotMatch(source, /[–—]/);
  assert.doesNotMatch(source, /\b(?:simple|quick|easy|affordable|inexpensive)\b/i);
});
