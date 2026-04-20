import Link from "next/link";
import Image from "next/image";

interface FooterLink {
  label: string;
  href: string;
}

const quickLinks: FooterLink[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Free GEO Audit", href: "/contact" },
  { label: "Contact", href: "/contact" },
];

const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-green text-white">
      <div className="container-narrow py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Sequoia GEO logo"
                width={40}
                height={40}
                className="rounded-lg brightness-110"
              />
              <span className="text-xl font-bold tracking-tight">
                Sequoia GEO
              </span>
            </div>
            <p className="text-pale-green/80 text-sm leading-relaxed max-w-md mb-4">
              Growth operations for home service companies doing $2M&ndash;$15M.
              Founded by Aaron Husak, 4x Inc 5000 honoree and 13-year home services operator.
            </p>
            <p className="text-pale-green/60 text-xs leading-relaxed max-w-md mb-6">
              4x Inc 5000 (2020&ndash;2023) &middot; CA Licensed Contractor B, C-2, C-20, C-36 &middot; Fresno, CA &middot; Serving Nationwide
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-green mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-pale-green/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-green mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:5595213122"
                  className="text-pale-green/70 hover:text-white transition-colors"
                >
                  (559) 521-3122
                </a>
              </li>
              <li>
                <a
                  href="mailto:Aaron@sequoiageo.com"
                  className="text-pale-green/70 hover:text-white transition-colors"
                >
                  Aaron@sequoiageo.com
                </a>
              </li>
              <li className="text-pale-green/70">Fresno, CA</li>
              <li className="pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent-green block mb-1">
                  Business Hours
                </span>
                <span className="text-pale-green/70">
                  Mon &ndash; Fri, 9AM &ndash; 7PM Pacific
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-narrow py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-pale-green/50">
            &copy; 2026 Sequoia GEO. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-pale-green/50 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
