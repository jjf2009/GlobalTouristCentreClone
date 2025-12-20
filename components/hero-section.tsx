"use client"

import { useI18n } from "@/lib/i18n/context"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface HeroSectionProps {
  title: string
  subtitle?: string
  backgroundQuery: string
  showForm?: boolean
}

export function HeroSection({ title, subtitle, backgroundQuery, showForm = false }: HeroSectionProps) {
  const { t } = useI18n()

  return (
    <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center" aria-label={title}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={`/assets/hero/${backgroundQuery}.webp`}
          alt=""
          className="w-full h-full object-cover"
          fill
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" aria-hidden="true" />
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-full">
        <div className={`grid gap-6 sm:gap-8 ${showForm ? "lg:grid-cols-2" : ""}`}>
          <div className="flex flex-col justify-center">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 text-balance leading-tight">
              {title}
            </h1>
            {subtitle && <p className="text-white/80 text-base sm:text-lg max-w-xl">{subtitle}</p>}
          </div>

          {showForm && (
            <div className="bg-white rounded-xl p-5 sm:p-6 shadow-2xl max-w-md lg:ml-auto w-full">
              <h2 className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 text-center">
                {t.hero.subtitle}
              </h2>
              <form className="space-y-3 sm:space-y-4" aria-label="Request quote form">
                <div>
                  <Label htmlFor="hero-name" className="sr-only">
                    {t.form.name}
                  </Label>
                  <Input
                    id="hero-name"
                    type="text"
                    placeholder={t.form.name}
                    className="h-11 sm:h-12 text-base"
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <Label htmlFor="hero-email" className="sr-only">
                    {t.form.email}
                  </Label>
                  <Input
                    id="hero-email"
                    type="email"
                    placeholder={t.form.email}
                    className="h-11 sm:h-12 text-base"
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <Label htmlFor="hero-phone" className="sr-only">
                    {t.form.phone}
                  </Label>
                  <Input
                    id="hero-phone"
                    type="tel"
                    placeholder={t.form.phone}
                    className="h-11 sm:h-12 text-base"
                    required
                    aria-required="true"
                  />
                </div>
                <Button type="submit" className="w-full h-11 sm:h-12 text-base font-medium">
                  {t.form.submit}
                </Button>
              </form>
              <p className="text-xs text-muted-foreground text-center mt-3 sm:mt-4">
                {t.form.privacyNote}{" "}
                <a href="#" className="text-primary hover:underline focus:outline-none focus-visible:underline">
                  {t.form.privacyPolicy}
                </a>{" "}
                {t.form.and}{" "}
                <a href="#" className="text-primary hover:underline focus:outline-none focus-visible:underline">
                  {t.form.termsOfUse}
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
