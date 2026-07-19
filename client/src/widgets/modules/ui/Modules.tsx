import { useRef } from "react";
import {
  Calendar,
  Stethoscope,
  ClipboardList,
  Images,
  MessageSquare,
  BarChart3,
  SlidersHorizontal,
  Check,
  Image as ImageIcon,
  TrendingUp,
  TrendingDown,
  Send,
  Paperclip,
} from "lucide-react";
import mockupDashboard from "@/shared/assets/mockup-dashboard.jpg";
import { useReveal } from "@/shared/lib/use-reveal";

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1200px) rotateX(${(-py * 6).toFixed(2)}deg) rotateY(${(px * 8).toFixed(2)}deg) translateZ(0)`;
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg)";
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-spotlight
      className="relative rounded-2xl transition-transform duration-300 ease-out will-change-transform"
    >
      <div className="absolute -inset-4 -z-10 bg-gradient-to-r from-primary/30 to-accent/30 blur-3xl opacity-50" />
      <div className="rounded-2xl overflow-hidden card-glow p-1.5">
        <div className="rounded-xl overflow-hidden ring-1 ring-white/5">{children}</div>
      </div>
    </div>
  );
}

function MockupChrome({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-card aspect-[6/5]">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-accent/70" />
        <span className="ml-3 text-xs text-muted-foreground">{title}</span>
      </div>
      <div className="p-5 md:p-6">{children}</div>
    </div>
  );
}

function SurgeryMockup() {
  const items = [
    { t: "Подписано информированное согласие", done: true },
    { t: "Предоперационные анализы загружены", done: true },
    { t: "Согласован план анестезии", done: true },
    { t: "Кабинет и оборудование зарезервированы", done: false },
    { t: "Ассистент назначен и уведомлён", done: false },
  ];
  return (
    <MockupChrome title="Протокол операции · Ринопластика">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg font-semibold">Пациентка: Иванова Е. С.</div>
          <div className="text-xs text-muted-foreground mt-0.5">Операция — 24 мая, 10:00 · Кабинет 2</div>
        </div>
        <span className="rounded-full bg-accent/15 text-accent text-xs font-medium px-3 py-1">В процессе</span>
      </div>
      <ul className="mt-5 space-y-2.5">
        {items.map((it) => (
          <li key={it.t} className="flex items-center gap-3 rounded-xl border border-border bg-background/40 px-3.5 py-2.5">
            <span
              className={`w-5 h-5 rounded-md grid place-items-center flex-none ${
                it.done ? "bg-accent text-accent-foreground" : "border border-border"
              }`}
            >
              {it.done && <Check className="w-3.5 h-3.5" />}
            </span>
            <span className={`text-sm ${it.done ? "text-foreground" : "text-muted-foreground"}`}>{it.t}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex items-center gap-3 rounded-xl bg-background/40 border border-border px-3.5 py-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent grid place-items-center text-xs font-semibold text-primary-foreground flex-none">
          АК
        </div>
        <div className="text-sm">
          <span className="font-medium">Ассистент: Анна Ковалёва</span>
          <span className="text-muted-foreground"> · подтвердила готовность</span>
        </div>
      </div>
    </MockupChrome>
  );
}

function GalleryMockup() {
  const tiles = [
    { tag: "Ринопластика", accent: "from-accent/40 to-accent/10" },
    { tag: "Блефаропластика", accent: "from-primary/30 to-primary/5" },
    { tag: "Липофилинг", accent: "from-accent/30 to-transparent" },
    { tag: "Контурная пластика", accent: "from-primary/20 to-transparent" },
  ];
  return (
    <MockupChrome title="Галерея до/после">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold">Портфолио клиники</div>
        <span className="rounded-full bg-accent/15 text-accent text-xs font-medium px-3 py-1">148 работ</span>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        {tiles.map((t) => (
          <div
            key={t.tag}
            className={`relative aspect-square rounded-xl bg-gradient-to-br ${t.accent} border border-border overflow-hidden`}
          >
            <ImageIcon className="absolute inset-0 m-auto w-8 h-8 text-muted-foreground/40" />
            <div className="absolute left-2 top-2 flex gap-1">
              <span className="rounded-md bg-background/80 backdrop-blur px-1.5 py-0.5 text-[10px] font-medium">До</span>
              <span className="rounded-md bg-accent/90 text-accent-foreground px-1.5 py-0.5 text-[10px] font-medium">После</span>
            </div>
            <div className="absolute bottom-2 left-2 right-2 truncate rounded-md bg-background/80 backdrop-blur px-2 py-1 text-[11px] font-medium">
              {t.tag}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
        <Check className="w-3.5 h-3.5 text-accent" /> Согласие пациента на публикацию получено
      </div>
    </MockupChrome>
  );
}

function MessengerMockup() {
  return (
    <MockupChrome title="Мессенджер · Иванова Е. С.">
      <div className="space-y-3">
        <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-background/60 border border-border px-3.5 py-2.5 text-sm">
          Добрый день! Подскажите, можно перенести консультацию на пятницу?
        </div>
        <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-gradient-to-br from-primary to-accent text-primary-foreground px-3.5 py-2.5 text-sm">
          Здравствуйте, Елена! Да, записала вас на пятницу в 15:00 к доктору Петрову.
        </div>
        <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-background/60 border border-border px-3.5 py-2.5 text-sm">
          Отлично, спасибо! Нужно ли что-то взять с собой?
        </div>
        <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-gradient-to-br from-primary to-accent text-primary-foreground px-3.5 py-2.5 text-sm">
          Только результаты анализов — я прикрепила список в карту пациента.
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-full border border-border bg-background/40 px-3.5 py-2.5 text-sm text-muted-foreground">
        <Paperclip className="w-4 h-4" />
        <span className="flex-1">Написать сообщение…</span>
        <Send className="w-4 h-4 text-accent" />
      </div>
    </MockupChrome>
  );
}

function FinanceMockup() {
  const bars = [40, 55, 48, 70, 62, 82, 76];
  return (
    <MockupChrome title="Аналитика · Финансы">
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-xl border border-border bg-background/40 p-3.5">
          <div className="text-xs text-muted-foreground">Выручка / мес</div>
          <div className="mt-1.5 text-xl font-semibold">2 450 000 ₽</div>
          <div className="mt-1 flex items-center gap-1 text-xs text-accent">
            <TrendingUp className="w-3.5 h-3.5" /> +12%
          </div>
        </div>
        <div className="rounded-xl border border-border bg-background/40 p-3.5">
          <div className="text-xs text-muted-foreground">Средний чек</div>
          <div className="mt-1.5 text-xl font-semibold">184 000 ₽</div>
          <div className="mt-1 flex items-center gap-1 text-xs text-accent">
            <TrendingUp className="w-3.5 h-3.5" /> +5%
          </div>
        </div>
        <div className="rounded-xl border border-border bg-background/40 p-3.5">
          <div className="text-xs text-muted-foreground">Отмены</div>
          <div className="mt-1.5 text-xl font-semibold">3,1%</div>
          <div className="mt-1 flex items-center gap-1 text-xs text-destructive">
            <TrendingDown className="w-3.5 h-3.5" /> -1,4%
          </div>
        </div>
      </div>
      <div className="mt-5 rounded-xl border border-border bg-background/40 p-4">
        <div className="text-xs text-muted-foreground">Выручка по неделям</div>
        <div className="mt-4 flex items-end gap-2.5 h-24">
          {bars.map((h, i) => (
            <div
              key={i}
              className={`flex-1 rounded-t-md ${i === bars.length - 1 ? "bg-accent" : "bg-primary/25"}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </MockupChrome>
  );
}

