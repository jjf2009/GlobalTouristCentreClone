"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";
import "@/styles/404.css";
import "@/styles/standard.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function NotFoundClient() {
  const { t ,locale} = useI18n();
  const [mounted, setMounted] = useState(false);
  const nightSkyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    // Generate Stars for Night Sky
    const nightSky = nightSkyRef.current;
    if (nightSky && nightSky.children.length === 0) {
      const fragment = document.createDocumentFragment();
      const starCount = 100;

      for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        
        // Random positioning
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        
        // Random size between 1-3px
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random animation delay
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        fragment.appendChild(star);
      }
      
      nightSky.appendChild(fragment);
    }
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Header />

      <main className="error-page">
        {/* Font Awesome CDN fallback */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Starry Night Sky */}
        <div id="nightSky" ref={nightSkyRef} className="night-sky" aria-hidden="true" />

        {/* Animated Mountains */}
        <div className="mountains" aria-hidden="true">
          <div className="mountain mountain-1" />
          <div className="mountain mountain-2" />
          <div className="mountain mountain-3" />
        </div>

        {/* Error Container */}
        <div className="error-container">
          {/* Interactive Compass */}
          <div className="compass" aria-hidden="true">
            <div className="compass-needle" />
            <div className="compass-ring" />
          </div>

          {/* Map Markers */}
          <div className="map-markers" aria-hidden="true">
            <i className="fas fa-map-marker-alt marker marker-1" />
            <i className="fas fa-map-marker-alt marker marker-2" />
            <i className="fas fa-map-marker-alt marker marker-3" />
          </div>

          {/* Lost Explorer Animation */}
          <div className="explorer" aria-hidden="true">
            <i className="fas fa-hiking" />
          </div>

          <h1 className="error-code" aria-label="Error 404">
            404
          </h1>
          <h2 className="error-title">{t.notfound.title}</h2>
          <p className="error-description">{t.notfound.description}</p>

          <div className="error-actions">
            <Link href={"/"} className="btn btn-primary">
              <i className="fas fa-home" aria-hidden="true" />
              {t.notfound.buttons.home}
            </Link>
            <Link href={"/destinations"} className="btn btn-secondary">
              <i className="fas fa-map-marked-alt" aria-hidden="true" />
              {t.notfound.buttons.destinations}
            </Link>
            <Link href={"/contact-us"} className="btn btn-tertiary">
              <i className="fas fa-envelope" aria-hidden="true" />
              {t.notfound.buttons.contact}
            </Link>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="floating-elements" aria-hidden="true">
          <i className="fas fa-cloud cloud cloud-1" />
          <i className="fas fa-cloud cloud cloud-2" />
          <i className="fas fa-plane plane" />
        </div>
      </main>

      <Footer />
    </>
  );
}