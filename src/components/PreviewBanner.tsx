/**
 * Solo visible en despliegues Preview de Vercel (p. ej. wedding-nj-*.vercel.app).
 * En producción y en local no se muestra.
 */
export function PreviewBanner() {
  if (__VERCEL_ENV__ !== 'preview') {
    return null;
  }

  return (
    <>
      <div className="preview-banner" role="status">
        <span className="preview-banner__dot" aria-hidden />
        <span>
          Vista previa — este enlace es de prueba; la invitación oficial usará otro
          dominio.
        </span>
      </div>
      <div className="preview-banner-spacer" aria-hidden />
    </>
  );
}
