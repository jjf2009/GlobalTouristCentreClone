// components/blog/RelatedTrips.tsx

import RelatedTripCard from "./RelatedTripCard";

const RelatedTrips = () => {
  return (
    <section className="pt-8 border-t">
      <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-8">
        You Might Also Like
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <RelatedTripCard
          title="From Goa to God's Own Country"
          desc="7 Nights / 8 Days Kerala tour"
          image="/placeholder.svg"
        />
      </div>
    </section>
  );
};

export default RelatedTrips;
