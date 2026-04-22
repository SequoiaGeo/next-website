"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    smsConsent: false,
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call (559) 521-3122 or email Aaron@sequoiageo.com directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-2 lg:items-start">

          {/* Left: Copy */}
          <div>
            <p className="section-overline mb-4">Get Started</p>
            <h2 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl leading-[1.08]">
              Find out where your{" "}
              <span className="text-[#1A5C3A]">revenue is leaking.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-gray-600">
              The first conversation is an audit, not a sales call. Tell us what
              you&rsquo;re spending and what it&rsquo;s producing. We&rsquo;ll tell you
              what we see and whether we can help.
            </p>

            <div className="mt-8 divide-y divide-gray-100">
              {[
                { label: "Free GBP audit", desc: "We review your listing before the call" },
                { label: "No pitch deck", desc: "A real conversation about your numbers" },
                { label: "No long-term contracts", desc: "Stay because it works, not because you're locked in" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 py-4 first:pt-0">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C8EDD2]">
                    <svg aria-hidden="true" className="h-3 w-3 text-[#1A5C3A]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1a1a1a]">{item.label}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct contact */}
            <div className="mt-8 pt-8 border-t border-gray-100 space-y-3">
              <a
                href="tel:5595213122"
                className="flex items-center gap-3 text-sm font-medium text-[#1A5C3A] hover:text-[#0D2318] transition-colors"
              >
                <svg aria-hidden="true" className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                (559) 521-3122
              </a>
              <a
                href="mailto:Aaron@sequoiageo.com"
                className="flex items-center gap-3 text-sm font-medium text-[#1A5C3A] hover:text-[#0D2318] transition-colors"
              >
                <svg aria-hidden="true" className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Aaron@sequoiageo.com
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-8 shadow-sm">
            {submitted ? (
              <div className="py-8">
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C8EDD2]">
                    <svg aria-hidden="true" className="h-7 w-7 text-[#1A5C3A]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-[#1a1a1a]">
                    Got it &mdash; we&rsquo;ll be in touch as soon as possible.
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    While you wait, here&rsquo;s a look at what we do and how we do it.
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      label: "Case Studies",
                      desc: "See how Balanced Comfort grew to 4x Inc 5000",
                      href: "/case-studies",
                    },
                    {
                      label: "How It Works",
                      desc: "The Full Picture Audit, Fix & Build, and Scale process",
                      href: "/how-it-works",
                    },
                    {
                      label: "Free LSA Guide",
                      desc: "11-page guide to managing Google Local Services Ads",
                      href: "/lsa-guide",
                    },
                    {
                      label: "Services Overview",
                      desc: "Every channel we manage and how they connect",
                      href: "/services",
                    },
                  ].map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3.5 hover:border-[#3A9E6A]/40 hover:shadow-sm transition group"
                    >
                      <div>
                        <p className="text-sm font-semibold text-[#1a1a1a] group-hover:text-[#1A5C3A] transition-colors">{link.label}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{link.desc}</p>
                      </div>
                      <svg className="h-4 w-4 text-gray-300 group-hover:text-[#3A9E6A] transition-colors shrink-0 ml-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1a1a1a]">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-[#1a1a1a] placeholder-gray-400 focus:border-[#3A9E6A] focus:outline-none focus:ring-2 focus:ring-[#3A9E6A]/20"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#1a1a1a]">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-[#1a1a1a] placeholder-gray-400 focus:border-[#3A9E6A] focus:outline-none focus:ring-2 focus:ring-[#3A9E6A]/20"
                    placeholder="(555) 555-5555"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1a1a1a]">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-[#1a1a1a] placeholder-gray-400 focus:border-[#3A9E6A] focus:outline-none focus:ring-2 focus:ring-[#3A9E6A]/20"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1a1a1a]">
                    What&rsquo;s your biggest marketing challenge right now?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-[#1a1a1a] placeholder-gray-400 focus:border-[#3A9E6A] focus:outline-none focus:ring-2 focus:ring-[#3A9E6A]/20"
                    placeholder="e.g. Spending $10K/month on ads but revenue isn't growing..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="smsConsent"
                    type="checkbox"
                    checked={form.smsConsent}
                    onChange={(e) => setForm({ ...form, smsConsent: e.target.checked })}
                    className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#1A5C3A] focus:ring-[#3A9E6A]"
                  />
                  <label htmlFor="smsConsent" className="text-xs leading-relaxed text-gray-400">
                    I agree to receive SMS messages from Sequoia GEO. Message and data rates may apply. You can opt out at any time.
                  </label>
                </div>

                {error && (
                  <p className="text-sm text-red-600 bg-red-50 rounded-lg px-4 py-3">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-[#1A5C3A] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[#1A5C3A]/25 transition hover:bg-[#0D2318] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A5C3A] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending…" : "Book a Free Strategy Call"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
