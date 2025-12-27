import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type RelatedTripCardProps = {
  title: string;
  desc: string;
  image: string;
  comingSoon?: boolean;
};

const RelatedTripCard: React.FC<RelatedTripCardProps> = ({
  title,
  desc,
  image,
  comingSoon = false,
}) => {
  return (
    <div className="group relative bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
            comingSoon ? "grayscale-[0.5]" : ""
          }`}
        />

        {comingSoon && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-bold px-2 py-1 rounded shadow-sm text-gray-800 uppercase tracking-wide">
            Coming Soon
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-serif text-lg font-bold text-emerald-950 mb-2 line-clamp-2">
          {title}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">
          {desc}
        </p>

        {!comingSoon ? (
          <Link
            href="#"
            className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700 group/link mt-auto"
          >
            Read More
            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
          </Link>
        ) : (
          <span className="text-sm text-gray-400 font-medium mt-auto cursor-not-allowed">
            Details arriving shortly...
          </span>
        )}
      </div>
    </div>
  );
};

export default RelatedTripCard;
