"use client";
import { useState } from "react";
import SequoiaCrossSection from "@/components/illustrations/SequoiaCrossSection";
import { ATLAS, MONO_STYLE, STAGES, HIGHLIGHT_RINGS } from "./data";

type Answers = {
  age: string | null;
  revenue: string | null;
  primary: string | null;
};

const QUESTIONS = [
  {
    field: "age" as const,
    q: "How old is the business?",
    opts: [
      { v: "<1yr", l: "Under 1 year" },
      { v: "1-3yr", l: "1–3 years" },
      { v: "3-10yr", l: "3–10 years" },
      { v: "10+yr", l: "10+ years" },
    ],
  },
  {
    field: "revenue" as const,
    q: "Rough annual revenue?",
    opts: [
      { v: "<250k", l: "Under $250K" },
      { v: "250k-1m", l: "$250K – $1M" },
      { v: "1-5m", l: "$1M – $5M" },
      { v: "5m+", l: "$5M+" },
    ],
  },
  {
    field: "primary" as const,
    q: "What’s the biggest challenge right now?",
    opts: [
      { v: "brand-new", l: "Getting started at all" },
      { v: "leads", l: "Finding predictable leads" },
      { v: "scale", l: "Scaling without breaking margin" },
      { v: "protect", l: "Protecting market position" },
    ],
  },
];

function computeStage(answers: Answers): number {
  const ageMap: Record<string, number> = { "<1yr": 1, "1-3yr": 2, "3-10yr": 3, "10+yr": 4 };
  const revMap: Record<string, number> = { "<250k": 1, "250k-1m": 2, "1-5m": 3, "5m+": 4 };
  const priMap: Record<string, number> = { "brand-new": 1, leads: 2, scale: 3, protect: 4 };
  const a = ageMap[answers.age!] ?? 1;
  const r = revMap[answers.revenue!] ?? 1;
  const p = priMap[answers.primary!] ?? 1;
  return Math.min(4, Math.max(1, Math.round((a + r + p) / 3)));
}

function CornerMarks({ color = ATLAS.ink }: { color?: string }) {
  const s = 12;
  const o = -1;
  const base: React.CSSProperties = { position: "absolute", width: s, height: s, borderColor: color, borderStyle: "solid" };
  return (
    <>
      <div style={{ ...base, top: o, left: o, borderWidth: "1px 0 0 1px" }} />
      <div style={{ ...base, top: o, right: o, borderWidth: "1px 1px 0 0" }} />
      <div style={{ ...base, bottom: o, left: o, borderWidth: "0 0 1px 1px" }} />
      <div style={{ ...base, bottom: o, right: o, borderWidth: "0 1px 1px 0" }} />
    </>
  );
}

function AtlasQuestion({
  step,
  setStep,
  answers,
  setAnswers,
}: {
  step: number;
  setStep: (fn: (s: number) => number) => void;
  answers: Answers;
  setAnswers: (fn: (a: Answers) => Answers) => void;
}) {
  const cur = QUESTIONS[step];
  const pick = (v: string) => {
    setAnswers((a) => ({ ...a, [cur.field]: v }));
    setTimeout(() => setStep((s) => Math.min(2, s + 1)), 260);
  };

  return (
    <div key={step} style={{ animation: "atlasSlideIn 400ms ease" }}>
      <div
        style={{
          fontFamily: "var(--f-display)",
          fontWeight: 500,
          fontSize: 34,
          lineHeight: 1.15,
          color: ATLAS.ink,
          letterSpacing: "-0.015em",
          marginBottom: 22,
        }}
      >
        {cur.q}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 10 }}>
        {cur.opts.map((opt) => {
          const picked = answers[cur.field] === opt.v;
          return (
            <button
              key={opt.v}
              onClick={() => pick(opt.v)}
              style={{
                textAlign: "left",
                background: picked ? ATLAS.forest : ATLAS.paper,
                color: picked ? ATLAS.paper : ATLAS.ink,
                border: `1px solid ${picked ? ATLAS.forest : ATLAS.rule}`,
                padding: "18px 20px",
                fontFamily: "var(--f-serif)",
                fontSize: 16,
                cursor: "pointer",
                transition: "all 200ms ease",
              }}
              onMouseEnter={(e) => {
                if (!picked) {
                  e.currentTarget.style.borderColor = ATLAS.forest;
                  e.currentTarget.style.background = ATLAS.paperAlt;
                }
              }}
              onMouseLeave={(e) => {
                if (!picked) {
                  e.currentTarget.style.borderColor = ATLAS.rule;
                  e.currentTarget.style.background = ATLAS.paper;
                }
              }}
            >
              {opt.l}
            </button>
          );
        })}
      </div>
      <div style={{ marginTop: 22, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          style={{
            background: "transparent",
            border: 0,
            color: step === 0 ? ATLAS.rule : ATLAS.ink2,
            fontFamily: "var(--f-mono)",
            fontSize: 11,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            cursor: step === 0 ? "default" : "pointer",
          }}
        >
          ← Back
        </button>
        <div style={{ ...MONO_STYLE, fontSize: 10, color: ATLAS.ink3 }}>Q {step + 1} of 3</div>
      </div>
    </div>
  );
}

