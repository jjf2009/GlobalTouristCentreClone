// components/blog/ConclusionBox.tsx

import { Button } from "@/components/ui/button";

const ConclusionBox = () => {
  return (
    <section className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-2xl p-8 sm:p-10 mb-16">
      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mb-4">
        Planning Your Andaman Trip?
      </h2>

      <p className="text-gray-700 mb-6">
        At Global Tourist Centre, we curate meaningful Andaman experiences.
      </p>

      <div className="flex gap-4">
        <Button size="lg">Enquire Now</Button>
        <Button variant="outline" size="lg">
          View Full Itinerary
        </Button>
      </div>
    </section>
  );
};

export default ConclusionBox;
