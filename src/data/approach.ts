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
  'Découvrir',
  'Cadrer',
  'Concevoir',
  'Valider',
  'Transmettre',
];

export const approachCards: ApproachCard[] = [
  {
    title: 'Découvrir',
    heading: 'Comprendre avant de concevoir',
    description:
      'Observer les utilisateurs, les parcours, les irritants et les contraintes.',
    cues: ['Utilisateurs', 'Parcours', 'Besoins', 'Contraintes'],
  },
  {
    title: 'Cadrer',
    heading: 'Distinguer possibilité et valeur',
    description:
      'Prioriser les usages selon leur valeur, leur faisabilité, leurs risques et leur adoption.',
    cues: ['Valeur', 'Faisabilité', 'Risques', 'Adoption'],
  },
  {
    title: 'Concevoir',
    heading: 'Donner forme à l\u2019expérience',
    description:
      'Créer les parcours, interactions, interfaces, composants et prototypes.',
    cues: ['Parcours', 'Interfaces', 'Prototype', 'Design System'],
  },
  {
    title: 'Valider',
    heading: 'Tester dans les conditions réelles',
    description:
      'Observer la compréhension, la confiance, l\u2019utilité et la reprise en main.',
    cues: ['Tests', 'Confiance', 'Contrôle', 'Itération'],
  },
  {
    title: 'Transmettre',
    heading: 'Faire de l\u2019autonomie un résultat',
    description:
      'Documenter les choix, enrichir le Design System et faire monter les équipes en compétence.',
    cues: ['Documentation', 'Formation', 'Autonomie', 'Durabilité'],
  },
];
