export const ATLAS = {
  paper:    "#ffffff",
  paperDim: "#f5f3ee",
  paperAlt: "#ebe8e0",
  ink:      "#1c1e1a",
  ink2:     "#3a3e34",
  ink3:     "#6a6e5e",
  ink4:     "#9a9c88",
  rule:     "#d8d4c7",
  forest:   "#3d5a3f",
  forestDk: "#24382a",
  forestLt: "#6e8c6f",
  muted:    "#b8a77a",
  sage:     "#a8b294",
} as const;

export const MONO_STYLE = {
  fontFamily: "var(--f-mono)",
  fontSize: 11,
  letterSpacing: "0.22em",
  textTransform: "uppercase" as const,
};

export interface Stage {
  n: number;
  name: string;
  age: string;
  height: string;
  summary: string;
  who: string;
  services: string[];
}

export interface Service {
  name: string;
  note: string;
}

export const STAGES: Stage[] = [
  {
    n: 1,
    name: "Seed",
    age: "Year 01",
    height: "0\u20136 in.",
    summary: "The domain is fresh. The logo is on the truck. You are a business on paper.",
    who: "Just-launched operators",
    services: ["Website build", "Local SEO", "Brand foundation", "Google Business Profile"],
  },
  {
    n: 2,
    name: "Sapling",
    age: "Year 1\u20133",
    height: "6 in \u2013 12 ft.",
    summary: "Word-of-mouth works \u2014 but you can\u2019t predict next month. Time to build a pipeline.",
    who: "First-stage local businesses",
    services: ["GEO / AI Search", "PPC campaigns", "LSA management", "Content strategy"],
  },
  {
    n: 3,
    name: "Canopy",
    age: "Year 3\u201310",
    height: "12 \u2013 80 ft.",
    summary: "The phone rings. Now it\u2019s about margin, brand, and territory.",
    who: "Scaling mid-market operators",
    services: ["Fractional CMO", "Meta ads", "Analytics", "Management consulting"],
  },
  {
    n: 4,
    name: "Grove",
    age: "Year 10+",
    height: "80 \u2013 300 ft.",
    summary: "You are the name in your market. Protect the forest. Rank where AI looks.",
    who: "Established category leaders",
    services: ["GEO leadership", "Full-funnel strategy", "Exit-prep positioning", "Board advisory"],
  },
];

export const SERVICES: Service[] = [
  { name: "Website builds",        note: "Fast, indexable, built to be cited by AI." },
  { name: "GEO / AI Search",       note: "How ChatGPT, Perplexity & AI Overviews see you." },
  { name: "Local SEO",             note: "Map pack, reviews, citations, schema." },
  { name: "Content",               note: "Written to answer real customer questions." },
  { name: "Analysis & Audits",     note: "Rank tracking, AI-visibility diagnostics." },
  { name: "Marketing consulting",  note: "Strategy with a senior operator." },
  { name: "Management consulting", note: "From a founder who has been in the seat." },
  { name: "Fractional CMO",        note: "Executive marketing leadership, part-time." },
  { name: "PPC campaigns",         note: "Google Ads built for ROAS, not vanity." },
  { name: "LSA management",        note: "Local Service Ads that earn their spend." },
  { name: "Meta ads",              note: "Paid social that supports the funnel." },
];

export const HIGHLIGHT_RINGS = [22, 16, 9, 3];
