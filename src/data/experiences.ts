export interface Experience {
  organization: string;
  role?: string;
  period?: string;
  clients?: string;
  content: string[];
  highlight: string;
}

export const experiences: Experience[] = [
  {
    organization: 'BNP Paribas — UX Center PACE',
    role: 'Lead UX Designer',
    period: '2017–2019',
    content: [
      'Co-animation d’un centre d’expertise',
      'Accompagnement de directions métiers',
      'Formation de près de 100 dirigeants',
      'Facilitation de Design Sprints',
      'Ateliers stratégiques',
      'Gouvernance Produit et UX',
      'Alignement Business, Produit et IT',
    ],
    highlight:
      'Une expérience directe de facilitation et de décision auprès de sponsors exécutifs.',
  },
  {
    organization: 'DINUM — La Suite Numérique',
    role: 'Senior Product Designer',
    period: '2022–2024',
    content: [
      'Produit numérique de l’État',
      'Gouvernance Produit',
      'Ateliers multi-acteurs',
      'Collaboration Product, Architecture et Engineering',
      'Adoption de nouveaux outils',
      'Accompagnement du changement',
      'Accessibilité RGAA',
    ],
    highlight:
      'Concevoir et faire adopter des produits dans un environnement public, souverain et multi-acteurs.',
  },
  {
    organization: 'EDF / ENEDIS',
    role: 'UX Principal / Senior Consultant',
    period: '2023',
    content: [
      'Analyse de parcours métier',
      'Selfcare',
      'Parcours clients et collaborateurs',
      'Intégration de composants IA',
      'Direction d’équipes pluridiplinaires',
      'Collaboration avec les métiers, le Produit et la technologie',
    ],
    highlight:
      'Transformer des problématiques complexes en parcours, composants et décisions actionnables.',
  },
  {
    organization: 'Conseil & transformation',
    clients:
      'Orange · TotalEnergies · Orano · Club Med · Solvay · Hachette Livre · EBP · La Banque Postale · Ma French Bank',
    content: [
      'Product Discovery',
      'Cartographie de parcours et processus',
      'Facilitation d’ateliers',
      'Prototypage',
      'Transformation numérique',
      'Environnements réglementés',
      'Collaboration métiers, Produit et IT',
    ],
    highlight:
      'Plus de dix ans d’intervention dans des contextes variés, complexes et exposés.',
  },
];
