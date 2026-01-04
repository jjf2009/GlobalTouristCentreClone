import { notFound } from "next/navigation";
import LegalHero from "@/components/LegalHero";
import LegalPageContent from "@/components/LegalPageContent";
import { legalPages } from "@/lib/legalPages";
import { locales } from "@/lib/i18n/config";

type Props = {
    params: {
        locale: string;
        slug: string;
    };
};

export function generateStaticParams() {
    const params = [];
    for (const locale of locales) {
        for (const slug of Object.keys(legalPages)) {
            params.push({ locale, slug });
        }
    }
    return params;
}

export async function generateMetadata({ params }: Props) {
    const { locale, slug } = params;
    const pageData = legalPages[slug as keyof typeof legalPages];

    if (!pageData) {
        return {};
    }

    // Fallback to English if translation is missing
    // @ts-ignore
    const translation = pageData.translations[locale as keyof typeof pageData.translations] || pageData.translations.en;

    return {
        title: `${translation.title} | Global Tourist Centre`,
        description: translation.subtitle,
    };
}

export default function LegalPage({ params }: Props) {
    const { locale, slug } = params;
    const pageData = legalPages[slug as keyof typeof legalPages];

    if (!pageData) {
        notFound();
    }

    // Fallback to English if translation is missing
    // @ts-ignore
    const translation = pageData.translations[locale as keyof typeof pageData.translations] || pageData.translations.en;

    return (
        <main>
            <LegalHero
                title={translation.title}
                subtitle={translation.subtitle}
                heroImage={pageData.heroImage}
            />
            <LegalPageContent
                sectionTitle={translation.sectionTitle}
                lastUpdated={translation.lastUpdated}
                sections={translation.sections}
                contactInfo={translation.contactInfo}
            />
        </main>
    );
}
