export const FILTERS_BY_SLUG = {
  domestic: [
    { key: "all", label: "All" },
    { key: "north", label: "North India" },
    { key: "south", label: "South India" },
    { key: "east", label: "East & North-East India" },
    { key: "west", label: "West India" },
    { key: "island", label: "Islands" },
  ],
  international: [
    { key: "all", label: "All" },
    { key: "asia", label: "Asia" },
    { key: "europe", label: "Europe" },
    { key: "southeast-asia", label: "SouthEast Asia" },
  ],
  "day-trips": null,
} as const;
