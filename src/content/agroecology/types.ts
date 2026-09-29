import type { AvoidId, GrowthId, RainfallId, ZoneId } from '../../data/agroecology';

/** Text that may contain <em> or <strong>; rendered with set:html. Only for our own copy. */
export type Rich = string;

type Section = { eyebrow: string; title: Rich; lede?: string };

export interface AgroecologyContent {
  meta: { title: string; description: string };
  card: { title: string; summary: string; place: string };
  hero: { eyebrow: string; title: Rich; lede: string };
  intro: Section & { text: string; facts: { value: string; label: string }[] };
  principles: Section & { items: { title: string; text: string }[] };
  climate: Section & {
    regions: Record<RainfallId, string>;
    dryMonths: (n: number) => string;
    noDry: string;
    legendDry: string;
    legendHumid: string;
    caption: string;
    dry: { title: string; text: string };
    humid: { title: string; text: string };
    quote: string;
    quoteLabel: string;
  };
  techniques: Section & {
    items: { title: string; text: string; stat: string; statLabel: string; source: string }[];
  };
  zones: Section & {
    items: Record<ZoneId, { name: string; what: string; water: string; care: string }>;
    labels: { water: string; care: string; annotation: string; figureTitle: string; caption: string };
  };
  bloom: Section & { season: string; flowers: (from: string, to: string) => string; caption: string };
  animals: Section & { items: { when: string; title: string; text: string }[]; wildTitle: string; wild: Rich[] };
  avoid: Section & { items: Record<AvoidId, { name: string; why: string; instead?: string }> };
  growth: Section & {
    rows: Record<GrowthId, { label: string; partialNote?: string; fullNote?: string }>;
    year: string;
    caption: string;
  };
  open: Section & { items: { title: string; text: string }[]; sources: string };
}
