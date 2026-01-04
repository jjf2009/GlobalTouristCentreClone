"use client";

import React from "react";
import { Header } from "@/components/header";

interface LegalHeroProps {
    title: string;
    subtitle: string;
    heroImage: string;
}

const LegalHero: React.FC<LegalHeroProps> = ({ title, subtitle, heroImage }) => {
    return (
        <header
            className="relative min-h-[50vh] md:min-h-[60vh] flex items-end bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${heroImage}')`,
            }}
        >
            {/* Navigation Header */}
            <Header />

            {/* Hero Content - Left Aligned */}
            <div className="w-full px-[5%] pb-12 md:pb-16 z-10">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 drop-shadow-lg">
                    {title}
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-xl drop-shadow-md">
                    {subtitle}
                </p>
            </div>
        </header>
    );
};

export default LegalHero;
