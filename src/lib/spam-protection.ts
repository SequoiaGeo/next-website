// Server-side spam / bot protection shared across lead-capture API routes.
// Layers: honeypot field, a submit-timing guard, and field validation +
// sanitization. Each layer is independent so a direct POST to the endpoint
// hits the same checks the browser form does.
//
// DESIGN RULE: a dropped real lead can cost a client worth thousands; a spam
// email costs seconds to delete. So every ambiguous case fails OPEN. The
// honeypot is the only near-zero-false-positive signal, so it is the only
// thing that silently discards a submission.

const MIN_SUBMIT_MS = 1500; // bots submit near-instantly; browser autofill makes humans fast too

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
 * Run honeypot, timing, and field validation against an incoming lead payload.
 */
export function checkLead(fields: LeadFields, now: number): SpamCheckResult {
  // 1. Honeypot: real users never see or fill this. Any value = bot. Drop silently.
  const honeypot = asString(fields.website);
  if (honeypot) {
    return { ok: false, silentDrop: true, reason: "honeypot filled" };
  }

  // 2. Timing: only enforced when the client sent a usable timestamp. A missing,
  //    stale, or skewed timestamp is an app/hydration/clock problem, NOT a bot
  //    signal, so it must never cost a real lead. Fail open in those cases.
  const renderedAt = Number(fields.renderedAt);
  if (Number.isFinite(renderedAt)) {
    const elapsed = now - renderedAt;
    if (elapsed >= 0 && elapsed < MIN_SUBMIT_MS) {
      return { ok: false, silentDrop: true, reason: `submitted too fast (${elapsed}ms)` };
    }
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
};

export type EmailLeadCheckResult =
  | { ok: true; clean: { name: string; email: string } }
  | { ok: false; silentDrop: true; reason: string }
  | { ok: false; silentDrop: false; reason: string };

/**
 * Honeypot, timing, and field validation for name+email-only lead magnets
 * (calculator breakdown, guide downloads). Same layers as checkLead minus
 * the phone/message fields those forms don't collect.
 */
export function checkEmailLead(fields: EmailLeadFields, now: number): EmailLeadCheckResult {
  // 1. Honeypot: any value = bot. Drop silently.
  const honeypot = asString(fields.website);
  if (honeypot) {
    return { ok: false, silentDrop: true, reason: "honeypot filled" };
  }

  // 2. Timing: enforced only when a usable timestamp arrives (see checkLead).
  const renderedAt = Number(fields.renderedAt);
  if (Number.isFinite(renderedAt)) {
    const elapsed = now - renderedAt;
    if (elapsed >= 0 && elapsed < MIN_SUBMIT_MS) {
      return { ok: false, silentDrop: true, reason: `submitted too fast (${elapsed}ms)` };
    }
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
