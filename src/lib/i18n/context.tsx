import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
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

const initialLang = getInitialLang();
setLanguage(initialLang, en);

const LangContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
}>({
  lang: initialLang,
  setLang: () => {},
  toggle: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLanguage(next, en);
    setLangState(next);
  }, []);

  const toggle = useCallback(() => {
    setLangState((prev) => {
      const next = prev === 'fr' ? 'en' : 'fr';
      setLanguage(next, en);
      return next;
    });
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
