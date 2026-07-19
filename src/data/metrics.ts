import { ft } from '../lib/frenchType';

export type MetricIconName =
  | 'claude'
  | 'v0'
  | 'github'
  | 'netlify'
  | 'google-ai-studio'
  | 'tools'
  | 'people'
  | 'org'
  | 'product';

export interface Metric {
  value: string;
  label: string;
  caption: string;
  icon: MetricIconName;
}

export const metrics: Metric[] = [
  {
    value: '1 100+',
    label: ft('solutions IA évaluées'),
    caption: ft('Outils, modèles et agents explorés depuis 2022.'),
    icon: 'tools',
  },
  {
    value: 'Plusieurs centaines',
    label: ft('de prototypes et POC'),
    caption: ft('Interfaces, assistants et expériences AI Native testés.'),
    icon: 'claude',
  },
  {
    value: '879',
    label: ft('prototypes v0'),
    caption: ft('Interfaces et produits explorés rapidement.'),
    icon: 'v0',
  },
  {
    value: '118',
    label: ft('applications Google AI Studio'),
    caption: ft('Prototypes, assistants et outils fonctionnels.'),
    icon: 'google-ai-studio',
  },
  {
    value: '279',
    label: ft('projets déployés'),
    caption: ft('Expérimentations et démonstrateurs mis en ligne.'),
    icon: 'netlify',
  },
  {
    value: '4 655+',
    label: ft('contributions GitHub'),
    caption: ft('Build, documentation et itération continue en 2025–2026.'),
    icon: 'github',
  },
  {
    value: '1 500+',
    label: ft('personnes formées'),
    caption: ft('Étudiants, professionnels, designers et managers.'),
    icon: 'people',
  },
  {
    value: '30+',
    label: ft('organisations accompagnées'),
    caption: ft('Grands groupes, cabinets de conseil, startups et secteur public.'),
    icon: 'org',
  },
  {
    value: '12+ ans',
    label: ft('de Product Design'),
    caption: ft('Recherche, stratégie, conception, transformation et adoption.'),
    icon: 'product',
  },
];
