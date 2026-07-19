import { useReveal } from '../hooks/useReveal';
import { FrenchText } from './FrenchText';
import { ft } from '../lib/frenchType';

interface ToolkitCategory {
  label: string;
  tools: string[];
}

const categories: ToolkitCategory[] = [
  {
    label: 'Product Design',
    tools: [
      'Figma',
      'FigJam',
      'Figma Slides',
      'Figma Make',
      'Figma Weave',
      'Framer',
      'Miro',
      'Notion',
    ],
  },
  {
    label: 'IA générative',
    tools: [
      'Claude',
      'Claude for Design',
      'ChatGPT',
      'GPT-5.6',
      'Gemini',
      'Google AI Studio',
      'Google Stitch',
    ],
  },
  {
    label: 'Design Engineering',
    tools: [
      'Claude Code',
      'Codex',
      'Cursor',
      'Zed',
      'GitHub Copilot',
      'v0',
      'Bolt',
      'Lovable',
      'Replit Agent',
    ],
  },
  {
    label: 'Automatisation et agents',
    tools: ['MCP Figma', 'Model Context Protocol', 'n8n', 'Make', 'LangFlow'],
  },
  {
    label: 'Génération visuelle',
    tools: ['GPT Image', 'Midjourney', 'Veo', 'Higgsfield'],
  },
];

export function ToolkitSection() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.15);

  return (
    <section className="bg-off-white px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-green">
          AI Native Design Toolkit
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-normal leading-[1.15] text-ink sm:text-4xl md:text-5xl">
          {ft('Des outils au service de la conception.')}
        </h2>
        <FrenchText
          as="p"
          className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg"
        >
          Je choisis les outils selon le contexte, le niveau de fidélité
          attendu, les contraintes techniques et la maturité des équipes.
        </FrenchText>

        <div
          ref={ref}
          className={`mt-12 space-y-8 transition-all duration-700 ease-out md:mt-16 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {categories.map((cat) => (
            <div key={cat.label} className="border-t border-soft-border pt-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink/50">
                {cat.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-xl border border-soft-border bg-light-surface px-3.5 py-1.5 text-sm font-medium text-ink"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
