import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Sequoia GEO",
  description:
    "How Sequoia GEO uses cookies and how to manage your preferences.",
};

export default function CookiePolicyPage() {
  return (
    <div className="container-narrow max-w-3xl py-20">
      <h1 className="text-4xl font-bold mb-2">Cookie Policy</h1>
      <p className="text-gray-500 text-sm mb-10">Last updated: April 2026</p>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">What are cookies?</h2>
        <p className="text-gray-700 leading-relaxed">
          Cookies are small text files stored on your device when you visit a
          website. They help websites function correctly and provide information
          to site owners about how visitors use the site.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Cookies we use</h2>

        <div className="space-y-6">
          <div className="border border-gray-100 rounded-xl p-5">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="font-semibold text-base">Google Analytics (GA4)</h3>
              <span className="text-xs font-medium bg-yellow-50 text-yellow-800 border border-yellow-200 px-2 py-0.5 rounded-full whitespace-nowrap">
                Analytics — requires consent
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              We use Google Analytics 4 to understand how visitors navigate the
              site — which pages are viewed, how long people stay, and where
              traffic comes from. This data is aggregated and anonymous. No
              advertising or remarketing is enabled.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Cookie names: <code className="bg-gray-50 px-1 rounded">_ga</code>,{" "}
              <code className="bg-gray-50 px-1 rounded">_ga_*</code> — Duration: 2
              years
            </p>
          </div>

          <div className="border border-gray-100 rounded-xl p-5">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="font-semibold text-base">Microsoft Clarity</h3>
              <span className="text-xs font-medium bg-yellow-50 text-yellow-800 border border-yellow-200 px-2 py-0.5 rounded-full whitespace-nowrap">
                Analytics — requires consent
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Microsoft Clarity records anonymized session replays and heatmaps
              to help us improve the site experience. No personally identifiable
              information is captured.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Cookie names: <code className="bg-gray-50 px-1 rounded">_clck</code>,{" "}
              <code className="bg-gray-50 px-1 rounded">_clsk</code>,{" "}
              <code className="bg-gray-50 px-1 rounded">MUID</code> — Duration: up
              to 1 year
            </p>
          </div>

          <div className="border border-gray-100 rounded-xl p-5">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="font-semibold text-base">A/B Testing</h3>
              <span className="text-xs font-medium bg-green-50 text-green-800 border border-green-200 px-2 py-0.5 rounded-full whitespace-nowrap">
                Functional — no personal data
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              We occasionally run A/B tests to compare different versions of the
              site. A cookie stores which version you were shown so you see the
              same version on return visits. No personal data is collected.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Cookie name:{" "}
              <code className="bg-gray-50 px-1 rounded">hp_variant</code> —
              Duration: 30 days
            </p>
          </div>

          <div className="border border-gray-100 rounded-xl p-5">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="font-semibold text-base">Live Chat Widget (GoHighLevel)</h3>
              <span className="text-xs font-medium bg-blue-50 text-blue-800 border border-blue-200 px-2 py-0.5 rounded-full whitespace-nowrap">
                Functional — required for chat
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our chat widget uses cookies to maintain your conversation session.
              These are set only if you interact with the chat. No data is shared
              for advertising purposes.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Managing your preferences</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          When you first visit the site you can accept or decline analytics
          cookies via the banner. Your choice is stored for one year.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          To change your preference at any time, clear your browser cookies for{" "}
          <strong>sequoiageo.com</strong> and reload the page — the consent
          banner will appear again.
        </p>
        <p className="text-gray-700 leading-relaxed">
          You can also opt out of Google Analytics across all sites at{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1A5C3A] underline"
          >
            tools.google.com/dlpage/gaoptout
          </a>{" "}
          and opt out of Microsoft Clarity at{" "}
          <a
            href="https://privacy.microsoft.com/en-us/privacystatement"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1A5C3A] underline"
          >
            Microsoft Privacy Statement
          </a>
          .
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">California residents (CCPA)</h2>
        <p className="text-gray-700 leading-relaxed">
          We do not sell or share personal information with third parties for
          advertising purposes. The cookies described above are used solely to
          improve site performance and user experience. California residents may
          contact us to request information about data collected.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">Questions?</h2>
        <p className="text-gray-700 leading-relaxed">
          Email{" "}
          <a
            href="mailto:aaron@sequoiageo.com"
            className="text-[#1A5C3A] underline"
          >
            aaron@sequoiageo.com
          </a>{" "}
          with any questions about how we use cookies.
        </p>
      </section>
    </div>
  );
}
