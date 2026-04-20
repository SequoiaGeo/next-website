import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StageFinder from "@/components/atlas/StageFinder";
import AtlasStageRow from "@/components/atlas/AtlasStageRow";
import AtlasServiceLine from "@/components/atlas/AtlasServiceLine";
import SequoiaSprig from "@/components/illustrations/SequoiaSprig";
import SequoiaCone from "@/components/illustrations/SequoiaCone";
import SequoiaBark from "@/components/illustrations/SequoiaBark";
import SequoiaGrove from "@/components/illustrations/SequoiaGrove";
import { ATLAS, MONO_STYLE, STAGES, SERVICES } from "@/components/atlas/data";

export const metadata: Metadata = {
  title: "Marketing That Grows With You | Sequoia GEO",
  description:
    "Four stages of growth. Eleven services. One clear plan for the season you\u2019re actually in. Home services marketing from an operator who\u2019s been in the seat.",
  alternates: {
    canonical: "https://www.sequoiageo.com/v2",
  },
};

const GEO_ENGINES = [
  ["ChatGPT", 84],
  ["Perplexity", 72],
  ["Google AIO", 91],
  ["Gemini", 76],
  ["Claude", 68],
] as const;

function PaperGrain() {
  return (
    <svg
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        opacity: 0.04,
        mixBlendMode: "multiply",
        zIndex: 1,
      }}
      aria-hidden="true"
    >
      <filter id="atlas-grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" />
        <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#atlas-grain)" />
    </svg>
  );
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

