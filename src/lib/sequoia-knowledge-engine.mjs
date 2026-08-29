const FIT_VALUES = {
  business_type: new Set(["home_service", "other_service_business", "other", "unsure"]),
  primary_need: new Set([
    "search_visibility",
    "website_conversion",
    "tracking_attribution",
    "paid_media",
    "marketing_leadership",
    "vendor_coordination",
    "booking_handoff",
    "unsure",
  ]),
  budget_alignment: new Set([
    "published_starting_prices_are_possible",
    "needs_lower_budget",
    "unsure",
  ]),
};

export const CONSULTATION_VALUES = {
  business_type: [
    "hvac",
    "plumbing",
    "roofing",
    "restoration",
    "chimney",
    "other_home_service",
    "other_service_business",
    "unsure",
  ],
  service_interest: [
    "search_foundation",
    "fractional_marketing_lead",
    "complex_leadership",
    "website_foundation",
    "unsure",
  ],
  primary_constraint: [
    "search_visibility",
    "tracking_attribution",
    "website_conversion",
    "paid_media",
    "vendor_coordination",
    "booking_handoff",
    "website_project",
    "unsure",
  ],
  timeframe: ["researching", "next_90_days", "active_issue", "unsure"],
};

const CONSULTATION_SETS = Object.fromEntries(
  Object.entries(CONSULTATION_VALUES).map(([key, values]) => [key, new Set(values)]),
);

const INJECTION_PATTERNS = [
  /\b(?:ignore|override|bypass)\b.{0,50}\b(?:instructions?|policy|previous|system|developer)\b/i,
  /\b(?:system prompt|developer message|hidden instruction|api key|secret key)\b/i,
  /\b(?:reveal|print|return)\b.{0,40}\b(?:private data|internal file|environment variable|credential)\b/i,
];

const PRIVATE_INPUT_PATTERNS = [
  /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i,
  /(?:\+?1[\s.-]?)?(?:\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4}\b/,
  /\b(?:\d[ -]*?){13,19}\b/,
];

function unique(values) {
  return [...new Set(values)];
}

function sourceIdsFrom(items) {
  return unique(items.flatMap((item) => item.sourceIds || []));
}

export function citationsFor(catalog, sourceIds) {
  return unique(sourceIds).flatMap((sourceId) => {
    const source = catalog.sources[sourceId];
    return source
      ? [{ id: sourceId, label: source.label, path: source.path }]
      : [];
  });
}

function result(catalog, payload, sourceIds) {
  return {
    catalogVersion: catalog.catalogVersion,
    boundary: catalog.publicBoundary,
    ...payload,
    citations: citationsFor(catalog, sourceIds),
  };
}

export function getSequoiaServices(catalog) {
  return result(
    catalog,
    { services: catalog.services },
    sourceIdsFrom(catalog.services),
  );
}

export function getPublishedStartingPrices(catalog) {
  return result(
    catalog,
    {
      startingPrices: catalog.publishedStartingPrices,
      conditions: catalog.pricingConditions,
    },
    ["pricing"],
  );
}

function objectHasOnlyKeys(value, allowedKeys) {
  return (
    value &&
    typeof value === "object" &&
    !Array.isArray(value) &&
    Object.keys(value).every((key) => allowedKeys.includes(key))
  );
}

