import React from "react";
import RelatedTripCard from "./RelatedTripCard";

const RelatedTrips: React.FC = () => {
  return (
    <section className="pt-8 border-t border-gray-100">
      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-8">
        You Might Also Like
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <RelatedTripCard
          title="Click, Capture & Chill: Andaman's Most Instagram-Worthy Places"
          desc="6 Nights / 7 Days tropical paradise with snorkeling and island hopping."
          image="/placeholder.svg?height=400&width=600&text=Andaman"
        />

        <RelatedTripCard
          title="Sikkim-Darjeeling-Gangtok Tour"
          desc="6 Night / 7 Day Himalayan adventure exploring tea gardens."
          image="/placeholder.svg?height=400&width=600&text=Sikkim"
          comingSoon
        />

        <RelatedTripCard
          title="Extreme South Goa Exploration"
          desc="Full day tour of pristine beaches and island hopping."
          image="/placeholder.svg?height=400&width=600&text=Goa"
          comingSoon
        />
      </div>
    </section>
  );
};

export default RelatedTrips;
