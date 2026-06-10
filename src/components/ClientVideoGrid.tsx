import YouTubeFacade from "@/components/YouTubeFacade";

// Real paying client work. KABAM Plumbing, Mike Bissett, Sun City Center FL.
const CLIENT_WORK = [
  {
    id: "WEnk9R_C_9Q",
    title: "KABAM Plumbing: Auditing the Website Before the Rebuild",
    label: "Before",
  },
  {
    id: "h5M9dG3Ioig",
    title: "KABAM Plumbing: New Website Walkthrough After the Rebuild",
    label: "After",
  },
];

// Sample audit walkthroughs on public contractor sites Aaron does NOT work with.
// Demonstrates approach, not client relationship.
const SAMPLE_AUDITS = [
  {
    id: "XwTojj72fNA",
    title: "Daddario Roofing: GBP and Website Audit Walkthrough",
    label: "Sample Audit",
  },
  {
    id: "-rdzTkl5a6M",
    title: "Knox Roofing: Local SEO and Booking Quick Wins",
    label: "Sample Audit",
  },
  {
    id: "PBAex6J2Qt4",
    title: "Moriarty's Roofing: Conversion-Focused Web Optimization",
    label: "Sample Audit",
  },
];

export default function ClientVideoGrid() {
  return (
    <section className="bg-[#fafaf8] py-16 sm:py-20 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ── Real Client Work ─────────────────────────────────────── */}
        <div className="text-center mb-10">
          <p className="section-overline mb-3">Real Client Work</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl leading-tight">
            What a website rebuild actually looks like
          </h2>
          <p className="mt-3 text-base text-gray-600 max-w-2xl mx-auto">
            KABAM Plumbing, real client in Sun City Center, Florida. Watch the original site walkthrough, then the rebuild and every decision behind it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {CLIENT_WORK.map((v) => (
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

        {/* ── Sample Audits (not client work) ──────────────────────── */}
        <div className="text-center mb-10 pt-6 border-t border-gray-200">
          <p className="section-overline mb-3">How I Think</p>
          <h2 className="text-2xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-3xl leading-tight">
            Free audit examples on real contractor sites
          </h2>
          <p className="mt-3 text-base text-gray-600 max-w-2xl mx-auto">
            Public audit walkthroughs on contractor sites I am not engaged with. Watch how I think when I look at a site before you book your own free audit.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SAMPLE_AUDITS.map((v) => (
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
