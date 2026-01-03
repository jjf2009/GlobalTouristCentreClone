export const LOCALES = ["en", "fr", "it", "de", "ru"] as const;

export const TOUR_CATEGORIES = {
  "day-trips": [
    "full-day-south-goa-tour", // verified
    "south-goa-sightseeing-tour", // verified // peresnt in en.ts
    "south-goa-sunset-cruise-tour", // verified // peresnt in en.ts
    "goa-in-a-day-tour", // verified // peresnt in en.ts
    "dudhsagar-spice-plantation", // verified
    "palolem-cola-beach-dolphin-spotting", // verified
    "north-goa-day-tour", // verified
    "goa-tour", // verified //prent in en.ts
    //"crocodile-sightseeing-trip", // temporarily removed (used in home)
    "yacht-day-tour", // verified
    // "grand-island-water-sports", // temporarily removed (used in home)
    "gokarna-murdeshwar-trip", // verified
    "dandeli-elephant-safari",
    "netravali-day-trip", //verified
    "mumbai-day-trip", // verified
  ],

  domestic: [
    "goa-serai-cabo-retreat", // verified
    "goa-tour", // verified //prent in en.ts
    // "mysore-ooty-tour", // temporarily removed (used in home)
    "aurangabad-heritage", // verified
    // "taj-mahal-tour", // temporarily removed (used in home)
    "kerala-tour", // verified
    "2-days-dandeli-tour-package", // verified
    "amritsar-tour-package", // verified
    "4D-golden-triangle-tour", // verified // two are there with same name
    "golden-triangle-tour-special", // verified
    "delhi-agra-trip", // verified
    "jodhpur-udaipur-tour", // temporarily removed (used in home) // verified
    "rajasthan-royal", // temporarily removed (used in desination.ts)  // verified
    "north-india-heritage-tour", // verified
    "mathura-tour-package", // verified
    "tamil-nadu-tour", //verified
    "exotic-kashmir-tour", // verified
    "sikkim-darjeeling-gangtok-tour", // verified
    // "mystic-meghalaya-tour",
    "lakshadweep-islands", // verified
    "andaman-islands-tour", // verified
    // "wondrous-wilderness",
    "hampi-badami-tour-package", // verified
    "shimoga-nature-safari", // verified
    "ajanta-ellora-caves-tour", // verified
    // "ladakh-tour",
    "varanasi-tour-package", // verified
    "bijapur-tour-package", // verified // not used anywhere
    "hyderabad-tour-package", // temporarily removed (used in html code) // verified
    "jodhpur-tour-package", // verified //temporarily added not used anywhere
     "ladakh-tour" // temporarily removed (used in en.ts) // verified
    // "meghalaya-tour", // verified // temporarily removed (used in en.ts)
  ],

  international: [
    // "maldives-luxury-tour",
    "sri-lanka-tour", // verified
    "bhutan-tour", // verified
    "bali-luxury-getaway", // verified
    "wonders-of-vietnam", // verified
    "best-of-vietnam", // temporarily removed (used in destination.ts) // verified
    // "beautiful-nepal",
    "nepal-muktinath-special", // verified
    "classic-singapore-malaysia", // verified
    "thailand-bangkok-pattaya-tour", //verified
    "thailand-bangkok-pattaya-tour-special", // verified //present in en.ts
    "thailand-tour", // verified
    "thailand-tour-special", // verified
    "turkey-istanbul-cappadocia-tour", // verified
    "glimpse-of-turkey-tour",
    "dubai-luxury-tour", // verified
    "phuket-krabi-island-tour", // verified
    "hong-kong-macau-tour", // verified
    "azerbaijan-baku-tour", // verified
    "cambodia-laos-discovery", // verified
    "georgia-caucasus-adventure", // verified
    "japan-luxury-experience", // verified
    //  "mystic-meghalaya-tour", // temporarily removed (used in en.ts)
    "kazakhstan-almaty-explorer", // temporarily removed (used in destination.ts) // verified
    // "nepal-tour", // temporarily removed (used in en.ts) // verified
  ],
} as const;
