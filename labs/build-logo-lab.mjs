// Generates the sun logo concepts as standalone SVGs plus a comparison page (labs/logo-lab.html).
// Run: node labs/build-logo-lab.mjs, then serve the repo root and open /labs/logo-lab.html.
import { writeFileSync } from 'node:fs';

const C = {
  bloom: '#e3a72f',
  bloomLight: '#f0c04e',
  amber: '#d28a2c',
  clay: '#a4552f',
  leaf: '#5c7a32',
  leafLight: '#7d9a45',
};
const f = (n) => Number(n.toFixed(2));
const svg = (body, label) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" role="img" aria-label="${label}">${body}</svg>`;
const mix = (a, b, t) => {
  const p = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  const [x, y] = [p(a), p(b)];
  return '#' + x.map((v, i) => Math.round(v + (y[i] - v) * t).toString(16).padStart(2, '0')).join('');
};

// A. Phyllotaxis sun: seeds placed at the golden angle, like a sunflower head.
function phyllotaxis({ n = 110, radius = 46, dotMin = 1.7, dotMax = 3.45 } = {}) {
  const golden = Math.PI * (3 - Math.sqrt(5));
  let dots = '';
  for (let i = 0; i < n; i++) {
    const t = (i + 0.5) / n;
    const r = radius * Math.sqrt(t);
    const a = i * golden;
    const d = dotMin + (dotMax - dotMin) * t;
    dots += `<circle cx="${f(50 + r * Math.cos(a))}" cy="${f(50 + r * Math.sin(a))}" r="${f(d)}" fill="${mix(C.clay, C.bloom, Math.min(1, t * 1.35))}"/>`;
  }
  return svg(dots, 'Phyllotaxis sun');
}

// B. Contour sunrise: a half sun of concentric arcs that read as rays, contour lines and growth rings.
function contour({ rings = [23, 31.5, 40], width = 5 } = {}) {
  const y = 64;
  const colors = [C.bloom, C.amber, C.clay];
  const arcs = rings
    .map((r, i) => `<path d="M${f(50 - r)} ${y} A${r} ${r} 0 0 1 ${f(50 + r)} ${y}" fill="none" stroke="${colors[i]}" stroke-width="${width}" stroke-linecap="round"/>`)
    .join('');
  const core = `<path d="M34.5 ${y} A15.5 15.5 0 0 1 65.5 ${y} Z" fill="${C.bloom}"/>`;
  const horizon = `<path d="M5 ${y + 8} H95" stroke="currentColor" stroke-width="${width}" stroke-linecap="round"/>`;
  const furrows = `<path d="M22 ${y + 19} H78 M36 ${y + 29} H64" stroke="currentColor" stroke-width="${f(width * 0.7)}" stroke-linecap="round" opacity="0.55"/>`;
  return svg(core + arcs + horizon + furrows, 'Contour sunrise');
}

// C. Q-sun: a sun in its orbit; a seed of light escapes through a gap and draws the tail of the Q.
function qsun({ ring = 5, disc = 17, seed = 1 } = {}) {
  const cx = 47, cy = 47, R = 31;
  const gapFrom = (28 * Math.PI) / 180, gapTo = (62 * Math.PI) / 180;
  const p = (a, rad) => [f(cx + rad * Math.cos(a)), f(cy + rad * Math.sin(a))];
  const [x1, y1] = p(gapTo, R);
  const [x2, y2] = p(gapFrom + 2 * Math.PI, R);
  const orbit = `<path d="M${x1} ${y1} A${R} ${R} 0 1 1 ${x2} ${y2}" fill="none" stroke="currentColor" stroke-width="${ring}" stroke-linecap="round"/>`;
  const sun = `<circle cx="${cx}" cy="${cy}" r="${disc}" fill="${C.bloom}"/>`;
  // A teardrop pointing outward along 45 degrees, sitting in the gap of the orbit.
  const a = Math.PI / 4, ux = Math.cos(a), uy = Math.sin(a), vx = -uy, vy = ux;
  const base = R - 4 * seed, tip = R + 17 * seed, w = 5.2 * seed;
  const bx = cx + base * ux, by = cy + base * uy, tx = cx + tip * ux, ty = cy + tip * uy;
  const drop = `<path d="M${f(tx)} ${f(ty)} C${f(bx + w * 1.6 * vx + 6 * ux)} ${f(by + w * 1.6 * vy + 6 * uy)} ${f(bx + w * vx - 3 * ux)} ${f(by + w * vy - 3 * uy)} ${f(bx - 2.5 * ux)} ${f(by - 2.5 * uy)} C${f(bx - w * vx - 3 * ux)} ${f(by - w * vy - 3 * uy)} ${f(bx - w * 1.6 * vx + 6 * ux)} ${f(by - w * 1.6 * vy + 6 * uy)} ${f(tx)} ${f(ty)} Z" fill="${C.clay}"/>`;
  return svg(orbit + sun + drop, 'Q sun');
}

