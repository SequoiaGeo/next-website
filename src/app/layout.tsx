import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ABVariantTracker from "@/components/ABVariantTracker";
import CookieBanner from "@/components/CookieBanner";
import GHLWidget from "@/components/GHLWidget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Home Services Marketing That Looks at the Full Picture | Sequoia GEO",
  description:
    "Your marketing agency sees clicks. I see your booking rate, average ticket, and why $7K/mo in leads produces $475 in revenue. 13 years as a home services operator. 4x Inc 5000. Now serving 10 companies at a time.",
  keywords: [
    "fractional CMO home services",
    "home services marketing",
    "contractor marketing consultant",
    "HVAC marketing",
    "plumbing marketing",
    "roofing marketing",
    "home service growth operator",
    "marketing attribution for contractors",
    "booking rate optimization",
  ],
  authors: [{ name: "Aaron Husak" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sequoiageo.com",
    siteName: "Sequoia GEO",
    title: "Home Services Marketing That Looks at the Full Picture | Sequoia GEO",
    description:
      "Your marketing agency sees clicks. I see your booking rate, average ticket, and why $7K/mo in leads produces $475 in revenue. 13 years as a home services operator. 4x Inc 5000.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sequoia GEO - Full Picture Marketing for Home Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Services Marketing That Looks at the Full Picture | Sequoia GEO",
    description:
      "Your marketing agency sees clicks. I see your booking rate, average ticket, and why $7K/mo in leads produces $475 in revenue. 4x Inc 5000.",
  },
  metadataBase: new URL("https://www.sequoiageo.com"),
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.sequoiageo.com/#organization",
  name: "Sequoia GEO",
  url: "https://www.sequoiageo.com",
  logo: "https://www.sequoiageo.com/logo.png",
  description:
    "Growth operations for home service companies doing $2M-$15M. Founded by Aaron Husak, 4x Inc 5000 honoree and 13-year home services operator.",
  foundingDate: "2024",
  founder: {
    "@type": "Person",
    "@id": "https://www.sequoiageo.com/#aaron-husak",
    name: "Aaron Husak",
    jobTitle: "Founder & Growth Operator",
    knowsAbout: [
      "Home services marketing",
      "HVAC marketing",
      "Plumbing marketing",
      "Google Ads for contractors",
      "Local SEO",
      "Marketing attribution",
      "Booking rate optimization",
    ],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fresno",
    addressRegion: "CA",
    addressCountry: "US",
  },
  telephone: "+1-559-521-3122",
  email: "aaron@sequoiageo.com",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  sameAs: [
    "https://www.linkedin.com/company/sequoiageo",
    "https://www.facebook.com/sequoiageo",
  ],
  member: {
    "@type": "Person",
    "@id": "https://www.sequoiageo.com/#aaron-husak",
    name: "Aaron Husak",
    jobTitle: "Founder & Growth Operator",
    url: "https://www.sequoiageo.com/about-sequoia-geo",
    image: "https://www.sequoiageo.com/aaron-husak.webp",
    sameAs: [
      "https://www.thefirstclick.net/ep-320-using-ai-to-increase-website-clarity-with-aaron-husak/",
      "https://www.grownearby.com/podcast/the-success-story-of-aaron-husak/",
    ],
    award: [
      "Inc. 5000 Fastest-Growing Companies 2020 — Balanced Comfort",
      "Inc. 5000 Fastest-Growing Companies 2021 — Balanced Comfort (#817, 595% growth)",
      "Inc. 5000 Fastest-Growing Companies 2022 — Balanced Comfort (#511)",
      "Inc. 5000 Fastest-Growing Companies 2023 — Balanced Comfort",
    ],
    knowsAbout: [
      "Home services marketing",
      "HVAC marketing",
      "Plumbing marketing",
      "Google Ads for contractors",
      "Local SEO",
      "Marketing attribution",
      "Booking rate optimization",
      "Generative Engine Optimization",
      "AI automation for contractors",
    ],
    alumniOf: {
      "@type": "Organization",
      name: "Balanced Comfort Heating & Air",
      url: "https://www.sequoiageo.com/case-studies/balanced-comfort",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="antialiased font-sans min-h-screen flex flex-col">
        {/* Skip to main content — accessibility / keyboard nav */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        <Navigation />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />

        {/* GA4 Consent Mode v2 — set defaults BEFORE the GA4 script loads.
            analytics_storage defaults to denied until user accepts cookies.
            GA4 still initializes so it can model conversions in consent-denied mode. */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              id="ga4-consent-defaults"
              strategy="beforeInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});`,
              }}
            />
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`,
              }}
            />
          </>
        )}

        {/* Microsoft Clarity — loaded by CookieBanner only after user accepts.
            Removed from here to prevent tracking before consent is given. */}

        {/* A/B variant tracker — tags GA4 user property for homepage split test */}
        <ABVariantTracker />

        {/* Cookie consent banner — gates Clarity behind user acceptance */}
        <CookieBanner clarityId={process.env.NEXT_PUBLIC_CLARITY_ID} />

        {/* GHL Chat Widget — injected only on first user interaction (scroll/click/etc).
            PageSpeed's crawler never fires these events so zero CWV impact. */}
        <GHLWidget />
      </body>
    </html>
  );
}
