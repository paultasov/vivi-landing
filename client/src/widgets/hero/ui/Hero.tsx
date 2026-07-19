import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play, CalendarClock, Wallet, MousePointer2 } from "lucide-react";
import heroBg from "@/shared/assets/hero-bg.jpg";
import mockupDashboard from "@/shared/assets/mockup-dashboard.jpg";
import { useReveal } from "@/shared/lib/use-reveal";
import { CountUp } from "@/shared/ui/CountUp";

const heroCopy = {
  surgeon: {
    title: "Одна система для вашей частной практики",
    sub: "Календарь, консультации, галерея до/после и мессенджер с пациентами — без Excel, WhatsApp и бумаги.",
  },
  clinic: {
    title: "Одна система для команды и всей клиники",
    sub: "Расписание врачей, роли сотрудников, аналитика выручки и мессенджер — без хаоса и потерянных данных.",
  },
} as const;

export function Hero() {
  useReveal();
  const [segment, setSegment] = useState<keyof typeof heroCopy>("surgeon");
  const parallaxRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const onScroll = () => {
      const el = parallaxRef.current;
      if (!el) return;
      const y = Math.min(120, window.scrollY * 0.15);
      el.style.transform = `translate3d(0, ${y}px, 0)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute -z-10 top-20 -left-32 w-[520px] h-[520px] rounded-full bg-accent/10 blur-3xl animate-aurora" />
      <div className="absolute -z-10 bottom-0 -right-32 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl animate-aurora [animation-delay:-6s]" />
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1280}
        className="absolute inset-0 -z-10 w-full h-full object-cover opacity-30 mix-blend-screen"
      />
      <div className="absolute inset-0 -z-10 grid-bg" />
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto max-w-7xl px-6 text-center">
        <div className="reveal inline-flex items-center gap-1 rounded-full border border-border bg-card/50 backdrop-blur p-1 text-sm">
          {(
            [
              ["surgeon", "Хирург"],
              ["clinic", "Клиника"],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setSegment(key)}
              className={`rounded-full px-4 py-1.5 font-medium transition-colors ${
                segment === key
                  ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <h1 className="mt-10 font-display text-5xl md:text-7xl lg:text-[8.5rem] font-semibold tracking-[-0.04em] leading-[0.92]">
          <ScrollRevealText text={heroCopy[segment].title} accentFrom={2} />
        </h1>

        <p className="reveal mx-auto mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
          {heroCopy[segment].sub}
        </p>

        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#cta"
            className="group relative inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-medium text-primary-foreground bg-gradient-to-r from-primary to-accent glow-primary hover:shadow-[0_0_60px_-8px_oklch(0.72_0.22_320_/_0.8)] hover:scale-[1.02] transition-all"
          >
            Попробовать бесплатно
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#demo"
            className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-medium text-foreground bg-card/60 backdrop-blur border border-border hover:border-primary/50 transition-all"
          >
            <span className="w-6 h-6 rounded-full bg-primary/20 grid place-items-center group-hover:bg-primary/40 transition-colors">
              <Play className="w-3 h-3 fill-current" />
            </span>
            Смотреть демо
          </a>
        </div>

        <div ref={parallaxRef} className="reveal mt-20 md:mt-28 relative mx-auto max-w-6xl will-change-transform">
          <div className="absolute -inset-8 -z-10 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 blur-3xl opacity-60 animate-glow-pulse" />
          <FloatingCard>
            <img
              src={mockupDashboard}
              alt="VIVI Dashboard"
              width={1600}
              height={1008}
              className="w-full h-auto"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute hidden md:block rounded-2xl ring-2 ring-accent/50 animate-glow-pulse"
              style={{ left: "70%", top: "14%", width: "27%", height: "13%" }}
            />
            <LiveCursor />
          </FloatingCard>

          <div className="hidden lg:block absolute -left-10 top-1/4 animate-float">
            <MiniStatCard
              icon={<CalendarClock className="w-4 h-4" />}
              title="Сегодня"
              value={<><CountUp to={12} /> консультаций</>}
            />
          </div>
          <div className="hidden lg:block absolute -right-8 top-2/3 animate-float [animation-delay:1.5s]">
            <MiniStatCard
              icon={<Wallet className="w-4 h-4" />}
              title="Выручка · май"
              value={<><CountUp to={2450000} suffix=" ₽" /></>}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-2xl overflow-hidden card-glow p-1.5">
      <div className="relative rounded-xl overflow-hidden ring-1 ring-white/5">{children}</div>
    </div>
  );
}

const CURSOR_POINTS = [
  { x: 30.7, y: 60.2 },
  { x: 85.4, y: 46.7 },
  { x: 72.7, y: 19.4 },
];

function LiveCursor() {
  const [i, setI] = useState(0);
  const [clicking, setClicking] = useState(false);
  useEffect(() => {
    const id = setInterval(() => {
      setI((v) => (v + 1) % CURSOR_POINTS.length);
      setClicking(true);
      setTimeout(() => setClicking(false), 500);
    }, 3200);
    return () => clearInterval(id);
  }, []);
  const p = CURSOR_POINTS[i];
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute z-10 hidden md:block transition-all duration-[1200ms] ease-in-out"
      style={{ left: `${p.x}%`, top: `${p.y}%` }}
    >
      <MousePointer2 className="w-5 h-5 -translate-x-0.5 -translate-y-0.5 text-foreground drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]" />
      {clicking && (
        <span className="absolute left-1 top-1 -z-10 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/60 animate-ping" />
      )}
    </div>
  );
}

function ScrollRevealText({
  text,
  accentFrom = 9999,
}: {
  text: string;
  accentFrom?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const start = vh * 0.95;
      const end = vh * 0.25;
      const p = (start - r.top) / (start - end);
      setProgress(Math.max(0, Math.min(1, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  const words = text.split(" ");
  return (
    <span ref={ref} className="inline">
      {words.map((w, i) => {
        const local = Math.max(0, Math.min(1, progress * words.length - i));
        const isAccent = i >= accentFrom;
        const base = isAccent ? "oklch(0.88 0.19 128)" : "oklch(0.97 0.005 80)";
        const dim = "oklch(0.32 0.005 60)";
        return (
          <span
            key={i}
            className="inline-block transition-colors duration-200"
            style={{
              color: local > 0.05 ? base : dim,
              opacity: 0.3 + local * 0.7,
              marginRight: "0.25em",
            }}
          >
            {w}
          </span>
        );
      })}
    </span>
  );
}

function MiniStatCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: React.ReactNode;
}) {
  return (
    <div className="card-glow rounded-xl px-4 py-3 flex items-center gap-3 min-w-[200px]">
      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent grid place-items-center text-primary-foreground">
        {icon}
      </div>
      <div className="text-left">
        <div className="text-xs text-muted-foreground">{title}</div>
        <div className="text-sm font-semibold">{value}</div>
      </div>
    </div>
  );
}
