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
        headline: "More weekly calls and a growing team",
        detail: "Mike Bissett said KABAM used to receive 10 to 12 calls a week. He reported receiving 15 to 20 a week and adding to his team.",
        source: "Client-reported results and May 2026 owner video testimonial",
        href: "/case-studies/kabam-plumbing",
    },
    amazingAir: {
        client: "Amazing Air Solutions",
        headline: "50% more organic Google clicks",
        detail: "Sequoia rebuilt the website, fixed mobile navigation and the booking integration, and redirected old URLs. Google Search Console recorded 40 organic clicks April 10 to May 9 and 60 September 14 to October 13, 2026.",
        source: "Google Search Console, comparable 30-day windows",
        href: "/#client-case-studies",
    },
};

export const operatorProof = [
    { value: "13 years", label: "Operating a home-service company" },
    { value: "133", label: "Employees, starting from zero" },
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
