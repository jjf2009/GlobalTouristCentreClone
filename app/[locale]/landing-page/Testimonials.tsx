"use client";

import type React from "react";

import { useState } from "react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,

} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n/context";

// Testimonials
const testimonials = [
  {
    id: 1,
    name: "Anshika Malik",
    location: "Kerala, 10 Days with family",
    rating: 5,
    text: "I recently went on a trip with my husband to Kerala for 7 days. Global Tourist Centre helped us plan the whole trip so well that we didn't face any problems at any point during our trip!",
    avatar: "woman smiling professional portrait",
  },
  {
    id: 2,
    name: "Vishal Yadav",
    location: "Dubai, 5 Days honeymoon",
    rating: 5,
    text: "Amazing experience! The team at Global Tourist Centre made our honeymoon absolutely perfect. Every detail was taken care of and we could just enjoy ourselves.",
    avatar: "man professional portrait smiling",
  },
  {
    id: 3,
    name: "Priya Sharma",
    location: "Goa, Weekend getaway",
    rating: 5,
    text: "Best travel agency ever! They arranged everything from flights to hotels to local tours. The attention to detail was impressive.",
    avatar: "indian woman smiling portrait",
  },
];

const Testimonials = () => {
      const { t } = useI18n()
      const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0)
      
        const nextTestimonial = () => {
          setActiveTestimonialIndex((prev) => (prev + 1) % testimonials.length)
        }
      
        const prevTestimonial = () => {
          setActiveTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
        }
      



  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-slate-50"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4">
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

        {/* Testimonials Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="shrink-0 rounded-full bg-transparent hidden sm:flex"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </Button>

            <Card className="flex-1 p-6 sm:p-8 lg:p-10 text-center">
              <CardContent className="p-0">
                {/* Star Rating */}
                <div
                  className="flex justify-center gap-1 mb-4"
                  aria-label={`5 out of 5 stars`}
                >
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-yellow-500"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Quote */}
                <Quote
                  className="w-10 h-10 text-primary/20 mx-auto mb-4"
                  aria-hidden="true"
                />

                <blockquote className="text-foreground text-base sm:text-lg italic mb-6 text-pretty">
                  "{testimonials[activeTestimonialIndex].text}"
                </blockquote>

                {/* Author */}
                <div className="flex flex-col items-center">
                  <cite className="not-italic">
                    <span className="font-semibold text-foreground block">
                      {testimonials[activeTestimonialIndex].name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {testimonials[activeTestimonialIndex].location}
                    </span>
                  </cite>
                </div>
              </CardContent>
            </Card>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="shrink-0 rounded-full bg-transparent hidden sm:flex"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </Button>
          </div>

          {/* Mobile navigation buttons */}
          <div className="flex justify-center gap-4 mt-4 sm:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Testimonial pagination dots */}
          <div
            className="flex justify-center gap-2 mt-6"
            role="tablist"
            aria-label="Testimonials pagination"
          >
            {testimonials.map((_, index) => {
              const isActive = index === activeTestimonialIndex;

              return (
                <button
                  key={index}
                  onClick={() => setActiveTestimonialIndex(index)}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`View testimonial ${index + 1}`}
                  className={`
              rounded-full transition-all
              h-1.5 w-1.5 sm:h-2.5 sm:w-2.5
              ${
                isActive ? "bg-primary sm:w-6" : "bg-gray-300 hover:bg-gray-400"
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

export default Testimonials;
