import Link from "next/link";

const testimonials = [
  {
    name: "Michael Bissett",
    company: "KABAM Plumbing Services",
    quote: "It’s been a really great experience working with Aaron because he has been in the trades.",
    source: "Client video testimonial, May 2026",
    href: "https://www.youtube.com/watch?v=IpbCaelX2jo",
    link: "Watch Mike’s testimonial",
  },
  {
    name: "Martin Livingston",
    company: "Blue Kangaroo PACKOUTZ",
    quote: "Their team understands how to maximize your profile to improve search results which helped to increase business leads.",
    source: "Google review, November 2025",
    href: "https://www.google.com/maps?cid=5823435747371480489",
    link: "Read our Google reviews",
  },
  {
    name: "Mel",
    company: "Mel’s Barbecue and Catering",
    quote: "We’ve done a lot of catering gigs and we have future catering gigs that are coming up all thanks to Aaron Husak.",
    source: "Client video testimonial",
    href: "https://www.youtube.com/watch?v=odPENhsu9lU",
    link: "Watch Mel’s testimonial",
    disclosure: "Mel received website services at no charge and is a friend of Aaron.",
  },
];

export default function HomepageTestimonials() {
  return (
    <section aria-labelledby="homepage-testimonials-heading" className="border-b border-[#173629]/15 bg-[#f7f3e9] py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 id="homepage-testimonials-heading" className="font-serif text-3xl font-bold text-[#0D2318] sm:text-4xl">Hear from the owners we work with.</h2>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="flex h-full flex-col rounded-lg border border-[#173629]/15 bg-[#fffdf7] p-6">
              <blockquote className="flex-1 text-lg leading-relaxed text-[#173629]">
                <p>“{testimonial.quote}”</p>
              </blockquote>
              <figcaption className="mt-5 border-t border-[#173629]/15 pt-4">
                <p className="font-bold text-[#0D2318]">{testimonial.name}</p>
                <p className="mt-1 text-sm text-[#46574c]">{testimonial.company}</p>
                <p className="mt-2 text-sm text-[#46574c]">{testimonial.source}</p>
                {testimonial.disclosure && <p className="mt-2 text-sm leading-relaxed text-[#46574c]">{testimonial.disclosure}</p>}
              </figcaption>
              <Link href={testimonial.href} className="mt-3 inline-flex min-h-11 items-center font-semibold text-[#1A5C3A] underline underline-offset-4">{testimonial.link}</Link>
            </figure>
          ))}
        </div>
        <p className="mt-5 text-sm leading-relaxed text-[#46574c]">Excerpts from client feedback. Individual experiences vary.</p>
      </div>
    </section>
  );
}
