"use client"

import type React from "react"

import { useState, useRef ,useEffect} from "react"
import Link from "next/link"
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Facebook,
  Hotel,
  FileText,
  Plane,
  ArrowRight,
  Quote,
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useI18n } from "@/lib/i18n/context"
import { OfferBanner } from "@/components/offer-banner"
import TourCard from "@/components/TourCard"

// Signature Experiences Data
export const signatureExperiences = [
  {
    id: 1,
    title: "Palolem, Cola – Dolphin Spotting",
    imageUrl: "/destinations/Thumbnails/Palolem.webp",
    duration: "Full Day Tour",
    highlight: "Dolphin Watching",
    price: "$70",
    description:
      "Experience dolphin watching in the Arabian Sea and explore the pristine beaches of Palolem and Cola.",
    link: "https://globaltouristcentre.com/itinerary/day-trips/South-Goa-1-Day-Trip-package",
    popular: true,
  },
  {
    id: 2,
    title: "Mumbai – City of Lights",
    imageUrl: "/destinations/Thumbnails/mumbai.webp",
    duration: "Full Day Tour",
    highlight: "City Tour",
    price: "$360",
    description:
      "Full day Mumbai tour from Goa including airfare, Gateway of India, Taj Mahal Palace, Marine Drive, and cultural sites.",
    link: "https://globaltouristcentre.com/itinerary/day-trips/Mumbai-day-trip-package",
    popular: true,
  },
  {
    id: 3,
    title: "Taj Mahal Trip",
    imageUrl: "/destinations/Thumbnails/agra.webp",
    duration: "1 Night / 2 Days",
    highlight: "World Wonder",
    price: "$300",
    description:
      "Visit the iconic Taj Mahal, one of the Seven Wonders of the World, with guided tours and cultural experiences.",
    link: "https://globaltouristcentre.com/itinerary/domestic-trips/Delhi-Agra-1N-2D-Trip-Package",
    popular: true,
  },
  {
    id: 4,
    title: "Hampi & Badami Tour",
    imageUrl: "/destinations/Thumbnails/Hampi.webp",
    duration: "1 Night / 2 Days",
    highlight: "UNESCO Heritage",
    price: "$170",
    description:
      "Explore UNESCO World Heritage Sites, ancient temples, and Karnataka's heritage from Goa.",
    link: "https://globaltouristcentre.com/itinerary/domestic-trips/Hampi-1N-2D-Trip-Package",
    popular: false,
  },
]


