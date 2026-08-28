import assert from "node:assert/strict";
import { test } from "node:test";
import { captureWebsiteLead } from "../src/lib/highlevel-lead-capture.mjs";

const DIRECT_ENV = {
  HIGHLEVEL_PRIVATE_INTEGRATION_TOKEN: "pit_test_secret_value",
  HIGHLEVEL_LOCATION_ID: "location_test",
};

const BASE_INPUT = {
  leadId: "11111111-2222-4333-8444-555555555555",
  captureKind: "contact",
  firstName: "Lead",
  lastName: "Example",
  email: "Lead@example.com",
  phone: "559-555-1212",
  companyName: "Example Company",
  source: "audit_page",
  campaign: {
    utm_source: "facebook",
    utm_medium: "organic_social",
    utm_campaign: "public_surface_audit_august",
    landing_path: "/audit",
  },
  ai: null,
  reportedDiscovery: {
    discovery_source: "ai_assistant",
    ai_assistant: "chatgpt",
    ai_question: "Who can help my company show up in AI search?",
  },
  smsConsent: false,
  isSyntheticTest: false,
};

function jsonResponse(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function quietLogger(logs = []) {
  return {
    error(...args) {
      logs.push(args.map(String).join(" "));
    },
  };
}

test("uses the legacy webhook only when direct credentials are entirely absent", async () => {
  const calls = [];
  const result = await captureWebsiteLead(BASE_INPUT, {
    env: {},
    legacyWebhookUrl: "https://legacy.invalid/lead",
    legacyWebhookPayload: { leadId: BASE_INPUT.leadId },
    fetchImpl: async (url, init) => {
      calls.push({ url, init });
      return new Response(null, { status: 200 });
    },
  });

  assert.equal(result.configured, false);
  assert.equal(result.durable, true);
  assert.equal(result.status, "legacy_webhook");
  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, "https://legacy.invalid/lead");
});

test("rejects partial direct configuration and never guesses with the webhook", async () => {
  const calls = [];
  const result = await captureWebsiteLead(BASE_INPUT, {
    env: { HIGHLEVEL_PRIVATE_INTEGRATION_TOKEN: "pit_only" },
    legacyWebhookUrl: "https://legacy.invalid/lead",
    legacyWebhookPayload: { leadId: BASE_INPUT.leadId },
    fetchImpl: async (...args) => {
      calls.push(args);
      return new Response(null, { status: 200 });
    },
    logger: quietLogger(),
  });

  assert.equal(result.configured, true);
  assert.equal(result.durable, false);
  assert.equal(result.status, "configuration_error");
  assert.equal(calls.length, 0);
});

test("matches by exact normalized email and fills only blank standard fields", async () => {
  const calls = [];
  const fetchImpl = async (url, init = {}) => {
    calls.push({ url, init });
    const parsed = new URL(url);
    if (parsed.pathname === "/contacts/" && init.method === undefined) {
      assert.equal(parsed.searchParams.get("query"), "lead@example.com");
      return jsonResponse({ contacts: [{ id: "contact_1", email: "LEAD@example.com" }] });
    }
    if (parsed.pathname === "/contacts/contact_1" && init.method === undefined) {
      return jsonResponse({
        contact: {
          id: "contact_1",
          email: "lead@example.com",
          firstName: "Owner edited name",
          lastName: "",
          phone: "existing phone",
          companyName: "Existing Company",
          source: "referral",
          dnd: true,
        },
      });
    }
    if (parsed.pathname === "/contacts/contact_1" && init.method === "PUT") {
      return jsonResponse({ contact: { id: "contact_1" } });
    }
    if (parsed.pathname === "/contacts/contact_1/notes" && init.method === undefined) {
      return jsonResponse({ notes: [] });
    }
    if (parsed.pathname === "/contacts/contact_1/notes" && init.method === "POST") {
      return jsonResponse({ note: { id: "note_1" } }, 201);
    }
    throw new Error(`Unexpected request ${init.method || "GET"} ${url}`);
  };

  const result = await captureWebsiteLead(BASE_INPUT, {
    env: DIRECT_ENV,
    fetchImpl,
    now: () => new Date("2026-08-15T12:00:00.000Z"),
    legacyWebhookUrl: "https://legacy.invalid/lead",
    legacyWebhookPayload: { leadId: BASE_INPUT.leadId },
  });

  assert.equal(result.durable, true);
  assert.equal(result.status, "recorded");
  assert.equal(result.contactStatus, "matched");
  const update = calls.find((call) => call.init.method === "PUT");
  assert.deepEqual(JSON.parse(update.init.body), { lastName: "Example" });
  assert.equal(update.init.headers.Authorization, `Bearer ${DIRECT_ENV.HIGHLEVEL_PRIVATE_INTEGRATION_TOKEN}`);
  assert.ok(!calls.some((call) => call.url === "https://legacy.invalid/lead"));
});

