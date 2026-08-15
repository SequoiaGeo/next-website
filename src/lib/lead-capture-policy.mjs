export const LEAD_MEASUREMENT_CONTRACT = "accepted-v2";

export function isSyntheticAttributionTest(fields = {}) {
  const normalizedName = String(fields.name || "").trim().toLowerCase();
  const normalizedEmail = String(fields.email || "").trim().toLowerCase();
  const phoneDigits = String(fields.phone || "").replace(/\D/g, "");

  if (!normalizedName.startsWith("internal attribution qa ")) return false;
  if (!normalizedEmail.endsWith("@example.com")) return false;

  return phoneDigits ? phoneDigits.startsWith("555010") : true;
}

export function shouldTrackCapturedLead(response) {
  if (!response || typeof response !== "object") return false;

  return (
    response.success === true &&
    response.captured === true &&
    typeof response.leadId === "string" &&
    response.leadId.trim().length > 0 &&
    response.isSyntheticTest === false
  );
}

export function acceptedCaptureNeedsTrackingAlert(response) {
  if (!response || typeof response !== "object") return false;
  if (response.captured !== true || response.isSyntheticTest === true) return false;

  return !shouldTrackCapturedLead(response);
}

export function dispatchCapturedLead(response, params, emitters) {
  const emitEvent = emitters && typeof emitters.event === "function" ? emitters.event : null;
  const emitConversion =
    emitters && typeof emitters.conversion === "function" ? emitters.conversion : null;
  const claimLead = emitters && typeof emitters.claimLead === "function" ? emitters.claimLead : null;

  if (!shouldTrackCapturedLead(response)) {
    if (acceptedCaptureNeedsTrackingAlert(response) && emitEvent) {
      emitEvent("form_response_untrackable_capture", {
        source: params?.source,
        cta_contract: params?.cta_contract,
        measurement_contract: LEAD_MEASUREMENT_CONTRACT,
      });
    }
    return false;
  }

  if (claimLead && !claimLead(response.leadId)) return false;

  const measurement = {
    ...params,
    measurement_contract: LEAD_MEASUREMENT_CONTRACT,
    lead_id: response.leadId,
  };
  if (emitConversion) emitConversion(measurement);
  if (emitEvent) emitEvent("form_success", measurement);
  return true;
}
