"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n/context";

const Testimonials = () => {
  const { t } = useI18n();

  const testimonials = t.testimonials.items;

  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonialIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  if (!testimonials || testimonials.length === 0) return null;

  const active = testimonials[activeTestimonialIndex];

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-slate-50"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2
            id="testimonials-heading"
            className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4"
          >
            {t.testimonials.title}
            <span
              aria-hidden="true"
              className="absolute left-1/2 bottom-0 h-[3px] w-20 -translate-x-1/2 rounded-full
              bg-gradient-to-r from-[#ff6b6b] via-[#f8d56b] to-[#0d9488]"
            />
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base text-pretty">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <div className="flex items-center gap-4">
            {/* Prev */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="hidden sm:flex rounded-full bg-transparent"
              aria-label={t.testimonials.prev}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Card */}
            <Card className="flex-1 p-6 sm:p-8 lg:p-10 text-center">
              <CardContent className="p-0">
                {/* Rating */}
                <div
                  className="flex justify-center gap-1 mb-4"
                  aria-label={`${active.rating} out of 5 stars`}
                >
                  {[...Array(active.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>

                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/20 mx-auto mb-4" />

                {/* Text */}
                <blockquote className="text-base sm:text-lg italic mb-6 text-pretty">
                  “{active.text}”
                </blockquote>

                {/* Author */}
                <cite className="not-italic">
                  <span className="font-semibold block">{active.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {active.location}
                  </span>
                </cite>
              </CardContent>
            </Card>

            {/* Next */}
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="hidden sm:flex rounded-full bg-transparent"
              aria-label={t.testimonials.next}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Mobile Controls */}
          <div className="flex justify-center gap-4 mt-4 sm:hidden">
            <Button variant="outline" size="icon" onClick={prevTestimonial}>
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextTestimonial}>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Pagination Dots */}
          <div
            className="flex justify-center gap-2 mt-6"
            role="tablist"
            aria-label={t.testimonials.pagination}
          >
            {testimonials.map((_, index) => {
              const isActive = index === activeTestimonialIndex;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTestimonialIndex(index)}
                  role="tab"
                  aria-selected={isActive}
                  className={`rounded-full transition-all
                    h-1.5 w-1.5 sm:h-2.5 sm:w-2.5
                    ${isActive ? "bg-primary sm:w-6" : "bg-gray-300"}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
