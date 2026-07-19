import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useReveal } from "@/shared/lib/use-reveal";

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card-glow rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-lg font-semibold">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform duration-500 ${
            open ? "rotate-180 text-primary" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  useReveal();
  const items = [
    { q: "Сколько занимает внедрение?", a: "От 3 до 7 дней. Мы переносим ваши данные, настраиваем шаблоны и обучаем команду." },
    { q: "Где хранятся данные пациентов?", a: "На защищённых серверах в России. Шифрование при передаче и хранении, регулярные бэкапы." },
    { q: "Можно ли перенести данные из другой CRM или Excel?", a: "Да. Импорт из Excel, Google Sheets и большинства медицинских CRM входит в стоимость внедрения." },
    { q: "Есть ли мобильное приложение?", a: "Да, для хирургов и администраторов — iOS и Android. Всё, что доступно в вебе, работает и в приложении." },
    { q: "Как оплачивать подписку?", a: "Помесячно или ежегодно (со скидкой 15%). Юрлицам — счёт и закрывающие документы." },
  ];
  return (
    <section id="faq" className="py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="reveal text-sm font-medium text-accent tracking-wide uppercase">FAQ</div>
        <h2 className="reveal font-display mt-3 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          Частые вопросы.
        </h2>
        <div className="reveal mt-12 space-y-3">
          {items.map((it, i) => (
            <FaqItem key={i} q={it.q} a={it.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
