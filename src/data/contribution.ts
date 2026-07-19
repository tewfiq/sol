import { ft } from '../lib/frenchType';

export interface Contribution {
  title: string;
  description: string;
  icon: string;
}

export const contributions: Contribution[] = [
  {
    title: 'Product Discovery',
    description: ft(
      'Comprendre les besoins, les irritants, les parcours et les objectifs avant de produire une solution.',
    ),
    icon: 'Compass',
  },
  {
    title: 'UX Research',
    description: ft(
      'Observer, interviewer, tester et transformer les données de recherche en décisions de conception.',
    ),
    icon: 'Search',
  },
  {
    title: 'AI Native Design',
    description: ft(
      'Concevoir les interactions humain-IA, les niveaux de contrôle, les états d\u2019incertitude, les erreurs et les mécanismes de confiance.',
    ),
    icon: 'Sparkles',
  },
  {
    title: 'Design Systems',
    description: ft(
      'Créer des fondations cohérentes, accessibles et documentées, capables d\u2019évoluer avec les produits et les usages génératifs.',
    ),
    icon: 'LayoutGrid',
  },
  {
    title: 'Rapid Prototyping',
    description: ft(
      'Transformer rapidement une hypothèse en expérience testable, de la maquette au prototype fonctionnel.',
    ),
    icon: 'Wrench',
  },
  {
    title: 'Adoption',
    description: ft(
      'Intégrer les nouveaux outils dans les pratiques, former les équipes et développer leur autonomie.',
    ),
    icon: 'Users',
  },
];
