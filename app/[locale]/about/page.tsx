"use client"

import { useI18n } from "@/lib/i18n/context"
import { HeroSection } from "@/components/hero-section"
import { TeamMemberCard } from "@/components/team-member-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { OfferBanner } from "@/components/offer-banner"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
  { name: "Shifa Shaikh", role: "Founder & CEO", imageQuery: "professional woman business portrait" },
  { name: "Laxmi Chavan", role: "Sales Executive", imageQuery: "professional woman sales portrait" },
  { name: "Hassan Khan", role: "Digital Marketer", imageQuery: "professional man marketing portrait" },
  { name: "Sheehan Sa", role: "Web Dev.", imageQuery: "professional man developer portrait" },
]

const testimonials = [
  {
    name: "Soaleha shaikh",
    initials: "Ss",
    timeAgo: "8 months ago",
    rating: 5,
    text: "We are thrilled to express our immense satisfaction with the outstanding arrangements made by...",
    photoCount: 3,
  },
  {
    name: "Maurice Patterson",
    initials: "MP",
    timeAgo: "3 months ago",
    rating: 5,
    text: "The travel agency really knows what they're doing. Great itinerary, friendly tour coordinator, and everything on...",
    photoCount: undefined,
  },
  {
    name: "Fatima Shaik",
    initials: "FS",
    timeAgo: "5 months ago",
    rating: 5,
    text: "Thank you for the wonderful trip that you planned for us. It really was once in a lifetime experience. The attention...",
    photoCount: 12,
  },
]

export default function AboutPage() {
  const { t } = useI18n()

  return (
    <div>
      <HeroSection title={t.about.heroTitle} backgroundQuery="passion led us here inspirational travel" />

      <OfferBanner mode="inline" />

      {/* About Content */}
      <section className="py-12 sm:py-16" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8 sm:mb-12">
            <h2
              id="about-heading"
              className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2"
            >
              {t.about.mainTitle}
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-primary mb-3 sm:mb-4" aria-hidden="true" />
            <p className="text-muted-foreground text-sm sm:text-base">{t.about.mainSubtitle}</p>
          </header>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="rounded-xl overflow-hidden order-2 lg:order-1">
              <img
                src="/global-tourist-centre-office-storefront.jpg"
                alt="Global Tourist Centre office"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="space-y-5 sm:space-y-6 order-1 lg:order-2">
              <article>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-1.5 sm:mb-2">
                  {t.about.journeyTitle}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.about.journeyDesc}</p>
              </article>

              <article>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-1.5 sm:mb-2">
                  {t.about.philosophyTitle}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.about.philosophyDesc}</p>
              </article>

              <article>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-1.5 sm:mb-2">
                  {t.about.teamTitle}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.about.teamDesc}</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-12 sm:py-16" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="values-heading" className="sr-only">
            Our Vision, Mission and Values
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <Card className="text-center">
              <CardContent className="p-5 sm:p-6">
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                  {t.about.visionTitle}
                </h3>
                <p className="text-muted-foreground text-sm">{t.about.visionDesc}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-5 sm:p-6">
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                  {t.about.missionTitle}
                </h3>
                <p className="text-muted-foreground text-sm">{t.about.missionDesc}</p>
              </CardContent>
            </Card>

            <Card className="text-center sm:col-span-2 md:col-span-1">
              <CardContent className="p-5 sm:p-6">
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                  {t.about.valuesTitle}
                </h3>
                <ul className="text-muted-foreground text-sm space-y-1.5 sm:space-y-2 text-left" role="list">
                  {[t.about.integrity, t.about.passion, t.about.innovation, t.about.responsibility].map((value, i) => (
                    <li key={i} className="flex items-start gap-2" role="listitem">
                      <span className="text-primary" aria-hidden="true">
                        •
                      </span>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-12 sm:py-16 bg-muted/50" aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8 sm:mb-12">
            <h2
              id="team-heading"
              className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2"
            >
              {t.about.meetTeam}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">{t.about.meetTeamSubtitle}</p>
          </header>

          <div
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
            role="list"
            aria-label="Team members"
          >
            {teamMembers.map((member, index) => (
              <div key={index} role="listitem">
                <TeamMemberCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16" aria-labelledby="about-testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2
              id="about-testimonials-heading"
              className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3"
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
                aria-label="Previous testimonials"
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
                aria-label="Next testimonials"
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
