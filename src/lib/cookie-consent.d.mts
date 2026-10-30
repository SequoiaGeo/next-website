export const CONSENT_KEY: string;
export const CONSENT_VERSION: number;
export const CONSENT_DURATION_MS: number;
export type ConsentChoice = "accepted" | "declined";
export function parseConsent(raw: string | null, now?: number): ConsentChoice | null;
export function serializeConsent(choice: ConsentChoice, now?: number): string;
export function isTrackingCookie(name: string): boolean;
