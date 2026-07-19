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
  'Découvrir',
  'Cadrer',
  'Concevoir',
  'Valider',
  'Transmettre',
];

export const approachCards: ApproachCard[] = [
  {
    title: 'Découvrir',
    heading: ft('Comprendre avant de concevoir'),
    description: ft(
      'Observer les utilisateurs, les parcours, les irritants et les contraintes.',
    ),
    cues: ['Utilisateurs', 'Parcours', 'Besoins', 'Contraintes'],
  },
  {
    title: 'Cadrer',
    heading: ft('Distinguer possibilité et valeur'),
    description: ft(
      'Prioriser les usages selon leur valeur, leur faisabilité, leurs risques et leur adoption.',
    ),
    cues: ['Valeur', 'Faisabilité', 'Risques', 'Adoption'],
  },
  {
    title: 'Concevoir',
    heading: ft('Donner forme à l\u2019expérience'),
    description: ft(
      'Créer les parcours, interactions, interfaces, composants et prototypes.',
    ),
    cues: ['Parcours', 'Interfaces', 'Prototype', 'Design System'],
  },
  {
    title: 'Valider',
    heading: ft('Tester dans les conditions réelles'),
    description: ft(
      'Observer la compréhension, la confiance, l\u2019utilité et la reprise en main.',
    ),
    cues: ['Tests', 'Confiance', 'Contrôle', 'Itération'],
  },
  {
    title: 'Transmettre',
    heading: ft('Faire de l\u2019autonomie un résultat'),
    description: ft(
      'Documenter les choix, enrichir le Design System et faire monter les équipes en compétence.',
    ),
    cues: ['Documentation', 'Formation', 'Autonomie', 'Durabilité'],
  },
];
