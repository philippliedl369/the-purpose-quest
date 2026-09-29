import type { APIRoute } from 'astro';
import { sunSvg } from '../lib/phyllotaxis';

// Full-detail mark as a static /logo.svg, for sharing and large display.
export const GET: APIRoute = () =>
  new Response(sunSvg('full'), { headers: { 'Content-Type': 'image/svg+xml' } });
