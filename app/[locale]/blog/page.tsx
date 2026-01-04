"use client";

import { useI18n } from "@/lib/i18n/context";
import { HeroSection } from "@/components/hero-section";
import { Calendar, User, ArrowRight, Lock } from "lucide-react"; // Added Lock icon for style
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    title: "Click, Capture & Chill: Andaman's Most Instagram-...",
    excerpt:
      "Explore stunning Instagram spots in Andaman for picture-perfect trips",
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
    imageQuery: "mysterious travel landscape silhouette", // Added query for background
    isComingSoon: true,
  },
];

export default function BlogPage() {
  const { t } = useI18n();

  return (
    <div>
      <HeroSection
        title={t.blog.heroTitle}
        backgroundQuery="travel journal notebook coffee scenic"
      />

      <section className="py-12 sm:py-16" aria-labelledby="blog-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8 sm:mb-12">
            <h2
              id="blog-heading"
              className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2"
            >
              {t.blog.mainTitle}
            </h2>
            <div
              className="w-12 sm:w-16 h-1 bg-primary mb-3 sm:mb-4"
              aria-hidden="true"
            />
            <p className="text-muted-foreground text-sm sm:text-base">
              {t.blog.mainSubtitle}
            </p>
          </header>

          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            role="list"
          >
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-none bg-card"
                role="listitem"
              >
                <article className="h-full flex flex-col">
                  {/* Image Section */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={`/.jpg?height=400&width=600&query=${encodeURIComponent(
                        post.imageQuery || "travel"
                      )}`}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {!post.isComingSoon && (
                      <Badge className="absolute top-3 right-3 z-10">
                        {post.category}
                      </Badge>
                    )}
                  </div>

                  {/* Content Section */}
                  <CardContent className="p-5 flex-grow flex flex-col">
                    {!post.isComingSoon && (
                      <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <time>{post.date}</time>
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5" />
                          {post.author}
                        </span>
                      </div>
                    )}

                    <h3 className="font-serif font-bold text-lg mb-2 line-clamp-2 text-card-foreground">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-6 flex-grow">
                      {post.excerpt}
                    </p>

                    {!post.isComingSoon && (
                      <div className="mt-auto">
                        <Button
                          variant="ghost"
                          className="p-0 h-auto hover:bg-transparent text-primary hover:text-primary/80 group/btn"
                        >
                          <span className="font-semibold">
                            {t.blog.readMore}
                          </span>
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </article>

                {/* Full Card Coming Soon Overlay */}
                {post.isComingSoon && (
                  <div className="absolute inset-0 z-30 flex items-center justify-center">
                    {/* The White Layer */}
                    <div className="absolute inset-0 bg-white/70 backdrop-blur-[3px]" />

                    {/* The Button (Above the layer) */}
                    <Button
                      variant="default"
                      className="relative z-40 shadow-2xl font-semibold uppercase tracking-wider px-8 py-6 text-lg"
                    >
                      <Lock className="w-5 h-5 mr-2" />
                      {t.blog.comingSoon}
                    </Button>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
