import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const source = await readFile(new URL("../src/app/case-studies/page.tsx", import.meta.url), "utf8");

test("case-study hub leads with documented work instead of generalized outcome claims", () => {
  assert.match(source, /The work behind stronger marketing systems\./);
  assert.match(source, /what we found, what we changed, how we verified it/);
  assert.doesNotMatch(source, /Verified client outcomes/);
  assert.doesNotMatch(source, /Want results like these/);
});

test("founder history is not presented as a Sequoia client revenue result", () => {
  assert.match(source, /It is founder\s+background, not a Sequoia GEO client result\./);
  assert.doesNotMatch(source, /Annual revenue at exit/);
  assert.doesNotMatch(source, /Every\s+strategy deployed for clients was tested here first/);
});

test("commercial-looking client tiles describe controllable work", () => {
  assert.match(source, /Conversion definitions rebuilt/);
  assert.match(source, /Advertising spend reviewed/);
  assert.match(source, /Co-op funding documented/);
  assert.match(source, /Weekly operating meeting/);
});

test("testimonial context does not convert client financial statements into verified results", () => {
  assert.match(source, /Financial statements in the\s+video are the client&rsquo;s account/);
  assert.match(source, /not presented here as verified\s+Sequoia GEO results/);
});
