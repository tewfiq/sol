import { ft } from '../lib/frenchType';

export interface Experience {
  organization: string;
  logo?: string;
  /** Use a dark plate when the asset has a dark / solid background */
  logoTheme?: 'light' | 'dark';
  role?: string;
  period?: string;
  clients?: string;
  content: string[];
  highlight: string;
}

export const experiences: Experience[] = [
  {
    organization: 'Freelance',
    role: 'AI Native Product Designer & Senior UX/UI Designer',
    period: '2013 – Aujourd\u2019hui',
    content: [
      'Product Discovery, UX Research et conception end-to-end',
      ft('Design Systems, prototypes fonctionnels et workflows assistés par IA'),
      ft('Collaboration avec Produit, Data, Tech et directions métiers'),
    ],
    highlight: ft(
      'Transformer des problèmes complexes en expériences compréhensibles, testables et prêtes à être développées.',
    ),
  },
  {
    organization: 'Velvet Consulting',
    logo: '/entreprises/wpp_entreprise_solutions.jpg',
    role: 'Lead UX Designer de transition',
    period: 'Déc. 2023 – Mai 2024',
    clients: 'TotalEnergies · Solvay · Hachette Livre · Wunderman Thompson',
    content: [
      ft('Management opérationnel de 6 consultants UX/UI'),
      ft('Pilotage de plus de 10 comptes et missions clients'),
      ft('Structuration des rituels, méthodes et standards de qualité'),
    ],
    highlight: ft(
      'Sécuriser la qualité des missions et renforcer la posture conseil des équipes.',
    ),
  },
  {
    organization: 'DINUM — La Suite Numérique',
    logo: '/entreprises/dinum.png',
    role: 'Senior Product Designer',
    period: '2022–2024',
    content: [
      ft('Conception de parcours sur plusieurs produits souverains'),
      ft('Gouvernance du Design System de l\u2019État — DSFR'),
      ft('Accessibilité RGAA et collaboration Product / Tech'),
    ],
    highlight: ft(
      'Faire évoluer des produits publics accessibles, cohérents et capables de fonctionner à l\u2019échelle.',
    ),
  },
  {
    organization: 'EDF Particulier',
    logo: '/entreprises/edf.svg.webp',
    role: 'UX Principal',
    period: '2023',
    content: [
      'Product Discovery et recherche utilisateur',
      ft('Refonte des parcours Selfcare'),
      ft('Conception de fonctionnalités intégrant l\u2019IA'),
    ],
    highlight: ft(
      'Relier besoins clients, enjeux métiers et possibilités technologiques.',
    ),
  },
  {
    organization: 'ENEDIS',
    logo: '/entreprises/enedis.png',
    role: 'UX Principal',
    period: '2023',
    content: [
      ft('Recherche utilisateur et cartographie métier'),
      'Architecture fonctionnelle',
      ft('Conception d\u2019un nouveau parcours RH'),
    ],
    highlight: ft(
      'Transformer une organisation complexe en parcours clair et actionnable.',
    ),
  },
  {
    organization: 'BNP Paribas — UX Center PACE',
    logo: '/entreprises/bnpp.svg',
    role: 'Lead UX Designer',
    period: '2017–2019',
    content: [
      ft('Co-direction de l\u2019UX Center et gouvernance UX'),
      ft('Formation de plus de 100 cadres dirigeants'),
      ft('Design Sprints, coaching et présentations au COMEX'),
    ],
    highlight: ft(
      'Développer la maturité Design et faciliter la décision à l\u2019échelle du groupe.',
    ),
  },
];
