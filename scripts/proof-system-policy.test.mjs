import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8");

const proofModule = await import(pathToFileURL(path.join(root, "src/data/proof-system.ts")));
const { defineProofClaim, assertUniqueProofClaims } = proofModule;

const validClaim = {
  id: "proof-test-1",
  subject: "A tested condition",
  statement: "A dated condition was observed.",
  displayValue: "1",
  displayLabel: "verified condition",
  status: "baseline-verified",
  evidenceClass: "directly-measured",
  sourceLabel: "Test fixture",
  metricDefinition: "One inspected condition",
  period: "2026-08-29",
  readOn: "2026-08-29",
  doesNotEstablish: "A causal result.",
  permission: "internal-only",
  causalDesign: "none",
  timeScope: "dated-historical",
};

test("public proof system defines the position, statuses, evidence classes, and limits", () => {
  const page = read("src/app/proof-system/page.tsx");
  const data = read("src/data/proof-system.ts");

  assert.match(page, /We establish what is true, correct what is broken, and verify the result before we/);
  assert.match(page, /Causation is a separate claim/);
  assert.match(page, /We do not use a client's financial performance as Sequoia proof/);
  assert.match(page, /new and revised assessments/);
  assert.match(page, /case-study library is being migrated/);

  for (const label of [
    "Baseline verified",
    "Correction completed",
    "Verification passed",
    "Observed after",
    "Client confirmed",
    "Not established",
  ]) {
    assert.match(data, new RegExp(label));
  }

  for (const label of [
    "Directly measured",
    "Client attested",
    "Inherited strength",
    "Public observation",
    "Reconstructed",
    "Unavailable",
  ]) {
    assert.match(data, new RegExp(label));
  }

  assert.match(data, /doesNotEstablish/);
  assert.match(data, /causalDesign/);
  assert.match(data, /permission/);
  assert.match(data, /timeScope/);
  assert.match(data, /reverifyBy/);
  assert.match(data, /presents a mutable condition as current and requires re-verification/);
});

test("proof claim policy enforces mutable dates, evidence compatibility, and unique IDs", () => {
  assert.equal(defineProofClaim(validClaim).id, validClaim.id);

  assert.throws(
    () => defineProofClaim({ ...validClaim, id: "current-missing", timeScope: "current" }),
    /requires re-verification/,
  );
  assert.throws(
    () =>
      defineProofClaim({
        ...validClaim,
        id: "current-expired",
        timeScope: "current",
        reverifyBy: "2020-01-01",
      }),
    /requires a future re-verification date/,
  );
  assert.equal(
    defineProofClaim({
      ...validClaim,
      id: "current-valid",
      timeScope: "current",
      reverifyBy: "2999-01-01",
    }).id,
    "current-valid",
  );
  assert.throws(
    () =>
      defineProofClaim({
        ...validClaim,
        id: "incompatible-evidence",
        status: "verification-passed",
        evidenceClass: "client-confirmed",
      }),
    /incompatible status/,
  );
  assert.throws(
    () => assertUniqueProofClaims([validClaim, { ...validClaim }]),
    /Duplicate proof claim ID/,
  );
});

test("proof system is visible from public discovery surfaces", () => {
  for (const file of [
    "src/app/ai-search-methodology/page.tsx",
    "src/components/Navigation.tsx",
    "src/components/Footer.tsx",
    "src/app/sitemap.ts",
  ]) {
    assert.match(read(file), /proof-system/);
  }

  assert.match(read("next.config.mjs"), /source: "\/proof", destination: "\/proof-system"/);

  const footer = read("src/components/Footer.tsx");
  assert.doesNotMatch(footer, /2020 to 2023|CA Licensed Contractor/);
  assert.match(footer, /2021 to 2024/);
  assert.match(footer, /Former California contractor qualifier/);
});

test("AI search methodology names the proof system as its parent standard", () => {
  const methodology = read("src/app/ai-search-methodology/page.tsx");
  assert.match(methodology, /version: "1\.3"/);
  assert.match(methodology, /Public methodology, version 1\.3/);
  assert.match(methodology, /general qualification rule in the Sequoia Proof System/);
});

test("Balanced Comfort is framed as founder history, not a client result", () => {
  const founder = read("src/app/case-studies/balanced-comfort/page.tsx");
  const index = read("src/app/case-studies/page.tsx");
  assert.doesNotMatch(founder, /\$17M/);
  assert.doesNotMatch(founder, /tracked ROI/i);
  assert.doesNotMatch(founder, /2020 to 2023|2020, 2021, 2022, and 2023/);
  assert.doesNotMatch(founder, /3x[\s\S]{0,120}Best Place|Certified three years/i);
  assert.match(founder, /2021, 2022, 2023, and 2024/);
  assert.match(founder, /Public sources checked August 29, 2026/);
  assert.match(founder, /founder operating history, not a Sequoia GEO client result/i);
  assert.doesNotMatch(index, /\$17M|successful exit|Every strategy deployed for clients was tested here first/i);
  assert.doesNotMatch(index, /5-star Google reviews|3x[\s\S]{0,120}Best Place/i);
  assert.match(index, /This is founder operating history,\s+not a Sequoia\s+GEO client result/);
});

test("corrected founder credentials stay consistent across the release surfaces", () => {
  const source = [
    read("src/app/case-studies/page.tsx"),
    read("src/app/case-studies/balanced-comfort/page.tsx"),
    read("src/components/Footer.tsx"),
  ].join("\n");
  assert.doesNotMatch(source, /2020 to 2023|2020-2023|2020, 2021, 2022, and 2023/i);
  assert.doesNotMatch(source, /CA Licensed Contractor|California Licensed Contractor|CA Contractor Licenses/i);
  assert.doesNotMatch(source, /Great Place to Work 3x|3x[\s\S]{0,100}Best Place|three Best Place/i);
});

test("proof-system release copy follows Sequoia language rules", () => {
  const combined = [
    read("src/app/proof-system/page.tsx"),
    read("src/data/proof-system.ts"),
    read("src/app/ai-search-methodology/page.tsx"),
    read("src/app/case-studies/page.tsx"),
    read("src/app/case-studies/balanced-comfort/page.tsx"),
    read("docs/proof-system/sequoia-proof-system-v1.md"),
    read("src/components/Navigation.tsx"),
    read("src/components/Footer.tsx"),
    read("src/app/sitemap.ts"),
    read("next.config.mjs"),
  ].join("\n");

  assert.doesNotMatch(combined, /[\u2013\u2014]/);
  assert.doesNotMatch(combined, /\b(?:simple|simply|quick|quickly|easy|easily|affordable|inexpensive|cheap)\b/i);
});
