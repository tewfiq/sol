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
      'Observer les utilisateurs, les tâches, les décisions, les parcours, les outils existants et les contraintes opérationnelles avant de proposer une expérience.',
    ),
    cues: ['Utilisateurs', 'Parcours', 'Besoins', 'Données', 'Contraintes'],
  },
  {
    title: 'Cadrer',
    heading: ft('Distinguer possibilité et valeur'),
    description: ft(
      'Identifier les usages où l\u2019IA peut réellement améliorer l\u2019expérience, réduire une friction ou augmenter les capacités des équipes, puis prioriser selon la valeur, la faisabilité, les risques et l\u2019adoption.',
    ),
    cues: ['Valeur', 'Faisabilité', 'Risques', 'Adoption'],
  },
  {
    title: 'Concevoir',
    heading: ft('Donner une forme concrète à l\u2019expérience'),
    description: ft(
      'Concevoir les parcours, les interactions humain-IA, les interfaces, les composants et un prototype suffisamment réaliste pour éprouver les hypothèses.',
    ),
    cues: ['Parcours', 'Interfaces', 'Prototype', 'Design System'],
  },
  {
    title: 'Valider',
    heading: ft('Tester dans les conditions réelles'),
    description: ft(
      'Observer la compréhension, la confiance, l\u2019utilité, la reprise en main et les usages réels, puis ajuster l\u2019expérience au-delà de la seule performance du modèle.',
    ),
    cues: ['Tests', 'Confiance', 'Contrôle', 'Itération'],
  },
  {
    title: 'Transmettre',
    heading: ft('Faire de l\u2019autonomie un résultat'),
    description: ft(
      'Documenter les choix, enrichir le Design System, formaliser les règles d\u2019usage et transmettre une capacité durable aux équipes Produit, Design et Tech.',
    ),
    cues: ['Documentation', 'Formation', 'Autonomie', 'Durabilité'],
  },
];
