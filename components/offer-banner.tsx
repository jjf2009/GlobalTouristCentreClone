"use client";

/**
 * OfferBanner Component
 * ---------------------
 * A promotional banner that can be positioned below hero sections
 * Features a countdown timer for limited-time offers
 *
 * Features:
 * - Countdown timer with days, hours, minutes, seconds
 * - Dismissible with session storage persistence
 * - Fully accessible with ARIA labels
 * - Mobile-responsive design
 * - Can be used inline (below hero) or sticky (top of page)
 */

import { useState, useEffect, useRef } from "react";
import { X, Clock, Gift } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface OfferBannerProps {
  /** Number of days until offer expires (default: 3 days) */
  daysUntilExpiry?: number;
  /** Main offer text displayed in banner */
  offerText?: string;
  /** Link destination for CTA button */
  linkHref?: string;
  /** Text for CTA button */
  linkText?: string;
  /** Position mode: 'inline' for below hero, 'sticky' for top of page */
  mode?: "inline" | "sticky";
}

export function OfferBanner({
  daysUntilExpiry = 3,
  offerText = "Free Airport Pickup With Every Tour",
  linkHref = "/luxury-destinations",
  linkText = "Book Now",
  mode = "inline",
}: OfferBannerProps) {
  const endDateRef = useRef<number>(
    Date.now() + daysUntilExpiry * 24 * 60 * 60 * 1000
  );

  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  // Calculate time remaining until offer expires
  useEffect(() => {
    setIsMounted(true);

    // Check if banner was previously dismissed in this session
    const dismissed = sessionStorage.getItem("offerBannerDismissed");
    if (dismissed) {
      setIsVisible(false);
      return;
    }

    const calculateTimeLeft = (): TimeLeft => {
      const difference = endDateRef.current - Date.now();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Handle banner dismissal
  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("offerBannerDismissed", "true");
  };

  // Don't render until mounted (prevents hydration mismatch)
  if (!isMounted) return null;

  // Don't render if dismissed
  if (!isVisible) return null;

  // Check if offer has expired
  const isExpired =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;
  if (isExpired) return null;

  return (
    <div
      role="banner"
      aria-label="Limited time offer"
      className={`bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-amber-950 py-2.5 sm:py-3 px-3 sm:px-4 relative `}
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        {/* Offer Icon & Text */}
        <div className="flex items-center gap-2">
          <Gift
            className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 animate-pulse"
            aria-hidden="true"
          />
          <span className="font-bold text-xs sm:text-sm md:text-base text-center">
            {offerText}
          </span>
        </div>

        {/* Countdown Timer */}
        <div
          className="flex items-center gap-1.5 sm:gap-2"
          role="timer"
          aria-live="polite"
          aria-label={`Offer ends in ${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, ${timeLeft.seconds} seconds`}
        >
          <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
          <span className="text-xs sm:text-sm font-medium">Ends in:</span>
          <div className="flex items-center gap-1 text-xs sm:text-sm font-mono font-bold">
            {/* Days */}
            <span
              className="bg-amber-950 text-amber-50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1 min-w-[32px] sm:min-w-[40px] text-center"
              aria-label={`${timeLeft.days} days`}
            >
              {String(timeLeft.days).padStart(2, "0")}
              <span className="text-[10px] sm:text-xs font-normal ml-0.5">
                d
              </span>
            </span>
            <span aria-hidden="true" className="font-bold">
              :
            </span>
            {/* Hours */}
            <span
              className="bg-amber-950 text-amber-50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1 min-w-[32px] sm:min-w-[40px] text-center"
              aria-label={`${timeLeft.hours} hours`}
            >
              {String(timeLeft.hours).padStart(2, "0")}
              <span className="text-[10px] sm:text-xs font-normal ml-0.5">
                h
              </span>
            </span>
            <span aria-hidden="true" className="font-bold">
              :
            </span>
            {/* Minutes */}
            <span
              className="bg-amber-950 text-amber-50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1 min-w-[32px] sm:min-w-[40px] text-center"
              aria-label={`${timeLeft.minutes} minutes`}
            >
              {String(timeLeft.minutes).padStart(2, "0")}
              <span className="text-[10px] sm:text-xs font-normal ml-0.5">
                m
              </span>
            </span>
            <span aria-hidden="true" className="font-bold">
              :
            </span>
            {/* Seconds */}
            <span
              className="bg-amber-950 text-amber-50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1 min-w-[32px] sm:min-w-[40px] text-center animate-pulse"
              aria-label={`${timeLeft.seconds} seconds`}
            >
              {String(timeLeft.seconds).padStart(2, "0")}
              <span className="text-[10px] sm:text-xs font-normal ml-0.5">
                s
              </span>
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <a href={linkHref}>
          <button
            className="bg-amber-950 text-amber-50 hover:bg-amber-900 text-xs sm:text-sm h-8 sm:h-9 px-4 sm:px-5 font-semibold shadow-md rounded-md transition-colors"
            aria-label={`${linkText} - ${offerText}`}
          >
            {linkText}
          </button>
        </a>

        {/* Close/Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute right-1 top-1/2 -translate-y-1/2 sm:relative sm:right-auto sm:top-auto sm:translate-y-0 h-7 w-7 p-0 hover:bg-amber-600/20 rounded-full flex items-center justify-center"
          aria-label="Dismiss offer banner"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}


