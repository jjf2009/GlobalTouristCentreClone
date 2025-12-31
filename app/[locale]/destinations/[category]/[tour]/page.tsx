import { notFound } from "next/navigation";
import type { Metadata } from "next";

import TourClient from "./tour-detail-client";

import { LOCALES, TOUR_CATEGORIES } from "@/lib/data/tour-slugs";
import { getTranslations } from "@/lib/i18n/getTranslations";

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
  const { locale, tour } = params;

  const t = getTranslations(locale);
  const data = t.tourData?.[tour];

  // 🔹 Fallback if tour translation is missing
  if (!data) {
    const title = t.data.page.hero.title ?? "Tour Package";

    return {
      title,
      description:
        "Explore curated tour packages with expert planning, trusted guides, and memorable experiences.",
      openGraph: {
        title,
        description:
          "Explore curated tour packages with expert planning, trusted guides, and memorable experiences.",
        siteName: "Global Tourist Centre",
        type: "website",
      },
    };
  }
const title = data.page?.hero?.title;
const description =data.page?.hero?.meta?.description ?? data.page?.hero?.subtitle;

return {
  title,
  description,

  openGraph: {
    title,
    description,
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
  const { category, tour } = params;

  /* 1️⃣ Validate category */
  const validTours = TOUR_CATEGORIES[category as keyof typeof TOUR_CATEGORIES];

  if (!validTours) notFound();

  /* 2️⃣ Validate tour belongs to category */
  if (!validTours.includes(tour)) notFound();

  /* 3️⃣ Render client */
  return <TourClient tourId={tour} />;
}
