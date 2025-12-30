"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/context";
import HomeCard from "./HomeCard";
import  { SectionTitle } from "@/components/SectionTitle"; 

/* ----------------------------------------
   DATA MODEL
----------------------------------------- */

type TravelCollection = {
  id: string;
  href: string;
  imageUrl: string;
};

const travelCollections: TravelCollection[] = [
  /* ================= DAY TRIPS ================= */

  {
    id: "full-day-south-goa-tour",
    href: "/destinations/day-trips/full-day-south-goa-tour", // matches day-south-goa-cultural-007.slug
    imageUrl: "/assets/destinations/Goa/basilica-bom-jesus.webp",
  },
  {
    id: "north-goa-day-tour",
    href: "/destinations/day-trips/north-goa-day-tour", // matches day-north-goa-009.slug
    imageUrl: "/assets/destinations/Thumbnails/NorthGoa.webp",
  },
  {
    id: "dudhsagar-spice-plantation",
    href: "/destinations/day-trips/dudhsagar-spice-plantation", // matches day-dudhsagar-spice-010.slug
    imageUrl: "/assets/destinations/Thumbnails/Dudhsagar.webp",
  },
  {
    id: "palolem-cola-beach-dolphin-spotting",
    href: "/destinations/day-trips/palolem-cola-beach-dolphin-spotting", // matches day-palolem-cola-011.slug
    imageUrl: "/assets/destinations/Thumbnails/Palolem.webp",
  },
  // {
  //   id: "crocodile-sightseeing-trip",
  //   href: "/destinations/day-trips/crocodile-sightseeing-trip", // matches day-crocodile-012.slug
  //   imageUrl: "/assets/destinations/Thumbnails/Crocodile.webp",
  // },
  {
    id: "yacht-day-tour",
    href: "/destinations/day-trips/yacht-day-tour", // matches day-yacht-013.slug
    imageUrl: "/assets/destinations/Thumbnails/Yacht.webp",
  },
  {
    id: "grand-island-water-sport",
    href: "/destinations/day-trips/grand-island-water-sports", // matches day-grand-island-014.slug
    imageUrl: "/assets/destinations/Thumbnails/GrandIsland.webp",
  },
  {
    id: "gokarna-murdeshwar-trip",
    href: "/destinations/day-trips/gokarna-murdeshwar-trip", // matches day-gokarna-005.slug (updated from old -tour)
    imageUrl: "/assets/destinations/Thumbnails/Gokarna.webp",
  },
  {
    id: "2-days-dandeli-tour-package",
    href: "/destinations/day-trips/2-days-dandeli-tour-package", // matches day-dandeli-001.slug
    imageUrl: "/assets/destinations/Thumbnails/Dandeli.webp",
  },

  /* ================= SHORT STAYS ================= */

  {
    id: "goa-serai-cabo-retreat",
    href: "/destinations/domestic/goa-serai-cabo-retreat", // matches dom-goa-serai-018.slug
    imageUrl: "/assets/destinations/Thumbnails/SeraiCabo.webp",
  },
  {
    id: "hampi-badami-tour-package",
    href: "/destinations/domestic/hampi-badami-tour-package", // matches dom-hampi-019.slug
    imageUrl: "/assets/destinations/Thumbnails/Hampi.webp",
  },
  // removed hampi-badami because that trip is commented out in domesticTrips source of truth
  {
    id: "mysore-ooty-tour",
    href: "/destinations/domestic/mysore-ooty-tour", // matches dom-mysore-ooty-020.slug
    imageUrl: "/assets/destinations/Thumbnails/Ooty.webp",
  },
  {
    id: "mumbai-day-trip",
    href: "/destinations/day-trips/mumbai-day-trip", // matches dom-mumbai-021.slug
    imageUrl: "/assets/destinations/Thumbnails/Mumbai.webp",
  },
  {
    id: "ajanta-ellora-caves-tour",
    href: "/destinations/domestic/ajanta-ellora-caves-tour", // matches dom-ajanta-ellora-022.slug
    imageUrl: "/assets/destinations/Thumbnails/Ellora.webp",
  },
  {
    id: "taj-mahal-tour",
    href: "/destinations/domestic/taj-mahal-tour", // matches dom-taj-mahal-023.slug
    imageUrl: "/assets/destinations/Thumbnails/TajMahal.webp",
  },
  // removed taj-mahal-1n2d because that trip is commented out in domesticTrips source of truth

  /* ================= MULTI-DAY DOMESTIC ================= */

  // removed kerala-4n5d because kerala-backwaters-hills is commented out
  // removed golden-triangle-3n4d because golden-triangle-tour is commented out
  {
    id: "kerala-tour",
    href: "/destinations/domestic/kerala-tour", // matches dom-kerala-024.slug
    imageUrl: "/assets/destinations/Thumbnails/Kerala.webp",
  },
  {
    id: "4D-golden-triangle-tour",
    href: "/destinations/domestic/4D-golden-triangle-tour", // matches dom-golden-triangle-025.slug
    imageUrl: "/assets/destinations/Thumbnails/GoldenTriangle.webp",
  },
  {
    id: "jodhpur-udaipur-tour",
    href: "/destinations/domestic/jodhpur-udaipur-tour", // matches dom-udaipur-jodhpur-026.slug
    imageUrl: "/assets/destinations/Thumbnails/Udaipur.webp",
  },
  {
    id: "varanasi-tour-package",
    href: "/destinations/domestic/varanasi-tour-package", // matches dom-varanasi-027.slug
    imageUrl: "/assets/destinations/Thumbnails/Varanasi.webp",
  },
  {
    id: "mathura-tour-package",
    href: "/destinations/domestic/mathura-tour-package", // matches dom-mathura-vrindavan-028.slug
    imageUrl: "/assets/destinations/Thumbnails/Mathura.webp",
  },

  /* ================= INTERNATIONAL ================= */

  // removed andaman-islands-5n6d because that itinerary is commented out
  {
    id: "andaman-islands-trip",
    href: "/itinerary/international/andaman-islands-trip", // matches int-andaman-021.slug
    imageUrl: "/assets/destinations/Thumbnails/Andaman.webp",
  },
  {
    id: "maldives-luxury-tour",
    href: "/itinerary/international/maldives-luxury-tour", // matches int-maldives-022.slug
    imageUrl: "/assets/destinations/Thumbnails/Maldives.webp",
  },
  {
    id: "sri-lanka-tour",
    href: "/itinerary/international/sri-lanka-tour", // matches int-srilanka-023.slug
    imageUrl: "/assets/destinations/Thumbnails/SriLanka.webp",
  },
  {
    id: "bhutan-tour",
    href: "/itinerary/international/bhutan-tour", // matches int-bhutan-024.slug
    imageUrl: "/assets/destinations/Thumbnails/Bhutan.webp",
  },
];

