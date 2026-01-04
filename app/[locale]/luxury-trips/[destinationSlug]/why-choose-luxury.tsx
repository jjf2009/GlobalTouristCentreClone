"use client";

import { useI18n } from "@/lib/i18n/context";
import { Ship, Leaf, UtensilsCrossed, Gem } from "lucide-react";
import { LuxuryFeatureCard } from "./luxury-feature-card";

export function WhyChooseLuxury() {
  const { t } = useI18n();

  // These mapping keys assume you will add these specific strings
  // to your luxury i18n object or use the descriptions provided in the prompt images
  const features = [
    {
      icon: Ship,
      title: "Luxury Houseboats",
      description:
        "Experience authentic Kerala hospitality with stays in premium houseboats, featuring private decks and personalized service.",
    },
    {
      icon: Leaf,
      title: "Ayurveda & Wellness",
      description:
        "Rejuvenate with authentic ayurvedic treatments, yoga sessions, and wellness programs at luxury resorts.",
    },
    {
      icon: UtensilsCrossed,
      title: "Gourmet Dining",
      description:
        "Savor exclusive dining experiences including traditional Kerala sadya, seafood feasts, and chef's table experiences.",
    },
    {
      icon: Gem,
      title: "Exclusive Access",
      description:
        "Gain privileged access to private backwater routes, spice plantation tours, and curated artisan visits.",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#001f3f] mb-4">
            Why Choose Our Kerala Luxury Tours
          </h2>
          {/* Decorative Underline matching the image */}
          <div className="flex justify-center items-center gap-0">
            <div className="w-12 h-[2px] bg-[#d4af37]" />
            <div className="w-12 h-[2px] bg-[#10b981]" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <LuxuryFeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