export default function AtlasPage() {
  return (
    <div
      className="atlas-root"
      style={{ background: ATLAS.paper, color: ATLAS.ink, fontFamily: "var(--f-serif)", position: "relative", overflow: "hidden" }}
    >
      <PaperGrain />

      {/* Proof bar */}
      <div
        style={{
          background: ATLAS.ink,
          color: ATLAS.paper,
          padding: "14px 56px",
          display: "flex",
          justifyContent: "center",
          gap: 42,
          ...MONO_STYLE,
          fontSize: 10,
          flexWrap: "wrap",
        }}
      >
        <span>4\u00d7 Inc. 5000 Honoree</span>
        <span style={{ color: ATLAS.sage }}>\u2736</span>
        <span>3\u00d7 Best Place to Work</span>
        <span style={{ color: ATLAS.sage }}>\u2736</span>
        <span>13 Yrs Operator Experience</span>
        <span style={{ color: ATLAS.sage }}>\u2736</span>
        <span>California-Built \u00b7 Licensed</span>
      </div>

      <div style={{ position: "relative", zIndex: 2 }}>

        {/* ── HERO ── */}
        <section style={{ position: "relative", padding: "110px 80px 100px", overflow: "hidden" }}>
          <div style={{ position: "absolute", right: 80, top: 120, opacity: 0.6, pointerEvents: "none" }} aria-hidden="true">
            <SequoiaSprig size={140} ink={ATLAS.forest} />
          </div>

          <div style={{ maxWidth: 1080, position: "relative" }}>
            <div style={{ ...MONO_STYLE, color: ATLAS.forest, marginBottom: 28 }}>
              \u00a7 Marketing \u00b7 Local SEO \u00b7 GEO \u00b7 Fractional CMO
            </div>

            <h1
              style={{
                fontFamily: "var(--f-display)",
                fontWeight: 500,
                margin: 0,
                color: ATLAS.ink,
                fontSize: "clamp(72px, 10vw, 176px)",
                lineHeight: 0.9,
                letterSpacing: "-0.035em",
              }}
            >
              Marketing that
              <br />
              <em style={{ color: ATLAS.forest, fontWeight: 400, fontFamily: "var(--f-serif)" }}>grows with you,</em>
              <br />
              not past you.
            </h1>

            <p
              style={{
                fontFamily: "var(--f-serif)",
                fontStyle: "italic",
                fontSize: 24,
                lineHeight: 1.45,
                maxWidth: 640,
                margin: "48px 0 0",
                color: ATLAS.ink2,
              }}
            >
              Four stages of growth. Eleven services. One clear plan for the season you\u2019re actually in.
            </p>

            <StageFinder />
          </div>
        </section>

        {/* ── STAGES ── */}
        <section
          id="stages"
          style={{
            padding: "140px 80px 120px",
            borderTop: `1px solid ${ATLAS.rule}`,
            background: ATLAS.paperDim,
            position: "relative",
          }}
        >
          <div style={{ maxWidth: 1200 }}>
            <div style={{ marginBottom: 80 }}>
              <div style={{ ...MONO_STYLE, color: ATLAS.forest }}>\u00a7 01 \u00b7 The Four Stages</div>
              <h2
                style={{
                  fontFamily: "var(--f-display)",
                  fontWeight: 500,
                  fontSize: "clamp(56px, 7.5vw, 128px)",
                  lineHeight: 0.9,
                  margin: "24px 0 0",
                  letterSpacing: "-0.03em",
                  color: ATLAS.ink,
                }}
              >
                Every sequoia
                <br />
                was{" "}
                <em style={{ color: ATLAS.forest, fontFamily: "var(--f-serif)", fontWeight: 400 }}>once a seed.</em>
              </h2>
              <p
                style={{
                  fontFamily: "var(--f-serif)",
                  fontStyle: "italic",
                  fontSize: 20,
                  maxWidth: 540,
                  margin: "28px 0 0",
                  color: ATLAS.ink3,
                  lineHeight: 1.5,
                }}
              >
                Growth has seasons. We meet you in yours \u2014 and name the next one out loud.
              </p>
            </div>

            <div>
              {STAGES.map((s, i) => (
                <AtlasStageRow key={s.n} stage={s} index={i} isLast={i === STAGES.length - 1} />
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section
          id="services"
          style={{
            padding: "140px 80px 140px",
            borderTop: `1px solid ${ATLAS.rule}`,
            position: "relative",
          }}
        >
          <div style={{ position: "absolute", right: 60, top: 120, opacity: 0.55, pointerEvents: "none" }} aria-hidden="true">
            <SequoiaCone size={90} ink={ATLAS.forest} />
          </div>
          <div style={{ maxWidth: 1200 }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.6fr",
                gap: 80,
                marginBottom: 72,
                alignItems: "end",
              }}
            >
              <div>
                <div style={{ ...MONO_STYLE, color: ATLAS.forest }}>\u00a7 02 \u00b7 Services</div>
                <h2
                  style={{
                    fontFamily: "var(--f-display)",
                    fontWeight: 500,
                    fontSize: "clamp(44px, 5.5vw, 88px)",
                    lineHeight: 0.95,
                    margin: "24px 0 0",
                    letterSpacing: "-0.025em",
                    color: ATLAS.ink,
                  }}
                >
                  Everything a
                  <br />
                  local business
                  <br />
                  <em style={{ color: ATLAS.forest, fontFamily: "var(--f-serif)", fontWeight: 400 }}>actually needs.</em>
                </h2>
              </div>
              <p style={{ fontFamily: "var(--f-serif)", fontSize: 21, lineHeight: 1.55, color: ATLAS.ink2, margin: 0 }}>
                One studio. Eleven disciplines. Chosen for your stage, executed by people who\u2019ve signed the back of the check before.
              </p>
            </div>

            <div style={{ borderTop: `1px solid ${ATLAS.ink}` }}>
              {SERVICES.map((sv, i) => (
                <AtlasServiceLine key={sv.name} service={sv} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── GEO ── */}
        <section
          id="geo"
          style={{
            position: "relative",
            padding: "160px 80px",
            background: ATLAS.forestDk,
            color: ATLAS.paper,
            overflow: "hidden",
          }}
        >
          <div
            style={{ position: "absolute", left: "-2%", top: 0, bottom: 0, width: 180, opacity: 0.35, pointerEvents: "none" }}
            aria-hidden="true"
          >
            <SequoiaBark w={180} h={800} ink={ATLAS.paper} muted={ATLAS.sage} />
          </div>

          <div style={{ maxWidth: 1200, position: "relative", zIndex: 2 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 72, alignItems: "center" }}>
              {/* Left */}
              <div>
                <div style={{ ...MONO_STYLE, color: ATLAS.sage }}>\u00a7 03 \u00b7 The New Terrain</div>
                <h2
                  style={{
                    fontFamily: "var(--f-display)",
                    fontWeight: 500,
                    fontSize: "clamp(52px, 7vw, 128px)",
                    lineHeight: 0.9,
                    margin: "24px 0 32px",
                    letterSpacing: "-0.03em",
                    color: ATLAS.paper,
                  }}
                >
                  GEO \u2014 how
                  <br />
                  <em style={{ color: ATLAS.sage, fontFamily: "var(--f-serif)", fontWeight: 400 }}>machines</em> find you.
                </h2>
                <p
                  style={{
                    fontFamily: "var(--f-serif)",
                    fontSize: 22,
                    lineHeight: 1.55,
                    color: "rgba(243,236,216,0.82)",
                    maxWidth: 540,
                  }}
                >
                  Generative Engine Optimization is the work of being visible in ChatGPT, Perplexity, Google AI Overviews, and the engines your customers now ask first. We specialize in it.
                </p>
                <div style={{ marginTop: 40 }}>
                  <Link
                    href="/#contact"
                    style={{
                      fontFamily: "var(--f-display)",
                      fontSize: 12,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: ATLAS.paper,
                      borderBottom: `1px solid ${ATLAS.sage}`,
                      paddingBottom: 4,
                      textDecoration: "none",
                    }}
                  >
                    Run a free AI-visibility audit \u2192
                  </Link>
                </div>
              </div>

              {/* Right: sample audit card */}
              <div
                style={{
                  background: ATLAS.forest,
                  border: `1px solid ${ATLAS.sage}`,
                  padding: 28,
                  position: "relative",
                }}
              >
                <CornerMarks color={ATLAS.sage} />
                <div style={{ ...MONO_STYLE, color: ATLAS.sage, fontSize: 10 }}>\u25cf Sample \u00b7 HVAC \u00b7 90d</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginTop: 14 }}>
                  <div
                    style={{
                      fontFamily: "var(--f-display)",
                      fontSize: 84,
                      lineHeight: 0.9,
                      color: ATLAS.paper,
                      fontWeight: 500,
                    }}
                  >
                    84
                  </div>
                  <div style={{ fontSize: 12, color: "rgba(243,236,216,0.7)" }}>
                    <div style={{ ...MONO_STYLE, fontSize: 10 }}>AI Visibility</div>
                    <div style={{ color: ATLAS.sage, marginTop: 4, fontFamily: "var(--f-mono)", fontSize: 11 }}>
                      \u25b2 +62 pts
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 10 }}>
                  {GEO_ENGINES.map(([engine, val]) => (
                    <div
                      key={engine}
                      style={{ display: "grid", gridTemplateColumns: "110px 1fr 28px", gap: 12, alignItems: "center" }}
                    >
                      <div style={{ fontFamily: "var(--f-serif)", fontSize: 13, color: ATLAS.paper }}>{engine}</div>
                      <div style={{ height: 3, background: "rgba(243,236,216,0.15)", position: "relative" }}>
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            right: "auto",
                            width: `${val}%`,
                            background: ATLAS.sage,
                          }}
                        />
                      </div>
                      <div style={{ fontFamily: "var(--f-mono)", fontSize: 11, textAlign: "right", color: ATLAS.paper }}>
                        {val}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── OPERATOR QUOTE ── */}
        <section
          id="about"
          style={{
            padding: "160px 80px",
            borderTop: `1px solid ${ATLAS.rule}`,
            background: ATLAS.paper,
            position: "relative",
          }}
        >
          <div
            style={{ position: "absolute", right: 90, top: 140, opacity: 0.5, pointerEvents: "none" }}
            aria-hidden="true"
          >
            <SequoiaSprig size={110} ink={ATLAS.forest} />
          </div>
          <div style={{ maxWidth: 1040 }}>
            <div style={{ ...MONO_STYLE, color: ATLAS.forest }}>\u00a7 04 \u00b7 Who You\u2019ll Work With</div>
            <blockquote style={{ margin: 0, padding: "40px 0 0" }}>
              <p
                style={{
                  fontFamily: "var(--f-serif)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  fontSize: "clamp(30px, 3.8vw, 52px)",
                  lineHeight: 1.3,
                  color: ATLAS.ink,
                  margin: 0,
                  letterSpacing: "-0.01em",
                }}
              >
                <span
                  style={{
                    color: ATLAS.forest,
                    fontFamily: "var(--f-display)",
                    fontSize: "1.3em",
                    lineHeight: 0.6,
                    verticalAlign: "-0.1em",
                    marginRight: 8,
                  }}
                  aria-hidden="true"
                >
                  \u201c
                </span>
                For thirteen years I ran a California HVAC company. I hired, I fired, I made payroll, and I wrote the marketing checks myself. Sequoia Geo exists because small businesses deserve an advisor who has actually been in the seat.
                <span
                  style={{
                    color: ATLAS.forest,
                    fontFamily: "var(--f-display)",
                    fontSize: "1.3em",
                    lineHeight: 0.6,
                    verticalAlign: "-0.1em",
                    marginLeft: 4,
                  }}
                  aria-hidden="true"
                >
                  \u201d
                </span>
              </p>
            </blockquote>
            <footer style={{ marginTop: 44, display: "flex", gap: 20, alignItems: "center" }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: `1px solid ${ATLAS.ink}`,
                  flexShrink: 0,
                  position: "relative",
                }}
              >
                <Image
                  src="/aaron-husak.webp"
                  alt="Aaron Husak, Founder of Sequoia GEO"
                  fill
                  className="object-cover object-top"
                  sizes="64px"
                />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--f-display)",
                    fontSize: 18,
                    fontWeight: 600,
                    color: ATLAS.ink,
                    letterSpacing: "0.02em",
                  }}
                >
                  Founder \u00b7 Sequoia Geo
                </div>
                <div
                  style={{
                    fontFamily: "var(--f-serif)",
                    fontSize: 15,
                    color: ATLAS.ink3,
                    marginTop: 4,
                    fontStyle: "italic",
                  }}
                >
                  Former owner, Balanced Comfort \u00b7 CA licensed contractor
                </div>
              </div>
            </footer>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section
          style={{
            padding: "160px 80px",
            borderTop: `1px solid ${ATLAS.rule}`,
            background: ATLAS.ink,
            color: ATLAS.paper,
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{ position: "absolute", left: 0, right: 0, bottom: 0, opacity: 0.22, pointerEvents: "none" }}
            aria-hidden="true"
          >
            <SequoiaGrove w={1400} h={320} ink={ATLAS.paper} muted={ATLAS.sage} fog={ATLAS.ink} />
          </div>
          <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 2 }}>
            <div style={{ ...MONO_STYLE, color: ATLAS.sage }}>\u00a7 Begin</div>
            <h2
              style={{
                fontFamily: "var(--f-display)",
                fontWeight: 500,
                fontSize: "clamp(64px, 9.5vw, 172px)",
                lineHeight: 0.88,
                margin: "24px 0 0",
                color: ATLAS.paper,
                letterSpacing: "-0.035em",
              }}
            >
              Start with a{" "}
              <em style={{ color: ATLAS.sage, fontFamily: "var(--f-serif)", fontWeight: 400 }}>survey.</em>
            </h2>
            <p
              style={{
                fontFamily: "var(--f-serif)",
                fontStyle: "italic",
                fontSize: 23,
                lineHeight: 1.5,
                marginTop: 36,
                color: "rgba(243,236,216,0.75)",
              }}
            >
              Thirty minutes. Free. You\u2019ll leave with three clear next steps \u2014 even if you never hire us.
            </p>
            <Link
              href="/#contact"
              style={{
                display: "inline-block",
                marginTop: 52,
                background: ATLAS.paper,
                color: ATLAS.ink,
                padding: "24px 44px",
                fontFamily: "var(--f-display)",
                fontSize: 13,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Schedule yours \u2192
            </Link>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer
          style={{
            padding: "40px 80px",
            background: ATLAS.ink,
            borderTop: `1px solid ${ATLAS.ink3}`,
            display: "flex",
            justifyContent: "space-between",
            ...MONO_STYLE,
            fontSize: 10,
            color: "rgba(243,236,216,0.6)",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <span>\u00a9 2026 Sequoia Geo</span>
          <span>aaron@sequoiageo.com</span>
          <span>Made in California</span>
        </footer>
      </div>
    </div>
  );
}
