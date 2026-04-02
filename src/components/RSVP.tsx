import { useRef, useState } from 'react';
import { Reveal } from './Reveal';
import { launchConfetti } from '../lib/confetti';
import { getSupabase } from '../lib/supabaseClient';

export function RSVP() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [attendance, setAttendance] = useState('');
  const [errors, setErrors] = useState({ name: false, phone: false, attendance: false });
  const [phase, setPhase] = useState<'form' | 'hiding' | 'done'>('form');
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const thankYouRef = useRef<HTMLDivElement>(null);

  function clearFieldError(field: keyof typeof errors) {
    setErrors((e) => ({ ...e, [field]: false }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError(null);
    const next = {
      name: !name.trim(),
      phone: !phone.trim(),
      attendance: !attendance,
    };
    setErrors(next);
    if (next.name || next.phone || next.attendance) return;

    const supabase = getSupabase();
    if (!supabase) {
      setSubmitError(
        'Falta configurar Supabase. Crea un archivo .env.local con VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY.'
      );
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from('rsvp').insert({
      full_name: name.trim(),
      phone: phone.trim(),
      attending: attendance === 'yes',
    });
    setSubmitting(false);

    if (error) {
      setSubmitError(error.message || 'No pudimos guardar tu respuesta. Intenta de nuevo.');
      return;
    }

    setPhase('hiding');
    window.setTimeout(() => {
      setPhase('done');
      launchConfetti();
      thankYouRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 400);
  }

  return (
    <section className="rsvp" id="rsvp">
      <div className="section-floral section-floral--right" style={{ opacity: 0.18 }}>
        <svg viewBox="0 0 150 400" fill="none">
          <path
            d="M150 100 Q120 155 105 240 Q100 195 112 145 Q130 115 150 100Z"
            fill="#8A9A7B"
            opacity="0.5"
          />
          <path
            d="M140 160 Q115 205 100 280 Q98 238 108 195 Q120 168 140 160Z"
            fill="#6B8064"
            opacity="0.45"
          />
          <ellipse
            cx="115"
            cy="175"
            rx="10"
            ry="13"
            fill="#F0EBE0"
            opacity="0.35"
            transform="rotate(15 115 175)"
          />
          <ellipse cx="125" cy="140" rx="5" ry="7" fill="#9DAE8F" opacity="0.3" />
        </svg>
      </div>

      <div className="section-container">
        <Reveal as="p" className="section-title reveal">
          Confirma tu asistencia
        </Reveal>
        <Reveal as="h2" className="section-heading reveal">
          RSVP
        </Reveal>
        <Reveal as="div" className="divider reveal" />

        {phase !== 'done' ? (
          <Reveal
            as="form"
            className="rsvp-form reveal-scale"
            noValidate
            onSubmit={handleSubmit}
            style={{
              opacity: phase === 'hiding' ? 0 : 1,
              transform: phase === 'hiding' ? 'scale(0.95)' : 'scale(1)',
              transition: 'all 0.4s ease',
              pointerEvents: phase === 'hiding' || submitting ? 'none' : undefined,
            }}
          >
            {submitError ? <p className="rsvp-submit-error" role="alert">{submitError}</p> : null}

            <div className={`form-group${errors.name ? ' error' : ''}`}>
              <label htmlFor="rsvp-name">Nombre Completo *</label>
              <input
                type="text"
                id="rsvp-name"
                name="name"
                placeholder="Tu nombre y apellido"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  clearFieldError('name');
                }}
                disabled={submitting}
                required
              />
              <span className="error-message">Por favor ingresa tu nombre</span>
            </div>

            <div className={`form-group${errors.phone ? ' error' : ''}`}>
              <label htmlFor="rsvp-phone">Numero de Contacto *</label>
              <input
                type="tel"
                id="rsvp-phone"
                name="phone"
                placeholder="Tu numero de telefono"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  clearFieldError('phone');
                }}
                disabled={submitting}
                required
              />
              <span className="error-message">Por favor ingresa tu numero de contacto</span>
            </div>

            <div className={`form-group${errors.attendance ? ' error' : ''}`}>
              <label htmlFor="rsvp-attendance">Asistiras? *</label>
              <select
                id="rsvp-attendance"
                name="attendance"
                value={attendance}
                onChange={(e) => {
                  setAttendance(e.target.value);
                  clearFieldError('attendance');
                }}
                disabled={submitting}
                required
              >
                <option value="" disabled>
                  Selecciona
                </option>
                <option value="yes">Si, ahi estare!</option>
                <option value="no">No podre asistir</option>
              </select>
              <span className="error-message">Selecciona una opcion</span>
            </div>

            <button type="submit" className="submit-btn" disabled={submitting}>
              {submitting ? 'Enviando...' : 'Confirmar Asistencia'}
            </button>
          </Reveal>
        ) : null}

        <div
          ref={thankYouRef}
          className={`thank-you${phase === 'done' ? ' show' : ''}`}
          id="thankYou"
        >
          <div className="thank-you-check">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3>Gracias!</h3>
          <p>
            Hemos recibido tu confirmacion.
            <br />
            Estamos muy emocionados de compartir este dia tan especial contigo.
          </p>
        </div>
      </div>
    </section>
  );
}
