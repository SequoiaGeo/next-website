const HIGHLEVEL_API_BASE = "https://services.leadconnectorhq.com";
const HIGHLEVEL_API_VERSION = "2021-07-28";
const REQUEST_TIMEOUT_MS = 4500;

const CAPTURE_KINDS = new Set(["contact", "guide", "calculator"]);
const FORM_SOURCES = new Set([
  "contact_form",
  "sequoia_knowledge_interface",
  "homepage_top",
  "audit_page",
  "hvac_seo_page",
  "plumbing_seo_page",
  "roofing_seo_page",
  "hvac_marketing_page",
  "best_plumbing_agencies_midlist",
  "how_much_does_seo_cost_for_contractors",
  "how_much_should_plumbers_spend_on_marketing",
  "how_much_should_hvac_companies_spend_on_marketing",
  "how_much_do_hvac_plumbing_leads_cost",
  "lsa_statistics_page",
  "hvac_statistics_page",
  "plumbing_statistics_page",
  "google_lsa_changes_2026",
  "chatgpt_lp_form",
  "immanuel_lp_form",
  "ai_seo_guide",
  "lsa_guide",
  "marketing_leak_calculator",
  "csr_calculator",
]);

class HighLevelRequestError extends Error {
  constructor(operation, status = 0) {
    super(`${operation} failed${status ? ` with status ${status}` : ""}`);
    this.name = "HighLevelRequestError";
    this.operation = operation;
    this.status = status;
  }
}

function cleanText(value, maxLength) {
  return String(value || "").trim().slice(0, maxLength);
}

function cleanLabel(value, maxLength = 120) {
  return String(value || "")
    .trim()
    .replace(/[^a-zA-Z0-9 ._/-]/g, "")
    .slice(0, maxLength);
}

function cleanPath(value) {
  const cleaned = cleanLabel(value, 200);
  if (!cleaned) return "";
  return cleaned.startsWith("/") ? cleaned : `/${cleaned}`;
}

function normalizeEmail(value) {
  return cleanText(value, 254).toLowerCase();
}

function isBlank(value) {
  return value === undefined || value === null || String(value).trim() === "";
}

function firstNonemptyObject(value) {
  if (!value || typeof value !== "object") return {};
  return value;
}

function contactFromResponse(payload) {
  return firstNonemptyObject(payload?.contact || payload);
}

function contactsFromResponse(payload) {
  return Array.isArray(payload?.contacts) ? payload.contacts : [];
}

function notesFromResponse(payload) {
  return Array.isArray(payload?.notes) ? payload.notes : [];
}

function evidenceNote(input, now) {
  const campaign = input.campaign || {};
  const ai = input.ai || {};
  const reportedDiscovery = input.reportedDiscovery || {};
  const lines = [
    "Sequoia website capture",
    `lead_id: ${cleanLabel(input.leadId, 64)}`,
    `captured_at: ${now().toISOString()}`,
    `record_type: ${input.isSyntheticTest ? "synthetic_test" : "website_submission"}`,
    `capture_kind: ${CAPTURE_KINDS.has(input.captureKind) ? input.captureKind : "contact"}`,
    `form_source: ${FORM_SOURCES.has(input.source) ? input.source : "contact_form"}`,
  ];

  const campaignLine = [
    cleanLabel(campaign.utm_source),
    cleanLabel(campaign.utm_medium),
    cleanLabel(campaign.utm_campaign),
    cleanLabel(campaign.utm_content),
  ].filter(Boolean).join(" / ");
  if (campaignLine) lines.push(`campaign: ${campaignLine}`);

  const landingPath = cleanPath(campaign.landing_path || input.landingPath);
  if (landingPath) lines.push(`landing_path: ${landingPath}`);

  const aiLine = [cleanLabel(ai.ai_engine_source), cleanLabel(ai.referrer_host)].filter(Boolean).join(" / ");
  if (aiLine) lines.push(`ai_referral: ${aiLine}`);

  const reportedSource = cleanLabel(reportedDiscovery.discovery_source, 60);
  if (reportedSource) lines.push(`reported_discovery_source: ${reportedSource}`);
  const reportedAssistant = cleanLabel(reportedDiscovery.ai_assistant, 60);
  if (reportedAssistant) lines.push(`reported_ai_assistant: ${reportedAssistant}`);
  const reportedQuestion = cleanText(reportedDiscovery.ai_question, 500)
    .replace(/[\r\n]+/g, " ")
    .replace(/\s+/g, " ");
  if (reportedQuestion) lines.push(`reported_ai_question: ${reportedQuestion}`);

  if (input.smsConsent === true) lines.push("sms_consent: granted");
  else if (input.smsConsent === false) lines.push("sms_consent: not_granted");
  else lines.push("sms_consent: not_collected");

  return lines.join("\n");
}

