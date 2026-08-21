export type MediaItem = {
  outlet: string;
  title: string;
  url: string;
  datePublished: string;
  displayDate: string;
  summary: string;
  kind: "podcast" | "trade-media" | "writing";
  seriesUrl?: string;
};

export const podcastAppearances: MediaItem[] = [
  {
    outlet: "Building HVAC Science",
    title: "Balanced Comfort, Brutal Lessons: Scaling, Losing Half Your Revenue, and Starting Over with AI",
    url: "https://buildinghvacscience.libsyn.com/ep248-balanced-comfort-brutal-lessons-scaling-losing-half-your-revenue-and-starting-over-with-ai-with-aaron-husak-november-2025",
    datePublished: "2025-12-12",
    displayDate: "December 12, 2025",
    summary:
      "A home-services operating story covering growth, hard lessons, Google Business Profile work, and the move into AI search.",
    kind: "podcast",
    seriesUrl: "https://buildinghvacscience.libsyn.com/",
  },
  {
    outlet: "Built. Trusted. Chosen.",
    title: "The Google Business Profile Playbook for Trades Lead Flow",
    url: "https://builttrustedchosen.buzzsprout.com/2557405/episodes/19278581-the-google-business-profile-playbook-for-trades-lead-flow-aaron-husak",
    datePublished: "2026-06-30",
    displayDate: "June 30, 2026",
    summary:
      "A trades-focused conversation about local visibility, Google Business Profiles, paid search, landing pages, and AI-assisted buying decisions.",
    kind: "podcast",
    seriesUrl: "https://builttrustedchosen.buzzsprout.com/",
  },
  {
    outlet: "Digital Marketing Therapy",
    title: "Using AI to Increase Website Clarity",
    url: "https://www.thefirstclick.net/ep-320-using-ai-to-increase-website-clarity-with-aaron-husak/",
    datePublished: "2026-03-10",
    displayDate: "March 10, 2026",
    summary:
      "A practical discussion about using AI to review content from the reader's perspective and build clearer, more useful websites.",
    kind: "podcast",
    seriesUrl: "https://www.thefirstclick.net/podcast/",
  },
  {
    outlet: "DesignWave Podcast",
    title: "Marketing for Contractors Who Care About ROI",
    url: "https://www.listennotes.com/podcasts/designwave-podcast/marketing-for-contractors-5sCnxUMkfWd/",
    datePublished: "2026-02-19",
    displayDate: "February 19, 2026",
    summary:
      "A contractor-marketing conversation about booked jobs, local SEO, paid advertising, and AI-supported follow-up.",
    kind: "podcast",
    seriesUrl: "https://www.listennotes.com/podcasts/designwave-podcast-amostunde-nABKwmfo8Oa/",
  },
  {
    outlet: "Grow Nearby",
    title: "The Success Story of Aaron Husak",
    url: "https://www.grownearby.com/podcast/the-success-story-of-aaron-husak/",
    datePublished: "2023-04-26",
    displayDate: "April 26, 2023",
    summary:
      "An operator-focused conversation about building Balanced Comfort and the lessons behind its growth.",
    kind: "podcast",
    seriesUrl: "https://www.grownearby.com/podcast/",
  },
];

export const tradeMedia: MediaItem[] = [
  {
    outlet: "Contracting Business",
    title: "2024 Team of Influencers",
    url: "https://www.contractingbusiness.com/columns/article/21277790/introducing-contracting-business-influencer-team",
    datePublished: "2023-12-01",
    displayDate: "December 1, 2023",
    summary:
      "Contracting Business selected Aaron for its 2024 group of HVAC industry contributors and operators.",
    kind: "trade-media",
  },
];

export const tradeWriting: MediaItem[] = [
  {
    outlet: "Contracting Business",
    title: "Turbo-charge Summer HVAC Profits",
    url: "https://www.contractingbusiness.com/residential-hvac/article/55017475/power-up-profits-for-the-summer-of-24",
    datePublished: "2024-05-08",
    displayDate: "May 8, 2024",
    summary:
      "Aaron contributed guidance on HVAC add-ons, customer communication, and reputation management while leading Balanced Comfort.",
    kind: "writing",
  },
  {
    outlet: "Contracting Business",
    title: "Weatherization as a Residential Service",
    url: "https://www.contractingbusiness.com/residential-hvac/article/21275478/weatherization",
    datePublished: "2023-11-02",
    displayDate: "November 2, 2023",
    summary:
      "A trade article by Aaron on weatherization programs, service diversification, and year-round work for HVAC contractors.",
    kind: "writing",
  },
];

export const featuredAboutMedia: MediaItem[] = [
  tradeMedia[0],
  podcastAppearances[0],
  podcastAppearances[1],
  podcastAppearances[2],
];
