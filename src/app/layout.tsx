import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import AiReferrerTracker from "@/components/AiReferrerTracker";


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
  title: "Home Services Marketing by a 13-Year Industry Operator | Sequoia GEO",
  description:
    "Home services marketing connected to booked jobs. 13-year operator, 4x Inc 5000. I see your booking rate, average ticket, and where revenue leaks. Not just your lead count.",
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
    title: "Home Services Marketing by a 13-Year Industry Operator | Sequoia GEO",
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
  image: "https://www.sequoiageo.com/og-image.png",
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
      "Inc. 5000 Fastest-Growing Companies 2020, Balanced Comfort",
      "Inc. 5000 Fastest-Growing Companies 2021, Balanced Comfort (#817, 595% growth)",
      "Inc. 5000 Fastest-Growing Companies 2022, Balanced Comfort (#511)",
      "Inc. 5000 Fastest-Growing Companies 2023, Balanced Comfort",
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
        {/* Preconnect to GA4/GTM to cut 100–200ms from DNS+TLS on first load */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
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

        {/* GA4 Consent Mode v2: analytics_storage granted by default (B2B site,
            low traffic, need every data point). Ad storage stays denied until
            cookie consent. CookieBanner upgrades ad_storage on acceptance. */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              id="ga4-consent-defaults"
              strategy="beforeInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});`,
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
                __html: `gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');gtag('config','AW-1042937332');`,
              }}
            />
          </>
        )}

        {/* Microsoft Clarity — loads for everyone, same posture as GA4 above
            (analytics on by default for a US/B2B audience; the banner still
            governs ad_storage). Previously gated behind cookie-accept, which
            left Clarity recording ~nothing and CRO decisions blind. */}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <Script
            id="ms-clarity"
            src={`https://www.clarity.ms/tag/${process.env.NEXT_PUBLIC_CLARITY_ID}`}
            strategy="afterInteractive"
          />
        )}

        {/* Meta Pixel — dataset 1394557232154617 ("AI Automation Cold" in Events Manager).
            Same default-on posture as GA4/Clarity above. Base PageView on every page;
            feeds retargeting for the call campaign and the future CAPI/Conversion Leads setup. */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1394557232154617');fbq('track','PageView');`,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://www.facebook.com/tr?id=1394557232154617&ev=PageView&noscript=1"
          />
        </noscript>

        {/* Cookie consent banner — upgrades ad consent on acceptance */}
        <CookieBanner clarityId={process.env.NEXT_PUBLIC_CLARITY_ID} />

        {/* AI referrer tracker: fires ai_referrer_seen GA4 event when visitor arrives from a known AI engine */}
        {process.env.NEXT_PUBLIC_GA_ID && <AiReferrerTracker />}

      </body>
    </html>
  );
}
