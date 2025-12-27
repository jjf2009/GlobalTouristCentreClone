import { Calendar, Tag, User } from "lucide-react";
import { blogMeta } from "./data/blogMeta";
import { HeroSection } from "@/components/hero-section";

const BlogMetaHeader = () => (
  <>
        <HeroSection
          title={t.blog.heroTitle}
          backgroundQuery="travel journal notebook coffee scenic"
        />
    <div className="flex flex-wrap gap-4 text-sm text-emerald-800/80 mb-8">
      <span className="flex items-center gap-1.5">
        <Calendar className="w-4 h-4" /> {blogMeta.date}
      </span>
      <span className="flex items-center gap-1.5">
        <Tag className="w-4 h-4" /> {blogMeta.category}
      </span>
      <span className="flex items-center gap-1.5">
        <User className="w-4 h-4" /> {blogMeta.author}
      </span>
    </div>
  </>
);

export default BlogMetaHeader;
