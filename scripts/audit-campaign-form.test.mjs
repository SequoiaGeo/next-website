import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const appRoot = fileURLToPath(new URL("../src/app", import.meta.url));

async function pageFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await pageFiles(fullPath)));
    if (entry.isFile() && entry.name === "page.tsx") files.push(fullPath);
  }

  return files;
}

const auditPage = await readFile(new URL("../src/app/audit/page.tsx", import.meta.url), "utf8");
const formComponent = await readFile(
  new URL("../src/components/InlineLeadForm.tsx", import.meta.url),
  "utf8",
);

test("the audit campaign asks which business should be reviewed", () => {
  assert.match(auditPage, /source="audit_page"/);
  assert.match(auditPage, /collectCompany/);
  assert.match(auditPage, /companyLabel="Business name"/);
  assert.doesNotMatch(auditPage, /companyRequired/);
});

test("the shared form sends company while keeping the field opt in", () => {
  assert.match(formComponent, /collectCompany = false/);
  assert.match(formComponent, /company: ""/);
  assert.match(formComponent, /\{collectCompany && \(/);
  assert.match(formComponent, /name="company"/);
  assert.doesNotMatch(formComponent, /companyRequired/);
  assert.match(formComponent, /autoComplete="organization"/);
});

test("no non-audit page opts into the campaign qualification field", async () => {
  const inlineFormPages = [];

  for (const filename of await pageFiles(appRoot)) {
    const source = await readFile(filename, "utf8");
    if (!source.includes("InlineLeadForm")) continue;
    inlineFormPages.push(path.relative(appRoot, filename));
    if (path.normalize(filename) === path.join(appRoot, "audit", "page.tsx")) continue;
    assert.doesNotMatch(source, /collectCompany|companyRequired/, filename);
  }

  assert.equal(inlineFormPages.length, 16);
});
