import { useState } from "react";
import { Calendar, MessageSquare, BarChart3, ArrowLeftRight } from "lucide-react";
import { useReveal } from "@/shared/lib/use-reveal";

function ChaosPanel() {
  const items = [
    { label: "Пациенты.xlsx", sub: "Excel · 14 вкладок", top: "8%", left: "5%", rotate: -6 },
    { label: "WhatsApp Business", sub: "127 непрочитанных", top: "40%", left: "30%", rotate: 4 },
    { label: "Протоколы.docx", sub: "версия от вторника", top: "62%", left: "6%", rotate: -3 },
    { label: "Бумажный журнал", sub: "записи от руки", top: "14%", left: "58%", rotate: 5 },
    { label: "Telegram", sub: "3 разных чата", top: "64%", left: "56%", rotate: -5 },
  ];
  return (
    <div className="relative h-full w-full overflow-hidden bg-[oklch(0.14_0.02_25)] p-4 md:p-8">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background: "radial-gradient(ellipse at 30% 20%, oklch(0.5 0.19 25 / 30%), transparent 60%)",
        }}
      />
      {items.map((it) => (
        <div
          key={it.label}
          className="absolute w-40 rounded-xl border border-destructive/30 bg-card/95 px-3.5 py-3 shadow-lg md:w-48"
          style={{ top: it.top, left: it.left, transform: `rotate(${it.rotate}deg)` }}
        >
          <div className="text-xs font-semibold text-foreground/90 md:text-sm">{it.label}</div>
          <div className="mt-1 text-[10px] text-muted-foreground md:text-xs">{it.sub}</div>
        </div>
      ))}
    </div>
  );
}

function ViviCleanPanel() {
  const items = [
    { icon: <Calendar className="w-4 h-4" />, label: "Календарь и консультации" },
    { icon: <MessageSquare className="w-4 h-4" />, label: "Мессенджер с пациентами" },
    { icon: <BarChart3 className="w-4 h-4" />, label: "Аналитика в реальном времени" },
  ];
  return (
    <div className="flex h-full w-full items-center bg-card p-6 md:p-10">
      <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3 md:gap-4">
        {items.map((it) => (
          <div key={it.label} className="rounded-xl border border-accent/30 bg-accent/5 p-3.5 md:p-4">
            <div className="w-9 h-9 rounded-lg bg-accent/15 text-accent grid place-items-center">{it.icon}</div>
            <div className="mt-3 text-sm font-medium text-foreground">{it.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ChaosSlider() {
  useReveal();
  const [value, setValue] = useState(50);
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="reveal text-sm font-medium text-accent tracking-wide uppercase">Наглядно</div>
          <h2 className="reveal font-display mt-3 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Потяните и сравните: <span className="text-gradient-accent">хаос → VIVI.</span>
          </h2>
        </div>

        <div className="reveal relative mt-12 aspect-[4/5] select-none overflow-hidden rounded-3xl card-glow sm:aspect-[16/9]">
          <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${value}%)` }}>
            <ChaosPanel />
            <div className="pointer-events-none absolute right-4 top-4 whitespace-nowrap rounded-full bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              До: Excel, WhatsApp, бумага
            </div>
          </div>
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}>
            <ViviCleanPanel />
            <div className="pointer-events-none absolute left-4 top-4 whitespace-nowrap rounded-full bg-accent/90 px-3 py-1 text-xs font-medium text-accent-foreground">
              После: VIVI
            </div>
          </div>
          <div
            className="pointer-events-none absolute inset-y-0 w-0.5 bg-accent"
            style={{ left: `${value}%` }}
          >
            <div className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-accent glow-primary">
              <ArrowLeftRight className="w-4 h-4 text-accent-foreground" />
            </div>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            aria-label="Сравнить хаос и VIVI"
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>
      </div>
    </section>
  );
}
