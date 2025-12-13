"use client"

import { Star, ImageIcon } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface TestimonialCardProps {
  name: string
  initials: string
  timeAgo: string
  rating: number
  text: string
  photoCount?: number
}

export function TestimonialCard({ name, initials, timeAgo, rating, text, photoCount }: TestimonialCardProps) {
  const { t } = useI18n()

  return (
    <Card className="min-w-[280px] sm:min-w-[300px] max-w-[320px] sm:max-w-[350px] shrink-0">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center gap-3 mb-3">
          <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
            <AvatarFallback className="bg-primary/20 text-primary text-sm sm:text-base">{initials}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-medium text-card-foreground text-sm sm:text-base">{name}</h4>
            <p className="text-xs text-muted-foreground">{timeAgo}</p>
          </div>
        </div>
        <div className="flex gap-0.5 mb-3" role="img" aria-label={`${name} gave ${rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-3">{text}</p>
        {photoCount && (
          <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-2">
            <ImageIcon className="w-3.5 h-3.5" aria-hidden="true" />
            <span>
              {photoCount} {t.testimonials.photos}
            </span>
          </div>
        )}
        <Button variant="link" className="text-primary text-sm p-0 h-auto" aria-label={`Read more of ${name}'s review`}>
          {t.testimonials.readMore} ↓
        </Button>
      </CardContent>
    </Card>
  )
}
