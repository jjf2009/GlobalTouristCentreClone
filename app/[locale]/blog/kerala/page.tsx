import BlogMetaHeader from "./BlogMetaHeader";
import ContentSection from "./ContentSection";
import FeatureGrid from"./FeatureGrid";
import ItinerarySection from "./ItinerarySection";
import RelatedTrips from "./RelatedTrips";

import {
  introSection,
  discoverySection,
  groupTravelSection,
  monsoonSection,
} from "./data/sections";

export default function KeralaBlogPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <BlogMetaHeader />

      <ContentSection data={introSection} />
      <ContentSection data={discoverySection} />
      <ContentSection data={groupTravelSection} />
      <ContentSection data={monsoonSection} />

      <FeatureGrid />
      <ItinerarySection />
      <RelatedTrips />
    </main>
  );
}
