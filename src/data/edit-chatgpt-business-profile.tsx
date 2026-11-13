import Link from "next/link";
import YouTubeFacade from "@/components/YouTubeFacade";
import transcript from "@/data/tutorial-transcripts/edit-chatgpt-business-profile.json";

export const editBusinessProfileSlug = "how-to-edit-chatgpt-business-profile";
const title = "How to Edit Your ChatGPT Business Profile: Step-by-Step Tutorial";
const description = "Watch Aaron Husak edit a verified ChatGPT business profile: category, description, contact details, location, and hours. Includes the full transcript.";
const dateISO = "2026-11-13";
const date = "November 13, 2026";
const category = "AI Search";
const readTime = "4:29 video + transcript";
export const editBusinessProfileCard = { slug: editBusinessProfileSlug, title, excerpt: description, date, category, readTime };

export const editBusinessProfilePost = {
  title, description, date, dateISO, category, readTime,
  image: "/images/edit-chatgpt-business-thumbnail.png",
  content: <>
    <p>Once my business verification was complete, I could start editing the information in my ChatGPT business profile. In this follow-up walkthrough, I work through the category, description, contact details, location, and operating hours for Sequoia GEO.</p>
    <div className="relative my-8 aspect-video overflow-hidden rounded-xl bg-black">
      <YouTubeFacade videoId="2FFq4KEDeOU" title={title} />
    </div>
    <p><a href="https://youtu.be/2FFq4KEDeOU" className="font-semibold underline">Watch the full tutorial on YouTube</a></p>
    <aside className="my-6 rounded-xl border border-[#C8EDD2] bg-[#fafaf8] p-6">
      <p><strong>What this tutorial completes:</strong> editing the business information available in my verified profile. The photo upload was not completed: the interface requested at least three photos, so I discarded that attempt. Products were deferred because the account requested domain verification.</p>
      <p>The interface observations in this recording are not universal rules about categories, photo minimums, eligibility, or verification times.</p>
    </aside>
    <p>Not claimed yet? Start with <Link href="/blog/how-to-claim-business-on-chatgpt" className="underline">How to Claim Your Business on ChatGPT: Step-by-Step Setup</Link>. This tutorial begins after that verification step.</p>
    <nav aria-label="Article sections" className="my-6 rounded-xl border border-gray-200 p-5"><strong>On this page</strong><ul>
      <li><a href="#editing-steps">Editing your business information</a></li>
      <li><a href="#unfinished-steps">Photos and products: what was left unfinished</a></li>
      <li><a href="#contractor-check">What a home service owner should check</a></li>
      <li><a href="#transcript">Full video transcript</a></li>
    </ul></nav>
    <h2 id="editing-steps">Editing your business information</h2>
    <ol>
      <li><strong>Open the business information editor.</strong> In my account, the verification prompt was gone and editing was available. If your profile still requests verification, complete that process before assuming the same controls will be accessible.</li>
      <li><strong>Choose a category that fits the business.</strong> I reviewed the category list and selected the closest match. Additional suggestions appeared after I entered a description. My interface appeared to allow one selected category; check the choices and behavior shown in your own account.</li>
      <li><strong>Add a description.</strong> I filled out the optional description to explain the business. The longer draft did not fit, but the screen did not show a numeric character limit. Use accurate, concise wording and confirm that it saves.</li>
      <li><strong>Review contact information.</strong> Check the website, business phone number, and email. Saving the contact information triggered an email verification code in my flow. Use contact details your team monitors and complete any verification requested.</li>
      <li><strong>Confirm the location.</strong> Review the business address shown and follow the confirmation prompt. The video demonstrates the controls offered for my business; it does not establish how every service-area business should configure an address.</li>
      <li><strong>Set hours and time zone.</strong> I selected the operating days, applied the hours, and confirmed Pacific Time, Los Angeles. Check the days, hours, and time zone before saving your own profile.</li>
    </ol>
    <h2 id="unfinished-steps">Photos and products: what was left unfinished</h2>
    <p>I attempted to upload one image. The interface then required at least three photos before saving, so I discarded the changes and left the photo task for later. The tutorial shows that interruption rather than a completed photo upload.</p>
    <p>For a home service business, use images that accurately represent the company, its people, and its work. The video mentions a plumber in front of a plumbing truck as an example. Check the current upload instructions for your account instead of treating the number shown in this recording as a permanent platform-wide requirement.</p>
    <p>The products section requested domain verification. I did not complete that step or add products in this video. Business-profile verification and the domain verification requested for products should not be treated as the same completed task.</p>
    <h2 id="contractor-check">What a home service owner should check</h2>
    <ul>
      <li>Does the description explain what the company actually does?</li>
      <li>Do the website, phone number, and email send customers to the right place?</li>
      <li>Are the location, operating days, hours, and time zone accurate?</li>
      <li>Which changes saved, and which still require a verification or upload step?</li>
    </ul>
    <p>The verification wait I mention is one account&apos;s experience, not a promised turnaround. Editing a profile also does not guarantee recommendations, leads, or booked jobs. Keep the information accurate, and distinguish profile updates from the results you later observe.</p>
    <h2 id="transcript">Full video transcript</h2>
    <p>Exported from the final edited Descript composition. Paragraph spacing is cleaned up; the spoken wording is retained. References to category behavior, photo requirements, and timing describe what appeared during this recording.</p>
    <p><a href="/transcripts/edit-chatgpt-business-profile.txt" download className="font-semibold underline">Download the transcript as text</a></p>
    <div className="rounded-xl border border-gray-200 bg-[#fafaf8] p-5 sm:p-8">
      {transcript.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
    </div>
  </>,
};
