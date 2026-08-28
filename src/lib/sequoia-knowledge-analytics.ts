import { trackEvent } from "@/lib/analytics";

export type KnowledgeStage =
  | "tool_availability"
  | "tool_discovery_proxy"
  | "tool_call"
  | "tool_denied"
  | "tool_error"
  | "answer"
  | "refusal"
  | "citation_click"
  | "form_start"
  | "accepted_submission"
  | "qualified_lead";

const EVENT_NAMES: Record<KnowledgeStage, string> = {
  tool_availability: "sequoia_tool_availability",
  tool_discovery_proxy: "sequoia_tool_discovery_proxy",
  tool_call: "sequoia_tool_call",
  tool_denied: "sequoia_tool_denied",
  tool_error: "sequoia_tool_error",
  answer: "sequoia_knowledge_answer",
  refusal: "sequoia_knowledge_refusal",
  citation_click: "sequoia_citation_click",
  form_start: "sequoia_consultation_form_start",
  accepted_submission: "sequoia_consultation_accepted_submission",
  qualified_lead: "sequoia_qualified_lead",
};

const ALLOWED_KEYS = new Set([
  "surface",
  "tool_name",
  "intent",
  "citation_id",
  "reason",
  "catalog_version",
  "registration_count",
]);

function safeValue(value: unknown) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9_./-]/g, "_")
    .slice(0, 80);
}

export function trackKnowledgeStage(
  stage: KnowledgeStage,
  context: Record<string, unknown> = {},
) {
  const safeContext = Object.fromEntries(
    Object.entries(context)
      .filter(([key]) => ALLOWED_KEYS.has(key))
      .map(([key, value]) => [key, typeof value === "number" ? value : safeValue(value)]),
  );

  trackEvent(EVENT_NAMES[stage], {
    knowledge_stage: stage,
    measurement_contract: "sequoia-knowledge-v1",
    ...safeContext,
  });
}

// Qualified lead is deliberately defined here but is not fired by the browser.
// It belongs to the downstream operating-system qualification step.
export const SEQUOIA_QUALIFIED_LEAD_EVENT = EVENT_NAMES.qualified_lead;
