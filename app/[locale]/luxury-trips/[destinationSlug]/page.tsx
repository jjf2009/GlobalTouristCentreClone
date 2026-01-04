import { notFound } from "next/navigation";
import { LuxurySlug } from "@/lib/data/luxury-page-content";
import { LuxuryClient } from "./categoey-client"; 

const VALID_SLUGS = [
  "kerala-luxury",
  "mumbai-luxury",
  "golden-triangle-luxury",
  "rajasthan-luxury",
  "karnataka-luxury",
] as const;

type PageProps = {
  params: {
    destinationSlug: LuxurySlug;
  };
};

export function generateStaticParams() {
  return VALID_SLUGS.map((destinationSlug) => ({
    destinationSlug,
  }));
}

export default function LuxuryDestinationPage({ params }: PageProps) {
  const { destinationSlug } = params;

  if (!VALID_SLUGS.includes(destinationSlug as any)) {
    notFound();
  }

  return (
    <>
      <LuxuryClient params={{ slug: destinationSlug as any }} />
    </>
  );
}
 