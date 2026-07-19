import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export function StickyCta() {
  const [pastHero, setPastHero] = useState(false);
  const [inCtaSection, setInCtaSection] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ctaEl = document.querySelector("#cta");
    if (!ctaEl) return;
    const io = new IntersectionObserver(([entry]) => setInCtaSection(entry.isIntersecting), {
      threshold: 0.15,
    });
    io.observe(ctaEl);
    return () => io.disconnect();
  }, []);

  const visible = pastHero && !inCtaSection;

  return (
    <div
      className={`fixed inset-x-4 bottom-4 z-40 flex justify-center sm:inset-x-auto sm:right-6 sm:bottom-6 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <div className="flex w-full max-w-sm items-center gap-3 rounded-full card-glow py-2 pl-5 pr-2 sm:w-auto sm:max-w-none">
        <span className="hidden whitespace-nowrap text-sm text-foreground/90 sm:block">
          Готовы попробовать VIVI?
        </span>
        <a
          href="#cta"
          className="group inline-flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2.5 text-sm font-medium text-primary-foreground glow-primary transition-transform hover:scale-[1.02] sm:flex-none"
        >
          Попробовать бесплатно
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}