function directConfiguration(env) {
  const token = cleanText(env.HIGHLEVEL_PRIVATE_INTEGRATION_TOKEN, 4096);
  const locationId = cleanText(env.HIGHLEVEL_LOCATION_ID, 200);
  if (!token && !locationId) return { mode: "legacy" };
  if (!token || !locationId) return { mode: "invalid" };
  return { mode: "direct", token, locationId };
}

function createHighLevelClient({ fetchImpl, token, timeoutMs }) {
  const deadline = Date.now() + timeoutMs;

  async function request(operation, path, init = {}) {
    let response;
    try {
      const remainingMs = Math.max(1, deadline - Date.now());
      response = await fetchImpl(`${HIGHLEVEL_API_BASE}${path}`, {
        ...init,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          Version: HIGHLEVEL_API_VERSION,
          ...(init.body ? { "Content-Type": "application/json" } : {}),
          ...(init.headers || {}),
        },
        signal: AbortSignal.timeout(remainingMs),
      });
    } catch {
      throw new HighLevelRequestError(operation);
    }

    if (!response.ok) throw new HighLevelRequestError(operation, response.status);
    if (response.status === 204) return null;
    try {
      return await response.json();
    } catch {
      return null;
    }
  }

  return { request };
}

async function findExactContacts(client, locationId, email) {
  const params = new URLSearchParams({
    locationId,
    query: email,
    limit: "100",
  });
  const payload = await client.request("contact search", `/contacts/?${params.toString()}`);
  return contactsFromResponse(payload).filter(
    (contact) => normalizeEmail(contact?.email) === email,
  );
}

async function createOrFindContact(client, locationId, input) {
  const email = normalizeEmail(input.email);
  const exact = await findExactContacts(client, locationId, email);
  if (exact.length > 1) return { status: "ambiguous_contact" };

  if (exact.length === 1) {
    const contactId = cleanText(exact[0]?.id, 200);
    if (!contactId) throw new HighLevelRequestError("contact search");
    const payload = await client.request("contact read", `/contacts/${encodeURIComponent(contactId)}`);
    const contact = contactFromResponse(payload);
    const updates = {};
    if (isBlank(contact.firstName) && input.firstName) updates.firstName = cleanText(input.firstName, 100);
    if (isBlank(contact.lastName) && input.lastName) updates.lastName = cleanText(input.lastName, 100);
    if (isBlank(contact.phone) && input.phone) updates.phone = cleanText(input.phone, 30);
    if (isBlank(contact.companyName) && input.companyName) updates.companyName = cleanText(input.companyName, 200);
    if (Object.keys(updates).length) {
      await client.request("contact update", `/contacts/${encodeURIComponent(contactId)}`, {
        method: "PUT",
        body: JSON.stringify(updates),
      });
    }
    return { status: "matched", contactId };
  }

  const createBody = {
    locationId,
    firstName: cleanText(input.firstName, 100),
    lastName: cleanText(input.lastName, 100),
    email,
    source: FORM_SOURCES.has(input.source) ? input.source : "contact_form",
  };
  if (input.phone) createBody.phone = cleanText(input.phone, 30);
  if (input.companyName) createBody.companyName = cleanText(input.companyName, 200);

  try {
    const payload = await client.request("contact create", "/contacts/", {
      method: "POST",
      body: JSON.stringify(createBody),
    });
    const contactId = cleanText(payload?.contact?.id || payload?.id, 200);
    if (!contactId) throw new HighLevelRequestError("contact create");
    return { status: "created", contactId };
  } catch (error) {
    // A duplicate-rule conflict, validation race, or lost response may still have
    // created the contact. One read-only recheck is safe. Never repeat the create.
    const retryMatches = await findExactContacts(client, locationId, email);
    if (retryMatches.length === 1 && retryMatches[0]?.id) {
      return { status: "matched_after_create_error", contactId: cleanText(retryMatches[0].id, 200) };
    }
    if (retryMatches.length > 1) return { status: "ambiguous_contact" };
    throw error;
  }
}

