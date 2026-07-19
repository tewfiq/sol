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
      'Product Discovery et UX Research',
      ft('Conception de parcours et d\u2019interfaces'),
      ft('Prototypes haute fidélité et fonctionnels'),
      ft('Création et gouvernance de Design Systems'),
      ft('Intégration de l\u2019IA générative dans les workflows Design'),
      ft('Animation d\u2019ateliers, Design Sprints et présentations'),
      ft('Collaboration avec Produit, Data, Tech et métiers'),
      'Formation et mentorat',
    ],
    highlight: ft(
      'Transformer des problématiques complexes en expériences numériques compréhensibles, testables et prêtes à être développées.',
    ),
  },
  {
    organization: 'WPP Entreprise Solutions',
    logo: '/entreprises/wpp_entreprise_solutions.jpg',
    role: 'Lead UX Designer de transition',
    period: 'Déc. 2023 – Mai 2024',
    clients: 'TotalEnergies · Solvay · Hachette Livre · Wunderman Thompson',
    content: [
      ft('Management opérationnel de 6 consultants UX/UI'),
      ft('Pilotage de plus de 10 comptes et missions clients'),
      'Structuration de la pratique Product Design',
      ft('Animation des Design Rituals et kick-offs clients'),
      ft('Coaching sur les méthodes, les livrables et la posture de conseil'),
      ft('Garantie de la qualité et de la satisfaction client'),
      ft('Collaboration avec Produit, Tech et Commerce'),
    ],
    highlight: ft(
      'Structurer une équipe de designers et sécuriser la qualité des missions dans un environnement de conseil exigeant.',
    ),
  },
  {
    organization: 'DINUM — La Suite Numérique',
    logo: '/entreprises/dinum.png',
    role: 'Senior Product Designer',
    period: '2022–2024',
    content: [
      ft('Cadrage et conception de parcours inter-produits'),
      ft('Gouvernance du Design System de l\u2019État — DSFR'),
      ft('Application des exigences d\u2019accessibilité RGAA'),
      ft('Définition des standards UX/UI'),
      ft('Documentation des composants et décisions de conception'),
      ft('Animation d\u2019ateliers de co-conception'),
      ft('Collaboration avec Product Managers, Architectes et Développeurs'),
    ],
    highlight: ft(
      'Concevoir et faire évoluer des produits publics accessibles, cohérents et capables de fonctionner à l\u2019échelle.',
    ),
  },
  {
    organization: 'EDF Particulier — Castor & Pollux',
    logo: '/entreprises/edf.svg.webp',
    role: 'UX Principal',
    period: '2023',
    content: [
      ft('Direction UX d\u2019une équipe pluridisciplinaire'),
      'Product Discovery et recherche utilisateur',
      ft('Analyse et refonte des parcours Selfcare'),
      ft('Conception d\u2019un composant et de fonctionnalités intégrant l\u2019IA'),
      ft('Prototypes haute fidélité'),
      ft('Présentation des recommandations aux parties prenantes'),
    ],
    highlight: ft(
      'Relier besoins clients, enjeux métier et possibilités technologiques dans une expérience Selfcare cohérente.',
    ),
  },
  {
    organization: 'ENEDIS — Castor & Pollux',
    logo: '/entreprises/enedis.png',
    role: 'UX Principal',
    period: '2023',
    content: [
      'Recherche utilisateur',
      ft('Cartographie des processus et de l\u2019expérience'),
      'Architecture fonctionnelle',
      ft('Animation d\u2019ateliers métiers'),
      ft('Conception de parcours et prototypes'),
    ],
    highlight: ft(
      'Transformer une problématique organisationnelle complexe en parcours clair et actionnable.',
    ),
  },
  {
    organization: 'BNP Paribas — UX Center PACE',
    logo: '/entreprises/bnpp.svg',
    role: 'Lead UX Designer',
    period: '2017–2019',
    content: [
      ft('Co-direction de l\u2019UX Center'),
      ft('Mise en place de la gouvernance UX et du Design Ops'),
      ft('Formation de plus de 100 cadres dirigeants'),
      'Animation de Design Sprints 2.0',
      ft('Coaching des équipes Produit, Design et métiers'),
      ft('Présentations aux directions et au COMEX'),
      'Collaboration internationale',
    ],
    highlight: ft(
      'Développer la maturité Design et faciliter la prise de décision auprès d\u2019équipes et de sponsors exécutifs.',
    ),
  },
];
