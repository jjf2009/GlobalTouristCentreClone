"use client";

import type React from "react";

import { useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Clock,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/context";

// Signature Experiences Data
export const signatureExperiences = [
  {
    id: 1,
    title: "All Goa in one day",
    imageUrl: "/destinations/Thumbnails/Goa3.webp",
    duration: "Full Day Tour",
    highlight: "UNESCO ",
    price: "$70",
    description:
      "Complete South Goa experience featuring UNESCO heritage sites in Old Goa, ancient temples, dolphin spotting, pristine beaches, and sunset at Cabo de Rama Fort with Mandovi River dinner cruise..",
    link: "https://globaltouristcentre.com/itinerary/day-trips/South-Goa-1-Day-Cultural-and-Beach-Tour-package",
    popular: false,
  },
  {
    id: 2,
    title: "Palolem, Cola – Dolphin Spotting",
    imageUrl: "/destinations/Thumbnails/Palolem.webp",
    duration: "Full Day Tour",
    highlight: "Dolphin Watching",
    price: "$70",
    description:
      "Experience dolphin watching in the Arabian Sea and explore the pristine beaches of Palolem and Cola.",
    link: "https://globaltouristcentre.com/itinerary/day-trips/South-Goa-1-Day-Trip-package",
    popular: true,
  },
  {
    id: 3,
    title: "Mumbai – City of Lights",
    imageUrl: "/destinations/Thumbnails/mumbai.webp",
    duration: "Full Day Tour",
    highlight: "City Tour",
    price: "$360",
    description:
      "Full day Mumbai tour from Goa including airfare, Gateway of India, Taj Mahal Palace, Marine Drive, and cultural sites.",
    link: "https://globaltouristcentre.com/itinerary/day-trips/Mumbai-day-trip-package",
    popular: true,
  },
  {
    id: 4,
    title: "Taj Mahal Trip",
    imageUrl: "/destinations/Thumbnails/agra.webp",
    duration: "1 Night / 2 Days",
    highlight: "World Wonder",
    price: "$300",
    description:
      "Visit the iconic Taj Mahal, one of the Seven Wonders of the World, with guided tours and cultural experiences.",
    link: "https://globaltouristcentre.com/itinerary/domestic-trips/Delhi-Agra-1N-2D-Trip-Package",
    popular: true,
  },
  {
    id: 5,
    title: "Hampi & Badami Tour",
    imageUrl: "/destinations/Thumbnails/Hampi.webp",
    duration: "1 Night / 2 Days",
    highlight: "UNESCO Heritage",
    price: "$170",
    description:
      "Explore UNESCO World Heritage Sites, ancient temples, and Karnataka's heritage from Goa.",
    link: "https://globaltouristcentre.com/itinerary/domestic-trips/Hampi-1N-2D-Trip-Package",
    popular: false,
  },
];


const Signature = () => {
     const { t } = useI18n()
      const experiencesRef = useRef<HTMLDivElement>(null);
      const collectionsRef = useRef<HTMLDivElement>(null);

    
    
      const scrollExperiences = (direction: "left" | "right") => {
        if (experiencesRef.current) {
          const scrollAmount = direction === "left" ? -300 : 300;
          experiencesRef.current.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
        }
      };
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
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-amber-50 to-white"
      aria-labelledby="experiences-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2
            id="experiences-heading"
            className="relative font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 pb-3"
          >
            {t.experiences.title}

            <span
              aria-hidden="true"
              className="absolute left-1/2 bottom-0 h-[3px] w-20 -translate-x-1/2 rounded-full
                bg-gradient-to-r from-[#ff6b6b] via-[#f8d56b] to-[#0d9488]"
            />
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base text-pretty">
            {t.experiences.subtitle}
          </p>
        </div>

        {/* Mobile: Column Layout */}
        <div className="flex flex-col gap-6 sm:hidden">
          {signatureExperiences.map((exp) => (
            <div key={exp.id} role="listitem">
              <div
                className="
                    relative h-[320px] rounded-[15px] overflow-hidden
                    bg-white shadow-lg
                    transition-all duration-500 ease-out
                    active:-translate-y-2.5 active:shadow-2xl
                    group cursor-pointer
                  "
              >
                {/* Image */}
                <img
                  src={exp.imageUrl}
                  alt={`${exp.title} travel destination`}
                  className="
                      w-full h-full object-cover
                      transition-transform duration-700 ease-out
                      group-active:scale-110
                    "
                />

                {/* Gradient overlay */}
                <div
                  aria-hidden="true"
                  className="
                      absolute inset-0 z-10
                      bg-gradient-to-t
                      from-black/80 via-black/40 to-transparent
                    "
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-5 z-20 text-white">
                  {/* Title */}
                  <h3 className="font-serif text-[1.15rem] leading-tight mb-1">
                    {exp.title}
                  </h3>

                  {/* Details */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.75rem] opacity-90 mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {exp.duration}
                    </span>

                    {exp.highlight && (
                      <span className="flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        {exp.highlight}
                      </span>
                    )}

                    <span className="flex items-center gap-1 bg-white/20 px-2 py-[2px] rounded-full text-[0.8rem] border border-white/30">
                      {exp.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-white/90 text-[0.8rem] leading-snug line-clamp-2 mb-3">
                    {exp.description}
                  </p>

                  {/* Button */}
                  <a
                    href={exp.link}
                    className="
                        inline-flex items-center gap-2
                        px-4 py-2 rounded-full
                        text-[0.85rem] font-semibold
                        bg-white/20 backdrop-blur-md
                        border border-white/30
                        transition-all duration-300
                        active:bg-white active:text-slate-900
                        active:translate-x-1
                      "
                    aria-label={`Explore ${exp.title}`}
                  >
                    {t.experiences.explore}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop/Tablet: Carousel */}
        <div className="relative hidden sm:block">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scrollExperiences("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 focus:bg-gray-50"
            aria-label="Previous experiences"
          >
            <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          </Button>

          <div
            ref={experiencesRef}
            className="
                flex gap-6 sm:gap-8
                overflow-x-auto scrollbar-hide
                snap-x snap-mandatory
                pb-6
                px-6 lg:px-8
              "
            role="list"
            aria-label="Signature travel experiences"
          >
            {signatureExperiences.map((exp) => (
              <div
                key={exp.id}
                className="flex-shrink-0 w-[300px] lg:w-[340px] snap-start"
                role="listitem"
              >
                <div
                  className="
                      relative h-[320px] rounded-[15px] overflow-hidden
                      bg-white shadow-lg
                      transition-all duration-500 ease-out
                      hover:-translate-y-2.5 hover:shadow-2xl
                      focus:-translate-y-2.5 focus:shadow-2xl
                      group cursor-pointer
                    "
                >
                  {/* Image */}
                  <img
                    src={exp.imageUrl}
                    alt={`${exp.title} travel destination`}
                    className="
                        w-full h-full object-cover
                        transition-transform duration-700 ease-out
                        group-hover:scale-110
                        group-active:scale-110
                      "
                  />

                  {/* Gradient overlay */}
                  <div
                    aria-hidden="true"
                    className="
                        absolute inset-0 z-10
                        bg-gradient-to-t
                        from-black/80 via-black/40 to-transparent
                      "
                  />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 w-full p-5 z-20 text-white">
                    {/* Title */}
                    <h3 className="font-serif text-[1.15rem] sm:text-[1.3rem] leading-tight mb-1">
                      {exp.title}
                    </h3>

                    {/* Details */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.75rem] opacity-90 mb-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {exp.duration}
                      </span>

                      {exp.highlight && (
                        <span className="flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5" />
                          {exp.highlight}
                        </span>
                      )}

                      <span className="flex items-center gap-1 bg-white/20 px-2 py-[2px] rounded-full text-[0.8rem] border border-white/30">
                        {exp.price}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-white/90 text-[0.8rem] leading-snug line-clamp-2 mb-3">
                      {exp.description}
                    </p>

                    {/* Button */}
                    <a
                      href={exp.link}
                      className="
                          inline-flex items-center gap-2
                          px-4 py-2 rounded-full
                          text-[0.85rem] font-semibold
                          bg-white/20 backdrop-blur-md
                          border border-white/30
                          transition-all duration-300
                          hover:bg-white hover:text-slate-900
                          hover:translate-x-1
                          focus:bg-white focus:text-slate-900
                          focus:translate-x-1
                        "
                      aria-label={`Explore ${exp.title}`}
                    >
                      {t.experiences.explore}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => scrollExperiences("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 active:bg-gray-50"
            aria-label="Next experiences"
          >
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Signature;