export function checkServiceFit(catalog, input) {
  const allowedKeys = [
    "business_type",
    "primary_need",
    "budget_alignment",
    "accepts_no_guarantees",
  ];
  if (!objectHasOnlyKeys(input, allowedKeys)) {
    return result(catalog, { fit: "invalid_input", reasons: ["Use only the published fit fields."] }, ["pricing"]);
  }

  for (const [key, allowed] of Object.entries(FIT_VALUES)) {
    if (!allowed.has(input[key])) {
      return result(catalog, { fit: "invalid_input", reasons: [`${key} is not an allowed value.`] }, ["pricing"]);
    }
  }
  if (typeof input.accepts_no_guarantees !== "boolean") {
    return result(catalog, { fit: "invalid_input", reasons: ["accepts_no_guarantees must be true or false."] }, ["pricing"]);
  }

  let fit = "potential_fit";
  const reasons = [];
  if (!input.accepts_no_guarantees) {
    fit = "not_fit";
    reasons.push("Sequoia does not guarantee rankings, citations, recommendations, lead volume, or timing.");
  }
  if (input.business_type === "other" || input.business_type === "unsure") {
    if (fit !== "not_fit") fit = "needs_human_review";
    reasons.push("The public service pages focus on home-service and service businesses, so this business type needs review.");
  }
  if (input.budget_alignment !== "published_starting_prices_are_possible") {
    if (fit !== "not_fit") fit = "needs_human_review";
    reasons.push("The requested scope and the published starting conditions need human review.");
  }
  if (input.primary_need === "unsure") {
    if (fit !== "not_fit") fit = "needs_human_review";
    reasons.push("The primary constraint must be identified before Sequoia can assess scope.");
  }
  if (!reasons.length) {
    reasons.push("The selected business type, need, budget posture, and no-guarantee expectation align with the published fit conditions.");
  }

  return result(
    catalog,
    {
      fit,
      reasons,
      humanReviewRequired: catalog.serviceFit.humanReviewRequired,
    },
    catalog.serviceFit.sourceIds,
  );
}

export function getAiSearchMethodology(catalog) {
  return result(catalog, { methodology: catalog.methodology }, catalog.methodology.sourceIds);
}

export function getCaseStudyEvidence(catalog, input = {}) {
  if (!objectHasOnlyKeys(input, ["case_id"])) {
    return result(catalog, { error: "invalid_input", evidence: [] }, []);
  }
  const requested = input.case_id || "all";
  const allowed = new Set(["all", ...catalog.caseStudyEvidence.map((item) => item.id)]);
  if (!allowed.has(requested)) {
    return result(catalog, { error: "invalid_input", evidence: [] }, []);
  }
  const evidence = requested === "all"
    ? catalog.caseStudyEvidence
    : catalog.caseStudyEvidence.filter((item) => item.id === requested);
  return result(catalog, { evidence }, sourceIdsFrom(evidence));
}

export function getContactOptions(catalog) {
  return result(catalog, { contactOptions: catalog.contactOptions }, ["contact"]);
}

export function validateConsultationInput(input) {
  const keys = Object.keys(CONSULTATION_VALUES);
  if (!objectHasOnlyKeys(input, keys)) {
    return { ok: false, error: "Use only the structured consultation fields." };
  }
  for (const [key, allowed] of Object.entries(CONSULTATION_SETS)) {
    if (!allowed.has(input[key])) {
      return { ok: false, error: `${key} is not an allowed value.` };
    }
  }
  return { ok: true, value: Object.fromEntries(keys.map((key) => [key, input[key]])) };
}

function normalizedQuestion(question) {
  if (typeof question !== "string") return { ok: false, reason: "invalid_input" };
  const normalized = question.replace(/[\u0000-\u001F\u007F]/g, " ").replace(/\s+/g, " ").trim();
  if (!normalized || normalized.length > 280) return { ok: false, reason: "invalid_input" };
  if (INJECTION_PATTERNS.some((pattern) => pattern.test(normalized))) {
    return { ok: false, reason: "instruction_shaped_input" };
  }
  if (PRIVATE_INPUT_PATTERNS.some((pattern) => pattern.test(normalized))) {
    return { ok: false, reason: "private_or_contact_information" };
  }
  return { ok: true, value: normalized.toLowerCase() };
}

function answer(catalog, intent, summary, details, sourceIds) {
  return result(catalog, { refused: false, intent, summary, details }, sourceIds);
}

