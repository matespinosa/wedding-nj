import { Details } from './components/Details';
import { FloatingPetals } from './components/FloatingPetals';
import { Footer } from './components/Footer';
import { GiftsSection } from './components/GiftsSection';
import { Hero } from './components/Hero';
import { PreviewBanner } from './components/PreviewBanner';
import { RSVP } from './components/RSVP';

export default function App() {
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
