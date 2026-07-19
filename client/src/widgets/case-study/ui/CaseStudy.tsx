import { useReveal } from "@/shared/lib/use-reveal";
import { CountUp } from "@/shared/ui/CountUp";
import { initials } from "@/shared/lib/initials";

export function CaseStudy() {
  useReveal();
  const stats = [
    { value: 20, prefix: "-", suffix: "%", label: "время консультации" },
    { value: 8, prefix: "+", suffix: "%", label: "найденной выручки" },
    { value: 7, suffix: " дней", label: "от заявки до запуска" },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal card-glow rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <div className="text-sm font-medium text-accent tracking-wide uppercase">Кейс · Aesthetica Clinic</div>
            <blockquote className="mt-5 font-display text-2xl md:text-3xl font-semibold tracking-tight leading-snug">
              "За два месяца избавились от четырёх табличек Excel и трёх чатов в WhatsApp.
              Команда наконец видит одну картину — и мы нашли деньги, которые раньше терялись."
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent grid place-items-center text-xs font-semibold text-primary-foreground flex-none">
                {initials("Анна Крылова")}
              </div>
              <div>
                <div className="font-semibold text-sm">Анна Крылова</div>
                <div className="text-xs text-muted-foreground">Главврач, Aesthetica Clinic</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-1 gap-6 md:gap-8 md:border-l md:border-border md:pl-16">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl md:text-5xl font-bold tracking-tight text-gradient-accent">
                  <CountUp to={s.value} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div className="mt-1.5 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
