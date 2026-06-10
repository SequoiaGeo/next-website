// Client-side reCAPTCHA v3 helper shared by lead-capture forms.
// ContactForm.tsx declares the same Window.grecaptcha type; identical
// declarations merge, so both can coexist.

export const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

/**
 * Fetch a reCAPTCHA v3 token for the given action. Returns "" when the key
 * isn't configured or the script failed to load, so forms keep working —
 * the server's honeypot + timing layers still run regardless.
 */
export async function getRecaptchaToken(action: string): Promise<string> {
  if (!RECAPTCHA_SITE_KEY || typeof window === "undefined" || !window.grecaptcha) return "";
  try {
    return await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action });
  } catch {
    return "";
  }
}