async function appendEvidenceNote(client, contactId, input, now) {
  const marker = `lead_id: ${cleanLabel(input.leadId, 64)}`;
  const payload = await client.request(
    "note search",
    `/contacts/${encodeURIComponent(contactId)}/notes`,
  );
  const alreadyRecorded = notesFromResponse(payload).some((note) =>
    String(note?.body || "").includes(marker),
  );
  if (alreadyRecorded) return "already_recorded";

  await client.request("note create", `/contacts/${encodeURIComponent(contactId)}/notes`, {
    method: "POST",
    body: JSON.stringify({ body: evidenceNote(input, now) }),
  });
  return "recorded";
}

async function legacyWebhookCapture(url, payload, fetchImpl, timeoutMs) {
  if (!url) return false;
  try {
    const response = await fetchImpl(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: AbortSignal.timeout(timeoutMs),
      body: JSON.stringify(payload),
    });
    return response.ok;
  } catch {
    return false;
  }
}

export async function captureWebsiteLead(input, options = {}) {
  const env = options.env || process.env;
  const fetchImpl = options.fetchImpl || globalThis.fetch;
  const logger = options.logger || console;
  const now = options.now || (() => new Date());
  const timeoutMs = options.timeoutMs || REQUEST_TIMEOUT_MS;
  const config = directConfiguration(env);

  if (config.mode === "legacy") {
    const durable = await legacyWebhookCapture(
      options.legacyWebhookUrl,
      options.legacyWebhookPayload,
      fetchImpl,
      timeoutMs,
    );
    return {
      configured: false,
      durable,
      status: durable ? "legacy_webhook" : "not_configured",
    };
  }

  if (config.mode === "invalid") {
    logger.error(`[highlevel] incomplete direct configuration for lead ${cleanLabel(input.leadId, 64)}`);
    return { configured: true, durable: false, status: "configuration_error" };
  }

  try {
    const client = createHighLevelClient({
      fetchImpl,
      token: config.token,
      timeoutMs,
    });
    const contact = await createOrFindContact(client, config.locationId, input);
    if (contact.status === "ambiguous_contact") {
      logger.error(`[highlevel] ambiguous email match for lead ${cleanLabel(input.leadId, 64)}`);
      return { configured: true, durable: false, status: contact.status };
    }
    const noteStatus = await appendEvidenceNote(client, contact.contactId, input, now);
    return {
      configured: true,
      durable: true,
      status: noteStatus,
      contactStatus: contact.status,
    };
  } catch (error) {
    const operation = error instanceof HighLevelRequestError ? error.operation : "direct capture";
    const status = error instanceof HighLevelRequestError ? error.status : 0;
    logger.error(
      `[highlevel] ${operation} failed${status ? ` with status ${status}` : ""} for lead ${cleanLabel(input.leadId, 64)}`,
    );
    // Never fall back to the webhook after direct mode starts. A timeout may be
    // a committed write with a lost response, so a second path could duplicate it.
    return { configured: true, durable: false, status: "direct_error" };
  }
}
