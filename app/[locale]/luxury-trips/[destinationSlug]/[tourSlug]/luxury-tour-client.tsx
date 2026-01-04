"use client";

import { LuxuryTourSlug } from "@/lib/data/luxury-page-content";
import { useI18n } from "@/lib/i18n/context";
import { PackageHero } from "./package-hero";
import { ItinerarySection } from "./itinerary-section";
import { AccommodationSection } from "./accommodation-section";
import { InclusionsSection } from "./inclusions-section";


type TourClientProps = {
  tourSlug: LuxuryTourSlug
};

export default function TourClient({ tourSlug }: TourClientProps) {
  const { t } = useI18n();

  return (
    <main className="bg-white">
      {/* ======================================================
          HERO
      ======================================================= */}
      <PackageHero data={t.luxuryTourPackages[tourSlug]?.hero_section} />

      {/* ======================================================
          CItinerarySection
      ======================================================= */}
      <ItinerarySection data={t.luxuryTourPackages[tourSlug]?.itinerary} />
      {/* ======================================================
            AccommodationSection
      ======================================================= */}
      <AccommodationSection data={t.luxuryTourPackages[tourSlug]?.accommodations } />
      {/* ======================================================
          INCLUSIONS
      ======================================================= */}
      <InclusionsSection data={t.luxuryTourPackages[tourSlug]?.inclusions} />
    </main>
  );
}
