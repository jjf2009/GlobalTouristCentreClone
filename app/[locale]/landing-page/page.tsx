import type React from "react"
import { OfferBanner } from "@/components/offer-banner"

import Testimonials from "./Testimonials"
import Memories from "./Memories"
import Services from "./Services"
import CuratedTravel from "./CuratedTravel"
import Signature from "./Signature"
import Hero from "./Hero"

import type { Metadata } from "next";

export const generateMetadata = ({
  params,
}: {
  params: { locale: string };
}): Metadata => {
  const locale = params.locale || "en";

  const baseUrl = "https://globaltouristcentreclone.vercel.app";

  return {
    title:
      "Luxury Goa Tour Packages with Free Airport Pickup | Global Tourist Centre",

    description:
      "Discover luxury Goa tour packages with free airport pickup. Trusted travel experts since 2010 offering curated journeys, UNESCO tours, and premium experiences.",

    alternates: {
      canonical: `${baseUrl}/${locale}/landing-page`,
      languages: {
        "en-IN": `${baseUrl}/en/landing-page`,
        "ru-RU": `${baseUrl}/ru/landing-page`,
        "de-DE": `${baseUrl}/de/landing-page`,
        "fr-FR": `${baseUrl}/fr/landing-page`,
        "it-IT": `${baseUrl}/it/landing-page`,
      },
    },

    openGraph: {
      title: "Luxury Goa Tours with Free Airport Transfer",
      description:
        "Luxury tours in Goa with curated experiences and free airport pickup. Trusted travel partner since 2010.",
      url: `${baseUrl}/${locale}/landing-page`,
      siteName: "Global Tourist Centre",
      images: [
        {
          url: `${baseUrl}/og/luxury-goa-tour.jpg`,
          width: 1200,
          height: 630,
          alt: "Luxury Goa tour with free airport pickup",
        },
      ],
      locale: locale,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "Luxury Goa Tours with Free Airport Pickup",
      description:
        "Handcrafted luxury journeys, premium services, and trusted travel expertise since 2010.",
      images: [`${baseUrl}/og/luxury-goa-tour.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
};





export default function LandingPage() {

  return (
    <div className=" bg-background">
      {/* Skip to main content link for accessibility */}
      <a className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md">
        Skip to booking form
      </a>
      {/* MAIN LANDMARK (IMPORTANT) */}
      <main id="main-content">
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://globaltouristcentre.com/#organization",
                  name: "Global Tourist Centre",
                  url: "https://globaltouristcentre.com",
                  logo: "https://globaltouristcentre.com/logo.png",
                  foundingDate: "2010",
                  sameAs: [
                    "https://www.instagram.com/globaltouristcentre",
                    "https://www.facebook.com/globaltouristcentre",
                  ],
                },
                {
                  "@type": "TravelAgency",
                  "@id": "https://globaltouristcentre.com/#travelagency",
                  name: "Global Tourist Centre",
                  url: "https://globaltouristcentre.com/landing-page",
                  priceRange: "$$",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Goa",
                    addressCountry: "IN",
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.9",
                    reviewCount: "10000",
                  },
                },
                {
                  "@type": "Offer",
                  name: "Free Airport Pickup with Every Tour",
                  description:
                    "Free luxury airport transfer included with every tour booking. Valid for new bookings only.",
                  price: "0",
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock",
                  seller: {
                    "@id": "https://globaltouristcentre.com/#travelagency",
                  },
                },
                {
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "Do Goa tour packages include airport pickup?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. All Goa tour packages booked with Global Tourist Centre include free airport pickup for a safe and comfortable arrival.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How long has Global Tourist Centre been operating?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Global Tourist Centre has been designing curated luxury travel experiences since 2010.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Are these tours suitable for families and couples?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Our tours are ideal for families, honeymoon couples, and travelers seeking premium experiences.",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />

        {/* Hero Section (must contain ONE H1 internally) */}
        <Hero />

        {/* Offer */}
        <OfferBanner />

        {/* Signature Experiences */}
        <Signature />

        {/* Curated Travel Collections */}
        <CuratedTravel />

        {/* Services */}
        <Services />

        {/* Testimonials */}
        <Testimonials />

        {/* Travel Memories */}
        <Memories />
      </main>
    </div>
  );
}
