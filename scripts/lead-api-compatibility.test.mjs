import assert from "node:assert/strict";
import path from "node:path";
import { after, before, test } from "node:test";
import { fileURLToPath, pathToFileURL } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const originalFetch = globalThis.fetch;
const originalResendKey = process.env.RESEND_API_KEY;
const originalWebhookUrl = process.env.GHL_WEBHOOK_URL;
const outboundCalls = [];
let deliveryMode = "success";

const LEGACY_CASES = [
  {
    routePath: ["api", "contact"],
    body: {
      name: "Legacy Contact Fixture",
      phone: "559-555-1212",
      email: "legacy-contact@invalid.example",
      company: "Fixture Company",
      message: "Compatibility fixture",
      smsConsent: false,
      website: "",
      renderedAt: 0,
    },
  },
  {
    routePath: ["api", "guide-capture"],
    body: {
      name: "Legacy Guide Fixture",
      email: "legacy-guide@invalid.example",
      source: "ai_seo_guide",
      website: "",
      renderedAt: 0,
    },
  },
  {
    routePath: ["api", "calculator-lead"],
    body: {
      name: "Legacy Calculator Fixture",
      email: "legacy-calculator@invalid.example",
      phone: "559-555-1212",
      source: "marketing_leak_calculator",
      monthlySpend: 1000,
      monthlyCalls: 20,
      bookingRate: 50,
      avgTicket: 500,
      currentRevenue: 5000,
      annualGap: 12000,
      website: "",
      renderedAt: 0,
    },
  },
];

before(() => {
  process.env.RESEND_API_KEY = "re_contract_test";
  process.env.GHL_WEBHOOK_URL = "https://ghl.invalid.test/lead";
  globalThis.fetch = async (input, init) => {
    const url = typeof input === "string" ? input : input.url;
    outboundCalls.push({ url, init });

    if (url.startsWith("https://api.resend.com/")) {
      if (deliveryMode === "failure") {
        return new Response(JSON.stringify({ message: "fixture failure" }), {
          status: 503,
          headers: { "Content-Type": "application/json" },
        });
      }
      return new Response(JSON.stringify({ id: "stub-email-id" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
    if (url === process.env.GHL_WEBHOOK_URL) {
      return new Response(null, { status: deliveryMode === "success" ? 200 : 503 });
    }

    throw new Error(`Unexpected outbound request: ${url}`);
  };
});

after(() => {
  globalThis.fetch = originalFetch;
  if (originalResendKey === undefined) delete process.env.RESEND_API_KEY;
  else process.env.RESEND_API_KEY = originalResendKey;
  if (originalWebhookUrl === undefined) delete process.env.GHL_WEBHOOK_URL;
  else process.env.GHL_WEBHOOK_URL = originalWebhookUrl;
});

async function loadPostHandler(routePath) {
  const compiledPath = path.join(repoRoot, ".next", "server", "app", ...routePath, "route.js");
  const imported = await import(pathToFileURL(compiledPath).href);
  const compiledRoute = imported.default ?? imported["module.exports"];
  const handler = compiledRoute?.routeModule?.userland?.POST;
  assert.equal(typeof handler, "function", `Missing compiled POST handler: ${compiledPath}`);
  return handler;
}

async function invokeLegacyBody(routePath, body) {
  const post = await loadPostHandler(routePath);
  const response = await post(
    new Request(`https://www.sequoiageo.com/${routePath.join("/")}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }),
  );
  const payload = await response.json();
  return { payload, response };
}

async function postLegacyBody(routePath, body) {
  const { payload, response } = await invokeLegacyBody(routePath, body);
  assert.equal(response.status, 200, JSON.stringify(payload));
  assert.equal(payload.success, true);
  assert.equal(payload.captured, true);
  assert.equal(typeof payload.leadId, "string");
  assert.ok(payload.leadId.length > 0);
  assert.equal(payload.isSyntheticTest, false);
}

test("legacy request bodies remain accepted by all three compiled lead APIs", async () => {
  for (const fixture of LEGACY_CASES) {
    const callStart = outboundCalls.length;
    await postLegacyBody(fixture.routePath, fixture.body);
    const calls = outboundCalls.slice(callStart);
    assert.ok(calls.some((call) => call.url.startsWith("https://api.resend.com/")));
    assert.ok(calls.some((call) => call.url === process.env.GHL_WEBHOOK_URL));
  }
});

test("compiled APIs do not claim capture when every internal channel fails", async () => {
  deliveryMode = "failure";
  try {
    for (const fixture of LEGACY_CASES) {
      const { payload, response } = await invokeLegacyBody(fixture.routePath, fixture.body);
      assert.equal(response.status, 500);
      assert.notEqual(payload.captured, true);
    }
  } finally {
    deliveryMode = "success";
  }
});
