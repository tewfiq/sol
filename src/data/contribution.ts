export interface Contribution {
  title: string;
  description: string;
  icon: string;
}

export const contributions: Contribution[] = [
  {
    title: 'Audit IA',
    description:
      'Décomposer un environnement métier en processus, flux, données, décisions, outils et points de friction.',
    icon: 'ScanSearch',
  },
  {
    title: 'Cas d’usage',
    description:
      'Identifier les situations où l’IA peut produire une valeur observable, au-delà de l’effet de nouveauté.',
    icon: 'Target',
  },
  {
    title: 'Priorisation',
    description:
      'Arbitrer selon l’impact métier, la faisabilité, les risques, l’effort opérationnel et le potentiel d’adoption.',
    icon: 'ListFilter',
  },
  {
    title: 'Accompagnement dirigeant',
    description:
      'Expliquer les sujets complexes sans les appauvrir et transformer l’analyse en options de décision crédibles.',
    icon: 'Users',
  },
  {
    title: 'Prototypage',
    description:
      'Construire rapidement des agents, assistants et workflows pour tester les hypothèses dans un contexte réel.',
    icon: 'Wrench',
  },
  {
    title: 'Adoption',
    description:
      'Intégrer les outils dans les pratiques, former les équipes et documenter les usages pour développer l’autonomie.',
    icon: 'GraduationCap',
  },
];
