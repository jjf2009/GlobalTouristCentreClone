"use client"

import { useI18n } from "@/lib/i18n/context"
import { HeroSection } from "@/components/hero-section"
import { DestinationCard } from "@/components/destination-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { OfferBanner } from "@/components/offer-banner"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const domesticTrips = [
  {
    title: "Scenic Kerala",
    description:
      "Experience God's Own Country with backwaters, hills, beaches, houseboat stay, tea plantations, and spice gardens.",
    rating: 4.8,
    duration: "5 Nights / 6 Days",
    imageQuery: "Kerala backwaters houseboat India",
  },
  {
    title: "Exotic Kashmir",
    description:
      "Explore Srinagar, Sonamarg, Gulmarg, and Pahalgam with Mughal gardens, houseboat stay, and breathtaking Himalayan landscapes.",
    rating: 4.9,
    duration: "5 Nights / 6 Days",
    imageQuery: "Kashmir valley mountains scenic India",
  },
  {
    title: "Hampi Heritage",
    description:
      "Explore the UNESCO World Heritage Site of Hampi's ancient ruins, royal enclosures, temples, and unique stone chariots.",
    rating: 4.8,
    duration: "1 Night / 2 Days",
    imageQuery: "Hampi ruins temple India",
  },
  {
    title: "Golden Triangle",
    description:
      "Delhi, Agra, Jaipur - Experience India's rich cultural heritage with Taj Mahal, Amber Fort, and historic monuments.",
    rating: 4.7,
    duration: "5 Nights / 6 Days",
    imageQuery: "Golden Triangle Taj Mahal Jaipur India",
  },
]

const internationalTrips = [
  {
    title: "Classic Singapore and Malaysia",
    description:
      "Twin-city experience with modern marvels, cultural diversity, and tropical beauty. Includes Sentosa Island, Universal Studios, and Kuala Lumpur highlights.",
    rating: 4.9,
    duration: "7 Days / 6 Nights",
    imageQuery: "Singapore Marina Bay skyline",
  },
  {
    title: "Simply Thailand - Fully Loaded",
    description:
      "Comprehensive tour covering Bangkok, Pattaya, Krabi, and Phuket. Experience city life, beaches, islands, and cultural attractions.",
    rating: 4.8,
    duration: "8 Days / 7 Nights",
    imageQuery: "Thailand Bangkok temple golden",
  },
  {
    title: "Dubai - Luxury Escape",
    description:
      "Experience Dubai's modern marvels with dhow cruise, desert safari, Burj Khalifa, Dubai Aquarium, and thrilling waterpark adventures.",
    rating: 4.8,
    duration: "6 Days / 5 Nights",
    imageQuery: "Dubai Burj Khalifa skyline luxury",
  },
  {
    title: "Best of Vietnam",
    description:
      "Discover the highlights of Vietnam including Hanoi, Halong Bay, Da Nang, and Hoi An. Perfect for those with limited time wanting to experience Vietnam's beauty.",
    rating: 4.5,
    duration: "6 Days / 5 Nights",
    imageQuery: "Vietnam Halong Bay scenic boats",
  },
]

