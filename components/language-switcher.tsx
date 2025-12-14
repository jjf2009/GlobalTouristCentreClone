"use client"

import { useI18n } from "@/lib/i18n/context"
import type { Locale } from "@/lib/i18n/translations"

const languages: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "it", label: "IT" },
  { code: "fr", label: "FR" },
  { code: "de", label: "DE" },
]

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n()

  return (
    <div className="flex items-center">
      <div
        className="
          flex gap-1 p-1 rounded-full
          bg-white/10 backdrop-blur-md
          border border-white/20
          transition-all
        "
        aria-label="Language selector"
      >
        {languages.map((lang) => {
          const isActive = locale === lang.code

          return (
           <button
  key={lang.code}
  onClick={() => setLocale(lang.code)}
  className={`
    px-3 py-1.5 rounded-full
    text-xs font-medium uppercase tracking-wide
    transition-all

    ${
      isActive
        ? "bg-[#f8d56b] text-gray-900 shadow-md"
        : `
            text-gray-900
            bg-gray-100
            hover:bg-[#f8d56b]/20

            sm:text-white
            sm:bg-transparent
            sm:hover:text-[#f8d56b]
            sm:hover:bg-white/10
          `
    }
  `}
  aria-current={isActive ? "true" : undefined}
  aria-label={`Switch language to ${lang.label}`}
>
  {lang.label}
</button>

          )
        })}
      </div>
    </div>
  )
}
