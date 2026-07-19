import { useReveal } from "@/shared/lib/use-reveal";
import { initials } from "@/shared/lib/initials";

export function Testimonials() {
  useReveal();
  const items = [
    {
      q: "За два месяца избавились от четырёх табличек Excel и трёх чатов в WhatsApp. Команда наконец видит одну картину.",
      n: "Анна Крылова",
      r: "Главврач, Aesthetica",
    },
    {
      q: "Протоколы операций стали железными. Ассистенты не забывают ни одного шага.",
      n: "Игорь Петров",
      r: "Пластический хирург",
    },
    { q: "Галерея до/после — отдельное спасибо. Уменьшили время консультации на 20%.", n: "Мария Соловьёва", r: "Врач-косметолог" },
    {
      q: "Финансовый модуль показал, что мы недосчитывались около 8% выручки. Окупилось за первый месяц.",
      n: "Дмитрий Волков",
      r: "Владелец сети клиник",
    },
    {
      q: "Мессенджер с пациентами закрыл проблему увольнений: история переписки теперь остаётся у клиники.",
      n: "Елена Богданова",
      r: "Директор клиники",
    },
  ];
  const doubled = [...items, ...items];
  return (
    <section className="py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal max-w-3xl">
          <div className="text-sm font-medium text-accent tracking-wide uppercase">Отзывы</div>
          <h2 className="font-display mt-3 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Что говорят <span className="text-gradient-accent">хирурги и клиники.</span>
          </h2>
        </div>
      </div>
      <div className="reveal mt-16 relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-background to-transparent" />
        <div className="flex gap-6 w-max animate-marquee">
          {doubled.map((it, i) => (
            <figure
              key={i}
              className="card-glow rounded-2xl p-7 w-[380px] flex-none"
            >
              <blockquote className="text-foreground leading-relaxed">"{it.q}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br grid place-items-center text-xs font-semibold text-primary-foreground flex-none ${
                    i % 2 === 0 ? "from-primary to-accent" : "from-primary to-accent-2"
                  }`}
                >
                  {initials(it.n)}
                </div>
                <div>
                  <div className="font-semibold text-sm">{it.n}</div>
                  <div className="text-xs text-muted-foreground">{it.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
