"use client";
import { useState } from "react";
import SequoiaCrossSection from "@/components/illustrations/SequoiaCrossSection";
import { ATLAS, MONO_STYLE, HIGHLIGHT_RINGS, type Stage } from "./data";

interface Props {
  stage: Stage;
  index: number;
  isLast: boolean;
}

export default function AtlasStageRow({ stage: s, index: i, isLast }: Props) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "240px 1fr 1fr",
        alignItems: "center",
        gap: 48,
        padding: "56px 20px",
        borderTop: `1px solid ${ATLAS.ink}`,
        borderBottom: isLast ? `1px solid ${ATLAS.ink}` : "none",
        background: hover ? ATLAS.paperAlt : "transparent",
        transition: "background 300ms ease",
        cursor: "pointer",
        position: "relative",
      }}
    >
      {/* Cross-section illustration */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            padding: 14,
            background: hover ? ATLAS.forest : ATLAS.paper,
            border: `1px solid ${ATLAS.ink}`,
            transition: "all 300ms ease",
            boxShadow: hover ? `6px 6px 0 0 ${ATLAS.ink}` : "none",
            transform: hover ? "translate(-2px, -2px)" : "none",
          }}
        >
          <SequoiaCrossSection
            size={170}
            highlightRing={HIGHLIGHT_RINGS[i]}
            ink={hover ? ATLAS.paper : ATLAS.forest}
            cream={hover ? ATLAS.forest : ATLAS.paperDim}
            muted={hover ? ATLAS.sage : ATLAS.muted}
          />
        </div>
      </div>

      {/* Stage info */}
      <div>
        <div style={{ ...MONO_STYLE, color: ATLAS.forest }}>
          Stage 0{s.n} · {s.age}
        </div>
        <div
          style={{
            fontFamily: "var(--f-display)",
            fontSize: "clamp(52px, 6vw, 92px)",
            lineHeight: 0.95,
            color: ATLAS.ink,
            marginTop: 10,
            letterSpacing: "-0.03em",
            fontWeight: 500,
          }}
        >
          {s.name}
          <em style={{ color: ATLAS.forest, fontFamily: "var(--f-serif)", fontWeight: 400 }}>.</em>
        </div>
        <p
          style={{
            fontFamily: "var(--f-serif)",
            fontStyle: "italic",
            fontSize: 17,
            lineHeight: 1.5,
            color: ATLAS.ink3,
            marginTop: 12,
            maxWidth: 420,
          }}
        >
          {s.summary}
        </p>
      </div>

      {/* Services */}
      <div style={{ borderLeft: `1px solid ${ATLAS.rule}`, paddingLeft: 28 }}>
        <div style={{ ...MONO_STYLE, color: ATLAS.ink3, marginBottom: 14 }}>Services for this season</div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
          {s.services.map((sv) => (
            <li
              key={sv}
              style={{ fontFamily: "var(--f-serif)", fontSize: 16, color: ATLAS.ink, display: "flex", gap: 10, alignItems: "baseline" }}
            >
              <span style={{ color: ATLAS.forest, fontFamily: "var(--f-mono)", fontSize: 10 }}>✶</span>
              {sv}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
