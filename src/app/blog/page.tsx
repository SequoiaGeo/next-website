import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Sequoia GEO: Home Services Marketing Insights",
  description:
    "Marketing insights, local SEO strategy, and real operator-level analysis for HVAC, plumbing, roofing, and restoration contractors from Aaron Husak, 13-year home services operator, 4x Inc 5000.",
  alternates: {
    canonical: "https://www.sequoiageo.com/blog",
  },
};

const posts = [
  {
    slug: "dead-phone-number-lsa",
    title: "We Found a Dead Phone Number in a Live LSA Campaign. The Agency Never Noticed.",
    excerpt:
      "A contractor had Google Local Service Ads running for months. Google Guaranteed badge active. Budget spending. Every single lead was hitting a phone number nobody answered. The agency's report showed green.",
    date: "April 2026",
    readTime: "6 min read",
    category: "LSA",
  },
  {
    slug: "three-agencies-one-report",
    title: "Three Agencies. All Reporting Green. Here's What We Actually Found.",
    excerpt:
      "A contractor was spending $20,000 a month across three marketing vendors. Every monthly report showed strong performance. 16,962 tracked conversions. 22 actual phone calls. Here's what the gap looked like.",
    date: "April 2026",
    readTime: "8 min read",
    category: "Attribution",
  },
  {
    slug: "ai-red-flags-contractor-marketing",
    title: "AI Marketing Red Flags Every Contractor Should Know Before Signing a Contract",
    excerpt:
      "Agencies are hiding behind AI to justify mediocre work and charge full rates. Here are the specific red flags that reveal when an AI marketing agency is cutting corners, and what legitimate AI use actually looks like in contractor marketing.",
    date: "April 2026",
    readTime: "11 min read",
    category: "Local SEO",
  },
  {
    slug: "gbp-utm-tracking-ga4",
    title: "Google Business Profile UTM Tracking: The Complete GA4 Setup Guide for Contractors",
    excerpt:
      "Without UTM parameters on your GBP links, GA4 hides that traffic in the direct channel and you never know what your listing is actually driving. Here is the complete setup guide for contractors.",
    date: "April 2026",
    readTime: "12 min read",
    category: "GBP",
  },
  {
    slug: "gbp-suspension-reinstatement-playbook",
    title: "Google Business Profile Suspended: The Complete Reinstatement Playbook for Contractors",
    excerpt:
      "A suspended GBP can cut your inbound leads by 60 percent overnight. This complete playbook covers soft vs. hard suspensions, the most common causes, the step-by-step appeal process through the official appeals tool, and what to do if the appeal is denied.",
    date: "April 2026",
    readTime: "14 min read",
    category: "GBP",
  },
  {
    slug: "geoblocking-contractor-website",
    title: "How to Block Foreign Traffic to Your Contractor Website (And Why It Matters for Google Ads)",
    excerpt:
      "Foreign bot traffic drains your Google Ads budget, corrupts GA4 data, and tanks conversion rates. Three methods to block it: Cloudflare geo-blocking, .htaccess rules, and cPanel IP blocking -- with step-by-step instructions any contractor can follow.",
    date: "April 2026",
    readTime: "12 min read",
    category: "Google Ads",
  },
  {
    slug: "contractor-marketing-services-local-seo",
    title: "Contractor Marketing Services: What Actually Works for Local SEO",
    excerpt:
      "I spent $400,000 on contractor marketing services over 13 years before I understood what I was buying. Here is what actually works for local SEO across HVAC, plumbing, roofing, and restoration, and how to evaluate providers without getting burned.",
    date: "April 2026",
    readTime: "18 min read",
    category: "Local SEO",
  },
  {
    slug: "fractional-cmo-vs-agency-vs-marketing-manager",
    title: "Fractional CMO vs Marketing Agency vs In-House Marketing Manager",
    excerpt:
      "Three options, one decision that shapes every marketing dollar you spend. What each option actually costs, what it delivers, who it is right for, and the failure modes I have watched kill otherwise solid home service marketing programs.",
    date: "April 2026",
    readTime: "16 min read",
    category: "Fractional CMO",
  },
  {
    slug: "which-marketing-agency-specializes-in-contractors",
    title: "How to Choose a Digital Marketing Agency for Contractors (Without Getting Burned)",
    excerpt:
      "I hired and fired three agencies before building my own systems at Balanced Comfort. Here's what I learned: what to look for, the red flags I've seen firsthand, and the questions that separate real contractor marketing specialists from generalists who say they specialize.",
    date: "April 2026",
    readTime: "16 min read",
    category: "Local SEO",
  },
  {
    slug: "best-plumbing-seo-keywords",
    title: "The Plumbing SEO Keywords That Actually Drive Booked Jobs",
    excerpt:
      "Most plumbers target 3 keywords and wonder why their SEO underperforms. Here's the full keyword framework: emergency terms, service-specific, location, problem-based, and intent modifiers, built from 13 years of running calls through a CRM.",
    date: "April 2026",
    readTime: "14 min read",
    category: "Local SEO",
  },
  {
    slug: "ai-search-replacing-google-home-services",
    title: "How AI Search Is Replacing Google for Home Service Searches",
    excerpt:
      "AI search engines are changing how homeowners find contractors. Here's what HVAC, plumbing, and roofing companies need to know before 2027.",
    date: "April 2026",
    readTime: "9 min read",
    category: "Generative Engine Optimization",
  },
  {
    slug: "what-is-a-geo-agency",
    title: "What Is a GEO Agency and Do You Need One?",
    excerpt:
      "GEO agencies help businesses show up in ChatGPT, Perplexity, and AI search. Here's what they do, who needs one, and how to pick the right one.",
    date: "April 2026",
    readTime: "10 min read",
    category: "Generative Engine Optimization",
  },
  {
    slug: "google-removed-call-button-gbp",
    title: "Google Just Removed the Call Button from Your GBP Listing: What Contractors Need to Know",
    excerpt:
      "In early 2026, Google removed the standalone call button from organic GBP listings and restricted it to paid ads. Local Pack Ads jumped from 1% to 14% of mobile searches in one year. Here's what that means and what to do about it.",
    date: "March 2026",
    readTime: "8 min read",
    category: "GBP",
  },
  {
    slug: "how-much-does-a-fractional-cmo-cost-pricing-models-what-you-get",
    title: "How Much Does a Fractional CMO Cost? Pricing Models and What You Actually Get",
    excerpt:
      "Fractional CMO pricing ranges from $2,000 to $15,000+ per month. Here's the honest breakdown of what each tier covers, red flags to watch for, and how to tell whether the engagement will pay for itself.",
    date: "March 2026",
    readTime: "7 min read",
    category: "Fractional CMO",
  },
  {
    slug: "roofing-seo-complete-guide-to-ranking",
    title: "Roofing SEO: The Complete Guide to Ranking in 2026",
    excerpt:
      "Insurance vs. retail leads, storm surge management, Map Pack ranking signals, and how AI search is changing roofing lead generation. A framework built from 13 years in home services.",
    date: "February 2026",
    readTime: "11 min read",
    category: "Roofing",
  },
  {
    slug: "remove-negative-google-reviews",
    title: "How to Remove Negative Google Reviews: The Real Guide for Contractors (2026)",
    excerpt:
      "Most negative Google reviews can't be removed, but some can. The exact policies Google uses, the step-by-step flagging process, and the only long-term strategy that actually works.",
    date: "February 2026",
    readTime: "7 min read",
    category: "Reputation",
  },
  {
    slug: "gmb-multi-location-strategy",
    title: "Google Business Profile for Multi-Location Contractors: The Complete Strategy",
    excerpt:
      "When to have separate GBP listings vs. one, how to avoid duplicate content issues, and the review strategy across multiple locations that actually moves local rankings.",
    date: "December 2025",
    readTime: "8 min read",
    category: "GBP",
  },
  {
    slug: "hvac-geo-ai-era",
    title: "HVAC Marketing in the AI Era: How Generative Engine Optimization Changes Everything",
    excerpt:
      "ChatGPT and Google AI are answering HVAC questions before homeowners click a result. The companies building AI search visibility now will dominate their markets in 18 months. Here's the framework.",
    date: "November 2025",
    readTime: "9 min read",
    category: "AI Search",
  },
  {
    slug: "plumber-geo-ai-search-optimization",
    title: "AI Search Optimization for Plumbers: Getting Recommended by ChatGPT and Google AI",
    excerpt:
      "The practical framework for plumbing companies to build AI search visibility: citations, content authority, review velocity, and the structured data that talks directly to AI systems.",
    date: "October 2025",
    readTime: "8 min read",
    category: "AI Search",
  },
  {
    slug: "local-seo-competitor-analysis",
    title: "How to Analyze Your Local SEO Competitors: A Contractor's Field Guide",
    excerpt:
      "The exact process for understanding who's ranking in your market, what they're doing, and where the gaps are. Review velocity benchmarking, GBP analysis, backlink gaps, and proper keyword tool setup.",
    date: "January 2026",
    readTime: "9 min read",
    category: "Local SEO",
  },
  {
    slug: "local-seo-for-plumbers",
    title: "Local SEO for Plumbers: The Complete Guide to Ranking in Your Market (2026)",
    excerpt:
      "The three-pillar framework for plumbing local SEO: GBP optimization, service page structure, and citation building. Plus the real metrics that tell you if it's working.",
    date: "September 2025",
    readTime: "12 min read",
    category: "Local SEO",
  },
  {
    slug: "10-must-have-website-features-for-contractors-in-2026",
    title: "10 Must-Have Website Features for Contractors in 2026",
    excerpt:
      "A contractor website that doesn't convert is an expensive brochure. The 10 features that separate high-converting contractor sites from ones that look good but don't produce phone calls.",
    date: "January 2026",
    readTime: "8 min read",
    category: "Website",
  },
];

