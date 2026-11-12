import Link from "next/link";
import YouTubeFacade from "@/components/YouTubeFacade";
import transcript from "@/data/tutorial-transcripts/chatgpt-business-hub.json";

export const businessWalkthroughSlug = "how-to-claim-business-on-chatgpt";
const title = "How to Claim Your Business on ChatGPT: Step-by-Step Setup";
const description = "Follow Aaron Husak's ChatGPT Business Hub walkthrough: claim a business, submit verification, explore the dashboard, and read the full transcript.";
const dateISO = "2026-11-12";
const date = "November 12, 2026";
const category = "AI Search";
const readTime = "Walkthrough + full transcript";
export const businessWalkthroughCard = { slug: businessWalkthroughSlug, title, excerpt: description, date, category, readTime };

export const businessWalkthroughPost = {
  title, description, date, dateISO, category, readTime,
  image: "/images/chatgpt-business-thumbnail.png",
  content: <>
    <p>I recorded the process of claiming Sequoia GEO in ChatGPT, from finding the business to submitting verification and exploring Business Hub. This walkthrough shows what I encountered, including what was still pending when the recording ended.</p>
    <div className="relative my-8 aspect-video overflow-hidden rounded-xl bg-black">
      <YouTubeFacade videoId="QqhB09OEC-k" title={title} />
    </div>
    <p><a className="font-semibold underline" href="https://youtu.be/QqhB09OEC-k">Watch the walkthrough on YouTube</a></p>
    <aside className="my-6 rounded-xl border border-[#C8EDD2] bg-[#fafaf8] p-6">
      <p><strong>Recording status, November 12, 2026:</strong> the business claim was accepted, but final identity/business verification was still pending. Agent Builder was not available in my account. This video does not demonstrate a completed agent launch or guarantee placement in ChatGPT answers.</p>
    </aside>
    <nav aria-label="Article sections" className="my-6 rounded-xl border border-gray-200 p-5"><strong>On this page</strong><ul>
      <li><a href="#before-you-start">Before you start</a></li>
      <li><a href="#setup-steps">The setup steps I followed</a></li>
      <li><a href="#dashboard">What the dashboard showed</a></li>
      <li><a href="#limitations">What to keep in perspective</a></li>
      <li><a href="#transcript">Full walkthrough transcript</a></li>
    </ul></nav>
    <h2 id="before-you-start">Before you start</h2>
    <p>Use an account authorized to represent your business. Have access to the business phone number or your website&apos;s DNS settings, depending on the claim method offered. My flow also requested identity and business verification. Have the necessary information available, and enter it only through the official verification flow.</p>
    <p>Start from <a href="https://chatgpt.com/business-hub" className="underline">ChatGPT Business Hub</a> or <a href="https://openai.com/index/introducing-businesses-chatgpt/" className="underline">OpenAI&apos;s official Businesses in ChatGPT announcement</a>. The November 10 announcement describes the beta and eligibility. The interface and available features may change.</p>
    <h2 id="setup-steps">The setup steps I followed</h2>
    <ol>
      <li><strong>Find the business.</strong> Search for the company name and confirm that the business shown is the one you are authorized to manage.</li>
      <li><strong>Start the claim.</strong> Select the claim option and continue with the account you want to use to manage the profile.</li>
      <li><strong>Verify the claim using an offered method.</strong> My screen offered a code by text or phone call, or website DNS verification. I used the phone route. Use the options actually presented for your business.</li>
      <li><strong>Complete the additional verification request.</strong> After the claim was accepted, Business Hub asked for verification before editing business information or publishing an agent. I continued on my phone for the identity step and submitted the requested business details.</li>
      <li><strong>Check the status.</strong> Submission is not the same as approval. The verification status was still pending when I finished, so I could not demonstrate the remaining profile-editing and product-upload steps.</li>
      <li><strong>Review the dashboard.</strong> I explored the overview and available cards to understand what could be managed once the required verification and feature access were in place.</li>
    </ol>
    <h2 id="dashboard">What the dashboard showed</h2>
    <p>The recording shows labels for mentions, profile views, website clicks, discovery topics, website access, and agent insights. These are different measures. A mention or profile view is not a lead or a booked job.</p>
    <p>The products area required completed verification. Agent Builder displayed an availability message rather than an active builder. The advertising and ChatGPT Business upgrade cards led to separate flows, which I did not complete in this tutorial.</p>
    <h2 id="limitations">What to keep in perspective</h2>
    <ul>
      <li><strong>Business Hub and the ChatGPT Business subscription are different.</strong> The workspace upgrade card did not represent another step I completed to claim the company.</li>
      <li><strong>Agent availability is narrower than profile claiming.</strong> OpenAI&apos;s announcement initially limits Business Agents to eligible ecommerce and online service businesses in the United States. Do not assume every HVAC, plumbing, or roofing company can launch one immediately.</li>
      <li><strong>Insights are aggregated.</strong> OpenAI says they are subject to activity thresholds and do not reveal users&apos; conversations or agent chats. Discovery topics are not a complete list of every customer prompt.</li>
      <li><strong>The connection interruption was local.</strong> The server-address errors in my recording were followed by a confirmed internet outage. They are not evidence that the claim process itself was unavailable.</li>
      <li><strong>The advertising credit was an account-screen observation.</strong> The amount mentioned in the recording is not a promise that every viewer will receive the same offer.</li>
    </ul>
    <p>For a contractor, this is an opportunity to review the information associated with the business. Keep service details, business information, project evidence, and customer experience accurate across your existing channels. A claimed profile alone does not establish that ChatGPT will recommend the company.</p>
    <p>Related reading: <Link href="/blog/chatgpt-knows-your-company-does-it-recommend-you" className="underline">ChatGPT recognition versus recommendations</Link>, and <Link href="/blog/how-to-use-geo-tools-contractors" className="underline">how contractors can interpret AI search reports</Link>.</p>
    <h2 id="transcript">Full walkthrough transcript</h2>
    <p>This is the supplied transcript, with editing markers removed, paragraph spacing cleaned up, and Sequoia GEO&apos;s name and website spelling corrected. Spoken observations and predictions reflect the recording, not a promise of current feature access. The notes above clarify rollout limits and verification status.</p>
    <p><a href="/transcripts/chatgpt-business-hub.txt" download className="font-semibold underline">Download the transcript as text</a></p>
    <div className="rounded-xl border border-gray-200 bg-[#fafaf8] p-5 sm:p-8">
      {transcript.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
    </div>
  </>,
};
