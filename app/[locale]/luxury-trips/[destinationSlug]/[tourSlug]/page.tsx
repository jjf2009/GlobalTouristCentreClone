import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n/getTranslations";
import TourClient from "./luxury-tour-client";
import { LOCALES } from "@/lib/data/tour-slugs";
import {
  LUXURY_TOUR_SLUGS,
  luxuryPageContent,
  LuxurySlug,
  LuxuryTourSlug,
  DESTINATION_TOURS,
} from "@/lib/data/luxury-page-content";

/* ------------------------------------------------------------------ */
/* STATIC PARAMS */
/* ------------------------------------------------------------------ */
export function generateStaticParams() {
  const params: {
    locale: string;
    destinationSlug: LuxurySlug;
    tourSlug: LuxuryTourSlug;
  }[] = [];

  const destinationSlugs = Object.keys(luxuryPageContent) as LuxurySlug[];

  for (const locale of LOCALES) {
    for (const destinationSlug of destinationSlugs) {
      // Only generate routes for tours that belong to this destination
      const toursForDestination = DESTINATION_TOURS[destinationSlug] || [];
      for (const tourSlug of toursForDestination) {
        params.push({
          locale,
          destinationSlug,
          tourSlug,
        });
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
    destinationSlug: string;
    tourSlug: LuxuryTourSlug;
  };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
 const { locale, destinationSlug } = params;
  const t = getTranslations(locale);
  // 🔹 Temporary static metadata (no i18n)

  const pageData = t.luxuryPages?.[destinationSlug];
    if (!pageData) {
      return {
        title: "Luxury Tours",
        description:
          "Explore curated luxury travel experiences with premium stays and personalized service.",
      };
    }


  return {
    title: pageData.hero.title,
    description: pageData.hero.description,
    openGraph: {
      title: pageData.hero.title,
      description: pageData.hero.description,
      siteName: "Global Tourist Centre",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/* ------------------------------------------------------------------ */
/* PAGE */
/* ------------------------------------------------------------------ */
export default function TourDetailPage({ params }: PageProps) {
  const { tourSlug } = params;

  /* 1️⃣ Validate tour slug */
  if (!LUXURY_TOUR_SLUGS.includes(tourSlug)) {
    notFound();
  }

  /* 2️⃣ Render client */
  return <TourClient tourSlug={tourSlug} />;
}
