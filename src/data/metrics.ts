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
    value: '39 057',
    label: ft('conversations Claude'),
    caption: ft('Exploration, analyse et production.'),
    icon: 'claude',
  },
  {
    value: '3,5 M',
    label: ft('de tokens Claude'),
    caption: ft('Pratique intensive documentée.'),
    icon: 'claude',
  },
  {
    value: '118',
    label: ft('applications Google AI Studio'),
    caption: ft('Prototypes, assistants et outils.'),
    icon: 'google-ai-studio',
  },
  {
    value: '879',
    label: ft('prototypes v0'),
    caption: ft('Interfaces et systèmes testés.'),
    icon: 'v0',
  },
  {
    value: '279',
    label: ft('projets Netlify'),
    caption: ft('Expérimentations mises en ligne.'),
    icon: 'netlify',
  },
  {
    value: '4 655+',
    label: ft('contributions GitHub'),
    caption: ft('Build et itération continue en 2025–2026.'),
    icon: 'github',
  },
  {
    value: '1 000+',
    label: ft('outils, modèles et agents explorés'),
    caption: ft('Veille structurée depuis 2022.'),
    icon: 'tools',
  },
  {
    value: '1 500+',
    label: ft('personnes formées'),
    caption: ft('Étudiants, professionnels et managers.'),
    icon: 'people',
  },
  {
    value: '30+',
    label: ft('organisations accompagnées'),
    caption: ft('Startups, grands groupes et secteur public.'),
    icon: 'org',
  },
  {
    value: '10+ ans',
    label: ft('de transformation Produit'),
    caption: ft('Stratégie, design, innovation et adoption.'),
    icon: 'product',
  },
];
