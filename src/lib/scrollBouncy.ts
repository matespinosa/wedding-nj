/** easeOutBounce (approx. easings.net) — progreso 0→1 con rebotes al final */
function easeOutBounce(t: number): number {
  const n1 = 7.5625;
  const d1 = 2.75;
  if (t < 1 / d1) {
    return n1 * t * t;
  }
  if (t < 2 / d1) {
    const x = t - 1.5 / d1;
    return n1 * x * x + 0.75;
  }
  if (t < 2.5 / d1) {
    const x = t - 2.25 / d1;
    return n1 * x * x + 0.9375;
  }
  const x = t - 2.625 / d1;
  return n1 * x * x + 0.984375;
}

export function scrollToElementBouncy(
  el: HTMLElement,
  options?: { durationMs?: number },
): void {
  const durationMs = options?.durationMs ?? 1100;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }

  const marginTop = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
  const targetY = el.getBoundingClientRect().top + window.scrollY - marginTop;
  const startY = window.scrollY;
  const distance = targetY - startY;
  const t0 = performance.now();

  function frame(now: number) {
    const t = Math.min(1, (now - t0) / durationMs);
    if (t >= 1) {
      window.scrollTo(0, targetY);
      return;
    }
    const eased = easeOutBounce(t);
    window.scrollTo(0, startY + distance * eased);
    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}
