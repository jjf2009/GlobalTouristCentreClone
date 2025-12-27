// app/blog/[slug]/page.tsx

import BlogPostHeader from "./BlogHeader";
import BlogSectionItem from "./BlogSectionItem";
import ConclusionBox from "./ConclusionBox";
import RelatedTrips from "./RelatedTrips";
import { blogSections } from "../blogData";

export default function BlogPostPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <BlogPostHeader />

      {blogSections.map((section) => (
        <BlogSectionItem key={section.id} data={section} />
      ))}

      <ConclusionBox />
      <RelatedTrips />
    </main>
  );
}
