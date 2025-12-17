"use client";

import { useState, useEffect, useRef } from "react";
import { X, Clock, Gift } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface OfferBannerProps {
  daysUntilExpiry?: number;
  offerText?: string;
  linkHref?: string;
  linkText?: string;
  mode?: "inline" | "sticky";
}

export function OfferBanner({
  daysUntilExpiry = 3,
  offerText,
  linkHref,
  linkText,
  mode = "inline",
}: OfferBannerProps) {
  const { t } = useI18n();

  // 🔑 i18n-backed defaults
  const resolvedOfferText = offerText ?? t.offerBanner.offerText;

  const resolvedLinkText = linkText ?? t.offerBanner.linkText;

  const resolvedLinkHref = linkHref ?? t.offerBanner.linkHref;

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

  useEffect(() => {
    setIsMounted(true);

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

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("offerBannerDismissed", "true");
  };

  if (!isMounted || !isVisible) return null;

  const isExpired =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  if (isExpired) return null;

  return (
    <div
      role="banner"
      aria-label={t.offerBanner.ariaLabel}
      className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-amber-950 py-2.5 px-3 relative"
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
        <div className="flex items-center gap-2">
          <Gift className="w-4 h-4 animate-pulse" />
          <span className="font-bold text-xs sm:text-sm text-center">
            {resolvedOfferText}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <Clock className="w-4 h-4" />
          <span>{t.offerBanner.endsIn}</span>
          <span className="font-mono font-bold">
            {String(timeLeft.days).padStart(2, "0")}d :
            {String(timeLeft.hours).padStart(2, "0")}h :
            {String(timeLeft.minutes).padStart(2, "0")}m :
            {String(timeLeft.seconds).padStart(2, "0")}s
          </span>
        </div>

        <a href={resolvedLinkHref}>
          <button className="bg-amber-950 text-amber-50 text-xs sm:text-sm px-4 py-2 rounded-md font-semibold">
            {resolvedLinkText}
          </button>
        </a>

        <button
          onClick={handleDismiss}
          className="absolute right-2 top-1/2 -translate-y-1/2"
          aria-label={t.offerBanner.dismiss}
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
