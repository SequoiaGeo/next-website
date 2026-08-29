import { CONSULTATION_VALUES } from "@/lib/sequoia-knowledge-engine.mjs";

export const CONSULTATION_DRAFT_KEY = "sequoia_consultation_draft_v1";
export const CONSULTATION_DRAFT_EVENT = "sequoia-consultation-draft";
export const CONSULTATION_DRAFT_TTL_MS = 30 * 60 * 1000;

export type ConsultationDraftInput = {
  business_type: string;
  service_interest: string;
  primary_constraint: string;
  timeframe: string;
};

export type ConsultationDraft = ConsultationDraftInput & {
  version: 1;
  origin: "sequoia_knowledge_interface";
  preparedAt: string;
  expiresAt: string;
};

const ALLOWED_DRAFT_VALUES = Object.fromEntries(
  Object.entries(CONSULTATION_VALUES).map(([key, values]) => [key, new Set(values)]),
) as Record<keyof ConsultationDraftInput, Set<string>>;

const LABELS: Record<string, string> = {
  hvac: "HVAC",
  plumbing: "Plumbing",
  roofing: "Roofing",
  restoration: "Restoration",
  chimney: "Chimney service",
  other_home_service: "Other home service",
  other_service_business: "Other service business",
  unsure: "Not sure yet",
  search_foundation: "Search Foundation",
  fractional_marketing_lead: "Fractional Marketing Lead",
  complex_leadership: "Complex Leadership",
  website_foundation: "Website Foundation",
  search_visibility: "Search visibility",
  tracking_attribution: "Tracking and attribution",
  website_conversion: "Website conversion",
  paid_media: "Paid media",
  vendor_coordination: "Vendor coordination",
  booking_handoff: "Lead-to-booking handoff",
  website_project: "Website project",
  researching: "Researching options",
  next_90_days: "Within the next 90 days",
  active_issue: "An active issue",
};

function getSessionStorage() {
  if (typeof window === "undefined") return null;
  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}

export function writeConsultationDraft(input: ConsultationDraftInput) {
  const storage = getSessionStorage();
  if (!storage) return { ok: false as const, error: "session_storage_unavailable" };
  const now = Date.now();
  const draft: ConsultationDraft = {
    version: 1,
    origin: "sequoia_knowledge_interface",
    ...input,
    preparedAt: new Date(now).toISOString(),
    expiresAt: new Date(now + CONSULTATION_DRAFT_TTL_MS).toISOString(),
  };
  try {
    storage.setItem(CONSULTATION_DRAFT_KEY, JSON.stringify(draft));
    window.dispatchEvent(new CustomEvent(CONSULTATION_DRAFT_EVENT, { detail: draft }));
    return { ok: true as const, draft };
  } catch {
    return { ok: false as const, error: "session_storage_unavailable" };
  }
}

export function clearConsultationDraft() {
  const storage = getSessionStorage();
  if (storage) {
    try {
      storage.removeItem(CONSULTATION_DRAFT_KEY);
    } catch {
      // Storage is advisory and failure must not block the normal contact form.
    }
  }
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(CONSULTATION_DRAFT_EVENT, { detail: null }));
  }
}

export function readConsultationDraft(): ConsultationDraft | null {
  const storage = getSessionStorage();
  if (!storage) return null;
  try {
    const raw = storage.getItem(CONSULTATION_DRAFT_KEY);
    if (!raw) return null;
    const draft = JSON.parse(raw) as Partial<ConsultationDraft>;
    const now = Date.now();
    const preparedAt = typeof draft.preparedAt === "string" ? Date.parse(draft.preparedAt) : NaN;
    const expiresAt = typeof draft.expiresAt === "string" ? Date.parse(draft.expiresAt) : NaN;
    if (
      draft.version !== 1 ||
      draft.origin !== "sequoia_knowledge_interface" ||
      typeof draft.business_type !== "string" ||
      typeof draft.service_interest !== "string" ||
      typeof draft.primary_constraint !== "string" ||
      typeof draft.timeframe !== "string" ||
      !ALLOWED_DRAFT_VALUES.business_type.has(draft.business_type) ||
      !ALLOWED_DRAFT_VALUES.service_interest.has(draft.service_interest) ||
      !ALLOWED_DRAFT_VALUES.primary_constraint.has(draft.primary_constraint) ||
      !ALLOWED_DRAFT_VALUES.timeframe.has(draft.timeframe) ||
      !Number.isFinite(preparedAt) ||
      !Number.isFinite(expiresAt) ||
      preparedAt > now + 60_000 ||
      expiresAt <= now ||
      expiresAt - preparedAt > CONSULTATION_DRAFT_TTL_MS
    ) {
      clearConsultationDraft();
      return null;
    }
    return draft as ConsultationDraft;
  } catch {
    clearConsultationDraft();
    return null;
  }
}

export function consultationDraftMessage(draft: ConsultationDraft) {
  return [
    "Prepared consultation context, reviewed by the visitor before submission:",
    `Business type: ${LABELS[draft.business_type] || "Not sure yet"}`,
    `Service interest: ${LABELS[draft.service_interest] || "Not sure yet"}`,
    `Primary constraint: ${LABELS[draft.primary_constraint] || "Not sure yet"}`,
    `Timeframe: ${LABELS[draft.timeframe] || "Not sure yet"}`,
  ].join("\n");
}
