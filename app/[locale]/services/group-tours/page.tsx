import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { FeatureSplitSection } from "@/components/feature-split-section";
import { ServiceFormCard } from "@/components/service-form-card";
import { FAQSection } from "@/components/faq-section";

/* ---------- METADATA ---------- */
export const metadata: Metadata = {
  title: "Group Tours & Packages | Global Tourist Centre",
  description:
    "Organized group tours for families, friends, corporates, and institutions with expert guides, seamless logistics, and exclusive group benefits.",
};

/* ---------- PAGE ---------- */
export default function GroupToursPage() {
  return (
    <main>
      {/* HERO */}
      <HeroSection
        title="Group Tours & Packages"
        subtitle="Travel Together. Save Together."
        backgroundQuery="group travel tourists walking street"
      />

      {/* ABOUT / BENEFITS */}
      <FeatureSplitSection
        imageQuery="group tourists walking european street"
        title="Travel Together, Save Together"
        description="Our group tours offer the perfect blend of social connection, convenience, and value. Whether you're traveling with family, friends, or colleagues, our expertly planned itineraries take care of every detail so you can focus on enjoying the journey together."
        bullets={[
          "Significant cost savings compared to individual travel",
          "Expert local guides and tour managers",
          "Pre-arranged logistics and seamless coordination",
          "Social experience with like-minded travelers",
          "Special group activities and exclusive access",
          "Customizable options for private groups",
        ]}
      />

      {/* FORM SECTION */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-5xl mx-auto px-4 space-y-10">
          <div>
            <h2 className="font-serif text-3xl font-bold">
              Plan Your Private Group Tour
            </h2>
            <p className="text-muted-foreground mt-2 max-w-2xl">
              Organize a customized group trip for your family, friends, or
              organization. Our experts will design the perfect itinerary.
            </p>
          </div>

          <ServiceFormCard
            icon="users"
            title="Let's Get Started"
            subtitle="Fill in the details below and we'll contact you within 24 hours"
            submitLabel="Request Group Proposal"
            fields={[
              {
                name: "name",
                label: "Group Organizer Name",
                type: "text",
                required: true,
              },
              {
                name: "phone",
                label: "Phone Number",
                type: "tel",
                required: true,
              },
              {
                name: "groupType",
                label: "Group Type",
                type: "select",
                options: [
                  "Family / Friends",
                  "Corporate",
                  "Students",
                  "Religious",
                  "Club / Association",
                  "Other",
                ],
                required: true,
              },
              {
                name: "groupSize",
                label: "Approximate Group Size",
                type: "number",
                required: true,
              },
              {
                name: "destination",
                label: "Destination(s) of Interest",
                type: "text",
                required: true,
              },
              {
                name: "startDate",
                label: "Preferred Start Date",
                type: "date",
              },
              {
                name: "duration",
                label: "Trip Duration (Days)",
                type: "number",
              },
              {
                name: "budget",
                label: "Approximate Budget (per person)",
                type: "text",
              },
              {
                name: "interests",
                label: "Group Interests / Activities",
                type: "textarea",
              },
            ]}
          />
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title="Group Tour FAQs"
        subtitle="Common questions about our group travel services."
        items={[
          {
            question:
              "What is the minimum and maximum group size for your tours?",
            answer:
              "Most of our group tours are designed for 8–20 travelers. For larger groups, we customize logistics and support accordingly.",
          },
          {
            question:
              "How do you ensure smooth coordination during a group trip?",
            answer:
              "We plan detailed daily schedules, provide dedicated tour managers, and use reliable transport partners to ensure everything runs smoothly.",
          },
          {
            question:
              "Can you arrange flights, hotels, and visas for the entire group?",
            answer:
              "Yes. We handle flights, hotels, visas, transfers, and sightseeing for all group members under one unified itinerary.",
          },
          {
            question: "Do you offer installment or staged payment options?",
            answer:
              "Typically, a 25% advance confirms the booking, with the remaining balance due before departure. Flexible payment schedules can be arranged for large groups.",
          },
        ]}
      />
    </main>
  );
}
