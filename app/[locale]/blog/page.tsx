import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n/getTranslations";
import BlogClient from "./BlogClient";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = getTranslations(params.locale);

  return {
    title: t.metadata?.blog?.title || "Blog | Global Tourist Centre",
    description: t.metadata?.blog?.description || "Discover our travel blog with inspiring travel stories, destination guides, and travel tips.",
  };
}

export default function BlogPage() {
  return <BlogClient />;
}
