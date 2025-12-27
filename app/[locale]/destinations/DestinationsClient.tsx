"use client";

import { useI18n } from "@/lib/i18n/context";
import { DestinationsHero } from "./destinations-hero";
import { DestinationsSection } from "./destinations-section";
import HomeForm from "../(home)/HomeForm";
import { AboutTestimonials } from "../about/AboutTestimonials";

export default function DestinationsClient() {
  const { t } = useI18n();

  return (
    <>
      <DestinationsHero />
      <DestinationsSection />
      <HomeForm />
      <AboutTestimonials />
    </>
  );
}
