"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n/context"
import { Instagram, Facebook, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="relative bg-[#1a2332] text-white" role="contentinfo">
      {/* Gold gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#f8d56b] via-[#0d9488] to-[#f8d56b]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

          {/* Logo & Description */}
          <div className="col-span-2 lg:col-span-1">
       <div className="w-15 h-15 rounded-full border-2 border-[#f8d56b] flex items-center justify-center mb-4">
  <img
    src="/logo.webp"
    alt="Global Tourist Centre Logo"
    className="h-15 w-auto rounded-full"
  />
</div>


            <p className="text-gray-400 text-sm leading-relaxed">
              {t.footer.tagline}
            </p>

            <div className="flex gap-3 mt-4" aria-label="Social media links">
              {[ 
                { href: "https://www.instagram.com/globaltouristcentre/", icon: Instagram, label: "Instagram" },
                { href: "https://www.facebook.com/share/1H23K6UQPt/", icon: Facebook, label: "Facebook" },
                { href: "https://wa.me/919067972295", icon: MessageCircle, label: "WhatsApp" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-[#f8d56b] text-[#111827]
                             flex items-center justify-center
                             transition-all hover:bg-white hover:-translate-y-0.5 hover:scale-105"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h3 className="relative font-serif text-lg font-semibold mb-4 pb-2">
              {t.footer.quickLinks}
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-gradient-to-r from-[#f8d56b] to-transparent" />
            </h3>

            <ul className="space-y-2">
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
                    className="text-gray-400 text-sm transition-all hover:text-[#f8d56b] hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Popular Tours */}
          <nav aria-label="Popular tours">
            <h3 className="relative font-serif text-lg font-semibold mb-4 pb-2">
              {t.footer.popularTours}
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-gradient-to-r from-[#f8d56b] to-transparent" />
            </h3>

            <ul className="space-y-2">
              {[t.footer.goaBeach, t.footer.exploreSikkim, t.footer.keralaBackwaters].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-400 text-sm transition-all hover:text-[#f8d56b] hover:translate-x-1"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Instagram */}
          <div>
            <h3 className="relative font-serif text-lg font-semibold mb-4 pb-2">
              {t.footer.latestInstagram}
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-gradient-to-r from-[#f8d56b] to-transparent" />
            </h3>

            <div className="bg-gray-800 rounded-lg aspect-square flex items-center justify-center">
              <a
                href="https://www.instagram.com/globaltouristcentre/"
                className="text-gray-500 text-sm hover:text-[#f8d56b]"
              >
                Instagram Feed
              </a>
            </div>

            <Button
              className="mt-4 w-full bg-primary hover:bg-primary/90 rounded-full text-sm"
              asChild
            >
              <a href="https://www.instagram.com/globaltouristcentre/">
                <Instagram className="w-4 h-4 mr-2" />
                {t.footer.followUs}
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 text-xs sm:text-sm text-gray-400 flex flex-col sm:flex-row justify-between gap-3">
          <p>{t.footer.copyright}</p>

          <div className="flex gap-4">
            <Link href="#" className="hover:text-[#f8d56b]">
              {t.footer.privacyPolicy}
            </Link>
            <Link href="#" className="hover:text-[#f8d56b]">
              {t.footer.termsConditions}
            </Link>
          </div>

          <p className="hidden lg:block">{t.footer.craftingJourneys}</p>
        </div>
      </div>
    </footer>
  )
}
