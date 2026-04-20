import { useId } from "react";

interface Props {
  w?: number;
  h?: number;
  ink?: string;
  muted?: string;
}

export default function SequoiaBark({ w = 120, h = 400, ink = "#2a4a2e", muted = "#b8a77a" }: Props) {
  const rawId = useId();
  const uid = rawId.replace(/[^\w]/g, "");

  return (
    <svg aria-hidden="true" viewBox={`0 0 ${w} ${h}`} width={w} height={h} style={{ display: "block" }}>
      <defs>
        <filter id={`bw-${uid}`}>
          <feTurbulence baseFrequency="0.04" numOctaves="3" seed="17" />
          <feDisplacementMap in="SourceGraphic" scale="4" />
        </filter>
      </defs>
      <rect x="0" y="0" width={w} height={h} fill={muted} opacity="0.25" />
      <g filter={`url(#bw-${uid})`} stroke={ink} strokeLinecap="round" fill="none">
        {Array.from({ length: 9 }).map((_, i) => {
          const x = 6 + i * ((w - 12) / 8) + (i % 2 === 0 ? 2 : -2);
          return (
            <g key={i}>
              <path
                d={`M ${x} 4 L ${x - 2} ${h * 0.3} L ${x + 1} ${h * 0.6} L ${x - 1} ${h - 4}`}
                strokeWidth={1.2 + (i % 3) * 0.4}
                opacity={0.6 + (i % 3) * 0.15}
              />
              {Array.from({ length: 5 }).map((__, j) => {
                const y = 30 + j * (h / 6);
                return (
                  <line key={j} x1={x - 3} y1={y} x2={x + 3} y2={y + 2} strokeWidth="0.5" opacity="0.5" />
                );
              })}
            </g>
          );
        })}
      </g>
    </svg>
  );
}
