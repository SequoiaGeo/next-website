import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

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
  const otherInlineFormPages = [
    "../src/app/page.tsx",
    "../src/app/hvac-seo/page.tsx",
    "../src/app/plumbing-seo/page.tsx",
    "../src/app/roofing-seo/page.tsx",
  ];

  for (const relativePath of otherInlineFormPages) {
    const source = await readFile(new URL(relativePath, import.meta.url), "utf8");
    assert.doesNotMatch(source, /collectCompany|companyRequired/);
  }
});
