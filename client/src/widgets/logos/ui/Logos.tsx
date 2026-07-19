import { useReveal } from "@/shared/lib/use-reveal";
import { CountUp } from "@/shared/ui/CountUp";

export function Logos() {
  useReveal();
  const items = ["Клиника Аврора", "MedLine", "Estetica+", "Dr. Petrov Clinic", "Vellum", "Beauty Lab"];
  const doubled = [...items, ...items];
  return (
    <section className="py-16 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <p className="reveal text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Уже используют более <CountUp to={200} />+ клиник
        </p>
      </div>
      <div className="reveal mt-8 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-background to-transparent" />
        <div className="flex gap-4 w-max animate-marquee-slow">
          {doubled.map((n, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 rounded-full border border-border bg-card/40 px-5 py-2.5 whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-none" />
              <span className="font-display text-sm md:text-base font-semibold tracking-tight text-foreground/80">
                {n}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
