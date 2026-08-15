export type LeadCaptureResponse = {
  success?: unknown;
  captured?: unknown;
  leadId?: unknown;
  isSyntheticTest?: unknown;
};

export const LEAD_MEASUREMENT_CONTRACT: "accepted-v2";

export type SyntheticAttributionFields = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
};

export function isSyntheticAttributionTest(fields?: SyntheticAttributionFields): boolean;
export function shouldTrackCapturedLead(response: unknown): response is LeadCaptureResponse & {
  success: true;
  captured: true;
  leadId: string;
  isSyntheticTest: false;
};
export function acceptedCaptureNeedsTrackingAlert(response: unknown): boolean;

export type CapturedLeadMeasurement = {
  source: string;
  [key: string]: unknown;
};

export type CapturedLeadEmitters = {
  conversion: (measurement: CapturedLeadMeasurement) => void;
  event: (name: string, params: Record<string, unknown>) => void;
  claimLead?: (leadId: string) => boolean;
};

export function dispatchCapturedLead(
  response: unknown,
  params: CapturedLeadMeasurement,
  emitters: CapturedLeadEmitters,
): boolean;
