"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  MessageCircle,
  ArrowRight,
  Quote,
  Play,
  Globe,
  Users,
  Clock,
  Shield,
  Heart,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useI18n } from "@/lib/i18n/context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { OfferBanner } from "@/components/offer-banner"

// Signature Experiences Data
const signatureExperiences = [
  { id: 1, title: "Rajasthan", imageQuery: "Jaipur palace Rajasthan India", popular: true },
  { id: 2, title: "Manali of Himachal", imageQuery: "Manali mountains snow Himachal Pradesh", popular: false },
  { id: 3, title: "Taj Mahal Trip", imageQuery: "Taj Mahal Agra sunrise", popular: true },
  { id: 4, title: "Kerala", imageQuery: "Kerala backwaters houseboat", popular: false },
  { id: 5, title: "Temple of Hampi", imageQuery: "Hampi temples ruins Karnataka", popular: true },
]

const travelCollections = [
  {
    id: 1,
    title: "South Goa - Cultural tour",
    description:
      "Only for those who desire to visit the Old Goa Churches, explore heritage, and enjoy Goan beaches and culture.",
    imageQuery: "South Goa beach church heritage",
    rating: 4.6,
    duration: "6 Nights / 7 Days",
    tags: ["Beach", "Heritage"],
    badge: null,
  },
  {
    id: 2,
    title: "Luxury South Goa Tour",
    description:
      "Stay at 5 Star Goa Hotels and experience the best of Goa, Dona Paula, St. Mains, and Spice Plantation.",
    imageQuery: "Luxury resort pool Goa",
    rating: 4.9,
    duration: "6 Nights / 7 Days",
    tags: ["Luxury", "Spa", "Beach"],
    badge: "hot" as const,
  },
  {
    id: 3,
    title: "Goa Luxury Yacht Sales",
    description:
      "Discover and explore Goa in style with Yacht sales with stay included at the most luxury ships in the world.",
    imageQuery: "Luxury yacht Goa Arabian sea",
    rating: 4.8,
    duration: "Customizable",
    tags: ["Luxury", "Yacht"],
    badge: null,
  },
  {
    id: 4,
    title: "Andaman Islands",
    description:
      "Discover the pristine beauty of port Blair and all the Andaman islands with crystal clear water like Havelock.",
    imageQuery: "Andaman islands beach turquoise water",
    rating: 4.7,
    duration: "5 Nights / 6 Days",
    tags: ["Beach", "Adventure"],
    badge: "new" as const,
  },
  {
    id: 5,
    title: "North Goa - Nightlife tour",
    description: "Experience the famous Goan nightlife at Candolim, Baga, Vagator, Anjuna & more.",
    imageQuery: "Goa beach party nightlife",
    rating: 4.5,
    duration: "4 Nights / 5 Days",
    tags: ["Nightlife", "Beach"],
    badge: null,
  },
  {
    id: 6,
    title: "Elephant & Tiger Safari",
    description: "Experience wildlife up close with elephant rides and tiger spotting at Ranthambore or Bandhavgarh.",
    imageQuery: "Tiger safari Ranthambore India",
    rating: 4.9,
    duration: "3 Days / 2 Nights",
    tags: ["Wildlife", "Safari"],
    badge: "hot" as const,
  },
  {
    id: 7,
    title: "Kashmir and Maneshwar",
    description: "Explore the paradise on earth - Dal Lake, Gulmarg, Pahalgam with Ayurveda and wellness treatments.",
    imageQuery: "Kashmir Dal Lake houseboat mountains",
    rating: 4.9,
    duration: "6 Nights / 7 Days",
    tags: ["Mountains", "Wellness"],
    badge: null,
  },
]

// Premium Services
const premiumServices = [
  {
    id: 1,
    title: "Customized Holidays",
    description: "Bespoke travel plans that fulfill your wildest dreams. Your journey, your way.",
    icon: Sparkles,
  },
  {
    id: 2,
    title: "24/7 Travel Support",
    description: "Round-the-clock assistance throughout your journey for peace of mind.",
    icon: Clock,
  },
  {
    id: 3,
    title: "Group Tours",
    description: "Join like-minded travelers on expertly curated group adventures.",
    icon: Users,
  },
  {
    id: 4,
    title: "Visa Assistance",
    description: "Hassle-free visa documentation and processing services.",
    icon: Globe,
  },
]

