"use client"

import { useI18n } from "@/lib/i18n/context"
import { OfferBanner } from "@/components/offer-banner"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  { key: "bestPrice" },
  { key: "tailorMade" },
  { key: "personalConsultants" },
  { key: "flexibility" },
  { key: "recognised" },
]

const exclusiveDestinations = [
  {
    title: "Kerala Backwaters",
    description:
      'Experience "God\'s Own Country" with serene houseboat cruises through palm-fringed backwaters, spice plantation tours, Ayurvedic treatments, and beautiful tea estates in Munnar.',
    imageQuery: "Kerala backwaters houseboat serene India",
  },
  {
    title: "Mumbai Experience",
    description:
      "Explore India's financial capital with its blend of colonial architecture, Bollywood glamour, street food tours, Elephanta Caves, and the iconic Gateway of India.",
    imageQuery: "Mumbai Gateway of India sunset",
  },
  {
    title: "Golden Triangle Tour",
    description:
      "Explore India's most iconic circuit covering Delhi, Agra, and Jaipur. Witness the majestic Taj Mahal, historic forts, and vibrant markets that showcase India's rich cultural heritage.",
    imageQuery: "Golden Triangle Taj Mahal Jaipur fort India",
  },
  {
    title: "Royal Rajasthan",
    description:
      "Immerse yourself in the regal heritage of Rajasthan with palace stays, camel safaris in the Thar Desert, colorful festivals, and magnificent forts in Jaipur, Udaipur, and Jodhpur.",
    imageQuery: "Rajasthan palace desert camel India",
  },
  {
    title: "Bangalore, Mysore & Ooty",
    description:
      "Discover the perfect blend of urban sophistication and natural beauty. Explore Bangalore's tech hubs, Mysore's royal palaces, and Ooty's serene hill stations and tea gardens.",
    imageQuery: "Mysore palace Ooty hills India",
  },
]

export default function LuxuryDestinationsPage() {
  const { t } = useI18n()

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center" aria-label="Dubai Holiday Packages">
        <div className="absolute inset-0 z-0">
          <img
            src="/dubai-skyline-burj-khalifa-luxury-evening.jpg"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#1a2332]/90 via-[#1a2332]/70 to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
                {t.luxury.heroTitle}
              </h1>
              <span className="inline-block bg-orange-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium text-sm sm:text-base mb-6 sm:mb-8">
                {t.luxury.discount}
              </span>

              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6"
                role="list"
                aria-label="Package features"
              >
                {features.slice(0, 4).map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2"
                    role="listitem"
                  >
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-secondary shrink-0" aria-hidden="true" />
                    <span className="text-white text-xs sm:text-sm">
                      {t.luxury[feature.key as keyof typeof t.luxury]}
                    </span>
                  </div>
                ))}
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2 max-w-fit">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-secondary shrink-0" aria-hidden="true" />
                <span className="text-white text-xs sm:text-sm">{t.luxury.recognised}</span>
              </div>
            </div>

            <Card className="max-w-md lg:ml-auto w-full">
              <CardContent className="p-5 sm:p-6">
                <h2 className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 text-center">
                  {t.luxury.getDiscount}
                </h2>
                <form className="space-y-3" aria-label="Get discount form">
                  <div>
                    <Label htmlFor="luxury-name" className="sr-only">
                      {t.form.name}
                    </Label>
                    <Input id="luxury-name" type="text" placeholder={t.form.name} className="h-10 sm:h-11" required />
                  </div>
                  <div>
                    <Label htmlFor="luxury-email" className="sr-only">
                      {t.form.email}
                    </Label>
                    <Input
                      id="luxury-email"
                      type="email"
                      placeholder={t.form.email}
                      className="h-10 sm:h-11"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="luxury-phone" className="sr-only">
                      {t.form.phone}
                    </Label>
                    <Input id="luxury-phone" type="tel" placeholder={t.form.phone} className="h-10 sm:h-11" required />
                  </div>
                  <Button type="submit" variant="secondary" className="w-full h-10 sm:h-11">
                    {t.form.submit}
                  </Button>
                </form>
                <p className="text-[10px] sm:text-xs text-muted-foreground text-center mt-2 sm:mt-3">
                  {t.form.privacyNote}{" "}
                  <a href="#" className="text-primary hover:underline">
                    {t.form.privacyPolicy}
                  </a>{" "}
                  {t.form.and}{" "}
                  <a href="#" className="text-primary hover:underline">
                    {t.form.termsOfUse}
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Offer Banner */}
      <OfferBanner mode="inline" />

      {/* Exclusive Indian Destinations */}
      <section className="py-12 sm:py-16" aria-labelledby="exclusive-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2
              id="exclusive-heading"
              className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3"
            >
              {t.luxury.exclusiveDestinations}
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-primary mx-auto" aria-hidden="true" />
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8" role="list">
            {exclusiveDestinations.slice(0, 4).map((destination, index) => (
              <article key={index} className="flex flex-col" role="listitem">
                <div className="aspect-video rounded-xl overflow-hidden mb-3 sm:mb-4">
                  <img
                    src={`/.jpg?height=300&width=500&query=${encodeURIComponent(destination.imageQuery)}`}
                    alt={destination.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-1.5 sm:mb-2">
                  {destination.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 sm:mb-4 flex-1">{destination.description}</p>
                <Button className="w-full bg-[#1a2332] hover:bg-[#1a2332]/90">{t.destinations.exploreTours}</Button>
              </article>
            ))}
          </div>

          {/* Last destination centered */}
          <article className="mt-6 sm:mt-8 max-w-md mx-auto">
            <div className="aspect-video rounded-xl overflow-hidden mb-3 sm:mb-4">
              <img
                src={`/.jpg?height=300&width=500&query=${encodeURIComponent(exclusiveDestinations[4].imageQuery)}`}
                alt={exclusiveDestinations[4].title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-1.5 sm:mb-2">
              {exclusiveDestinations[4].title}
            </h3>
            <p className="text-muted-foreground text-sm mb-3 sm:mb-4">{exclusiveDestinations[4].description}</p>
            <Button className="w-full bg-[#1a2332] hover:bg-[#1a2332]/90">{t.destinations.exploreTours}</Button>
          </article>
        </div>
      </section>
    </div>
  )
}
