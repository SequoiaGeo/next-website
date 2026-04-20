interface Props {
  size?: number;
  ink?: string;
}

export default function SequoiaSprig({ size = 80, ink = "#2a4a2e" }: Props) {
  return (
    <svg viewBox="0 0 80 80" width={size} height={size}>
      <g stroke={ink} strokeWidth="1" fill="none" opacity="0.75" strokeLinecap="round">
        <path d="M 40 74 Q 42 50 40 8" />
        {[18, 28, 38, 48, 58, 66].map((y, i) => {
          const droop = 4 + i * 0.5;
          return (
            <g key={y}>
              <path d={`M 40 ${y} Q 28 ${y + droop * 0.3} ${18 + i} ${y + droop}`} />
              <path d={`M 40 ${y} Q 52 ${y + droop * 0.3} ${62 - i} ${y + droop}`} />
              {[0.3, 0.55, 0.8].map((t) => (
                <g key={t}>
                  <line
                    x1={40 + (18 + i - 40) * t}
                    y1={y + droop * t * 0.6}
                    x2={40 + (18 + i - 40) * t}
                    y2={y + droop * t * 0.6 + 3}
                    strokeWidth="0.5"
                  />
                </g>
              ))}
            </g>
          );
        })}
      </g>
    </svg>
  );
}
