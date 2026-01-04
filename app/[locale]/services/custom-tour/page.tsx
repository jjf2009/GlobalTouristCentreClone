import type { Metadata } from "next";

import { HeroSection } from "@/components/hero-section";
import HomeForm from "@/app/[locale]/(home)/HomeForm";

/* -------------------------------------------------- */
/* STATIC PARAMS (required for output: export) */
/* -------------------------------------------------- */
export function generateStaticParams() {
  return [{ locale: "en" }];
}

/* -------------------------------------------------- */
/* METADATA */
/* -------------------------------------------------- */
export const metadata: Metadata = {
  title: "Customized Tour Packages | Global Tourist Centre",
  description:
    "Tailor-made travel experiences designed around your interests, budget, and travel style. Create your dream vacation with Global Tourist Centre.",
};

/* -------------------------------------------------- */
/* PAGE */
/* -------------------------------------------------- */
export default function CustomTourServicePage() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <HeroSection
        title="Customized Tour Packages"
        backgroundQuery="mountain trekking travel nature"
      />

      {/* ================= ABOUT / WHY CUSTOM ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-xl overflow-hidden">
            <img
              src="https://source.unsplash.com/900x600/?travel,hiking,nature"
              alt="Customized travel experience"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl font-bold mb-4">
              Your Journey, Your Way
            </h2>

            <p className="text-muted-foreground mb-6">
              We believe every traveler is unique, and your vacation should
              reflect your personal style. Our customized tour packages are
              designed around your interests, budget, and travel preferences.
              Whether you're looking for adventure, relaxation, culture, or a
              mix of everything, we’ll create an itinerary that’s perfect for
              you.
            </p>

            <h3 className="font-semibold mb-3">Why Choose Customized Tours:</h3>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✔ Tailored to your specific interests and pace</li>
              <li>✔ Flexible dates and duration</li>
              <li>✔ Choice of accommodations that match your style</li>
              <li>✔ Personalized activities and experiences</li>
              <li>✔ Local expert guides for authentic experiences</li>
              <li>✔ 24/7 support during your trip</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CUSTOM FORM ================= */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-4xl mx-auto px-4 text-center mb-10">
          <h2 className="font-serif text-3xl font-bold mb-2">
            Create Your Dream Vacation
          </h2>
          <p className="text-muted-foreground">
            Tell us about your travel preferences and we’ll design a
            personalized itinerary just for you.
          </p>
        </div>

        {/* Reusing existing HomeForm */}
        <HomeForm />
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold mb-6">
            Custom Tour FAQs
          </h2>

          <div className="space-y-4">
            <details className="rounded-lg bg-muted/40 p-4">
              <summary className="font-medium cursor-pointer">
                Do you design tours for families, groups, or solo travelers?
              </summary>
              <p className="mt-2 text-muted-foreground text-sm">
                Yes. We create itineraries for families, groups, couples, and
                solo travelers. Each trip is crafted based on your travel style
                and preferences.
              </p>
            </details>

            <details className="rounded-lg bg-muted/40 p-4">
              <summary className="font-medium cursor-pointer">
                What’s included in a customized package?
              </summary>
              <p className="mt-2 text-muted-foreground text-sm">
                Your package includes a personalized itinerary, accommodation
                options, transfers, activities, and local assistance — all
                tailored to you.
              </p>
            </details>

            <details className="rounded-lg bg-muted/40 p-4">
              <summary className="font-medium cursor-pointer">
                How long does it take to design a personalized trip?
              </summary>
              <p className="mt-2 text-muted-foreground text-sm">
                Our travel expert usually contacts you within 24 hours. The
                itinerary is refined collaboratively until it perfectly matches
                your expectations.
              </p>
            </details>

            <details className="rounded-lg bg-muted/40 p-4">
              <summary className="font-medium cursor-pointer">
                Can I modify a standard package instead of creating a new one?
              </summary>
              <p className="mt-2 text-muted-foreground text-sm">
                Absolutely. You can customize any existing package to better
                suit your needs.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
