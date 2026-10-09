import Link from "next/link";
import Image from "next/image";

const published = { date: "October 9, 2026", dateISO: "2026-10-09", readTime: "5 min read", category: "Podcast" };

export const podcastPosts = {
  "geo-vs-seo-home-service-podcast": {
    ...published,
    title: "GEO vs. SEO: What Home Service Businesses Should Measure",
    description: "Episode 1 of A Chat with Chat explores GEO, local SEO, customer trust, and how contractors can measure AI discovery without confusing mentions with jobs.",
    content: <>
      <p><strong>From A Chat with Chat, episode 1, recorded September 18, 2026.</strong> Aaron Husak and ChatGPT discuss what AI search changes for home service businesses, and which marketing fundamentals still matter.</p>
      <p>If a homeowner asks an AI tool to recommend an HVAC company, your business can become part of their shortlist before they visit your website. That creates a measurement question: how do you find out whether you appeared, what the answer said about you, and whether the person eventually contacted your company?</p>
      <p>In our first episode, we explored generative engine optimization, or GEO, through that practical lens. The goal is to understand customer discovery and improve the information available about your business. An AI mention alone does not establish that your marketing produced a lead or a job booked.</p>
      <h2>GEO and SEO share a foundation</h2>
      <p>SEO helps people discover useful pages through search. GEO work also examines how a business appears in generated answers: whether it is mentioned, recommended, cited, and described accurately. These are related goals, with substantial overlap in the work behind them.</p>
      <p>A contractor still needs clear service pages, accurate coverage information, accessible content, and evidence of actual experience. A heat-pump repair page should explain the problems the company handles and where it works. Original project photos and verified qualifications give a reader more to evaluate than a broad claim about being the best.</p>
      <p>Google explicitly says its established SEO practices apply to its AI search features. There is no special AI schema required. That is useful context when evaluating a proposal that presents GEO as an entirely separate technical system. <a href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noopener noreferrer">Read Google&apos;s AI features guidance.</a></p>
      <h2>Keep consumer research in its proper context</h2>
      <p>The episode examined BrightLocal&apos;s finding that 45% of surveyed consumers had used AI for local business recommendations during the previous year. That covers local businesses broadly. It does not mean 45% hired a contractor through AI, or that AI became their primary discovery channel.</p>
      <p>BrightLocal also describes consumers checking reviews and sources after receiving AI recommendations. The implication is that discovery and verification can happen in different places. A homeowner might encounter your name in an AI answer, examine your Google profile, read reviews, and then call from your website. <a href="https://www.brightlocal.com/research/lcrs-ai-trust/" target="_blank" rel="noopener noreferrer">Read BrightLocal&apos;s research and methodology.</a></p>
      <p>That sequence matters when assigning credit. A website visit attributed to Google does not necessarily tell you where the person first heard about the company. Conversely, a survey about AI adoption does not establish that AI is bringing jobs to your business today.</p>
      <h2>Ask customers what they actually searched</h2>
      <p>One of Aaron&apos;s practical recommendations was to go beyond asking how a caller found the business. When someone says ChatGPT or another AI tool recommended you, ask which tool they used and what question they entered. If they are willing, request a screenshot of the answer.</p>
      <p>That gives you actual buyer language to test. A question about an urgent AC repair can produce a different shortlist than a question about choosing a replacement system. Record the answer date and the location named in the question, alongside the customer&apos;s description of what happened next.</p>
      <p>Ask permission before saving a screenshot. Remove names, addresses, account details, and unrelated conversation. Keep only the question and recommendation needed for your review, and do not put a customer&apos;s private chat into another AI tool.</p>
      <h2>Build a repeatable visibility record</h2>
      <p>Choose a small set of relevant customer questions. Repeat them under documented conditions, and keep the original responses so comparisons are possible. Track whether the business appeared, whether its website was linked, which competitors appeared, and whether the answer accurately described its services.</p>
      <ul><li>A mention means the business name appeared.</li><li>A recommendation means the answer suggested the business as an option.</li><li>A citation means a source was linked or identified.</li><li>An inquiry and a job booked require separate evidence.</li></ul>
      <p>The immediate work is to correct unclear business information, strengthen useful service content, and investigate the sources behind recurring recommendations. No agency can guarantee inclusion in a generated answer.</p>
      <h2>What to do with this episode</h2>
      <p>Start by asking your team to capture the actual questions customers use. Then review whether your website and business profiles answer those needs accurately. This creates a more useful starting point than chasing one favorable screenshot.</p>
      <p><Link href="/media#our-podcast">Explore A Chat with Chat</Link> or continue with <Link href="/blog/same-prompt-different-hvac-ai-recommendations">our episode 2 Gemini test</Link>. To discuss your own discovery and inquiry tracking, <Link href="/contact">contact Sequoia GEO</Link>.</p>
    </>,
  },
  "same-prompt-different-hvac-ai-recommendations": {
    ...published,
    title: "Same Prompt, Different HVAC Picks: Our Gemini Search Test",
    description: "Our episode 2 Gemini test found recurring HVAC companies alongside changing answers and sources. Here is what contractors can learn from that limited sample.",
    content: <>
      <p><strong>From A Chat with Chat, episode 2, recorded September 30, 2026.</strong> <Link href="/podcast/episode-2">Watch the full episode or listen to the audio.</Link></p>
      <Link href="/podcast/episode-2"><Image src="/images/podcast/episode-2.png" alt="A Chat with Chat episode 2, Would AI pick your HVAC company?" width={1672} height={941} className="my-6 h-auto w-full rounded-xl" /></Link>
      <p>Would an AI tool recommend your HVAC company when a homeowner asks for help? A single answer can show whether you appeared in that moment. It cannot establish a permanent ranking or explain why the system chose you.</p>
      <p>In episode 2, Aaron Husak and ChatGPT explored that distinction through repeated Gemini searches for an HVAC company in Phoenix to help with an AC problem. Aaron compared answers in Flash and Pro and examined the visible sources. The conversation began with a hypothesis that different models might draw on different kinds of material. The resulting sample raised useful questions, but did not prove a general rule about how either model selects contractors.</p>
      <h2>Recurring names did not mean identical answers</h2>
      <p>Some companies recurred across the Flash runs discussed in the episode. The answer format, company count, order, and visible sources also changed. That is evidence of overlap within those runs, alongside variation.</p>
      <p>It is tempting to turn a recurring shortlist into a ranking report. But the observation is narrower: certain names appeared repeatedly for this question under the conditions of that session. We did not establish that another homeowner, location, date, or phrasing would produce the same result.</p>
      <h2>A source link is a clue, not a selection formula</h2>
      <p>Examining linked pages helped us see what information was available about the recommended businesses. Service coverage, AC repair information, and statements about urgent help were relevant to the question.</p>
      <p>That does not prove those page features caused a recommendation. A company&apos;s own statement about fast service is also a claim to evaluate, rather than independent evidence of response time. Likewise, an answer without a visible source panel does not establish that no web information informed it.</p>
      <p>The practical next step is to save both the answer and its visible citations. Keep a business mention separate from a link to that business&apos;s website. A recommendation and a citation can occur independently.</p>
      <h2>The pricing question remained unanswered</h2>
      <p>We also asked whether published pricing might explain the results. The Pro-linked pages discussed in the episode did not provide a standard AC repair price. The test therefore did not support a conclusion that price drove those recommendations.</p>
      <p>Publishing accurate diagnostic fees or explaining how estimates work can help customers make decisions. It should be evaluated on that basis, with clear terms. This episode does not demonstrate that adding a price will improve AI visibility.</p>
      <h2>Make the next comparison more disciplined</h2>
      <p>Our recording was an exploratory conversation, not a controlled experiment. A stronger follow-up should hold the question and target market consistent, run each model multiple times, and record the conditions. Comparisons across different tools should also acknowledge their different search experiences.</p>
      <p>The working question asked Gemini to find an HVAC company in Phoenix for an AC problem. The recording documents the September 30 session and the selected Flash and Pro modes, but does not establish a version-controlled or independently reproduced benchmark. Use this recap to plan a better test, rather than as a competitive ranking report.</p>
      <ol><li>Use an actual customer question, including the service need and location.</li><li>Record the tool, selected model, date, and relevant account or location conditions.</li><li>Save every response, including runs where your business does not appear.</li><li>Log recommended companies and cited sources separately.</li><li>Compare patterns over time, then investigate what changed.</li></ol>
      <p>Repeated tests can make observations more useful. They still do not reveal a proprietary selection formula, and a visibility trend is not proof of additional jobs booked.</p>
      <h2>What contractors should improve now</h2>
      <p>Make your real service coverage explicit. Explain which AC problems you handle, how someone contacts you, and what urgent-service availability actually means. Support those statements with accurate qualifications, original work examples, and consistent information across your website and profiles.</p>
      <p>When a customer says AI sent them, capture the question they used and how they chose your business afterward. Those details connect visibility research to the customer journey.</p>
      <p><Link href="/podcast/episode-2">Watch episode 2</Link>, read <Link href="/blog/geo-vs-seo-home-service-podcast">our introduction to GEO and SEO</Link>, or <Link href="/contact">discuss your own AI search measurement</Link>. The aim is useful evidence about discovery, followed by verified inquiries and jobs booked.</p>
    </>,
  },
  "hvac-website-trust-ai-search-shaurya-jain": {
    ...published,
    title: "HVAC Website Trust and AI Search: Lessons with Shaurya Jain",
    description: "Episode 3 guest Shaurya Jain discusses HVAC website research, reviews, and reported ChatGPT inquiries. Practical lessons, with measurement limits made clear.",
    content: <>
      <p><strong>From A Chat with Chat, episode 3, recorded October 9, 2026.</strong> The full interview is scheduled for October 13. This article shares takeaways from the recorded conversation; the video is not available here yet.</p>
      <Image src="/images/podcast/episode-3.png" alt="Aaron Husak and Shaurya Jain, A Chat with Chat episode 3" width={1672} height={941} className="my-6 h-auto w-full rounded-xl" />
      <p>A website can attract attention and still leave a homeowner unsure whom to trust or how to get help. In our first guest interview, Aaron Husak and ChatGPT spoke with Shaurya Jain, founder of <a href="https://www.honesthvacmarketing.agency/" target="_blank" rel="noopener noreferrer">Honest HVAC Marketing Agency</a>, about that gap.</p>
      <p>Shaurya brought research on HVAC websites and customer reviews, along with an account of receiving inquiries through ChatGPT. The strongest practical thread was how contractors present their business, help a visitor contact them, and verify whether marketing is producing real inquiries.</p>
      <h2>A website-feature audit is a starting point</h2>
      <p>Shaurya described using Python and Claude to examine roughly 1,300 HVAC websites. His checks covered contact options, trust signals, measurement, and usability on a phone. He explained that some candidate sites could not be examined because they blocked the automated access, so they were excluded.</p>
      <p>Among the gaps he discussed were missing alternatives to calling, limited presentation of customer reviews, and a lack of identifiable crew or work photos. These are his reported research findings. The interview did not independently validate every automated assessment.</p>
      <p>More importantly, the study examined website features. It did not establish how many leads those sites generated or measure a conversion improvement after a repair. A missing feature is worth investigating. Its effect on bookings needs a separate test.</p>
      <h2>Give homeowners a reason to trust the people arriving</h2>
      <p>Aaron connected the discussion to the realities of home service: a customer is choosing people who will enter their home. Real team photos, equipment or project examples, and relevant customer feedback can help someone evaluate the company behind the page.</p>
      <p>Review your own site from that customer&apos;s perspective. Can someone understand who performs the work? Are qualifications and service coverage accurate? Do project examples explain the problem and the work actually performed? Use photos you have permission to publish and protect customer privacy.</p>
      <p>Original evidence gives readers something concrete to consider. It should not be presented as a guaranteed mechanism for winning an AI recommendation.</p>
      <h2>Make contact options work in practice</h2>
      <p>The interview&apos;s website discussion offers a useful inspection checklist: a visible phone number, a working mobile call link, a clear form or booking path when appropriate, and readable information on smaller screens.</p>
      <p>Check delivery as well as appearance. A form on a page is not proof that messages reach the team. A booking button is not proof that a usable appointment can be selected. Verify the complete path, then confirm who responds to the inquiry.</p>
      <p>Only add chat, texting, or another contact method if someone owns it. Creating more ways to reach the company can create more unanswered requests when the handoff is unclear.</p>
      <h2>Treat a ChatGPT inquiry as something to investigate</h2>
      <p>Shaurya described a one-page website receiving inquiries through ChatGPT despite little intentional SEO work. That is his account of what happened, not a demonstrated recipe for generating leads without SEO.</p>
      <p>The useful follow-up is attribution: did the person report finding the company through ChatGPT, and can any identifiable referral be connected to an inquiry? Those are different types of evidence. Capture the question and answer when possible, and keep self-reported discovery separate from tracked visits.</p>
      <p>Our discussion also explored location and repeated searches. A consistent answer in one session does not establish what every person in the named city will see. Document test conditions before comparing results.</p>
      <h2>Respond to reviews as an operator</h2>
      <p>The conversation turned to negative reviews and the experience behind them. A public response should show that the company listens and offers a constructive way to resolve a problem. Avoid exposing customer details or turning the reply into an argument.</p>
      <p>Look for recurring concerns that deserve operational attention: expectations, explanations, communication, or follow-through. A response cannot substitute for fixing the underlying issue.</p>
      <h2>One useful action after the interview</h2>
      <p>Pick one customer path and inspect it from discovery through response. Identify one specific gap, correct it, and compare actual inquiries before and after while noting other changes. Keep qualified inquiries and jobs booked separate from page visits or AI mentions.</p>
      <p><Link href="/media#our-podcast">Explore the show and available episodes</Link>, read <Link href="/blog/same-prompt-different-hvac-ai-recommendations">our Gemini test recap</Link>, or <Link href="/contact">talk with Sequoia GEO about your website and inquiry process</Link>.</p>
    </>,
  },
};

export const podcastPostCards = Object.entries(podcastPosts).map(([slug, post]) => ({ slug, title: post.title, excerpt: post.description, date: post.date, readTime: post.readTime, category: post.category }));
