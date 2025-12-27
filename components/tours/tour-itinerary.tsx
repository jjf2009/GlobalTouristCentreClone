"use client";

import { Car, MapPin, Waves, Utensils, PawPrint, TreePine } from "lucide-react";

type ItineraryItem = {
  time: string;
  title: string;
  description: string;
  category:
    | "travel"
    | "arrival"
    | "adventure"
    | "meal"
    | "wildlife"
    | "exploration";
  highlight?: boolean;
};

interface TourItineraryProps {
  items: ItineraryItem[];
}

/* ---------------------------------------------
 ICON SYSTEM
---------------------------------------------- */
const ICON_MAP: Record<ItineraryItem["category"], JSX.Element> = {
  travel: <Car className="w-5 h-5" />,
  arrival: <MapPin className="w-5 h-5" />,
  adventure: <Waves className="w-5 h-5" />,
  meal: <Utensils className="w-5 h-5" />,
  wildlife: <PawPrint className="w-5 h-5" />,
  exploration: <TreePine className="w-5 h-5" />,
};

export function TourItinerary({ items }: TourItineraryProps) {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-5xl mx-auto px-4">
        {/* HEADER */}
        <div className="mb-14">
          <h2 className="font-serif text-3xl font-bold text-slate-900">
            Your Day of Adventure
          </h2>
          <p className="mt-2 text-slate-600">
            Carefully crafted itinerary to maximize your experience
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200" />

          <div className="space-y-12">
            {items.map((item, idx) => (
              <div key={idx} className="flex gap-8">
                {/* TIMELINE COLUMN */}
                <div className="relative w-12 flex justify-center">
                  <div
                    className={`
                      relative z-10
                      flex items-center justify-center
                      w-10 h-10 rounded-full
                      bg-white border
                      ${
                        item.highlight
                          ? "border-emerald-500 text-emerald-600"
                          : "border-slate-300 text-slate-500"
                      }
                    `}
                  >
                    {ICON_MAP[item.category]}
                  </div>
                </div>

                {/* CONTENT CARD */}
                <div
                  className={`
                    bg-white rounded-xl
                    p-6 w-full
                    shadow-sm
                    ${item.highlight ? "border-l-4 border-emerald-500" : ""}
                  `}
                >
                  {/* TIME */}
                  <span
                    className={`
                      inline-block mb-2
                      px-3 py-1 rounded-full text-xs font-medium
                      ${
                        item.highlight
                          ? "bg-emerald-600 text-white"
                          : "bg-slate-100 text-slate-700"
                      }
                    `}
                  >
                    {item.time}
                  </span>

                  {/* TITLE */}
                  <h3 className="font-semibold text-lg text-slate-900">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* TAG */}
                  {item.highlight && (
                    <span className="inline-block mt-3 text-xs font-medium bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                      {item.category?.[0]?.toUpperCase() +
                        item.category?.slice(1)}{" "}
                      Experience
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
