import type { Metadata } from "next";

import { HeroSection } from "@/components/hero-section";
import { DestinationGrid } from "../../destinations/destination-grid";
import { DestinationCard } from "@/components/destination-card";
import HomeForm from "@/app/[locale]/(home)/HomeForm";

/* ------------------------------------------------------------------ */
/* STATIC PARAMS (required for output: "export") */
/* ------------------------------------------------------------------ */
export function generateStaticParams() {
  return [{ locale: "en" }];
}

/* ------------------------------------------------------------------ */
/* METADATA */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: "Domestic & International Tour Packages | Global Tourist Centre",
  description:
    "Explore curated domestic and international tour packages with Global Tourist Centre. Authentic experiences, seamless travel, and expert planning.",
};

/* ------------------------------------------------------------------ */
/* DATA IMPORTS */
/* ------------------------------------------------------------------ */
import {
  domesticTrips,
  internationalTrips,
} from "@/lib/data/destinations";

/* ------------------------------------------------------------------ */
/* PAGE */
/* ------------------------------------------------------------------ */
export default function DomesticInternationalTripsPage() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <HeroSection
        title="Domestic & International Tour Packages"
        backgroundQuery="airplane wing travel sky"
      />

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden">
            <img
              src="https://source.unsplash.com/800x600/?travel,journey"
              alt="Travel experiences"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="font-serif text-3xl font-bold mb-4">
              Explore the World With Us
            </h2>

            <p className="text-muted-foreground mb-6">
              Whether you're looking to explore the hidden gems of India or
              venture to exotic international destinations, we craft
              personalized itineraries that cater to your travel style and
              preferences. Our domestic and international tour packages are
              designed to offer authentic experiences, comfortable
              accommodations, and seamless logistics.
            </p>

            <h3 className="font-semibold mb-3">Why Choose Our Packages:</h3>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✔ Carefully curated itineraries with local experiences</li>
              <li>✔ Expert guides and 24/7 support during your trip</li>
              <li>✔ Competitive pricing with no hidden costs</li>
              <li>✔ Flexible customization options</li>
              <li>✔ Hand-picked accommodations and transportation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= DOMESTIC TRIPS ================= */}
      <section className="py-16 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold mb-2">Domestic Trips</h2>
          <p className="text-muted-foreground mb-8">
            Explore the diverse beauty of India with our handpicked domestic
            destinations.
          </p>

          <DestinationGrid items={domesticTrips.slice(0, 4)} />

          <div className="text-center mt-10">
            <a
              href="/en/destinations/domestic"
              className="inline-flex items-center rounded-full px-10 py-4
                         bg-[#f8d56b] text-black font-semibold
                         hover:bg-[#f8d56b]/90 transition"
            >
              View More Domestic Trips
            </a>
          </div>
        </div>
      </section>

      {/* ================= INTERNATIONAL TRIPS ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold mb-2">
            International Trips
          </h2>
          <p className="text-muted-foreground mb-8">
            Discover exotic destinations around the world with our international
            tour packages.
          </p>

          <DestinationGrid items={internationalTrips.slice(0, 4)} />

          <div className="text-center mt-10">
            <a
              href="/en/destinations/international"
              className="inline-flex items-center rounded-full px-10 py-4
                         bg-[#f8d56b] text-black font-semibold
                         hover:bg-[#f8d56b]/90 transition"
            >
              View More International Trips
            </a>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-16 bg-muted/40">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details className="rounded-lg bg-background p-4">
              <summary className="font-medium cursor-pointer">
                What documents do you need from me at the time of booking?
              </summary>
              <p className="mt-2 text-muted-foreground text-sm">
                A valid passport and government-issued ID. Additional documents
                may be required based on destination.
              </p>
            </details>

            <details className="rounded-lg bg-background p-4">
              <summary className="font-medium cursor-pointer">
                Do you offer visa assistance?
              </summary>
              <p className="mt-2 text-muted-foreground text-sm">
                Yes, we guide you through the entire visa documentation and
                application process.
              </p>
            </details>

            <details className="rounded-lg bg-background p-4">
              <summary className="font-medium cursor-pointer">
                What is your refund policy?
              </summary>
              <p className="mt-2 text-muted-foreground text-sm">
                Depending on the situation, refunds, rescheduling, or travel
                credits may be offered.
              </p>
            </details>

            <details className="rounded-lg bg-background p-4">
              <summary className="font-medium cursor-pointer">
                Should I arrive earlier for international flights?
              </summary>
              <p className="mt-2 text-muted-foreground text-sm">
                Yes, we recommend arriving 3–4 hours early for international
                flights.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ================= CONTACT / FORM ================= */}
      <HomeForm />
    </main>
  );
}
