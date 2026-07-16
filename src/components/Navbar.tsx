import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Approche', href: '#approche' },
  { label: 'Méthode', href: '#methode' },
  { label: 'Expérience', href: '#experience' },
  { label: 'Preuves', href: '#preuves' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed left-1/2 top-6 z-50 -translate-x-1/2">
      <nav className="flex flex-col items-center" aria-label="Navigation principale">
        <div className="flex items-center gap-3 rounded-full bg-off-white/95 px-5 py-2.5 shadow-lg ring-1 ring-black/5 backdrop-blur-md">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#top');
            }}
            className="flex items-baseline gap-2"
          >
            <span className="text-lg font-semibold tracking-tight text-ink">
              Tewfiq Ferahi
            </span>
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.18em] text-ink/50 sm:inline">
              FD AI
            </span>
          </a>

          <span aria-hidden="true" className="h-5 w-px bg-soft-border" />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="nav-dropdown"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="flex h-8 w-8 items-center justify-center rounded-full text-ink transition-colors hover:bg-cream focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green"
          >
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 top-1/2 h-[1.5px] w-4 -translate-y-1/2 bg-ink transition-all duration-300 ${
                  open ? 'rotate-45' : '-translate-y-[3px]'
                }`}
                style={{ transitionTimingFunction: 'cubic-bezier(0.77,0,0.175,1)' }}
              />
              <span
                className={`absolute left-0 top-1/2 h-[1.5px] w-4 -translate-y-1/2 bg-ink transition-all duration-300 ${
                  open ? '-rotate-45' : 'translate-y-[3px]'
                }`}
                style={{ transitionTimingFunction: 'cubic-bezier(0.77,0,0.175,1)' }}
              />
            </span>
          </button>
        </div>

        <div
          id="nav-dropdown"
          className={`mt-2 w-72 origin-top overflow-hidden rounded-2xl bg-off-white/95 shadow-lg ring-1 ring-black/5 backdrop-blur-md transition-all duration-200 ${
            open
              ? 'pointer-events-auto translate-y-0 opacity-100'
              : 'pointer-events-none -translate-y-2 scale-95 opacity-0'
          }`}
        >
          <ul className="flex flex-col p-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block rounded-xl px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-cream focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-1 border-t border-soft-border pt-1">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="block rounded-xl bg-deep-green px-4 py-2.5 text-sm font-medium text-off-white transition-colors hover:bg-primary-green focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green"
              >
                Parler d’un contexte
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
