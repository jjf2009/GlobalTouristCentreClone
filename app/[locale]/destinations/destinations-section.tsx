import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/context";
import { domesticTrips, internationalTrips, dayTrips } from "@/lib/data/destinations";
import { DestinationGrid } from "./destination-grid";
import Link from "next/link";



export function DestinationsSection() {
 const { t, locale } = useI18n();

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <DestinationBlock
          title={t.destinations.domesticTitle}
          subtitle={t.destinations.domesticSubtitle}
          items={domesticTrips.slice(0, 4)}
          href={`/${locale}/destinations/domestic`}
        />

        <DestinationBlock
          title={t.destinations.internationalTitle}
          subtitle={t.destinations.internationalSubtitle}
          items={internationalTrips.slice(0, 4)}
          href={`/${locale}/destinations/international`}
        />

        <DestinationBlock
          title={t.destinations.dayTripsTitle}
          subtitle={t.destinations.dayTripsSubtitle}
          items={dayTrips.slice(0, 4)}
          href={`/${locale}/destinations/day-trips`}
        />
      </div>
    </section>
  );
}

function DestinationBlock({
  title,
  subtitle,
  items,
  href,
}: {
  title: string;
  subtitle: string;
  items: any[];
  href: string;
}) {
  return (
    <div>
      {/* Title + Gradient */}
      <div className="relative inline-block mb-4">
        <h3 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
          {title}
        </h3>

        <span
          aria-hidden="true"
          className="
            absolute left-0 -bottom-2
            h-[3px] w-20 rounded-full
            bg-gradient-to-r
            from-[#ff6b6b] via-[#f8d56b] to-[#0d9488]
          "
        />
      </div>

      <p className="text-muted-foreground mb-6 max-w-2xl">{subtitle}</p>

      <DestinationGrid items={items} />

      {/* View More CTA */}
      <div className="text-center mt-10">
        <Link href={href}>
          <Button
            variant="outline"
            className="
              rounded-full
              px-10 py-6
              text-base font-semibold
              transition-all duration-300 ease-out
              border-border
              hover:border-[#f8d56b]
              hover:bg-[#f8d56b]
              hover:text-black
              hover:shadow-lg
            "
          >
            View More {title}
          </Button>
        </Link>
      </div>
    </div>
  );
}
