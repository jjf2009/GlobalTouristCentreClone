"use client";

import type React from "react";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/context";
import TourCard from "@/components/TourCard";

export const travelCollections = [
  {
    id: 1,
    category: "domestic",
    imageUrl: "/destinations/Thumbnails/South-Goa-Cultural.webp",
    title: "South Goa – Cultural Goa",
    price: "$80",
    duration: "Full Day Tour",
    description:
      "Full-day cultural tour exploring Old Goa churches, Hindu temples, Miramar Beach, Dona Paula, and Panjim Market.",
    tags: ["Cultural", "UNESCO", "Heritage"],
    link: "https://globaltouristcentre.com/itinerary/day-trips/South-Goa-1-Day-Cultural-and-Beach-Tour-package",
  },
  {
    id: 2,
    category: "luxury",
    imageUrl: "/destinations/Thumbnails/Yacht-goa.webp",
    title: "Luxury Yacht Tour Goa",
    price: "Premium",
    duration: "6 Hours",
    description:
      "Premium 6-hour luxury yacht experience with infinity pool, live DJ, gourmet dinner, and sunset cruise in Goa.",
    tags: ["Luxury", "Yacht", "Premium"],
    link: "https://globaltouristcentre.com/itinerary/day-trips/luxury-yacht-tour-goa",
  },
  {
    id: 3,
    category: "luxury",
    imageUrl: "/destinations/Thumbnails/Cabo-Serai.webp",
    title: "Goa Luxury Serai Cabo",
    price: "$370",
    duration: "Custom Stay",
    description:
      "Experience ultimate luxury at Serai Cabo with private villas, world-class amenities, and personalized services.",
    tags: ["Luxury", "Resort", "5-Star"],
    link: "https://globaltouristcentre.com/itinerary/domestic-trips/Cabo-Serai-2N-3D-Luxury-Getaway",
  },
  {
    id: 4,
    category: "domestic",
    imageUrl: "/destinations/Thumbnails/Andaman.webp",
    title: "Andaman Islands",
    price: "$970",
    duration: "5–7 Days",
    description:
      "Discover pristine beaches, crystal waters, and exotic marine life in India's tropical paradise.",
    tags: ["Islands", "Beaches", "Marine Life"],
    link: "https://globaltouristcentre.com/itinerary/domestic-trips/andaman-tour-for-goa",
  },
];

const CuratedTravel = () => {
      const { t } = useI18n()
      const experiencesRef = useRef<HTMLDivElement>(null)

      const formRef = useRef<HTMLDivElement>(null);
    
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [showSuccess, setShowSuccess] = useState(false);
      const collectionsRef = useRef<HTMLDivElement>(null);
    
    
      const scrollExperiences = (direction: "left" | "right") => {
        if (experiencesRef.current) {
          const scrollAmount = direction === "left" ? -300 : 300
          experiencesRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
        }
      }
    const scrollCollections = (direction: "left" | "right") => {
      if (collectionsRef.current) {
        const scrollAmount = 300;
        const newScrollLeft =
          collectionsRef.current.scrollLeft +
          (direction === "left" ? -scrollAmount : scrollAmount);
        collectionsRef.current.scrollTo({
          left: newScrollLeft,
          behavior: "smooth",
        });
      }
    };
  return (
    <section
      className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#111827] to-[#1f2937]"
      aria-labelledby="collections-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-100"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%230d9488' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2
            id="collections-heading"
            className="font-serif text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4"
          >
            {t.collections.title}
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base text-pretty">
            {t.collections.subtitle}
          </p>
        </div>

        {/* Mobile: Carousel with Swipe */}
        <div className="md:hidden">
          <div
            ref={collectionsRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
            role="list"
            aria-label="Travel package collections"
          >
            {travelCollections.map((tour) => (
              <div
                key={tour.id}
                className="flex-shrink-0 w-[85vw] max-w-[340px] snap-start"
                role="listitem"
              >
                <TourCard
                  imageUrl={tour.imageUrl}
                  title={tour.title}
                  price={tour.price}
                  duration={tour.duration}
                  description={tour.description}
                  features={tour.tags}
                  href={tour.link}
                  category={tour.category}
                />
              </div>
            ))}

            {/* View More/Less Card at the end */}
            <div className="flex-shrink-0 w-[85vw] max-w-[340px] snap-start">
              <div className="h-full min-h-[400px] rounded-2xl bg-gradient-to-br from-[#f8d56b]/20 to-[#0d9488]/20 backdrop-blur-sm border-2 border-white/20 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <ArrowRight className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-serif text-2xl text-white font-bold mb-3">
                  Discover More
                </h3>
                <p className="text-white/80 text-sm mb-6">
                  Explore our complete collection of amazing destinations
                </p>

                <Link href="https://globaltouristcentre.com/destinations">
                  <Button
                    size="lg"
                    className="rounded-full px-8 font-semibold bg-white text-slate-900 hover:bg-white/90  "
                  >
                    View All Destinations
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Swipe Indicator */}
          <div className="flex items-center justify-center gap-2 mt-4 text-white/60 text-sm">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            <span>Swipe to explore more</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>

        {/* Desktop: Grid - 4 columns, shows 8 cards */}
        <div className="hidden md:block">
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            role="list"
            aria-label="Travel package collections"
          >
            {travelCollections.map((tour) => (
              <div
                key={tour.id}
                className="flex-shrink-0 w-[85vw] max-w-[340px] snap-start"
                role="listitem"
              >
                <TourCard
                  imageUrl={tour.imageUrl}
                  title={tour.title}
                  price={tour.price}
                  duration={tour.duration}
                  description={tour.description}
                  features={tour.tags}
                  href={tour.link}
                  category={tour.category}
                />
              </div>
            ))}

            <div className="col-span-full mt-10 flex justify-center">
              <Link href="https://globaltouristcentre.com/destinations">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 font-semibold bg-transparent text-white border-white/30 hover:bg-white/10"
                >
                  View More Destinatbhions
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuratedTravel;
