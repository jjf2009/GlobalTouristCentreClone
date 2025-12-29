import { notFound } from "next/navigation";
import type { Metadata } from "next";

import TourClient from "./tour-detail-client";

import { LOCALES, TOUR_CATEGORIES } from "@/lib/data/tour-slugs";
import { seoData } from "@/lib/data/seodata";

/* ------------------------------------------------------------------ */
/* STATIC PARAMS */
/* ------------------------------------------------------------------ */
export function generateStaticParams() {
  const params: {
    locale: string;
    category: string;
    tour: string;
  }[] = [];

  for (const locale of LOCALES) {
    for (const [category, tours] of Object.entries(TOUR_CATEGORIES)) {
      for (const tour of tours) {
        params.push({ locale, category, tour });
      }
    }
  }

  return params;
}

/* ------------------------------------------------------------------ */
/* METADATA */
/* ------------------------------------------------------------------ */
type PageProps = {
  params: {
    locale: string;
    category: string;
    tour: string;
  };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { tour, locale } = params;
  const seo = seoData[tour];

  if (!seo) {
    return {
      title: "Tour Package | Global Tourist Centre",
      description:
        "Explore curated tour packages with expert planning, trusted guides, and memorable experiences.",
      openGraph: {
        title: "Tour Package | Global Tourist Centre",
        description:
          "Explore curated tour packages with expert planning, trusted guides, and memorable experiences.",
        url: `https://globaltouristcentre.com/${locale}/destinations`,
        siteName: "Global Tourist Centre",
        images: [
          {
            url: "https://globaltouristcentre.com/og-default.jpg",
            width: 1200,
            height: 630,
            alt: "Global Tourist Centre Tours",
          },
        ],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Tour Package | Global Tourist Centre",
        description:
          "Explore curated tour packages with expert planning, trusted guides, and memorable experiences.",
        images: ["https://globaltouristcentre.com/og-default.jpg"],
      },
    };
  }

  return {
    title: seo.title,
    description: seo.meta_description,
    alternates: seo.actual_url ? { canonical: seo.actual_url } : undefined,

    openGraph: {
      title: seo.title,
      description: seo.meta_description,
      url: seo.actual_url,
      siteName: "Global Tourist Centre",
      images: [
        {
          url: seo.og_image
            ? `https://globaltouristcentre.com${seo.og_image}`
            : "https://globaltouristcentre.com/og-default.jpg",
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
      locale: "en_US",
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.meta_description,
      images: [
        seo.og_image
          ? `https://globaltouristcentre.com${seo.og_image}`
          : "https://globaltouristcentre.com/og-default.jpg",
      ],
    },
  };
}


/* ------------------------------------------------------------------ */
/* PAGE */
/* ------------------------------------------------------------------ */
export default function TourDetailPage({ params }: PageProps) {
  const { category, tour } = params;

  /* 1️⃣ Validate category */
  const validTours = TOUR_CATEGORIES[category as keyof typeof TOUR_CATEGORIES];
  if (!validTours) notFound();

  /* 2️⃣ Validate tour belongs to category */
  if (!validTours.includes(tour)) notFound();

  /* 3️⃣ Render client */
  return <TourClient tourId={tour} />;
}
