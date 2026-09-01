export type KnowledgeQueryRecord = {
  question: string;
  surface: "ask_sequoia" | "homepage_inline";
  inputMethod: "typed" | "suggestion";
};

export function readKnowledgeQueryRecord(input: unknown):
  | { ok: true; value: KnowledgeQueryRecord }
  | { ok: false; error: string };
