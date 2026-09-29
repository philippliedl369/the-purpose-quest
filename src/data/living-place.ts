// Content data for "A Living Place in Costa Rica".
// Every figure traces to the research in kreislauf-projekt (report "Symbiotischer Anbau und Tiere Costa Rica",
// September 2026). Keep `estimate: true` wherever the research rates a statement as low confidence.

export const months = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];

/** Flowering windows, month indices into `months` (0 = Nov). Source: Costa Rica Tree Atlas, ACG, iNaturalist. */
export const blooms = [
  { name: 'Marañón', latin: 'Anacardium occidentale', from: 0, to: 2, color: '#e3a0ba', use: 'cashew' },
  { name: 'Madero negro', latin: 'Gliricidia sepium', from: 1, to: 4, color: '#c96a8e', use: 'living fence, mulch' },
  { name: 'Mango', latin: 'Mangifera indica', from: 1, to: 3, color: '#e9cf7a', use: 'fruit' },
  { name: 'Pochote', latin: 'Pachira quinata', from: 2, to: 4, color: '#eadcc6', use: 'timber, living fence' },
  { name: 'Poró', latin: 'Erythrina fusca', from: 2, to: 5, color: '#cf5a32', use: 'nitrogen, shade' },
  { name: 'Carao', latin: 'Cassia grandis', from: 3, to: 5, color: '#e39ab5', use: 'fruit, shade' },
  { name: 'Cortez amarillo', latin: 'Handroanthus ochraceus', from: 4, to: 5, color: '#e3a72f', use: 'timber', note: 'blooms in bursts of 4–5 days' },
  { name: 'Roble de sabana', latin: 'Tabebuia rosea', from: 4, to: 6, color: '#b58cbd', use: 'timber, shade' },
  { name: 'Guanacaste', latin: 'Enterolobium cyclocarpum', from: 4, to: 6, color: '#efe6d2', use: 'shade, fodder' },
  { name: 'Guayacán real', latin: 'Guaiacum sanctum', from: 4, to: 5, color: '#6f7fc0', use: 'native, near threatened' },
  { name: 'Tamarindo', latin: 'Tamarindus indica', from: 6, to: 8, color: '#d9a441', use: 'fruit' },
  { name: 'Pitahaya', latin: 'Selenicereus spp.', from: 6, to: 10, color: '#f3ecd9', use: 'fruit, night flowers' },
];

/** Dry season shading, month indices (approximate, Pacific north). */
export const drySeason = { from: 1, to: 5 };

/** Design proposal for zoning a site by dry-season water. Rated low confidence in the research. */
export const zones = [
  {
    id: 'core',
    name: 'Irrigated core',
    what: 'Vegetables, herbs, nursery, compost, worm beds and larvae, next to the houses.',
    water: 'Roof water in tanks, drip lines and clay pots, greywater where permitted.',
    care: 'Daily',
    color: '#e3a72f',
  },
  {
    id: 'orchard',
    name: 'Orchard & forest garden',
    what: 'Grafted fruit trees, chickens and stingless bees.',
    water: 'Young trees only, in their first one to three dry seasons.',
    care: 'Weekly',
    color: '#9fb56f',
  },
  {
    id: 'fields',
    name: 'Rain-fed fields',
    what: 'Maize, beans, squash, cassava and pigeon pea in the Quesungual way: mulch instead of fire.',
    water: 'Rain only. Sown at the start of the rains and again in the second planting window.',
    care: 'Seasonal',
    color: '#6f8f45',
  },
  {
    id: 'edge',
    name: 'Forest edge',
    what: 'Native useful trees planted into gaps and edges: fodder, timber, fruit.',
    water: 'None.',
    care: 'Occasional',
    color: '#3f6436',
  },
  {
    id: 'forest',
    name: 'Forest & corridor',
    what: 'Protected forest, stream banks and a corridor for wildlife. The land’s water sponge.',
    water: 'None.',
    care: 'Observe',
    color: '#1f3d2c',
  },
];

/** Annual rainfall by climate region, IMN regionalisation (high confidence). */
export const rainfall = [
  { region: 'Central Guanacaste', mm: 1800, dryMonths: 5, side: 'dry' },
  { region: 'West Nicoya, around Sámara', mm: 2385, dryMonths: 4, side: 'dry' },
  { region: 'Turrialba, Atlantic slopes', mm: 2300, dryMonths: 0, side: 'humid' },
  { region: 'Cahuita / Sixaola, Caribbean', mm: 2470, dryMonths: 0, side: 'humid' },
  { region: 'San Carlos plains', mm: 3020, dryMonths: 0, side: 'humid' },
  { region: 'Valle del General, Pérez Zeledón', mm: 3050, dryMonths: 3, side: 'humid' },
] as const;

/** Self-sufficiency stages over ten years. Values in years from the start of planting. */
export const stages = [
  {
    label: 'Vegetables & herbs',
    partial: [1, 2.5],
    full: [2.5, 10],
    partialNote: 'rainy season',
    fullNote: 'year-round, if water is secure',
    estimate: true,
  },
  {
    label: 'Eggs',
    partial: null,
    full: [1.5, 10],
    fullNote: 'from the first flock; feed is partly bought',
    estimate: false,
  },
  {
    label: 'Fruit',
    partial: [2, 4],
    full: [4, 10],
    partialNote: 'first harvests',
    fullNote: '70–80 % of fruit',
    estimate: false,
  },
  {
    label: 'Staple foods',
    partial: [3, 5],
    full: [5, 10],
    partialNote: 'yields rise from year 3',
    fullNote: 'only with enough open land',
    estimate: true,
  },
] as const;

export const avoid = [
  { name: 'Torch ginger', latin: 'Etlingera elatior', why: 'invasive', instead: null },
  { name: 'Poró gigante', latin: 'Erythrina poeppigiana', why: 'invasive', instead: 'Native Erythrina fusca in wet valley bottoms' },
  { name: 'Velvet bean', latin: 'Mucuna pruriens', why: 'invasive, fails in long dry seasons', instead: 'Jack bean (Canavalia ensiformis) as green manure' },
  { name: 'Pinto peanut', latin: 'Arachis pintoi', why: 'invasive', instead: null },
  { name: 'Ginger lily', latin: 'Hedychium coronarium', why: 'invasive', instead: null },
  { name: 'Angel’s trumpet', latin: 'Brugmansia spp.', why: 'highly toxic', instead: null },
];
