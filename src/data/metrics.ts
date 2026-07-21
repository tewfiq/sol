export type MetricIconName =
  | 'claude'
  | 'v0'
  | 'github'
  | 'netlify'
  | 'google-ai-studio'
  | 'tools'
  | 'people'
  | 'org'
  | 'product'
  | 'notion';

export interface Metric {
  value: string;
  label: string;
  caption: string;
  icon: MetricIconName;
}

export const metrics: Metric[] = [
  {
    value: '12+ ans',
    label: 'de Product Design',
    caption: '',
    icon: 'product',
  },
  {
    value: '1 100+',
    label: 'solutions IA évaluées',
    caption: '',
    icon: 'notion',
  },
  {
    value: 'Plusieurs centaines',
    label: 'de prototypes et POC',
    caption: '',
    icon: 'v0',
  },
  {
    value: '30+',
    label: 'organisations accompagnées',
    caption: '',
    icon: 'org',
  },
  {
    value: '1 500+',
    label: 'personnes formées',
    caption: '',
    icon: 'people',
  },
  {
    value: '4 655+',
    label: 'contributions GitHub',
    caption: '',
    icon: 'github',
  },
];
