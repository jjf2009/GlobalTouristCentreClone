"use client"

import { useI18n } from "@/lib/i18n/context"
import type { Locale } from "@/lib/i18n/translations"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe, ChevronDown } from "lucide-react"

const languages: { code: Locale; label: string; fullName: string }[] = [
  { code: "en", label: "EN", fullName: "English" },
  { code: "ru", label: "RU", fullName: "Русский" },
  { code: "it", label: "IT", fullName: "Italiano" },
  { code: "fr", label: "FR", fullName: "Français" },
  { code: "de", label: "DE", fullName: "Deutsch" },
]

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n()

  const currentLanguage = languages.find((l) => l.code === locale) || languages[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-8 sm:h-9 px-2 sm:px-3 gap-1 sm:gap-2 text-xs sm:text-sm focus-visible:ring-2 focus-visible:ring-primary bg-transparent"
          aria-label={`Change language. Current: ${currentLanguage.fullName}`}
        >
          <Globe className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
          <span>{currentLanguage.label}</span>
          <ChevronDown className="h-3 w-3 sm:h-3.5 sm:w-3.5 opacity-50" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40" role="menu" aria-label="Select language">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLocale(lang.code)}
            className={`cursor-pointer ${locale === lang.code ? "bg-primary/10 text-primary" : ""}`}
            role="menuitem"
            aria-current={locale === lang.code ? "true" : undefined}
          >
            <span className="font-medium">{lang.label}</span>
            <span className="ml-2 text-muted-foreground">{lang.fullName}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
