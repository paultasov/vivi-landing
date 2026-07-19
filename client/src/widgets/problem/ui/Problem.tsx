import { MessageSquare, FileText, ClipboardList } from "lucide-react";
import { useReveal } from "@/shared/lib/use-reveal";

export function Problem() {
  useReveal();
  const items = [
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Разрозненные каналы",
      text: "WhatsApp, Telegram, звонки, почта. Контекст пациента теряется между чатами.",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Пропущенные документы",
      text: "Согласия, анализы, договоры — в бумаге и на разных дисках. Найти вовремя невозможно.",
    },
    {
      icon: <ClipboardList className="w-5 h-5" />,
      title: "Хаос перед операцией",
      text: "Чек-листы в голове ассистента, протоколы в Word, изменения — на стикерах.",
    },
  ];
  return (
    <section className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="reveal text-sm font-medium text-accent tracking-wide uppercase">Проблема</div>
          <h2 className="reveal font-display mt-3 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Клиника растёт —{" "}
            <span className="text-muted-foreground">процессы рассыпаются.</span>
          </h2>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="reveal card-glow rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-500"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-destructive/15 text-destructive grid place-items-center">
                {it.icon}
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
