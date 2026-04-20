export default function AtlasLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Atlas direction fonts — scoped to this route segment */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@400;500;600;700&family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap"
      />
      <style>{`
        .atlas-root {
          --f-display: 'Archivo Narrow', 'Barlow Condensed', ui-sans-serif, sans-serif;
          --f-serif: 'Libre Caslon Text', 'Source Serif 4', Georgia, serif;
          --f-mono: 'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace;
        }
        @keyframes atlasSlideIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      {children}
    </>
  );
}
