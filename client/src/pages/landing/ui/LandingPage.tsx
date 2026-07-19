import { ScrollProgress } from "@/widgets/scroll-progress";
import { Nav } from "@/widgets/nav";
import { Hero } from "@/widgets/hero";
import { Logos } from "@/widgets/logos";
import { Problem } from "@/widgets/problem";
import { ChaosSlider } from "@/features/chaos-slider";
import { Modules } from "@/widgets/modules";
import { CaseStudy } from "@/widgets/case-study";
import { HowItWorks } from "@/widgets/how-it-works";
import { RoiCalculator } from "@/features/roi-calculator";
import { Pricing } from "@/widgets/pricing";
import { Testimonials } from "@/widgets/testimonials";
import { Faq } from "@/widgets/faq";
import { Security } from "@/widgets/security";
import { FinalCta } from "@/widgets/final-cta";
import { Footer } from "@/widgets/footer";
import { StickyCta } from "@/widgets/sticky-cta";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <ScrollProgress />
      <Nav />
      <Hero />
      <Logos />
      <Problem />
      <ChaosSlider />
      <Modules />
      <CaseStudy />
      <HowItWorks />
      <RoiCalculator />
      <Pricing />
      <Testimonials />
      <Faq />
      <Security />
      <FinalCta />
      <Footer />
      <StickyCta />
    </div>
  );
}
