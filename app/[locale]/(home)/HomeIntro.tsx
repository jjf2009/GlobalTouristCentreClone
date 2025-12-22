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
  id:
    | "kashmir-5n6d"
    | "andaman-6n7d"
    | "dandeli-day"
    | "dubai-5n6d"
    | "sikkim-6n7d"
    | "thailand-7n8d"
    | "dudhsagar-day"
    | "bhutan-7n8d";
  href: string;
  imageUrl: string;
};

const travelCollections: TravelCollection[] = [
  {
    id: "kashmir-5n6d",
    href: "../itinerary/domestic-trips/Kashmir-5N6D-Trip",
    imageUrl: "../assets/destinations/Thumbnails/Kashmir.webp",
  },
  {
    id: "andaman-6n7d",
    href: "../itinerary/domestic-trips/andaman-tour-for-goa",
    imageUrl: "../assets/destinations/Thumbnails/Andaman.webp",
  },
  {
    id: "dandeli-day",
    href: "../itinerary/day-trips/Dandeli-Elephant-Safari-Day-Trip-package",
    imageUrl: "../assets/destinations/Dandeli/elephant-safari.webp",
  },
  {
    id: "dubai-5n6d",
    href: "../itinerary/International-trips/dubai-tour-package",
    imageUrl: "../assets/destinations/Thumbnails/Dubai.webp",
  },
  {
    id: "sikkim-6n7d",
    href: "../itinerary/domestic-trips/sikkim-tour-for-goa",
    imageUrl: "../assets/destinations/Thumbnails/Sikkim.webp",
  },
  {
    id: "thailand-7n8d",
    href: "../itinerary/International-trips/7N-8D-thailand-tour-package",
    imageUrl: "../assets/destinations/Thumbnails/Thailand2.webp",
  },
  {
    id: "dudhsagar-day",
    href: "../itinerary/day-trips/Dudhsagar-and-Spice-Plantation-Day-Trip-package",
    imageUrl: "../assets/destinations/Thumbnails/Dudhsagar.webp",
  },
  {
    id: "bhutan-7n8d",
    href: "../itinerary/International-trips/7n-8d-bhutan-tour-package",
    imageUrl: "../assets/destinations/Thumbnails/Bhutan.webp",
  },
];

/* ----------------------------------------
   COMPONENT
----------------------------------------- */

const HomeIntro = () => {
  const { t } = useI18n();
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#f7f8fb] to-[#e6ebf1]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* =======================
            TITLE (ALWAYS TOP)
        ======================== */}
        <div className="text-center md:text-left mb-12">
          <div className="relative inline-block">
            <h2 className="font-serif text-slate-900 text-3xl md:text-4xl font-bold mb-3">
              {t.home.title}
            </h2>

            {/* Gradient underline */}
            <span
              aria-hidden="true"
              className="
        absolute left-0 -bottom-1
        h-[4px] w-20 rounded-full
        bg-gradient-to-r from-[#ff6b6b] via-[#f8d56b] to-[#0d9488]
      "
            />
          </div>

          <p className="text-slate-600 max-w-2xl md:max-w-3xl mt-4">
            {t.home.mainsubtitle}
          </p>
        </div>

        {/* =======================
            MOBILE – CAROUSEL
        ======================== */}
        <div className="md:hidden mb-14">
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            role="list"
          >
            {travelCollections.map((tour) => {
              const content = t.home.items[tour.id];

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
                    href={tour.href}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* =======================
            DESKTOP – GRID
        ======================== */}
        <div className="hidden md:grid grid-cols-4 gap-6 mb-16" role="list">
          {travelCollections.map((tour) => {
            const content = t.home.items[tour.id];

            return (
              <HomeCard
                key={tour.id}
                imageUrl={tour.imageUrl}
                title={content.title}
                duration={content.duration}
                description={content.description}
                href={tour.href}
              />
            );
          })}
        </div>

        {/* =======================
            CTA (ALWAYS BOTTOM)
        ======================== */}
        <div className="flex justify-center">
          <Link href="https://globaltouristcentre.com/destinations">
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
