import { LogoMark } from "@/shared/ui/LogoMark";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-accent grid place-items-center">
            <LogoMark className="w-3.5 h-3.5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold tracking-tight">VIVI</span>
          <span className="text-sm text-muted-foreground ml-3">© {new Date().getFullYear()} · CRM для частных хирургов и клиник</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Политика</a>
          <a href="#" className="hover:text-foreground transition-colors">Оферта</a>
          <a href="#" className="hover:text-foreground transition-colors">hello@vivi.crm</a>
        </div>
      </div>
    </footer>
  );
}