test("creates a standard contact without tags, DND changes, opportunities, or raw lead details in the note", async () => {
  const calls = [];
  const fetchImpl = async (url, init = {}) => {
    calls.push({ url, init });
    const parsed = new URL(url);
    if (parsed.pathname === "/contacts/" && init.method === undefined) {
      return jsonResponse({ contacts: [] });
    }
    if (parsed.pathname === "/contacts/" && init.method === "POST") {
      return jsonResponse({ contact: { id: "created_1" } }, 201);
    }
    if (parsed.pathname === "/contacts/created_1/notes" && init.method === undefined) {
      return jsonResponse({ notes: [] });
    }
    if (parsed.pathname === "/contacts/created_1/notes" && init.method === "POST") {
      return jsonResponse({ note: { id: "note_1" } }, 201);
    }
    throw new Error(`Unexpected request ${init.method || "GET"} ${url}`);
  };

  const result = await captureWebsiteLead({ ...BASE_INPUT, source: "sequoia_knowledge_interface" }, {
    env: DIRECT_ENV,
    fetchImpl,
    now: () => new Date("2026-08-15T12:00:00.000Z"),
  });
  assert.equal(result.durable, true);
  assert.equal(result.contactStatus, "created");

  const create = calls.find((call) => new URL(call.url).pathname === "/contacts/" && call.init.method === "POST");
  const createBody = JSON.parse(create.init.body);
  assert.deepEqual(createBody, {
    locationId: "location_test",
    firstName: "Lead",
    lastName: "Example",
    email: "lead@example.com",
    source: "sequoia_knowledge_interface",
    phone: "559-555-1212",
    companyName: "Example Company",
  });
  assert.equal("tags" in createBody, false);
  assert.equal("dnd" in createBody, false);
  assert.equal("opportunity" in createBody, false);

  const note = calls.find((call) => new URL(call.url).pathname.endsWith("/notes") && call.init.method === "POST");
  const noteBody = JSON.parse(note.init.body).body;
  assert.match(noteBody, /lead_id: 11111111-2222-4333-8444-555555555555/);
  assert.match(noteBody, /campaign: facebook \/ organic_social \/ public_surface_audit_august/);
  assert.match(noteBody, /reported_discovery_source: ai_assistant/);
  assert.match(noteBody, /reported_ai_assistant: chatgpt/);
  assert.match(noteBody, /reported_ai_question: Who can help my company show up in AI search\?/);
  assert.doesNotMatch(noteBody, /Lead@example\.com/i);
  assert.doesNotMatch(noteBody, /559-555-1212/);
  assert.doesNotMatch(noteBody, /Example Company/);
});

test("does not mutate when more than one exact email match exists", async () => {
  const calls = [];
  const result = await captureWebsiteLead(BASE_INPUT, {
    env: DIRECT_ENV,
    fetchImpl: async (url, init = {}) => {
      calls.push({ url, init });
      return jsonResponse({
        contacts: [
          { id: "one", email: "lead@example.com" },
          { id: "two", email: "LEAD@example.com" },
        ],
      });
    },
    legacyWebhookUrl: "https://legacy.invalid/lead",
    logger: quietLogger(),
  });

  assert.equal(result.durable, false);
  assert.equal(result.status, "ambiguous_contact");
  assert.equal(calls.length, 1);
  assert.equal(calls[0].init.method, undefined);
});

