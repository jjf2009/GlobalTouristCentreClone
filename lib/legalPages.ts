import type { Locale } from "@/lib/i18n/translations";

export const legalPages = {
  "privacy-policy": {
    heroImage: "/privacypolicy-hero.webp",
    translations: {
      en: {
        title: "Privacy Policy",
        subtitle: "Your privacy is important to us",
        lastUpdated: "December 2023",
        sections: [
          {
            title: "Information We Collect",
            content: [
              "Personal identification information",
              "Contact information",
              "Travel and booking details",
              "Technical information",
              "Other voluntary information",
            ],
          },
          {
            title: "How We Use Your Information",
            content: [
              "Process bookings and services",
              "Customer communication",
              "Support and improvements",
              "Legal and security obligations",
            ],
          },
        ],
      },
      ru: {
        title: "Политика конфиденциальности",
        subtitle: "Ваша конфиденциальность важна для нас",
        lastUpdated: "Декабрь 2023",
        sections: [
          {
            title: "Какие данные мы собираем",
            content: [
              "Персональная информация",
              "Контактные данные",
              "Детали поездок",
            ],
          },
        ],
      },
    },
  },

  "terms-and-conditions": {
    heroImage: "/terms-hero.jpg",
    translations: {
      en: {
        title: "Terms & Conditions",
        subtitle: "Please read carefully",
        lastUpdated: "December 2023",
        sections: [
          {
            title: "Acceptance of Terms",
            content: ["By using this website you agree to the terms"],
          },
        ],
      },
    },
  },
} as const;
