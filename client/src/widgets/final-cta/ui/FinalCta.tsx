import { useState } from "react";
import { Zap, ArrowRight, Check, ShieldCheck } from "lucide-react";
import { useReveal } from "@/shared/lib/use-reveal";
import { LogoMark } from "@/shared/ui/LogoMark";

export function FinalCta() {
  useReveal();
  const [sent, setSent] = useState(false);
  return (
    <section id="cta" className="py-32 relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute inset-0 -z-10 grid-bg opacity-60" />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-3 py-1 text-xs text-muted-foreground">
          <Zap className="w-3.5 h-3.5 text-accent" />
          14 дней бесплатно · без карты
        </div>
        <h2 className="reveal font-display mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-[1.02]">
          Соберите практику <br />
          <span className="text-gradient-accent">в одной системе.</span>
        </h2>
        <p className="reveal mt-6 text-lg text-muted-foreground">
          Заявка → звонок в течение часа → запуск за 7 дней. Без предоплаты,
          перенос данных и обучение команды — включены.
        </p>

        {sent ? (
          <div className="animate-pop-in mt-10 mx-auto max-w-xl card-glow rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent grid place-items-center glow-primary">
              <LogoMark className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold">Заявка принята!</h3>
            <p className="mt-2 text-muted-foreground">
              Мы свяжемся с вами в течение часа и покажем VIVI на данных вашей клиники.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="reveal mt-10 mx-auto max-w-xl card-glow rounded-2xl p-2 flex flex-col sm:flex-row gap-2"
          >
            <input
              required
              type="email"
              placeholder="Ваш email"
              className="flex-1 bg-transparent px-4 py-3 rounded-xl text-foreground placeholder:text-muted-foreground outline-none"
            />
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium text-primary-foreground bg-gradient-to-r from-primary to-accent glow-primary hover:scale-[1.02] transition-transform"
            >
              Попробовать бесплатно
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        )}

        <div className="reveal mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Без предоплаты</span>
          <span className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Данные в России</span>
          <span className="inline-flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Импорт из Excel</span>
          <span className="inline-flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Обучение включено</span>
        </div>
      </div>
    </section>
  );
}
