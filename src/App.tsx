import { useEffect } from 'react';
import { Details } from './components/Details';
import { FloatingPetals } from './components/FloatingPetals';
import { Footer } from './components/Footer';
import { GiftsSection } from './components/GiftsSection';
import { Hero } from './components/Hero';
import { PreviewBanner } from './components/PreviewBanner';
import { RSVP } from './components/RSVP';
import { useI18n } from './i18n/I18nContext';

export default function App() {
  const { locale } = useI18n();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <>
      <PreviewBanner />
      <FloatingPetals />
      <Hero />
      <Details />
      <GiftsSection />
      <RSVP />
      <Footer />
    </>
  );
}
