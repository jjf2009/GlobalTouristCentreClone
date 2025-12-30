"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n/translations";
import { locales } from "@/lib/i18n/config";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const languages: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "it", label: "IT" },
  { code: "fr", label: "FR" },
  { code: "de", label: "DE" },
];
type LanguageSwitcherProps = {
  variant?: "dark" | "light";
};


export function LanguageSwitcher({ variant = "dark" }: LanguageSwitcherProps) {
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
    <>
      <div className="hidden lg:flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="
          group inline-flex items-center gap-1.5
          px-3.5 py-1.5 rounded-full
          text-[11px] font-semibold uppercase tracking-wider
          text-white
          bg-black/30 backdrop-blur-md
          border border-white/20
          shadow-sm
          transition-all duration-200
          hover:bg-black/40
          focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40
        "
              aria-label="Select language"
            >
              {currentLocale.toUpperCase()}
              <ChevronDown
                className="
            h-3.5 w-3.5
            transition-transform duration-200
            group-data-[state=open]:rotate-180
          "
              />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            sideOffset={8}
            className="
        min-w-[120px]
        rounded-xl
        border border-gray-200
        bg-white
        shadow-lg
        p-1
      "
          >
            {languages.map((lang) => {
              const isActive = lang.code === currentLocale;

              return (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`
              flex items-center justify-between
              rounded-lg px-3 py-2
              text-sm font-medium
              cursor-pointer
              transition-colors
              ${
                isActive
                  ? "bg-[#f8d56b]/20 text-gray-900"
                  : "text-gray-700 hover:bg-gray-100"
              }
            `}
                >
                  {lang.label}
                  {isActive && (
                    <span className="text-xs font-semibold text-gray-900">
                      ✓
                    </span>
                  )}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* //mobile  */}
      <div className="lg:hidden">
        <div
          className={`
      flex gap-1 p-1 rounded-full border
      ${
        variant === "dark"
          ? "bg-white/10 backdrop-blur-md border-white/20"
          : "bg-gray-100 border-gray-200"
      }
    `}
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
                ? "bg-[#f8d56b] text-gray-900 shadow-sm"
                : variant === "dark"
                ? "text-white hover:text-[#f8d56b] hover:bg-white/10"
                : "text-gray-700 hover:bg-gray-200"
            }
          `}
              >
                {lang.label}
              </button>
            );
          })}
        </div>
      </div>
    </>
    //     <div className="flex items-center">
    //       <div
    //         className={`
    //     flex gap-1 p-1 rounded-full border
    //     ${
    //       variant === "dark"
    //         ? "bg-white/10 backdrop-blur-md border-white/20"
    //         : "bg-gray-100 border-gray-200"
    //     }
    //   `}
    //         aria-label="Language selector"
    //       >
    //         {languages.map((lang) => {
    //           const isActive = currentLocale === lang.code;

    //           return (
    //             <button
    //               key={lang.code}
    //               onClick={() => handleLanguageChange(lang.code)}
    //               aria-current={isActive ? "true" : undefined}
    //               aria-label={`Switch language to ${lang.label}`}
    //               className={`
    //   px-3 py-1.5 rounded-full
    //   text-xs font-medium uppercase tracking-wide
    //   transition-all duration-300

    //   ${
    //     isActive
    //       ? "bg-[#f8d56b] text-gray-900 shadow-sm"
    //       : variant === "dark"
    //       ? "text-white hover:text-[#f8d56b] hover:bg-white/10"
    //       : "text-gray-700 hover:bg-gray-200"
    //   }
    // `}
    //             >
    //               {lang.label}
    //             </button>
    //           );
    //         })}
    //       </div>
    //     </div>
  );
}
