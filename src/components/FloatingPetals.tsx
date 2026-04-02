import { useMemo } from 'react';

const COLORS = ['#F5F0E8', '#E8DCC8', '#C5D1B8', '#D4B76A', '#9DAE8F'];

export function FloatingPetals() {
  const petals = useMemo(
    () =>
      Array.from({ length: 12 }, () => ({
        left: Math.random() * 100,
        width: Math.random() * 8 + 5,
        height: Math.random() * 10 + 6,
        backgroundColor: COLORS[Math.floor(Math.random() * COLORS.length)]!,
        animationDuration: `${Math.random() * 8 + 10}s`,
        animationDelay: `${Math.random() * 12}s`,
      })),
    []
  );

  return (
    <div className="floating-petals" id="floatingPetals">
      {petals.map((p, i) => (
        <div
          key={i}
          className="petal"
          style={{
            left: `${p.left}%`,
            width: p.width,
            height: p.height,
            backgroundColor: p.backgroundColor,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}
