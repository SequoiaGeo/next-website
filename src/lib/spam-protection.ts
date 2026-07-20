// Server-side spam / bot protection shared across lead-capture API routes.
// Layers: honeypot field, submit-timing check, reCAPTCHA v3 token verification,
// and basic field validation + sanitization. Each layer is independent so a
// direct POST to the endpoint hits the same checks the browser form does.

const MIN_SUBMIT_MS = 3000; // bots fill+submit near-instantly; humans take a few seconds
const MAX_FORM_AGE_MS = 60 * 60 * 1000; // 1 hour, stale/forged timestamps get rejected

// Field length bounds. Generous enough for real leads, tight enough to stop dumps.
const LIMITS = {
  name: { min: 1, max: 100 },
  phone: { min: 7, max: 30 },
  email: { min: 5, max: 254 }, // 254 = max email length per RFC 5321
  message: { min: 0, max: 2000 },
} as const;

// Pragmatic email check. Not RFC-complete on purpose: rejects the obvious junk
// (no @, no dot, spaces) without bouncing unusual-but-valid real addresses.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type LeadFields = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  message?: unknown;
  smsConsent?: unknown;
  // anti-bot fields (not stored / not emailed)
  website?: unknown; // honeypot, must stay empty
  renderedAt?: unknown; // client epoch-ms when the form mounted
  recaptchaToken?: unknown; // reCAPTCHA v3 token
};

export type SpamCheckResult =
  | { ok: true; clean: { name: string; phone: string; email: string; message: string; smsConsent: boolean } }
  // silentDrop = looks like a bot; respond 200 so the bot gets no feedback, but don't send the lead.
  | { ok: false; silentDrop: true; reason: string }
  // hard validation failure, safe to surface a 400 to the real user.
  | { ok: false; silentDrop: false; reason: string };

/** Escape HTML so lead values can't inject markup into the notification email. */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Verify a reCAPTCHA v3 token with Google. Returns true when the token is valid
 * and scores above threshold. If no secret key is configured, verification is
 * skipped (returns true) so the form keeps working until keys are added, the
 * honeypot, timing, and validation layers still run regardless.
 */
export async function verifyRecaptcha(
  token: string,
  opts: { expectedAction?: string; minScore?: number; remoteIp?: string } = {}
): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.warn("[spam-protection] RECAPTCHA_SECRET_KEY not set, skipping captcha verification.");
    return true;
  }
  if (!token) return false;

  const { expectedAction, minScore = 0.5, remoteIp } = opts;

  try {
    const params = new URLSearchParams({ secret, response: token });
    if (remoteIp) params.set("remoteip", remoteIp);

    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });
    const data = (await res.json()) as {
      success?: boolean;
      score?: number;
      action?: string;
      "error-codes"?: string[];
    };

    if (!data.success) {
      console.warn("[spam-protection] reCAPTCHA failed:", data["error-codes"]);
      return false;
    }
    if (expectedAction && data.action && data.action !== expectedAction) {
      console.warn(`[spam-protection] reCAPTCHA action mismatch: got ${data.action}`);
      return false;
    }
    if (typeof data.score === "number" && data.score < minScore) {
      console.warn(`[spam-protection] reCAPTCHA low score: ${data.score}`);
      return false;
    }
    return true;
  } catch (err) {
    // Don't let a transient Google outage block real leads, fail open here,
    // since honeypot + timing already filtered the obvious bots.
    console.error("[spam-protection] reCAPTCHA verify error:", err);
    return true;
  }
}

/**
 * Run honeypot, timing, and field validation against an incoming lead payload.
 * Does NOT run reCAPTCHA (that's async/network, call verifyRecaptcha separately).
 */
