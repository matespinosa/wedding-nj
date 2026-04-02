import { Reveal } from './Reveal';
import { useI18n } from '../i18n/I18nContext';

export function GiftsSection() {
  const { t } = useI18n();
  return (
    <section className="gifts">
      <div className="section-floral section-floral--left" style={{ opacity: 0.2 }}>
        <svg viewBox="0 0 150 400" fill="none">
          <path d="M0 80 Q30 130 50 210 Q52 165 40 120 Q25 90 0 80Z" fill="#8A9A7B" opacity="0.5" />
          <path d="M10 140 Q38 185 55 260 Q55 218 45 175 Q32 148 10 140Z" fill="#6B8064" opacity="0.45" />
          <path d="M20 200 Q42 240 56 310 Q56 268 46 228 Q35 202 20 200Z" fill="#5C6B4F" opacity="0.4" />
          <ellipse cx="40" cy="150" rx="16" ry="14" fill="#F5F0E8" opacity="0.4" transform="rotate(-20 40 150)" />
          <ellipse cx="48" cy="146" rx="13" ry="11" fill="#FDFBF5" opacity="0.35" transform="rotate(10 48 146)" />
          <circle cx="44" cy="148" r="4" fill="#D4B76A" opacity="0.2" />
        </svg>
      </div>

      <div className="section-container">
        <Reveal as="p" className="section-title reveal">
          {t.gifts.sectionTitle}
        </Reveal>
        <Reveal as="h2" className="section-heading reveal">
          {t.gifts.heading}
        </Reveal>
        <Reveal as="div" className="divider reveal" />
        <Reveal as="p" className="gifts-text reveal">
          {t.gifts.text}
        </Reveal>
      </div>
    </section>
  );
}
