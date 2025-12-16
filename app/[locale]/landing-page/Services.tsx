"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Hotel,
  FileText,
  Plane,
  ArrowRight,
  Users,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";

import { useI18n } from "@/lib/i18n/context";


// Premium Services
const premiumServices = [
  {
    id: 1,
    title: "Customized Holidays",
    description:
      "Bespoke travel plans that fulfill your wildest dreams. Your journey, your way.",
    icon: Sparkles,
    link: "https://globaltouristcentre.com/service/hotel-booking",
  },
  {
    id: 2,
    title: "Luxury Accommodation",
    description:
      "Access to premium hotels, resorts, and unique stays with exclusive benefits and best rates guaranteed.",
    icon: Hotel,
    link: "https://globaltouristcentre.com/service/hotel-booking",
  },
  {
    id: 3,
    title: "Group Tours",
    description:
      "Join like-minded travelers on expertly curated group adventures.",
    icon: Users,
    link: "https://globaltouristcentre.com/service/hotel-booking",
  },
  {
    id: 4,
    title: "Visa Assistance",
    description: "Hassle-free visa documentation and processing services.",
    icon: FileText,
    link: "https://globaltouristcentre.com/service/hotel-booking",
  },
  {
    id: 5,
    title: "Flight Bookings",
    description:
      "Competitive airfares on domestic and international routes with flexible booking options",
    icon: Plane,
    link: "https://globaltouristcentre.com/service/hotel-booking",
  },
];

const Services = () => {

   const { t } = useI18n()
    const [activeServiceIndex, setActiveServiceIndex] = useState(0)

    useEffect(() => {
    const interval = setInterval(() => {
      setActiveServiceIndex((prev) =>
        prev === premiumServices.length - 1 ? 0 : prev + 1
      )
    }, 5000) // 5 seconds
  
    return () => clearInterval(interval)
  }, [])
  
  

    const nextService = () => {
      setActiveServiceIndex((prev) => (prev + 1) % premiumServices.length)
    }
  
    const prevService = () => {
      setActiveServiceIndex((prev) => (prev - 1 + premiumServices.length) % premiumServices.length)
    }

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-white"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2
            id="services-heading"
            className="relative font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 pb-3"
          >
            {t.premiumServices.title}
            <span
              aria-hidden="true"
              className="absolute left-1/2 bottom-0 h-[3px] w-20 -translate-x-1/2 rounded-full
                   bg-gradient-to-r from-[#ff6b6b] via-[#f8d56b] to-[#0d9488]"
            />
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base text-pretty">
            {t.premiumServices.subtitle}
          </p>
        </div>
        {/* Services Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevService}
              className="shrink-0 rounded-full bg-white shadow-md hover:shadow-lg focus:shadow-lg hidden sm:flex"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </Button>
            <Card
              key={activeServiceIndex}
              className="
                      flex-1 max-w-[300px] mx-auto
                      w-full
                      h-[480px] sm:h-[430px]
                      flex flex-col items-center text-center
                      p-6 sm:p-8
                      bg-white
                      rounded-2xl
                      shadow-lg
                      transition-all duration-500 ease-out
                      hover:-translate-y-2 hover:shadow-2xl
                      focus:-translate-y-2 focus:shadow-2xl
                    "
            >
              <CardContent className="p-0 flex flex-col h-full w-full justify-between">
                {/* Icon - Fixed positioning */}
                <div className="flex justify-center mb-5">
                  <div
                    className="
                            w-16 h-16 sm:w-20 sm:h-20
                            rounded-full
                            flex items-center justify-center
                            text-white
                            bg-gradient-to-br from-[#0d9488] to-[#14b8a6]
                            shadow-[0_8px_20px_rgba(13,148,136,0.25)]
                          "
                  >
                    {(() => {
                      const IconComponent =
                        premiumServices[activeServiceIndex].icon;
                      return (
                        <IconComponent
                          className="w-8 h-8 sm:w-9 sm:h-9"
                          aria-hidden="true"
                        />
                      );
                    })()}
                  </div>
                </div>
                {/* Title - Fixed height */}
                <h3
                  className="
                          font-serif text-xl sm:text-[1.4rem]
                          font-bold text-slate-900
                          leading-tight
                          mb-4
                          h-[60px] sm:h-[70px]
                          flex items-center justify-center
                          px-2
                        "
                >
                  {premiumServices[activeServiceIndex].title}
                </h3>
                {/* Description - Fixed height with scrollable overflow */}
                <div className="flex-1 mb-6 overflow-y-auto px-2">
                  <p
                    className="
                            text-slate-600
                            text-sm sm:text-base
                            leading-relaxed
                          "
                  >
                    {premiumServices[activeServiceIndex].description}
                  </p>
                </div>
                {/* CTA - Fixed at bottom */}
                <Button
                  className="
                          w-full
                          bg-gradient-to-r from-[#0d9488] to-[#14b8a6]
                          hover:from-[#f8d56b] hover:to-[#facc15]
                          hover:text-slate-900
                          focus:from-[#f8d56b] focus:to-[#facc15]
                          focus:text-slate-900
                          text-white
                          font-semibold
                          py-2.5 sm:py-3 rounded-lg
                          transition-all duration-300
                          hover:-translate-y-1
                          focus:-translate-y-1
                          flex items-center justify-center gap-2
                        "
                  aria-label={`Learn more about ${premiumServices[activeServiceIndex].title}`}
                  asChild
                >
                  <Link
                    href={premiumServices[activeServiceIndex].link}
                    className="flex items-center gap-2"
                  >
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Button
              variant="outline"
              size="icon"
              onClick={nextService}
              className="shrink-0 rounded-full bg-white shadow-md hover:shadow-lg focus:shadow-lg hidden sm:flex"
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </Button>
          </div>
          {/* Mobile navigation buttons */}
          <div className="flex justify-center gap-4 mt-4 sm:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={prevService}
              className="rounded-full bg-white shadow-md"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextService}
              className="rounded-full bg-white shadow-md"
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
          {/* Service pagination dots */}
          <div
            className="flex justify-center gap-2 mt-6"
            role="tablist"
            aria-label="Services pagination"
          >
            {premiumServices.map((_, index) => {
              const isActive = index === activeServiceIndex;

              return (
                <button
                  key={index}
                  onClick={() => setActiveServiceIndex(index)}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`View service ${index + 1}`}
                  className={`
                          rounded-full transition-all
                          h-1.5 w-1.5 sm:h-2.5 sm:w-2.5
                          ${
                            isActive
                              ? "bg-primary sm:w-6"
                              : "bg-gray-300 hover:bg-gray-400"
                          }
                        `}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