function ModuleRow({
  data,
  flip,
}: {
  data: {
    tag: string;
    title: string;
    text: string;
    img?: string;
    mockup?: React.ReactNode;
    icon: React.ReactNode;
    bullets: string[];
  };
  flip: boolean;
}) {
  return (
    <div
      className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
        flip ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="reveal">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-3 py-1 text-xs text-muted-foreground">
          <span className="text-primary">{data.icon}</span>
          {data.tag}
        </div>
        <h3 className="font-display mt-5 text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]">
          {data.title}
        </h3>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{data.text}</p>
        <ul className="mt-6 space-y-3">
          {data.bullets.map((b) => (
            <li key={b} className="flex items-center gap-3 text-foreground">
              <span className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent grid place-items-center flex-none">
                <Check className="w-3 h-3 text-primary-foreground" />
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>
      <div className="reveal">
        <TiltCard>
          {data.mockup ?? (
            <img src={data.img} alt={data.title} loading="lazy" className="w-full h-auto block" />
          )}
        </TiltCard>
      </div>
    </div>
  );
}

export function Modules() {
  useReveal();
  const mods = [
    {
      tag: "01 · Календарь",
      title: "Расписание, в котором нет пробелов и накладок",
      text: "Умный календарь операций и консультаций с загрузкой кабинетов, хирургов и ассистентов. Все смены видны в одном окне.",
      img: mockupDashboard,
      icon: <Calendar className="w-4 h-4" />,
      bullets: ["Загрузка врачей и кабинетов", "Автоматические напоминания", "Онлайн-запись пациентов"],
    },
    {
      tag: "02 · Консультации",
      title: "Каждая консультация — на одном экране",
      text: "История пациента, план работ, комментарии врача, стоимость и запись на операцию. Никаких переключений между вкладками.",
      img: mockupDashboard,
      icon: <Stethoscope className="w-4 h-4" />,
      bullets: ["Умное расписание", "Автоматические напоминания", "Медкарта в один клик"],
    },
    {
      tag: "03 · Операции",
      title: "Протоколы и чек-листы, которые не забудут",
      text: "Пошаговые протоколы для каждого типа операций, чек-листы для команды, статусы в реальном времени.",
      mockup: <SurgeryMockup />,
      icon: <ClipboardList className="w-4 h-4" />,
      bullets: ["Шаблоны протоколов", "Роли в команде", "Отметки времени"],
    },
    {
      tag: "04 · Галерея",
      title: "Портфолио, которое продаёт",
      text: "Умное хранилище фото с тегами, сравнение до/после, встроенное согласие пациента на публикацию.",
      mockup: <GalleryMockup />,
      icon: <Images className="w-4 h-4" />,
      bullets: ["Автотеги по процедурам", "Публикация на сайт", "Согласия на фото"],
    },
    {
      tag: "05 · Мессенджер",
      title: "Общение с пациентами без WhatsApp-хаоса",
      text: "Все чаты, файлы и голосовые — привязаны к карте пациента. История сохраняется, ничего не теряется при увольнении сотрудника.",
      mockup: <MessengerMockup />,
      icon: <MessageSquare className="w-4 h-4" />,
      bullets: ["Единый inbox", "Шаблоны ответов", "История в карте пациента"],
    },
    {
      tag: "06 · Аналитика",
      title: "Понимайте цифры клиники в реальном времени",
      text: "Дашборд выручки, воронка продаж, загрузка хирургов и маржинальность по процедурам. Решения на основе данных, а не интуиции.",
      mockup: <FinanceMockup />,
      icon: <BarChart3 className="w-4 h-4" />,
      bullets: ["Выручка и прибыль", "Воронка продаж", "Загрузка врачей"],
    },
    {
      tag: "07 · Гибкая настройка",
      title: "Платформа под ваши процессы, а не наоборот",
      text: "Собственные поля, статусы, воронки, шаблоны документов и автоматизация рутины. Настройте VIVI под стиль работы своей клиники или практики.",
      img: mockupDashboard,
      icon: <SlidersHorizontal className="w-4 h-4" />,
      bullets: ["Кастомные поля и воронки", "Шаблоны документов", "Автоматизация рутины"],
    },
  ];
  return (
    <section id="modules" className="py-32 relative">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="reveal text-sm font-medium text-accent tracking-wide uppercase">Решение</div>
          <h2 className="reveal font-display mt-3 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Семь модулей.{" "}
            <span className="text-gradient-accent">Одна экосистема.</span>
          </h2>
          <p className="reveal mt-5 text-lg text-muted-foreground">
            Каждый модуль работает самостоятельно и связан со всеми — данные пациента
            следуют от первой заявки до финального фото.
          </p>
        </div>

        <div className="mt-24 space-y-32">
          {mods.map((m, i) => (
            <ModuleRow key={m.tag} data={m} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
