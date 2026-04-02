import { Reveal } from './Reveal';
import { useI18n } from '../i18n/I18nContext';

export function Details() {
  const { t } = useI18n();
  return (
    <section className="details">
      <div className="section-floral section-floral--right" style={{ opacity: 0.2 }}>
        <svg viewBox="0 0 150 400" fill="none">
          <path
            d="M150 50 Q120 100 100 180 Q95 140 110 90 Q125 60 150 50Z"
            fill="#8A9A7B"
            opacity="0.5"
          />
          <path
            d="M140 100 Q110 150 90 230 Q88 185 100 140 Q115 110 140 100Z"
            fill="#6B8064"
            opacity="0.45"
          />
          <path
            d="M130 160 Q105 200 88 270 Q88 230 98 190 Q110 165 130 160Z"
            fill="#5C6B4F"
            opacity="0.4"
          />
          <ellipse
            cx="105"
            cy="120"
            rx="18"
            ry="15"
            fill="#F5F0E8"
            opacity="0.4"
            transform="rotate(20 105 120)"
          />
          <ellipse
            cx="95"
            cy="115"
            rx="14"
            ry="12"
            fill="#FDFBF5"
            opacity="0.35"
            transform="rotate(-10 95 115)"
          />
          <circle cx="100" cy="118" r="4" fill="#D4B76A" opacity="0.2" />
          <ellipse cx="120" cy="80" rx="5" ry="7" fill="#9DAE8F" opacity="0.3" />
          <ellipse cx="110" cy="95" rx="4" ry="6" fill="#8A9A7B" opacity="0.25" />
        </svg>
      </div>

      <div className="section-container">
        <Reveal as="p" className="section-title reveal">
          {t.details.sectionTitle}
        </Reveal>
        <Reveal as="h2" className="section-heading reveal">
          {t.details.heading}
        </Reveal>
        <Reveal as="div" className="divider reveal" />

        <div className="details-grid">
          <Reveal
            as="div"
            className="detail-card reveal-left"
            style={{ transitionDelay: '0.1s' }}
          >
            <svg
              className="detail-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <h3>{t.details.dateTitle}</h3>
            <p>{t.details.dateValue}</p>
            <p className="detail-sub">{t.details.dateSub}</p>
          </Reveal>

          <Reveal
            as="div"
            className="detail-card reveal-right"
            style={{ transitionDelay: '0.2s' }}
          >
            <svg
              className="detail-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-6 9-6 9h24s-6-2-6-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            <h3>{t.details.ceremonyTitle}</h3>
            <p>{t.details.ceremonyTime}</p>
            <p className="detail-sub">{t.details.ceremonySub}</p>
          </Reveal>

          <Reveal
            as="div"
            className="detail-card full-width reveal-scale"
            style={{ transitionDelay: '0.3s' }}
          >
            <svg
              className="detail-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <h3>{t.details.locationTitle}</h3>
            <p>{t.details.locationName}</p>
            <p className="detail-sub">{t.details.locationAddress}</p>
            <a
              href="https://maps.google.com/?q=76+Audrey+Zapp+Dr+Floor+1+Jersey+City+NJ+07305"
              target="_blank"
              rel="noopener noreferrer"
              className="map-btn"
            >
              {t.details.mapBtn}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
