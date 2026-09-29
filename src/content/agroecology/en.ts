import type { AgroecologyContent } from './types';

export const en: AgroecologyContent = {
  meta: {
    title: 'The beauty and ingenuity of agroecology',
    description:
      'How soil, water, plants and animals work together in Costa Rica’s dry and humid tropics, and why the most sophisticated systems are often the most beautiful.',
  },
  card: {
    title: 'The beauty and ingenuity of agroecology',
    summary:
      'How soil, water, plants and animals work together in Costa Rica’s dry and humid tropics, and why the most sophisticated systems are often the most beautiful.',
    place: 'Costa Rica · Agroecology',
  },
  hero: {
    eyebrow: 'Exploration · Costa Rica',
    title: 'The beauty and <em>ingenuity</em> of agroecology',
    lede: 'How soil, water, plants and animals work together in Costa Rica’s dry and humid tropics, and why the most sophisticated systems are often the most beautiful.',
  },
  intro: {
    eyebrow: 'Why agroecology',
    title: 'Farms that work <em>like ecosystems</em>',
    text: 'Agroecology designs farms the way nature builds ecosystems: many species in layers, soil that is never bare, and cycles in which what one part leaves behind feeds another. Costa Rica is an ideal place to see this, because tropical dry forest and rainforest lie side by side in one small country.',
    facts: [
      { value: '~90%', label: 'less soil erosion when crops grow under mulch instead of after burning' },
      { value: '< 10 years', label: 'for soils under regrowing tropical forest to reach 90% of old-growth levels' },
      { value: 'Dec–May', label: 'native trees in flower through the dry season' },
    ],
  },
  principles: {
    eyebrow: 'Principles',
    title: 'Four ideas behind <em>good design</em>',
    items: [
      {
        title: 'Start with water',
        text: 'Design the water cycle first: catch the rain, let it soak into the ground, store it and use it more than once. In a long dry season, stored water decides what can grow.',
      },
      {
        title: 'Design for tomorrow’s climate',
        text: 'Plant for the conditions of the coming decades, not the average of the past thirty years. The trees planted today will live through them.',
      },
      {
        title: 'One system, not separate measures',
        text: 'Crops, animals, soil, water and energy interlock. What one part leaves behind, another part lives on.',
      },
      {
        title: 'Beauty and function together',
        text: 'The most sophisticated systems are often the most beautiful: flowering fodder trees, water as mirror and habitat, paths that invite a walk.',
      },
    ],
  },
  climate: {
    eyebrow: 'Two climate worlds',
    title: 'Where the water is, <em>and when it falls</em>',
    lede: 'Costa Rica packs very different climates into a small country. On the dry Pacific coast, water is the limit. Inland, water is plentiful and the work shifts to fighting fungi and weeds.',
    regions: {
      guanacaste: 'Central Guanacaste',
      samara: 'West Nicoya, around Sámara',
      turrialba: 'Turrialba, Atlantic slopes',
      caribbean: 'Cahuita / Sixaola, Caribbean',
      sancarlos: 'San Carlos plains',
      general: 'Valle del General, Pérez Zeledón',
    },
    dryMonths: (n) => `${n} dry months`,
    noDry: 'no dry season',
    legendDry: 'Dry Pacific',
    legendHumid: 'Humid inland',
    caption:
      'Annual rainfall and dry months by climate region, from Costa Rica’s national weather service IMN (high confidence). What separates the regions is less the annual total than the length of the dry season.',
    dry: {
      title: 'Dry Pacific',
      text: 'Tropical dry forest with four to five dry months. Clay-rich soils, fertile but hard and cracked in the dry season. The main task is to store and save water.',
    },
    humid: {
      title: 'Humid inland',
      text: 'Little or no dry season. Acidic, leached soils, fungal diseases, more weeding and pruning. The bottleneck moves from water to work.',
    },
    quote:
      'Around Sámara it rains about as much in a year as on the Atlantic slopes of Turrialba. The difference is the rhythm: only about 4% of it falls between December and March.',
    quoteLabel: 'Same rain, different rhythm',
  },
  techniques: {
    eyebrow: 'Ingenuity',
    title: 'Small techniques, <em>big effects</em>',
    lede: 'Some of the most effective ideas in agroecology are strikingly simple. Each one works with a natural process instead of against it.',
    items: [
      {
        title: 'Mulch instead of fire',
        text: 'In the Quesungual system of Honduras, farmers prune the trees in their fields and leave the cuttings on the ground instead of burning. The mulch holds soil and water in place, and yields rise over the years.',
        stat: '1,250 → 2,760',
        statLabel: 'kg of maize per hectare, year 1 to year 10',
        source: 'FAO 2005',
      },
      {
        title: 'Many crops, one field',
        text: 'Maize, beans and squash grown together in a milpa produce more than the same crops on separate plots. The land equivalent ratio measures the gain: 1.0 means no advantage.',
        stat: '1.16–2.78',
        statLabel: 'land equivalent ratio of milpa fields',
        source: 'Mota-Cruz et al. 2025; Padilla-Fidencio et al. 2022',
      },
      {
        title: 'Clay pots that water from below',
        text: 'Unglazed clay pots, or ollas, are buried next to the plants and filled with water, which seeps slowly through the walls to the roots. Ideal for herbs and vegetables, not for trees.',
        stat: '60–70%',
        statLabel: 'less water than watering by hand',
        source: 'University of Arizona Extension',
      },
      {
        title: 'Shade for the pond',
        text: 'Open ponds lose water to the sun every day. Planting shade along their east and west sides markedly reduces evaporation.',
        stat: 'up to 40%',
        statLabel: 'less evaporation',
        source: 'MEFCCA, COSUDE & CATIE 2018',
      },
      {
        title: 'Fences that grow',
        text: 'Cuttings of madero negro root into living fence posts. They carry pitahaya vines, give cattle protein-rich leaves and flower pink in the dry season.',
        stat: '20–30%',
        statLabel: 'crude protein in madero negro leaves',
        source: 'Costa Rica Tree Atlas',
      },
      {
        title: 'Windbreaks that breathe',
        text: 'A hedge works best when it lets 40–60% of the wind through and has no gaps, which would act like nozzles.',
        stat: '50%',
        statLabel: 'of open-field wind speed, ten hedge heights downwind',
        source: 'University of Nebraska Extension',
      },
      {
        title: 'Waste into protein',
        text: 'Larvae of the black soldier fly, native to the Americas, eat kitchen and harvest waste. They become feed for chickens and fish, and their residue goes to the compost.',
        stat: '≈ 5 kg',
        statLabel: 'of waste per m² of larvae bed per day',
        source: 'Eawag 2017; UCR 2025',
      },
      {
        title: 'Charcoal for the soil',
        text: 'Prunings can be turned into biochar in a simple cone-shaped pit. It is not a fertiliser: it works best when charged in compost before it goes into the soil.',
        stat: '≈ 22%',
        statLabel: 'of dry wood becomes biochar in about three hours',
        source: 'Cornelissen et al. 2016; CICA-UCR 2023',
      },
      {
        title: 'Night and day pollinators',
        text: 'Pitahaya flowers at night. In a study in Yucatán, day visitors such as bees and beetles added to the work of night pollinators and raised fruit set.',
        stat: '75.6 → 95.6%',
        statLabel: 'fruit set without and with day visitors',
        source: 'Rocha et al. 2026, Yucatán',
      },
    ],
  },
  zones: {
    eyebrow: 'Design',
    title: 'A garden <em>ordered by water</em>',
    lede: 'A classic principle of permaculture design: place each element by how much water and care it needs, from a small irrigated core by the house to forest that needs neither.',
    items: {
      core: {
        name: 'Irrigated core',
        what: 'Vegetables, herbs, nursery, compost, worm beds and larvae, close to the house.',
        water: 'Roof water in tanks, drip lines and clay pots, reused greywater where permitted.',
        care: 'Daily',
      },
      orchard: {
        name: 'Orchard & forest garden',
        what: 'Fruit trees in layers, with chickens and stingless bees.',
        water: 'Young trees only, in their first one to three dry seasons.',
        care: 'Weekly',
      },
      fields: {
        name: 'Rain-fed fields',
        what: 'Maize, beans, squash, cassava and pigeon pea under mulch instead of fire.',
        water: 'Rain only, sown with the first rains.',
        care: 'Seasonal',
      },
      edge: {
        name: 'Forest edge',
        what: 'Native useful trees planted into gaps and edges: fodder, timber, fruit.',
        water: 'None.',
        care: 'Occasional',
      },
      forest: {
        name: 'Forest & corridor',
        what: 'Protected forest, stream banks and a corridor for wildlife: the land’s water sponge.',
        water: 'None.',
        care: 'Observe',
      },
    },
    labels: {
      water: 'Water',
      care: 'Care',
      annotation: 'Outward: less water, less care',
      figureTitle: 'Zones ordered by dry-season water, from the house outward',
      caption:
        'A general design pattern. How large each zone can be depends on water, slope and the legal status of the land.',
    },
  },
  bloom: {
    eyebrow: 'Beauty',
    title: 'The dry season becomes <em>the flowering season</em>',
    lede: 'Native useful trees flower from December to May, exactly when the dry forest stands bare. Madero negro is living fence, mulch and fodder at once, and turns pink in the dry months.',
    season: 'Dry season',
    flowers: (from, to) => `flowers from ${from} to ${to}`,
    caption:
      'Flowering months from the Costa Rica Tree Atlas and the Área de Conservación Guanacaste, poró from iNaturalist flowering records (medium confidence). Cortez amarillo opens all its flowers at once, about nine days after a cool day or a rain in the dry season, and they last only four to five days.',
  },
  animals: {
    eyebrow: 'Animals',
    title: 'Building the cycle <em>from the bottom up</em>',
    lede: 'The order follows three questions: how much water an animal needs, how high the legal hurdle is, and how much it closes the cycle.',
    items: [
      {
        when: 'First',
        title: 'Worms and black soldier fly larvae',
        text: 'They turn kitchen and garden waste into compost and protein, and need almost no water.',
      },
      {
        when: 'Then',
        title: 'Chickens',
        text: 'They turn larvae and leftovers into eggs and manure. Their feed is the catch: a hen eats about 130 g a day, and foraging covers only a small part.',
      },
      {
        when: 'Alongside',
        title: 'Stingless bees',
        text: 'Native mariola bees pollinate and fascinate. In Costa Rica every meliponary must be registered, and colonies may not be bought or moved. A colony gives 1–2 kg of honey a year.',
      },
      {
        when: 'With a cool room',
        title: 'Oyster mushrooms',
        text: 'They grow on harvest leftovers. Above about 36 °C green mould takes over, so in hot regions they need a cool room or the rainy season.',
      },
      {
        when: 'Later, optional',
        title: 'Pigs on deep litter',
        text: 'They turn bedding into compost and save about 46 litres of water per pig per day compared with washed pens. But in Costa Rica even a single pig needs a veterinary operating certificate.',
      },
    ],
    wildTitle: 'Wild neighbours',
    wild: [
      '<strong>114</strong> bat species live in Costa Rica. They pollinate, spread seeds and eat insects.',
      '<strong>14</strong> hummingbird species have been recorded on the Nicoya Peninsula.',
      '<strong>Morpho</strong> butterflies are seen there all year, even in the dry season.',
      '<strong>Fireflies</strong> peak in May, when the rains return.',
    ],
  },
  avoid: {
    eyebrow: 'What to avoid',
    title: 'Beautiful, <em>but not here</em>',
    lede: 'Several favourite permaculture and garden plants are listed as invasive in Costa Rica, and some are toxic. Where research names a native alternative, it is given.',
    items: {
      torchGinger: { name: 'Torch ginger', why: 'invasive' },
      poroGigante: { name: 'Poró gigante', why: 'invasive', instead: 'Native Erythrina fusca in wet valley bottoms' },
      velvetBean: {
        name: 'Velvet bean',
        why: 'invasive, fails in long dry seasons',
        instead: 'Jack bean (Canavalia ensiformis) as green manure',
      },
      pintoPeanut: { name: 'Pinto peanut', why: 'invasive' },
      gingerLily: { name: 'Ginger lily', why: 'invasive' },
      angelsTrumpet: { name: 'Angel’s trumpet', why: 'highly toxic' },
    },
  },
  growth: {
    eyebrow: 'Time',
    title: 'What grows <em>when</em>',
    lede: 'Vegetables within months, fruit within years, forest trees within decades. A living system matures in layers of time.',
    rows: {
      vegetables: { label: 'Vegetables & herbs', fullNote: 'within months of the first rains' },
      roots: { label: 'Root crops', fullNote: 'cassava after about 6 months, yam after 7–10' },
      fruit: {
        label: 'Grafted fruit trees',
        partialNote: 'first harvests after 2–5 years',
        fullNote: 'cashew peaks around year 7',
      },
      grain: {
        label: 'Grain under mulch',
        partialNote: 'no gain over burning in years 1–2',
        fullNote: 'yields rise from year 3',
      },
      tamarind: { label: 'Tamarind', fullNote: 'first fruit after 7–10 years' },
      forest: { label: 'Forest trees', partialNote: 'cortez amarillo and guayacán mature over decades' },
    },
    year: 'Year',
    caption:
      'Years after planting. Values are general for each species and system, not measurements from a particular site. Grain yields refer to the Quesungual system in Honduras.',
  },
  open: {
    eyebrow: 'Open questions',
    title: 'Questions <em>worth exploring</em>',
    items: [
      {
        title: 'How will the dry season change?',
        text: 'How long and how dry will dry seasons on the Pacific be by 2050? Climate projections are the next piece of research.',
      },
      {
        title: 'How far can water be reused?',
        text: 'Greywater, constructed wetlands and rain harvesting could close much of the water cycle. Which solutions work in the tropics, and within Costa Rica’s rules?',
      },
      {
        title: 'Does syntropic farming work in long dry seasons?',
        text: 'Most evidence comes from Brazil and Bolivia. On Costa Rica’s dry Pacific, only one hectare has been documented so far.',
      },
      {
        title: 'Which natives can replace invasive favourites?',
        text: 'Several popular ground covers and ornamentals are invasive in Costa Rica. Native alternatives are still thinly documented.',
      },
    ],
    sources:
      'About the figures: they come from research carried out in September 2026, drawing on Costa Rica’s national weather service (IMN), FAO, CATIE, INTA, the University of Costa Rica, SINAC and peer-reviewed studies. Statements rated as low confidence are marked as estimates, and examples from outside Costa Rica are named as such.',
  },
};
