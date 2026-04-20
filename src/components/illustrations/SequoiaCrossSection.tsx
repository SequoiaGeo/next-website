"use client";
import { useId } from "react";

interface Props {
  size?: number;
  highlightRing?: number | null;
  ink?: string;
  cream?: string;
  muted?: string;
}

export default function SequoiaCrossSection({
  size = 400,
  highlightRing = null,
  ink = "#2a4a2e",
  cream = "#f4ecd8",
  muted = "#b8a77a",
}: Props) {
  const rawId = useId();
  const uid = rawId.replace(/[^\w]/g, "");

  const cx = size / 2;
  const cy = size / 2;
  const outerR = size / 2 - 4;
  const barkR = outerR - 6;
  const cambiumR = barkR - 3;
  const woodR = cambiumR - 2;
  const ringCount = 24;
  const rings: number[] = [];
  for (let i = 0; i < ringCount; i++) {
    rings.push(woodR * Math.pow(1 - i / ringCount, 1.35));
  }
  const cracks = [15, 75, 140, 210, 285];

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} style={{ display: "block" }}>
      <defs>
        <filter id={`xw-${uid}`} x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="9" />
          <feDisplacementMap in="SourceGraphic" scale="3.5" />
        </filter>
        <filter id={`xwh-${uid}`} x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="5" />
          <feDisplacementMap in="SourceGraphic" scale="6" />
        </filter>
        <pattern id={`bh-${uid}`} width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
          <line x1="0" y1="0" x2="0" y2="4" stroke={ink} strokeWidth="0.5" opacity="0.5" />
        </pattern>
      </defs>
      <g filter={`url(#xwh-${uid})`}>
        <circle cx={cx} cy={cy} r={outerR} fill={ink} opacity="0.9" />
        <circle cx={cx} cy={cy} r={barkR} fill={muted} opacity="0.7" />
        <circle cx={cx} cy={cy} r={barkR} fill={`url(#bh-${uid})`} />
      </g>
      <circle cx={cx} cy={cy} r={cambiumR} fill={cream} stroke={ink} strokeWidth="0.6" opacity="0.9" />
      <g filter={`url(#xw-${uid})`}>
        <circle cx={cx} cy={cy} r={woodR} fill={cream} />
        {rings.map((r, i) => {
          const isHighlight = highlightRing !== null && i === highlightRing;
          return (
            <circle
              key={i}
              cx={cx + Math.sin(i * 1.3) * 1.5}
              cy={cy + Math.cos(i * 1.7) * 1.2}
              r={r}
              fill="none"
              stroke={isHighlight ? ink : muted}
              strokeWidth={isHighlight ? 2.2 : i % 3 === 0 ? 0.9 : 0.55}
              opacity={isHighlight ? 1 : 0.35 + (1 - i / ringCount) * 0.45}
            />
          );
        })}
        {cracks.map((a, idx) => {
          const rad = (a * Math.PI) / 180;
          const r2 = woodR - 4 + (idx % 2) * 3;
          return (
            <line
              key={a}
              x1={cx + Math.cos(rad) * 6}
              y1={cy + Math.sin(rad) * 6}
              x2={cx + Math.cos(rad) * r2}
              y2={cy + Math.sin(rad) * r2}
              stroke={ink}
              strokeWidth="1.2"
              opacity="0.55"
            />
          );
        })}
        <circle cx={cx} cy={cy} r={5} fill={ink} opacity="0.75" />
      </g>
    </svg>
  );
}
