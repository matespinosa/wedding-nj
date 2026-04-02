import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { HeroFlorals } from './HeroFlorals';

const WEDDING_MS = new Date('2026-04-24T19:00:00-04:00').getTime();

function computeCountdown(target: number) {
  const now = Date.now();
  const diff = Math.max(0, target - now);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

export function Hero() {
  const trRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<HTMLDivElement>(null);
  const blRef = useRef<HTMLDivElement>(null);
  const brRef = useRef<HTMLDivElement>(null);

  const daysRef = useRef<HTMLSpanElement>(null);
  const hoursRef = useRef<HTMLSpanElement>(null);
  const minutesRef = useRef<HTMLSpanElement>(null);
  const secondsRef = useRef<HTMLSpanElement>(null);
  const [vals, setVals] = useState(() => computeCountdown(WEDDING_MS));
  const prevVals = useRef<typeof vals | null>(null);

  useEffect(() => {
    const tick = () => setVals(computeCountdown(WEDDING_MS));
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useLayoutEffect(() => {
    const numberRefs = {
      days: daysRef,
      hours: hoursRef,
      minutes: minutesRef,
      seconds: secondsRef,
    };
    if (!prevVals.current) {
      prevVals.current = { ...vals };
      return;
    }
    (['days', 'hours', 'minutes', 'seconds'] as const).forEach((key) => {
      if (prevVals.current![key] !== vals[key]) {
        const el = numberRefs[key].current;
        if (el) {
          el.classList.remove('pop');
          void el.offsetWidth;
          el.classList.add('pop');
        }
      }
    });
    prevVals.current = { ...vals };
  }, [vals]);

  useEffect(() => {
    const florals = [trRef, tlRef, blRef, brRef];
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        florals.forEach((r, i) => {
          const el = r.current;
          if (!el) return;
          const speed = 0.08 + i * 0.03;
          el.style.transform = `translateY(${scrollY * speed}px)`;
        });
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const displayDays = String(vals.days);
  const displayHours = String(vals.hours).padStart(2, '0');
  const displayMinutes = String(vals.minutes).padStart(2, '0');
  const displaySeconds = String(vals.seconds).padStart(2, '0');

  return (
    <section className="hero">
      <div className="hero-frame" aria-hidden />
      <HeroFlorals trRef={trRef} tlRef={tlRef} blRef={blRef} brRef={brRef} />

      <div className="hero-content">
        <p className="hero-subtitle">Junto a sus familias</p>
        <h1 className="hero-names">
          Mateo
          <span className="ampersand">&</span>
          Rosa
        </h1>
        <div className="hero-line" />
        <p className="hero-tagline">Te invitamos a celebrar nuestra boda</p>
        <div className="countdown" id="countdown">
          <div className="countdown-item">
            <span ref={daysRef} className="countdown-number" id="days">
              {displayDays}
            </span>
            <span className="countdown-label">Dias</span>
          </div>
          <div className="countdown-item">
            <span ref={hoursRef} className="countdown-number" id="hours">
              {displayHours}
            </span>
            <span className="countdown-label">Horas</span>
          </div>
          <div className="countdown-item">
            <span ref={minutesRef} className="countdown-number" id="minutes">
              {displayMinutes}
            </span>
            <span className="countdown-label">Min</span>
          </div>
          <div className="countdown-item">
            <span ref={secondsRef} className="countdown-number" id="seconds">
              {displaySeconds}
            </span>
            <span className="countdown-label">Seg</span>
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <span>Scroll</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
