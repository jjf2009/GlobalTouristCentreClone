"use client";

import Image from "next/image";

type GalleryItem = {
  title: string;
  description: string;
  image: string;
};

interface TourVisualJourneyProps {
  items: GalleryItem[];
}

export function TourVisualJourney({ items }: TourVisualJourneyProps) {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-slate-900">
            Visual Journey
          </h2>
          <span className="block w-14 h-[3px] bg-emerald-600 mt-3 mb-4 rounded-full" />
          <p className="text-slate-600 max-w-2xl">
            Get a glimpse of the stunning locations you’ll experience
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="
                relative
                group
                overflow-hidden
                rounded-2xl
                shadow-sm
                hover:shadow-lg
                transition-all
                duration-300
              "
            >
              {/* IMAGE */}
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* TEXT */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-serif text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-white/80">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
