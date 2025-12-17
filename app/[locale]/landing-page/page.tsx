"use client"

import type React from "react"

import { useState, useRef ,useEffect} from "react"
import Link from "next/link"
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Facebook,
  Hotel,
  FileText,
  Plane,
  ArrowRight,
  Quote,
  Users,
  Clock,
  Shield,
  Heart,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useI18n } from "@/lib/i18n/context"
import { OfferBanner } from "@/components/offer-banner"

import Testimonials from "./Testimonials"
import Memories from "./Memories"
import Services from "./Services"
import CuratedTravel from "./CuratedTravel"
import Signature from "./Signature"
import Hero from "./Hero"




export default function LandingPage() {

  return (
    <div className=" bg-background">
      {/* Skip to main content link for accessibility */}
      <a className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
>Skip to booking form
      </a>
      {/* Hero Section */}
      <Hero/>
      <OfferBanner/>
      {/* Signature Experiences Section */}
      <Signature/>
      {/* Curated Travel Collections - Shows 8 collections with View More */}
      <CuratedTravel/>
      {/* Premium Services Section */}
        <Services/>
       <Testimonials/>
      {/* Travel Memories Gallery */}
       <Memories/>
    </div>
  );
}
