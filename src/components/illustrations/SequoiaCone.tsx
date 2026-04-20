interface Props {
  size?: number;
  ink?: string;
}

export default function SequoiaCone({ size = 60, ink = "#2a4a2e" }: Props) {
  return (
    <svg viewBox="0 0 60 80" width={size} height={(size * 80) / 60}>
      <g stroke={ink} strokeWidth="0.9" fill="none" opacity="0.85">
        <ellipse cx="30" cy="44" rx="18" ry="26" fill={ink} opacity="0.08" />
        {[...Array(6)].map((_, row) =>
          [...Array(5)].map((__, col) => {
            const x = 14 + col * 8 + (row % 2) * 4;
            const y = 22 + row * 8;
            const scale = 1 - Math.abs(col - 2) * 0.15 - Math.abs(row - 2.5) * 0.08;
            return (
              <ellipse
                key={`${row}-${col}`}
                cx={x}
                cy={y}
                rx={3.5 * scale}
                ry={2.8 * scale}
              />
            );
          })
        )}
        <path d="M 30 18 L 30 8" strokeWidth="1.2" />
      </g>
    </svg>
  );
}
