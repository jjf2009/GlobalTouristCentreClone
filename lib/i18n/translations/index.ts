import { en } from "./en";
import { it } from "./it";
import {fr} from "./fr";
import { ru } from "./ru";
import { de } from "./de";

export const translations = {
  en,
  fr,
  it,
  ru,
  de,
} as const;

export type Locale = keyof typeof translations;
export type TranslationKeys = typeof translations.en;
export type ExperienceId = keyof typeof translations.en.experiences.items;
export type CollectionId = keyof typeof translations.en.collections.items;

/* ✅ NEW — tour slug typing */
export type TripId =
  keyof typeof translations.en.trips;