"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Case Studies", href: "/case-studies" },
];

const resourceLinks = [
  {
    group: "Free Guides",
    items: [
      { label: "LSA Guide for Contractors", href: "/lsa-guide" },
      { label: "AI SEO Guide", href: "/ai-website-seo-guide" },
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
      { label: "Leaving Your Marketing Agency?", href: "/leaving-my-marketing-agency" },
    ],
  },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "header-blur border-b border-gray-200/50 shadow-sm" : "bg-transparent"
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
            <span className="text-lg font-bold text-dark-green leading-tight tracking-tight">
              Sequoia GEO
            </span>
            <span className="text-xs text-light-green hidden sm:block leading-tight">
              Growth Operations for Home Services
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-dark-text hover:text-accent-green transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Resources dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className="flex items-center gap-1 text-sm font-medium text-dark-text hover:text-accent-green transition-colors"
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
              <div className="absolute top-full right-0 mt-2 w-72 rounded-xl bg-white border border-gray-200 shadow-xl shadow-black/10 py-3 z-50">
                {resourceLinks.map((group) => (
                  <div key={group.group} className="px-2 mb-1 last:mb-0">
                    <p className="px-3 py-1.5 text-xs font-bold text-[#1A5C3A] uppercase tracking-wider">
                      {group.group}
                    </p>
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setResourcesOpen(false)}
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
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="#contact" className="btn btn-primary text-sm">
            Book a Strategy Call
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
          <span className={`block w-6 h-0.5 bg-dark-green transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-dark-green transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-dark-green transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-white/95 backdrop-blur-md transition-all duration-300 z-40 overflow-y-auto ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-6 py-8 gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-lg font-medium text-dark-text hover:text-accent-green py-3 border-b border-gray-100 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Resources accordion */}
          <button
            onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
            className="flex items-center justify-between text-lg font-medium text-dark-text hover:text-accent-green py-3 border-b border-gray-100 transition-colors w-full text-left"
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
                  <p className="text-xs font-bold text-[#1A5C3A] uppercase tracking-wider py-1">{group.group}</p>
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

          <div className="mt-6 flex flex-col gap-4">
            <a
              href="tel:5595213122"
              className="inline-flex items-center justify-center gap-2 text-base font-medium text-medium-green text-center"
            >
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              (559) 521-3122
            </a>
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn btn-primary text-base w-full"
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
