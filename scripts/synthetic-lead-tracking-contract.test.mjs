import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import {
  acceptedCaptureNeedsTrackingAlert,
  dispatchCapturedLead,
  isSyntheticAttributionTest,
  LEAD_MEASUREMENT_CONTRACT,
  shouldTrackCapturedLead,
} from "../src/lib/lead-capture-policy.mjs";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

async function readRepoFile(relativePath) {
  return readFile(path.join(repoRoot, relativePath), "utf8");
}

async function listSourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await listSourceFiles(fullPath)));
    else if (/\.(?:ts|tsx|js|jsx|mjs)$/.test(entry.name)) files.push(fullPath);
  }
  return files;
}

test("synthetic attribution classification uses reserved values", () => {
  assert.equal(
    isSyntheticAttributionTest({
      name: "Internal Attribution QA Replay",
      email: "replay@example.com",
      phone: "(555) 010-2416",
    }),
    true,
  );
  assert.equal(
    isSyntheticAttributionTest({
      name: "Internal Attribution QA Guide",
      email: "guide@example.com",
    }),
    true,
  );
  assert.equal(
    isSyntheticAttributionTest({
      name: "Internal Attribution QA Replay",
      email: "replay@example.com",
      phone: "559-555-1212",
    }),
    false,
  );
  assert.equal(
    isSyntheticAttributionTest({
      name: "A Real Person",
      email: "person@example.com",
      phone: "555-010-2416",
    }),
    false,
  );
});

test("lead conversion tracking fails closed unless every server field is explicit", () => {
  const valid = {
    success: true,
    captured: true,
    leadId: "lead-123",
    isSyntheticTest: false,
  };
  assert.equal(shouldTrackCapturedLead(valid), true);

  for (const response of [
    { ...valid, success: undefined },
    { ...valid, captured: false },
    { ...valid, captured: undefined },
    { ...valid, captured: "true" },
    { ...valid, leadId: "" },
    { ...valid, leadId: "   " },
    { ...valid, leadId: undefined },
    { ...valid, isSyntheticTest: true },
    { ...valid, isSyntheticTest: undefined },
    { ...valid, isSyntheticTest: null },
    { ...valid, isSyntheticTest: "false" },
    {},
    null,
  ]) {
    assert.equal(shouldTrackCapturedLead(response), false, JSON.stringify(response));
  }
});

test("accepted but malformed capture responses emit a measurement alert", () => {
  assert.equal(
    acceptedCaptureNeedsTrackingAlert({
      success: true,
      captured: true,
      leadId: "lead-123",
      isSyntheticTest: false,
    }),
    false,
  );
  assert.equal(
    acceptedCaptureNeedsTrackingAlert({ success: true, captured: true, leadId: "lead-123" }),
    true,
  );
  assert.equal(
    acceptedCaptureNeedsTrackingAlert({
      success: true,
      captured: true,
      leadId: "lead-123",
      isSyntheticTest: true,
    }),
    false,
  );
  assert.equal(acceptedCaptureNeedsTrackingAlert({ success: true }), false);
});

