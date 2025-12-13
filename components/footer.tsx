"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n/context"
import { Instagram, Facebook, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="bg-[#1a2332] text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo & Description */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center mb-3 sm:mb-4">
              <span className="text-primary-foreground font-bold text-sm sm:text-base">GTC</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{t.footer.tagline}</p>
            <div className="flex gap-2 sm:gap-3 mt-3 sm:mt-4" role="list" aria-label="Social media links">
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2332]"
                aria-label="Follow us on Instagram"
                role="listitem"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2332]"
                aria-label="Follow us on Facebook"
                role="listitem"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2332]"
                aria-label="Contact us on WhatsApp"
                role="listitem"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h3 className="font-serif text-base sm:text-lg font-semibold mb-3 sm:mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                { href: "/", label: t.nav.home },
                { href: "/destinations", label: t.nav.destinations },
                { href: "/about", label: t.nav.about },
                { href: "/services", label: t.nav.services },
                { href: "/contact", label: t.nav.contact },
                { href: "/blog", label: t.nav.blog },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors focus:outline-none focus-visible:text-white focus-visible:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Popular Tours */}
          <nav aria-label="Popular tours">
            <h3 className="font-serif text-base sm:text-lg font-semibold mb-3 sm:mb-4">{t.footer.popularTours}</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors focus:outline-none focus-visible:text-white focus-visible:underline"
                >
                  {t.footer.goaBeach}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors focus:outline-none focus-visible:text-white focus-visible:underline"
                >
                  {t.footer.exploreSikkim}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors focus:outline-none focus-visible:text-white focus-visible:underline"
                >
                  {t.footer.keralaBackwaters}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Instagram */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-serif text-base sm:text-lg font-semibold mb-3 sm:mb-4">{t.footer.latestInstagram}</h3>
            <div className="bg-gray-800 rounded-lg aspect-video sm:aspect-square flex items-center justify-center max-w-[200px] sm:max-w-none">
              <span className="text-gray-500 text-sm">Instagram Feed</span>
            </div>
            <Button
              className="mt-3 sm:mt-4 w-full max-w-[200px] sm:max-w-none bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-sm"
              asChild
            >
              <a href="#" aria-label="Follow us on Instagram">
                <Instagram className="w-4 h-4 mr-2" aria-hidden="true" />
                {t.footer.followUs}
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-gray-400">
            <p className="text-center sm:text-left">{t.footer.copyright}</p>
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <Link
                href="#"
                className="hover:text-white focus:outline-none focus-visible:text-white focus-visible:underline"
              >
                {t.footer.privacyPolicy}
              </Link>
              <span aria-hidden="true">|</span>
              <Link
                href="#"
                className="hover:text-white focus:outline-none focus-visible:text-white focus-visible:underline"
              >
                {t.footer.termsConditions}
              </Link>
            </div>
            <p className="text-center sm:text-right hidden lg:block">{t.footer.craftingJourneys}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
