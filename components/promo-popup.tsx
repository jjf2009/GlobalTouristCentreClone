"use client";

/**
 * PromoPopup Component
 * --------------------
 * A timed promotional popup that appears after user spends time on site
 * Collects email and phone for marketing purposes
 *
 * Features:
 * - Configurable delay before showing
 * - Session-based display (only shows once per session)
 * - Accessible dialog with proper focus management
 * - Success state with confirmation message
 * - Background image with overlay content
 */

import { useState, useEffect, useCallback } from "react";
import { X, Gift, ArrowRight } from "lucide-react";

interface PromoPopupProps {
  /** Delay in milliseconds before showing popup (default: 15 seconds) */
  delayMs?: number;
  /** Popup title text */
  title?: string;
  /** Popup description text */
  description?: string;
  /** Discount amount to display */
  discount?: string;
  /** Image query for placeholder image */
  imageQuery?: string;
}

export function PromoPopup({
  delayMs = 15000,
  title = "Free Airport Transfer",
  description = "Book your tour now and enjoy a FREE airport pickup — safe, reliable, and comfortable.",
  discount = "Limited-Time Offer",
  imageQuery = "luxury black car airport transfer luggage",
}: PromoPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Handle popup close and store in session
  const handleClose = useCallback(() => {
    setIsOpen(false);
    sessionStorage.setItem("promoPopupShown", "true");
  }, []);

  // Setup timer to show popup after delay
  useEffect(() => {
    setIsMounted(true);

    // Check if popup was already shown in this session
    const alreadyShown = sessionStorage.getItem("promoPopupShown");
    if (alreadyShown) return;

    // Set timer to show popup after specified delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delayMs]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send data to backend/CRM
    setIsSubmitted(true);
    // Auto-close after showing success message
    setTimeout(() => {
      handleClose();
    }, 3000);
  };

  // Don't render until mounted (prevents hydration mismatch)
  if (!isMounted) return null;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div
        className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="promo-title"
        aria-describedby="promo-description"
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-20 h-8 w-8 p-0 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-colors"
          aria-label="Close promotion popup"
        >
          <X className="w-4 h-4 text-gray-700" aria-hidden="true" />
        </button>

        {!isSubmitted ? (
          <div className="relative">
            {/* Hero Content Section with Background Image */}
            <div className="relative p-12 sm:p-16 lg:p-20 text-center min-h-[600px] sm:min-h-[700px] flex flex-col items-center justify-center">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src="/car_offer.png"
                  alt="Luxury airport transfer with car and luggage"
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
              </div>

              {/* Content over background */}
              <div className="relative z-10 text-white max-w-3xl">
                {/* Limited Time Badge */}
                <div className="inline-block mb-8 px-8 py-3 border-2 border-amber-400/60 rounded-full backdrop-blur-sm bg-amber-400/10">
                  <p className="text-base sm:text-lg font-semibold tracking-wide text-amber-300">
                    {discount}
                  </p>
                </div>

                {/* Main Heading */}
                <h2
                  id="promo-title"
                  className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight drop-shadow-2xl"
                >
                  Free Airport
                </h2>
                <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-amber-400 drop-shadow-2xl">
                  Transfer
                </h2>

                {/* Description */}
                <p
                  id="promo-description"
                  className="text-lg sm:text-xl mb-3 max-w-2xl mx-auto leading-relaxed drop-shadow-lg font-light"
                >
                  Book your tour now and enjoy a{" "}
                  <span className="font-bold text-amber-300">
                    FREE airport pickup
                  </span>{" "}
                  — safe, reliable, and comfortable.
                </p>
                <p className="text-base sm:text-lg mb-12 opacity-90 drop-shadow-lg">
                  Offer valid only for new bookings.
                </p>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    setIsSubmitted(true);
                    setTimeout(handleClose, 2000);
                  }}
                  className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-gray-900 font-bold text-lg sm:text-xl px-10 py-5 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200 inline-flex items-center gap-3"
                >
                  Claim Your Free Transfer
                  <ArrowRight className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Success State - shown after form submission
          <div className="p-6 sm:p-8 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift
                className="w-8 h-8 sm:w-10 sm:h-10 text-green-600"
                aria-hidden="true"
              />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-gray-900 mb-2">
              You&apos;re All Set!
            </h3>
            <p className="text-gray-600">
              Check your email for your free airport transfer confirmation.
              Happy travels!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

