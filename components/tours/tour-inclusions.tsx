"use client";

import { Check } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

type InclusionItem = {
  title: string;
  description: string;
};

interface TourInclusionsProps {
  items: InclusionItem[];
}

export function TourInclusions({
  items
}: TourInclusionsProps) {
   const { t } = useI18n();

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-slate-900">
            {t.destinations.tour.inclusionsTitle}
          </h2>
          <span className="block w-14 h-[3px] bg-emerald-600 mt-3 mb-4 rounded-full" />
          <p className="text-slate-600 max-w-2xl">{t.destinations.tour.inclusionsSubtitle}</p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="
                bg-slate-50
                border
                border-slate-200
                rounded-2xl
                p-6
                hover:shadow-md
                transition-all
                duration-300
              "
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100">
                    <Check className="h-5 w-5 text-emerald-600" />
                  </span>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
