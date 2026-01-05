import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { LuxuryClient } from "./categoey-client";
import { getTranslations } from "@/lib/i18n/getTranslations";
import { LuxurySlug } from "@/lib/data/luxury-page-content";

/* ------------------------------------------------------------------ */
/* VALID SLUGS */
/* ------------------------------------------------------------------ */
const VALID_SLUGS = [
  "kerala-luxury",
  "mumbai-luxury",
  "golden-triangle-luxury",
  "rajasthan-luxury",
  "karnataka-luxury",
] as const;

/* ------------------------------------------------------------------ */
/* TYPES */
/* ------------------------------------------------------------------ */
type PageProps = {
  params: {
    locale: string;
    destinationSlug: LuxurySlug;
  };
};

/* ------------------------------------------------------------------ */
/* METADATA */
/* ------------------------------------------------------------------ */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, destinationSlug } = params;
  const t = getTranslations(locale);

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
      images: [pageData.hero.image],
      siteName: "Global Tourist Centre",
      type: "website",
    },
  };
}

/* ------------------------------------------------------------------ */
/* STATIC PARAMS */
/* ------------------------------------------------------------------ */
export function generateStaticParams() {
  return VALID_SLUGS.map((destinationSlug) => ({
    destinationSlug,
  }));
}

/* ------------------------------------------------------------------ */
/* PAGE */
/* ------------------------------------------------------------------ */
export default function LuxuryDestinationPage({ params }: PageProps) {
  const { destinationSlug } = params;

  if (!VALID_SLUGS.includes(destinationSlug)) {
    notFound();
  }

return <LuxuryClient params={{ slug: destinationSlug as any }} />;
}
