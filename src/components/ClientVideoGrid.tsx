import YouTubeFacade from "@/components/YouTubeFacade";

const VIDEOS = [
  {
    id: "XwTojj72fNA",
    title: "Daddario Roofing: Website and GBP Audit Live",
    label: "GBP Optimization",
  },
  {
    id: "-rdzTkl5a6M",
    title: "Knox Roofing: Quick Wins for More Calls and Bookings",
    label: "Local SEO",
  },
  {
    id: "PBAex6J2Qt4",
    title: "Moriarty's Roofing: Web Optimization for Conversions",
    label: "Conversion Strategy",
  },
];

export default function ClientVideoGrid() {
  return (
    <section className="bg-[#fafaf8] py-16 sm:py-20 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="section-overline mb-3">Real Work, Real Businesses</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl leading-tight">
            Watch the audits happen live
          </h2>
          <p className="mt-3 text-base text-gray-600 max-w-xl mx-auto">
            No polished case study decks. These are screen-recorded working sessions on real client sites.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VIDEOS.map((v) => (
            <div key={v.id} className="flex flex-col rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <YouTubeFacade videoId={v.id} title={v.title} />
              </div>
              <div className="p-4">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#3A9E6A] mb-1">
                  {v.label}
                </span>
                <p className="text-sm font-semibold text-[#1a1a1a] leading-snug">{v.title}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          More on{" "}
          <a
            href="https://www.youtube.com/@SequoiaGEO"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1A5C3A] underline underline-offset-2 font-medium hover:text-[#3A9E6A]"
          >
            YouTube @SequoiaGEO
          </a>
        </p>
      </div>
    </section>
  );
}
