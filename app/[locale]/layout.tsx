import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { I18nProvider } from "@/lib/i18n/context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PromoPopup } from "@/components/promo-popup"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { locales } from "@/lib/i18n/config"
import type { Locale } from "@/lib/i18n/translations";
import { notFound } from "next/navigation"
import "../globals.css"

/* -----------------------------
   Fonts
------------------------------ */
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

/* -----------------------------
   Static Params for locales
------------------------------ */
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

/* -----------------------------
   Metadata (base – overridden per page)
------------------------------ */
export const metadata: Metadata = {
  title: {
    default: "Global Tourist Centre | Luxury Travel Experiences",
    template: "%s | Global Tourist Centre",
  },
  description:
    "We don't just book trips — we design lifetimes of stories. Bespoke domestic and international tours since 2010.",
  keywords: [
    "luxury travel",
    "tour packages",
    "India tours",
    "international travel",
    "Goa tours",
    "Kerala luxury trips",
  ],
  authors: [{ name: "Global Tourist Centre" }],
  openGraph: {
    type: "website",
    siteName: "Global Tourist Centre",
  },
}

/* -----------------------------
   Viewport
------------------------------ */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1a2332",
}

/* -----------------------------
   Root Layout
------------------------------ */
export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
    const locale = params.locale as Locale;

  if (!locales.includes(locale as any)) {
    notFound()
  }

  return (
    <html
      lang={locale}
      className={`scroll-smooth ${playfair.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased font-sans relative">
        <I18nProvider locale={locale}>
          {/* Header */}
          <Header />

          {/* Main content */}
          <main id="main-content" role="main" className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <Footer />

          {/* Promo popup */}
          <PromoPopup />

          {/* WhatsApp CTA */}
          <WhatsAppButton
            phoneNumber="919067972295"
            message="Hi! I am planning a trip, can you help me out?"
            tooltipText="Chat with us on WhatsApp"
          />
        </I18nProvider>

        <Analytics />
      </body>
    </html>
  )
}