test("a direct timeout never falls back to the legacy webhook", async () => {
  const calls = [];
  const result = await captureWebsiteLead(BASE_INPUT, {
    env: DIRECT_ENV,
    fetchImpl: async (url) => {
      calls.push(url);
      throw new Error("timeout fixture");
    },
    legacyWebhookUrl: "https://legacy.invalid/lead",
    legacyWebhookPayload: { leadId: BASE_INPUT.leadId },
    logger: quietLogger(),
  });

  assert.equal(result.durable, false);
  assert.equal(result.status, "direct_error");
  assert.equal(calls.length, 1);
  assert.notEqual(calls[0], "https://legacy.invalid/lead");
});

test("a note failure is not claimed as durable CRM capture", async () => {
  const result = await captureWebsiteLead(BASE_INPUT, {
    env: DIRECT_ENV,
    fetchImpl: async (url, init = {}) => {
      const parsed = new URL(url);
      if (parsed.pathname === "/contacts/" && init.method === undefined) {
        return jsonResponse({ contacts: [{ id: "contact_1", email: "lead@example.com" }] });
      }
      if (parsed.pathname === "/contacts/contact_1" && init.method === undefined) {
        return jsonResponse({ contact: { id: "contact_1", email: "lead@example.com" } });
      }
      if (parsed.pathname === "/contacts/contact_1" && init.method === "PUT") {
        return jsonResponse({ contact: { id: "contact_1" } });
      }
      if (parsed.pathname.endsWith("/notes") && init.method === undefined) {
        return jsonResponse({ notes: [] });
      }
      if (parsed.pathname.endsWith("/notes") && init.method === "POST") {
        return jsonResponse({ message: "fixture failure" }, 503);
      }
      throw new Error(`Unexpected request ${init.method || "GET"} ${url}`);
    },
    logger: quietLogger(),
  });

  assert.equal(result.durable, false);
  assert.equal(result.status, "direct_error");
});

test("sequential replay of the same lead ID does not append a duplicate note", async () => {
  const notes = [];
  let noteCreates = 0;
  const fetchImpl = async (url, init = {}) => {
    const parsed = new URL(url);
    if (parsed.pathname === "/contacts/" && init.method === undefined) {
      return jsonResponse({ contacts: [{ id: "contact_1", email: "lead@example.com" }] });
    }
    if (parsed.pathname === "/contacts/contact_1" && init.method === undefined) {
      return jsonResponse({
        contact: {
          id: "contact_1",
          email: "lead@example.com",
          firstName: "Lead",
          lastName: "Example",
          phone: "559-555-1212",
          companyName: "Example Company",
        },
      });
    }
    if (parsed.pathname.endsWith("/notes") && init.method === undefined) {
      return jsonResponse({ notes });
    }
    if (parsed.pathname.endsWith("/notes") && init.method === "POST") {
      noteCreates += 1;
      notes.push({ id: `note_${noteCreates}`, body: JSON.parse(init.body).body });
      return jsonResponse({ note: notes.at(-1) }, 201);
    }
    throw new Error(`Unexpected request ${init.method || "GET"} ${url}`);
  };

  const first = await captureWebsiteLead(BASE_INPUT, { env: DIRECT_ENV, fetchImpl });
  const second = await captureWebsiteLead(BASE_INPUT, { env: DIRECT_ENV, fetchImpl });
  assert.equal(first.status, "recorded");
  assert.equal(second.status, "already_recorded");
  assert.equal(noteCreates, 1);
});

test("the private token never appears in logs or returned state", async () => {
  const logs = [];
  const result = await captureWebsiteLead(BASE_INPUT, {
    env: DIRECT_ENV,
    fetchImpl: async () => {
      throw new Error(`do not log ${DIRECT_ENV.HIGHLEVEL_PRIVATE_INTEGRATION_TOKEN}`);
    },
    logger: quietLogger(logs),
  });

  const observable = JSON.stringify({ result, logs });
  assert.doesNotMatch(observable, new RegExp(DIRECT_ENV.HIGHLEVEL_PRIVATE_INTEGRATION_TOKEN));
});

