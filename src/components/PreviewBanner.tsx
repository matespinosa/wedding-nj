import { useI18n } from '../i18n/I18nContext';

export function PreviewBanner() {
  const { t } = useI18n();

  if (__VERCEL_ENV__ !== 'preview') {
    return null;
  }

  return (
    <>
      <div className="preview-banner" role="status">
        <span className="preview-banner__dot" aria-hidden />
        <span>{t.preview.banner}</span>
      </div>
      <div className="preview-banner-spacer" aria-hidden />
    </>
  );
}
