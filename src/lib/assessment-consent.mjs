export const MARKETING_EMAIL_CONSENT_TEXT = "Yes, send me occasional Sequoia GEO emails about AI search and website marketing. I can unsubscribe at any time.";
export const MARKETING_EMAIL_CONSENT_VERSION = "2026-09-14";

export function assessmentMarketingConsent(value, now = new Date()) {
  return {
    granted: value === true,
    recordedAt: now.toISOString(),
    version: MARKETING_EMAIL_CONSENT_VERSION,
    text: MARKETING_EMAIL_CONSENT_TEXT,
  };
}
