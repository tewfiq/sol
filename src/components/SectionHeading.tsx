import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  variant?: 'light' | 'dark';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  variant = 'light',
  className = '',
}: SectionHeadingProps) {
  const isDark = variant === 'dark';
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`${alignClass} max-w-3xl ${className}`}>
      {eyebrow && (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            isDark ? 'text-sage' : 'text-primary-green'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-4 text-2xl font-normal leading-[1.2] sm:text-3xl lg:text-[42px] ${
          isDark ? 'text-off-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 text-base leading-relaxed md:text-lg ${
            isDark ? 'text-off-white/70' : 'text-ink/70'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
