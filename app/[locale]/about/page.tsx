import { AboutHero } from "./AboutHero";
import { AboutIntro } from "./AboutIntro";
import { AboutValues } from "./AboutValues";
import { AboutTeam } from "./AboutTeam";
import { AboutTestimonials } from "./AboutTestimonials";
import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n/getTranslations";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = getTranslations(params.locale);

  return {
    title: t.metadata?.about?.title || "About Us | Global Tourist Centre",
    description: t.metadata?.about?.description || "Learn about Global Tourist Centre - your trusted travel partner since 2010.",
  };
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <AboutValues />
      <AboutTeam />
      <AboutTestimonials />
    </>
  );
}
