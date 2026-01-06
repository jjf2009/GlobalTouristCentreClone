import type React from "react";
import type { Metadata, Viewport } from "next";
import { Playfair_Display } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { I18nProvider } from "@/lib/i18n/context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import { WhatsAppButton } from "@/components/whatsapp-button";
import { locales } from "@/lib/i18n/config";
import type { Locale } from "@/lib/i18n/translations";
import { notFound } from "next/navigation";
import "../globals.css";
import Script from "next/script";

const travelAgencySchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Global Tourist Centre",
  image: "https://globaltouristcentre.com/wp-content/uploads/2024/05/logo.png",
  "@id": "https://globaltouristcentre.com/",
  url: "https://globaltouristcentre.com/",
  telephone: "+91-9067972295",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Benaulim Beach Road, South Goa",
    addressLocality: "Benaulim",
    addressRegion: "Goa",
    postalCode: "403716",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 15.2602,
    longitude: 73.9272,
  },
  sameAs: [
    "https://www.facebook.com/globaltouristcentre",
    "https://www.instagram.com/globaltouristcentre",
  ],
};


/* -----------------------------
   Fonts
------------------------------ */
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});
/* -----------------------------
   Static Params for locales
------------------------------ */
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/* -----------------------------
   Metadata (base – overridden per page)
------------------------------ */
export const metadata: Metadata = {
  title: {
    default: "Global Tourist Centre | Luxury Travel Experiences",
    template: "%s | Global Tourist Centre",
  },
  description:
    "We don't just book trips — we design lifetimes of stories. Bespoke domestic and international tours since 2010.",
  keywords: [
    "luxury travel",
    "tour packages",
    "India tours",
    "international travel",
    "Goa tours",
    "Kerala luxury trips",
  ],
  authors: [{ name: "Global Tourist Centre" }],
  openGraph: {
    type: "website",
    siteName: "Global Tourist Centre",
  },
  metadataBase: new URL("https://globaltouristcentre.com/"),
};

/* -----------------------------
   Viewport
------------------------------ */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1a2332",
};

/* -----------------------------
   Root Layout
------------------------------ */
export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale as Locale;

  if (!locales.includes(locale as any)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`scroll-smooth ${montserrat.variable} ${playfair.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased font-sans relative">
        <I18nProvider locale={locale}>
          {/* Header */}
          {/* <Header /> */}

          {/* Main content */}
          <main id="main-content" role="main" className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <Footer />

          {/* WhatsApp CTA */}
          <WhatsAppButton
            phoneNumber="919067972295"
            message="Hi! I am planning a trip, can you help me out?"
            tooltipText="Chat with us on WhatsApp"
          />
        </I18nProvider>
        <Script
          id="travel-agency-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(travelAgencySchema),
          }}
        />

        <Analytics />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5CNKV323"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <noscript>
          <img
            src="https://mc.yandex.ru/watch/105467216"
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
