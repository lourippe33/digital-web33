import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 28, suffix: "", label: "villes couvertes en Gironde" },
  { value: 390, suffix: "€", label: "site clé en main à partir de" },
  { value: 14, suffix: "j", label: "délai de livraison moyen" },
  { value: 100, suffix: "%", label: "propriétaire de votre site" },
];

const useCountUp = (target: number, duration = 1200, active: boolean) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
};

const StatItem = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCountUp(value, 1200, active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {count}{suffix}
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

export const Stats = () => (
  <section className="py-16 bg-muted/30 border-y border-border">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {stats.map((s, i) => (
          <StatItem key={i} {...s} />
        ))}
      </div>
    </div>
  </section>
);
