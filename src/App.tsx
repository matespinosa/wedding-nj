import { Details } from './components/Details';
import { FloatingPetals } from './components/FloatingPetals';
import { Footer } from './components/Footer';
import { GiftsSection } from './components/GiftsSection';
import { Hero } from './components/Hero';
import { RSVP } from './components/RSVP';

export default function App() {
  return (
    <>
      <FloatingPetals />
      <Hero />
      <Details />
      <GiftsSection />
      <RSVP />
      <Footer />
    </>
  );
}
