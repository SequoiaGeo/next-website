import Link from "next/link";

export default function CalculatorBanner() {
  return (
    <div className="bg-[#2D6A4F]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-5">
            {/* Icon */}
            <div className="shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-[#1B4332]">
              <svg className="h-5 w-5 text-[#52B788]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.613 4.5 4.687V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.687c0-1.074-.807-1.987-1.907-2.115A48.507 48.507 0 0012 2.25z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-white">Free Tool: Marketing Leak Calculator</p>
              <p className="mt-0.5 text-sm text-[#D8F3DC]/70">
                Enter your monthly spend, inbound calls, and booking rate. See exactly how much revenue is leaking versus what the same budget could produce.
              </p>
            </div>
          </div>
          <Link
            href="/marketing-leak-calculator"
            className="shrink-0 inline-flex items-center justify-center rounded-lg bg-[#1B4332] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/30 whitespace-nowrap"
          >
            Calculate Your Leak
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
