import Link from "next/link";

const features = [
  {
    title: "AI Voice Agent",
    description: "Answers every call 24/7 with a professional, natural-sounding voice that books appointments on the spot.",
    icon: (
      <svg aria-hidden="true" className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    title: "AI Website Chat",
    description: "Converts website visitors into booked jobs while you sleep. Trained on your services and pricing.",
    icon: (
      <svg aria-hidden="true" className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    title: "Missed Call Text Back",
    description: "Instantly texts leads who call when you can't answer. Never lose another job to a competitor.",
    icon: (
      <svg aria-hidden="true" className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    title: "Automated Review Requests",
    description: "Automatically asks happy customers for reviews at the perfect moment to boost your reputation.",
    icon: (
      <svg aria-hidden="true" className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: "Smart Scheduling",
    description: "AI handles your calendar, books appointments, and sends confirmations without any back-and-forth.",
    icon: (
      <svg aria-hidden="true" className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    title: "Lead Follow-Up Sequences",
    description: "Automated text and email sequences that nurture leads until they book, no manual effort required.",
    icon: (
      <svg aria-hidden="true" className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
  },
];

export default function AIAutomation() {
  return (
    <section id="ai-automation" className="relative bg-[#0D2318] overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#1A5C3A]/50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#3A9E6A]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        {/* Badge */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#3A9E6A]/20 px-5 py-2 text-sm font-semibold text-[#3A9E6A] ring-1 ring-inset ring-[#3A9E6A]/30">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3A9E6A] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3A9E6A]" />
            </span>
            NEW: Most Requested Service
          </span>
        </div>

        {/* Headline */}
        <h2 className="mt-8 text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Stop Losing{" "}
          <span className="text-[#3A9E6A]">$126,000/Year</span> from Missed
          Calls
        </h2>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-gray-300">
          Your competitors answer on the first ring, even at 2 AM. With our
          AI-powered automation suite, you get a 24/7 AI chatbot, missed call
          text back, a professional AI voice agent, and automated review
          requests, all working around the clock so you never lose another lead.
        </p>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:border-[#3A9E6A]/40 hover:bg-white/10"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#3A9E6A]/20 text-[#3A9E6A] transition group-hover:bg-[#3A9E6A]/30">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#3A9E6A] px-10 py-4 text-lg font-bold text-[#0D2318] shadow-lg shadow-[#3A9E6A]/25 transition hover:bg-[#6FCF97] hover:shadow-xl hover:shadow-[#3A9E6A]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3A9E6A]"
          >
            Get AI Automation for Your Business
            <svg aria-hidden="true"
              className="ml-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
          <p className="mt-5 text-sm text-gray-400">
            Free demo &middot; No commitment &middot; See results in 30 days
          </p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-[#3A9E6A]/30 bg-[#3A9E6A]/10 px-6 py-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3A9E6A] opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#3A9E6A]" />
            </span>
            <span className="text-sm font-medium text-[#C8EDD2]">
              Try it now: click the chat widget in the bottom-right corner to talk to our AI
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
