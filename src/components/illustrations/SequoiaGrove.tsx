interface Props {
  w?: number;
  h?: number;
  ink?: string;
  muted?: string;
  fog?: string;
}

const TREES = [
  { x: 0.08, s: 0.78, tint: 0.3 },
  { x: 0.22, s: 0.95, tint: 0.55 },
  { x: 0.36, s: 1.1, tint: 0.85 },
  { x: 0.5, s: 0.65, tint: 0.25 },
  { x: 0.62, s: 1.0, tint: 0.75 },
  { x: 0.78, s: 0.88, tint: 0.5 },
  { x: 0.92, s: 0.72, tint: 0.3 },
];

export default function SequoiaGrove({
  w = 800,
  h = 300,
  ink = "#2a4a2e",
  fog = "#ffffff",
}: Props) {
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h} style={{ display: "block" }}>
      <defs>
        <linearGradient id="grove-fog" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={fog} stopOpacity="0.6" />
          <stop offset="100%" stopColor={fog} stopOpacity="0" />
        </linearGradient>
        <filter id="grove-blur-far">
          <feGaussianBlur stdDeviation="0.4" />
        </filter>
      </defs>
      {TREES.map((t, idx) => {
        const cx = t.x * w;
        const treeH = h * t.s * 0.94;
        const baseY = h - 4;
        const topY = baseY - treeH;
        const trunkW = Math.max(3, 10 * t.s);
        const crownStart = baseY - treeH * 0.3;
        const crownWidth = 24 * t.s;
        return (
          <g key={idx} opacity={t.tint} filter={t.s < 0.8 ? "url(#grove-blur-far)" : undefined}>
            <path
              d={`M ${cx - trunkW * 0.6} ${baseY}
                  L ${cx - trunkW * 0.35} ${crownStart}
                  L ${cx - trunkW * 0.15} ${topY + treeH * 0.1}
                  L ${cx + trunkW * 0.15} ${topY + treeH * 0.1}
                  L ${cx + trunkW * 0.35} ${crownStart}
                  L ${cx + trunkW * 0.6} ${baseY} Z`}
              fill={ink}
            />
            {Array.from({ length: 6 }).map((_, j) => {
              const jt = j / 5;
              const cy = crownStart - jt * (treeH * 0.25);
              const cw = crownWidth * (1 - jt * 0.6);
              return <ellipse key={j} cx={cx} cy={cy} rx={cw} ry={cw * 0.7} fill={ink} />;
            })}
            <path
              d={`M ${cx - 1} ${topY + treeH * 0.08} L ${cx} ${topY} L ${cx + 1} ${topY + treeH * 0.08} Z`}
              fill={ink}
            />
          </g>
        );
      })}
      <rect x="0" y="0" width={w} height={h} fill="url(#grove-fog)" />
      <line x1="0" y1={h - 4} x2={w} y2={h - 4} stroke={ink} strokeWidth="0.6" opacity="0.3" />
    </svg>
  );
}
