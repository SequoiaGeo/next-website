import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
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
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* Google Analytics GA4 */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`,
              }}
            />
          </>
        )}
        {/* Microsoft Clarity */}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <Script
            id="microsoft-clarity"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${process.env.NEXT_PUBLIC_CLARITY_ID}");`,
            }}
          />
        )}
        {/* GHL Talking Website Chat Widget */}
        <div
          data-chat-widget=""
          data-widget-id="69a89cf9aa19c91ff060baa1"
          data-location-id="MOZgNBUPW9SPbtzNM52s"
        />
        <script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69a89cf9aa19c91ff060baa1"
          async
        />
      </body>
    </html>
  );
}
