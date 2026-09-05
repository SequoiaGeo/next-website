"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { trackCallIntent, trackCtaIntent } from "@/lib/analytics";

const serviceLinks = [
  {
    group: "Core Services",
    items: [
      { label: "AI SEO / Search Visibility", href: "/geo-agency" },
      { label: "AI Search Assessment", href: "/ai-search-assessment" },
      { label: "AI SEO by Market", href: "/geo-agency#markets" },
      { label: "LSA Management", href: "/lsa-management" },
      { label: "AI Automation", href: "/ai-automation" },
      { label: "Operator-Led Marketing", href: "/fractional-cmo" },
      { label: "Website Design", href: "/websites" },
    ],
  },
  {
    group: "By Trade",
    items: [
      { label: "HVAC SEO & Marketing", href: "/hvac-seo" },
      { label: "Plumbing SEO", href: "/plumbing-seo" },
      { label: "Roofing SEO", href: "/roofing-seo" },
      { label: "Restoration SEO", href: "/restoration-seo" },
    ],
  },
  {
    group: "AI Search by Trade",
    items: [
      { label: "AI SEO for HVAC", href: "/ai-seo-for-hvac" },
      { label: "AI SEO for Plumbing", href: "/geo-for-plumbers" },
      { label: "AI SEO for Roofing", href: "/ai-seo-for-roofers" },
      { label: "AI SEO for Restoration", href: "/geo-for-restoration" },
    ],
  },
];