// D. Leaf sun: the sun's rays are leaves, the moment light becomes growth.
function leafsun({ count = 12, inner = 21, outer = 46, width = 7.2, disc = 15 } = {}) {
  let leaves = '';
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2 - Math.PI / 2;
    const len = outer - inner, mid = inner + len / 2;
    const [ix, iy] = [50 + inner * Math.cos(a), 50 + inner * Math.sin(a)];
    const [ox, oy] = [50 + outer * Math.cos(a), 50 + outer * Math.sin(a)];
    const nx = -Math.sin(a) * width, ny = Math.cos(a) * width;
    const [mx, my] = [50 + mid * Math.cos(a), 50 + mid * Math.sin(a)];
    leaves += `<path d="M${f(ix)} ${f(iy)} Q${f(mx + nx)} ${f(my + ny)} ${f(ox)} ${f(oy)} Q${f(mx - nx)} ${f(my - ny)} ${f(ix)} ${f(iy)} Z" fill="${i % 2 ? C.leafLight : C.leaf}"/>`;
  }
  return svg(leaves + `<circle cx="50" cy="50" r="${disc}" fill="${C.bloom}"/>`, 'Leaf sun');
}

const concepts = [
  {
    id: 'phyllotaxis',
    name: 'A · Phyllotaxis sun',
    idea: 'A sun made of 110 seeds set at the golden angle of 137.5°, the pattern sunflowers use to pack their seeds. Nature’s ingenuity, literally.',
    large: phyllotaxis(),
    small: phyllotaxis({ n: 21, radius: 44, dotMin: 4.2, dotMax: 7.6 }),
  },
  {
    id: 'contour',
    name: 'B · Contour sunrise',
    idea: 'A rising sun drawn in concentric arcs. They read as rays, as contour lines of a hillside and as growth rings, with furrows below the horizon.',
    large: contour(),
    small: contour({ rings: [26, 39], width: 7.5 }),
  },
  {
    id: 'qsun',
    name: 'C · Q sun',
    idea: 'A sun in its orbit, and a seed of light leaving through a gap. Orbit and seed draw the Q of Quest: the one purpose that leaves the circle.',
    large: qsun(),
    small: qsun({ ring: 7.5, disc: 19, seed: 1.15 }),
  },
  {
    id: 'leafsun',
    name: 'D · Leaf sun',
    idea: 'A sun whose rays are leaves: the moment light turns into growth. Reads as sun and as flower, like the dry-season bloom.',
    large: leafsun(),
    small: leafsun({ count: 8, inner: 22, outer: 47, width: 10, disc: 17 }),
  },
];

for (const c of concepts) {
  writeFileSync(new URL(`./logos/${c.id}.svg`, import.meta.url), c.large);
  writeFileSync(new URL(`./logos/${c.id}-small.svg`, import.meta.url), c.small);
}

