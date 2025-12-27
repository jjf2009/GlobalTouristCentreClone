"use client";

import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { DestinationCard } from "@/components/destination-card";
import { FILTERS_BY_SLUG } from "./filters";
import { useI18n } from "@/lib/i18n/context";

type Props = {
  slug: "domestic" | "international" | "day-trips";
  title: string;
  subtitle: string;
  items: any[];
};

export function DestinationsGridSection({
  slug,
  title,
  subtitle,
  items,
}: Props) {
  const { locale } = useI18n();
  const filters = FILTERS_BY_SLUG[slug];

  const [activeFilter, setActiveFilter] = useState("all");

  /* Reset filter when category changes */
  useEffect(() => {
    setActiveFilter("all");
  }, [slug]);

  const filteredItems = useMemo(() => {
    if (!filters || activeFilter === "all") return items;
    return items.filter((item) => item.zone === activeFilter);
  }, [items, activeFilter, filters]);

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        {/* Header */}
        <div className="mb-16">
          <div className="relative inline-block">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
              {title}
            </h1>

            <span
              aria-hidden="true"
              className="absolute left-0 bottom-0 h-[3px] w-20 rounded-full
              bg-gradient-to-r from-[#ff6b6b] via-[#f8d56b] to-[#0d9488]"
            />
          </div>

          <p className="text-gray-600 text-lg mt-4">{subtitle}</p>
        </div>

        {/* Filters */}
        {filters && (
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => {
              const isDisabled =
                filter.key !== "all" &&
                !items.some((item) => item.zone === filter.key);

              return (
                <Button
                  key={filter.key}
                  size="sm"
                  disabled={isDisabled}
                  variant={activeFilter === filter.key ? "default" : "outline"}
                  className="rounded-full"
                  onClick={() => setActiveFilter(filter.key)}
                >
                  {filter.label}
                </Button>
              );
            })}
          </div>
        )}

        {/* Grid / Carousel */}
        {filteredItems.length > 0 ? (
          <div
            className="
              flex gap-6 overflow-x-auto pb-4
              snap-x snap-mandatory
              sm:grid sm:grid-cols-2
              lg:grid-cols-4
              sm:overflow-visible
              scrollbar-hide
            "
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="
                  snap-center
                  shrink-0
                  w-[80%]
                  sm:w-auto
                "
              >
                <DestinationCard locale={locale} {...item} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-sm">
            No destinations available for this filter.
          </p>
        )}
      </div>
    </section>
  );
}
