import { createContext, useContext, useMemo, type ReactNode } from 'react';
import translations, { type Locale, type Translations } from './translations';

function detectLocale(): Locale {
  const langs = navigator.languages ?? [navigator.language];
  for (const lang of langs) {
    if (lang.startsWith('es')) return 'es';
    if (lang.startsWith('en')) return 'en';
  }
  return 'es';
}

const I18nContext = createContext<{ locale: Locale; t: Translations }>({
  locale: 'es',
  t: translations.es,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const value = useMemo(() => {
    const locale = detectLocale();
    return { locale, t: translations[locale] };
  }, []);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
