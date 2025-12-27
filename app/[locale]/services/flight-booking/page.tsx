import type { Metadata } from "next";

import { HeroSection } from "@/components/hero-section";
import HomeForm from "@/app/[locale]/(home)/HomeForm";

/* -------------------------------------------------- */
/* STATIC PARAMS (required for static export) */
/* -------------------------------------------------- */
export function generateStaticParams() {
  return [{ locale: "en" }];
}

/* -------------------------------------------------- */
/* METADATA */
/* -------------------------------------------------- */
export const metadata: Metadata = {
  title: "Flight Booking Services | Global Tourist Centre",
  description:
    "Book domestic and international flights at competitive rates with expert assistance. One-way, round-trip, and multi-city flight bookings made easy.",
};

/* -------------------------------------------------- */
/* PAGE */
/* -------------------------------------------------- */
export default function FlightBookingPage() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <HeroSection
        title="Flight Booking Services"
        backgroundQuery="airport departure board flights"
      />

      {/* ================= ABOUT / SERVICES ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-xl overflow-hidden">
            <img
              src="https://source.unsplash.com/900x600/?airport,departure"
              alt="Flight booking assistance"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl font-bold mb-4">
              Fly With Ease
            </h2>

            <p className="text-muted-foreground mb-6">
              As an authorized flight booking agent, we provide access to
              competitive airfares across all major airlines. Whether you need
              domestic flights within India or international connections
              worldwide, our experienced team will find you the best routes and
              prices. We handle everything from simple one-way tickets to
              complex multi-city itineraries.
            </p>

            <h3 className="font-semibold mb-3">Our Flight Services Include:</h3>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✔ Domestic and international flight bookings</li>
              <li>✔ Competitive fares, often better than online prices</li>
              <li>✔ Multi-city and round-the-world itineraries</li>
              <li>✔ Group flight bookings with special discounts</li>
              <li>✔ Last-minute flight arrangements</li>
              <li>✔ Seat selection and special meal requests</li>
              <li>✔ Flight changes and cancellations assistance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= BOOKING FORM ================= */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-4xl mx-auto px-4 text-center mb-10">
          <h2 className="font-serif text-3xl font-bold mb-2">
            Flight Booking Request
          </h2>
          <p className="text-muted-foreground">
            Provide your travel details and we’ll find the best flight options
            for you.
          </p>
        </div>

        {/* Reuse existing global form */}
        <HomeForm />
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold mb-6">
            Flight Booking FAQs
          </h2>

          <div className="space-y-4">
            <details className="rounded-lg bg-muted/40 p-4">
              <summary className="font-medium cursor-pointer">
                Can you add infant/child seat, pets, or sports equipment to my
                booking?
              </summary>
              <p className="mt-2 text-muted-foreground text-sm">
                We guide you on adding special services like infant seats,
                sports equipment, or pets, based on airline policies.
              </p>
            </details>

            <details className="rounded-lg bg-muted/40 p-4">
              <summary className="font-medium cursor-pointer">
                Can you arrange airport pick-up or drop-off with flights?
              </summary>
              <p className="mt-2 text-muted-foreground text-sm">
                Yes. Airport transfers can be arranged as part of your overall
                itinerary.
              </p>
            </details>

            <details className="rounded-lg bg-muted/40 p-4">
              <summary className="font-medium cursor-pointer">
                What is the cancellation, change, or refund policy?
              </summary>
              <p className="mt-2 text-muted-foreground text-sm">
                Policies depend on airline fare rules. We help you understand
                options and assist with changes or cancellations.
              </p>
            </details>

            <details className="rounded-lg bg-muted/40 p-4">
              <summary className="font-medium cursor-pointer">
                What support do you offer if my flight is delayed or cancelled?
              </summary>
              <p className="mt-2 text-muted-foreground text-sm">
                Our team assists with rebooking, alternate routes, and guidance
                during delays or cancellations.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
