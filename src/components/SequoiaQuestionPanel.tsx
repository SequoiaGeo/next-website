"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import catalog from "@/data/sequoia-knowledge.catalog.json";
import { answerSequoiaQuestion } from "@/lib/sequoia-knowledge-engine.mjs";
import { consumeKnowledgeBudget } from "@/lib/sequoia-knowledge-budget";
import { trackKnowledgeStage } from "@/lib/sequoia-knowledge-analytics";

type Answer = ReturnType<typeof answerSequoiaQuestion>;
type KnowledgeSurface = "ask_sequoia" | "homepage_inline";
type KnowledgeInputMethod = "typed" | "suggestion";

type SequoiaQuestionPanelProps = {
  surface: KnowledgeSurface;
  embedded?: boolean;
};

const suggestions = [
  "What does working with Sequoia cost?",
  "Is Sequoia right for my business?",
  "How does Sequoia measure AI search visibility?",
  "What happens after I request my free audit?",
];

function limitedAnswer(reason: string): Answer {
  return {
    catalogVersion: catalog.catalogVersion,
    boundary: catalog.publicBoundary,
    refused: true,
    intent: "unsupported",
    reason,
    summary:
      "This browser tab has reached the Ask Sequoia session limit. You can still use the cited public pages or contact Sequoia directly.",
    details: [],
    citations: [],
  } as Answer;
}

function trackPanelViewOnce(surface: KnowledgeSurface) {
  const key = `sequoia-knowledge-panel-view:${surface}`;
  try {
    if (window.sessionStorage.getItem(key)) return;
    window.sessionStorage.setItem(key, "1");
  } catch {
    // If storage is unavailable, the event remains limited to the component lifecycle.
  }
  trackKnowledgeStage("panel_view", {
    surface,
    catalog_version: catalog.catalogVersion,
  });
}

async function recordSubmittedQuestion(
  question: string,
  surface: KnowledgeSurface,
  inputMethod: KnowledgeInputMethod,
) {
  try {
    await fetch("/api/sequoia-knowledge/query", {
      method: "POST",
      cache: "no-store",
      keepalive: true,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, surface, input_method: inputMethod }),
    });
  } catch {
    // Recording is best effort and must never block the visitor's answer.
  }
}

