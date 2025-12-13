"use client"

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
 */

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { X, Gift, ArrowRight, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface PromoPopupProps {
  /** Delay in milliseconds before showing popup (default: 15 seconds) */
  delayMs?: number
  /** Popup title text */
  title?: string
  /** Popup description text */
  description?: string
  /** Discount amount to display */
  discount?: string
  /** Image query for placeholder image */
  imageQuery?: string
}

export function PromoPopup({
  delayMs = 15000,
  title = "Exclusive Offer Just For You!",
  description = "Sign up now and get 25% OFF your first booking. Limited time offer for new customers.",
  discount = "25% OFF",
  imageQuery = "luxury travel beach resort sunset",
}: PromoPopupProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Handle popup close and store in session
  const handleClose = useCallback(() => {
    setIsOpen(false)
    sessionStorage.setItem("promoPopupShown", "true")
  }, [])

  // Setup timer to show popup after delay
  useEffect(() => {
    setIsMounted(true)

    // Check if popup was already shown in this session
    const alreadyShown = sessionStorage.getItem("promoPopupShown")
    if (alreadyShown) return

    // Set timer to show popup after specified delay
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, delayMs)

    return () => clearTimeout(timer)
  }, [delayMs])

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Send data to backend/CRM
    setIsSubmitted(true)
    // Auto-close after showing success message
    setTimeout(() => {
      handleClose()
    }, 3000)
  }

  // Don't render until mounted (prevents hydration mismatch)
  if (!isMounted) return null

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-lg p-0 overflow-hidden" aria-describedby="promo-description">
        {/* Close button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={handleClose}
          className="absolute right-2 top-2 z-10 h-8 w-8 p-0 rounded-full bg-white/80 hover:bg-white shadow-md"
          aria-label="Close promotion popup"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </Button>

        {!isSubmitted ? (
          <div className="flex flex-col">
            {/* Hero Image Section */}
            <div className="relative h-40 sm:h-48 overflow-hidden">
              <img
                src={`/.jpg?height=200&width=500&query=${encodeURIComponent(imageQuery)}`}
                alt="Luxury travel destination"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              {/* Discount Badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex items-center gap-2 bg-amber-400 text-amber-950 px-3 py-1.5 rounded-full font-bold text-sm sm:text-base">
                  <Gift className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                  {discount}
                </div>
              </div>
            </div>

            {/* Form Content Section */}
            <div className="p-4 sm:p-6">
              <DialogHeader className="text-left mb-4">
                <DialogTitle className="font-serif text-xl sm:text-2xl text-foreground">{title}</DialogTitle>
                <DialogDescription id="promo-description" className="text-muted-foreground text-sm sm:text-base mt-2">
                  {description}
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                {/* Email Input */}
                <div className="space-y-1.5">
                  <Label htmlFor="promo-email" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                      aria-hidden="true"
                    />
                    <Input
                      id="promo-email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="pl-10 h-10 sm:h-11"
                      aria-required="true"
                    />
                  </div>
                </div>

                {/* Phone Input */}
                <div className="space-y-1.5">
                  <Label htmlFor="promo-phone" className="text-sm font-medium">
                    Phone Number
                  </Label>
                  <div className="relative">
                    <Phone
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                      aria-hidden="true"
                    />
                    <Input
                      id="promo-phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="pl-10 h-10 sm:h-11"
                      aria-required="true"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-10 sm:h-11 text-sm sm:text-base font-semibold"
                  aria-label="Claim your exclusive discount"
                >
                  Claim My Discount
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Button>

                {/* Legal Text */}
                <p className="text-xs text-muted-foreground text-center">
                  By signing up, you agree to our{" "}
                  <a href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </a>
                </p>
              </form>
            </div>
          </div>
        ) : (
          // Success State - shown after form submission
          <div className="p-6 sm:p-8 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" aria-hidden="true" />
            </div>
            <DialogHeader>
              <DialogTitle className="font-serif text-xl sm:text-2xl text-foreground">You&apos;re All Set!</DialogTitle>
              <DialogDescription className="text-muted-foreground mt-2">
                Check your email for your exclusive {discount} discount code. Happy travels!
              </DialogDescription>
            </DialogHeader>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
