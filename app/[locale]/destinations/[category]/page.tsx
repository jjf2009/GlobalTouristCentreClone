import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n/getTranslations";

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

function getCategoryContent(
  category: string,
  t: ReturnType<typeof getTranslations>
) {
  switch (category) {
    case "domestic":
      return {
        heroTitle: t.destinations.domesticTitle,
        subtitle: t.destinations.domesticSubtitle,
      };

    case "international":
      return {
        heroTitle: t.destinations.internationalTitle,
        subtitle: t.destinations.internationalSubtitle,
      };

    case "day-trips":
      return {
        heroTitle: t.destinations.dayTripsTitle,
        subtitle: t.destinations.dayTripsSubtitle,
      };

    default:
      return null;
  }
}
function getHeroContent(
  category: string,
  t: ReturnType<typeof getTranslations>
) {
  switch (category) {
    case "domestic":
      return {
        heroTitle: t.destinations.domestichero,
      };

    case "international":
      return {
        heroTitle: t.destinations.internationalhero,
      };

    case "day-trips":
      return {
        heroTitle: t.destinations.dayTripsHero,
      };

    default:
      return null;
  }
}


/* ------------------------------------------------------------------ */
/* SEO METADATA (i18n-aware, slug-based) */
/* ------------------------------------------------------------------ */
export function generateMetadata({ params }: PageProps): Metadata {
  const { locale, category } = params;
  const t = getTranslations(locale);

  const content = getCategoryContent(category, t);

  if (!content) {
    return {
      title: t.common?.notFoundTitle ?? "Destinations Not Found",
      description:
        t.common?.notFoundDescription ??
        "The requested destination category does not exist.",
    };
  }

  return {
    title: content.heroTitle,
  };
}




/* ------------------------------------------------------------------ */
/* PAGE */
/* ------------------------------------------------------------------ */
export default function DestinationsCategoryPage({ params }: PageProps) {
  const { category, locale } = params;

  const data = getDestinationBySlug(category);
  if (!data) notFound();

  const t = getTranslations(locale);
  const content = getHeroContent(category, t);
  if (!content) notFound();

  return (
    <main>
      {/* HERO SECTION */}
      <HeroSection
        title={content.heroTitle}
        backgroundQuery={data.heroImageQuery}
      />

      {/* DESTINATIONS GRID */}
      <DestinationsGridSection
        slug={category as keyof typeof TOUR_CATEGORIES}
        title={data.title}
        subtitle={data.subtitle}
        items={data.items}
      />

      {/* REACH OUT FORM */}
      <HomeForm />
    </main>
  );
}