export default function SequoiaQuestionPanel({
  surface,
  embedded = false,
}: SequoiaQuestionPanelProps) {
  const [status, setStatus] = useState<"loading" | "enabled" | "disabled">(
    embedded ? "enabled" : "loading",
  );
  const [question, setQuestion] = useState("");
  const [submittedQuestion, setSubmittedQuestion] = useState("");
  const [answer, setAnswer] = useState<Answer | null>(null);

  useEffect(() => {
    let disposed = false;

    async function refreshStatus() {
      try {
        const response = await fetch("/api/sequoia-knowledge/status", {
          cache: "no-store",
          headers: { Accept: "application/json" },
        });
        if (!response.ok) throw new Error("status");
        const result = (await response.json()) as { enabled?: boolean };
        if (disposed) return;
        const nextStatus = result.enabled === true ? "enabled" : "disabled";
        setStatus(nextStatus);
        if (nextStatus === "disabled") {
          setAnswer(null);
          setSubmittedQuestion("");
        }
      } catch {
        if (disposed) return;
        setStatus("disabled");
        setAnswer(null);
        setSubmittedQuestion("");
      }
    }

    void refreshStatus();
    const timer = window.setInterval(refreshStatus, 60_000);
    const onVisibility = () => {
      if (document.visibilityState === "visible") void refreshStatus();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      disposed = true;
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  useEffect(() => {
    if (status === "enabled") trackPanelViewOnce(surface);
  }, [status, surface]);

  function ask(nextQuestion: string, inputMethod: KnowledgeInputMethod) {
    const trimmedQuestion = nextQuestion.trim();
    if (!trimmedQuestion) return;

    setSubmittedQuestion(trimmedQuestion);
    void recordSubmittedQuestion(trimmedQuestion, surface, inputMethod);
    const budget = consumeKnowledgeBudget("ask");
    if (!budget.ok) {
      setAnswer(limitedAnswer(budget.reason));
      trackKnowledgeStage("refusal", {
        surface,
        reason: budget.reason,
        catalog_version: catalog.catalogVersion,
      });
      return;
    }

    const nextAnswer = answerSequoiaQuestion(catalog, trimmedQuestion);
    setAnswer(nextAnswer);
    trackKnowledgeStage(nextAnswer.refused ? "refusal" : "answer", {
      surface,
      intent: nextAnswer.intent,
      reason: nextAnswer.refused ? nextAnswer.reason : "catalog_answer",
      catalog_version: catalog.catalogVersion,
    });
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    ask(question, "typed");
  }

  if (embedded && status !== "enabled") return null;

  return (
    <section
      className={embedded ? "border-y border-gray-100 bg-[#fafaf8] py-16 sm:py-20" : "bg-[#fafaf8] py-16 sm:py-20"}
      aria-labelledby={embedded ? "homepage-ask-sequoia-heading" : undefined}
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {embedded && (
          <div className="mx-auto mb-9 max-w-3xl text-center">
            <p className="section-overline mb-3 text-[#1A5C3A]">Ask from approved public facts</p>
            <h2
              id="homepage-ask-sequoia-heading"
              className="text-3xl font-extrabold tracking-tight text-[#111111] sm:text-4xl"
            >
              What would you like to know about Sequoia GEO?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Ask about AI search, services, published pricing, fit, the free marketing audit, methodology, or approved client evidence.
              Every supported answer cites a visible Sequoia page.
            </p>
          </div>
        )}

        {status === "loading" && !embedded && (
          <div className="rounded-2xl border border-gray-200 bg-white p-8 text-base text-gray-600">
            Checking whether the experience is enabled.
          </div>
        )}

        {status === "disabled" && !embedded && (
          <div className="rounded-2xl border border-gray-200 bg-white p-8">
            <h2 className="text-2xl font-bold text-[#0D2318]">Ask Sequoia is not enabled</h2>
            <p className="mt-3 text-base leading-relaxed text-gray-600">
              The catalog experience is behind a release flag. The public source pages and normal
              contact form remain available.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-lg bg-[#1A5C3A] px-6 py-3 text-base font-semibold text-white hover:bg-[#0D2318]"
            >
              Contact Sequoia GEO
            </Link>
          </div>
        )}

        {status === "enabled" && (
          <div data-clarity-mask="true" className="mx-auto max-w-4xl">
            <form
              onSubmit={submit}
              className="rounded-[1.75rem] border border-gray-200 bg-white p-4 shadow-[0_18px_60px_rgba(13,35,24,0.12)] sm:p-6"
            >
              <label htmlFor={`${surface}-sequoia-question`} className="sr-only">
                Ask Sequoia a question
              </label>
              <textarea
                id={`${surface}-sequoia-question`}
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                maxLength={280}
                required
                rows={3}
                className="w-full resize-none border-0 bg-transparent px-2 py-2 text-base leading-relaxed text-[#1a1a1a] placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:text-lg"
                placeholder="Ask about AI search, pricing, the free audit, services, case studies, or whether Sequoia is right for your business..."
              />
              <div className="mt-3 flex flex-col gap-3 border-t border-gray-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-sm leading-relaxed text-gray-500">
                  <p>Approved public topics only. Do not enter contact, account, or confidential information.</p>
                  <p className="mt-1">Questions may be reviewed to improve Ask Sequoia and this website. They are not sent to an AI model.</p>
                </div>
                <div className="flex shrink-0 items-center justify-between gap-3 sm:justify-end">
                  <span className="text-sm tabular-nums text-gray-400">{question.length}/280</span>
                  <button
                    type="submit"
                    disabled={!question.trim()}
                    className="inline-flex items-center justify-center rounded-full bg-[#1A5C3A] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0D2318] disabled:cursor-not-allowed disabled:bg-gray-300"
                  >
                    Ask Sequoia
                    <svg
                      aria-hidden="true"
                      className="ml-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </form>

            <div className="mt-5 flex flex-wrap justify-center gap-2" aria-label="Suggested questions">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => {
                    setQuestion(suggestion);
                    ask(suggestion, "suggestion");
                  }}
                  className="min-h-11 rounded-full border border-[#1A5C3A]/25 bg-white px-4 py-2 text-sm font-semibold text-[#1A5C3A] transition hover:border-[#1A5C3A] hover:bg-[#F0F8F3]"
                >
                  {suggestion}
                </button>
              ))}
            </div>

            <div aria-live="polite" className="mt-8">
              {!answer ? (
                <div className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-gray-500">
                  Answers are limited to catalog version {catalog.catalogVersion}. Unsupported questions are refused instead of guessed.
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="ml-auto max-w-2xl rounded-2xl rounded-br-md bg-[#0D2318] px-5 py-4 text-base leading-relaxed text-white">
                    {submittedQuestion}
                  </div>
                  <div className="mr-auto max-w-3xl rounded-2xl rounded-bl-md border border-gray-200 bg-white p-6 shadow-sm sm:p-7">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1A5C3A] text-sm font-black text-white">S</span>
                      <p className={`text-sm font-bold uppercase tracking-wider ${answer.refused ? "text-amber-700" : "text-[#1A5C3A]"}`}>
                        {answer.refused ? "Catalog refusal" : "Catalog answer"}
                      </p>
                    </div>
                    <h3 className="mt-4 text-xl font-bold leading-snug text-[#0D2318] sm:text-2xl">{answer.summary}</h3>

                    {answer.details.length > 0 && (
                      <ul className="mt-5 space-y-3 text-base leading-relaxed text-gray-700">
                        {answer.details.map((detail, index) => (
                          <li key={`${index}-${detail}`} className="rounded-xl bg-[#fafaf8] px-4 py-3">{detail}</li>
                        ))}
                      </ul>
                    )}

                    {answer.citations.length > 0 && (
                      <div className="mt-6 border-t border-gray-200 pt-5">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-[#1A5C3A]">Visible sources</h4>
                        <div className="mt-3 flex flex-wrap gap-3">
                          {answer.citations.map((citation) => (
                            <Link
                              key={citation.id}
                              href={citation.path}
                              onClick={() =>
                                trackKnowledgeStage("citation_click", {
                                  surface,
                                  intent: answer.intent,
                                  citation_id: citation.id,
                                })
                              }
                              className="rounded-lg border border-[#1A5C3A]/25 px-4 py-2 text-sm font-semibold text-[#1A5C3A] hover:border-[#1A5C3A]"
                            >
                              {citation.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-6 border-t border-gray-200 pt-5">
                      <p className="text-sm leading-relaxed text-gray-500">{answer.boundary}</p>
                      <p className="mt-3 text-sm font-semibold leading-relaxed text-[#0D2318]">
                        This answer uses approved public facts and does not send your question to an AI model.
                      </p>
                      <Link
                        href="/contact#book"
                        onClick={() =>
                          trackKnowledgeStage("handoff_click", {
                            surface,
                            intent: answer.intent,
                            reason: answer.refused ? answer.reason : "catalog_answer",
                          })
                        }
                        className="mt-4 inline-flex items-center font-bold text-[#1A5C3A] hover:text-[#0D2318]"
                      >
                        Continue to the contact page to talk with Aaron.
                        <span aria-hidden="true" className="ml-2">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
