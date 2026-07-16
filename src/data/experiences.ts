import { ft } from '../lib/frenchType';

export interface Experience {
  organization: string;
  logo?: string;
  role?: string;
  period?: string;
  clients?: string;
  content: string[];
  highlight: string;
}

export const experiences: Experience[] = [
  {
    organization: 'BNP Paribas — UX Center PACE',
    logo: '/entreprises/bnpp.svg',
    role: 'Lead UX Designer',
    period: '2017–2019',
    content: [
      ft('Co-animation d’un centre d’expertise'),
      ft('Accompagnement de directions métiers'),
      ft('Formation de près de 100 dirigeants'),
      ft('Facilitation de Design Sprints'),
      'Ateliers stratégiques',
      'Gouvernance Produit et UX',
      ft('Alignement Business, Produit et IT'),
    ],
    highlight: ft(
      'Une expérience directe de facilitation et de décision auprès de sponsors exécutifs.',
    ),
  },
  {
    organization: 'DINUM — La Suite Numérique',
    logo: '/entreprises/dinum.png',
    role: 'Senior Product Designer',
    period: '2022–2024',
    content: [
      ft('Produit numérique de l’État'),
      'Gouvernance Produit',
      'Ateliers multi-acteurs',
      ft('Collaboration Product, Architecture et Engineering'),
      ft('Adoption de nouveaux outils'),
      ft('Accompagnement du changement'),
      'Accessibilité RGAA',
    ],
    highlight: ft(
      'Concevoir et faire adopter des produits dans un environnement public, souverain et multi-acteurs.',
    ),
  },
  {
    organization: 'EDF / ENEDIS',
    logo: '/entreprises/edf.svg.webp',
    role: 'UX Principal / Senior Consultant',
    period: '2023',
    content: [
      ft('Analyse de parcours métier'),
      'Selfcare',
      ft('Parcours clients et collaborateurs'),
      ft('Intégration de composants IA'),
      ft('Direction d’équipes pluridiplinaires'),
      ft('Collaboration avec les métiers, le Produit et la technologie'),
    ],
    highlight: ft(
      'Transformer des problématiques complexes en parcours, composants et décisions actionnables.',
    ),
  },
  {
    organization: 'Conseil & transformation',
    clients:
      'Orange · TotalEnergies · Orano · Club Med · Solvay · Hachette Livre · EBP · La Banque Postale · Ma French Bank',
    content: [
      'Product Discovery',
      ft('Cartographie de parcours et processus'),
      ft('Facilitation d’ateliers'),
      'Prototypage',
      'Transformation numérique',
      'Environnements réglementés',
      ft('Collaboration métiers, Produit et IT'),
    ],
    highlight: ft(
      'Plus de dix ans d’intervention dans des contextes variés, complexes et exposés.',
    ),
  },
];
