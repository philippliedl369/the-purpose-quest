import type { AgroecologyContent } from './types';

export const de: AgroecologyContent = {
  meta: {
    title: 'Die Schönheit und Raffinesse der Agrarökologie',
    description:
      'Wie Boden, Wasser, Pflanzen und Tiere in den trockenen und feuchten Tropen Costa Ricas zusammenwirken – und warum die raffiniertesten Systeme oft die schönsten sind.',
  },
  card: {
    title: 'Die Schönheit und Raffinesse der Agrarökologie',
    summary:
      'Wie Boden, Wasser, Pflanzen und Tiere in den trockenen und feuchten Tropen Costa Ricas zusammenwirken – und warum die raffiniertesten Systeme oft die schönsten sind.',
    place: 'Costa Rica · Agrarökologie',
  },
  hero: {
    eyebrow: 'Erkundung · Costa Rica',
    title: 'Die Schönheit und <em>Raffinesse</em> der Agrarökologie',
    lede: 'Wie Boden, Wasser, Pflanzen und Tiere in den trockenen und feuchten Tropen Costa Ricas zusammenwirken – und warum die raffiniertesten Systeme oft die schönsten sind.',
  },
  intro: {
    eyebrow: 'Warum Agrarökologie',
    title: 'Landwirtschaft, die <em>wie ein Ökosystem</em> funktioniert',
    text: 'Agrarökologie gestaltet Landwirtschaft so, wie die Natur Ökosysteme baut: viele Arten in Stockwerken, ein Boden, der nie nackt ist, und Kreisläufe, in denen das, was ein Teil zurücklässt, einen anderen ernährt. Costa Rica ist dafür ein ideales Anschauungsfeld, denn tropischer Trockenwald und Regenwald liegen hier in einem kleinen Land nebeneinander.',
    facts: [
      { value: '~90 %', label: 'weniger Bodenerosion, wenn Kulturen unter Mulch statt nach Brandrodung wachsen' },
      { value: '< 10 Jahre', label: 'bis Böden unter nachwachsendem Tropenwald 90 % des Altwaldniveaus erreichen' },
      { value: 'Dez–Mai', label: 'blühen heimische Bäume durch die Trockenzeit' },
    ],
  },
  principles: {
    eyebrow: 'Prinzipien',
    title: 'Vier Ideen hinter <em>guter Gestaltung</em>',
    items: [
      {
        title: 'Wasser zuerst',
        text: 'Zuerst den Wasserkreislauf gestalten: Regen auffangen, im Boden versickern lassen, speichern und mehrfach nutzen. In einer langen Trockenzeit entscheidet gespeichertes Wasser, was wachsen kann.',
      },
      {
        title: 'Für das Klima von morgen',
        text: 'Für die Bedingungen der kommenden Jahrzehnte pflanzen, nicht für den Durchschnitt der letzten dreißig Jahre. Die Bäume, die heute gepflanzt werden, erleben sie.',
      },
      {
        title: 'Ein System statt Einzelmaßnahmen',
        text: 'Pflanzen, Tiere, Boden, Wasser und Energie greifen ineinander. Was ein Teil zurücklässt, davon lebt ein anderer.',
      },
      {
        title: 'Schönheit und Funktion zusammen',
        text: 'Die raffiniertesten Systeme sind oft die schönsten: blühende Futterbäume, Wasser als Spiegel und Lebensraum, Wege, die zum Gehen einladen.',
      },
    ],
  },
  climate: {
    eyebrow: 'Zwei Klimawelten',
    title: 'Wo das Wasser ist, <em>und wann es fällt</em>',
    lede: 'Costa Rica vereint sehr verschiedene Klimazonen auf kleinem Raum. An der trockenen Pazifikküste ist Wasser die Grenze. Im Landesinneren gibt es Wasser im Überfluss, und die Arbeit verlagert sich auf den Kampf gegen Pilze und Unkraut.',
    regions: {
      guanacaste: 'Zentrales Guanacaste',
      samara: 'West-Nicoya, Raum Sámara',
      turrialba: 'Turrialba, Atlantikhänge',
      caribbean: 'Cahuita / Sixaola, Karibik',
      sancarlos: 'Ebene von San Carlos',
      general: 'Valle del General, Pérez Zeledón',
    },
    dryMonths: (n) => `${n} Trockenmonate`,
    noDry: 'keine Trockenzeit',
    legendDry: 'Trockener Pazifik',
    legendHumid: 'Feuchtes Inland',
    caption:
      'Jahresniederschlag und Trockenmonate nach Klimaregion, vom nationalen Wetterdienst IMN (hohe Konfidenz). Die Regionen unterscheiden sich weniger in der Jahresmenge als in der Länge der Trockenzeit.',
    dry: {
      title: 'Trockener Pazifik',
      text: 'Tropischer Trockenwald mit vier bis fünf Trockenmonaten. Tonreiche Böden, fruchtbar, aber in der Trockenzeit hart und rissig. Die Hauptaufgabe ist, Wasser zu speichern und zu sparen.',
    },
    humid: {
      title: 'Feuchtes Inland',
      text: 'Kaum oder keine Trockenzeit. Saure, ausgewaschene Böden, Pilzkrankheiten, mehr Jäten und Schneiden. Der Engpass verschiebt sich vom Wasser zur Arbeit.',
    },
    quote:
      'Rund um Sámara regnet es im Jahr etwa so viel wie an den Atlantikhängen von Turrialba. Der Unterschied ist der Rhythmus: Nur etwa 4 % davon fallen zwischen Dezember und März.',
    quoteLabel: 'Gleicher Regen, anderer Rhythmus',
  },
  techniques: {
    eyebrow: 'Raffinesse',
    title: 'Kleine Techniken, <em>große Wirkung</em>',
    lede: 'Einige der wirksamsten Ideen der Agrarökologie sind verblüffend einfach. Jede arbeitet mit einem natürlichen Prozess statt gegen ihn.',
    items: [
      {
        title: 'Mulch statt Feuer',
        text: 'Im Quesungual-System in Honduras schneiden Bäuerinnen und Bauern die Bäume auf ihren Feldern zurück und lassen das Schnittgut liegen, statt zu brennen. Der Mulch hält Boden und Wasser, und die Erträge steigen über die Jahre.',
        stat: '1.250 → 2.760',
        statLabel: 'kg Mais pro Hektar, Jahr 1 bis Jahr 10',
        source: 'FAO 2005',
      },
      {
        title: 'Viele Kulturen, ein Feld',
        text: 'Mais, Bohnen und Kürbis gemeinsam in einer Milpa bringen mehr als dieselben Kulturen auf getrennten Flächen. Das Land Equivalent Ratio misst den Gewinn: 1,0 bedeutet keinen Vorteil.',
        stat: '1,16–2,78',
        statLabel: 'Land Equivalent Ratio von Milpa-Feldern',
        source: 'Mota-Cruz et al. 2025; Padilla-Fidencio et al. 2022',
      },
      {
        title: 'Tonkrüge, die von unten gießen',
        text: 'Unglasierte Tonkrüge, Ollas genannt, werden neben den Pflanzen eingegraben und mit Wasser gefüllt, das langsam durch die Wand zu den Wurzeln sickert. Ideal für Kräuter und Gemüse, nicht für Bäume.',
        stat: '60–70 %',
        statLabel: 'weniger Wasser als beim Gießen von Hand',
        source: 'University of Arizona Extension',
      },
      {
        title: 'Schatten für den Teich',
        text: 'Offene Teiche verlieren jeden Tag Wasser an die Sonne. Schattenpflanzen an ihrer Ost- und Westseite senken die Verdunstung deutlich.',
        stat: 'bis 40 %',
        statLabel: 'weniger Verdunstung',
        source: 'MEFCCA, COSUDE & CATIE 2018',
      },
      {
        title: 'Zäune, die wachsen',
        text: 'Stecklinge von Madero negro wurzeln zu lebenden Zaunpfosten. Sie tragen Pitahaya-Ranken, liefern Rindern eiweißreiches Laub und blühen in der Trockenzeit rosa.',
        stat: '20–30 %',
        statLabel: 'Rohprotein in den Blättern von Madero negro',
        source: 'Costa Rica Tree Atlas',
      },
      {
        title: 'Windschutz, der atmet',
        text: 'Eine Hecke wirkt am besten, wenn sie 40–60 % des Windes durchlässt und keine Lücken hat, die wie Düsen wirken.',
        stat: '50 %',
        statLabel: 'der Freiland-Windgeschwindigkeit, zehn Heckenhöhen hinter der Hecke',
        source: 'University of Nebraska Extension',
      },
      {
        title: 'Abfall wird Eiweiß',
        text: 'Larven der Schwarzen Soldatenfliege, heimisch in Amerika, fressen Küchen- und Ernteabfälle. Sie werden zu Futter für Hühner und Fische, ihr Rückstand wandert in den Kompost.',
        stat: '≈ 5 kg',
        statLabel: 'Abfall pro m² Larvenbeet und Tag',
        source: 'Eawag 2017; UCR 2025',
      },
      {
        title: 'Kohle für den Boden',
        text: 'Schnittholz lässt sich in einer einfachen kegelförmigen Grube zu Pflanzenkohle machen. Sie ist kein Dünger: Am besten wirkt sie, wenn sie vorher im Kompost aufgeladen wird.',
        stat: '≈ 22 %',
        statLabel: 'des trockenen Holzes werden in rund drei Stunden zu Pflanzenkohle',
        source: 'Cornelissen et al. 2016; CICA-UCR 2023',
      },
      {
        title: 'Bestäuber bei Nacht und bei Tag',
        text: 'Pitahaya blüht nachts. In einer Studie in Yucatán ergänzten Tagbesucher wie Bienen und Käfer die nächtlichen Bestäuber und erhöhten den Fruchtansatz.',
        stat: '75,6 → 95,6 %',
        statLabel: 'Fruchtansatz ohne und mit Tagbesuchern',
        source: 'Rocha et al. 2026, Yucatán',
      },
    ],
  },
  zones: {
    eyebrow: 'Gestaltung',
    title: 'Ein Garten, <em>nach Wasser geordnet</em>',
    lede: 'Ein klassisches Prinzip der Permakultur: Jedes Element wird nach seinem Bedarf an Wasser und Pflege platziert, vom kleinen bewässerten Kern am Haus bis zum Wald, der beides nicht braucht.',
    items: {
      core: {
        name: 'Bewässerter Kern',
        what: 'Gemüse, Kräuter, Anzucht, Kompost, Wurmbeete und Larven, nah am Haus.',
        water: 'Dachwasser in Tanks, Tropfschläuche und Tonkrüge, Grauwasser, wo erlaubt.',
        care: 'Täglich',
      },
      orchard: {
        name: 'Obst- und Waldgarten',
        what: 'Obstbäume in Stockwerken, mit Hühnern und stachellosen Bienen.',
        water: 'Nur junge Bäume, in ihren ersten ein bis drei Trockenzeiten.',
        care: 'Wöchentlich',
      },
      fields: {
        name: 'Regenfeldbau',
        what: 'Mais, Bohnen, Kürbis, Maniok und Straucherbse unter Mulch statt Feuer.',
        water: 'Nur Regen, gesät mit den ersten Niederschlägen.',
        care: 'Saisonal',
      },
      edge: {
        name: 'Waldrand',
        what: 'Heimische Nutzbäume in Lücken und Rändern: Futter, Holz, Obst.',
        water: 'Keine.',
        care: 'Gelegentlich',
      },
      forest: {
        name: 'Wald und Korridor',
        what: 'Geschützter Wald, Bachufer und ein Korridor für Wildtiere: der Wasserspeicher des Landes.',
        water: 'Keine.',
        care: 'Beobachten',
      },
    },
    labels: {
      water: 'Wasser',
      care: 'Pflege',
      annotation: 'Nach außen: weniger Wasser, weniger Pflege',
      figureTitle: 'Zonen nach Wasserbedarf in der Trockenzeit, vom Haus nach außen',
      caption:
        'Ein allgemeines Gestaltungsmuster. Wie groß jede Zone sein kann, hängt von Wasser, Hangneigung und dem rechtlichen Status des Landes ab.',
    },
  },
  bloom: {
    eyebrow: 'Schönheit',
    title: 'Die Trockenzeit wird <em>zur Blütezeit</em>',
    lede: 'Heimische Nutzbäume blühen von Dezember bis Mai, genau dann, wenn der Trockenwald kahl steht. Madero negro ist Lebendzaun, Mulch und Futter zugleich und färbt sich in den trockenen Monaten rosa.',
    season: 'Trockenzeit',
    flowers: (from, to) => `blüht von ${from} bis ${to}`,
    caption:
      'Blühmonate aus dem Costa Rica Tree Atlas und dem Área de Conservación Guanacaste, Poró aus Blühbeobachtungen auf iNaturalist (mittlere Konfidenz). Cortez amarillo öffnet alle Blüten gleichzeitig, etwa neun Tage nach einem kühlen Tag oder einem Regen in der Trockenzeit, und sie halten nur vier bis fünf Tage.',
  },
  animals: {
    eyebrow: 'Tiere',
    title: 'Den Kreislauf <em>von unten aufbauen</em>',
    lede: 'Die Reihenfolge folgt drei Fragen: Wie viel Wasser braucht ein Tier, wie hoch ist die rechtliche Hürde, und wie sehr schließt es den Kreislauf?',
    items: [
      {
        when: 'Zuerst',
        title: 'Würmer und Larven der Soldatenfliege',
        text: 'Sie machen aus Küchen- und Gartenabfällen Kompost und Eiweiß und brauchen fast kein Wasser.',
      },
      {
        when: 'Dann',
        title: 'Hühner',
        text: 'Sie verwandeln Larven und Reste in Eier und Mist. Der Haken ist ihr Futter: Eine Henne frisst etwa 130 g am Tag, und der Auslauf deckt davon nur einen kleinen Teil.',
      },
      {
        when: 'Daneben',
        title: 'Stachellose Bienen',
        text: 'Heimische Mariola-Bienen bestäuben und faszinieren. In Costa Rica muss jede Meliponenhaltung registriert werden, und Völker dürfen weder gekauft noch transportiert werden. Ein Volk gibt 1–2 kg Honig im Jahr.',
      },
      {
        when: 'Mit kühlem Raum',
        title: 'Austernpilze',
        text: 'Sie wachsen auf Ernteresten. Über etwa 36 °C setzt sich grüner Schimmel durch, in heißen Regionen brauchen sie deshalb einen kühlen Raum oder die Regenzeit.',
      },
      {
        when: 'Später, optional',
        title: 'Schweine auf Tiefstreu',
        text: 'Sie machen aus Einstreu Kompost und sparen gegenüber gewaschenen Ställen rund 46 Liter Wasser pro Tier und Tag. In Costa Rica braucht aber schon ein einzelnes Schwein ein veterinärrechtliches Betriebszertifikat.',
      },
    ],
    wildTitle: 'Wilde Nachbarn',
    wild: [
      '<strong>114</strong> Fledermausarten leben in Costa Rica. Sie bestäuben, verbreiten Samen und fressen Insekten.',
      '<strong>14</strong> Kolibriarten wurden auf der Halbinsel Nicoya beobachtet.',
      '<strong>Morphofalter</strong> sind dort das ganze Jahr zu sehen, auch in der Trockenzeit.',
      '<strong>Glühwürmchen</strong> haben ihren Höhepunkt im Mai, wenn der Regen zurückkehrt.',
    ],
  },
  avoid: {
    eyebrow: 'Was man meiden sollte',
    title: 'Schön, <em>aber nicht hier</em>',
    lede: 'Mehrere beliebte Permakultur- und Gartenpflanzen gelten in Costa Rica als invasiv, einige sind giftig. Wo die Forschung eine heimische Alternative nennt, steht sie dabei.',
    items: {
      torchGinger: { name: 'Fackelingwer', why: 'invasiv' },
      poroGigante: { name: 'Poró gigante', why: 'invasiv', instead: 'Heimische Erythrina fusca in feuchten Talböden' },
      velvetBean: {
        name: 'Samtbohne',
        why: 'invasiv, versagt in langen Trockenzeiten',
        instead: 'Jackbohne (Canavalia ensiformis) als Gründüngung',
      },
      pintoPeanut: { name: 'Pinto-Erdnuss', why: 'invasiv' },
      gingerLily: { name: 'Weiße Ingwerlilie', why: 'invasiv' },
      angelsTrumpet: { name: 'Engelstrompete', why: 'hochgiftig' },
    },
  },
  growth: {
    eyebrow: 'Zeit',
    title: 'Was <em>wann</em> wächst',
    lede: 'Gemüse in Monaten, Obst in Jahren, Waldbäume in Jahrzehnten. Ein lebendiges System reift in Schichten der Zeit.',
    rows: {
      vegetables: { label: 'Gemüse & Kräuter', fullNote: 'wenige Monate nach den ersten Regen' },
      roots: { label: 'Knollen', fullNote: 'Maniok nach etwa 6 Monaten, Yams nach 7–10' },
      fruit: {
        label: 'Veredelte Obstbäume',
        partialNote: 'erste Ernten nach 2–5 Jahren',
        fullNote: 'Marañón erreicht um Jahr 7 den Höhepunkt',
      },
      grain: {
        label: 'Getreide unter Mulch',
        partialNote: 'in Jahr 1–2 kein Vorteil gegenüber Brandrodung',
        fullNote: 'Erträge steigen ab Jahr 3',
      },
      tamarind: { label: 'Tamarinde', fullNote: 'erste Früchte nach 7–10 Jahren' },
      forest: { label: 'Waldbäume', partialNote: 'Cortez amarillo und Guayacán reifen über Jahrzehnte' },
    },
    year: 'Jahr',
    caption:
      'Jahre nach der Pflanzung. Allgemeine Werte je Art und System, keine Messungen an einem bestimmten Ort. Die Getreideerträge beziehen sich auf das Quesungual-System in Honduras.',
  },
  open: {
    eyebrow: 'Offene Fragen',
    title: 'Fragen, <em>die weiterführen</em>',
    items: [
      {
        title: 'Wie verändert sich die Trockenzeit?',
        text: 'Wie lang und wie trocken werden die Trockenzeiten am Pazifik bis 2050? Klimaprojektionen sind der nächste Rechercheschritt.',
      },
      {
        title: 'Wie weit lässt sich Wasser wiederverwenden?',
        text: 'Grauwasser, Pflanzenkläranlagen und Regenernte könnten einen großen Teil des Wasserkreislaufs schließen. Was funktioniert in den Tropen und nach costa-ricanischem Recht?',
      },
      {
        title: 'Funktioniert syntropischer Anbau in langen Trockenzeiten?',
        text: 'Die meisten Belege stammen aus Brasilien und Bolivien. Am trockenen Pazifik Costa Ricas ist bisher nur ein Hektar dokumentiert.',
      },
      {
        title: 'Welche heimischen Arten ersetzen invasive Lieblinge?',
        text: 'Mehrere beliebte Bodendecker und Zierpflanzen sind in Costa Rica invasiv. Heimische Alternativen sind noch dünn dokumentiert.',
      },
    ],
    sources:
      'Zu den Zahlen: Sie stammen aus einer Recherche vom September 2026, gestützt auf den nationalen Wetterdienst IMN, FAO, CATIE, INTA, die Universidad de Costa Rica, SINAC und begutachtete Studien. Aussagen mit niedriger Konfidenz sind als Schätzung gekennzeichnet, Beispiele außerhalb Costa Ricas als solche benannt.',
  },
};
