import { LOCALES, TOUR_CATEGORIES } from "@/lib/data/tour-slugs";
import DestinationsClient from "./DestinationsClient";
import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n/getTranslations";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = getTranslations(params.locale);

  return {
    title: t.destinations.herotitle,
  };
}
/* ---------- STATIC PARAMS (REQUIRED FOR EXPORT) ---------- */
export async function generateStaticParams() {
  const params: { locale: string}[] = [];

  for (const locale of LOCALES) {
    for (const category of Object.keys(TOUR_CATEGORIES)) {
      params.push({ locale });
    }
  }

  return params;
}

/* ---------- SERVER COMPONENT ---------- */
export default function DestinationsPage() {
  return <DestinationsClient />;
}
