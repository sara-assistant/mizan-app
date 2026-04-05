'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import i18n from '@/lib/i18n';

type Language = 'en' | 'ar' | 'hi' | 'ur' | 'fil' | 'bn' | 'ru' | 'fa';

const RTL_LANGUAGES = ['ar', 'fa', 'ur'];

const LanguageContext = createContext<{
  lang: Language;
  setLang: (l: Language) => void;
  dir: 'ltr' | 'rtl';
}>({
  lang: 'en',
  setLang: () => {},
  dir: 'ltr',
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem('mizan_language') as Language | null;
    if (stored && ['en', 'ar', 'hi', 'ur', 'fil', 'bn', 'ru', 'fa'].includes(stored)) {
      setLangState(stored);
      i18n.changeLanguage(stored);
    }
    setMounted(true);
  }, []);

  const setLang = (l: Language) => {
    setLangState(l);
    localStorage.setItem('mizan_language', l);
    i18n.changeLanguage(l);
    router.refresh();
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, dir: RTL_LANGUAGES.includes(lang) ? 'rtl' : 'ltr' }}>
      <div dir={RTL_LANGUAGES.includes(lang) ? 'rtl' : 'ltr'} lang={lang} className={mounted ? '' : 'hidden'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);