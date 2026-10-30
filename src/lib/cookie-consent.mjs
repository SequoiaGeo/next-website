export const CONSENT_KEY = "cookie_consent";
export const CONSENT_VERSION = 2;
export const CONSENT_DURATION_MS = 180 * 24 * 60 * 60 * 1000;
export function parseConsent(raw, now = Date.now()) {
  try {
    const v = JSON.parse(raw);
    return v?.version === CONSENT_VERSION && ["accepted", "declined"].includes(v.choice) && Number.isFinite(v.expiresAt) && v.expiresAt > now && v.expiresAt <= now + CONSENT_DURATION_MS ? v.choice : null;
  } catch { return null; }
}
export function serializeConsent(choice, now = Date.now()) {
  if (!["accepted", "declined"].includes(choice)) throw new Error("Invalid consent choice");
  return JSON.stringify({ version: CONSENT_VERSION, choice, expiresAt: now + CONSENT_DURATION_MS });
}
export function isTrackingCookie(name) {
  return /^(?:_ga(?:_|$)|_gid$|_gat(?:_|$)|_gcl_|_clck$|_clsk$|_fbp$|_fbc$)/.test(name);
}