const dayTrips = [
  {
    title: "Extreme South Goa",
    description:
      "Discover the hidden gems of South Goa with our one-day exploration tour covering pristine beaches, boat rides, and scenic viewpoints.",
    rating: 4.5,
    duration: "1 Day",
    imageQuery: "South Goa beach pristine India",
    tags: ["Beach Hopping", "Boat Ride", "Kayaking"],
  },
  {
    title: "Dudhsagar Falls",
    description:
      "Join a 1-day Goa tour: jeep safari to Dudhsagar Falls, swim in its pristine pool, savor A Goan lunch at a spice plantation. Perfect for nature lovers!",
    rating: 4.7,
    duration: "1 Day",
    imageQuery: "Dudhsagar Falls waterfall India",
    tags: ["Jeep Safari", "Spice Tour", "Waterfall"],
  },
  {
    title: "South Goa Retreat",
    description:
      "Embark on a 1-day South Goa Tour Package with a curated itinerary of pristine beaches, heritage sites, and scenic views. Perfect for adventure seekers!",
    rating: 4.6,
    duration: "1 Day",
    imageQuery: "South Goa heritage church beach",
    tags: ["Boat Ride", "Beach Tour", "Dolphin Spotting"],
  },
  {
    title: "Mumbai in a Day",
    description:
      "Experience the vibrant city of Mumbai in just one day with our exclusive tour from Goa, covering major landmarks and cultural sites.",
    rating: 4.4,
    duration: "1 Day",
    imageQuery: "Mumbai Gateway India city",
    tags: ["City Tour", "Cultural", "Flight Included"],
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

export default function DestinationsPage() {
  const { t } = useI18n()

  return (
    <div>
      <HeroSection title={t.hero.tagline} backgroundQuery="world map travel passport scenic view" showForm={true} />

      <OfferBanner mode="inline" />

      {/* Choose Your Next Adventure */}
      <section className="py-12 sm:py-16" aria-labelledby="destinations-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8 sm:mb-12">
            <h2
              id="destinations-heading"
              className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3"
            >
              {t.destinations.title}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">{t.destinations.subtitle}</p>
          </header>

          {/* Domestic Trips */}
          <div className="mb-12 sm:mb-16">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-1.5 sm:mb-2">
              {t.destinations.domesticTitle}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 sm:mb-6">{t.destinations.domesticSubtitle}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" role="list">
              {domesticTrips.map((trip, index) => (
                <div key={index} role="listitem">
                  <DestinationCard {...trip} />
                </div>
              ))}
            </div>
            <div className="text-center mt-6 sm:mt-8">
              <Button variant="outline" className="rounded-full bg-transparent">
                {t.destinations.viewMore} {t.destinations.domesticTitle}
              </Button>
            </div>
          </div>

          {/* International Trips */}
          <div className="mb-12 sm:mb-16">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-1.5 sm:mb-2">
              {t.destinations.internationalTitle}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 sm:mb-6">{t.destinations.internationalSubtitle}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" role="list">
              {internationalTrips.map((trip, index) => (
                <div key={index} role="listitem">
                  <DestinationCard {...trip} />
                </div>
              ))}
            </div>
            <div className="text-center mt-6 sm:mt-8">
              <Button variant="outline" className="rounded-full bg-transparent">
                {t.destinations.viewMore} {t.destinations.internationalTitle}
              </Button>
            </div>
          </div>

          {/* Day Trips */}
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-1.5 sm:mb-2">
              {t.destinations.dayTripsTitle}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 sm:mb-6">{t.destinations.dayTripsSubtitle}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" role="list">
              {dayTrips.map((trip, index) => (
                <div key={index} role="listitem">
                  <DestinationCard {...trip} />
                </div>
              ))}
            </div>
            <div className="text-center mt-6 sm:mt-8">
              <Button variant="outline" className="rounded-full bg-transparent">
                {t.destinations.viewMore} {t.destinations.dayTripsTitle}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reach Out Form */}
      <section className="py-12 sm:py-16 bg-muted/50" aria-labelledby="reach-out-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 id="reach-out-heading" className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-2">
              {t.contact.sendMessage}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">{t.contact.sendMessageSubtitle}</p>
          </div>

          <Card className="max-w-md mx-auto">
            <CardHeader className="text-center pb-2 sm:pb-4">
              <CardTitle className="font-serif text-lg sm:text-xl">{"Let's Plan Your Dream Vacation!"}</CardTitle>
              <CardDescription className="text-xs sm:text-sm">
                {"Share your details and we'll create the perfect itinerary for you"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-3" aria-label="Dream vacation planning form">
                <div>
                  <Label htmlFor="dest-name" className="sr-only">
                    {t.form.name}
                  </Label>
                  <Input id="dest-name" type="text" placeholder={t.form.name} className="h-10 sm:h-11" required />
                </div>
                <div>
                  <Label htmlFor="dest-email" className="sr-only">
                    {t.form.email}
                  </Label>
                  <Input id="dest-email" type="email" placeholder={t.form.email} className="h-10 sm:h-11" required />
                </div>
                <div>
                  <Label htmlFor="dest-phone" className="sr-only">
                    {t.form.phone}
                  </Label>
                  <Input id="dest-phone" type="tel" placeholder={t.form.phone} className="h-10 sm:h-11" required />
                </div>
                <Button type="submit" className="w-full h-10 sm:h-11">
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
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16" aria-labelledby="dest-testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2
              id="dest-testimonials-heading"
              className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-2 sm:mb-3"
            >
              {t.testimonials.whatTravelersSay}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">{t.testimonials.hearFromCustomers}</p>
          </div>

          <div className="relative">
            <div className="flex items-center gap-2 sm:gap-4">
              <Button
                variant="outline"
                size="icon"
                className="hidden md:flex w-10 h-10 rounded-full shrink-0 bg-transparent"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div
                className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 flex-1 scrollbar-hide snap-x snap-mandatory"
                role="list"
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
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
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
    </div>
  )
}
