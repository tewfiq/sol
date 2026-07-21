import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { setLanguage } from '../frenchType';

export type Lang = 'fr' | 'en';

const LangContext = createContext<{
  lang: Lang;
  toggle: () => void;
}>({
  lang: 'fr',
  toggle: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr');

  useEffect(() => {
    import('./en').then(({ en }) => setLanguage(lang, en));
  }, [lang]);

  const toggle = useCallback(() => {
    setLang((prev) => (prev === 'fr' ? 'en' : 'fr'));
  }, []);

  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
