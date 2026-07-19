import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/shared/lib/use-reveal";

export function RoiCalculator() {
  useReveal();
  const [patients, setPatients] = useState(80);
  const hoursSaved = Math.round(patients * 0.18);
  const moneyFound = Math.round((patients * 75000 * 0.08) / 1000) * 1000;
  const yearly = moneyFound * 12;
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="mx-auto max-w-5xl px-6">
        <div className="reveal max-w-2xl">
          <div className="text-sm font-medium text-accent tracking-wide uppercase">Ваша выгода</div>
          <h2 className="font-display mt-3 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Сколько теряет клиника <span className="text-gradient-accent">без VIVI?</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Ориентировочный расчёт на основе данных наших клиентов. Точные цифры зависят от вашей клиники.
          </p>
        </div>

        <div className="reveal mt-12 card-glow rounded-3xl p-8 md:p-12">
          <label className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Пациентов в месяц</span>
            <span className="font-display text-2xl font-bold text-foreground tabular-nums">{patients}</span>
          </label>
          <input
            type="range"
            min={20}
            max={300}
            step={10}
            value={patients}
            onChange={(e) => setPatients(Number(e.target.value))}
            className="mt-4 w-full accent-accent"
          />

          <div className="mt-10 grid sm:grid-cols-2 gap-8">
            <div>
              <div className="font-display text-4xl md:text-5xl font-bold tracking-tight text-gradient-accent tabular-nums">
                ~{hoursSaved} ч
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                административной работы освобождается в месяц
              </div>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl font-bold tracking-tight text-gradient-accent tabular-nums">
                ~{moneyFound.toLocaleString("ru-RU")} ₽
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                потенциально теряется из-за разрозненных данных, в месяц
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              За год это может быть до{" "}
              <span className="font-semibold text-foreground tabular-nums">{yearly.toLocaleString("ru-RU")} ₽</span>
            </div>
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-primary-foreground bg-gradient-to-r from-primary to-accent glow-primary hover:scale-[1.02] transition-transform"
            >
              Обсудить мою клинику
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
