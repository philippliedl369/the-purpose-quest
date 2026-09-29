import type { Lang } from '../../i18n/config';
import type { AgroecologyContent } from './types';
import { en } from './en';
import { de } from './de';
import { es } from './es';

export const agroecology: Record<Lang, AgroecologyContent> = { en, de, es };
export const agroecologySlug = '/explorations/agroecology-costa-rica/';