test("every accepted capture API returns the fail-closed tracking contract", async () => {
  for (const relativePath of [
    "src/app/api/contact/route.ts",
    "src/app/api/guide-capture/route.ts",
    "src/app/api/calculator-lead/route.ts",
  ]) {
    const source = await readRepoFile(relativePath);
    assert.match(source, /isSyntheticAttributionTest\(\{/);
    assert.match(
      source,
      /NextResponse\.json\(\{\s*success:\s*true,\s*captured:\s*true,\s*leadId,\s*isSyntheticTest\s*\}\)/,
    );
    assert.match(source, /return NextResponse\.json\(\{ success: true \}\);/);
    assert.doesNotMatch(source, /body\.(?:captured|leadId|isSyntheticTest)/);
  }
});

test("accepted API responses require an internal notification or CRM record", async () => {
  const contact = await readRepoFile("src/app/api/contact/route.ts");
  const guide = await readRepoFile("src/app/api/guide-capture/route.ts");
  const calculator = await readRepoFile("src/app/api/calculator-lead/route.ts");

  assert.match(contact, /if \(notification\?\.error\)/);
  assert.match(guide, /if \(!landed\[1\] && !ghlCaptured\)/);
  assert.match(calculator, /if \(!notificationCaptured && !ghlCaptured\)/);
});

test("all capture clients use the single guarded analytics entry point", async () => {
  const expectedClients = [
    "src/components/InlineLeadForm.tsx",
    "src/components/ContactForm.tsx",
    "src/app/found-me-in-chatgpt/lead-form.tsx",
    "src/app/immanuel/lead-form.tsx",
    "src/app/ai-website-seo-guide/pdf-download.tsx",
    "src/app/lsa-guide/pdf-download.tsx",
    "src/app/csr-calculator/page.tsx",
    "src/app/marketing-leak-calculator/page.tsx",
  ];

  for (const relativePath of expectedClients) {
    const source = await readRepoFile(relativePath);
    assert.match(source, /trackCapturedLead\(result,/);
    assert.doesNotMatch(source, /\btrackLead\(/);
  }

  const sourceFiles = await listSourceFiles(path.join(repoRoot, "src"));
  for (const filename of sourceFiles) {
    const source = await readFile(filename, "utf8");
    assert.doesNotMatch(
      source,
      /\btrackLead\(/,
      `direct trackLead call found in ${path.relative(repoRoot, filename)}`,
    );
  }
});

test("the guarded analytics entry point delegates to the shared dispatcher", async () => {
  const source = await readRepoFile("src/lib/analytics.ts");
  assert.match(source, /return dispatchCapturedLead\(response, params, \{/);
  assert.match(source, /claimLead: claimLeadForBrowserSession,/);
  assert.match(source, /conversion: emitLeadConversion,/);
  assert.match(source, /event: trackEvent,/);
  assert.doesNotMatch(source, /export function emitLeadConversion/);
});

test("local source contains no lead conversion sink outside the analytics adapter", async () => {
  const sourceFiles = await listSourceFiles(path.join(repoRoot, "src"));
  let googleLeadCalls = 0;
  let openAiLeadCalls = 0;
  let dataLayerLeadPushes = 0;

  for (const filename of sourceFiles) {
    const source = await readFile(filename, "utf8");
    const relativePath = path.relative(repoRoot, filename).replaceAll("\\", "/");
    const googleMatches = source.match(
      /(?:window\.)?gtag\s*\(\s*["']event["']\s*,\s*["']generate_lead["']/g,
    ) ?? [];
    const openAiMatches = source.match(
      /(?:window\.)?oaiq\s*\(\s*["']measure["']\s*,\s*["']lead_created["']/g,
    ) ?? [];
    const dataLayerMatches = source.match(
      /dataLayer\.push\s*\(\s*\{[\s\S]*?event\s*:\s*["']generate_lead["']/g,
    ) ?? [];

    if (relativePath !== "src/lib/analytics.ts") {
      assert.equal(googleMatches.length, 0, `Google lead sink found in ${relativePath}`);
      assert.equal(openAiMatches.length, 0, `OpenAI lead sink found in ${relativePath}`);
      assert.equal(dataLayerMatches.length, 0, `dataLayer lead sink found in ${relativePath}`);
    }

    googleLeadCalls += googleMatches.length;
    openAiLeadCalls += openAiMatches.length;
    dataLayerLeadPushes += dataLayerMatches.length;
  }

  assert.equal(googleLeadCalls, 1);
  assert.equal(openAiLeadCalls, 1);
  assert.equal(dataLayerLeadPushes, 0);
});

function countingEmitters() {
  const calls = { conversion: [], events: [] };
  return {
    calls,
    emitters: {
      conversion: (measurement) => calls.conversion.push(measurement),
      event: (name, params) => calls.events.push({ name, params }),
    },
  };
}

const ACCEPTED = {
  success: true,
  captured: true,
  leadId: "runtime-fixture-lead",
  isSyntheticTest: false,
};

test("runtime fixture: the exact accepted response emits exactly one conversion", () => {
  const { calls, emitters } = countingEmitters();
  const tracked = dispatchCapturedLead(
    ACCEPTED,
    { source: "plumbing_seo_page", cta_contract: "intake" },
    emitters,
  );

  assert.equal(tracked, true);
  assert.equal(calls.conversion.length, 1);
  assert.equal(calls.conversion[0].lead_id, "runtime-fixture-lead");
  assert.equal(calls.conversion[0].source, "plumbing_seo_page");
  assert.equal(calls.conversion[0].measurement_contract, LEAD_MEASUREMENT_CONTRACT);
  assert.deepEqual(calls.events.map((event) => event.name), ["form_success"]);
  assert.equal(calls.events[0].params.measurement_contract, LEAD_MEASUREMENT_CONTRACT);
});

test("runtime fixture: the same accepted lead ID cannot emit twice in one browser session", () => {
  const { calls, emitters } = countingEmitters();
  const claimedLeadIds = new Set();
  const claimLead = (leadId) => {
    if (claimedLeadIds.has(leadId)) return false;
    claimedLeadIds.add(leadId);
    return true;
  };
  const guardedEmitters = { ...emitters, claimLead };
  const params = { source: "plumbing_seo_page", cta_contract: "intake" };

  assert.equal(dispatchCapturedLead(ACCEPTED, params, guardedEmitters), true);
  assert.equal(dispatchCapturedLead(ACCEPTED, params, guardedEmitters), false);
  assert.equal(calls.conversion.length, 1);
  assert.deepEqual(calls.events.map((event) => event.name), ["form_success"]);
});

test("runtime fixture: a legacy accepted response fails closed without an alert", () => {
  const { calls, emitters } = countingEmitters();
  const tracked = dispatchCapturedLead(
    { success: true, leadId: "legacy-lead" },
    { source: "contact_form", cta_contract: "intake" },
    emitters,
  );

  assert.equal(tracked, false);
  assert.equal(calls.conversion.length, 0);
  assert.equal(calls.events.length, 0);
});

test("runtime fixture: malformed and synthetic responses emit zero conversions", () => {
  const variants = [
    { ...ACCEPTED, isSyntheticTest: true },
    { ...ACCEPTED, isSyntheticTest: undefined },
    { ...ACCEPTED, isSyntheticTest: "false" },
    { ...ACCEPTED, captured: false },
    { ...ACCEPTED, captured: "true" },
    { ...ACCEPTED, captured: undefined },
    { ...ACCEPTED, leadId: "" },
    { ...ACCEPTED, leadId: "   " },
    { ...ACCEPTED, leadId: undefined },
    { ...ACCEPTED, success: undefined },
    { success: true },
    {},
    null,
    undefined,
    "success",
  ];

  for (const response of variants) {
    const { calls, emitters } = countingEmitters();
    const tracked = dispatchCapturedLead(
      response,
      { source: "plumbing_seo_page", cta_contract: "intake" },
      emitters,
    );

    assert.equal(tracked, false, JSON.stringify(response));
    assert.equal(calls.conversion.length, 0, JSON.stringify(response));
    assert.equal(
      calls.events.filter((event) => event.name === "form_success").length,
      0,
      JSON.stringify(response),
    );
  }
});

test("runtime fixture: accepted but malformed responses emit only the alert", () => {
  const { calls, emitters } = countingEmitters();
  dispatchCapturedLead(
    { success: true, captured: true, leadId: "lead-123" },
    { source: "contact_form", cta_contract: "intake" },
    emitters,
  );

  assert.equal(calls.conversion.length, 0);
  assert.deepEqual(calls.events.map((event) => event.name), [
    "form_response_untrackable_capture",
  ]);
  assert.equal(calls.events[0].params.measurement_contract, LEAD_MEASUREMENT_CONTRACT);
});

test("sitewide tracker captures phone intent and exact booking fragments", async () => {
  const source = await readRepoFile("src/components/SitewideIntentTracker.tsx");
  assert.match(source, /if \(href\.startsWith\("tel:"\)\) \{/);
  assert.match(source, /trackCallIntent\(source\);/);
  assert.match(source, /link\.hash === "#book"/);
  assert.match(source, /link\.hash === "#contact"/);
  assert.doesNotMatch(source, /href\.includes\("#(?:book|contact)"\)/);
});
