import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { LogoMark } from "@/shared/ui/LogoMark";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent grid place-items-center glow-primary transition-transform group-hover:scale-110">
            <LogoMark className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight">VIVI</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#modules" className="hover:text-foreground transition-colors">Возможности</a>
          <a href="#how" className="hover:text-foreground transition-colors">Как это работает</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Тарифы</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#cta"
            className="hidden sm:inline text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Войти
          </a>
          <a
            href="#cta"
            className="group relative inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-primary-foreground bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_30px_-4px_oklch(0.72_0.22_320_/_0.7)] transition-all"
          >
            Попробовать
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
