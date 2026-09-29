import type { Lang } from '../i18n/config';
import { agroecology, agroecologySlug } from './agroecology';

/** Registry of explorations, in display order. Add new ones here. */
export const explorations = [{ path: agroecologySlug, content: agroecology }];

const homeEn = {
  meta: { description: 'Projects and concepts, researched carefully and designed to be beautiful.' },
  hero: {
    eyebrow: 'Projects & concepts',
    title: 'Beautiful ideas, <em>on solid ground.</em>',
    lede: 'The Purpose Quest collects the projects and concepts I am working on. Each one starts with careful research, aims to be beautiful, and stays honest about what is still open.',
  },
  featured: { eyebrow: 'Featured exploration' },
  list: {
    eyebrow: 'Explorations',
    title: 'What I am exploring',
    more: 'More explorations will be added here.',
  },
  approach: {
    eyebrow: 'Approach',
    title: 'How the work is done',
    items: [
      {
        title: 'Research before decisions',
        text: 'Every figure comes with a source and a confidence rating. Estimates are shown as estimates.',
      },
      {
        title: 'Beauty is a goal',
        text: 'The most beautiful elements should also be the most useful ones. Function and delight are designed together.',
      },
      {
        title: 'Open questions stay open',
        text: 'What is not known yet is written down as an open question, not filled with something that merely sounds right.',
      },
    ],
  },
  explorationsPage: {
    meta: {
      title: 'Explorations',
      description: 'Ideas, techniques and insights, researched before anything is written.',
    },
    eyebrow: 'Explorations',
    title: 'Ideas, techniques and <em>insights</em>',
    lede: 'Each exploration is researched before anything is written, and says what is still open.',
  },
};

type Home = typeof homeEn;

export const site: Record<Lang, Home> = {
  en: homeEn,
  de: {
    meta: { description: 'Projekte und Konzepte, sorgfältig recherchiert und schön gestaltet.' },
    hero: {
      eyebrow: 'Projekte & Konzepte',
      title: 'Schöne Ideen, <em>auf festem Grund.</em>',
      lede: 'The Purpose Quest sammelt die Projekte und Konzepte, an denen ich arbeite. Jedes beginnt mit sorgfältiger Recherche, will schön sein und bleibt ehrlich darüber, was noch offen ist.',
    },
    featured: { eyebrow: 'Ausgewählte Erkundung' },
    list: {
      eyebrow: 'Erkundungen',
      title: 'Was ich erkunde',
      more: 'Weitere Erkundungen folgen hier.',
    },
    approach: {
      eyebrow: 'Ansatz',
      title: 'Wie gearbeitet wird',
      items: [
        {
          title: 'Recherche vor Entscheidungen',
          text: 'Jede Zahl hat eine Quelle und eine Einschätzung ihrer Verlässlichkeit. Schätzungen sind als Schätzungen gekennzeichnet.',
        },
        {
          title: 'Schönheit ist ein Ziel',
          text: 'Die schönsten Elemente sollen auch die nützlichsten sein. Funktion und Freude werden zusammen gestaltet.',
        },
        {
          title: 'Offene Fragen bleiben offen',
          text: 'Was noch nicht bekannt ist, wird als offene Frage notiert und nicht mit etwas gefüllt, das nur richtig klingt.',
        },
      ],
    },
    explorationsPage: {
      meta: {
        title: 'Erkundungen',
        description: 'Ideen, Techniken und Einsichten, recherchiert, bevor etwas geschrieben wird.',
      },
      eyebrow: 'Erkundungen',
      title: 'Ideen, Techniken und <em>Einsichten</em>',
      lede: 'Jede Erkundung wird recherchiert, bevor etwas geschrieben wird, und sagt, was noch offen ist.',
    },
  },
  es: {
    meta: { description: 'Proyectos y conceptos, investigados con cuidado y diseñados para ser bellos.' },
    hero: {
      eyebrow: 'Proyectos y conceptos',
      title: 'Ideas bellas, <em>sobre tierra firme.</em>',
      lede: 'The Purpose Quest reúne los proyectos y conceptos en los que trabajo. Cada uno empieza con una investigación cuidadosa, aspira a ser bello y es honesto sobre lo que aún está abierto.',
    },
    featured: { eyebrow: 'Exploración destacada' },
    list: {
      eyebrow: 'Exploraciones',
      title: 'Lo que estoy explorando',
      more: 'Pronto se añadirán más exploraciones.',
    },
    approach: {
      eyebrow: 'Enfoque',
      title: 'Cómo se trabaja',
      items: [
        {
          title: 'Investigar antes de decidir',
          text: 'Cada cifra tiene una fuente y una valoración de su fiabilidad. Las estimaciones se muestran como estimaciones.',
        },
        {
          title: 'La belleza es un objetivo',
          text: 'Los elementos más bellos deberían ser también los más útiles. Función y deleite se diseñan juntos.',
        },
        {
          title: 'Las preguntas abiertas siguen abiertas',
          text: 'Lo que aún no se sabe se anota como pregunta abierta, no se rellena con algo que solo suena bien.',
        },
      ],
    },
    explorationsPage: {
      meta: {
        title: 'Exploraciones',
        description: 'Ideas, técnicas y aprendizajes, investigados antes de escribir nada.',
      },
      eyebrow: 'Exploraciones',
      title: 'Ideas, técnicas y <em>aprendizajes</em>',
      lede: 'Cada exploración se investiga antes de escribir nada, y dice lo que aún está abierto.',
    },
  },
};