// Testimonials
const testimonials = [
  {
    id: 1,
    name: "Anshika Malik",
    location: "Kerala, 10 Days with family",
    rating: 5,
    text: "I recently went on a trip with my husband to Kerala for 7 days. Global Tourist Centre helped us plan the whole trip so well that we didn't face any problems at any point during our trip!",
    avatar: "woman smiling professional portrait",
  },
  {
    id: 2,
    name: "Vishal Yadav",
    location: "Dubai, 5 Days honeymoon",
    rating: 5,
    text: "Amazing experience! The team at Global Tourist Centre made our honeymoon absolutely perfect. Every detail was taken care of and we could just enjoy ourselves.",
    avatar: "man professional portrait smiling",
  },
  {
    id: 3,
    name: "Priya Sharma",
    location: "Goa, Weekend getaway",
    rating: 5,
    text: "Best travel agency ever! They arranged everything from flights to hotels to local tours. The attention to detail was impressive.",
    avatar: "indian woman smiling portrait",
  },
]

// Travel Memories Gallery
const travelMemories = [
  { id: 1, imageQuery: "tourists group photo Taj Mahal" },
  { id: 2, imageQuery: "family vacation Kerala backwaters" },
  { id: 3, imageQuery: "couple honeymoon Goa beach sunset" },
  { id: 4, imageQuery: "group tour Rajasthan palace" },
  { id: 5, imageQuery: "adventure trip Himalaya trekking" },
]

