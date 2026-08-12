const STARS = Array.from({ length: 90 }, () => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: Math.random() * 2 + 1,
  delay: `${Math.random() * 5}s`,
  duration: `${Math.random() * 3 + 2}s`,
}));

export default function StarField() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      {STARS.map((star, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}
