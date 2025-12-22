"use client";

import { Star } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface DestinationCardProps {
  title: string;
  description: string;
  rating: number;
  duration: string;
  imageQuery: string;
  tags?: string[];
  badge?: "new" | "hot";
}

export function DestinationCard({
  title,
  description,
  rating,
  duration,
  imageQuery,
  tags = [],
  badge,
}: DestinationCardProps) {
  const { t } = useI18n();

  return (
    <Card className="overflow-hidden group focus-within:ring-2 focus-within:ring-primary">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={`/.jpg?height=300&width=400&query=${encodeURIComponent(
            imageQuery
          )}`}
          alt={`${title} - ${description.slice(0, 50)}...`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {badge && (
          <Badge
            variant={badge === "new" ? "default" : "destructive"}
            className="absolute top-2 right-2 sm:top-3 sm:right-3"
          >
            {badge === "new" ? t.collections.new : t.collections.hot}
          </Badge>
        )}
      </div>
      <CardContent className="p-3 sm:p-4">
        <div className="flex items-start justify-between gap-2 mb-1.5 sm:mb-2">
          <h3 className="font-serif font-semibold text-card-foreground text-sm sm:text-base leading-tight">
            {title}
          </h3>
          <div
            className="flex items-center gap-0.5 sm:gap-1 shrink-0"
            role="img"
            aria-label={`Rating: ${rating} out of 5 stars`}
          >
            <Star
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-500 fill-yellow-500"
              aria-hidden="true"
            />
            <span className="text-xs sm:text-sm font-medium">{rating}</span>
          </div>
        </div>
        <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2 mb-2 sm:mb-3">
          {description}
        </p>
        {tags.length > 0 && (
          <div
            className="flex flex-wrap gap-1 mb-2 sm:mb-3"
            role="list"
            aria-label="Tour features"
          >
            {tags.map((tag) => (
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
          <span className="text-xs text-primary font-medium">{duration}</span>
          <Button
            variant="link"
            size="sm"
            className="text-xs sm:text-sm h-auto p-0 font-medium"
            aria-label={`View details about ${title}`}
          >
            {t.destinations.viewDetails} →
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
