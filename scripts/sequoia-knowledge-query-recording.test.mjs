import assert from "node:assert/strict";
import test from "node:test";
import { readKnowledgeQueryRecord } from "../src/lib/sequoia-knowledge-query-record.mjs";

test("accepts bounded typed and suggestion records", () => {
  assert.deepEqual(
    readKnowledgeQueryRecord({
      question: "  How does Sequoia measure AI search?  ",
      surface: "homepage_inline",
      input_method: "typed",
    }),
    {
      ok: true,
      value: {
        question: "How does Sequoia measure AI search?",
        surface: "homepage_inline",
        inputMethod: "typed",
      },
    },
  );

  assert.equal(
    readKnowledgeQueryRecord({
      question: "What does working with Sequoia cost?",
      surface: "ask_sequoia",
      input_method: "suggestion",
    }).ok,
    true,
  );
});

test("rejects unbounded or unexpected query fields", () => {
  assert.equal(readKnowledgeQueryRecord(null).ok, false);
  assert.equal(readKnowledgeQueryRecord({ question: "", surface: "ask_sequoia", input_method: "typed" }).ok, false);
  assert.equal(readKnowledgeQueryRecord({ question: "x".repeat(281), surface: "ask_sequoia", input_method: "typed" }).ok, false);
  assert.equal(readKnowledgeQueryRecord({ question: "Pricing?", surface: "other", input_method: "typed" }).ok, false);
  assert.equal(readKnowledgeQueryRecord({ question: "Pricing?", surface: "ask_sequoia", input_method: "unknown" }).ok, false);
});
