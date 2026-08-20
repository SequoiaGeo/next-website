import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Top 10 GitHub Repositories for Home Service Businesses",
  description:
    "Ten public-code repositories worth knowing for home service businesses, from estimates and scheduling to automation, customer communication, analytics, and SEO research.",
  alternates: {
    canonical: "https://www.sequoiageo.com/github-repos-home-service-businesses",
  },
};

type Repository = {
  rank: number;
  name: string;
  category: string;
  href: string;
  bestFor: string;
  whyItMadeTheList: string;
  implementation: "High" | "Very high";
  watchOut: string;
};

const repositories: Repository[] = [
  {
    rank: 1,
    name: "ERPNext",
    category: "Business operations",
    href: "https://github.com/frappe/erpnext",
    bestFor: "A larger operator that needs accounting, customers, projects, inventory, assets, and internal workflows connected in one system.",
    whyItMadeTheList:
      "It is a broad open-source business system, not just a lead tool. That makes it relevant when disconnected back-office systems are creating operational friction.",
    implementation: "Very high",
    watchOut:
      "Do not treat it as a casual replacement for ServiceTitan, Jobber, or your accounting system. Data migration, dispatch workflow, permissions, backups, and support ownership need a real plan.",
  },
  {
    rank: 2,
    name: "Invoice Ninja",
    category: "Quotes, invoicing, and payments",
    href: "https://github.com/invoiceninja/invoiceninja",
    bestFor: "Smaller teams that want more control over estimates, invoices, payments, projects, and time tracking.",
    whyItMadeTheList:
      "Quoting and invoice follow-up are direct operational problems for many service businesses, and this repository focuses on that layer rather than a full enterprise system.",
    implementation: "High",
    watchOut:
      "Its public code does not remove the need to choose a compliant payment processor, configure tax rules, protect customer data, and reconcile with your accounting process.",
  },
  {
    rank: 3,
    name: "n8n",
    category: "Automation",
    href: "https://github.com/n8n-io/n8n",
    bestFor: "Teams that need systems to hand off a lead, missed call, form submission, review request, or completed job without staff copying data between tools.",
    whyItMadeTheList:
      "Automation is often the bridge between a website, CRM, phone platform, field-service software, and reporting. n8n supports visual workflows and custom integrations.",
    implementation: "High",
    watchOut:
      "n8n is fair-code, not a blank-check promise that every use is free. More importantly, a broken automation can quietly lose leads, duplicate records, or send the wrong message. Build monitoring and a manual fallback.",
  },
  {
    rank: 4,
    name: "Cal.com",
    category: "Scheduling",
    href: "https://github.com/calcom/cal.diy",
    bestFor: "Businesses that need booking flows for estimates, commercial consultations, recruiting, partner calls, or specialty-service appointments.",
    whyItMadeTheList:
      "A scheduling link can remove back-and-forth from an appointment path. The repository gives a technical team more control over the booking experience than a generic calendar link.",
    implementation: "High",
    watchOut:
      "A booking tool should not create a second dispatch calendar. Define what belongs in the field-service system, who owns availability, and how booked appointments reach the office before launch.",
  },
  {
    rank: 5,
    name: "Chatwoot",
    category: "Customer communication",
    href: "https://github.com/chatwoot/chatwoot",
    bestFor: "Teams that want website chat, email, and supported messaging channels in a shared inbox instead of scattered across individual phones and logins.",
    whyItMadeTheList:
      "A shared view of conversations can make speed to lead more accountable, especially when multiple office staff members respond to new inquiries.",
    implementation: "High",
    watchOut:
      "Do not turn on a new chat channel without staffing it. A visible chat bubble that receives no timely answer damages trust faster than no chat at all.",
  },
  {
    rank: 6,
    name: "Twenty",
    category: "CRM",
    href: "https://github.com/twentyhq/twenty",
    bestFor: "A business with a clear sales process that needs a flexible CRM for commercial accounts, referral partners, or non-dispatch pipeline work.",
    whyItMadeTheList:
      "Home service businesses often have a second relationship pipeline outside day-to-day residential dispatch. A CRM can give commercial follow-up and partner development a home.",
    implementation: "High",
    watchOut:
      "Do not create a second CRM just because the interface looks better. Decide which system owns the customer record, then document the sync and ownership rules.",
  },
  {
    rank: 7,
    name: "Mautic",
    category: "Marketing automation",
    href: "https://github.com/mautic/mautic",
    bestFor: "Operators with permissioned email lists who need customer education, maintenance reminders, reactivation, and segmented follow-up under their own control.",
    whyItMadeTheList:
      "A home service database is valuable only when its consent status, segments, and follow-up logic are managed carefully. Mautic is built for marketing automation rather than dispatch.",
    implementation: "Very high",
    watchOut:
      "Email compliance, sender reputation, consent records, unsubscribe handling, and deliverability are business responsibilities. A self-hosted platform does not make those obligations disappear.",
  },
  {
    rank: 8,
    name: "Formbricks",
    category: "Customer feedback",
    href: "https://github.com/formbricks/formbricks",
    bestFor: "Teams that want to learn from completed jobs, estimate follow-up, onboarding, or website visitors without handing every survey response to another black-box platform.",
    whyItMadeTheList:
      "Short, well-timed feedback requests can surface training, review, and follow-up opportunities. It is more useful for structured learning than for replacing a high-volume contact form.",
    implementation: "High",
    watchOut:
      "Do not make feedback collection a substitute for answering complaints. Keep surveys short, protect customer data, and route serious responses to a real person.",
  },
  {
    rank: 9,
    name: "PostHog",
    category: "Website analytics",
    href: "https://github.com/PostHog/posthog",
    bestFor: "A company with a custom website or customer portal that needs to understand where visitors abandon, which forms work, and what changes improve completion.",
    whyItMadeTheList:
      "Analytics are only useful when they answer a real decision. PostHog brings product analytics, session replay, and experimentation tools into one technical platform.",
    implementation: "Very high",
    watchOut:
      "Configure privacy, consent, retention, data masking, and event definitions before collecting anything. Session replay and analytics are not a license to capture sensitive customer information.",
  },
  {
    rank: 10,
    name: "OpenSEO",
    category: "SEO research",
    href: "https://github.com/every-app/open-seo",
    bestFor: "An in-house marketer or agency that needs keyword research, rank tracking, competitor research, site audits, backlink work, and AI-visibility workflows without buying a large SEO suite.",
    whyItMadeTheList:
      "OpenSEO is designed as an open alternative to large SEO platforms. It supports agent workflows and uses data access the operator controls, which makes it interesting for repeatable research.",
    implementation: "High",
    watchOut:
      "It needs a DataForSEO account for data access, and the data still needs human validation. It supplements Search Console, Analytics, Business Profile evidence, and real lead records. It does not replace them.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Top 10 GitHub Repositories for Home Service Businesses",
  description:
    "Ten public-code repositories worth knowing for home service businesses, from estimates and scheduling to automation, customer communication, analytics, and SEO research.",
  author: {
    "@type": "Person",
    "@id": "https://www.sequoiageo.com/#aaron-husak",
    name: "Aaron Husak",
  },
  publisher: {
    "@id": "https://www.sequoiageo.com/#organization",
  },
  datePublished: "2026-08-20",
  dateModified: "2026-08-20",
  mainEntityOfPage: "https://www.sequoiageo.com/github-repos-home-service-businesses",
};

export default function GitHubReposForHomeServiceBusinessesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.sequoiageo.com/" },
          {
            name: "Top 10 GitHub Repositories for Home Service Businesses",
            url: "https://www.sequoiageo.com/github-repos-home-service-businesses",
          },
        ]}
      />

      <section className="bg-[#0D2318] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="section-overline mb-4">Resources for home service operators</p>
            <h1 className="font-serif text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              Top 10 GitHub Repositories for Home Service Businesses
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-[#C8EDD2]/80">
              A technical-owner resource for evaluating public-code projects behind estimates,
              follow-up, automation, customer communication, analytics, and SEO research.
            </p>
            <p className="mx-auto mt-7 max-w-3xl rounded-xl border border-[#C8EDD2]/15 bg-white/5 px-5 py-4 text-sm leading-relaxed text-[#C8EDD2]/70">
              This is a practical fit list, not a ranking by GitHub stars or a recommendation to
              replace a working field-service platform. We reviewed public repository
              documentation on August 20, 2026. Use it to ask better evaluation questions, not
              to choose operational software from a list. Every project needs an accountable
              technical owner before it touches customer or operational data.
            </p>
            <p className="mt-5 text-sm text-[#C8EDD2]/55">By Aaron Husak · August 20, 2026</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
            GitHub is not the software. It is where you inspect the software.
          </h2>
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-gray-600">
            <p>
              Most home service businesses should not self-host their dispatch stack because a
              GitHub repository looked promising. A repository is the public code, issue history,
              documentation, license, and maintenance record behind an application. It can give
              you more control, but it also gives you responsibility for security, updates,
              backups, integration failures, and support.
            </p>
            <p>
              The better question is not &ldquo;which tool is free?&rdquo; It is: &ldquo;which system
              removes a real operating constraint, and who will own it after launch?&rdquo; That is
              how this list is ordered.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="section-overline mb-4">The list</p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Ten repositories with a real home-service use case
            </h2>
            <div className="mt-10 space-y-6">
              {repositories.map((repository) => (
                <article
                  key={repository.name}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
                >
                  <div className="flex flex-col gap-5 border-b border-gray-100 bg-[#0D2318] px-7 py-7 sm:flex-row sm:items-start sm:justify-between sm:px-9">
                    <div className="flex gap-5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#3A9E6A] text-lg font-extrabold text-[#0D2318]">
                        {repository.rank}
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-[#3A9E6A]">
                          {repository.category}
                        </p>
                        <h3 className="mt-2 font-serif text-2xl font-extrabold text-white sm:text-3xl">
                          {repository.name}
                        </h3>
                      </div>
                    </div>
                    <a
                      href={repository.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#C8EDD2] transition hover:text-white"
                    >
                      View repository
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M7 17 17 7M7 7h10v10" />
                      </svg>
                    </a>
                  </div>
                  <div className="grid gap-7 px-7 py-7 sm:grid-cols-2 sm:px-9">
                    <div>
                      <p className="text-sm font-bold text-[#1A5C3A]">Best for</p>
                      <p className="mt-2 leading-relaxed text-gray-700">{repository.bestFor}</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#1A5C3A]">Why it made the list</p>
                      <p className="mt-2 leading-relaxed text-gray-700">
                        {repository.whyItMadeTheList}
                      </p>
                    </div>
                    <div className="sm:col-span-2 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4">
                      <p className="text-sm font-bold text-amber-900">
                        Technical involvement: {repository.implementation}
                      </p>
                      <p className="mt-2 leading-relaxed text-amber-900/80">{repository.watchOut}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-sm font-semibold text-[#1A5C3A]">Where we would start</p>
          <h2 className="mt-3 font-serif text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
            Use OpenSEO as research infrastructure, not as a public claim machine.
          </h2>
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-gray-600">
            <p>
              OpenSEO is the project on this list we would first test inside Sequoia GEO. Its
              public documentation describes keyword research, rank tracking, competitor
              insights, site audits, backlinks, and AI-visibility workflows. It can work with
              agent workflows, while the underlying search data remains tied to the account that
              funds it.
            </p>
            <p>
              The responsible pilot is private: compare a small set of its findings with Search
              Console, Analytics, Google Business Profile evidence, and existing keyword research.
              If it is reliable and materially reduces research time, then we can decide whether
              to add it to the operating system. We would not publish its estimates as client
              results, and we would not connect client data without authorization.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a1a] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="section-overline mb-4">Before you build</p>
          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Five questions before any repository touches the business
          </h2>
          <ol className="mt-10 space-y-5">
            {[
              "What operating problem does this solve that the current stack does not?",
              "Who owns support, security updates, backups, and failed integrations after launch?",
              "Which system remains the source of truth for customers, jobs, estimates, and payments?",
              "What customer data, consent obligations, or payment information would it touch?",
              "What is the rollback plan if the project cannot be maintained or the integration fails?",
            ].map((question, index) => (
              <li key={question} className="flex gap-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#3A9E6A] text-sm font-extrabold text-[#0D2318]">
                  {index + 1}
                </span>
                <p className="pt-1 text-lg leading-relaxed text-gray-300">{question}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#0D2318] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="section-overline mb-4">Build the right system</p>
          <h2 className="font-serif text-3xl font-extrabold text-white sm:text-4xl">
            Need help deciding what belongs in your marketing stack?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#C8EDD2]/75">
            We start with the operating problem, the customer path, and the systems you already
            own. Then we identify what should be fixed, connected, or left alone.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/audit"
              className="inline-flex items-center justify-center rounded-lg bg-[#3A9E6A] px-8 py-4 text-base font-semibold text-[#0D2318] transition hover:bg-[#6FCF97]"
            >
              Request a Public-Surface Audit
            </Link>
            <Link
              href="/websites"
              className="inline-flex items-center justify-center rounded-lg border border-[#C8EDD2]/35 px-8 py-4 text-base font-semibold text-white transition hover:border-[#C8EDD2]"
            >
              See Website Options
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
