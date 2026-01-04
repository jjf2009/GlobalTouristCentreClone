"use client";

import { ItineraryDayCard } from "./itinerary-day-card";

// Define interface based on your JSON structure
interface ItineraryData {
  title: string;
  days: {
    day_title: string;
    location: string;
    description: string;
    activities: string[];
  }[];
}

interface ItinerarySectionProps {
  data: ItineraryData;
}

export function ItinerarySection({ data }: ItinerarySectionProps) {
  return (
    <section className="py-20 bg-[#fdfbf7]">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1a2238] mb-4">
            {data.title}
          </h2>
          {/* Decorative Underline */}
          <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#1a2238] mx-auto rounded-full" />
        </div>

        {/* Render Day Cards */}
        <div className="flex flex-col gap-6">
          {data.days.map((day, index) => (
            <ItineraryDayCard
              key={index}
              dayTitle={day.day_title}
              location={day.location}
              description={day.description}
              activities={day.activities}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
