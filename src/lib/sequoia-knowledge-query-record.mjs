const SURFACES = new Set(["ask_sequoia", "homepage_inline"]);
const INPUT_METHODS = new Set(["typed", "suggestion"]);

export function readKnowledgeQueryRecord(input) {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return { ok: false, error: "invalid_payload" };
  }

  const question = typeof input.question === "string" ? input.question.trim() : "";
  const surface = typeof input.surface === "string" ? input.surface : "";
  const inputMethod = typeof input.input_method === "string" ? input.input_method : "";

  if (!question || question.length > 280) {
    return { ok: false, error: "invalid_question" };
  }
  if (!SURFACES.has(surface)) {
    return { ok: false, error: "invalid_surface" };
  }
  if (!INPUT_METHODS.has(inputMethod)) {
    return { ok: false, error: "invalid_input_method" };
  }

  return {
    ok: true,
    value: {
      question,
      surface,
      inputMethod,
    },
  };
}
