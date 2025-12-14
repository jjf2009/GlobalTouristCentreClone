"use client"

import Link from "next/link"
import { useState } from "react"
import { useI18n } from "@/lib/i18n/context"
import { LanguageSwitcher } from "./language-switcher"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

export function Header() {
  const { t } = useI18n()
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "https://globaltouristcentre.com/", label: t.nav.home },
    { href: "https://globaltouristcentre.com/destinations", label: t.nav.destinations },
    { href: "https://globaltouristcentre.com/luxury-destinations", label: t.nav.luxuryDestinations },
    { href: "https://globaltouristcentre.com/about", label: t.nav.about },
    { href: "https://globaltouristcentre.com/services", label: t.nav.services },
    { href: "https://globaltouristcentre.com/contact", label: t.nav.contact },
    { href: "https://globaltouristcentre.com/blog", label: t.nav.blog },
  ]

  return (
    <header
      className="absolute top-0 left-0 w-full z-50 bg-transparent"
      role="banner"
    >
      <div className="flex items-center justify-between px-[5%] py-7.5">
        {/* Logo */}
        <Link
          href="https://globaltouristcentre.com/"
          className="flex items-center"
          aria-label="Global Tourist Centre - Home"
        >
             <div className="w-15 h-15 rounded-full border-2 border-[#f8d56b] flex items-center justify-center mb-4">
  <img
    src="/logo.webp"
    alt="Global Tourist Centre Logo"
    className="h-15 w-auto rounded-full"
  />
</div>
        </Link>

       {/* Desktop Navigation + Language */}
<div className="hidden lg:flex items-center gap-8">
  <nav
    className="flex items-center gap-8"
    role="navigation"
    aria-label="Main navigation"
  >
    {navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className="text-white text-xl font-medium transition-colors hover:text-[#f8d56b]"
        style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
      >
        {link.label}
      </Link>
    ))}
  </nav>

  {/* Language Switcher as navbar item */}
  <div className="flex items-center">
    <LanguageSwitcher />
  </div>
</div>


        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="text-white"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[85vw] max-w-sm p-0">
              <SheetHeader className="p-4 border-b">
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col py-4">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="px-6 py-3 text-base font-medium hover:bg-muted"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

             <div className="px-6 py-4 border-t border-border sm:hidden"> 
              <p className="text-sm text-muted-foreground mb-2">Language</p> 
              <LanguageSwitcher /> 
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
