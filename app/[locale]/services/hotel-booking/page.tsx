import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import HomeForm from "@/app/[locale]/(home)/HomeForm";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
// import { FAQSection } from "@/components/faq-section";

/* ---------- METADATA ---------- */
export const metadata: Metadata = {
  title: "Hotel Booking Services | Global Tourist Centre",
  description:
    "Find your perfect stay with Global Tourist Centre. Book domestic and international hotels with exclusive rates, expert support, and flexible options.",
};

/* ---------- PAGE ---------- */
export default function HotelBookingPage() {
  return (
    <main>
      {/* HERO */}
      <HeroSection
        title="Hotel Booking Services"
        subtitle="Find your perfect stay with trusted hotel partners worldwide."
        backgroundQuery="luxury hotel room ocean view"
      />

      {/* ABOUT / WHY BOOK */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://source.unsplash.com/900x700/?luxury-hotel-room"
              alt="Luxury hotel room"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl font-bold mb-4">
              Find Your Perfect Stay
            </h2>
            <p className="text-muted-foreground mb-6">
              We partner with hotels worldwide to offer the best accommodations
              at competitive rates. From budget-friendly stays to boutique
              hotels and luxury resorts, we match every preference and budget.
            </p>

            <ul className="space-y-3">
              {[
                "Access to exclusive rates and special offers",
                "Verified reviews and personal recommendations",
                "24/7 customer support for any issues",
                "Flexible cancellation policies",
                "Package deals with flights and activities",
                "Personalized service from hotel experts",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section className="py-16 bg-muted/40">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl font-bold">
              Hotel Booking Request
            </h2>
            <p className="text-muted-foreground mt-2">
              Fill out this form and we’ll find the perfect hotel for your stay.
            </p>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-6">
              {/* Reusing existing global form */}
              <HomeForm />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQs */}
      {/* FAQs */}
      {/* <FAQSection
        title="Hotel Booking FAQs"
        subtitle="Common questions about our hotel booking services."
        items={[
          {
            question:
              "Do you offer both domestic and international hotel bookings?",
            answer:
              "Yes. We partner with hotels worldwide and offer both domestic and international stays across all categories.",
          },
          {
            question: "Can you book hotels as part of a full tour package?",
            answer:
              "Absolutely. Hotels can be booked standalone or bundled with flights, transfers, and sightseeing.",
          },
          {
            question: "Can I modify or cancel my hotel booking?",
            answer:
              "Cancellation and modification policies depend on the hotel. Most bookings allow free changes up to a specific date.",
          },
          {
            question:
              "Can I book multiple hotels in different cities under one itinerary?",
            answer:
              "Yes. We can manage multi-city hotel bookings seamlessly under a single travel plan.",
          },
        ]}
      /> */}
    </main>
  );
}
