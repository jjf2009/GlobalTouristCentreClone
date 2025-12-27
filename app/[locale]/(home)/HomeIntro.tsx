"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/context";
import HomeCard from "./HomeCard";

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
    id: "south-goa-cultural-day",
    href: "/destinations/day-trips/south-goa-cultural-goa",
    imageUrl: "/assets/destinations/Goa/basilica-bom-jesus.webp",
  },
  {
    id: "north-goa-day",
    href: "/destinations/day-trips/north-goa-sightseeing",
    imageUrl: "/assets/destinations/Thumbnails/NorthGoa.webp",
  },
  {
    id: "dudhsagar-spice-day",
    href: "/destinations/day-trips/dudhsagar-spice-plantation",
    imageUrl: "/assets/destinations/Thumbnails/Dudhsagar.webp",
  },
  {
    id: "palolem-cola-dolphin-day",
    href: "/destinations/day-trips/palolem-cola-dolphin-spotting",
    imageUrl: "/assets/destinations/Thumbnails/Palolem.webp",
  },
  {
    id: "crocodile-trip-half-day",
    href: "/destinations/day-trips/crocodile-sightseeing-trip",
    imageUrl: "/assets/destinations/Thumbnails/Crocodile.webp",
  },
  {
    id: "luxury-yacht-evening",
    href: "/destinations/day-trips/luxury-yacht-tour-goa",
    imageUrl: "/assets/destinations/Thumbnails/Yacht.webp",
  },
  {
    id: "grand-island-watersports-day",
    href: "/destinations/day-trips/grand-island-water-sports",
    imageUrl: "/assets/destinations/Thumbnails/GrandIsland.webp",
  },
  {
    id: "gokarna-murdeshwar-day",
    href: "/destinations/day-trips/gokarna-murdeshwar-tour",
    imageUrl: "/assets/destinations/Thumbnails/Gokarna.webp",
  },
  {
    id: "dandeli-elephant-tiger-day",
    href: "/destinations/day-trips/dandeli-elephant-tiger-day",
    imageUrl: "/assets/destinations/Thumbnails/Dandeli.webp",
  },

  /* ================= SHORT STAYS ================= */

  {
    id: "goa-serai-cabo-2n3d",
    href: "/destinations/domestic-trips/goa-serai-cabo-retreat",
    imageUrl: "/assets/destinations/Thumbnails/SeraiCabo.webp",
  },
  {
    id: "hampi-badami-1n2d",
    href: "/destinations/domestic-trips/hampi-badami-tour",
    imageUrl: "/assets/destinations/Thumbnails/Hampi.webp",
  },
  {
    id: "mysore-ooty-3n4d",
    href: "/destinations/domestic-trips/mysore-ooty-tour",
    imageUrl: "/assets/destinations/Thumbnails/Ooty.webp",
  },
  {
    id: "mumbai-1n2d",
    href: "/destinations/domestic-trips/mumbai-city-tour",
    imageUrl: "/assets/destinations/Thumbnails/Mumbai.webp",
  },
  {
    id: "ellora-ajanta-2n3d",
    href: "/destinations/domestic-trips/ellora-ajanta-caves-tour",
    imageUrl: "/assets/destinations/Thumbnails/Ellora.webp",
  },
  {
    id: "taj-mahal-1n2d",
    href: "/destinations/domestic-trips/taj-mahal-tour",
    imageUrl: "/assets/destinations/Thumbnails/TajMahal.webp",
  },

  /* ================= MULTI-DAY DOMESTIC ================= */

  {
    id: "kerala-4n5d",
    href: "/itinerary/domestic-trips/kerala-backwaters-hills",
    imageUrl: "/assets/destinations/Thumbnails/Kerala.webp",
  },
  {
    id: "golden-triangle-3n4d",
    href: "/itinerary/domestic-trips/golden-triangle-tour",
    imageUrl: "/assets/destinations/Thumbnails/GoldenTriangle.webp",
  },
  {
    id: "udaipur-jodhpur-4n5d",
    href: "/itinerary/domestic-trips/udaipur-jodhpur-tour",
    imageUrl: "/assets/destinations/Thumbnails/Udaipur.webp",
  },
  {
    id: "varanasi-spiritual-3n4d",
    href: "/itinerary/domestic-trips/varanasi-spiritual-tour",
    imageUrl: "/assets/destinations/Thumbnails/Varanasi.webp",
  },
  {
    id: "mathura-vrindavan-2n3d",
    href: "/itinerary/domestic-trips/mathura-vrindavan-tour",
    imageUrl: "/assets/destinations/Thumbnails/Mathura.webp",
  },

  /* ================= INTERNATIONAL ================= */

  {
    id: "andaman-islands-5n6d",
    href: "/itinerary/international-trips/andaman-islands-tour",
    imageUrl: "/assets/destinations/Thumbnails/Andaman.webp",
  },
  {
    id: "maldives-luxury-4n5d",
    href: "/itinerary/international-trips/maldives-luxury-tour",
    imageUrl: "/assets/destinations/Thumbnails/Maldives.webp",
  },
  {
    id: "sri-lanka-6n7d",
    href: "/itinerary/international-trips/sri-lanka-tour",
    imageUrl: "/assets/destinations/Thumbnails/SriLanka.webp",
  },
  {
    id: "bhutan-5n6d",
    href: "/itinerary/international-trips/bhutan-tour",
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
    <section className="relative py-20 bg-gradient-to-br from-[#f7f8fb] to-[#e6ebf1]">
      <div className="max-w-7xl mx-auto px-4">
        {/* =======================
            TITLE
        ======================== */}
        <div className="text-center md:text-left mb-12">
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
        </div>

        {/* =======================
            MOBILE – CAROUSEL
        ======================== */}
        <div className="md:hidden mb-14">
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
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
        <div className="hidden md:grid grid-cols-4 gap-6 mb-16">
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
