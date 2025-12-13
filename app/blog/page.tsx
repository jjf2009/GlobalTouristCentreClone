"use client"

import { useI18n } from "@/lib/i18n/context"
import { HeroSection } from "@/components/hero-section"
import { OfferBanner } from "@/components/offer-banner"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const blogPosts = [
  {
    title: "Click, Capture & Chill: Andaman's Most Instagram-...",
    excerpt: "Explore stunning Instagram spots in Andaman for picture-perfect trips",
    category: "Photography",
    date: "July 2025",
    author: "Global Tourist Centre Team",
    imageQuery: "Andaman beach photography scenic Instagram",
  },
  {
    title: "From Goa to God's Own Country",
    excerpt: "A Kerala trip built for young explorers",
    category: "Group Tours",
    date: "June 2025",
    author: "Global Tourist Centre Team",
    imageQuery: "Kerala houseboat colorful traditional India",
  },
  {
    title: "New Adventures Coming Soon",
    excerpt: "We're working on more travel stories for you. Check back later!",
    category: "Coming Soon",
    date: "",
    author: "",
    imageQuery: "",
    isComingSoon: true,
  },
]

export default function BlogPage() {
  const { t } = useI18n()

  return (
    <div>
      <HeroSection title={t.blog.heroTitle} backgroundQuery="travel journal notebook coffee scenic" />

      <OfferBanner mode="inline" />

      {/* Blog Posts */}
      <section className="py-12 sm:py-16" aria-labelledby="blog-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8 sm:mb-12">
            <h2
              id="blog-heading"
              className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2"
            >
              {t.blog.mainTitle}
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-primary mb-3 sm:mb-4" aria-hidden="true" />
            <p className="text-muted-foreground text-sm sm:text-base">{t.blog.mainSubtitle}</p>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" role="list">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow" role="listitem">
                <article>
                  <div className="relative aspect-video">
                    {post.isComingSoon ? (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground text-sm">{t.blog.comingSoon}</span>
                      </div>
                    ) : (
                      <img
                        src={`/.jpg?height=200&width=400&query=${encodeURIComponent(post.imageQuery)}`}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <Badge
                      variant={post.isComingSoon ? "secondary" : "default"}
                      className="absolute top-2 right-2 sm:top-3 sm:right-3"
                    >
                      {post.category}
                    </Badge>
                  </div>

                  <CardContent className="p-4 sm:p-5">
                    {!post.isComingSoon && (
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-muted-foreground mb-2 sm:mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" aria-hidden="true" />
                          <time>{post.date}</time>
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" aria-hidden="true" />
                          {post.author}
                        </span>
                      </div>
                    )}

                    <h3 className="font-serif font-semibold text-card-foreground mb-1.5 sm:mb-2 line-clamp-2 text-sm sm:text-base">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">{post.excerpt}</p>

                    {post.isComingSoon ? (
                      <Button variant="secondary" size="sm" disabled className="text-xs sm:text-sm">
                        {t.blog.comingSoon}
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full text-xs sm:text-sm bg-transparent"
                        aria-label={`Read more about ${post.title}`}
                      >
                        {t.blog.readMore}
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" aria-hidden="true" />
                      </Button>
                    )}
                  </CardContent>
                </article>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
