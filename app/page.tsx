"use client"

import { useI18n } from "@/lib/i18n/context"
import { DestinationCard } from "@/components/destination-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { OfferBanner } from "@/components/offer-banner"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const signatureExperiences = [
  { title: "Rajasthan", imageQuery: "Rajasthan palace desert India" },
  { title: "Manali & Shimla", imageQuery: "Manali mountains snow India" },
  { title: "Taj Mahal Trip", imageQuery: "Taj Mahal India sunset" },
  { title: "Temples of South", imageQuery: "South India temple architecture" },
  { title: "Himalayas", imageQuery: "Himalayan mountains scenic view" },
]

const curatedCollections = [
  {
    title: "South Goa - Cathedral Line",
    description:
      "A 3-day escape, you visit the Old Goa churches, explore Palolem beach, visit spice plantation, witness dolphins, and eat Goan cuisines.",
    rating: 4.9,
    duration: "3 Days / 2 Nights",
    imageQuery: "South Goa beaches churches India",
    tags: ["Beach", "Heritage"],
    badge: undefined,
  },
  {
    title: "Luxury South Goa Tour",
    description:
      "3-4 days of Goa's pristine coast, explore old Goa churches, South Goan beaches, Dudhsagar Falls, and authentic Goan cuisine.",
    rating: 4.9,
    duration: "4 Days / 3 Nights",
    imageQuery: "Luxury Goa resort pool India",
    tags: ["Luxury", "Beach"],
    badge: "hot" as const,
  },
  {
    title: "Goa Luxury Scenic Glow",
    description: "Escape to South Goa's serene shores, visit Basilica of Bom Jesus, explore old Portuguese quarters.",
    rating: 4.9,
    duration: "4 Days / 3 Nights",
    imageQuery: "Goa sunset beach palm trees",
    tags: ["Romantic", "Beach"],
    badge: undefined,
  },
  {
    title: "Andaman Islands",
    description:
      "Discover pristine beaches, rich marine life, crystal clear waters at Port Blair, Havelock Island, Neil Island.",
    rating: 4.8,
    duration: "6 Days / 5 Nights",
    imageQuery: "Andaman Islands crystal clear beach India",
    tags: ["Island", "Adventure"],
    badge: "new" as const,
  },
]

const testimonials = [
  {
    name: "Derek Parker",
    initials: "DP",
    timeAgo: "3 weeks ago",
    rating: 5,
    text: "Global arranged a tour from Goa to Lakshadweep Islands Feb 2025. Flights and hotels, transfers, ferries...",
    photoCount: 4,
  },
  {
    name: "Vishal yadav",
    initials: "Vy",
    timeAgo: "a month ago",
    rating: 5,
    text: "I recently went on a trip with my husband to Kerala for 7 days. Global Tourist Centre have made our trip by...",
    photoCount: 40,
  },
  {
    name: "Soaleha shaikh",
    initials: "Ss",
    timeAgo: "8 months ago",
    rating: 5,
    text: "The travel agency really knows what they're doing. Great itinerary, friendly tour coordinator, and everything on...",
    photoCount: 3,
  },
]

