import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import test from "node:test";

const root = process.cwd();
const publicSourceRoots = [join(root, "src"), join(root, "docs")];
const restrictedTokenHashes = new Set([
  "2b3baf9bf9df0480f227727066d28e96cce3a1d04dbd0a415044791bf4520712",
  "d04261c3d821badad7866f616390562c93b4c6eead71f1199124ba10421f69d7",
  "019209346a558b1c8b5baf5de9361fd4bc1005639927025e404b2fc49fe0a9d4",
]);
const restrictedPhraseHashes = new Set([
  "5f312aa7e40e1895b55dd1f0df7d55e6c3d546096306a2b3b7dd53ea3a48c6dc",
  "a0cb76cd3d512a040244077367d7fc46c5fa4e9b1890ee19e15b8fc92d800d87",
  "ab474327cf76f4661d267455ac1b2b756d55f9d973b673f5a19a6f1fc22a4467",
  "75d2b43940b689cc37699f0bfbc18cf5ba387d1af715d4db44aed4f4e69f8582",
  "09187a8e321da30bed55f7d3ad70a24b719e2a0848b65efb9c4bb2802311f5e0",
  "c978ee9d385b0ee4967df92787de3ada1f6f63e078c68eee8ee4c2d5a4004526",
  "34832ac4f54b105f1c00adbab2de0392795f400e41e7379dd60d8dc57bdd4856",
  "3df17de67d60a156e7aa6f7be007206fd83e37a2a39e678e8be967f685324131",
  "6e2a47fcd9ec5f44b12731adb622c2c9f86afa3a278e835f963cd482a985a14c",
  "adbc8ea0e435f1351e04693a1662a322c45f0e7997e08bb309babfaa6800941a",
  "98141f02b2a70d257f15fdf4f68e0b501fd7aa581fa26483a9fb73f17a6474ae",
  "b73eb864a07d8ac2caa3b11a680ddcbafb05fbb49ea649b1a1eed44b35564b45",
  "9355ead26d9d06702d7f8a9c6e2cc1f159fe8406dd8be2910ac58138dcbe4db0",
]);

const digest = (value) =>
  createHash("sha256").update(value).digest("hex");

function sourceFiles(directory) {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    if (statSync(path).isDirectory()) return sourceFiles(path);
    return /\.(?:ts|tsx|js|jsx|md|mdx)$/.test(name) ? [path] : [];
  });
}

test("restricted prospect proof is absent from public source", () => {
  const violations = [];

  for (const sourceRoot of publicSourceRoots) {
    for (const path of sourceFiles(sourceRoot)) {
      const tokens = (
        readFileSync(path, "utf8").toLowerCase().match(/\d+k|[a-z]+|\d[\d,]*/g) ?? []
      ).map((token) => token.replaceAll(",", ""));
      const hasRestrictedToken = tokens.some((token) =>
        restrictedTokenHashes.has(digest(token)),
      );
      let hasRestrictedPhrase = false;

      for (let width = 2; width <= 4 && !hasRestrictedPhrase; width += 1) {
        for (let index = 0; index <= tokens.length - width; index += 1) {
          if (restrictedPhraseHashes.has(digest(tokens.slice(index, index + width).join(" ")))) {
            hasRestrictedPhrase = true;
            break;
          }
        }
      }

      if (hasRestrictedToken || hasRestrictedPhrase) {
        violations.push(relative(root, path));
      }
    }
  }

  assert.deepEqual(
    violations,
    [],
    `restricted prospect proof appears in: ${violations.join(", ")}`,
  );
});

test("Google Business Profile call clicks are not presented as completed or qualified calls", () => {
  const proofFiles = [
    "src/app/best-plumbing-marketing-agencies/page.tsx",
    "src/app/case-studies/kabam-plumbing/page.tsx",
    "src/app/case-studies/page.tsx",
    "src/app/plumbing-seo/page.tsx",
  ];

  for (const sourcePath of proofFiles) {
    const source = readFileSync(join(root, sourcePath), "utf8");
    assert.doesNotMatch(source, /\bprofile calls\b/i, sourcePath);
    assert.doesNotMatch(source, /\b116 calls\b/i, sourcePath);
  }

  const caseStudy = readFileSync(
    join(root, "src/app/case-studies/kabam-plumbing/page.tsx"),
    "utf8",
  );
  assert.match(caseStudy, /116 Google Business Profile call-button clicks/);
  assert.match(
    caseStudy,
    /does not establish completed calls, unique callers,\s+qualified leads, or jobs booked/,
  );
});
