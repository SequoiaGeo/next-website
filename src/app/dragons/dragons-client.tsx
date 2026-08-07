"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function track(event: string) {
  try {
    window.gtag?.("event", event, { event_category: "dragons" });
  } catch {
    /* analytics must never break the toy */
  }
}

/* ------------------------------------------------------------------ */
/* Cheer sign: the phone becomes a scrolling glow sign. The one job    */
/* this page has in the room is parents holding these up after bows.   */
/* ------------------------------------------------------------------ */

const SIGN_COLORS = [
  { name: "Gold", hex: "#FFD166" },
  { name: "Ember", hex: "#FF6B35" },
  { name: "Ice", hex: "#6BD5FF" },
  { name: "Forest", hex: "#4ADE80" },
  { name: "Pink", hex: "#FF6BD5" },
];

function CheerSign() {
  const [name, setName] = useState("");
  const [color, setColor] = useState(SIGN_COLORS[0].hex);
  const [showing, setShowing] = useState(false);
  const wakeLock = useRef<{ release: () => Promise<void> } | null>(null);

  // Keep the screen awake while the sign is up. Best effort only; the API
  // needs https + user gesture and does not exist everywhere.
  useEffect(() => {
    if (!showing) {
      wakeLock.current?.release().catch(() => {});
      wakeLock.current = null;
      return;
    }
    const nav = navigator as Navigator & {
      wakeLock?: { request: (t: "screen") => Promise<{ release: () => Promise<void> }> };
    };
    nav.wakeLock
      ?.request("screen")
      .then((l) => {
        wakeLock.current = l;
      })
      .catch(() => {});
  }, [showing]);

  const text = name.trim().toUpperCase() || "BRAVO";
  // Constant-ish scroll speed regardless of name length. The marquee is the
  // text twice back to back, animated -50%, so the loop is seamless.
  const chunk = `${text} ★ `.repeat(4);
  const duration = Math.min(24, Math.max(8, chunk.length * 0.28));

  return (
    <div className="rounded-2xl border border-[#2b2564] bg-[#1a1646] p-5">
      <h2 className="text-lg font-extrabold text-white sm:text-xl">
        Make a glowing cheer sign
      </h2>
      <p className="mt-1 text-[13px] leading-snug text-[#b8b2e6] sm:text-sm">
        Type a cast member&rsquo;s name, pick a color, and your phone becomes a
        scrolling sign. Hold it up when they take their bow.
      </p>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        maxLength={24}
        placeholder="Their name"
        className="mt-4 w-full rounded-xl border border-[#39328a] bg-[#0f0c33] px-4 py-3 text-base text-white placeholder-[#6c66a8] focus:border-[#FFD166] focus:outline-none"
      />

      <div className="mt-3 flex gap-2.5">
        {SIGN_COLORS.map((c) => (
          <button
            key={c.hex}
            type="button"
            aria-label={c.name}
            onClick={() => setColor(c.hex)}
            className="h-9 w-9 rounded-full border-2 transition-transform"
            style={{
              background: c.hex,
              borderColor: color === c.hex ? "#fff" : "transparent",
              transform: color === c.hex ? "scale(1.15)" : "scale(1)",
            }}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={() => {
          setShowing(true);
          track("dragon_sign_created");
        }}
        className="mt-4 w-full rounded-xl py-3.5 text-base font-extrabold text-[#0f0c33]"
        style={{ background: color }}
      >
        Light it up
      </button>

      {showing && (
        <button
          type="button"
          aria-label="Close the sign"
          onClick={() => setShowing(false)}
          className="fixed inset-0 z-50 block h-full w-full cursor-pointer overflow-hidden bg-black"
        >
          <style>{`@keyframes dragonmarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
          <span
            className="absolute top-1/2 left-0 flex -translate-y-1/2 whitespace-nowrap font-extrabold"
            style={{
              animation: `dragonmarquee ${duration}s linear infinite`,
              color,
              fontSize: "min(38vw, 55vh)",
              lineHeight: 1,
              textShadow: `0 0 18px ${color}, 0 0 70px ${color}, 0 0 120px ${color}`,
            }}
          >
            <span>{chunk}</span>
            <span>{chunk}</span>
          </span>
          <span className="absolute bottom-4 left-0 right-0 text-center text-[11px] text-white/40">
            tap anywhere to close &middot; turn your phone sideways &middot;
            sequoiageo.com/dragons
          </span>
        </button>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Dragon name generator. Deterministic from the inputs so siblings    */
/* get different names and the same kid always gets the same one,      */
/* which reads as "real" to kids. The reroll button cycles variants.   */
/* ------------------------------------------------------------------ */

const PREFIX = [
  "Ember", "Storm", "Night", "Cloud", "Iron", "Wild", "Star", "Thunder",
  "Frost", "Shadow", "Copper", "Moon",
];
const SUFFIX = [
  "fang", "wing", "claw", "scale", "flame", "tail", "spark", "horn",
  "gale", "shade", "frost", "blaze",
];
const TITLE = [
  "the Brave", "the Swift", "the Mighty", "the Clever", "the Fearless",
  "the Loyal", "the Unstoppable", "the Kind", "the Thunderous", "the Wise",
];
const PERSONA = [
  "Breathes fire only when the popcorn runs out.",
  "Can nap through anything except intermission.",
  "Hoards snacks instead of gold. Guards them fiercely.",
  "Loudest cheer in the whole kingdom. It is not close.",
  "Flies best after exactly one juice box.",
  "Memorized everyone's lines. Everyone's.",
  "Scared of nothing except the quiet part before the show starts.",
  "Keeps every ticket stub from every show ever.",
  "Practices bows in the mirror. Nailed it.",
  "Would absolutely trade a pile of treasure for a curtain call.",
];
const MONTHS = [
  "January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December",
];

function hashStr(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

function DragonName() {
  const [name, setName] = useState("");
  const [month, setMonth] = useState(-1);
  const [roll, setRoll] = useState(0);
  const [result, setResult] = useState<{ n: string; p: string } | null>(null);

  const generate = (extra: number) => {
    const clean = name.trim().toLowerCase();
    if (!clean || month < 0) return;
    const h = hashStr(clean) + extra * 7;
    const dragon = `${PREFIX[(h + month) % PREFIX.length]}${SUFFIX[month % SUFFIX.length]} ${
      TITLE[(h + clean.length) % TITLE.length]
    }`;
    setResult({ n: dragon, p: PERSONA[(h + month + extra) % PERSONA.length] });
    track("dragon_name_generated");
  };

  return (
    <div className="rounded-2xl border border-[#2b2564] bg-[#1a1646] p-5">
      <h2 className="text-lg font-extrabold text-white sm:text-xl">
        Find your dragon name
      </h2>
      <p className="mt-1 text-[13px] leading-snug text-[#b8b2e6] sm:text-sm">
        Every viking gets one. First name and birth month is all it takes.
      </p>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        maxLength={20}
        placeholder="First name"
        className="mt-4 w-full rounded-xl border border-[#39328a] bg-[#0f0c33] px-4 py-3 text-base text-white placeholder-[#6c66a8] focus:border-[#FFD166] focus:outline-none"
      />

      <div className="mt-3 grid grid-cols-4 gap-1.5">
        {MONTHS.map((m, i) => (
          <button
            key={m}
            type="button"
            onClick={() => setMonth(i)}
            className={`rounded-lg py-2 text-[11px] font-bold sm:text-xs ${
              month === i
                ? "bg-[#FFD166] text-[#0f0c33]"
                : "bg-[#0f0c33] text-[#b8b2e6]"
            }`}
          >
            {m.slice(0, 3)}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={() => {
          setRoll(0);
          generate(0);
        }}
        disabled={!name.trim() || month < 0}
        className="mt-4 w-full rounded-xl bg-[#FF6B35] py-3.5 text-base font-extrabold text-[#0f0c33] disabled:opacity-40"
      >
        Reveal my dragon name
      </button>

      {result && (
        <div className="mt-4 rounded-xl border border-[#FFD166]/40 bg-[#0f0c33] p-4 text-center">
          <div className="text-3xl">🐉</div>
          <div className="mt-1 text-xl font-extrabold text-[#FFD166] sm:text-2xl">
            {result.n}
          </div>
          <p className="mt-2 text-[13px] text-[#b8b2e6] sm:text-sm">{result.p}</p>
          <button
            type="button"
            onClick={() => {
              const next = roll + 1;
              setRoll(next);
              generate(next);
            }}
            className="mt-3 text-[12px] font-bold text-[#6BD5FF] underline underline-offset-2"
          >
            Hatch a different one
          </button>
        </div>
      )}
    </div>
  );
}

export default function DragonsClient() {
  return (
    <div className="space-y-5">
      <CheerSign />
      <DragonName />
    </div>
  );
}
