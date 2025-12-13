import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display } from "next/font/google"
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import { I18nProvider } from "@/lib/i18n/context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PromoPopup } from "@/components/promo-popup"
import { WhatsAppButton } from "@/components/whatsapp-button"
import "./globals.css"

/**
 * Font Configuration
 * ------------------
 * Using Geist for body text (modern, clean sans-serif)
 * Using Playfair Display for headings (elegant serif)
 */
// const _geistSans = Geist({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"] })

/**
 * SEO Metadata
 * ------------
 * Default metadata for all pages (can be overridden per page)
 */
export const metadata: Metadata = {
  title: "Global Tourist Centre | Luxury Travel Experiences",
  description:
    "We Don't Just Book Trips — We Design Lifetimes of Stories. Your trusted travel partner for bespoke domestic and international tours since 2010.",
  keywords: "travel, tours, India, luxury travel, vacation packages, holiday packages, Kerala, Goa, Dubai",
  authors: [{ name: "Global Tourist Centre" }],
  openGraph: {
    title: "Global Tourist Centre | Luxury Travel Experiences",
    description: "We Don't Just Book Trips — We Design Lifetimes of Stories.",
    type: "website",
  },
}

/**
 * Viewport Configuration
 * ----------------------
 * Mobile-first responsive settings
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1a2332",
}

/**
 * Root Layout Component
 * ---------------------
 * Wraps all pages with common elements:
 * - I18n Provider for translations
 * - Header navigation
 * - Offer banner (top of page)
 * - Footer
 * - Promo popup (shows after delay)
 * - WhatsApp floating button
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <I18nProvider>
          {/* Main navigation header */}
          <Header />

          {/* Page content */}
          <main id="main-content" className="pt-14 sm:pt-16 flex-1" role="main">
            {children}
          </main>

          {/* Site footer */}
          <Footer />

          {/* Promotional popup - appears after 20 seconds on ALL pages */}
          <PromoPopup delayMs={20000} />

          {/* Floating WhatsApp contact button */}
          <WhatsAppButton
            phoneNumber="919067972295"
            message="Hi! I am planning a trip, can you help me out?"
            tooltipText="Chat with us on WhatsApp"
          />
        </I18nProvider>

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  )
}
