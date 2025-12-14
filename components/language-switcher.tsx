"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n/translations";
import { locales } from "@/lib/i18n/config";

const languages: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "it", label: "IT" },
  { code: "fr", label: "FR" },
  { code: "de", label: "DE" },
];

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  // Locale always derived from URL
  const currentLocale = pathname.split("/")[1] as Locale;

  function handleLanguageChange(newLocale: Locale) {
    if (newLocale === currentLocale) return;

    const segments = pathname.split("/");
    segments[1] = newLocale;

    router.replace(segments.join("/"));
  }

  return (
    <div className="flex items-center">
      <div
        className="
          flex gap-1 p-1 rounded-full
          bg-white/10 backdrop-blur-md
          border border-white/20
        "
        aria-label="Language selector"
      >
        {languages.map((lang) => {
          const isActive = currentLocale === lang.code;

          return (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              aria-current={isActive ? "true" : undefined}
              aria-label={`Switch language to ${lang.label}`}
              className={`
                px-3 py-1.5 rounded-full
                text-xs font-medium uppercase tracking-wide
                transition-all duration-300

                ${
                  isActive
                    ? "bg-[#f8d56b] text-gray-900 shadow-md"
                    : `
                        text-gray-900 bg-gray-100
                        hover:bg-[#f8d56b]/20

                        sm:text-white sm:bg-transparent
                        sm:hover:text-[#f8d56b]
                        sm:hover:bg-white/10
                      `
                }
              `}
            >
              {lang.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
