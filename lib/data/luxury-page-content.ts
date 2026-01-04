export const luxuryPageContent = {
  "kerala-luxury": {
    image: "/assets/Luxury/Kerala/kerala1-thumb.webp",
  },
  "mumbai-luxury": {
    image: "/assets/Luxury/Mumbai/mumbai1-thumb.webp",
  },
  "golden-triangle-luxury": {
    image: "/assets/Luxury/GoldenTriangle/golden-triangle-luxury-thumb.webp",
  },
  "rajasthan-luxury": {
    image: "/assets/Luxury/Rajasthan/rajasthan-luxury-thumb.webp",
  },
  "karnataka-luxury": {
    image: "/assets/Luxury/Karnataka/karnataka-luxury-thumb.webp",
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
