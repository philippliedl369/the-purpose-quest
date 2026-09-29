import type { AgroecologyContent } from './types';

export const es: AgroecologyContent = {
  meta: {
    title: 'La belleza y el ingenio de la agroecología',
    description:
      'Cómo el suelo, el agua, las plantas y los animales trabajan juntos en los trópicos secos y húmedos de Costa Rica, y por qué los sistemas más ingeniosos suelen ser también los más bellos.',
  },
  card: {
    title: 'La belleza y el ingenio de la agroecología',
    summary:
      'Cómo el suelo, el agua, las plantas y los animales trabajan juntos en los trópicos secos y húmedos de Costa Rica, y por qué los sistemas más ingeniosos suelen ser también los más bellos.',
    place: 'Costa Rica · Agroecología',
  },
  hero: {
    eyebrow: 'Exploración · Costa Rica',
    title: 'La belleza y el <em>ingenio</em> de la agroecología',
    lede: 'Cómo el suelo, el agua, las plantas y los animales trabajan juntos en los trópicos secos y húmedos de Costa Rica, y por qué los sistemas más ingeniosos suelen ser también los más bellos.',
  },
  intro: {
    eyebrow: 'Por qué la agroecología',
    title: 'Fincas que funcionan <em>como ecosistemas</em>',
    text: 'La agroecología diseña las fincas como la naturaleza construye los ecosistemas: muchas especies en estratos, un suelo que nunca queda desnudo y ciclos en los que lo que una parte deja atrás alimenta a otra. Costa Rica es un lugar ideal para verlo, porque el bosque seco tropical y el bosque lluvioso conviven en un país pequeño.',
    facts: [
      { value: '~90 %', label: 'menos erosión del suelo cuando los cultivos crecen bajo mantillo en lugar de tras la quema' },
      { value: '< 10 años', label: 'para que los suelos bajo bosque tropical en regeneración alcancen el 90 % del nivel del bosque maduro' },
      { value: 'dic–may', label: 'árboles nativos en flor durante la estación seca' },
    ],
  },
  principles: {
    eyebrow: 'Principios',
    title: 'Cuatro ideas detrás de <em>un buen diseño</em>',
    items: [
      {
        title: 'Primero el agua',
        text: 'Diseñar primero el ciclo del agua: captar la lluvia, dejar que se infiltre, almacenarla y usarla más de una vez. En una estación seca larga, el agua almacenada decide qué puede crecer.',
      },
      {
        title: 'Diseñar para el clima de mañana',
        text: 'Plantar para las condiciones de las próximas décadas, no para el promedio de los últimos treinta años. Los árboles que se plantan hoy las vivirán.',
      },
      {
        title: 'Un sistema, no medidas sueltas',
        text: 'Cultivos, animales, suelo, agua y energía se entrelazan. Lo que una parte deja atrás, otra lo aprovecha.',
      },
      {
        title: 'Belleza y función juntas',
        text: 'Los sistemas más ingeniosos suelen ser los más bellos: árboles forrajeros en flor, el agua como espejo y hábitat, senderos que invitan a caminar.',
      },
    ],
  },
  climate: {
    eyebrow: 'Dos mundos climáticos',
    title: 'Dónde está el agua, <em>y cuándo cae</em>',
    lede: 'Costa Rica reúne climas muy distintos en un país pequeño. En la costa del Pacífico seco, el agua es el límite. Tierra adentro abunda el agua y el trabajo se desplaza a la lucha contra hongos y malezas.',
    regions: {
      guanacaste: 'Guanacaste central',
      samara: 'Oeste de Nicoya, zona de Sámara',
      turrialba: 'Turrialba, vertiente atlántica',
      caribbean: 'Cahuita / Sixaola, Caribe',
      sancarlos: 'Llanuras de San Carlos',
      general: 'Valle del General, Pérez Zeledón',
    },
    dryMonths: (n) => `${n} meses secos`,
    noDry: 'sin estación seca',
    legendDry: 'Pacífico seco',
    legendHumid: 'Interior húmedo',
    caption:
      'Precipitación anual y meses secos por región climática, según el Instituto Meteorológico Nacional (IMN) (confianza alta). Las regiones se distinguen menos por el total anual que por la duración de la estación seca.',
    dry: {
      title: 'Pacífico seco',
      text: 'Bosque seco tropical con cuatro a cinco meses secos. Suelos arcillosos, fértiles pero duros y agrietados en la estación seca. La tarea principal es almacenar y ahorrar agua.',
    },
    humid: {
      title: 'Interior húmedo',
      text: 'Poca o ninguna estación seca. Suelos ácidos y lavados, enfermedades fúngicas, más deshierba y poda. El cuello de botella pasa del agua al trabajo.',
    },
    quote:
      'Alrededor de Sámara llueve al año más o menos lo mismo que en la vertiente atlántica de Turrialba. La diferencia es el ritmo: solo alrededor del 4 % cae entre diciembre y marzo.',
    quoteLabel: 'La misma lluvia, otro ritmo',
  },
  techniques: {
    eyebrow: 'Ingenio',
    title: 'Técnicas pequeñas, <em>grandes efectos</em>',
    lede: 'Algunas de las ideas más eficaces de la agroecología son sorprendentemente sencillas. Cada una trabaja con un proceso natural en lugar de ir en su contra.',
    items: [
      {
        title: 'Mantillo en lugar de fuego',
        text: 'En el sistema Quesungual de Honduras, las familias agricultoras podan los árboles de sus parcelas y dejan los restos en el suelo en lugar de quemar. El mantillo retiene el suelo y el agua, y los rendimientos suben con los años.',
        stat: '1250 → 2760',
        statLabel: 'kg de maíz por hectárea, del año 1 al año 10',
        source: 'FAO 2005',
      },
      {
        title: 'Muchos cultivos, una parcela',
        text: 'Maíz, frijol y ayote sembrados juntos en una milpa producen más que los mismos cultivos en parcelas separadas. El uso equivalente de la tierra mide la ganancia: 1,0 significa ninguna ventaja.',
        stat: '1,16–2,78',
        statLabel: 'uso equivalente de la tierra en la milpa',
        source: 'Mota-Cruz et al. 2025; Padilla-Fidencio et al. 2022',
      },
      {
        title: 'Ollas de barro que riegan desde abajo',
        text: 'Ollas de barro sin esmaltar se entierran junto a las plantas y se llenan de agua, que se filtra lentamente por las paredes hasta las raíces. Ideales para hierbas y hortalizas, no para árboles.',
        stat: '60–70 %',
        statLabel: 'menos agua que el riego a mano',
        source: 'University of Arizona Extension',
      },
      {
        title: 'Sombra para el estanque',
        text: 'Los estanques abiertos pierden agua al sol cada día. Plantar sombra en sus lados este y oeste reduce notablemente la evaporación.',
        stat: 'hasta 40 %',
        statLabel: 'menos evaporación',
        source: 'MEFCCA, COSUDE y CATIE 2018',
      },
      {
        title: 'Cercas que crecen',
        text: 'Las estacas de madero negro enraízan y se convierten en postes vivos. Sostienen la pitahaya, dan al ganado hojas ricas en proteína y florecen de rosado en la estación seca.',
        stat: '20–30 %',
        statLabel: 'de proteína cruda en las hojas de madero negro',
        source: 'Costa Rica Tree Atlas',
      },
      {
        title: 'Cortavientos que respiran',
        text: 'Un seto funciona mejor cuando deja pasar del 40 al 60 % del viento y no tiene huecos, que actuarían como toberas.',
        stat: '50 %',
        statLabel: 'de la velocidad del viento en campo abierto, a diez alturas del seto',
        source: 'University of Nebraska Extension',
      },
      {
        title: 'De residuo a proteína',
        text: 'Las larvas de la mosca soldado negra, nativa de América, comen residuos de cocina y de cosecha. Se convierten en alimento para gallinas y peces, y su residuo va al compost.',
        stat: '≈ 5 kg',
        statLabel: 'de residuos por m² de cama de larvas al día',
        source: 'Eawag 2017; UCR 2025',
      },
      {
        title: 'Carbón para el suelo',
        text: 'Los restos de poda se pueden convertir en biocarbón en un simple hoyo cónico. No es un abono: funciona mejor si antes se carga en el compost.',
        stat: '≈ 22 %',
        statLabel: 'de la madera seca se convierte en biocarbón en unas tres horas',
        source: 'Cornelissen et al. 2016; CICA-UCR 2023',
      },
      {
        title: 'Polinizadores de noche y de día',
        text: 'La pitahaya florece de noche. En un estudio en Yucatán, visitantes diurnos como abejas y escarabajos complementaron a los polinizadores nocturnos y aumentaron el cuajado de frutos.',
        stat: '75,6 → 95,6 %',
        statLabel: 'cuajado de frutos sin y con visitantes diurnos',
        source: 'Rocha et al. 2026, Yucatán',
      },
    ],
  },
  zones: {
    eyebrow: 'Diseño',
    title: 'Un jardín <em>ordenado por el agua</em>',
    lede: 'Un principio clásico de la permacultura: ubicar cada elemento según el agua y el cuidado que necesita, desde un pequeño núcleo regado junto a la casa hasta el bosque, que no necesita ninguno de los dos.',
    items: {
      core: {
        name: 'Núcleo regado',
        what: 'Hortalizas, hierbas, vivero, compost, lombricario y larvas, cerca de la casa.',
        water: 'Agua de techo en tanques, riego por goteo y ollas de barro, aguas grises donde se permita.',
        care: 'Diario',
      },
      orchard: {
        name: 'Huerto y bosque comestible',
        what: 'Frutales en estratos, con gallinas y abejas sin aguijón.',
        water: 'Solo árboles jóvenes, en sus primeras una a tres estaciones secas.',
        care: 'Semanal',
      },
      fields: {
        name: 'Cultivos de temporal',
        what: 'Maíz, frijol, ayote, yuca y gandul bajo mantillo en lugar de fuego.',
        water: 'Solo lluvia, sembrados con las primeras lluvias.',
        care: 'Estacional',
      },
      edge: {
        name: 'Borde del bosque',
        what: 'Árboles nativos útiles plantados en claros y bordes: forraje, madera, fruta.',
        water: 'Ninguna.',
        care: 'Ocasional',
      },
      forest: {
        name: 'Bosque y corredor',
        what: 'Bosque protegido, riberas y un corredor para la fauna: la esponja de agua de la tierra.',
        water: 'Ninguna.',
        care: 'Observar',
      },
    },
    labels: {
      water: 'Agua',
      care: 'Cuidado',
      annotation: 'Hacia afuera: menos agua, menos cuidado',
      figureTitle: 'Zonas ordenadas por el agua de la estación seca, desde la casa hacia afuera',
      caption:
        'Un patrón de diseño general. El tamaño de cada zona depende del agua, la pendiente y la situación legal del terreno.',
    },
  },
  bloom: {
    eyebrow: 'Belleza',
    title: 'La estación seca se vuelve <em>la estación de las flores</em>',
    lede: 'Los árboles nativos útiles florecen de diciembre a mayo, justo cuando el bosque seco está desnudo. El madero negro es cerca viva, mantillo y forraje a la vez, y se tiñe de rosado en los meses secos.',
    season: 'Estación seca',
    flowers: (from, to) => `florece de ${from} a ${to}`,
    caption:
      'Meses de floración según el Costa Rica Tree Atlas y el Área de Conservación Guanacaste; poró según registros de floración en iNaturalist (confianza media). El cortez amarillo abre todas sus flores a la vez, unos nueve días después de un día fresco o una lluvia en la estación seca, y duran solo cuatro o cinco días.',
  },
  animals: {
    eyebrow: 'Animales',
    title: 'Construir el ciclo <em>desde abajo</em>',
    lede: 'El orden responde a tres preguntas: cuánta agua necesita un animal, qué tan alto es el obstáculo legal y cuánto cierra el ciclo.',
    items: [
      {
        when: 'Primero',
        title: 'Lombrices y larvas de mosca soldado',
        text: 'Convierten los residuos de cocina y jardín en compost y proteína, y casi no necesitan agua.',
      },
      {
        when: 'Después',
        title: 'Gallinas',
        text: 'Transforman larvas y sobras en huevos y gallinaza. El problema es su alimento: una gallina come unos 130 g al día, y el pastoreo solo cubre una pequeña parte.',
      },
      {
        when: 'En paralelo',
        title: 'Abejas sin aguijón',
        text: 'Las abejas nativas mariola polinizan y fascinan. En Costa Rica todo meliponario debe registrarse, y las colonias no se pueden comprar ni trasladar. Una colonia da 1–2 kg de miel al año.',
      },
      {
        when: 'Con un cuarto fresco',
        title: 'Hongos ostra',
        text: 'Crecen sobre residuos de cosecha. Por encima de unos 36 °C se impone el moho verde, por eso en regiones calurosas necesitan un cuarto fresco o la estación lluviosa.',
      },
      {
        when: 'Más adelante, opcional',
        title: 'Cerdos en cama profunda',
        text: 'Convierten la cama en compost y ahorran unos 46 litros de agua por animal al día frente a los corrales lavados. Pero en Costa Rica incluso un solo cerdo necesita un certificado veterinario de operación.',
      },
    ],
    wildTitle: 'Vecinos silvestres',
    wild: [
      'En Costa Rica viven <strong>114</strong> especies de murciélagos. Polinizan, dispersan semillas y comen insectos.',
      'En la península de Nicoya se han registrado <strong>14</strong> especies de colibríes.',
      'Las mariposas <strong>morpho</strong> se ven allí todo el año, incluso en la estación seca.',
      'Las <strong>luciérnagas</strong> alcanzan su pico en mayo, cuando vuelven las lluvias.',
    ],
  },
  avoid: {
    eyebrow: 'Qué evitar',
    title: 'Bellas, <em>pero no aquí</em>',
    lede: 'Varias plantas muy usadas en permacultura y jardinería figuran como invasoras en Costa Rica, y algunas son tóxicas. Donde la investigación nombra una alternativa nativa, se indica.',
    items: {
      torchGinger: { name: 'Bastón del emperador', why: 'invasora' },
      poroGigante: { name: 'Poró gigante', why: 'invasora', instead: 'La nativa Erythrina fusca en fondos de valle húmedos' },
      velvetBean: {
        name: 'Frijol terciopelo',
        why: 'invasora, falla en estaciones secas largas',
        instead: 'Canavalia (Canavalia ensiformis) como abono verde',
      },
      pintoPeanut: { name: 'Maní forrajero', why: 'invasora' },
      gingerLily: { name: 'Flor de mariposa', why: 'invasora' },
      angelsTrumpet: { name: 'Floripondio', why: 'muy tóxica' },
    },
  },
  growth: {
    eyebrow: 'Tiempo',
    title: 'Qué crece <em>cuándo</em>',
    lede: 'Hortalizas en meses, frutas en años, árboles del bosque en décadas. Un sistema vivo madura en capas de tiempo.',
    rows: {
      vegetables: { label: 'Hortalizas y hierbas', fullNote: 'a los pocos meses de las primeras lluvias' },
      roots: { label: 'Raíces y tubérculos', fullNote: 'yuca a los 6 meses aprox., ñame a los 7–10' },
      fruit: {
        label: 'Frutales injertados',
        partialNote: 'primeras cosechas a los 2–5 años',
        fullNote: 'el marañón alcanza su pico hacia el año 7',
      },
      grain: {
        label: 'Granos bajo mantillo',
        partialNote: 'sin ventaja frente a la quema en los años 1–2',
        fullNote: 'los rendimientos suben desde el año 3',
      },
      tamarind: { label: 'Tamarindo', fullNote: 'primeros frutos a los 7–10 años' },
      forest: { label: 'Árboles del bosque', partialNote: 'el cortez amarillo y el guayacán maduran durante décadas' },
    },
    year: 'Año',
    caption:
      'Años después de la siembra. Valores generales por especie y sistema, no mediciones de un lugar concreto. Los rendimientos de granos se refieren al sistema Quesungual en Honduras.',
  },
  open: {
    eyebrow: 'Preguntas abiertas',
    title: 'Preguntas <em>que vale la pena explorar</em>',
    items: [
      {
        title: '¿Cómo cambiará la estación seca?',
        text: '¿Qué tan larga y seca será la estación seca en el Pacífico hacia 2050? Las proyecciones climáticas son el próximo paso de la investigación.',
      },
      {
        title: '¿Hasta dónde se puede reutilizar el agua?',
        text: 'Las aguas grises, los humedales artificiales y la cosecha de lluvia podrían cerrar gran parte del ciclo del agua. ¿Qué funciona en el trópico y dentro de las normas de Costa Rica?',
      },
      {
        title: '¿Funciona la agricultura sintrópica con estaciones secas largas?',
        text: 'La mayor parte de la evidencia viene de Brasil y Bolivia. En el Pacífico seco de Costa Rica solo se ha documentado una hectárea hasta ahora.',
      },
      {
        title: '¿Qué especies nativas pueden reemplazar a las invasoras favoritas?',
        text: 'Varias coberturas y ornamentales populares son invasoras en Costa Rica. Las alternativas nativas aún están poco documentadas.',
      },
    ],
    sources:
      'Sobre las cifras: provienen de una investigación realizada en septiembre de 2026, basada en el Instituto Meteorológico Nacional (IMN), la FAO, el CATIE, el INTA, la Universidad de Costa Rica, el SINAC y estudios revisados por pares. Las afirmaciones con confianza baja se marcan como estimaciones, y los ejemplos de fuera de Costa Rica se nombran como tales.',
  },
};
