// Project index. Add a new entry here and a page under src/pages/projects/<slug>.astro.
export type Project = {
  slug: string;
  title: string;
  summary: string;
  status: string;
  place: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: 'living-place-costa-rica',
    title: 'A Living Place in Costa Rica',
    summary:
      'A small community where soil, water, plants, animals and people work together, and the dry season becomes the flowering season.',
    status: 'Research phase',
    place: 'Costa Rica, region open',
    tags: ['Regenerative land use', 'Water', 'Community'],
  },
];