const categories = ["All", "GBP", "Local SEO", "LSA", "Attribution", "AI Search", "Generative Engine Optimization", "Roofing", "Reputation", "Fractional CMO", "Website", "Google Ads"];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3A9E6A]/30 bg-white px-5 py-2 text-sm font-medium text-[#1A5C3A] shadow-sm mb-6">
              <span className="inline-block h-2 w-2 rounded-full bg-[#3A9E6A]" />
              Field Notes
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl">
              Marketing Insights for Home Service Contractors
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600">
              No agency fluff. Real analysis from someone who ran a home services company for 13 years
              and now manages marketing for contractors doing $2M&ndash;$15M.
            </p>
            <div className="mt-4 flex items-center justify-center gap-3 text-sm text-gray-500">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0D2318]">
                <span className="text-xs font-bold text-white">AH</span>
              </div>
              <span>Written by Aaron Husak &middot; 4x Inc 5000 &middot; CA Licensed Contractor B, C-2, C-20, C-36</span>
            </div>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Category filter (display only) */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                  cat === "All"
                    ? "bg-[#1A5C3A] text-white"
                    : "bg-[#fafaf8] border border-gray-200 text-gray-600"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-gray-200 bg-[#fafaf8] overflow-hidden shadow-sm transition hover:border-[#3A9E6A]/50 hover:shadow-md"
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="rounded-full bg-[#C8EDD2] px-3 py-1 text-xs font-semibold text-[#0D2318]">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h2 className="text-base font-extrabold text-[#1a1a1a] group-hover:text-[#1A5C3A] transition-colors leading-snug flex-1">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-xs text-gray-400">
                    <span>{post.readTime}</span>
                    <span className="flex items-center gap-1 font-semibold text-[#1A5C3A]">
                      Read
                      <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-extrabold text-white">
            Want this analysis applied to your company?
          </h2>
          <p className="mt-4 text-base text-[#C8EDD2]/80">
            Everything in these posts is a slice of what I look at in the Full Picture Audit.
            I&rsquo;ll show you exactly what your marketing is producing before we spend anything new.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#1A5C3A] transition hover:bg-[#C8EDD2]"
            >
              Book a Strategy Call
            </Link>
            <a href="tel:5595213122" className="text-base font-medium text-[#C8EDD2] hover:text-white transition-colors">
              (559) 521-3122
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
