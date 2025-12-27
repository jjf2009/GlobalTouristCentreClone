"use client";

import { Users, Car, Utensils, Camera } from "lucide-react";

type QuickInfoItem = {
  title: string;
  description: string;
};

interface TourQuickInfoProps {
  items: QuickInfoItem[];
}

/**
 * Icon resolver based on title
 * (kept explicit for control & clarity)
 */
const ICON_MAP: Record<string, React.ReactNode> = {
  "Small Groups": <Users className="w-6 h-6" />,
  "Private Transport": <Car className="w-6 h-6" />,
  "Lunch Included": <Utensils className="w-6 h-6" />,
  "Wildlife Spotting": <Camera className="w-6 h-6" />,
};

export function TourQuickInfo({ items }: TourQuickInfoProps) {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="
                flex items-center gap-4
                rounded-xl
                border
                bg-slate-50
                px-5 py-4
                transition-all
                hover:shadow-md
              "
            >
              <div className="text-emerald-600 shrink-0">
                {ICON_MAP[item.title] ?? <Camera className="w-6 h-6" />}
              </div>

              <div>
                <p className="font-medium text-slate-900">{item.title}</p>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
