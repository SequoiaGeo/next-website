import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = process.cwd();
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8");

const assessment = read("src/app/ai-search-assessment/page.tsx");
const methodology = read("src/app/ai-search-methodology/page.tsx");
const rubricReadme = read("open-source/ai-search-measurement-rubric/README.md");
const codebook = read("open-source/ai-search-measurement-rubric/CODEBOOK.md");
const schema = JSON.parse(read("open-source/ai-search-measurement-rubric/observation-schema.json"));
const operationsRoot = "docs/authority/ai-search-measurement-operations";
const operationsFiles = [
  `${operationsRoot}/README.md`,
  `${operationsRoot}/MEASUREMENT-RUNBOOK.md`,
  `${operationsRoot}/prompt-panel-template.csv`,
  `${operationsRoot}/observation-wave-template.csv`,
  `${operationsRoot}/second-coder-review-template.csv`,
  `${operationsRoot}/client-evidence-index-template.md`,
  `${operationsRoot}/claim-register-template.csv`,
];

test("the free offer is consistently named AI Search Snapshot", () => {
  assert.match(assessment, /Free AI Search Snapshot/);
  assert.match(assessment, /Request your AI Search Snapshot/);
  assert.match(assessment, /Request My AI Search Snapshot/);
  assert.match(
    assessment,
    /We document where your business appears, how consistently it appears, which sources\s+support the answer, and what the evidence can actually prove\./,
  );
  assert.match(assessment, /dated, controlled sample, not a universal rank/i);
  assert.match(assessment, /does not assume that a\s+later inquiry came from an observed answer/i);
  assert.doesNotMatch(assessment, /baseline/i);
});

test("the methodology defines confidence and the attribution gap", () => {
  for (const required of [
    "Public methodology, version 1.4",
    "How confident can an AI visibility assessment be?",
    "Recorded",
    "Observed",
    "Inferred",
    "Unknown",
    "Measurement gap",
    "controlled prompt panel",
    "identity-level join",
    "frozen panel",
  ]) {
    assert.match(methodology, new RegExp(required, "i"), `methodology missing: ${required}`);
  }
  assert.match(methodology, /dateModified: "2026-08-30"/);
  assert.match(methodology, /version: "1.4"/);
});

test("the operating package contains every required control artifact", () => {
  for (const relativePath of operationsFiles) {
    assert.ok(fs.existsSync(path.join(root, relativePath)), `missing ${relativePath}`);
    assert.ok(read(relativePath).trim().length > 0, `empty ${relativePath}`);
  }

  const panelHeader = read(`${operationsRoot}/prompt-panel-template.csv`).trim();
  for (const field of [
    "panel_arm",
    "exact_prompt",
    "language",
    "urgency_frame",
    "topic_frame",
    "geo_grain",
    "comparison_frame",
    "repeats_per_cell",
  ]) {
    assert.match(panelHeader, new RegExp(`(?:^|,)${field}(?:,|$)`));
  }

  const observationHeader = read(`${operationsRoot}/observation-wave-template.csv`).trim();
  for (const field of [
    "surface",
    "account_state",
    "search_or_browse_state",
    "device",
    "geography",
    "location_method",
    "artifact_sha256",
    "source_types",
    "exclusion_reason",
  ]) {
    assert.match(observationHeader, new RegExp(`(?:^|,)${field}(?:,|$)`));
  }

  const runbook = read(`${operationsRoot}/MEASUREMENT-RUNBOOK.md`);
  assert.match(runbook, /different people for the same observation/i);
  assert.match(runbook, /below 80 percent/i);
  assert.match(runbook, /does not by itself establish causal lift/i);
});

test("the public rubric treats repeats as correlated observations", () => {
  assert.doesNotMatch(rubricReadme, /five independent times/i);
  assert.match(rubricReadme, /correlated stability observations/i);
  assert.match(rubricReadme, /at least 20 percent/i);
  assert.match(codebook, /Record both codes before discussion/i);
  assert.match(codebook, /recorded/i);
  assert.match(codebook, /unknown/i);
});

test("the observation schema preserves session context", () => {
  for (const field of [
    "panel_arm",
    "prompt_family",
    "language",
    "surface",
    "account_state",
    "device",
    "geography",
    "location_method",
  ]) {
    assert.ok(schema.required.includes(field), `schema field should be required: ${field}`);
  }
  assert.equal(schema.properties.artifact_sha256.pattern, "^[A-Fa-f0-9]{64}$");
  assert.ok(schema.properties.source_types.items.enum.includes("unsupported_or_unresolved"));
});

test("new public copy follows Sequoia language rules", () => {
  const publicCopy = `${assessment}\n${methodology}`;
  assert.doesNotMatch(publicCopy, /[\u2013\u2014]/);
  assert.doesNotMatch(publicCopy, /\b(?:simple|quick|easy|affordable|inexpensive)\b/i);
});
