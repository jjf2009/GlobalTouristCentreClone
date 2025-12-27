import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getDestinationBySlug } from "../get-destination";
import { DestinationsGridSection } from "./DestinationsGridSection";
import { HeroSection } from "@/components/hero-section";
import HomeForm from "../../(home)/HomeForm";

import { LOCALES, TOUR_CATEGORIES } from "@/lib/data/tour-slugs";

/* ------------------------------------------------------------------ */
/* TYPES */
/* ------------------------------------------------------------------ */
type PageProps = {
  params: {
    locale: string;
    category: string;
  };
};

/* ------------------------------------------------------------------ */
/* STATIC PARAMS (REQUIRED FOR output: "export") */
/* ------------------------------------------------------------------ */
export function generateStaticParams() {
  const categories = Object.keys(TOUR_CATEGORIES);

  return LOCALES.flatMap((locale) =>
    categories.map((category) => ({
      locale,
      category,
    }))
  );
}

/* ------------------------------------------------------------------ */
/* SEO METADATA */
/* ------------------------------------------------------------------ */
export function generateMetadata({ params }: PageProps): Metadata {
  const data = getDestinationBySlug(params.category);

  if (!data) {
    return {
      title: "Destinations Not Found | Global Tourist Centre",
      description: "The requested destination category does not exist.",
    };
  }

  return {
    title: `${data.title} Tours | Global Tourist Centre`,
    description: data.subtitle,
  };
}

/* ------------------------------------------------------------------ */
/* PAGE */
/* ------------------------------------------------------------------ */
export default function DestinationsCategoryPage({ params }: PageProps) {
  const data = getDestinationBySlug(params.category);

  if (!data) notFound();

  return (
    <main>
      {/* HERO SECTION */}
      <HeroSection
        title={data.herotitle}
        backgroundQuery={data.heroImageQuery}
      />

      {/* DESTINATIONS GRID */}
      <DestinationsGridSection
        slug={params.category as keyof typeof TOUR_CATEGORIES}
        title={data.title}
        subtitle={data.subtitle}
        items={data.items}
      />

      {/* REACH OUT FORM */}
      <HomeForm />
    </main>
  );
}