export default function LandingPage() {
  const { t } = useI18n()
  const [activeServiceIndex, setActiveServiceIndex] = useState(0)
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0)
  const experiencesRef = useRef<HTMLDivElement>(null)
  const [showAllCollections, setShowAllCollections] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    destination: "",
  })

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert("Thank you! We'll contact you shortly with your personalized quote.")
    setFormData({ name: "", phone: "", destination: "" })
  }

  const scrollExperiences = (direction: "left" | "right") => {
    if (experiencesRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300
      experiencesRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  const nextService = () => {
    setActiveServiceIndex((prev) => (prev + 1) % premiumServices.length)
  }

  const prevService = () => {
    setActiveServiceIndex((prev) => (prev - 1 + premiumServices.length) % premiumServices.length)
  }

  const nextTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // On mobile: show 7 by default, all when expanded
  // On desktop: show all 7
  const displayedCollections = showAllCollections ? travelCollections : travelCollections.slice(0, 7)

  return (
    <div className="min-h-screen bg-background">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-form"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Skip to booking form
      </a>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-transparent" role="banner">
        <nav
          className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" aria-label="Global Tourist Centre - Home">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/90 flex items-center justify-center">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" aria-hidden="true" />
            </div>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8" role="menubar">
            <Link
              href="/"
              className="text-white/90 hover:text-white text-sm font-medium transition-colors"
              role="menuitem"
            >
              Home
            </Link>
            <Link
              href="/destinations"
              className="text-white/90 hover:text-white text-sm font-medium transition-colors"
              role="menuitem"
            >
              Destinations
            </Link>
            <Link
              href="/luxury-destinations"
              className="text-white/90 hover:text-white text-sm font-medium transition-colors px-3 py-1.5 bg-amber-500/80 rounded-md"
              role="menuitem"
            >
              Luxury Destinations
            </Link>
            <Link
              href="/about"
              className="text-white/90 hover:text-white text-sm font-medium transition-colors"
              role="menuitem"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-white/90 hover:text-white text-sm font-medium transition-colors"
              role="menuitem"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-white/90 hover:text-white text-sm font-medium transition-colors"
              role="menuitem"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="text-white/90 hover:text-white text-sm font-medium transition-colors"
              role="menuitem"
            >
              Blog
            </Link>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] sm:min-h-screen flex items-center" aria-labelledby="hero-heading">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="/luxury-travel-destination-mountains-sunset.jpg" alt="" className="w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50" />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20 sm:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Hero Content */}
            <div className="text-white">
              <h1
                id="hero-heading"
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-balance"
              >
                {t.hero.title.split(" ").slice(0, 1).join(" ")}{" "}
                <span className="text-amber-400">{t.hero.title.split(" ").slice(1, 2).join(" ")}</span>{" "}
                {t.hero.title.split(" ").slice(2).join(" ")}
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-6 sm:mb-8 max-w-xl text-pretty">{t.hero.tagline}</p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 sm:gap-4" role="list" aria-label="Trust badges">
                <div
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2"
                  role="listitem"
                >
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" aria-hidden="true" />
                  <span className="text-xs sm:text-sm">15+ Years Experience</span>
                </div>
                <div
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2"
                  role="listitem"
                >
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-amber-400" aria-hidden="true" />
                  <span className="text-xs sm:text-sm">4.9/5 Rating</span>
                </div>
                <div
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2"
                  role="listitem"
                >
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" aria-hidden="true" />
                  <span className="text-xs sm:text-sm">10,000+ Happy Travelers</span>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <Card
              id="main-form"
              className="bg-white/95 backdrop-blur-md shadow-2xl border-0 max-w-md mx-auto lg:mx-0 lg:ml-auto"
            >
              <CardContent className="p-5 sm:p-6 lg:p-8">
                <div className="text-center mb-5 sm:mb-6">
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-2">{t.hero.subtitle}</h2>
                  <p className="text-sm text-muted-foreground">Get personalized quotes within 24 hours</p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="lp-name" className="text-sm font-medium">
                      {t.form.name} <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="lp-name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-11"
                      aria-required="true"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="lp-phone" className="text-sm font-medium">
                      {t.form.phone} <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="lp-phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-11"
                      aria-required="true"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="lp-destination" className="text-sm font-medium">
                      {t.form.destination} <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={formData.destination}
                      onValueChange={(value) => setFormData({ ...formData, destination: value })}
                      required
                    >
                      <SelectTrigger id="lp-destination" className="h-11" aria-required="true">
                        <SelectValue placeholder="Select a destination" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="goa">Goa</SelectItem>
                        <SelectItem value="kerala">Kerala</SelectItem>
                        <SelectItem value="rajasthan">Rajasthan</SelectItem>
                        <SelectItem value="kashmir">Kashmir</SelectItem>
                        <SelectItem value="dubai">Dubai</SelectItem>
                        <SelectItem value="thailand">Thailand</SelectItem>
                        <SelectItem value="singapore">Singapore</SelectItem>
                        <SelectItem value="maldives">Maldives</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base font-semibold"
                    aria-label="Get free travel quote"
                  >
                    {t.hero.cta}
                    <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    {t.form.privacyNote}{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      {t.form.privacyPolicy}
                    </Link>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
          <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/70 rounded-full" />
          </div>
        </div>
      </section>

      <OfferBanner mode="inline" />

      {/* Signature Experiences Section */}
      <section
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-amber-50 to-white"
        aria-labelledby="experiences-heading"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2
              id="experiences-heading"
              className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4"
            >
              {t.experiences.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base text-pretty">
              {t.experiences.subtitle}
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scrollExperiences("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 hidden sm:flex"
              aria-label="Previous experiences"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </Button>

            <div
              ref={experiencesRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 px-2"
              role="list"
              aria-label="Signature travel experiences"
            >
              {signatureExperiences.map((exp) => (
                <div
                  key={exp.id}
                  className="flex-shrink-0 w-[200px] sm:w-[240px] lg:w-[280px] snap-center"
                  role="listitem"
                >
                  <div className="relative rounded-xl overflow-hidden group cursor-pointer aspect-[3/4]">
                    <img
                      src={`/.jpg?height=400&width=300&query=${encodeURIComponent(exp.imageQuery)}`}
                      alt={`${exp.title} travel destination`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    {exp.popular && (
                      <Badge className="absolute top-3 right-3 bg-amber-400 text-amber-950">Popular</Badge>
                    )}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-base sm:text-lg mb-2">{exp.title}</h3>
                      <Button
                        size="sm"
                        className="bg-primary/90 hover:bg-primary text-primary-foreground text-xs sm:text-sm"
                        aria-label={`Explore ${exp.title} tours`}
                      >
                        {t.experiences.explore}
                        <Play className="w-3 h-3 ml-1.5" aria-hidden="true" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => scrollExperiences("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 hidden sm:flex"
              aria-label="Next experiences"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      {/* Curated Travel Collections - Shows 7 collections with View More on mobile */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50" aria-labelledby="collections-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2
              id="collections-heading"
              className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4"
            >
              {t.collections.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base text-pretty">
              {t.collections.subtitle}
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            role="list"
            aria-label="Travel package collections"
          >
            {displayedCollections.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden group hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-primary"
                role="listitem"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={`/.jpg?height=300&width=400&query=${encodeURIComponent(item.imageQuery)}`}
                    alt={`${item.title} travel package`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.badge && (
                    <Badge
                      variant={item.badge === "new" ? "default" : "destructive"}
                      className="absolute top-2 right-2 sm:top-3 sm:right-3"
                    >
                      {item.badge === "new" ? t.collections.new : t.collections.hot}
                    </Badge>
                  )}
                </div>
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-start justify-between gap-2 mb-1.5 sm:mb-2">
                    <h3 className="font-serif font-semibold text-card-foreground text-sm sm:text-base leading-tight">
                      {item.title}
                    </h3>
                    <div
                      className="flex items-center gap-0.5 sm:gap-1 shrink-0"
                      role="img"
                      aria-label={`Rating: ${item.rating} out of 5 stars`}
                    >
                      <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-500 fill-yellow-500" aria-hidden="true" />
                      <span className="text-xs sm:text-sm font-medium">{item.rating}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2 mb-2 sm:mb-3">
                    {item.description}
                  </p>
                  {item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-2 sm:mb-3" role="list" aria-label="Tour features">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-1.5 sm:px-2 py-0.5 bg-muted text-muted-foreground text-[10px] sm:text-xs rounded"
                          role="listitem"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs text-primary font-medium">{item.duration}</span>
                    <Button
                      variant="link"
                      size="sm"
                      className="text-xs sm:text-sm h-auto p-0 font-medium"
                      aria-label={`View details about ${item.title}`}
                    >
                      {t.destinations.viewDetails} →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 text-center md:hidden">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 font-semibold bg-transparent"
              onClick={() => setShowAllCollections(!showAllCollections)}
              aria-expanded={showAllCollections}
              aria-controls="collections-grid"
            >
              {showAllCollections ? "Show Less" : "View More Destinations"}
              <ArrowRight className={`w-4 h-4 ml-2 transition-transform ${showAllCollections ? "rotate-90" : ""}`} />
            </Button>
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white" aria-labelledby="services-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2
              id="services-heading"
              className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4"
            >
              {t.premiumServices.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base text-pretty">
              {t.premiumServices.subtitle}
            </p>
          </div>

          {/* Services Carousel */}
          <div className="relative max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevService}
                className="shrink-0 rounded-full bg-transparent"
                aria-label="Previous service"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </Button>

              <Card className="flex-1 text-center p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-slate-50 to-white">
                <CardContent className="p-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    {(() => {
                      const IconComponent = premiumServices[activeServiceIndex].icon
                      return <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-primary" aria-hidden="true" />
                    })()}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                    {premiumServices[activeServiceIndex].title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6">
                    {premiumServices[activeServiceIndex].description}
                  </p>
                  <Button
                    className="bg-primary hover:bg-primary/90"
                    aria-label={`Learn more about ${premiumServices[activeServiceIndex].title}`}
                  >
                    Explore
                    <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                  </Button>
                </CardContent>
              </Card>

              <Button
                variant="outline"
                size="icon"
                onClick={nextService}
                className="shrink-0 rounded-full bg-transparent"
                aria-label="Next service"
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </Button>
            </div>

            {/* Service pagination dots */}
            <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Services pagination">
              {premiumServices.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveServiceIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === activeServiceIndex ? "bg-primary w-6" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  role="tab"
                  aria-selected={index === activeServiceIndex}
                  aria-label={`View service ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50" aria-labelledby="testimonials-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2
              id="testimonials-heading"
              className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4"
            >
              {t.testimonials.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base text-pretty">
              {t.testimonials.subtitle}
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative max-w-3xl mx-auto">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="shrink-0 rounded-full bg-transparent hidden sm:flex"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </Button>

              <Card className="flex-1 p-6 sm:p-8 lg:p-10 text-center">
                <CardContent className="p-0">
                  {/* Star Rating */}
                  <div className="flex justify-center gap-1 mb-4" aria-label={`5 out of 5 stars`}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" aria-hidden="true" />
                    ))}
                  </div>

                  {/* Quote */}
                  <Quote className="w-10 h-10 text-primary/20 mx-auto mb-4" aria-hidden="true" />

                  <blockquote className="text-foreground text-base sm:text-lg italic mb-6 text-pretty">
                    "{testimonials[activeTestimonialIndex].text}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mb-3">
                      <img
                        src={`/.jpg?height=48&width=48&query=${encodeURIComponent(testimonials[activeTestimonialIndex].avatar)}`}
                        alt={testimonials[activeTestimonialIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <cite className="not-italic">
                      <span className="font-semibold text-foreground block">
                        {testimonials[activeTestimonialIndex].name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {testimonials[activeTestimonialIndex].location}
                      </span>
                    </cite>
                  </div>
                </CardContent>
              </Card>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="shrink-0 rounded-full bg-transparent hidden sm:flex"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </Button>
            </div>

            {/* Mobile navigation buttons */}
            <div className="flex justify-center gap-4 mt-4 sm:hidden">
              <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Testimonial pagination dots */}
            <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Testimonials pagination">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonialIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === activeTestimonialIndex ? "bg-primary w-6" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  role="tab"
                  aria-selected={index === activeTestimonialIndex}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Travel Memories Gallery */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white" aria-labelledby="memories-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2
              id="memories-heading"
              className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4"
            >
              {t.memories.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base text-pretty">
              {t.memories.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4" role="list">
            {travelMemories.map((memory) => (
              <div
                key={memory.id}
                className="aspect-square rounded-xl overflow-hidden group cursor-pointer"
                role="listitem"
              >
                <img
                  src={`/.jpg?height=200&width=200&query=${encodeURIComponent(memory.imageQuery)}`}
                  alt="Travel memory"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2332] text-white py-12 sm:py-16" role="contentinfo">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div>
              <Link href="/" className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary-foreground" />
                </div>
              </Link>
              <p className="text-gray-400 text-sm mb-4">
                Weaving your dreams into unforgettable adventures since 2010. Your trusted travel partner for bespoke
                domestic and international tours.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Contact us on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-serif font-semibold text-lg mb-4">{t.footer.quickLinks}</h3>
              <nav aria-label="Footer navigation">
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                      {t.nav.home}
                    </Link>
                  </li>
                  <li>
                    <Link href="/destinations" className="text-gray-400 hover:text-white text-sm transition-colors">
                      {t.nav.destinations}
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                      {t.nav.about}
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-gray-400 hover:text-white text-sm transition-colors">
                      {t.nav.services}
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                      {t.nav.contact}
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-gray-400 hover:text-white text-sm transition-colors">
                      {t.nav.blog}
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Popular Tours */}
            <div>
              <h3 className="font-serif font-semibold text-lg mb-4">{t.footer.popularTours}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {t.footer.goaBeachEscape}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {t.footer.exploreSikkim}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {t.footer.keralaBackwaters}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-serif font-semibold text-lg mb-4">{t.footer.contactUs}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-gray-400 text-sm">
                    Ground Floor, 1492, 3GF5-7, Benaulim Beach Road, Goa 403716, India
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                  <a href="tel:+918421012788" className="text-gray-400 hover:text-white text-sm transition-colors">
                    +91 8421012788
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                  <a
                    href="mailto:info@globaltouristcentre.com"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    info@globaltouristcentre.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>{t.footer.copyright}</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-white transition-colors">
                {t.footer.privacyPolicy}
              </Link>
              <span>|</span>
              <Link href="/terms" className="hover:text-white transition-colors">
                {t.footer.termsOfUse}
              </Link>
            </div>
            <p className="hidden lg:block">{t.footer.tagline}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
