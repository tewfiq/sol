import { ft } from '../lib/frenchType';

export interface ApproachCard {
  title: string;
  heading: string;
  description: string;
  /** Short scannable cues shown as chips on the card */
  cues: string[];
}

/** Distance from viewport top to first stacked card rest position (px). */
export const APPROACH_STACK_BASE = 88;
/** Vertical offset between each sticky card in the stack (px). */
export const APPROACH_STACK_STEP = 16;

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
    heading: ft('Comprendre avant d’automatiser'),
    description: ft(
      'Observer les tâches, les décisions, les flux d’information, les outils existants, les données disponibles et les contraintes opérationnelles avant de proposer une solution.',
    ),
    cues: ['Tâches', 'Décisions', 'Flux', 'Données', 'Contraintes'],
  },
  {
    title: 'Prioriser',
    heading: ft('Distinguer opportunité et distraction'),
    description: ft(
      'Évaluer les cas d’usage selon leur valeur métier, leur faisabilité, la qualité des données, les risques, l’effort nécessaire et leur potentiel d’adoption.',
    ),
    cues: ['Valeur', 'Faisabilité', 'Risques', 'Adoption'],
  },
  {
    title: 'Construire',
    heading: ft('Tester avec un système réel'),
    description: ft(
      'Concevoir un agent, un assistant, un workflow ou un prototype suffisamment concret pour confronter les hypothèses à une situation de travail réelle.',
    ),
    cues: ['Agent', 'Workflow', 'Prototype', 'Terrain'],
  },
  {
    title: 'Déployer',
    heading: ft('Passer du POC au quotidien'),
    description: ft(
      'Intégrer le système aux pratiques existantes, clarifier les responsabilités, observer les usages et ajuster le dispositif au-delà de la seule performance technique.',
    ),
    cues: ['Intégration', 'Usages', 'Rôles', 'Ajustement'],
  },
  {
    title: 'Transmettre',
    heading: ft('Faire de l’autonomie un résultat'),
    description: ft(
      'Documenter les choix, former les équipes et transmettre une capacité durable plutôt que créer une dépendance envers un consultant ou une solution opaque.',
    ),
    cues: ['Documentation', 'Formation', 'Autonomie', 'Durabilité'],
  },
];