function refusal(catalog, reason) {
  const summary = reason === "private_or_contact_information"
    ? "Do not enter contact, account, payment, or confidential information here. Use Sequoia's contact form when you are ready to speak with a person."
    : reason === "instruction_shaped_input"
      ? "Ask a factual question about Sequoia's approved public services, pricing, methodology, fit, case evidence, or contact options."
      : catalog.refusal;
  return result(
    catalog,
    { refused: true, intent: "unsupported", reason, summary, details: [] },
    [],
  );
}

export function answerSequoiaQuestion(catalog, question) {
  const normalized = normalizedQuestion(question);
  if (!normalized.ok) return refusal(catalog, normalized.reason);
  const value = normalized.value;

  if (/\b(?:prices?|pricing|cost|fee|month|term|budget|website project)\b/.test(value)) {
    const pricing = getPublishedStartingPrices(catalog);
    return answer(
      catalog,
      "pricing",
      "Sequoia publishes starting prices and conditions before scope is agreed. Starting prices are not quotes.",
      [
        ...pricing.startingPrices.map((item) => `${item.name}: $${item.amountUsd.toLocaleString()} (${item.billing.replaceAll("_", " ")}). ${item.conditions}`),
        ...pricing.conditions,
      ],
      ["pricing"],
    );
  }

  if (/\b(?:guarantee|rank|ranking|recommend|recommendation|chatgpt|gemini|perplexity|answer engine)\b/.test(value)) {
    return answer(
      catalog,
      "expectations",
      "No. Sequoia does not guarantee or claim control over rankings, citations, recommendations, lead volume, or timing in independently controlled answer systems.",
      catalog.methodology.limitations,
      ["pricing", "methodology"],
    );
  }

  if (/\b(?:ai search|ai visibility|search visibility|geo|method|methodology|measure|measurement|citation|mentioned|observation|prompt|evidence system)\b/.test(value)) {
    return answer(
      catalog,
      "methodology",
      catalog.methodology.summary,
      [...catalog.methodology.protocol, ...catalog.methodology.limitations],
      catalog.methodology.sourceIds,
    );
  }

  if (/\b(?:case study|case studies|proof|result|results|example|examples|evidence)\b/.test(value)) {
    return answer(
      catalog,
      "case_study_evidence",
      "The catalog includes only evidence that appears on a visible case-study page with its source context and publication approval statement.",
      catalog.caseStudyEvidence.flatMap((item) => item.evidence.map((fact) => `${item.name}: ${fact}`)),
      sourceIdsFrom(catalog.caseStudyEvidence),
    );
  }

  if (/\b(?:free audit|marketing audit|audit|assessment|baseline review|public-surface scorecard)\b/.test(value)) {
    return answer(
      catalog,
      "free_audit",
      catalog.freeAudit.summary,
      [...catalog.freeAudit.afterRequest, ...catalog.freeAudit.limitations],
      catalog.freeAudit.sourceIds,
    );
  }

  if (/\b(?:fit|right for|who.*for|business type|company type|qualify|qualified)\b/.test(value)) {
    return answer(
      catalog,
      "service_fit",
      "The public fit guidance is preliminary. A human reviews the business, constraint, access, scope, and operating conditions before work is accepted.",
      [...catalog.serviceFit.potentialFit, ...catalog.serviceFit.notFit],
      catalog.serviceFit.sourceIds,
    );
  }

  if (/\b(?:contact|call|phone|email|talk|consultation|baseline review|inquiry)\b/.test(value)) {
    return answer(
      catalog,
      "contact",
      "Visitors can request a baseline review through the contact form, call, or email. The consultation tool can prepare a draft, but it cannot submit or book anything.",
      catalog.contactOptions.map((item) => `${item.label}: ${item.displayValue || item.value}`),
      ["contact"],
    );
  }

  if (/\b(?:service|services|offer|offering|help|do you do|work)\b/.test(value)) {
    return answer(
      catalog,
      "services",
      "Sequoia provides growth operations and marketing leadership for home-service and service businesses.",
      catalog.services.map((item) => `${item.name}: ${item.summary}`),
      sourceIdsFrom(catalog.services),
    );
  }

  return refusal(catalog, "unsupported_topic");
}
