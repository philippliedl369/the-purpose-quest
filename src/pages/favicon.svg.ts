import type { APIRoute } from 'astro';
import { sunSvg } from '../lib/phyllotaxis';

// Built as a static /favicon.svg from the same geometry as the header mark.
export const GET: APIRoute = () =>
  new Response(sunSvg('small'), { headers: { 'Content-Type': 'image/svg+xml' } });
