import type { Metadata } from "next";

import { HeroSection } from "@/components/hero-section";
import { DestinationGrid } from "../../destinations/destination-grid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  domesticTrips,
  internationalTrips,
} from "@/lib/data/destinations";


export default function DomesticInternationalTripsPage() {
  const faqs = [
    {
      value: "item-1",
      question: "What documents do you need from me at the time of booking?",
      answer:
        "We will need a valid passport and government-issued identity proof to get the booking started. As per the destination and airline requirements, we may ask for more documentation such as your Aadhaar card or a copy of your travel documents.",
    },
    {
      value: "item-2",
      question: "Do you offer visa assistance or visa processing services?",
      answer:
        "Yes, our team will guide through the process, help you with the necessary paperwork and make sure that everything is in order before submission.",
    },
    {
      value: "item-3",
      question:
        "What is your policy for refunds/compensation in case of service failures (missed hotel nights, cancelled excursions)?",
      answer:
        "If a hotel night is missed or an excursion gets cancelled due to service issues, we will step in to sort it out. Depending on the circumstance, you may be offered a refund or travel credit.",
    },
    {
      value: "item-4",
      question:
        "Should I arrive earlier for international flights than domestic ones?",
      answer:
        "For domestic flights, reach the airport 2 hours before. For international flights, arrive 3 to 4 hours early to manage security and immigration without stress.",
    },
  ];
  return (
    <main>
      {/* ================= HERO ================= */}
      <HeroSection
        title="Domestic & International Tour Packages"
        backgroundQuery="domestic-international-hero"
      />

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden">
            <img
              src="/assets/services/domestic-international-about.webp"
              alt="Travel experiences"
              className="w-[600px] h-[400px] object-cover"
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
      <section className="py-20 bg-[#F8FAFB]">
        <div className="max-w-5xl mx-auto px-6">
          {/* Heading Section */}
          <div className="mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1D2939] relative inline-block pb-3">
              Frequently Asked Questions
              {/* The Green/Gold Underline Gradient */}
              <span className="absolute bottom-0 left-0 w-20 h-1.5 bg-gradient-to-r from-[#F6CF5F] via-[#F6CF5F] to-[#14B8A6] rounded-full"></span>
            </h2>
            <p className="text-[#475467] mt-6 text-lg">
              Find answers to common questions about our domestic and
              international tours.
            </p>
          </div>

          {/* Accordion Logic: type="single" ensures only one opens at a time */}
          <Accordion type="single" collapsible className="space-y-4 w-full">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.value}
                value={faq.value}
                className="border-none bg-white rounded-xl shadow-sm px-6 hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-bold text-[#1D2939] text-lg py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#475467] text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
  );
}
