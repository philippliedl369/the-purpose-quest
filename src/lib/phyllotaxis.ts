// The Purpose Quest sun: seeds set at the golden angle, the pattern sunflowers use to pack their seeds.
// One source for the header mark, the favicon and the sun in the landscape illustration.

export interface SunOptions {
  /** Number of seeds. Fibonacci-friendly counts keep the spirals clean. */
  n: number;
  /** Radius of the outermost seed centres, in the units of the target coordinate system. */
  radius: number;
  /** Seed radius at the centre and at the rim, as a fraction of `radius`. */
  dotMin: number;
  dotMax: number;
  cx?: number;
  cy?: number;
}

export interface Seed {
  cx: number;
  cy: number;
  r: number;
  fill: string;
}

const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5)); // ≈ 137.508°
const CENTRE = '#a4552f'; // clay
const RIM = '#e3a72f'; // bloom

/** Size presets in a 100 × 100 box. `mark` for 28–64 px, `small` for favicons, `full` for large use. */
export const sunPresets = {
  full: { n: 110, radius: 46, dotMin: 0.037, dotMax: 0.075 },
  mark: { n: 55, radius: 45, dotMin: 0.06, dotMax: 0.105 },
  small: { n: 21, radius: 44, dotMin: 0.095, dotMax: 0.173 },
} satisfies Record<string, Omit<SunOptions, 'cx' | 'cy'>>;

function mix(a: string, b: string, t: number): string {
  const rgb = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  const [x, y] = [rgb(a), rgb(b)];
  return `#${x.map((v, i) => Math.round(v + (y[i] - v) * t).toString(16).padStart(2, '0')).join('')}`;
}

const round = (n: number) => Math.round(n * 100) / 100;

export function sunSeeds({ n, radius, dotMin, dotMax, cx = 50, cy = 50 }: SunOptions): Seed[] {
  return Array.from({ length: n }, (_, i) => {
    const t = (i + 0.5) / n;
    const dist = radius * Math.sqrt(t);
    const angle = i * GOLDEN_ANGLE;
    return {
      cx: round(cx + dist * Math.cos(angle)),
      cy: round(cy + dist * Math.sin(angle)),
      r: round(radius * (dotMin + (dotMax - dotMin) * t)),
      fill: mix(CENTRE, RIM, Math.min(1, t * 1.35)),
    };
  });
}

/** Standalone SVG document, for the favicon and downloads. */
export function sunSvg(preset: keyof typeof sunPresets, label = 'The Purpose Quest'): string {
  const seeds = sunSeeds(sunPresets[preset])
    .map((s) => `<circle cx="${s.cx}" cy="${s.cy}" r="${s.r}" fill="${s.fill}"/>`)
    .join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" role="img" aria-label="${label}">${seeds}</svg>`;
}
