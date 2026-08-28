"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import catalog from "@/data/sequoia-knowledge.catalog.json";
import { answerSequoiaQuestion } from "@/lib/sequoia-knowledge-engine.mjs";
import { consumeKnowledgeBudget } from "@/lib/sequoia-knowledge-budget";
import { trackKnowledgeStage } from "@/lib/sequoia-knowledge-analytics";

type Answer = ReturnType<typeof answerSequoiaQuestion>;

const suggestions = [
  "What services does Sequoia provide?",
  "What are the published starting prices?",
  "How does Sequoia measure AI search visibility?",
  "What case-study evidence is approved?",
];

export default function AskSequoiaExperience() {
  const [status, setStatus] = useState<"loading" | "enabled" | "disabled">("loading");
  const [question, setQuestion] = useState("");
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
        if (nextStatus === "disabled") setAnswer(null);
      } catch {
        if (disposed) return;
        setStatus("disabled");
        setAnswer(null);
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

  function ask(nextQuestion: string) {
    const budget = consumeKnowledgeBudget("ask");
    if (!budget.ok) {
      const limited = {
        catalogVersion: catalog.catalogVersion,
        boundary: catalog.publicBoundary,
        refused: true,
        intent: "unsupported",
        reason: budget.reason,
        summary: "This browser tab has reached the Ask Sequoia session limit. You can still use the cited public pages or contact Sequoia directly.",
        details: [],
        citations: [],
      } as Answer;
      setAnswer(limited);
      trackKnowledgeStage("refusal", { surface: "ask_sequoia", reason: budget.reason, catalog_version: catalog.catalogVersion });
      return;
    }

    const nextAnswer = answerSequoiaQuestion(catalog, nextQuestion);
    setAnswer(nextAnswer);
    trackKnowledgeStage(nextAnswer.refused ? "refusal" : "answer", {
      surface: "ask_sequoia",
      intent: nextAnswer.intent,
      reason: nextAnswer.refused ? nextAnswer.reason : "catalog_answer",
      catalog_version: catalog.catalogVersion,
    });
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    ask(question);
  }

  return (
    <>
      <section className="bg-[#0D2318] py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-overline mb-4">Approved public facts</p>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              Ask Sequoia
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-[#C8EDD2]/80">
              Ask about services, published starting prices, service fit, the measurement method,
              public case-study evidence, or contact options.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#C8EDD2]/60">
              {catalog.publicBoundary} Questions and answers stay in this page state. They are not
              sent to an AI model, added to a URL, or stored by a Sequoia answer service.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fafaf8] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          {status === "loading" && (
            <div className="rounded-2xl border border-gray-200 bg-white p-8 text-base text-gray-600">
              Checking whether the staging experience is enabled.
            </div>
          )}

          {status === "disabled" && (
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <h2 className="text-2xl font-bold text-[#0D2318]">Ask Sequoia is not enabled</h2>
              <p className="mt-3 text-base leading-relaxed text-gray-600">
                The catalog experience is behind a release flag. The public source pages and normal
                contact form remain available.
              </p>
              <Link href="/contact" className="mt-6 inline-flex rounded-lg bg-[#1A5C3A] px-6 py-3 text-base font-semibold text-white hover:bg-[#0D2318]">
                Contact Sequoia GEO
              </Link>
            </div>
          )}

          {status === "enabled" && (
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <form onSubmit={submit} data-clarity-mask="true" className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
                  <label htmlFor="sequoia-question" className="block text-base font-bold text-[#0D2318]">
                    What would you like to know?
                  </label>
                  <textarea
                    id="sequoia-question"
                    value={question}
                    onChange={(event) => setQuestion(event.target.value)}
                    maxLength={280}
                    required
                    rows={5}
                    className="mt-3 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base leading-relaxed text-[#1a1a1a] focus:border-[#3A9E6A] focus:outline-none focus:ring-2 focus:ring-[#3A9E6A]/20"
                    placeholder="For example: What are the published starting prices?"
                  />
                  <div className="mt-3 flex items-center justify-between gap-4 text-sm text-gray-500">
                    <span>Only approved catalog topics are supported.</span>
                    <span>{question.length}/280</span>
                  </div>
                  <button type="submit" className="mt-5 w-full rounded-lg bg-[#1A5C3A] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#0D2318] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3A9E6A]">
                    Ask from the catalog
                  </button>
                </form>

                <div className="mt-6">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-[#1A5C3A]">Published topics</h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {suggestions.map((suggestion) => (
                      <button
                        key={suggestion}
                        type="button"
                        onClick={() => {
                          setQuestion(suggestion);
                          ask(suggestion);
                        }}
                        className="rounded-full border border-[#1A5C3A]/25 bg-white px-4 py-2 text-sm font-semibold text-[#1A5C3A] hover:border-[#1A5C3A]"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div data-clarity-mask="true" aria-live="polite" className="min-h-[360px] rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
                {!answer ? (
                  <div className="flex min-h-[300px] flex-col justify-center">
                    <p className="text-sm font-bold uppercase tracking-wider text-[#3A9E6A]">Catalog version {catalog.catalogVersion}</p>
                    <h2 className="mt-3 text-2xl font-bold text-[#0D2318]">Answers cite a visible page</h2>
                    <p className="mt-4 text-base leading-relaxed text-gray-600">
                      Unsupported questions are refused. No generated answer becomes a new page, and no question is placed in the address bar.
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className={`text-sm font-bold uppercase tracking-wider ${answer.refused ? "text-amber-700" : "text-[#3A9E6A]"}`}>
                      {answer.refused ? "Catalog refusal" : "Catalog answer"}
                    </p>
                    <h2 className="mt-3 text-2xl font-bold text-[#0D2318]">{answer.summary}</h2>
                    {answer.details.length > 0 && (
                      <ul className="mt-6 space-y-3 text-base leading-relaxed text-gray-700">
                        {answer.details.map((detail, index) => (
                          <li key={`${index}-${detail}`} className="rounded-xl bg-[#fafaf8] px-4 py-3">{detail}</li>
                        ))}
                      </ul>
                    )}

                    {answer.citations.length > 0 && (
                      <div className="mt-7 border-t border-gray-200 pt-6">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-[#1A5C3A]">Visible sources</h3>
                        <div className="mt-3 flex flex-wrap gap-3">
                          {answer.citations.map((citation) => (
                            <Link
                              key={citation.id}
                              href={citation.path}
                              onClick={() => trackKnowledgeStage("citation_click", {
                                surface: "ask_sequoia",
                                intent: answer.intent,
                                citation_id: citation.id,
                              })}
                              className="rounded-lg border border-[#1A5C3A]/25 px-4 py-2 text-sm font-semibold text-[#1A5C3A] hover:border-[#1A5C3A]"
                            >
                              {citation.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    <p className="mt-7 border-t border-gray-200 pt-5 text-sm leading-relaxed text-gray-500">
                      {answer.boundary}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
