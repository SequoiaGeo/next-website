const testimonials = [
  {
    name: "Martin Livingston",
    company: "Blue Kangaroo Packoutz",
    role: "Owner",
    text: "Sequoia GEO completely transformed our Google Business Profile and helped us stand out in a competitive market. We went from invisible to the first call customers make.",
  },
  {
    name: "Michael Bissett",
    company: "Kabam Plumbing Services",
    role: "Owner",
    text: "From our website to SEO to call volume, the results were real and measurable. Not reports that look good. Actual jobs booked.",
  },
  {
    name: "Salvador Ponce",
    company: "Hajoca Solutions Group",
    role: "Operations",
    text: "Their home service marketing ability is elite level. They understand the contractor space in a way that no agency I&rsquo;ve worked with ever has.",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="h-4 w-4 text-[#3A9E6A]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section className="bg-[#1a1a1a] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mb-14 max-w-xl">
          <p className="section-overline mb-4 text-[#3A9E6A]">Client Results</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-[1.08]">
            What contractors say{" "}
            <span className="text-[#3A9E6A]">after 90 days.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr_1fr]">

          {/* Featured testimonial */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-8 lg:p-10">
            <div>
              <StarRating />
              <blockquote className="mt-6">
                <p className="text-xl font-medium leading-relaxed text-white lg:text-2xl">
                  &ldquo;{featured.text}&rdquo;
                </p>
              </blockquote>
            </div>
            <footer className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1A5C3A] text-sm font-bold text-white">
                {featured.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{featured.name}</p>
                <p className="text-xs text-gray-500">{featured.role}, {featured.company}</p>
              </div>
            </footer>
          </div>

          {/* Supporting testimonials */}
          {rest.map((t) => (
            <div key={t.name} className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <div>
                <StarRating />
                <blockquote className="mt-5">
                  <p className="text-base leading-relaxed text-gray-300">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </blockquote>
              </div>
              <footer className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-gray-300">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}, {t.company}</p>
                </div>
              </footer>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
