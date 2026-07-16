import type { SVGProps } from 'react';
import type { MetricIconName } from '../data/metrics';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function svgProps({ size = 20, className, ...rest }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    role: 'img' as const,
    'aria-hidden': true as const,
    className,
    ...rest,
  };
}

/** Anthropic Claude — star / asterisk mark */
function ClaudeIcon(props: IconProps) {
  return (
    <svg {...svgProps(props)} fill="currentColor">
      <path d="M12 2.4 9.68 8.32 3.5 9.2l4.5 4.38-1.06 6.02L12 16.72l5.06 2.88-1.06-6.02 4.5-4.38-6.18-.88L12 2.4Zm0 4.12 1.28 3.26 3.5.5-2.55 2.48.6 3.4L12 14.54l-2.83 1.62.6-3.4-2.55-2.48 3.5-.5L12 6.52Z" />
    </svg>
  );
}

/** v0 by Vercel — geometric v0 mark */
function V0Icon(props: IconProps) {
  return (
    <svg {...svgProps(props)} fill="currentColor">
      <path d="M14.026 4.5 21 19.5h-3.253l-5.168-11.13L7.41 19.5H4.158L11.132 4.5h2.894Z" />
      <path d="M8.46 15.56c0 1.97-1.236 3.19-3.267 3.19C3.17 18.75 2 17.53 2 15.56c0-1.98 1.19-3.2 3.193-3.2 2.03 0 3.267 1.22 3.267 3.2Zm-4.72 0c0 1.09.55 1.77 1.453 1.77.904 0 1.454-.68 1.454-1.77 0-1.1-.55-1.78-1.454-1.78-.903 0-1.453.68-1.453 1.78Z" />
    </svg>
  );
}

/** GitHub Octocat mark */
function GitHubIcon(props: IconProps) {
  return (
    <svg {...svgProps(props)} fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
      />
    </svg>
  );
}

/** Netlify — triangular diamond mark */
function NetlifyIcon(props: IconProps) {
  return (
    <svg {...svgProps(props)} fill="currentColor">
      <path d="m16.934 8.504-2.043-2.044-1.698 1.698 2.044 2.043 1.697-1.697Zm-2.98-2.98L12.17 3.74a.75.75 0 0 0-1.061 0L8.326 6.524l1.697 1.697 3.931-3.697Zm-5.02.283L6.24 8.5l1.697 1.697 2.694-2.694-1.697-1.696Zm-.28 5.02L5.96 13.52a.75.75 0 0 0 0 1.06l1.784 1.784 1.697-1.697-1.787-2.12Zm.283 5.02 2.694-2.694-1.697-1.697-2.695 2.694 1.698 1.697Zm5.02.28 2.694-2.694-1.698-1.697-2.694 2.694 1.698 1.697Zm5.02-.283 1.784-1.784a.75.75 0 0 0 0-1.06l-1.784-1.785-1.697 1.698 1.697 2.93Zm-.283-5.02 2.694-2.694-1.697-1.697-2.694 2.694 1.697 1.697ZM12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
    </svg>
  );
}

/** Google AI Studio / Gemini multi-spark mark */
function GoogleAIStudioIcon(props: IconProps) {
  return (
    <svg {...svgProps(props)} fill="currentColor">
      <path d="M12 2c.42 4.35 2.25 6.5 6.5 6.5-4.25 0-6.08 2.15-6.5 6.5-.42-4.35-2.25-6.5-6.5-6.5 4.25 0 6.08-2.15 6.5-6.5Z" />
      <path d="M18.6 13.75c.23 2.45 1.28 3.7 3.65 3.65-2.37.05-3.42 1.3-3.65 3.75-.23-2.45-1.28-3.7-3.65-3.75 2.37-.05 3.42-1.3 3.65-3.65Z" />
      <path d="M6.25 14.5c.18 1.95 1 2.95 2.9 2.9-1.9.05-2.72 1.05-2.9 3-.18-1.95-1-2.95-2.9-3 1.9-.05 2.72-1.05 2.9-2.9Z" />
    </svg>
  );
}

function ToolsIcon(props: IconProps) {
  return (
    <svg
      {...svgProps(props)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-2.5 2.5-2.5Z" />
    </svg>
  );
}

function PeopleIcon(props: IconProps) {
  return (
    <svg
      {...svgProps(props)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function OrgIcon(props: IconProps) {
  return (
    <svg
      {...svgProps(props)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 9h.01M15 9h.01M9 13h.01M15 13h.01" />
    </svg>
  );
}

function ProductIcon(props: IconProps) {
  return (
    <svg
      {...svgProps(props)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2 2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
}

const metricIconMap: Record<
  MetricIconName,
  (props: IconProps) => JSX.Element
> = {
  claude: ClaudeIcon,
  v0: V0Icon,
  github: GitHubIcon,
  netlify: NetlifyIcon,
  'google-ai-studio': GoogleAIStudioIcon,
  tools: ToolsIcon,
  people: PeopleIcon,
  org: OrgIcon,
  product: ProductIcon,
};

export function MetricBrandIcon({
  name,
  size = 18,
  className,
}: {
  name: MetricIconName;
  size?: number;
  className?: string;
}) {
  const Icon = metricIconMap[name];
  return <Icon size={size} className={className} />;
}
