export const luxuryPageContent = {
  "kerala-luxury": {
    image: "/assets/Luxury/Kerala/Kerala Backwaters.webp",
  },
  "mumbai-luxury": {
    image: "/assets/Luxury/Mumbai/mumbai-hero.webp",
  },
  "golden-triangle-luxury": {
    image: "/assets/Luxury/Golden Triangle/golden-triangle-thumb.webp",
  },
  "rajasthan-luxury": {
    image: "/assets/Luxury/Rajasthan/Rajasthan-Luxury-hero.webp",
  },
  "karnataka-luxury": {
    image: "/assets/Luxury/Karnataka/hero.webp",
  },

} as const;

export const LUXURY_TOUR_SLUGS = [
  "4n-5d-rajasthan-luxury-package",
  "6n-7d-golden-triangle-luxury-tour-package",
  "6n-7d-rajasthan-luxury-package",
  "golden-triangle-luxury-package",
  "karnataka-luxury-package",
  "kerala-luxury-package",
  "mumbai-luxury-package",
  "rajasthan-luxury-package",
  "kerala-luxury-tour-package",
] as const;


export type LuxurySlug = keyof typeof luxuryPageContent;
export type LuxuryTourSlug = (typeof LUXURY_TOUR_SLUGS)[number];
