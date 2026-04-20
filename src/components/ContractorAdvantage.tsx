export default function ContractorAdvantage() {
  const rows = [
    {
      label: "Actual Contractor Experience",
      us: "20+ years owning & scaling contractor business",
      them: "No field experience",
    },
    {
      label: "Contractor Licenses",
      us: "B General, C-2, C-20 HVAC, C-36 Plumbing",
      them: "No licenses",
    },
    {
      label: "Built a Contractor Company",
      us: "1 to 130+ employees, Inc. 5000 4x",
      them: "Never owned a contractor business",
    },
    {
      label: "Understands Your Challenges",
      us: "Emergency calls, seasonality, cash flow, hiring",
      them: "Marketing theory only",
    },
    {
      label: "Speaks Your Language",
      us: "Booked jobs, map pack, micro-ZIP targeting",
      them: "Generic marketing jargon",
    },
    {
      label: "Proven Service Culture",
      us: "4,000+ five-star reviews, Great Place to Work 3x",
      them: "No operational track record",
    },
  ];

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
            The Contractor Advantage
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Most marketing agencies have never run a contractor business. We
            have. Here&rsquo;s why that matters.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-[#0D2318] text-white">
            <div className="px-6 py-4 text-sm font-semibold" />
            <div className="px-6 py-4 text-center text-sm font-semibold">
              Sequoia GEO
            </div>
            <div className="px-6 py-4 text-center text-sm font-semibold">
              Other Agencies
            </div>
          </div>

          {/* Table Rows */}
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 ${
                i % 2 === 0 ? "bg-white" : "bg-[#fafaf8]"
              } ${i < rows.length - 1 ? "border-b border-gray-100" : ""}`}
            >
              <div className="flex items-center px-6 py-5 text-sm font-semibold text-[#1a1a1a]">
                {row.label}
              </div>
              <div className="flex items-center justify-center gap-2 px-6 py-5 text-center text-sm text-gray-700">
                {/* Green checkmark */}
                <svg
                  className="h-5 w-5 flex-shrink-0 text-[#3A9E6A]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span>{row.us}</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-6 py-5 text-center text-sm text-gray-500">
                {/* Red X */}
                <svg
                  className="h-5 w-5 flex-shrink-0 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span>{row.them}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <p className="mx-auto mt-12 max-w-xl text-center text-lg italic text-gray-500">
          &ldquo;The best advice comes from someone who&rsquo;s been in the
          trenches.&rdquo;
        </p>
      </div>
    </section>
  );
}