/* ----------------------------------------
   COMPONENT
----------------------------------------- */

const HomeIntro = () => {
  const { t, locale } = useI18n();
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative  bg-gradient-to-br py-8 from-[#f7f8fb] to-[#e6ebf1]">
      <div className="max-w-7xl mx-auto px-4">
        {/* =======================
            TITLE
        ======================== */}

        <SectionTitle title={t.home.title} subtitle={t.home.subtitle} />

        {/* <div className="text-center md:text-left mb-12">
          <div className="relative inline-block">
            <h2 className="font-serif text-slate-900 text-3xl md:text-4xl font-bold mb-3">
              {t.home.title}
            </h2>

            <span
              aria-hidden="true"
              className="absolute left-0 -bottom-1 h-[4px] w-20 rounded-full
              bg-gradient-to-r from-[#ff6b6b] via-[#f8d56b] to-[#0d9488]"
            />
          </div>

          <p className="text-slate-600 max-w-3xl mt-4">{t.home.mainsubtitle}</p>
        </div> */}

        {/* =======================
            MOBILE – CAROUSEL
        ======================== */}
        <div className="md:hidden mb-14">
          <div
            ref={carouselRef}
            className="flex gap-1 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          >
            {travelCollections.map((tour) => {
              const content = t.home.items[tour.id];

              if (!content) {
                if (process.env.NODE_ENV !== "production") {
                  console.warn(`Missing translation for: ${tour.id}`);
                }
                return null;
              }

              return (
                <div
                  key={tour.id}
                  className="snap-start shrink-0 w-[85vw] max-w-[340px]"
                >
                  <HomeCard
                    imageUrl={tour.imageUrl}
                    title={content.title}
                    duration={content.duration}
                    description={content.description}
                    href={`/${locale}${tour.href}`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* =======================
            DESKTOP – GRID
        ======================== */}
        <div className="hidden md:grid grid-cols-4 gap-3 mb-16">
          {travelCollections.map((tour) => {
            const content = t.home.items[tour.id];

            if (!content) {
              if (process.env.NODE_ENV !== "production") {
                console.warn(`Missing translation for: ${tour.id}`);
              }
              return null;
            }

            return (
              <HomeCard
                key={tour.id}
                imageUrl={tour.imageUrl}
                title={content.title}
                duration={content.duration}
                description={content.description}
                href={`/${locale}${tour.href}`}
              />
            );
          })}
        </div>

        {/* =======================
            CTA
        ======================== */}
        <div className="flex justify-center">
          <Link href={`/${locale}/destinations`}>
            <Button
              size="lg"
              className="
                px-16 py-7 rounded-full text-lg font-semibold
                bg-[#fde68a] text-slate-900
                hover:bg-[#facc15]
                transition-all duration-300
                shadow-lg hover:shadow-2xl
              "
            >
              {t.collections.cta.exploreAll}
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