export function checkLead(fields: LeadFields, now: number): SpamCheckResult {
  // 1. Honeypot: real users never see or fill this. Any value = bot. Drop silently.
  const honeypot = asString(fields.website);
  if (honeypot) {
    return { ok: false, silentDrop: true, reason: "honeypot filled" };
  }

  // 2. Timing: reject submissions that arrive impossibly fast or with a
  //    missing/forged/stale timestamp.
  const renderedAt = Number(fields.renderedAt);
  if (!Number.isFinite(renderedAt)) {
    return { ok: false, silentDrop: true, reason: "missing form timestamp" };
  }
  const elapsed = now - renderedAt;
  if (elapsed < MIN_SUBMIT_MS) {
    return { ok: false, silentDrop: true, reason: `submitted too fast (${elapsed}ms)` };
  }
  if (elapsed > MAX_FORM_AGE_MS || elapsed < 0) {
    return { ok: false, silentDrop: true, reason: "stale or invalid form timestamp" };
  }

  // 3. Validation + sanitization of the real fields.
  const name = asString(fields.name);
  const phone = asString(fields.phone);
  const email = asString(fields.email);
  const message = asString(fields.message);

  if (name.length < LIMITS.name.min || name.length > LIMITS.name.max) {
    return { ok: false, silentDrop: false, reason: "invalid name length" };
  }
  if (phone.length < LIMITS.phone.min || phone.length > LIMITS.phone.max) {
    return { ok: false, silentDrop: false, reason: "invalid phone length" };
  }
  if (email.length < LIMITS.email.min || email.length > LIMITS.email.max || !EMAIL_RE.test(email)) {
    return { ok: false, silentDrop: false, reason: "invalid email" };
  }
  if (message.length > LIMITS.message.max) {
    return { ok: false, silentDrop: false, reason: "message too long" };
  }
  // Phone should contain at least 7 digits (allows +, spaces, (), -).
  if ((phone.match(/\d/g) || []).length < 7) {
    return { ok: false, silentDrop: false, reason: "invalid phone" };
  }

  return {
    ok: true,
    clean: { name, phone, email, message, smsConsent: Boolean(fields.smsConsent) },
  };
}

export type EmailLeadFields = {
  name?: unknown;
  email?: unknown;
  // anti-bot fields (not stored / not emailed)
  website?: unknown; // honeypot, must stay empty
  renderedAt?: unknown; // client epoch-ms when the form mounted
  recaptchaToken?: unknown; // reCAPTCHA v3 token
};

export type EmailLeadCheckResult =
  | { ok: true; clean: { name: string; email: string } }
  | { ok: false; silentDrop: true; reason: string }
  | { ok: false; silentDrop: false; reason: string };

/**
 * Honeypot, timing, and field validation for name+email-only lead magnets
 * (calculator breakdown, guide downloads). Same layers as checkLead minus
 * the phone/message fields those forms don't collect. Does NOT run
 * reCAPTCHA, call verifyRecaptcha separately.
 */
export function checkEmailLead(fields: EmailLeadFields, now: number): EmailLeadCheckResult {
  // 1. Honeypot: any value = bot. Drop silently.
  const honeypot = asString(fields.website);
  if (honeypot) {
    return { ok: false, silentDrop: true, reason: "honeypot filled" };
  }

  // 2. Timing: reject impossibly fast or stale/forged timestamps.
  const renderedAt = Number(fields.renderedAt);
  if (!Number.isFinite(renderedAt)) {
    return { ok: false, silentDrop: true, reason: "missing form timestamp" };
  }
  const elapsed = now - renderedAt;
  if (elapsed < MIN_SUBMIT_MS) {
    return { ok: false, silentDrop: true, reason: `submitted too fast (${elapsed}ms)` };
  }
  if (elapsed > MAX_FORM_AGE_MS || elapsed < 0) {
    return { ok: false, silentDrop: true, reason: "stale or invalid form timestamp" };
  }

  // 3. Validation + sanitization.
  const name = asString(fields.name);
  const email = asString(fields.email);

  if (name.length < LIMITS.name.min || name.length > LIMITS.name.max) {
    return { ok: false, silentDrop: false, reason: "invalid name length" };
  }
  if (email.length < LIMITS.email.min || email.length > LIMITS.email.max || !EMAIL_RE.test(email)) {
    return { ok: false, silentDrop: false, reason: "invalid email" };
  }

  return { ok: true, clean: { name, email } };
}

export const SPAM_LIMITS = LIMITS;
