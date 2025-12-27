// components/blog/RelatedTripCard.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  desc: string;
  image: string;
  comingSoon?: boolean;
};

const RelatedTripCard = ({ title, desc, image, comingSoon }: Props) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col">
      <img src={image} alt={title} className="h-48 w-full object-cover" />

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-serif text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{desc}</p>

        {!comingSoon ? (
          <Link
            href="#"
            className="mt-auto inline-flex items-center text-emerald-600 font-semibold"
          >
            Read More <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        ) : (
          <span className="text-gray-400 text-sm mt-auto">Coming Soon</span>
        )}
      </div>
    </div>
  );
};

export default RelatedTripCard;
