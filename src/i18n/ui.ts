import type { Lang } from './config';

// Interface strings shared across pages. English defines the shape; the other languages must match it.
const en = {
  skip: 'Skip to content',
  home: 'The Purpose Quest, home',
  nav: { explorations: 'Explorations', approach: 'Approach' },
  navLabel: 'Main',
  langLabel: 'Language',
  tagline: 'Projects and concepts, researched carefully and designed to be beautiful.',
  estimate: 'Estimate',
  instead: 'Instead',
  source: 'Source',
  exploration: 'Exploration',
  readExploration: 'Read the exploration',
  months: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  monthNames: ['November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
};

export type UI = typeof en;

export const ui: Record<Lang, UI> = {
  en,
  de: {
    skip: 'Zum Inhalt springen',
    home: 'The Purpose Quest, Startseite',
    nav: { explorations: 'Erkundungen', approach: 'Ansatz' },
    navLabel: 'Hauptnavigation',
    langLabel: 'Sprache',
    tagline: 'Projekte und Konzepte, sorgfältig recherchiert und schön gestaltet.',
    estimate: 'Schätzung',
    instead: 'Stattdessen',
    source: 'Quelle',
    exploration: 'Erkundung',
    readExploration: 'Erkundung lesen',
    months: ['Nov', 'Dez', 'Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt'],
    monthNames: ['November', 'Dezember', 'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober'],
  },
  es: {
    skip: 'Ir al contenido',
    home: 'The Purpose Quest, inicio',
    nav: { explorations: 'Exploraciones', approach: 'Enfoque' },
    navLabel: 'Principal',
    langLabel: 'Idioma',
    tagline: 'Proyectos y conceptos, investigados con cuidado y diseñados para ser bellos.',
    estimate: 'Estimación',
    instead: 'En su lugar',
    source: 'Fuente',
    exploration: 'Exploración',
    readExploration: 'Leer la exploración',
    months: ['nov', 'dic', 'ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct'],
    monthNames: ['noviembre', 'diciembre', 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre'],
  },
};
