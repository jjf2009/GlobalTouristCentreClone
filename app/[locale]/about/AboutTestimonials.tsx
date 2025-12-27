"use client";

import { TestimonialCard } from "@/components/testimonial-card";
import { useI18n } from "@/lib/i18n/context";
import { reviews } from "./about";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { useRef, useState, useEffect } from "react";

export function AboutTestimonials() {
  const { t } = useI18n();

  const autoplayRef = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  );

  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Pagination state sync
  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 text-left">
        {/* Heading */}
        <div className="relative inline-block">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 pb-3">
            {t.testimonials.whatTravelersSay}
          </h1>
          <span
            aria-hidden="true"
            className="
              absolute left-0 bottom-0
              h-[3px] w-20 rounded-full
              bg-gradient-to-r from-[#ff6b6b] via-[#f8d56b] to-[#0d9488]
            "
          />
        </div>

        <p className="text-gray-600 text-lg mt-4 max-w-2xl">
          {t.testimonials.hearFromCustomers}
        </p>

        {/* Carousel */}
        <div className="mt-10">
          <Carousel
            setApi={setApi}
            plugins={[autoplayRef.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="relative"
          >
            <CarouselContent className="-ml-6">
              {reviews.map((review, index) => {
                const item = t.about.reviews[index];
                if (!item) return null;

                return (
                  <CarouselItem
                    key={index}
                    className="
                      pl-6
                      basis-[360px]
                      sm:basis-[380px]
                      lg:basis-[400px]
                    "
                  >
                    <TestimonialCard
                      name={item.name}
                      timeAgo={item.location}
                      text={item.text}
                      initials={item.name
                        .split(" ")
                        .map((n: string) => n[0])
                        .join("")}
                      rating={review.rating}
                      photoCount={review.photoCount}
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            {/* Arrows */}
            <CarouselPrevious className="hidden md:flex -left-8" />
            <CarouselNext className="hidden md:flex -right-8" />
          </Carousel>

          {/* Pagination Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`
                  h-2.5 w-2.5 rounded-full transition
                  ${
                    index === current
                      ? "bg-primary scale-110"
                      : "bg-muted hover:bg-muted-foreground/40"
                  }
                `}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
      {/* Google Reviews CTA */}
<div className="mt-10 flex justify-center">
  <a
    href="https://www.google.com/search?q=global+tourist+centre+&sca_esv=6e4820828e77e658&sxsrf=AE3TifMzCuUYMGVHNtkkUxvt_Pbz6z0AIw%3A1760979237374&ei=JWn2aO7PFvyPvr0PhaOkwQ0&ved=0ahUKEwiu9pnvnrOQAxX8h68BHYURKdgQ4dUDCBE&uact=5&oq=global+tourist+centre+&gs_lp=Egxnd3Mtd2l6LXNlcnAiFmdsb2JhbCB0b3VyaXN0IGNlbnRyZSAyBBAjGCcyBBAjGCcyBRAAGIAEMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5I1wxQ-gJY-ApwAXgAkAEAmAGsAaABxgiqAQMwLje4AQPIAQD4AQGYAgOgArkCwgIJEAAYsAMYCBgewgIOEAAYgAQYsAMYhgMYigXCAggQABiwAxjvBcICCxAAGLADGKIEGIkFwgICECbCAgsQABiABBiGAxiKBZgDAIgGAZAGCJIHAzEuMqAHokeyBwMwLjK4B7ECwgcFMi0yLjHIBxU&sclient=gws-wiz-serp#lrd=0x3bbfb5f661fd84d3:0x24fa4475c2ab159b,1,,,,"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex items-center gap-3
      rounded-full border border-gray-200
      px-6 py-3
      text-sm font-medium text-gray-700
      transition-all
      hover:border-[#f8d56b]
      hover:bg-[#f8d56b]/10
      hover:text-gray-900
    "
  >
    <img
      src="/assets/icons8-google-48.png"
      alt="Google Reviews"
      className="h-6 w-6"
    />
    <span>{t.testimonials.viewAllReviews ?? "View All Reviews on Google"}</span>
  </a>
</div>

    </section>
  );
}
