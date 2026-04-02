import { Reveal } from './Reveal';
import { useI18n } from '../i18n/I18nContext';

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="footer">
      <Reveal as="div" className="reveal">
        <p className="footer-names">{t.footer.names}</p>
        <p className="footer-date">{t.footer.date}</p>
      </Reveal>
    </footer>
  );
}
