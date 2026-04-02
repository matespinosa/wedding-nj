const COLORS = ['#C4A35A', '#D4B76A', '#8A9A7B', '#C5D1B8', '#5C6B4F', '#F5F0E8', '#A8893E'];
const SHAPES = ['square', 'circle'] as const;

export function launchConfetti() {
  const container = document.createElement('div');
  container.className = 'confetti-container';
  document.body.appendChild(container);

  for (let i = 0; i < 80; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.backgroundColor = COLORS[Math.floor(Math.random() * COLORS.length)]!;
    piece.style.animationDuration = `${Math.random() * 2.5 + 2}s`;
    piece.style.animationDelay = `${Math.random() * 2}s`;
    piece.style.width = `${Math.random() * 8 + 4}px`;
    piece.style.height = `${Math.random() * 10 + 5}px`;
    if (shape === 'circle') piece.style.borderRadius = '50%';
    container.appendChild(piece);
  }

  setTimeout(() => container.remove(), 6000);
}
