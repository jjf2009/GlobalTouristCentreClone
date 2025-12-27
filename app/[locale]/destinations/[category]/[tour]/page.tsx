import { notFound } from "next/navigation";
import TourClient from "./tour-detail-client";

import { LOCALES, TOUR_CATEGORIES } from "@/lib/data/tour-slugs";

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
/* PAGE */
/* ------------------------------------------------------------------ */
type PageProps = {
  params: {
    locale: string;
    category: string;
    tour: string;
  };
};

export default function TourDetailPage({ params }: PageProps) {
  const { category, tour } = params;

  /* 1️⃣ Validate category */
  const validTours = TOUR_CATEGORIES[category as keyof typeof TOUR_CATEGORIES];
  if (!validTours) notFound();

  /* 2️⃣ Validate tour belongs to category */
  if (!validTours.includes(tour)) notFound();

  /* 3️⃣ Render client — data resolved via i18n context */
  return <TourClient tourId={tour} />;
}
