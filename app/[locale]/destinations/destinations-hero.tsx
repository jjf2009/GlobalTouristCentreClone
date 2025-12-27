import { HeroSection } from "@/components/hero-section";
import { useI18n } from "@/lib/i18n/context";

export function DestinationsHero() {
  const { t } = useI18n();

  return (
    <>
      <HeroSection
        title={t.hero.tagline}
        backgroundQuery="Destinations-hero"
      />

      {/* Header Section */}
      <section className="  bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative inline-block">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
              {t.about.mainTitle}
            </h1>

            <span
              aria-hidden="true"
              className="
                absolute left-0 bottom-0
                h-[3px] w-20 rounded-full
                bg-gradient-to-r from-[#ff6b6b] via-[#f8d56b] to-[#0d9488]
              "
            />
          </div>

          <p className="text-gray-600 text-lg mt-4 max-w-2xl">
            {t.about.mainSubtitle}
          </p>
        </div>
      </section>
    </>
  );
}