function AtlasResult({ stage, reset }: { stage: number; reset: () => void }) {
  const s = STAGES[stage - 1];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: 32, alignItems: "start" }}>
      <div style={{ background: ATLAS.forest, padding: 14 }}>
        <SequoiaCrossSection
          size={132}
          highlightRing={HIGHLIGHT_RINGS[stage - 1]}
          ink={ATLAS.paper}
          cream={ATLAS.forest}
          muted={ATLAS.sage}
        />
      </div>
      <div>
        <div style={{ ...MONO_STYLE, color: ATLAS.forest }}>Your Stage · 0{s.n}</div>
        <div
          style={{
            fontFamily: "var(--f-display)",
            fontWeight: 500,
            fontSize: 68,
            lineHeight: 0.95,
            marginTop: 10,
            color: ATLAS.ink,
            letterSpacing: "-0.025em",
          }}
        >
          {s.name}
          <em style={{ color: ATLAS.forest, fontFamily: "var(--f-serif)" }}>.</em>
        </div>
        <p style={{ fontFamily: "var(--f-serif)", fontSize: 17, lineHeight: 1.55, color: ATLAS.ink2, marginTop: 14 }}>
          {s.summary}
        </p>
        <div style={{ marginTop: 22 }}>
          <div style={{ ...MONO_STYLE, color: ATLAS.ink3 }}>What we’d recommend</div>
          <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 8 }}>
            {s.services.map((sv) => (
              <span
                key={sv}
                style={{
                  background: ATLAS.paper,
                  padding: "8px 14px",
                  fontSize: 13,
                  fontFamily: "var(--f-serif)",
                  border: `1px solid ${ATLAS.ink}`,
                  color: ATLAS.ink,
                }}
              >
                {sv}
              </span>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a
            href="/#contact"
            style={{
              display: "inline-block",
              background: ATLAS.ink,
              color: ATLAS.paper,
              border: 0,
              padding: "15px 22px",
              fontFamily: "var(--f-display)",
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 600,
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Book a {s.name} survey →
          </a>
          <button
            onClick={reset}
            style={{
              background: "transparent",
              border: `1px solid ${ATLAS.rule}`,
              color: ATLAS.ink2,
              padding: "15px 22px",
              fontFamily: "var(--f-mono)",
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default function StageFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({ age: null, revenue: null, primary: null });
  const [stageResult, setStageResult] = useState<number | null>(null);

  const handleSetAnswers = (fn: (a: Answers) => Answers) => {
    const next = fn(answers);
    setAnswers(next);
    if (next.age && next.revenue && next.primary) {
      setTimeout(() => setStageResult(computeStage(next)), 300);
    }
  };

  const reset = () => {
    setAnswers({ age: null, revenue: null, primary: null });
    setStageResult(null);
    setStep(0);
  };

  return (
    <div
      style={{
        marginTop: 72,
        maxWidth: 880,
        background: ATLAS.paperDim,
        border: `1px solid ${ATLAS.ink}`,
        padding: "42px 44px 36px",
        boxShadow: `16px 18px 0 -1px ${ATLAS.forest}, 16px 18px 0 0 ${ATLAS.ink}`,
        position: "relative",
      }}
    >
      <CornerMarks color={ATLAS.ink} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 28 }}>
        <div>
          <div style={{ ...MONO_STYLE, color: ATLAS.forest }}>◆ Find your stage</div>
          <div
            style={{
              fontFamily: "var(--f-display)",
              fontSize: 30,
              fontWeight: 500,
              marginTop: 6,
              color: ATLAS.ink,
              letterSpacing: "-0.01em",
            }}
          >
            {stageResult ? `You’re in the ${STAGES[stageResult - 1].name} season.` : "Three questions. Thirty seconds."}
          </div>
        </div>
        {stageResult !== null ? (
          <button
            onClick={reset}
            style={{
              background: "transparent",
              color: ATLAS.ink2,
              border: `1px solid ${ATLAS.rule}`,
              padding: "8px 14px",
              fontFamily: "var(--f-mono)",
              fontSize: 11,
              letterSpacing: "0.12em",
              cursor: "pointer",
              textTransform: "uppercase",
            }}
          >
            ↻ Restart
          </button>
        ) : (
          <div style={{ ...MONO_STYLE, fontSize: 10, color: ATLAS.ink3 }}>0{step + 1} / 03</div>
        )}
      </div>

      <div style={{ display: "flex", gap: 6, marginBottom: 32 }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: 3,
              background: i <= step ? ATLAS.forest : ATLAS.rule,
              transition: "background 400ms ease",
            }}
          />
        ))}
      </div>

      {stageResult === null ? (
        <AtlasQuestion step={step} setStep={setStep} answers={answers} setAnswers={handleSetAnswers} />
      ) : (
        <AtlasResult stage={stageResult} reset={reset} />
      )}
    </div>
  );
}
