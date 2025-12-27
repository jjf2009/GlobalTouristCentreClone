"use client";

import { notFound } from "next/navigation";
import { useI18n } from "@/lib/i18n/context";

import { DetailedTourHero } from "@/components/tours/detailed-tour-hero";
import { TourCtaBar } from "@/components/tours/tour-cta-bar";
import { TourQuickInfo } from "@/components/tours/ tour-quick-info";
import { TourItinerary } from "@/components/tours/tour-itinerary";
import { TourVisualJourney } from "@/components/tours/tour-visual-journey";
import { TourInclusions } from "@/components/tours/tour-inclusions";

type TourClientProps = {
  tourId: string;
};

export default function TourClient({ tourId }: TourClientProps) {
  const { t } = useI18n();

  const data = t.tourdata?.[tourId];

  if (!data) {
    notFound();
  }

  const { page, cta, quickInfo, itinerary, gallery, inclusions } = data;

  return (
    <main className="bg-white">
      {/* ======================================================
          HERO
      ======================================================= */}
      <DetailedTourHero
        title={page.hero.title}
        subtitle={page.hero.subtitle}
        backgroundImage={page.hero.backgroundImage}
        meta={page.hero.meta}
      />

      {/* ======================================================
          CTA BAR
      ======================================================= */}
      <TourCtaBar
        tourName={page.hero.title}
        phoneNumber={cta?.contact?.phone}
      />

      {/* ======================================================
          QUICK INFO
      ======================================================= */}
      {quickInfo?.length > 0 && <TourQuickInfo items={quickInfo} />}

      {/* ======================================================
          ITINERARY
      ======================================================= */}
      {itinerary?.length > 0 && <TourItinerary items={itinerary} />}

      {/* ======================================================
          GALLERY
      ======================================================= */}
      {gallery?.length > 0 && <TourVisualJourney items={gallery} />}

      {/* ======================================================
          INCLUSIONS
      ======================================================= */}
      {inclusions?.length > 0 && (
        <TourInclusions
          subtitle={
            t.tours?.inclusionsSubtitle ??
            "Everything included for a smooth and memorable experience"
          }
          items={inclusions}
        />
      )}
    </main>
  );
}
