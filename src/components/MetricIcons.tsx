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

function BrandImg({ src, size = 20, alt = '' }: { src: string; size?: number; alt?: string }) {
  return <img src={src} alt={alt} width={size} height={size} aria-hidden="true" style={{ objectFit: 'contain' }} />;
}

function ClaudeIcon({ size }: IconProps) {
  return <BrandImg src="/icons/claude.svg" size={size} />;
}

function V0Icon({ size }: IconProps) {
  return <BrandImg src="/icons/v0.svg" size={size} />;
}

function GitHubIcon({ size }: IconProps) {
  return <BrandImg src="/icons/github.svg" size={size} />;
}

function NetlifyIcon({ size }: IconProps) {
  return <BrandImg src="/icons/netlify.png" size={size} />;
}

function GoogleAIStudioIcon({ size }: IconProps) {
  return <BrandImg src="/icons/aistudio.svg" size={size} />;
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

function NotionIcon(props: IconProps) {
  return (
    <svg
      {...svgProps(props)}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466l1.823 1.447Zm.793 3.08v13.904c0 .747.373.933 1.121.84l14.733-.84c.747-.046.793-.607.793-.793V5.817c0-.42-.28-.607-.793-.56l-15.2.887c-.747.047-.654.513-.654.513v.607Zm12.265 1.12c.28.42.187.887-.326 1.027L14.7 10.45l-4.378 5.984c-.42.467-1.026.514-1.446.047l-1.4-1.866c-.233-.28-.186-.793.327-1.027l2.26-1.214 4.643-5.89c.42-.514 1.073-.467 1.4.093l1.4 1.866h.001Z" />
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
  notion: NotionIcon,
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
