import { Server, Lock, RefreshCw, ShieldCheck } from "lucide-react";
import { useReveal } from "@/shared/lib/use-reveal";

export function Security() {
  useReveal();
  const items = [
    {
      icon: <Server className="w-5 h-5" />,
      title: "Серверы в России",
      text: "Данные пациентов хранятся на защищённых серверах внутри страны, в соответствии с 152-ФЗ.",
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Шифрование данных",
      text: "Передача и хранение данных защищены шифрованием. Доступ — только по ролям сотрудников.",
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: "Регулярные бэкапы",
      text: "Ежедневное резервное копирование — данные клиники не потеряются даже при сбое.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Соответствие 152-ФЗ",
      text: "Обработка персональных и медицинских данных пациентов — по требованиям российского законодательства.",
    },
  ];
  return (
    <section className="py-24 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal max-w-2xl">
          <div className="text-sm font-medium text-accent tracking-wide uppercase">Безопасность</div>
          <h2 className="font-display mt-3 text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]">
            Данные пациентов — под защитой.
          </h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((it, i) => (
            <div key={it.title} className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent grid place-items-center">
                {it.icon}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
