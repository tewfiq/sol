export interface ApproachCard {
  title: string;
  heading: string;
  description: string;
}

export const approachNav: string[] = [
  'Auditer',
  'Prioriser',
  'Construire',
  'Déployer',
  'Transmettre',
];

export const approachCards: ApproachCard[] = [
  {
    title: 'Auditer',
    heading: 'Comprendre avant d’automatiser',
    description:
      'Observer les tâches, les décisions, les flux d’information, les outils existants, les données disponibles et les contraintes opérationnelles avant de proposer une solution.',
  },
  {
    title: 'Prioriser',
    heading: 'Distinguer opportunité et distraction',
    description:
      'Évaluer les cas d’usage selon leur valeur métier, leur faisabilité, la qualité des données, les risques, l’effort nécessaire et leur potentiel d’adoption.',
  },
  {
    title: 'Construire',
    heading: 'Tester avec un système réel',
    description:
      'Concevoir un agent, un assistant, un workflow ou un prototype suffisamment concret pour confronter les hypothèses à une situation de travail réelle.',
  },
  {
    title: 'Déployer',
    heading: 'Passer du POC au quotidien',
    description:
      'Intégrer le système aux pratiques existantes, clarifier les responsabilités, observer les usages et ajuster le dispositif au-delà de la seule performance technique.',
  },
  {
    title: 'Transmettre',
    heading: 'Faire de l’autonomie un résultat',
    description:
      'Documenter les choix, former les équipes et transmettre une capacité durable plutôt que créer une dépendance envers un consultant ou une solution opaque.',
  },
];