const resourceLinks = [
  {
    group: "Guides and Standards",
    items: [
      { label: "Marketing Leak Calculator", href: "/marketing-leak-calculator" },
      { label: "LSA Guide for Contractors", href: "/lsa-guide" },
      { label: "AI SEO Guide", href: "/ai-website-seo-guide" },
      { label: "GEO & AI SEO Pricing", href: "/ai-seo-pricing" },
      { label: "Sequoia Proof System", href: "/proof-system" },
      { label: "AI Search Measurement Method", href: "/ai-search-methodology" },
      { label: "AI and Client Data Policy", href: "/ai-and-client-data-policy" },
      { label: "Hicks Paving AI Search Snapshot", href: "/case-studies/ai-search-readiness" },
      { label: "AI SEO Agency Comparison", href: "/best-ai-seo-agencies-home-services" },
    ],
  },
  {
    group: "Industry Data",
    items: [
      { label: "HVAC Statistics 2026", href: "/hvac-statistics" },
      { label: "Plumbing Statistics 2026", href: "/plumbing-statistics" },
      { label: "LSA Statistics 2026", href: "/local-services-ads-statistics" },
    ],
  },
  {
    group: "Compare Agencies",
    items: [
      { label: "Best HVAC Marketing Agencies", href: "/best-hvac-marketing-agencies" },
      { label: "Best Plumbing Marketing Agencies", href: "/best-plumbing-marketing-agencies" },
      { label: "Best Roofing Marketing Agencies", href: "/best-roofing-marketing-agencies" },
      { label: "AI SEO Agencies for Home Services", href: "/best-ai-seo-agencies-home-services" },
      { label: "Leaving Your Marketing Agency?", href: "/leaving-my-marketing-agency" },
    ],
  },
  {
    group: "Tools",
    items: [
      { label: "Sales Training Tool", href: "/sales-training" },
      { label: "GitHub Tools for Home Services", href: "/github-repos-home-service-businesses" },
    ],
  },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
        scrolled ? "border-b border-gray-200 shadow-sm" : "border-b border-gray-100"
      }`}
    >
      <nav aria-label="Main navigation" className="container-narrow flex items-center justify-between py-3 lg:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.png"
            alt="Sequoia GEO logo"
            width={44}
            height={44}
            className="rounded-lg"
            priority
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-[#1A5C3A] leading-tight tracking-tight">
              Sequoia GEO
            </span>
            <span className="text-xs text-gray-500 hidden sm:block leading-tight">
              Growth Operations for Home Services
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8">
          {/* Services dropdown */}
          <div className="relative" ref={servicesDropdownRef}>
            <button
              onClick={() => { setServicesOpen(!servicesOpen); setResourcesOpen(false); }}
              className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#1A5C3A] transition-colors"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <svg
                className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 rounded-xl bg-white border border-gray-200 shadow-xl shadow-black/20 py-3 z-50">
                {serviceLinks.map((group) => (
                  <div key={group.group} className="px-2 mb-1 last:mb-0">
                    <p className="px-3 py-1.5 text-xs font-bold text-[#1A5C3A] uppercase tracking-wider">
                      {group.group}
                    </p>
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setServicesOpen(false)}
                        className="block px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-[#F5FAF7] hover:text-[#1A5C3A] transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/case-studies"
            className="text-sm font-medium text-gray-700 hover:text-[#1A5C3A] transition-colors"
          >
            Case Studies
          </Link>

          <Link
            href="/ai-seo-pricing"
            className="text-sm font-medium whitespace-nowrap text-gray-700 hover:text-[#1A5C3A] transition-colors"
          >
            Services &amp; Pricing
          </Link>

          {/* Resources dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => { setResourcesOpen(!resourcesOpen); setServicesOpen(false); }}
              className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#1A5C3A] transition-colors"
              aria-expanded={resourcesOpen}
              aria-haspopup="true"
            >
              Resources
              <svg
                className={`h-3.5 w-3.5 transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {resourcesOpen && (
              <div className="absolute top-full right-0 mt-2 w-72 rounded-xl bg-white border border-gray-200 shadow-xl shadow-black/20 py-3 z-50">
                {resourceLinks.map((group) => (
                  <div key={group.group} className="px-2 mb-1 last:mb-0">
                    <p className="px-3 py-1.5 text-xs font-bold text-[#1A5C3A] uppercase tracking-wider">
                      {group.group}
                    </p>
                    {group.items.map((item) => (
                      "external" in item && item.external ? (
                        <a
                          key={item.href}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setResourcesOpen(false)}
                          className="block px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-[#F5FAF7] hover:text-[#1A5C3A] transition-colors"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setResourcesOpen(false)}
                          className="block px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-[#F5FAF7] hover:text-[#1A5C3A] transition-colors"
                        >
                          {item.label}
                        </Link>
                      )
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/blog"
            className="text-sm font-medium text-gray-700 hover:text-[#1A5C3A] transition-colors"
          >
            Blog
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:5595213122"
            onClick={() => trackCallIntent("header_desktop")}
            className="hidden xl:inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-[#1A5C3A] hover:text-[#0D2318] transition-colors"
          >
            <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            (559) 521-3122
          </a>
          <Link
            href="/contact#book"
            onClick={() => trackCtaIntent("header_desktop", "schedule")}
            className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#0D2318] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A5C3A]"
          >
            Choose a Time
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span className={`block w-6 h-0.5 bg-[#1A5C3A] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1A5C3A] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1A5C3A] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-white border-t border-gray-200 transition-all duration-300 z-40 overflow-y-auto ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-6 py-8 gap-2">
          {/* Mobile Services accordion */}
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="flex items-center justify-between text-lg font-medium text-gray-800 hover:text-[#1A5C3A] py-3 border-b border-gray-100 transition-colors w-full text-left"
          >
            Services
            <svg
              className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>

          {mobileServicesOpen && (
            <div className="pl-4 space-y-1 pb-2">
              {serviceLinks.map((group) => (
                <div key={group.group} className="mb-3">
                  <p className="text-xs font-bold text-[#3A9E6A] uppercase tracking-wider py-1">{group.group}</p>
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-base text-gray-600 hover:text-[#1A5C3A] py-1.5 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}

          <Link
            href="/case-studies"
            onClick={() => setMobileOpen(false)}
            className="text-lg font-medium text-gray-800 hover:text-[#1A5C3A] py-3 border-b border-gray-100 transition-colors"
          >
            Case Studies
          </Link>

          <Link
            href="/ai-seo-pricing"
            onClick={() => setMobileOpen(false)}
            className="text-lg font-medium text-gray-800 hover:text-[#1A5C3A] py-3 border-b border-gray-100 transition-colors"
          >
            Services &amp; Pricing
          </Link>

          {/* Mobile Resources accordion */}
          <button
            onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
            className="flex items-center justify-between text-lg font-medium text-gray-800 hover:text-[#1A5C3A] py-3 border-b border-gray-100 transition-colors w-full text-left"
          >
            Resources
            <svg
              className={`h-4 w-4 transition-transform duration-200 ${mobileResourcesOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>

          {mobileResourcesOpen && (
            <div className="pl-4 space-y-1 pb-2">
              {resourceLinks.map((group) => (
                <div key={group.group} className="mb-3">
                  <p className="text-xs font-bold text-[#3A9E6A] uppercase tracking-wider py-1">{group.group}</p>
                  {group.items.map((item) => (
                    "external" in item && item.external ? (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileOpen(false)}
                        className="block text-base text-gray-600 hover:text-[#1A5C3A] py-1.5 transition-colors"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block text-base text-gray-600 hover:text-[#1A5C3A] py-1.5 transition-colors"
                      >
                        {item.label}
                      </Link>
                    )
                  ))}
                </div>
              ))}
            </div>
          )}

          <Link
            href="/blog"
            onClick={() => setMobileOpen(false)}
            className="text-lg font-medium text-gray-800 hover:text-[#1A5C3A] py-3 border-b border-gray-100 transition-colors"
          >
            Blog
          </Link>

          <div className="mt-6 flex flex-col gap-4">
            <a
              href="tel:5595213122"
              className="inline-flex items-center justify-center gap-2 text-base font-medium text-gray-500 text-center"
            >
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              (559) 521-3122
            </a>
            <Link
              href="/contact#book"
              onClick={() => {
                setMobileOpen(false);
                trackCtaIntent("header_mobile", "schedule");
              }}
              className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-[#0D2318] w-full"
            >
              Choose a Time
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