export default function HomePage() {
  const { t } = useI18n()

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center"
        aria-label="Welcome to Global Tourist Centre"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/luxury-travel-mountain-scenic-view-clouds.jpg"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight italic">
                {t.hero.title.split(" ").slice(0, 1).join(" ")}
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                {t.hero.title.split(" ").slice(1, 2).join(" ")}
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                {t.hero.title.split(" ").slice(2).join(" ")}
              </h1>
              <div className="w-6 h-6 sm:w-8 sm:h-8 mt-6 sm:mt-8 animate-bounce" aria-hidden="true">
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white/60 rotate-90" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 sm:p-6 shadow-2xl max-w-md lg:ml-auto w-full">
              <h2 className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-1 text-center">
                {t.hero.subtitle}
              </h2>
              <p className="text-muted-foreground text-xs sm:text-sm text-center mb-3 sm:mb-4">
                {t.hero.tagline.split("—")[1]?.trim()}
              </p>
              <form className="space-y-3" aria-label="Plan your vacation form">
                <div>
                  <Label htmlFor="home-name" className="sr-only">
                    {t.form.name}
                  </Label>
                  <Input
                    id="home-name"
                    type="text"
                    placeholder={t.form.name + "*"}
                    className="h-10 sm:h-11 text-sm sm:text-base"
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <Label htmlFor="home-phone" className="sr-only">
                    {t.form.phone}
                  </Label>
                  <Input
                    id="home-phone"
                    type="tel"
                    placeholder={t.form.phone + "*"}
                    className="h-10 sm:h-11 text-sm sm:text-base"
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <Label htmlFor="home-destination" className="sr-only">
                    {t.form.destination}
                  </Label>
                  <Input
                    id="home-destination"
                    type="text"
                    placeholder={t.form.destination}
                    className="h-10 sm:h-11 text-sm sm:text-base"
                  />
                </div>
                <Button type="submit" className="w-full h-10 sm:h-11 text-sm sm:text-base font-medium">
                  {t.hero.cta}
                </Button>
              </form>
              <p className="text-[10px] sm:text-xs text-muted-foreground text-center mt-2 sm:mt-3">
                {t.form.privacyNote}{" "}
                <a href="#" className="text-primary hover:underline focus:outline-none focus-visible:underline">
                  {t.form.privacyPolicy}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Banner */}
      <OfferBanner mode="inline" />

      {/* Signature Experiences */}
      <section className="py-12 sm:py-16 bg-primary/5" aria-labelledby="experiences-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2
              id="experiences-heading"
              className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3"
            >
              {t.experiences.title}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">{t.experiences.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4" role="list">
            {signatureExperiences.map((exp, index) => (
              <article
                key={index}
                className="relative aspect-[3/4] rounded-xl overflow-hidden group cursor-pointer focus-within:ring-2 focus-within:ring-primary"
                role="listitem"
              >
                <img
                  src={`/.jpg?height=400&width=300&query=${encodeURIComponent(exp.imageQuery)}`}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <h3 className="text-white font-medium text-xs sm:text-sm mb-1.5 sm:mb-2">{exp.title}</h3>
                  <Button
                    size="sm"
                    className="h-7 sm:h-8 text-[10px] sm:text-xs px-2 sm:px-3"
                    aria-label={`Explore ${exp.title}`}
                  >
                    {t.experiences.explore} →
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Travel Collections */}
      <section className="py-12 sm:py-16 bg-[#1a2332]" aria-labelledby="collections-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2
              id="collections-heading"
              className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3"
            >
              {t.collections.title}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">{t.collections.subtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {curatedCollections.map((collection, index) => (
              <DestinationCard
                key={index}
                title={collection.title}
                description={collection.description}
                rating={collection.rating}
                duration={collection.duration}
                imageQuery={collection.imageQuery}
                tags={collection.tags}
                badge={collection.badge}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services Carousel */}
      <section className="py-12 sm:py-16" aria-labelledby="premium-services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2
              id="premium-services-heading"
              className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3"
            >
              {t.premiumServices.title}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">{t.premiumServices.subtitle}</p>
          </div>

          <div className="relative bg-muted rounded-2xl p-6 sm:p-8 md:p-12">
            <div className="flex items-center justify-between gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/20 hover:bg-primary/40 shrink-0"
                aria-label="Previous service"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </Button>

              <div className="text-center max-w-2xl mx-auto flex-1">
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-secondary/30 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <img src="/holiday-package-icon.jpg" alt="" className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                  {t.services.customizedHolidays}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6">
                  {t.services.customizedHolidaysDesc}
                </p>
                <Button className="rounded-full">{t.experiences.explore} →</Button>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/20 hover:bg-primary/40 shrink-0"
                aria-label="Next service"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </Button>
            </div>

            <div
              className="flex justify-center gap-2 mt-4 sm:mt-6"
              role="tablist"
              aria-label="Service carousel pagination"
            >
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${i === 0 ? "bg-primary" : "bg-gray-300"}`}
                  role="tab"
                  aria-selected={i === 0}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 bg-muted/50" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2
              id="testimonials-heading"
              className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3"
            >
              {t.testimonials.title}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">{t.testimonials.subtitle}</p>
          </div>

          <div className="relative">
            <div className="flex items-center gap-2 sm:gap-4">
              <Button
                variant="outline"
                size="icon"
                className="hidden md:flex w-10 h-10 rounded-full shrink-0 bg-transparent"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div
                className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 flex-1 scrollbar-hide snap-x snap-mandatory"
                role="list"
                aria-label="Customer testimonials"
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="snap-start" role="listitem">
                    <TestimonialCard {...testimonial} />
                  </div>
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                className="hidden md:flex w-10 h-10 rounded-full shrink-0 bg-transparent"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            <div
              className="flex justify-center gap-2 mt-4 sm:mt-6"
              role="tablist"
              aria-label="Testimonial carousel pagination"
            >
              {[0, 1, 2, 3, 4].map((i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${i === 0 ? "bg-primary" : "bg-gray-300"}`}
                  role="tab"
                  aria-selected={i === 0}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <Button variant="default" className="bg-[#1a2332] hover:bg-[#1a2332]/90 rounded-full">
              <img src="/google-logo.png" alt="" className="w-4 h-4 sm:w-5 sm:h-5 mr-2" aria-hidden="true" />
              {t.testimonials.viewAllReviews}
            </Button>
          </div>
        </div>
      </section>

      {/* Travel Memories */}
      <section className="py-12 sm:py-16" aria-labelledby="memories-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2
              id="memories-heading"
              className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3"
            >
              {t.memories.title}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">{t.memories.subtitle}</p>
          </div>

          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
            role="list"
            aria-label="Travel memory gallery"
          >
            {[
              "happy travelers group photo India",
              "family vacation beach sunset",
              "couple travel mountains India",
              "group tour temple India",
              "adventure travel hiking India",
            ].map((query, index) => (
              <div
                key={index}
                className="aspect-square rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer focus-within:ring-2 focus-within:ring-primary"
                role="listitem"
              >
                <img
                  src={`/.jpg?height=200&width=200&query=${encodeURIComponent(query)}`}
                  alt={`Travel memory ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
