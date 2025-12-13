import type React from "react"
import type { Metadata, Viewport } from "next"
import Script from "next/script"

// Moved OfferBanner and PromoPopup to root layout to avoid conflicts

export const metadata: Metadata = {
  title: "Luxury India & Dubai Holiday Packages | Up to 35% OFF | Global Tourist Centre",
  description:
    "Book your dream vacation with Global Tourist Centre. Exclusive deals on India tours, Dubai packages, Kerala backwaters, Goa beaches, and more. Best price guarantee, personalized service, 15+ years of expertise. Get free quotes now!",
  keywords:
    "India tours, Dubai holiday packages, luxury travel India, Kerala backwaters tour, Goa beach vacation, Taj Mahal tour, Rajasthan tour packages, international travel packages, customized holidays, travel agency India, best travel deals, honeymoon packages, family vacation India, adventure tours India, luxury resorts India",
  authors: [{ name: "Global Tourist Centre" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ru_RU", "it_IT", "fr_FR", "de_DE"],
    url: "https://globaltouristcentre.com/lp",
    siteName: "Global Tourist Centre",
    title: "Luxury India & Dubai Holiday Packages | Up to 35% OFF",
    description:
      "Book your dream vacation with exclusive deals. Kerala, Goa, Dubai, Rajasthan & more. Best price guarantee + personalized service.",
    images: [
      {
        url: "/og-landing.jpg",
        width: 1200,
        height: 630,
        alt: "Global Tourist Centre - Luxury Travel Experiences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury India & Dubai Holiday Packages | Up to 35% OFF",
    description: "Book your dream vacation with exclusive deals. Best price guarantee + personalized service.",
    images: ["/og-landing.jpg"],
  },
  alternates: {
    canonical: "https://globaltouristcentre.com/lp",
    languages: {
      "en-US": "https://globaltouristcentre.com/lp",
      "ru-RU": "https://globaltouristcentre.com/ru/lp",
      "it-IT": "https://globaltouristcentre.com/it/lp",
      "fr-FR": "https://globaltouristcentre.com/fr/lp",
      "de-DE": "https://globaltouristcentre.com/de/lp",
    },
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1a2332",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Global Tourist Centre",
  description: "Luxury travel experiences since 2010",
  url: "https://globaltouristcentre.com",
  logo: "https://globaltouristcentre.com/logo.png",
  telephone: "+91-9067972295",
  email: "info@globaltouristcentre.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ground Floor, 1492, 3GF5-7, Benaulim Beach Road",
    addressLocality: "Benaulim",
    addressRegion: "Goa",
    postalCode: "403716",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "15.2631",
    longitude: "73.9264",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "10:00",
    closes: "21:00",
  },
  sameAs: ["https://www.instagram.com/globaltouristcentre", "https://www.facebook.com/globaltouristcentre"],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Travel Packages",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "TouristTrip",
          name: "Dubai Holiday Package",
          description: "Experience Dubai's modern marvels with dhow cruise, desert safari, and more.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "TouristTrip",
          name: "Kerala Backwaters Tour",
          description: "Serene houseboat cruises through palm-fringed backwaters.",
        },
      },
    ],
  },
}

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <Script
        id="landing-page-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Landing page content - no header/footer, just the page content */}
      <div className="min-h-screen flex flex-col">{children}</div>
    </>
  )
}
