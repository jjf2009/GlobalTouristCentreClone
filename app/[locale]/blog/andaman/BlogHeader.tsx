// components/blog/BlogPostHeader.tsx

import { HeroSection } from "@/components/hero-section";
import { Calendar, Tag, User } from "lucide-react";

const BlogPostHeader = () => {
  return (
    <>
      <HeroSection
              title={t.blog.heroTitle}
              backgroundQuery="travel journal notebook coffee scenic" />
      <header className="mb-10 text-center sm:text-left">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm text-emerald-800/80 font-medium mb-6">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" /> July 2025
          </span>
          <span className="flex items-center gap-1.5">
            <Tag className="w-4 h-4" /> Photography
          </span>
          <span className="flex items-center gap-1.5">
            <User className="w-4 h-4" /> Global Tourist Centre Team
          </span>
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p className="font-serif text-xl sm:text-2xl text-emerald-950 italic">
            "Imagine yourself standing on a sunlit beach where
            turquoise-coloured waves kiss your feet..."
          </p>
          <p>
            Tucked away in the Bay of Bengal, Andaman has subtly garnered the
            reputation of being a visual paradise.
          </p>
          <p>
            Read further as we explore the most Instagrammable spots in Andaman.
          </p>
        </div>
      </header>
    </>
  );
};

export default BlogPostHeader;
