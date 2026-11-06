export type FractionalCmoTrade = {
    trade: string;
    href: string;
    label: string;
    body: string;
};

export const fractionalCmoTrades: FractionalCmoTrade[] = [
    {
        trade: "HVAC",
        href: "/fractional-cmo-for-hvac-companies",
        label: "Fractional CMO for HVAC companies",
        body: "Booking rate, ServiceTitan source attribution, shoulder-season planning and the repair-to-replacement handoff.",
    },
    {
        trade: "Plumbing",
        href: "/fractional-cmo-for-plumbing-companies",
        label: "Fractional CMO for plumbing companies",
        body: "Emergency call capture, after-hours booking, and a plan that fills the board with repipes, sewer, trenchless and septic work.",
    },
    {
        trade: "Roofing",
        href: "/fractional-cmo-for-roofing-companies",
        label: "Fractional CMO for roofing companies",
        body: "Retail replacement demand that does not depend on the next storm, speed to lead, and lead-to-inspection-to-sold attribution.",
    },
];

export type ClientProofPoint = {
    client: string;
    headline: string;
    detail: string;
    source: string;
    href: string;
};

export const clientProof: Record<"afcs" | "kabam" | "amazingAir", ClientProofPoint> = {
    afcs: {
        client: "A Fireman's Chimney Sweep (AFCS)",
        headline: "365% more organic Google clicks",
        detail: "Google Search Console recorded 26 organic clicks in the baseline 30-day window and 121 in a later complete 30-day window for this chimney and roofline service company.",
        source: "Google Search Console, comparable 30-day windows",
        href: "/case-studies/firemans-chimney-sweep",
    },
    kabam: {
        client: "KABAM Plumbing",
        headline: "Revenue doubled",
        detail: "KABAM Plumbing doubled its revenue while working with Sequoia GEO. Owner Mike Bissett also reported weekly calls rising from 10-12 to 15-20 and hiring an apprentice to keep up.",
        source: "Client-reported results and May 2026 owner video testimonial",
        href: "/case-studies/kabam-plumbing",
    },
    amazingAir: {
        client: "Amazing Air Solutions",
        headline: "40 to 60 organic Google clicks",
        detail: "After Sequoia rebuilt and optimized the HVAC company's website, Google organic clicks grew from 40 in the first 30 days to 60 in the comparison period, a 50% increase.",
        source: "Google Search Console, comparable 30-day windows",
        href: "/#amazing-air-proof-heading",
    },
};

export const operatorProof = [
    { value: "13 years", label: "Building and operating Balanced Comfort" },
    { value: "130+", label: "Employees at peak, from a one-person start" },
    { value: "$17M+", label: "Annual revenue before the 2024 exit" },
    { value: "4x", label: "Inc. 5000, 2021 to 2024" },
    { value: "4,000+", label: "Five-star reviews reported" },
];

export const localAiVisibilityIndexParts = [
    { title: "Executive score", body: "One baseline score for how visible and recommendable your company is across AI answers, maps and search, with the evidence behind it." },
    { title: "AI recommendation map", body: "What ChatGPT, Google AI Overviews and Perplexity say when homeowners in your market ask for the services you want to sell more of." },
    { title: "Share of AI voice", body: "How often you are mentioned, recommended or cited compared with your top three local competitors on the same question set." },
    { title: "Sources AI cites", body: "The directories, review sites, articles and pages the answers rely on, and which of them describe your company accurately." },
    { title: "Map pack and GBP health", body: "Google Business Profile categories, services, photos, posts and map-pack position for your priority services and towns." },
    { title: "Review velocity", body: "How fast new reviews arrive for you and for the companies you compete with, measured from public profiles." },
    { title: "90-day action plan", body: "The specific corrections, content and vendor assignments to make first, with an owner and a deadline for each." },
];
