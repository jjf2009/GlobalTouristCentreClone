import { notFound } from "next/navigation";
import { legalPages } from "@/lib/legalPages";
import { LegalPageClient } from "./LegalPageClient";


export default function LegalPage({ params }: { params: { slug: string } }) {
  const page = legalPages[params.slug as keyof typeof legalPages]
  if (!page) notFound();

  return <LegalPageClient page={page} />;
}
