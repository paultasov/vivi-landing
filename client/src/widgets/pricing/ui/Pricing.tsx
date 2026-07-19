import { User, Building2, Crown, Check, ArrowRight, Plus } from "lucide-react";
import { useReveal } from "@/shared/lib/use-reveal";

export function Pricing() {
  useReveal();
  const plans = [
    {
      name: "Соло-хирург",
      icon: <User className="w-4 h-4" />,
      price: "9 900",
      desc: "Для частной практики одного хирурга.",
      features: [
        "1 направление операций",
        "1 пользователь",
        "Базовое хранилище (10 ГБ)",
        "Календарь, консультации, мессенджер",
        "Галерея до/после",
      ],
    },
    {
      name: "Клиника",
      icon: <Building2 className="w-4 h-4" />,
      price: "24 900",
      desc: "Для клиник с командой и несколькими специализациями.",
      features: [
        "Несколько направлений на выбор",
        "База: 3 сотрудника — доплата за каждого нового",
        "Роли: ассистент, менеджер, второй хирург",
        "Расширенное хранилище (100 ГБ)",
        "Все модули + аналитика клиники",
        "Персональный менеджер внедрения",
      ],
      popular: true,
    },
    {
      name: "Premium",
      icon: <Crown className="w-4 h-4" />,
      price: "по запросу",
      desc: "Флагман для лидеров рынка и сетей клиник.",
      features: [
        "Все модули без ограничений",
        "AI-черновики протоколов операций",
        "Portfolio Builder — сайт-портфолио на данных клиники",
        "White Label — платформа под вашим брендом",
        "Приоритетный онбординг и обучение команды",
        "SLA и выделенная поддержка",
      ],
      premium: true,
    },
  ];
  const addons = [
    "Дополнительные направления операций",
    "Дополнительные сотрудники в команду",
    "Расширение хранилища",
    "Интеграции по API",
  ];
  return (
    <section id="pricing" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="reveal text-sm font-medium text-accent tracking-wide uppercase">Тарифы</div>
          <h2 className="reveal font-display mt-3 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Гибкие тарифы. <span className="text-gradient-accent">Под ваш формат.</span>
          </h2>
          <p className="reveal mt-5 text-lg text-muted-foreground">
            Выберите базовый план, а расширения докупайте по мере роста —
            без переплаты за то, чем не пользуетесь.
          </p>
        </div>

        <div className="reveal mt-16 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                p.popular
                  ? "card-glow ring-1 ring-accent/60 shadow-[0_0_60px_-15px_oklch(0.88_0.19_128_/_0.35)]"
                  : "card-glow"
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground glow-primary">
                  Оптимально
                </div>
              )}
              <div className="flex items-center gap-3">
                <span
                  className={`w-9 h-9 rounded-xl border grid place-items-center ${
                    p.premium
                      ? "border-accent-2/40 bg-accent-2/10 text-accent-2"
                      : "border-border text-foreground/90"
                  }`}
                >
                  {p.icon}
                </span>
                <div className="font-display text-2xl font-semibold">{p.name}</div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed min-h-[42px]">{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-5xl font-bold tracking-tight">{p.price}</span>
                {p.price !== "по запросу" && <span className="text-muted-foreground">₽ / мес</span>}
              </div>
              <ul className="mt-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 flex-none ${p.popular ? "text-accent" : "text-foreground/70"}`} />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all ${
                  p.popular
                    ? "bg-accent text-accent-foreground glow-primary hover:scale-[1.02]"
                    : p.premium
                      ? "bg-accent-2 text-accent-2-foreground hover:opacity-90"
                      : "bg-foreground text-background hover:opacity-90"
                }`}
              >
                Выбрать {p.name}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 card-glow rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-accent/15 text-accent grid place-items-center">
              <Plus className="w-5 h-5" />
            </span>
            <div>
              <div className="font-display text-lg font-semibold">Расширения — докупаются отдельно</div>
              <div className="text-sm text-muted-foreground">Платите только за то, что нужно именно вам.</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 md:ml-auto">
            {addons.map((a) => (
              <span
                key={a}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs text-foreground/90"
              >
                <Plus className="w-3 h-3 text-accent" />
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
