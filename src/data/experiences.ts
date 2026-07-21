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
      'Design Systems, prototypes fonctionnels et workflows assistés par IA',
      'Collaboration avec Produit, Data, Tech et directions métiers',
    ],
    highlight:
      'Transformer des problèmes complexes en expériences compréhensibles, testables et prêtes à être développées.',
  },
  {
    organization: 'Velvet Consulting',
    logo: '/entreprises/wpp_entreprise_solutions.jpg',
    role: 'Lead UX Designer de transition',
    period: 'Déc. 2023 – Mai 2024',
    clients: 'TotalEnergies · Solvay · Hachette Livre · Wunderman Thompson',
    content: [
      'Management opérationnel de 6 consultants UX/UI',
      'Pilotage de plus de 10 comptes et missions clients',
      'Structuration des rituels, méthodes et standards de qualité',
    ],
    highlight:
      'Sécuriser la qualité des missions et renforcer la posture conseil des équipes.',
  },
  {
    organization: 'DINUM — La Suite Numérique',
    logo: '/entreprises/dinum.png',
    role: 'Senior Product Designer',
    period: '2022–2024',
    content: [
      'Conception de parcours sur plusieurs produits souverains',
      'Gouvernance du Design System de l\u2019État — DSFR',
      'Accessibilité RGAA et collaboration Product / Tech',
    ],
    highlight:
      'Faire évoluer des produits publics accessibles, cohérents et capables de fonctionner à l\u2019échelle.',
  },
  {
    organization: 'EDF Particulier',
    logo: '/entreprises/edf.svg.webp',
    role: 'UX Principal',
    period: '2023',
    content: [
      'Product Discovery et recherche utilisateur',
      'Refonte des parcours Selfcare',
      'Conception de fonctionnalités intégrant l\u2019IA',
    ],
    highlight:
      'Relier besoins clients, enjeux métiers et possibilités technologiques.',
  },
  {
    organization: 'ENEDIS',
    logo: '/entreprises/enedis.png',
    role: 'UX Principal',
    period: '2023',
    content: [
      'Recherche utilisateur et cartographie métier',
      'Architecture fonctionnelle',
      'Conception d\u2019un nouveau parcours RH',
    ],
    highlight:
      'Transformer une organisation complexe en parcours clair et actionnable.',
  },
  {
    organization: 'BNP Paribas — UX Center PACE',
    logo: '/entreprises/bnpp.svg',
    role: 'Lead UX Designer',
    period: '2017–2019',
    content: [
      'Co-direction de l\u2019UX Center et gouvernance UX',
      'Formation de plus de 100 cadres dirigeants',
      'Design Sprints, coaching et présentations au COMEX',
    ],
    highlight:
      'Développer la maturité Design et faciliter la décision à l\u2019échelle du groupe.',
  },
];