const card = (c) => `
<section class="concept">
  <header><h2>${c.name}</h2><p>${c.idea}</p></header>
  <div class="row">
    <div class="tile light big">${c.large}</div>
    <div class="tile dark big">${c.large}</div>
    <div class="sizes">
      <div class="tile light"><div class="s48">${c.small}</div><div class="s32">${c.small}</div><div class="s16">${c.small}</div></div>
      <div class="tile dark"><div class="s48">${c.small}</div><div class="s32">${c.small}</div><div class="s16">${c.small}</div></div>
    </div>
  </div>
  <div class="lockups">
    <div class="lockup light"><span class="m">${c.large}</span><span class="w">The Purpose <em>Quest</em></span></div>
    <div class="lockup dark"><span class="m">${c.large}</span><span class="w">The Purpose <em>Quest</em></span></div>
  </div>
</section>`;

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Logo lab — The Purpose Quest</title>
<link rel="stylesheet" href="/node_modules/@fontsource-variable/fraunces/full.css">
<link rel="stylesheet" href="/node_modules/@fontsource-variable/fraunces/full-italic.css">
<link rel="stylesheet" href="/node_modules/@fontsource-variable/inter/index.css">
<style>
  :root { --canvas:#f4eee2; --band:#15271d; --forest:#1f3d2c; --ink:#1c2b21; --muted:#4b5a4f; --hair:#d6cab3; --bloom:#e3a72f; }
  * { box-sizing: border-box; }
  body { margin:0; background:#ebe3d3; color:var(--ink); font-family:'Inter Variable',system-ui,sans-serif; }
  main { max-width:1240px; margin:0 auto; padding:48px 24px 80px; display:grid; gap:40px; }
  h1 { font-family:'Fraunces Variable',Georgia,serif; font-weight:380; font-size:44px; margin:0; letter-spacing:-.02em; }
  h1 em { font-style:italic; color:#a4552f; }
  .intro { color:var(--muted); max-width:44rem; margin:8px 0 0; line-height:1.55; }
  .concept { background:var(--canvas); border-radius:18px; padding:28px; display:grid; gap:20px; }
  .concept h2 { font-family:'Fraunces Variable',Georgia,serif; font-weight:450; font-size:26px; margin:0 0 6px; }
  .concept header p { margin:0; color:var(--muted); max-width:46rem; line-height:1.5; }
  .row { display:grid; grid-template-columns: 1fr 1fr 1.1fr; gap:16px; }
  .tile { border-radius:14px; display:flex; align-items:center; justify-content:center; gap:22px; padding:18px; }
  .light { background:#fbf8f1; color:var(--forest); box-shadow: inset 0 0 0 1px var(--hair); }
  .dark { background:var(--band); color:var(--canvas); }
  .big svg { width:200px; height:200px; }
  .sizes { display:grid; gap:16px; }
  .s48 svg { width:48px; height:48px; } .s32 svg { width:32px; height:32px; } .s16 svg { width:16px; height:16px; }
  .lockups { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
  .lockup { border-radius:14px; padding:22px 26px; display:flex; align-items:center; gap:14px; }
  .lockup .m svg { width:46px; height:46px; display:block; }
  .lockup .w { font-family:'Fraunces Variable',Georgia,serif; font-size:30px; font-weight:450; letter-spacing:-.01em; font-variation-settings:'SOFT' 60; }
  .lockup .w em { font-style:italic; font-variation-settings:'SOFT' 100,'WONK' 1; }
  .lockup.dark .w em { color:var(--bloom); }
  @media (max-width: 900px) { .row, .lockups { grid-template-columns:1fr; } }
</style></head>
<body><main>
  <div><h1>Sun logo, <em>four concepts</em></h1>
  <p class="intro">Each concept at 200 px on light and dark, at 48, 32 and 16 px (favicon) with a simplified small version, and as a lockup with the wordmark.</p></div>
  ${concepts.map(card).join('\n')}
</main></body></html>`;

writeFileSync(new URL('./logo-lab.html', import.meta.url), html);
console.log('wrote', concepts.length, 'concepts');
