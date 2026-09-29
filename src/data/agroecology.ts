// Language-neutral data for the agroecology exploration: numbers, months, colours.
// Every figure traces to the research in kreislauf-projekt (report "Symbiotischer Anbau und Tiere Costa Rica",
// September 2026). Texts for each language live in src/content/agroecology/.

/** Flowering windows as month indices, 0 = November. Source: Costa Rica Tree Atlas, ACG, iNaturalist. */
export const blooms = [
  { name: 'Marañón', latin: 'Anacardium occidentale', from: 0, to: 2, color: '#e3a0ba' },
  { name: 'Madero negro', latin: 'Gliricidia sepium', from: 1, to: 4, color: '#c96a8e' },
  { name: 'Mango', latin: 'Mangifera indica', from: 1, to: 3, color: '#e9cf7a' },
  { name: 'Pochote', latin: 'Pachira quinata', from: 2, to: 4, color: '#eadcc6' },
  { name: 'Poró', latin: 'Erythrina fusca', from: 2, to: 5, color: '#cf5a32' },
  { name: 'Carao', latin: 'Cassia grandis', from: 3, to: 5, color: '#e39ab5' },
  { name: 'Cortez amarillo', latin: 'Handroanthus ochraceus', from: 4, to: 5, color: '#e3a72f' },
  { name: 'Roble de sabana', latin: 'Tabebuia rosea', from: 4, to: 6, color: '#b58cbd' },
  { name: 'Guanacaste', latin: 'Enterolobium cyclocarpum', from: 4, to: 6, color: '#efe6d2' },
  { name: 'Guayacán real', latin: 'Guaiacum sanctum', from: 4, to: 5, color: '#6f7fc0' },
  { name: 'Tamarindo', latin: 'Tamarindus indica', from: 6, to: 8, color: '#d9a441' },
  { name: 'Pitahaya', latin: 'Selenicereus spp.', from: 6, to: 10, color: '#f3ecd9' },
];

/** Dry season shading as month indices (approximate, Pacific north). */
export const drySeason = { from: 1, to: 5 };

/** Annual rainfall by climate region, IMN regionalisation (high confidence). */
export const rainfall = [
  { id: 'guanacaste', mm: 1800, dryMonths: 5, side: 'dry' },
  { id: 'samara', mm: 2385, dryMonths: 4, side: 'dry' },
  { id: 'turrialba', mm: 2300, dryMonths: 0, side: 'humid' },
  { id: 'caribbean', mm: 2470, dryMonths: 0, side: 'humid' },
  { id: 'sancarlos', mm: 3020, dryMonths: 0, side: 'humid' },
  { id: 'general', mm: 3050, dryMonths: 3, side: 'humid' },
] as const;
export type RainfallId = (typeof rainfall)[number]['id'];

/** Zones ordered by dry-season water, from the house outward. */
export const zones = [
  { id: 'core', color: '#e3a72f' },
  { id: 'orchard', color: '#9fb56f' },
  { id: 'fields', color: '#6f8f45' },
  { id: 'edge', color: '#3f6436' },
  { id: 'forest', color: '#1f3d2c' },
] as const;
export type ZoneId = (typeof zones)[number]['id'];

/** What grows when, in years after planting. `partial` is shown hatched, `full` solid. */
export const growth = [
  { id: 'vegetables', partial: null, full: [0.3, 10] },
  { id: 'roots', partial: null, full: [0.5, 10] },
  { id: 'fruit', partial: [2, 5], full: [5, 10] },
  { id: 'grain', partial: [0.3, 3], full: [3, 10] },
  { id: 'tamarind', partial: null, full: [7, 10] },
  { id: 'forest', partial: [0.3, 10], full: null },
] as const;
export type GrowthId = (typeof growth)[number]['id'];

/** Plants to avoid, with scientific names. Reasons and names per language live in the content files. */
export const avoid = [
  { id: 'torchGinger', latin: 'Etlingera elatior' },
  { id: 'poroGigante', latin: 'Erythrina poeppigiana' },
  { id: 'velvetBean', latin: 'Mucuna pruriens' },
  { id: 'pintoPeanut', latin: 'Arachis pintoi' },
  { id: 'gingerLily', latin: 'Hedychium coronarium' },
  { id: 'angelsTrumpet', latin: 'Brugmansia spp.' },
] as const;
export type AvoidId = (typeof avoid)[number]['id'];
