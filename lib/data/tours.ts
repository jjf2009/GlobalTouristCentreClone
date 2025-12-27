export type TourDetails = {
  heroImage: string;
  duration: string;
  locations: number;
  rating: string;
  itinerary: {
    day: string;
    titleKey: string;
    descKey: string;
    highlight?: string;
  }[];
  gallery: {
    image: string;
    titleKey: string;
    subtitleKey: string;
  }[];
  inclusions: string[];
  exclusions: string[];
};

export const TOUR_DATA: Record<string, TourDetails> = {
  "kashmir-5n6d": {
    heroImage: "/assets/hero/kashmir-5n6d-hero.webp",
    duration: "6 Days",
    locations: 4,
    rating: "4.9/5",
    itinerary: [
      { day: "Day 1", titleKey: "day1.title", descKey: "day1.desc" },
      { day: "Day 2", titleKey: "day2.title", descKey: "day2.desc" },
      {
        day: "Day 3",
        titleKey: "day3.title",
        descKey: "day3.desc",
        highlight: "Adventure Day",
      },
      { day: "Day 4", titleKey: "day4.title", descKey: "day4.desc" },
      {
        day: "Day 5",
        titleKey: "day5.title",
        descKey: "day5.desc",
        highlight: "Signature Experience",
      },
      { day: "Day 6", titleKey: "day6.title", descKey: "day6.desc" },
    ],
    gallery: [
      {
        image: "/assets/destinations/Kashmir/Dal-Lake-Shikara.webp",
        titleKey: "gallery.dal",
        subtitleKey: "gallery.dalSub",
      },
      {
        image: "/assets/destinations/Kashmir/Gulmarg-Gondola.webp",
        titleKey: "gallery.gulmarg",
        subtitleKey: "gallery.gulmargSub",
      },
    ],
    inclusions: [
      "Accommodation",
      "Shikara Ride",
      "Private Transport",
      "Daily Meals",
      "Airport Transfers",
      "All Taxes",
    ],
    exclusions: [
      "Lunch except houseboat",
      "Entry fees",
      "Optional activities",
      "Personal expenses",
      "Travel insurance",
    ],
  },
};