export const travelCollections =[
  {
    id: 1,
    category: "domestic",
    imageUrl: "/destinations/Thumbnails/South-Goa-Cultural.webp",
    title: "South Goa – Cultural Goa",
    price: "$80",
    duration: "Full Day Tour",
    description:
      "Full-day cultural tour exploring Old Goa churches, Hindu temples, Miramar Beach, Dona Paula, and Panjim Market.",
    tags: ["Cultural", "UNESCO", "Heritage"],
    link: "https://globaltouristcentre.com/itinerary/day-trips/South-Goa-1-Day-Cultural-and-Beach-Tour-package",
  },
  {
    id: 2,
    category: "luxury",
    imageUrl: "/destinations/Thumbnails/Yacht-goa.webp",
    title: "Luxury Yacht Tour Goa",
    price: "Premium",
    duration: "6 Hours",
    description:
      "Premium 6-hour luxury yacht experience with infinity pool, live DJ, gourmet dinner, and sunset cruise in Goa.",
    tags: ["Luxury", "Yacht", "Premium"],
    link: "https://globaltouristcentre.com/itinerary/day-trips/luxury-yacht-tour-goa",
  },
  {
    id: 3,
    category: "luxury",
    imageUrl: "/destinations/Thumbnails/Cabo-Serai.webp",
    title: "Goa Luxury Serai Cabo",
    price: "$370",
    duration: "Custom Stay",
    description:
      "Experience ultimate luxury at Serai Cabo with private villas, world-class amenities, and personalized services.",
    tags: ["Luxury", "Resort", "5-Star"],
    link: "https://globaltouristcentre.com/itinerary/domestic-trips/Cabo-Serai-2N-3D-Luxury-Getaway",
  },
  {
    id: 4,
    category: "domestic",
    imageUrl: "/destinations/Thumbnails/Andaman.webp",
    title: "Andaman Islands",
    price: "$970",
    duration: "5–7 Days",
    description:
      "Discover pristine beaches, crystal waters, and exotic marine life in India's tropical paradise.",
    tags: ["Islands", "Beaches", "Marine Life"],
    link: "https://globaltouristcentre.com/itinerary/domestic-trips/andaman-tour-for-goa",
  },
  {
    id: 5,
    category: "domestic",
    imageUrl: "/destinations/Thumbnails/Goa2.webp",
    title: "North Goa – Portuguese Goa",
    price: "$50",
    duration: "Full Day Tour",
    description:
      "Full day North Goa tour covering Calangute, Baga, Anjuna beaches, Aguada Fort, and Portuguese churches.",
    tags: ["Beaches", "Portuguese", "Cultural"],
    link: "https://globaltouristcentre.com/itinerary/day-trips/north-goa-english-tour",
  },
  {
    id: 6,
    category: "domestic",
    imageUrl: "/destinations/Thumbnails/Dudhsagar.webp",
    title: "Dudhsagar & Spice Plantation",
    price: "$55",
    duration: "Full Day Tour",
    description:
      "Visit the majestic Dudhsagar Waterfalls and explore aromatic spice plantations with guided tours.",
    tags: ["Waterfalls", "Spices", "Nature"],
    link: "https://globaltouristcentre.com/itinerary/day-trips/Dudhsagar-and-Spice-Plantation-Day-Trip-package",
  },
  {
    id: 7,
    category: "domestic",
    imageUrl: "/destinations/Thumbnails/elephant-safari.webp",
    title: "Elephant & Tiger Safari – Dandeli",
    price: "$100",
    duration: "1 Night / 2 Days",
    description:
      "Wildlife adventure in Dandeli with elephant interaction and tiger safari in natural reserves.",
    tags: ["Wildlife", "Safari", "Adventure"],
    link: "https://globaltouristcentre.com/itinerary/domestic-trips/dandeli-elephant-tiger-safari-from-goa",
  },
  {
    id: 8,
    category: "domestic",
    imageUrl: "/destinations/Thumbnails/Gokarna.webp",
    title: "Gokarna and Murdeshwar",
    price: "$70",
    duration: "Full Day Tour",
    description:
      "Pilgrimage and beach tour to Gokarna's temples and Murdeshwar's Shiva statue and beaches.",
    tags: ["Spiritual", "Beaches", "Temples"],
    link: "https://globaltouristcentre.com/itinerary/day-trips/Gokarna-Murdeshwar-one-day-trip-package",
  },
  {
    id: 9,
    category: "domestic",
    imageUrl: "/destinations/Thumbnails/GoldenTriangle.webp",
    title: "Golden Triangle Trip 3N/4D",
    price: "$370",
    duration: "3 Nights / 4 Days",
    description:
      "Discover India's iconic heritage with Delhi, Agra, and Jaipur. Experience magnificent forts, palaces, and the Taj Mahal.",
    tags: ["Heritage", "Taj Mahal", "Cultural"],
    link: "https://globaltouristcentre.com/itinerary/domestic-trips/golden-triangle-trip-3n4d",
  },
  {
    id: 10,
    category: "spiritual",
    imageUrl: "/destinations/Thumbnails/varanasi.webp",
    title: "Varanasi Trip 2N/3D",
    price: "$500",
    duration: "2 Nights / 3 Days",
    description:
      "Spiritual journey to Varanasi including Sarnath, Ganga Aarti, temple tours, boat ride on Ganges. Flight included.",
    tags: ["Spiritual", "Pilgrimage", "Ganga Aarti"],
    link: "https://globaltouristcentre.com/itinerary/domestic-trips/varanasi-2n3d-trip",
  },
  {
    id: 11,
    category: "domestic",
    imageUrl: "/hero/Jodhpur-Udaipur-hero.webp",
    title: "Jodhpur & Udaipur 4N/5D",
    price: "$550",
    duration: "4 Nights / 5 Days",
    description:
      "Explore Jodhpur & Udaipur with guided tours of Mehrangarh Fort, City Palace, Lake Pichola, and cultural experiences.",
    tags: ["Rajasthan", "Palaces", "Cultural"],
    link: "https://globaltouristcentre.com/itinerary/domestic-trips/jodhpur-udaipur-trip-4n5d",
  },
  {
    id: 12,
    category: "domestic",
    imageUrl: "/hero/Amritsar-hero.webp",
    title: "Amritsar Trip 2N/3D",
    price: "$450",
    duration: "2 Nights / 3 Days",
    description:
      "Spiritual journey to the Golden Temple, Wagah Border ceremony, Jallianwala Bagh, and Amritsar's rich cultural heritage.",
    tags: ["Spiritual", "Cultural", "Historical"],
    link: "https://globaltouristcentre.com/itinerary/domestic-trips/amritsar-trip-2n3d-from-goa",
  },
];
// Premium Services
const premiumServices = [
  {
    id: 1,
    title: "Customized Holidays",
    description: "Bespoke travel plans that fulfill your wildest dreams. Your journey, your way.",
    icon: Sparkles,
    link:"https://globaltouristcentre.com/service/hotel-booking"
  },
  {
    id: 2,
    title: "Luxury Accommodation",
    description: "Access to premium hotels, resorts, and unique stays with exclusive benefits and best rates guaranteed.",
    icon: Hotel,
    link:"https://globaltouristcentre.com/service/hotel-booking"
  },
  {
    id: 3,
    title: "Group Tours",
    description: "Join like-minded travelers on expertly curated group adventures.",
    icon: Users,
    link:"https://globaltouristcentre.com/service/hotel-booking"
  },
  {
    id: 4,
    title: "Visa Assistance",
    description: "Hassle-free visa documentation and processing services.",
    icon: FileText,
    link:"https://globaltouristcentre.com/service/hotel-booking"
  },
  {
    id: 5,
    title: "Flight Bookings",
    description: "Competitive airfares on domestic and international routes with flexible booking options",
    icon: Plane,
    link:"https://globaltouristcentre.com/service/hotel-booking"
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
  { id: 1, imageQuery: "tourists group photo Taj Mahal", imageurl: "/trips/trip9.webp" },
  { id: 2, imageQuery: "female tourist at a temple", imageurl: "/trips/trip6.webp" },
  { id: 3, imageQuery: "couple honeymoon trip", imageurl: "/trips/trip5.webp" },
  { id: 4, imageQuery: "group tour Rajasthan palace", imageurl: "/trips/trip10.webp" },
  { id: 5, imageQuery: "tourist couple at a temple", imageurl: "/trips/trip8.webp" },
]


function formatWhatsAppMessage(
  title: string,
  data: { label: string; value: string }[]
) {
  const lines = [`*${title}*`];

  data.forEach((item) => {
    if (item.value) {
      lines.push(`${item.label}: ${item.value}`);
    } else {
      lines.push(item.label);
    }
  });

  return encodeURIComponent(lines.join("\n"));
}

const DESTINATION_MAP: Record<string, string> = {
  "all-goa-one-day": "ALL GOA IN ONE DAY",
  "palolem-cola-dolphin": "PALOLEM COLA – DOLPHIN",
  "mumbai-one-day": "MUMBAI 1 DAY",
  "taj-mahal-1n2d": "TAJ MAHAL 1N2D",
  "hampi-badami-1n2d": "HAMPI BADAMI 1N2D",
}



export default function LandingPage() {
  const { t } = useI18n()
  const [activeServiceIndex, setActiveServiceIndex] = useState(0)
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0)
  const experiencesRef = useRef<HTMLDivElement>(null)
  const [showAllCollections, setShowAllCollections] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const [activeMemoryIndex, setActiveMemoryIndex] = useState(0)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const collectionsRef = useRef<HTMLDivElement>(null);

  


useEffect(() => {
  const mediaQuery = window.matchMedia("(min-width: 1024px)")
  setIsDesktop(mediaQuery.matches)

  const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
  mediaQuery.addEventListener("change", handler)

  return () => mediaQuery.removeEventListener("change", handler)
}, [])



  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, destination } = formData;

    // Validation (same intent as old code)
    if (!name.trim() || !email.trim()) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    const destinationText =
      DESTINATION_MAP[destination] || destination || "Not specified";

    const messageData = [
      { label: "\n*CONTACT INFORMATION*", value: "" },
      { label: "Name", value: name },
      { label: "Email", value: email },
      phone ? { label: " Phone", value: phone } : null,
      { label: "Destination Interest", value: destinationText },
    ].filter(Boolean) as { label: string; value: string }[];

    const whatsappMessage = formatWhatsAppMessage(
      "TRAVEL INQUIRY",
      messageData
    );

    const whatsappNumber = "919067972295";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Match old delay + UX
    setTimeout(() => {
      window.open(whatsappURL, "_blank");

      setShowSuccess(true);
      setIsSubmitting(false);

      setFormData({
        name: "",
        email: "",
        phone: "",
        destination: "",
      });

      // Auto-hide success message
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1000);
  };


  const scrollExperiences = (direction: "left" | "right") => {
    if (experiencesRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300
      experiencesRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }
const scrollCollections = (direction: "left" | "right") => {
  if (collectionsRef.current) {
    const scrollAmount = 300;
    const newScrollLeft =
      collectionsRef.current.scrollLeft +
      (direction === "left" ? -scrollAmount : scrollAmount);
    collectionsRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  }
};
  const nextService = () => {
    setActiveServiceIndex((prev) => (prev + 1) % premiumServices.length)
  }

  const prevService = () => {
    setActiveServiceIndex((prev) => (prev - 1 + premiumServices.length) % premiumServices.length)
  }


const nextMemory = () => {
  setActiveMemoryIndex((prev) =>
    prev === travelMemories.length - 1 ? 0 : prev + 1
  )
}

const prevMemory = () => {
  setActiveMemoryIndex((prev) =>
    prev === 0 ? travelMemories.length - 1 : prev - 1
  )
}

  useEffect(() => {
  const interval = setInterval(() => {
    setActiveServiceIndex((prev) =>
      prev === premiumServices.length - 1 ? 0 : prev + 1
    )
  }, 5000) // 5 seconds

  return () => clearInterval(interval)
}, [])


  const nextTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // On mobile: show 7 by default, all when expanded
  // On desktop: show all 7
const displayedCollections = isDesktop
  ? travelCollections
  : showAllCollections
    ? travelCollections
    : travelCollections.slice(0, 7)

  return (
    <div className=" bg-background">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-form"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Skip to booking form
      </a>

      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center"
        aria-labelledby="hero-heading"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/luxury-travel-destination-mountains-sunset.jpg"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50" />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20 sm:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Hero Content */}
            <div className="text-white">
              <h1
                id="hero-heading"
                className=" font-serif
  text-3xl sm:text-4xl md:text-5xl lg:text-6xl
  font-bold leading-tight text-balance
  mt-6 sm:mt-2
  mb-4 sm:mb-3"
              >
                {t.hero.title.split(" ").slice(0, 1).join(" ")}{" "}
                <span className="text-amber-400">
                  {t.hero.title.split(" ").slice(1, 2).join(" ")}
                </span>{" "}
                {t.hero.title.split(" ").slice(2).join(" ")}
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-6 sm:mb-8 max-w-xl text-pretty">
                {t.hero.tagline}
              </p>

              {/* Trust Badges */}
              <div
                className="flex flex-wrap gap-3 sm:gap-4"
                role="list"
                aria-label="Trust badges"
              >
                <div
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2"
                  role="listitem"
                >
                  <Shield
                    className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400"
                    aria-hidden="true"
                  />
                  <span className="text-xs sm:text-sm">
                    15+ Years Experience
                  </span>
                </div>
                <div
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2"
                  role="listitem"
                >
                  <Star
                    className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-amber-400"
                    aria-hidden="true"
                  />
                  <span className="text-xs sm:text-sm">4.9/5 Rating</span>
                </div>
                <div
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2"
                  role="listitem"
                >
                  <Heart
                    className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400"
                    aria-hidden="true"
                  />
                  <span className="text-xs sm:text-sm">
                    10,000+ Happy Travelers
                  </span>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <Card
              id="main-form"
              className="bg-white/95 backdrop-blur-md shadow-2xl border-0 max-w-md mx-auto lg:mx-0 lg:ml-auto"
            >
              <CardContent className="p-5 sm:p-6 lg:p-8">
                <div className="text-center mb-5 sm:mb-6 sm:mt-0.5">
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-2">
                    {t.hero.subtitle}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Get personalized quotes within 24 hours
                  </p>
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
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
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
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                      className="h-11"
                      aria-required="true"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="lp-phone" className="text-sm font-medium">
                      {t.form.email} <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="lp-phone"
                      type="tel"
                      placeholder="johndoe@exmaple.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="h-11"
                      aria-required="true"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="lp-destination"
                      className="text-sm font-medium"
                    >
                      {t.form.destination}{" "}
                      <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={formData.destination}
                      onValueChange={(value) =>
                        setFormData({ ...formData, destination: value })
                      }
                      required
                    >
                      <SelectTrigger
                        id="lp-destination"
                        className="h-11"
                        aria-required="true"
                      >
                        <SelectValue placeholder="Select a destination" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-goa-one-day">
                          ALL GOA IN ONE DAY
                        </SelectItem>
                        <SelectItem value="palolem-cola-dolphin">
                          PALOLEM COLA - DOLPHIN
                        </SelectItem>
                        <SelectItem value="mumbai-one-day">
                          MUMBAI 1 DAY
                        </SelectItem>
                        <SelectItem value="taj-mahal-1n2d">
                          TAJ MAHAL 1N2D
                        </SelectItem>
                        <SelectItem value="hampi-badami-1n2d">
                          HAMPI BADAMI 1N2D
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="
    w-full h-12 text-base font-semibold
    bg-primary text-primary-foreground
    hover:bg-primary/90 focus:bg-primary/90
    transition-all duration-300
    disabled:opacity-60 disabled:cursor-not-allowed
    flex items-center justify-center gap-2
  "
                    aria-label="Get free travel quote"
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin h-4 w-4 rounded-full border-2 border-white/40 border-t-white" />
                        Sending…
                      </>
                    ) : (
                      <>
                        {t.hero.cta}
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center mt-3">
                    {t.form.privacyNote}{" "}
                    <Link
                      href="/privacy"
                      className="text-primary hover:underline focus:underline"
                    >
                      {t.form.privacyPolicy}
                    </Link>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          aria-hidden="true"
          className="
    absolute
    left-1/2 -translate-x-1/2
    bottom-10 sm:bottom-8
    md:bottom-10
    lg:bottom-8
    pointer-events-none
  "
        >
          <div
            className="
      relative
      w-9 h-14
      rounded-full
      border border-white/40
      bg-white/5 backdrop-blur-sm
      flex items-start justify-center
      p-2
      animate-pulse
    "
          >
            <span
              className="
        block
        w-1 h-3
        rounded-full
        bg-white/80
        animate-[scroll_1.6s_ease-in-out_infinite]
      "
            />
          </div>
        </div>
      </section>

      <OfferBanner
        offerText="Free Airport Pickup With Every Tour"
        linkText="Book Now"
        linkHref="/book-tour"
        daysUntilExpiry={1}
        mode="sticky"
      />

      {/* Signature Experiences Section */}
      <section
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-amber-50 to-white"
        aria-labelledby="experiences-heading"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2
              id="experiences-heading"
              className="relative font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 pb-3"
            >
              {t.experiences.title}

              <span
                aria-hidden="true"
                className="absolute left-1/2 bottom-0 h-[3px] w-20 -translate-x-1/2 rounded-full
               bg-gradient-to-r from-[#ff6b6b] via-[#f8d56b] to-[#0d9488]"
              />
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base text-pretty">
              {t.experiences.subtitle}
            </p>
          </div>

          {/* Mobile: Column Layout */}
          <div className="flex flex-col gap-6 sm:hidden">
            {signatureExperiences.map((exp) => (
              <div key={exp.id} role="listitem">
                <div
                  className="
                    relative h-[320px] rounded-[15px] overflow-hidden
                    bg-white shadow-lg
                    transition-all duration-500 ease-out
                    active:-translate-y-2.5 active:shadow-2xl
                    group cursor-pointer
                  "
                >
                  {/* Image */}
                  <img
                    src={exp.imageUrl}
                    alt={`${exp.title} travel destination`}
                    className="
                      w-full h-full object-cover
                      transition-transform duration-700 ease-out
                      group-active:scale-110
                    "
                  />

                  {/* Gradient overlay */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute inset-0 z-10
                      bg-gradient-to-t
                      from-black/80 via-black/40 to-transparent
                    "
                  />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 w-full p-5 z-20 text-white">
                    {/* Title */}
                    <h3 className="font-serif text-[1.15rem] leading-tight mb-1">
                      {exp.title}
                    </h3>

                    {/* Details */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.75rem] opacity-90 mb-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {exp.duration}
                      </span>

                      {exp.highlight && (
                        <span className="flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5" />
                          {exp.highlight}
                        </span>
                      )}

                      <span className="flex items-center gap-1 bg-white/20 px-2 py-[2px] rounded-full text-[0.8rem] border border-white/30">
                        {exp.price}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-white/90 text-[0.8rem] leading-snug line-clamp-2 mb-3">
                      {exp.description}
                    </p>

                    {/* Button */}
                    <a
                      href={exp.link}
                      className="
                        inline-flex items-center gap-2
                        px-4 py-2 rounded-full
                        text-[0.85rem] font-semibold
                        bg-white/20 backdrop-blur-md
                        border border-white/30
                        transition-all duration-300
                        active:bg-white active:text-slate-900
                        active:translate-x-1
                      "
                      aria-label={`Explore ${exp.title}`}
                    >
                      {t.experiences.explore}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop/Tablet: Carousel */}
          <div className="relative hidden sm:block">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scrollExperiences("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 focus:bg-gray-50"
              aria-label="Previous experiences"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </Button>

            <div
              ref={experiencesRef}
              className="
                flex gap-6 sm:gap-8
                overflow-x-auto scrollbar-hide
                snap-x snap-mandatory
                pb-6
                px-6 lg:px-8
              "
              role="list"
              aria-label="Signature travel experiences"
            >
              {signatureExperiences.map((exp) => (
                <div
                  key={exp.id}
                  className="flex-shrink-0 w-[300px] lg:w-[340px] snap-start"
                  role="listitem"
                >
                  <div
                    className="
                      relative h-[320px] rounded-[15px] overflow-hidden
                      bg-white shadow-lg
                      transition-all duration-500 ease-out
                      hover:-translate-y-2.5 hover:shadow-2xl
                      focus:-translate-y-2.5 focus:shadow-2xl
                      group cursor-pointer
                    "
                  >
                    {/* Image */}
                    <img
                      src={exp.imageUrl}
                      alt={`${exp.title} travel destination`}
                      className="
                        w-full h-full object-cover
                        transition-transform duration-700 ease-out
                        group-hover:scale-110
                        group-active:scale-110
                      "
                    />

                    {/* Gradient overlay */}
                    <div
                      aria-hidden="true"
                      className="
                        absolute inset-0 z-10
                        bg-gradient-to-t
                        from-black/80 via-black/40 to-transparent
                      "
                    />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 w-full p-5 z-20 text-white">
                      {/* Title */}
                      <h3 className="font-serif text-[1.15rem] sm:text-[1.3rem] leading-tight mb-1">
                        {exp.title}
                      </h3>

                      {/* Details */}
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.75rem] opacity-90 mb-2">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {exp.duration}
                        </span>

                        {exp.highlight && (
                          <span className="flex items-center gap-1">
                            <Sparkles className="w-3.5 h-3.5" />
                            {exp.highlight}
                          </span>
                        )}

                        <span className="flex items-center gap-1 bg-white/20 px-2 py-[2px] rounded-full text-[0.8rem] border border-white/30">
                          {exp.price}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-white/90 text-[0.8rem] leading-snug line-clamp-2 mb-3">
                        {exp.description}
                      </p>

                      {/* Button */}
                      <a
                        href={exp.link}
                        className="
                          inline-flex items-center gap-2
                          px-4 py-2 rounded-full
                          text-[0.85rem] font-semibold
                          bg-white/20 backdrop-blur-md
                          border border-white/30
                          transition-all duration-300
                          hover:bg-white hover:text-slate-900
                          hover:translate-x-1
                          focus:bg-white focus:text-slate-900
                          focus:translate-x-1
                        "
                        aria-label={`Explore ${exp.title}`}
                      >
                        {t.experiences.explore}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => scrollExperiences("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 active:bg-gray-50"
              aria-label="Next experiences"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      {/* Curated Travel Collections - Shows 8 collections with View More */}
      <section
        className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#111827] to-[#1f2937]"
        aria-labelledby="collections-heading"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-100"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%230d9488' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2
              id="collections-heading"
              className="font-serif text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4"
            >
              {t.collections.title}
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base text-pretty">
              {t.collections.subtitle}
            </p>
          </div>

          {/* Mobile: Carousel with Swipe */}
          <div className="md:hidden">
            <div
              ref={collectionsRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
              role="list"
              aria-label="Travel package collections"
            >
              {(showAllCollections
                ? displayedCollections
                : displayedCollections.slice(0, 6)
              ).map((tour) => (
                <div
                  key={tour.id}
                  className="flex-shrink-0 w-[85vw] max-w-[340px] snap-start"
                  role="listitem"
                >
                  <TourCard
                    imageUrl={tour.imageUrl}
                    title={tour.title}
                    price={tour.price}
                    duration={tour.duration}
                    description={tour.description}
                    features={tour.tags}
                    href={tour.link}
                    category={tour.category}
                  />
                </div>
              ))}

              {/* View More/Less Card at the end */}
              {displayedCollections.length > 6 && (
                <div className="flex-shrink-0 w-[85vw] max-w-[340px] snap-start">
                  <div className="h-full min-h-[400px] rounded-2xl bg-gradient-to-br from-[#f8d56b]/20 to-[#0d9488]/20 backdrop-blur-sm border-2 border-white/20 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-6">
                      <ArrowRight className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-serif text-2xl text-white font-bold mb-3">
                      {showAllCollections ? "That's All!" : "Discover More"}
                    </h3>
                    <p className="text-white/80 text-sm mb-6">
                      {showAllCollections
                        ? "You've seen all our amazing destinations"
                        : "Explore our complete collection of amazing destinations"}
                    </p>
                    <Button
                      size="lg"
                      className="rounded-full px-8 font-semibold bg-white text-slate-900 hover:bg-white/90"
                      onClick={() => setShowAllCollections(!showAllCollections)}
                    >
                      {showAllCollections
                        ? "Show Less"
                        : "View All Destinations"}
                      <ArrowRight
                        className={`w-4 h-4 ml-2 transition-transform ${
                          showAllCollections ? "rotate-180" : ""
                        }`}
                      />
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Swipe Indicator */}
            <div className="flex items-center justify-center gap-2 mt-4 text-white/60 text-sm">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span>Swipe to explore more</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>

          {/* Desktop: Grid - 4 columns, shows 8 cards */}
          <div className="hidden md:block">
            <div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              role="list"
              aria-label="Travel package collections"
            >
              {(showAllCollections
                ? displayedCollections
                : displayedCollections.slice(0, 8)
              ).map((tour) => (
                <TourCard
                  key={tour.id}
                  imageUrl={tour.imageUrl}
                  title={tour.title}
                  price={tour.price}
                  duration={tour.duration}
                  description={tour.description}
                  features={tour.tags}
                  href={tour.link}
                  category={tour.category}
                />
              ))}
            </div>

            {displayedCollections.length > 8 && (
              <div className="mt-8 text-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 font-semibold bg-transparent text-white border-white/30 hover:bg-white/10"
                  onClick={() => setShowAllCollections(!showAllCollections)}
                  aria-expanded={showAllCollections}
                >
                  {showAllCollections ? "Show Less" : "View More Destinations"}
                  <ArrowRight
                    className={`w-4 h-4 ml-2 transition-transform ${
                      showAllCollections ? "rotate-90" : ""
                    }`}
                  />
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
<section
        className="py-12 sm:py-16 lg:py-20 bg-white"
        aria-labelledby="services-heading"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2
              id="services-heading"
              className="relative font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 pb-3"
            >
              {t.premiumServices.title}
              <span
                aria-hidden="true"
                className="absolute left-1/2 bottom-0 h-[3px] w-20 -translate-x-1/2 rounded-full
               bg-gradient-to-r from-[#ff6b6b] via-[#f8d56b] to-[#0d9488]"
              />
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base text-pretty">
              {t.premiumServices.subtitle}
            </p>
          </div>
          {/* Services Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 sm:gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevService}
                className="shrink-0 rounded-full bg-white shadow-md hover:shadow-lg focus:shadow-lg hidden sm:flex"
                aria-label="Previous service"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </Button>
              <Card
                key={activeServiceIndex}
                className="
                  flex-1 max-w-[500px] mx-auto
                  w-full
                  h-[480px] sm:h-[450px]
                  flex flex-col items-center text-center
                  p-6 sm:p-8
                  bg-white
                  rounded-2xl
                  shadow-lg
                  transition-all duration-500 ease-out
                  hover:-translate-y-2 hover:shadow-2xl
                  focus:-translate-y-2 focus:shadow-2xl
                "
              >
                <CardContent className="p-0 flex flex-col h-full w-full justify-between">
                  {/* Icon - Fixed positioning */}
                  <div className="flex justify-center mb-5">
                    <div
                      className="
                        w-16 h-16 sm:w-20 sm:h-20
                        rounded-full
                        flex items-center justify-center
                        text-white
                        bg-gradient-to-br from-[#0d9488] to-[#14b8a6]
                        shadow-[0_8px_20px_rgba(13,148,136,0.25)]
                      "
                    >
                      {(() => {
                        const IconComponent =
                          premiumServices[activeServiceIndex].icon;
                        return (
                          <IconComponent
                            className="w-8 h-8 sm:w-9 sm:h-9"
                            aria-hidden="true"
                          />
                        );
                      })()}
                    </div>
                  </div>
                  {/* Title - Fixed height */}
                  <h3
                    className="
                      font-serif text-xl sm:text-[1.4rem]
                      font-bold text-slate-900
                      leading-tight
                      mb-4
                      h-[60px] sm:h-[70px]
                      flex items-center justify-center
                      px-2
                    "
                  >
                    {premiumServices[activeServiceIndex].title}
                  </h3>
                  {/* Description - Fixed height with scrollable overflow */}
                  <div className="flex-1 mb-6 overflow-y-auto px-2">
                    <p
                      className="
                        text-slate-600
                        text-sm sm:text-base
                        leading-relaxed
                      "
                    >
                      {premiumServices[activeServiceIndex].description}
                    </p>
                  </div>
                  {/* CTA - Fixed at bottom */}
                  <Button
                    className="
                      w-full
                      bg-gradient-to-r from-[#0d9488] to-[#14b8a6]
                      hover:from-[#f8d56b] hover:to-[#facc15]
                      hover:text-slate-900
                      focus:from-[#f8d56b] focus:to-[#facc15]
                      focus:text-slate-900
                      text-white
                      font-semibold
                      py-2.5 sm:py-3 rounded-lg
                      transition-all duration-300
                      hover:-translate-y-1
                      focus:-translate-y-1
                      flex items-center justify-center gap-2
                    "
                    aria-label={`Learn more about ${premiumServices[activeServiceIndex].title}`}
                    asChild
                  >
                    <Link
                      href={premiumServices[activeServiceIndex].link}
                      className="flex items-center gap-2"
                    >
                      Explore
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Button
                variant="outline"
                size="icon"
                onClick={nextService}
                className="shrink-0 rounded-full bg-white shadow-md hover:shadow-lg focus:shadow-lg hidden sm:flex"
                aria-label="Next service"
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </Button>
            </div>
            {/* Mobile navigation buttons */}
            <div className="flex justify-center gap-4 mt-4 sm:hidden">
              <Button
                variant="outline"
                size="icon"
                onClick={prevService}
                className="rounded-full bg-white shadow-md"
                aria-label="Previous service"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextService}
                className="rounded-full bg-white shadow-md"
                aria-label="Next service"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
            {/* Service pagination dots */}
            <div
              className="flex justify-center gap-2 mt-6"
              role="tablist"
              aria-label="Services pagination"
            >
              {premiumServices.map((_, index) => {
                const isActive = index === activeServiceIndex;

                return (
                  <button
                    key={index}
                    onClick={() => setActiveServiceIndex(index)}
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`View service ${index + 1}`}
                    className={`
                      rounded-full transition-all
                      h-1.5 w-1.5 sm:h-2.5 sm:w-2.5
                      ${isActive ? "bg-primary sm:w-6" : "bg-gray-300 hover:bg-gray-400"}
                    `}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="py-12 sm:py-16 lg:py-20 bg-slate-50"
        aria-labelledby="testimonials-heading"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2
              id="testimonials-heading"
              className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4"
            >
              {t.testimonials.title}
              <span
                aria-hidden="true"
                className="absolute left-1/2 bottom-0 h-[3px] w-20 -translate-x-1/2 rounded-full
               bg-gradient-to-r from-[#ff6b6b] via-[#f8d56b] to-[#0d9488]"
              />
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
                  <div
                    className="flex justify-center gap-1 mb-4"
                    aria-label={`5 out of 5 stars`}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-500 fill-yellow-500"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <Quote
                    className="w-10 h-10 text-primary/20 mx-auto mb-4"
                    aria-hidden="true"
                  />

                  <blockquote className="text-foreground text-base sm:text-lg italic mb-6 text-pretty">
                    "{testimonials[activeTestimonialIndex].text}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex flex-col items-center">
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
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full bg-transparent"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full bg-transparent"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Testimonial pagination dots */}
            <div
              className="flex justify-center gap-2 mt-6"
              role="tablist"
              aria-label="Testimonials pagination"
            >
              {testimonials.map((_, index) => {
                const isActive = index === activeTestimonialIndex;

                return (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonialIndex(index)}
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`View testimonial ${index + 1}`}
                    className={`
          rounded-full transition-all
          h-1.5 w-1.5 sm:h-2.5 sm:w-2.5
          ${isActive ? "bg-primary sm:w-6" : "bg-gray-300 hover:bg-gray-400"}
        `}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Travel Memories Gallery */}
      <section
        className="py-12 sm:py-16 lg:py-20 bg-white"
        aria-labelledby="memories-heading"
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2
              id="memories-heading"
              className="relative font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 pb-3"
            >
              {t.memories.title}
              <span
                aria-hidden="true"
                className="absolute left-1/2 bottom-0 h-[3px] w-20 -translate-x-1/2 rounded-full
                     bg-gradient-to-r from-[#ff6b6b] via-[#f8d56b] to-[#0d9488]"
              />
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base text-pretty">
              {t.memories.subtitle}
            </p>
          </div>

          <div className="hidden lg:grid grid-cols-5 gap-4" role="list">
            {travelMemories.map((memory) => (
              <div
                key={memory.id}
                className="aspect-square rounded-xl overflow-hidden group cursor-pointer"
                role="listitem"
              >
                <img
                  src={memory.imageurl}
                  alt={memory.imageQuery}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* Carousel */}
          <div className="relative max-w-xl mx-auto lg:hidden">
            <div className="flex items-center gap-4">
              {/* Prev (desktop) */}
              <Button
                variant="outline"
                size="icon"
                onClick={prevMemory}
                className="shrink-0 rounded-full bg-transparent hidden sm:flex"
                aria-label="Previous memory"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Image */}
              <div className="flex-1">
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={travelMemories[activeMemoryIndex].imageurl}
                    alt={travelMemories[activeMemoryIndex].imageQuery}
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Next (desktop) */}
              <Button
                variant="outline"
                size="icon"
                onClick={nextMemory}
                className="shrink-0 rounded-full bg-transparent hidden sm:flex"
                aria-label="Next memory"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Mobile controls */}
            <div className="flex justify-center gap-4 mt-4 sm:hidden">
              <Button
                variant="outline"
                size="icon"
                onClick={prevMemory}
                className="rounded-full bg-transparent"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextMemory}
                className="rounded-full bg-transparent"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
