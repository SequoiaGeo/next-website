import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Contractor's Guide to AI Search (GEO) | Sequoia GEO",
  description:
    "How HVAC, plumbing, and roofing contractors get recommended by ChatGPT, Gemini, and Perplexity. A complete GEO playbook written by a 13-year home services operator.",
  alternates: {
    canonical: "https://www.sequoiageo.com/contractors-guide-ai-search",
  },
};

export default function ContractorsGuideAISearchPage() {
  return (
    <main className="min-h-screen bg-[#fafaf8]">

      {/* Nav strip */}
      <div className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="text-sm font-semibold text-[#1A5C3A] hover:text-[#0D2318] transition-colors"
          >
            ← Back to Sequoia GEO
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-[#0D2318]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16 sm:py-24">
          <p className="section-overline text-[#3A9E6A] mb-4">Free Guide</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.06]">
            The Contractor&rsquo;s Guide to AI Search
          </h1>
          <p className="mt-5 text-xl text-[#3A9E6A] font-medium leading-snug">
            How HVAC, Plumbing &amp; Roofing Companies Get Found by ChatGPT, Gemini &amp; Perplexity
          </p>
          <p className="mt-4 text-sm text-[#C8EDD2]/50 tracking-wide">
            By Aaron Husak &middot; April 2026 &middot; 20 min read
          </p>
          <p className="mt-6 text-lg text-[#C8EDD2]/75 leading-relaxed max-w-2xl">
            I spent 20 years running an HVAC and plumbing company. Now I run Sequoia GEO, and I&rsquo;m
            watching the biggest shift in local search since Google Maps changed everything for
            contractors. This guide covers what&rsquo;s happening, why it matters to your business
            right now, and the exact steps to make sure AI recommends you instead of your competitors.
          </p>
        </div>
      </div>

      {/* Article body */}
      <div className="mx-auto max-w-3xl px-6 lg:px-8 py-16 sm:py-20">
        <div className="prose">

          {/* Why I Wrote This */}
          <h2>Why I Wrote This Guide</h2>

          <p>
            I spent 20 years running an HVAC and plumbing company. I scaled it to 130+ employees
            and landed on the Inc. 5000 four years in a row. Now I run Sequoia GEO, and I&rsquo;m
            watching the biggest shift in search since Google Maps changed everything for local
            businesses.
          </p>

          <p>Here&rsquo;s what&rsquo;s happening:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8 not-prose">
            <div className="bg-[#C8EDD2] rounded-xl p-6">
              <p className="text-3xl font-black text-[#0D2318] leading-none">900M</p>
              <p className="text-sm font-semibold text-[#1A5C3A] mt-1">ChatGPT weekly active users</p>
              <p className="text-xs text-gray-600 mt-1">Processing 2+ billion queries per day</p>
            </div>
            <div className="bg-[#C8EDD2] rounded-xl p-6">
              <p className="text-3xl font-black text-[#0D2318] leading-none">800%</p>
              <p className="text-sm font-semibold text-[#1A5C3A] mt-1">Perplexity year-over-year growth</p>
              <p className="text-xs text-gray-600 mt-1">45 million active users and climbing</p>
            </div>
            <div className="bg-[#C8EDD2] rounded-xl p-6">
              <p className="text-3xl font-black text-[#0D2318] leading-none">60%</p>
              <p className="text-sm font-semibold text-[#1A5C3A] mt-1">of U.S. searches show AI Overviews</p>
              <p className="text-xs text-gray-600 mt-1">Google Gemini above your organic listing</p>
            </div>
            <div className="bg-[#C8EDD2] rounded-xl p-6">
              <p className="text-3xl font-black text-[#0D2318] leading-none">25%</p>
              <p className="text-sm font-semibold text-[#1A5C3A] mt-1">predicted drop in traditional search</p>
              <p className="text-xs text-gray-600 mt-1">Gartner forecast by end of 2026</p>
            </div>
          </div>

          <p>
            When a homeowner asks ChatGPT &ldquo;who is the best HVAC company in Phoenix?&rdquo; or tells
            Perplexity &ldquo;I need an emergency plumber in Dallas,&rdquo; your business either shows up in
            that answer or it doesn&rsquo;t. And right now, most contractors are invisible to AI search.
          </p>

          <p>
            I wrote this guide because nobody in our industry is talking about this honestly. The
            marketing agencies selling you SEO packages haven&rsquo;t adjusted their playbook. Your
            competitors don&rsquo;t even know this shift is happening yet. And that gap is the single
            biggest marketing opportunity I&rsquo;ve seen since I started my first company.
          </p>

          {/* What Is GEO */}
          <h2>What Is GEO (Generative Engine Optimization)?</h2>

          <p>
            SEO &mdash; Search Engine Optimization &mdash; is about ranking on Google&rsquo;s list. When a
            homeowner searches &ldquo;AC repair near me,&rdquo; SEO determines whether your company appears
            in the results.
          </p>

          <p>
            GEO &mdash; Generative Engine Optimization &mdash; is about being the answer that AI gives.
            When that same homeowner skips Google entirely and asks ChatGPT, &ldquo;Who should I call for
            AC repair in Fresno?&rdquo; GEO determines whether the AI recommends your company by name.
          </p>

          <blockquote className="border-l-4 border-[#3A9E6A] pl-6 my-8 text-xl font-semibold text-[#1a1a1a] not-prose">
            With SEO, you&rsquo;re competing for a spot on a list the homeowner scrolls through. With GEO,
            you&rsquo;re competing to be the recommendation. There&rsquo;s no list to scroll. There&rsquo;s no
            second page. The AI either mentions you or it doesn&rsquo;t.
          </blockquote>

          <h3>The AI Search Platforms That Matter Right Now</h3>

          <p>
            <strong>ChatGPT</strong> &mdash; 900 million weekly users, processing 2+ billion queries per
            day. The largest AI platform and growing fast. When people say &ldquo;I asked AI,&rdquo; they
            usually mean ChatGPT.
          </p>

          <p>
            <strong>Google AI Overviews (Gemini)</strong> &mdash; Google&rsquo;s own AI-generated answers
            that appear at the top of search results. These now appear in up to 60% of U.S. searches.
            Your potential customers see this before they see your website listing.
          </p>

          <p>
            <strong>Perplexity</strong> &mdash; An AI-native search engine processing 1.2&ndash;1.5 billion
            queries per month. It cites its sources, which means if your business is mentioned, users
            can click through to your website. Growing 800% year-over-year.
          </p>

          <p>
            <strong>Microsoft Copilot</strong> &mdash; Built into Windows, Microsoft Edge, and Bing.
            Every Windows user has access to this.
          </p>

          <h3>What Actually Happens When Someone Asks AI for a Contractor</h3>

          <p>
            A homeowner&rsquo;s water heater breaks at 9 PM. Ten years ago, they&rsquo;d grab the Yellow Pages.
            Five years ago, they&rsquo;d search Google for &ldquo;emergency plumber near me.&rdquo; Today, an
            increasing number of them open ChatGPT on their phone and type: &ldquo;My water heater is
            leaking. Who should I call in [city]?&rdquo;
          </p>

          <p>
            ChatGPT responds with specific company recommendations by name &mdash; not a list of ten
            links. If your company wasn&rsquo;t mentioned, you didn&rsquo;t just miss a ranking position.
            You were completely invisible in that interaction.
          </p>

          {/* Why Contractors Cannot Ignore This */}
          <h2>Why Contractors Cannot Ignore This</h2>

          <p>
            I heard the same thing about Google Maps in 2010. &ldquo;People will always use the Yellow
            Pages.&rdquo; The contractors who moved first on Google Maps dominated their local markets
            for the next decade. The ones who waited are still trying to catch up.
          </p>

          <p><strong>The numbers:</strong></p>
          <ul>
            <li>Gartner predicts traditional search volume will drop 25% by the end of 2026</li>
            <li>ChatGPT&rsquo;s weekly users doubled in one year &mdash; from 400 million to 900 million</li>
            <li>Perplexity grew 800% year-over-year</li>
            <li>
              Google AI Overviews now appear in up to 60% of searches &mdash; and when they do, organic
              click-through rates drop by 61%
            </li>
            <li>
              71% of Americans already use AI-powered search tools to research purchases or evaluate
              brands
            </li>
          </ul>

          <h3>The Zero-Click Problem</h3>

          <p>
            When AI gives an answer, many users never click through to a website at all. They get
            the recommendation, call the number, and move on. Seer Interactive&rsquo;s research found
            that organic CTR dropped 61% for queries where AI Overviews appeared.
          </p>

          <div className="bg-[#C8EDD2] rounded-xl p-6 my-8 not-prose">
            <p className="text-sm font-semibold text-[#1A5C3A] uppercase tracking-wider mb-2">The Flip Side</p>
            <p className="text-2xl font-black text-[#0D2318] leading-tight">
              35% more organic clicks
            </p>
            <p className="text-sm text-gray-700 mt-2">
              for sites cited as sources within AI answers. Being the AI&rsquo;s answer is the new pole
              position.
            </p>
          </div>

          <h3>The First-Mover Window</h3>

          <p>
            Right now, most of your competitors don&rsquo;t even know GEO exists. In my experience
            scaling a contracting company, the contractors who moved first on every platform change
            &mdash; Google My Business, Local Service Ads, review platforms &mdash; captured market share that
            took their competitors years to claw back. The same window is open right now with AI
            search, and I estimate it&rsquo;s a 12 to 18 month window before the industry catches up.
          </p>

          {/* How AI Decides */}
          <h2>How AI Search Decides Who to Recommend</h2>

          <p>
            When ChatGPT or Perplexity receives a query like &ldquo;best HVAC company in Dallas,&rdquo; here&rsquo;s
            what the AI evaluates:
          </p>

          <h3>1. Your Online Footprint Across Multiple Sources</h3>

          <p>
            AI models don&rsquo;t just look at your website. They pull from every source they were
            trained on and can access in real-time:
          </p>
          <ul>
            <li>Your website content</li>
            <li>
              Google Business Profile (the single most important structured data source for local AI
              recommendations)
            </li>
            <li>Review platforms</li>
            <li>Industry directories and associations</li>
            <li>News mentions</li>
            <li>Social media presence</li>
            <li>Citation consistency across the web</li>
          </ul>

          <h3>2. Authority Signals</h3>

          <p>
            AI is looking for signals that your business is legitimate, established, and trustworthy:
            review volume and sentiment, consistent business information (NAP), topical authority on
            your website, and backlinks from credible sources.
          </p>

          <h3>3. Content That Answers Real Questions</h3>

          <p>
            Your website might have a page that says &ldquo;We offer AC repair services&rdquo; &mdash; but that
            doesn&rsquo;t help AI answer the question &ldquo;How much does AC repair cost in Phoenix?&rdquo; or
            &ldquo;What are the signs my AC needs to be replaced?&rdquo; AI evaluates whether your content
            actually answers the questions homeowners are asking.
          </p>

          <h3>4. E-E-A-T: Experience, Expertise, Authoritativeness, Trustworthiness</h3>

          <p>
            Google introduced these quality guidelines for traditional search, but they&rsquo;re even
            more important for AI recommendations. When I ran my contracting company, the things
            that made us successful &mdash; earning thousands of five-star reviews, maintaining BBB
            accreditation, getting mentioned in trade publications, keeping our website updated with
            real job photos and detailed service descriptions &mdash; are exactly the signals that AI
            now uses to decide who to recommend.
          </p>

          {/* 7-Step GEO Playbook */}
          <h2>The 7-Step GEO Playbook for Contractors</h2>

          {/* Step 1 */}
          <div className="not-prose my-10">
            <div className="flex items-start gap-6">
              <span className="text-7xl font-black text-[#1A5C3A]/10 leading-none shrink-0 select-none">
                01
              </span>
              <div className="prose pt-2">
                <h3 className="mt-0">Audit Your Current AI Visibility</h3>
                <p>
                  Before you change anything, find out where you stand. This takes 15 minutes.
                </p>
                <p>
                  Open ChatGPT, Perplexity, and Google (look for the AI Overview section at the top
                  of results). Search for these phrases, replacing [city] with your primary service
                  area:
                </p>
                <ul>
                  <li>&ldquo;Best [HVAC/plumber/roofer] in [city]&rdquo;</li>
                  <li>&ldquo;Who should I call for [AC repair/water heater/roof leak] in [city]?&rdquo;</li>
                  <li>&ldquo;[Your company name] reviews&rdquo;</li>
                  <li>&ldquo;Emergency [plumber/HVAC] [city]&rdquo;</li>
                  <li>&ldquo;How much does [AC repair/water heater replacement] cost in [city]?&rdquo;</li>
                </ul>
                <p>
                  Document what you find. Are you mentioned? Are your competitors? This baseline is
                  critical &mdash; you can&rsquo;t improve what you don&rsquo;t measure.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="not-prose my-10">
            <div className="flex items-start gap-6">
              <span className="text-7xl font-black text-[#1A5C3A]/10 leading-none shrink-0 select-none">
                02
              </span>
              <div className="prose pt-2">
                <h3 className="mt-0">Claim and Optimize Every Directory Listing</h3>
                <p>
                  AI models pull data from directories and citation sources. If your business
                  information is incomplete, inconsistent, or missing from key platforms, you&rsquo;re
                  invisible to AI.
                </p>
                <p>
                  <strong>Priority platforms:</strong> Google Business Profile (#1 by a wide margin),
                  Yelp, Angi/HomeAdvisor, Better Business Bureau, industry associations (ACCA, PHCC,
                  NARI), local Chamber of Commerce, and social media.
                </p>
                <p>
                  <strong>The key requirement: consistency.</strong> Your business name, address,
                  phone number, and service area must be identical across every platform.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="not-prose my-10">
            <div className="flex items-start gap-6">
              <span className="text-7xl font-black text-[#1A5C3A]/10 leading-none shrink-0 select-none">
                03
              </span>
              <div className="prose pt-2">
                <h3 className="mt-0">Build Topical Authority on Your Website</h3>
                <p>
                  For each service you offer, your website should include: what the service involves,
                  common problems and solutions, cost information with ranges and factors, FAQ
                  sections with real homeowner questions, and service area-specific pages.
                </p>
                <p>
                  If your website has five pages, AI has almost nothing to work with. Contractors
                  getting recommended by AI have 20, 30, 50+ pages of relevant content. The depth
                  and specificity of your content is what signals topical authority to both AI models
                  and traditional search engines.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="not-prose my-10">
            <div className="flex items-start gap-6">
              <span className="text-7xl font-black text-[#1A5C3A]/10 leading-none shrink-0 select-none">
                04
              </span>
              <div className="prose pt-2">
                <h3 className="mt-0">Generate and Respond to Reviews at Scale</h3>
                <p>
                  Review volume and sentiment are among the strongest signals AI uses. For AI
                  specifically:
                </p>
                <ul>
                  <li>
                    <strong>Volume matters</strong> &mdash; 500 reviews beats 50 at the same star rating
                  </li>
                  <li>
                    <strong>Recency matters</strong> &mdash; consistent 2026 reviews outperform a burst
                    from 2022
                  </li>
                  <li>
                    <strong>Sentiment keywords matter</strong> &mdash; reviewers mentioning specific
                    services helps AI match you to relevant queries
                  </li>
                  <li>
                    <strong>Responses matter</strong> &mdash; replying to every review signals an active,
                    engaged business
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="not-prose my-10">
            <div className="flex items-start gap-6">
              <span className="text-7xl font-black text-[#1A5C3A]/10 leading-none shrink-0 select-none">
                05
              </span>
              <div className="prose pt-2">
                <h3 className="mt-0">Get Mentioned in Authoritative Sources</h3>
                <p>
                  Ways to earn authoritative mentions: trade publications, local media, industry
                  events, awards programs (Inc. 5000, Best of [City]), and manufacturer partnerships
                  (Trane, Carrier, Rheem dealer locators).
                </p>
                <p>
                  Every third-party mention of your business is a data point that makes AI more
                  confident recommending you. The more credible the source, the stronger the signal.
                  When I was running my company, landing on the Inc. 5000 list generated more
                  inbound mentions than almost any other marketing activity we did. That credibility
                  compounds over time.
                </p>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="not-prose my-10">
            <div className="flex items-start gap-6">
              <span className="text-7xl font-black text-[#1A5C3A]/10 leading-none shrink-0 select-none">
                06
              </span>
              <div className="prose pt-2">
                <h3 className="mt-0">Create FAQ-Rich Content</h3>
                <p>Create FAQ pages or blog posts that answer questions like:</p>
                <ul>
                  <li>&ldquo;How much does a new AC unit cost in [city]?&rdquo;</li>
                  <li>&ldquo;What are the signs I need a new water heater?&rdquo;</li>
                  <li>&ldquo;How often should I have my furnace inspected?&rdquo;</li>
                  <li>&ldquo;What should I look for when hiring a plumber/HVAC tech/roofer?&rdquo;</li>
                </ul>
                <p>
                  Structure these with the question as an H2 or H3 heading, followed by a thorough
                  100&ndash;200 word answer. This format is what AI models extract most efficiently.
                  It also tends to perform well in traditional search, which means this investment
                  works on two fronts simultaneously.
                </p>
              </div>
            </div>
          </div>

          {/* Step 7 */}
          <div className="not-prose my-10">
            <div className="flex items-start gap-6">
              <span className="text-7xl font-black text-[#1A5C3A]/10 leading-none shrink-0 select-none">
                07
              </span>
              <div className="prose pt-2">
                <h3 className="mt-0">Monitor and Measure Your AI Visibility</h3>
                <p><strong>Monthly monitoring checklist:</strong></p>
                <ul>
                  <li>
                    Search your business name and top services in ChatGPT, Perplexity, and Google AI
                    Overviews
                  </li>
                  <li>Document whether you&rsquo;re recommended, cited, or absent</li>
                  <li>Note which competitors appear</li>
                  <li>
                    Track referral traffic from AI platforms in Google Analytics (chat.openai.com,
                    perplexity.ai)
                  </li>
                  <li>Monitor review velocity</li>
                  <li>Check citation accuracy quarterly</li>
                </ul>
              </div>
            </div>
          </div>

          {/* GEO + SEO */}
          <h2>GEO + SEO: Why You Need Both</h2>

          <p>
            GEO does not replace SEO. Traditional Google search still drives the majority of local
            service leads.
          </p>

          <blockquote className="border-l-4 border-[#3A9E6A] pl-6 my-8 text-xl font-semibold text-[#1a1a1a] not-prose">
            SEO captures the people searching Google today. GEO captures the people asking AI
            tomorrow. And they reinforce each other.
          </blockquote>

          <p>
            Strong SEO improves GEO visibility, and GEO-optimized content tends to rank better in
            traditional search. The keyword research, content development, and citation building
            that powers one also powers the other. They&rsquo;re complementary, not competing.
          </p>

          <div className="bg-[#C8EDD2] rounded-xl p-6 my-8 not-prose">
            <p className="text-sm font-semibold text-[#1A5C3A] uppercase tracking-wider mb-3">
              Budget Recommendation
            </p>
            <p className="text-base text-gray-800 leading-relaxed">
              If you&rsquo;re currently spending $5,000/month on SEO and PPC, allocate 20% toward
              GEO-specific optimization. This includes content development, citation management,
              review generation systems, and AI visibility monitoring.
            </p>
          </div>

          <p>
            For contractors with service pages already built out for{" "}
            <Link href="/hvac-seo" className="text-[#1A5C3A] font-semibold hover:text-[#0D2318] underline underline-offset-2">
              HVAC
            </Link>
            ,{" "}
            <Link href="/plumbing-seo" className="text-[#1A5C3A] font-semibold hover:text-[#0D2318] underline underline-offset-2">
              plumbing
            </Link>
            , and{" "}
            <Link href="/roofing-seo" className="text-[#1A5C3A] font-semibold hover:text-[#0D2318] underline underline-offset-2">
              roofing
            </Link>
            , the GEO layer builds directly on that foundation. You&rsquo;re not starting over &mdash; you&rsquo;re
            extending what you already have.
          </p>

          {/* Common Mistakes */}
          <h2>Common Mistakes Contractors Make With AI Search</h2>

          <h3>&ldquo;AI Search Will Pass &mdash; I&rsquo;ll Wait&rdquo;</h3>

          <p>
            This is the same thing contractors said about Google Maps in 2010. Waiting is not a
            strategy. The platforms are growing too fast, the homeowner behavior shift is already
            underway, and the first-mover window is measured in months, not years.
          </p>

          <h3>Thinking Traditional SEO Is Enough</h3>

          <p>
            Good SEO helps your GEO visibility, but it&rsquo;s not sufficient. They overlap but
            aren&rsquo;t the same thing. SEO focuses on matching keywords and earning backlinks.
            GEO requires structured data, conversational content formats, consistent citations
            across every platform, and the kind of topical depth that signals genuine expertise.
          </p>

          <h3>Having a Thin Website</h3>

          <p>
            If your website has five pages, AI has almost nothing to work with. Contractors
            getting recommended by AI have 20, 30, 50+ pages of relevant content. Every page
            that answers a real homeowner question is a signal that your business has depth and
            credibility.
          </p>

          <h3>Ignoring Reviews or Not Responding</h3>

          <p>
            Every review is a data point AI processes. Not generating new reviews means your data
            is going stale. Not responding to reviews signals a business that doesn&rsquo;t engage
            with its customers &mdash; which AI interprets as a credibility risk.
          </p>

          <h3>Using a Template Website That Looks Like Everyone Else</h3>

          <p>
            When AI evaluates multiple contractors and three of them have nearly identical website
            content, it has no basis to differentiate or recommend one over another. Original,
            specific content about your company &mdash; your actual service area, your team, your
            process, your real job photos &mdash; is what gives AI a reason to recommend you over
            the next guy.
          </p>

          {/* What To Do Right Now */}
          <h2>What To Do Right Now</h2>

          <p>
            The contractors who moved first on Google Maps dominated their markets for a decade.
            The same window is open right now with AI search.
          </p>

          <p>
            Start with the audit in Step 1. It costs you 15 minutes and gives you an honest
            picture of where you stand. Most contractors who do it are surprised by what they
            find &mdash; either completely absent from AI results, or appearing in ways they never
            intentionally set up. Either way, knowing is the starting point.
          </p>

          <p>
            If you want a professional audit that covers all four major AI platforms and gives
            you a prioritized action list, that&rsquo;s what we do at Sequoia GEO. No pitch, no
            obligation. Just a clear picture of where you are and what to do about it.
          </p>

        </div>

        {/* Author bio */}
        <div className="mt-16 pt-10 border-t border-gray-200">
          <div className="flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0D2318] text-white text-lg font-black">
              AH
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1a1a1a]">Aaron Husak</p>
              <p className="text-sm text-[#1A5C3A] font-medium">Founder, Sequoia GEO</p>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Aaron scaled an HVAC and plumbing company to 130+ employees and 4x Inc. 5000
                recognition before founding Sequoia GEO. He now helps home service contractors
                build the kind of digital presence that gets them recommended by both Google and
                AI &mdash; not just found.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-[#0D2318]">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-16 sm:py-20 text-center">
          <p className="section-overline text-[#3A9E6A] mb-4">Free Audit</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl leading-[1.08]">
            Want us to check your AI visibility for free?
          </h2>
          <p className="mt-5 text-lg text-[#C8EDD2]/75 leading-relaxed max-w-xl mx-auto">
            We audit where your business appears across ChatGPT, Gemini, Perplexity, and Google AI
            Overviews. Takes about 3 business days. No pitch, no obligation.
          </p>
          <div className="mt-8">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#3A9E6A] px-8 py-4 text-base font-semibold text-[#0D2318] shadow-lg shadow-black/20 transition hover:bg-[#6FCF97] hover:-translate-y-0.5"
            >
              Book a Free Audit
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
}
