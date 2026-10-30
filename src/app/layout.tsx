import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import ChromeGate from "@/components/ChromeGate";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import SequoiaKnowledgeInterface from "@/components/SequoiaKnowledgeInterface";
import { podcastAppearances, tradeMedia } from "@/data/media";


export const metadata: Metadata = {
  title: "Home Services Marketing by a 13-Year Owner and Operator | Sequoia GEO",
  description:
    "Operator-led marketing for home service companies across AI Search, SEO, websites, paid media, public profiles, tracking, and the booking handoff.",
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
    title: "Home Services Marketing by a 13-Year Owner and Operator | Sequoia GEO",
    description:
      "Operator-led marketing across AI Search, SEO, websites, paid media, tracking, and the booking handoff. Aaron's home-services career began in 2006 and includes 13 years as an owner and operator.",
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
      "Operator-led marketing across AI Search, SEO, websites, paid media, tracking, and the booking handoff. 4x Inc 5000.",
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
  image: "https://www.sequoiageo.com/og-image.png",
  description:
    "Operator-led marketing for home service companies and established auto detailing shops across AI search, SEO, websites, paid media, public profiles, tracking, and the booking handoff. Founded by Aaron Husak, whose home-services career began in 2006 and includes 13 years as an owner and operator.",
  foundingDate: "2025",
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
    streetAddress: "9617 East Olive Avenue",
    addressLocality: "Sanger",
    addressRegion: "CA",
    postalCode: "93657",
    addressCountry: "US",
  },
  telephone: "+1-559-521-3122",
  email: "aaron@sequoiageo.com",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  sameAs: [
    "https://www.linkedin.com/company/sequoia-geo/",
    "https://www.facebook.com/SequoiaGeoMarketingAgency",
  ],
  member: {
    "@type": "Person",
    "@id": "https://www.sequoiageo.com/#aaron-husak",
    name: "Aaron Husak",
    jobTitle: "Founder & Growth Operator",
    url: "https://www.sequoiageo.com/about-sequoia-geo",
    image: "https://www.sequoiageo.com/aaron-husak.webp",
    sameAs: [
      "https://www.linkedin.com/in/ahusak/",
      "https://www.podmatch.com/guestdetailpreview/1763585117387471addabf9c0",
      "https://www.contractingbusiness.com/residential-hvac/contact/21275479/aaron-husak",
    ],
    subjectOf: [
      ...podcastAppearances.map((appearance) => ({
        "@type": "PodcastEpisode",
        name: appearance.title,
        url: appearance.url,
        datePublished: appearance.datePublished,
        partOfSeries: {
          "@type": "PodcastSeries",
          name: appearance.outlet,
          url: appearance.seriesUrl,
        },
      })),
      {
        "@type": "Article",
        name: tradeMedia[0].title,
        url: tradeMedia[0].url,
        datePublished: tradeMedia[0].datePublished,
      },
    ],
    award: [
      "Inc. 5000 Fastest-Growing Companies 2021, Balanced Comfort (#817, 595% growth)",
      "Inc. 5000 Fastest-Growing Companies 2022, Balanced Comfort (#511)",
      "Inc. 5000 Fastest-Growing Companies 2023, Balanced Comfort",
      "Inc. 5000 Fastest-Growing Companies 2024, Balanced Comfort",
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
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/sequoia-fraunces-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/sequoia-inter-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="antialiased font-sans min-h-screen flex flex-col">
        {/* Skip to main content, accessibility / keyboard nav */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        <ChromeGate>
          <Navigation />
        </ChromeGate>
        <main id="main-content" className="flex-1">{children}</main>
        <ChromeGate>
          <Footer />
        </ChromeGate>

        {/* Sticky mobile call/book bar, sitewide. The component skips the paid
            landing pages that ship their own StickyCallBar. */}
        <StickyMobileCTA />

        <CookieBanner gaId={process.env.NEXT_PUBLIC_GA_ID} clarityId={process.env.NEXT_PUBLIC_CLARITY_ID} />
        <SequoiaKnowledgeInterface />

      </body>
    </html>
  );
}
