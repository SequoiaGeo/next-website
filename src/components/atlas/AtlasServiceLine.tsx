"use client";
import { useState } from "react";
import { ATLAS, type Service } from "./data";

interface Props {
  service: Service;
  index: number;
}

export default function AtlasServiceLine({ service: sv, index: i }: Props) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "60px 1fr 2fr 40px",
        gap: 28,
        padding: "32px 0",
        borderBottom: `1px solid ${ATLAS.rule}`,
        alignItems: "center",
        cursor: "pointer",
        background: hover ? `linear-gradient(90deg, ${ATLAS.paperDim} 0%, transparent 100%)` : "transparent",
        transition: "background 300ms",
      }}
    >
      <div
        style={{
          fontFamily: "var(--f-mono)",
          fontSize: 12,
          color: hover ? ATLAS.forest : ATLAS.ink3,
          letterSpacing: "0.22em",
        }}
      >
        {String(i + 1).padStart(2, "0")}
      </div>
      <div
        style={{
          fontFamily: hover ? "var(--f-serif)" : "var(--f-display)",
          fontWeight: hover ? 400 : 500,
          fontStyle: hover ? "italic" : "normal",
          fontSize: "clamp(26px, 2.8vw, 42px)",
          lineHeight: 1.05,
          color: ATLAS.ink,
          letterSpacing: "-0.015em",
          transition: "all 250ms",
        }}
      >
        {sv.name}
      </div>
      <div
        style={{
          fontFamily: "var(--f-serif)",
          fontSize: 16,
          color: ATLAS.ink2,
          opacity: hover ? 1 : 0.75,
          fontStyle: "italic",
          transition: "opacity 300ms",
        }}
      >
        {sv.note}
      </div>
      <div
        style={{
          textAlign: "right",
          color: hover ? ATLAS.forest : ATLAS.ink3,
          transform: hover ? "translateX(6px)" : "none",
          transition: "all 300ms",
          fontSize: 20,
        }}
      >
        →
      </div>
    </div>
  );
}
