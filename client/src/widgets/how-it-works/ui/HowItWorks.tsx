import { useEffect, useState } from "react";
import { useReveal } from "@/shared/lib/use-reveal";

export function HowItWorks() {
  useReveal();
  const [active, setActive] = useState(0);
  const steps = [
    { t: "Заявка", d: "Оставляете заявку — наш менеджер связывается в течение часа." },
    { t: "Настройка", d: "Переносим шаблоны, чек-листы и базу пациентов из ваших файлов." },
    { t: "Обучение", d: "Проводим онлайн-обучение команды — 1-2 сессии по 40 минут." },
    { t: "Запуск", d: "Клиника работает в VIVI. Первые 30 дней — сопровождение персонального менеджера." },
  ];
  useEffect(() => {
    const i = setInterval(() => setActive((a) => (a + 1) % steps.length), 3500);
    return () => clearInterval(i);
  }, [steps.length]);
  return (
    <section id="how" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="reveal text-sm font-medium text-accent tracking-wide uppercase">Как это работает</div>
          <h2 className="reveal font-display mt-3 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            От заявки до запуска — <span className="text-gradient-accent">7 дней.</span>
          </h2>
        </div>

        <div className="reveal mt-16 card-glow rounded-3xl p-8 md:p-12">
          <div className="relative">
            <div className="absolute left-0 right-0 top-5 h-px bg-border" />
            <div
              className="absolute left-0 top-5 h-px bg-gradient-to-r from-primary to-accent transition-all duration-700"
              style={{ width: `${((active + 1) / steps.length) * 100}%` }}
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-start">
              {steps.map((s, i) => {
                const done = i <= active;
                return (
                  <button
                    key={s.t}
                    type="button"
                    onClick={() => setActive(i)}
                    className="flex flex-col items-start text-left group"
                  >
                    <div className="relative flex items-center gap-3">
                      <span
                        className={`relative z-10 w-10 h-10 rounded-full grid place-items-center text-sm font-semibold transition-all ${
                          done
                            ? "bg-gradient-to-br from-primary to-accent text-primary-foreground glow-primary"
                            : "bg-card border border-border text-muted-foreground"
                        }`}
                      >
                        {i + 1}
                      </span>
                    </div>
                    <div className="mt-5">
                      <div
                        className={`font-display text-lg font-semibold transition-colors ${
                          done ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {s.t}
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
