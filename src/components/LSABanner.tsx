import Link from "next/link";

export default function LSABanner() {
  return (
    <div className="bg-[#1a1a1a]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-5">
            {/* Icon */}
            <div className="shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-[#2D6A4F]">
              <svg className="h-5 w-5 text-[#52B788]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-white">Free Guide: Google Local Service Ads</p>
              <p className="mt-0.5 text-sm text-gray-400">
                11 pages covering setup, lead management, credits, reviews, and the daily checklist contractors actually use.
                The same guide that gets people banned from the comment section.
              </p>
            </div>
          </div>
          <Link
            href="/lsa-guide"
            className="shrink-0 inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5 whitespace-nowrap"
          >
            Get the Free Guide
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
