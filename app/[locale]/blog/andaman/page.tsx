import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n/getTranslations";
import { LOCALES } from "@/lib/data/tour-slugs";
import AndamanBlogPage from "./andamanclent";

type PageProps = {
  params: {
    locale: string;
  };
};

/* ------------------------------------------------------------------ */
/* STATIC PARAMS */
/* ------------------------------------------------------------------ */
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

/* ------------------------------------------------------------------ */
/* SEO METADATA (i18n-aware) */
/* ------------------------------------------------------------------ */
export function generateMetadata({ params }: PageProps): Metadata {
  const { locale } = params;
  const t = getTranslations(locale);

  const title = t.blogAndaman.heroTitle;
  const description = t.blogAndaman.introParagraph;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      images: [
        {
          url: "/assets/hero/Andaman-hero.webp",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/assets/hero/Andaman-hero.webp"],
    },
  };
}

/* ------------------------------------------------------------------ */
/* PAGE */
/* ------------------------------------------------------------------ */
export default function AndamanBlog() {
  return <AndamanBlogPage />;
}
