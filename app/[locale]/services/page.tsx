import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n/getTranslations";
import ServicesClient from "./ServicesClient";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = getTranslations(params.locale);

  return {
    title: t.metadata?.services?.title || "Our Services | Global Tourist Centre",
    description: t.metadata?.services?.description || "Custom travel solutions with Global Tourist Centre - visa assistance, hotel bookings, and travel packages.",
  };
}

export default function ServicesPage() {
  return <ServicesClient />;
}
