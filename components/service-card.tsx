"use client"

import { useI18n } from "@/lib/i18n/context"
import type { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  const { t } = useI18n()

  return (
    <Card className="text-center hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-primary">
      <CardContent className="p-4 sm:p-6">
        <div
          className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-full bg-primary/10 flex items-center justify-center"
          aria-hidden="true"
        >
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
        </div>
        <h3 className="font-serif font-semibold text-card-foreground mb-1.5 sm:mb-2 text-sm sm:text-base">{title}</h3>
        <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{description}</p>
        <Button
          variant="outline"
          size="sm"
          className="rounded-full text-xs sm:text-sm px-3 sm:px-4 h-8 sm:h-9 hover:bg-primary hover:text-primary-foreground bg-transparent"
          aria-label={`Read more about ${title}`}
        >
          {t.services.readMore}
        </Button>
      </CardContent>
    </Card>
  )
}
