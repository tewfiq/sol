import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { setLanguage } from '../frenchType';
import { en } from './en';

export type Lang = 'fr' | 'en';

const STORAGE_KEY = 'moon-lang';

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'fr';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'fr') return stored;
  return 'fr';
}

const LangContext = createContext<{
  lang: Lang;
  toggle: () => void;
}>({
  lang: 'fr',
  toggle: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    setLanguage(lang, en);
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
