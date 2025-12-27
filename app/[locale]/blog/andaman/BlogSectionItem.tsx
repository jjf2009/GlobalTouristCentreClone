// components/blog/BlogSectionItem.tsx

import { BlogSectionData } from "../blogData";

const BlogSectionItem = ({ data }: { data: BlogSectionData }) => {
  return (
    <section className="mb-16 scroll-mt-24" id={data.id}>
      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-6">
        {data.title}
      </h2>

      <figure className="mb-6 overflow-hidden rounded-xl shadow-md bg-gray-100">
        <div className="aspect-video relative">
          <img
            src={data.image}
            alt={data.imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
        <figcaption className="p-3 text-center text-sm italic text-emerald-800/70 bg-emerald-50/50">
          {data.caption}
        </figcaption>
      </figure>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        {data.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
};

export default BlogSectionItem;
