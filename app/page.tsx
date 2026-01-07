/**
 * MB-Solutions - Full-Width Redesign
 *
 * NEUE STRUKTUR (8 Sections):
 * 1. 🔥 HeroFullWidth - Edge-to-edge Hero mit Floating Glass Card
 * 2. ⚡ TechStack - Animated Logo Marquee
 * 3. 🎯 ServicesInteractive - Tab-Switcher statt Grid
 * 4. 🚀 ProcessJourney - Horizontal Timeline
 * 5. 📊 CaseStudies - Asymmetrisches Bento-Grid
 * 6. 💎 TrustExpertise - Metrics + Tech Badge Wall
 * 7. ⭐ Testimonials - Social Proof
 * 8. 🎉 CTAImmersive - Full-Screen CTA
 *
 * Design: Vercel/Linear/Stripe-Niveau
 * Layout: Full-Width, Edge-to-Edge, NO standard 3-column grids
 * Target: B2B mittelständische Unternehmen
 */

// CONTROL ROOM HERO + HEADER SYSTEM (Active)
import { HeroControlRoom } from "@/components/sections/HeroControlRoom";
// Alternative Heroes:
// import { HeroBold } from "@/components/sections/HeroBold";
// import { HeroConversion } from "@/components/sections/HeroConversion";
// import { HeroFullWidth } from "@/components/sections/HeroFullWidth";
// SERVICES CONTROL ROOM (Active)
import { ServicesControlRoom } from "@/components/sections/ServicesControlRoom";
// Alternative:
// import { ServicesInteractive } from "@/components/sections/ServicesInteractive";
import { ProcessJourney } from "@/components/sections/ProcessJourney";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { TrustExpertise } from "@/components/sections/TrustExpertise";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTAImmersive } from "@/components/sections/CTAImmersive";

export default function HomePage() {
  return (
    <main className="relative bg-[#0A0E27] text-white overflow-hidden">
      {/* Subtle Ambient Background Gradients */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div
          className="absolute top-0 right-0 w-[1200px] h-[1200px] rounded-full blur-[180px]"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[1200px] h-[1200px] rounded-full blur-[180px]"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* 1. HERO + HEADER - Control Room System */}
        <HeroControlRoom />

        {/* 2. SERVICES CONTROL ROOM - Mission Control Dashboard */}
        <ServicesControlRoom />

        {/* 3. PROCESS JOURNEY - Horizontal Timeline */}
        <ProcessJourney />

        {/* 4. CASE STUDIES - Asymmetrisches Bento-Grid */}
        <CaseStudies />

        {/* 5. TRUST & EXPERTISE - Metrics + Tech Badges */}
        <TrustExpertise />

        {/* 6. TESTIMONIALS - Social Proof */}
        <Testimonials />

        {/* 7. FAQ - Häufig gestellte Fragen (SEO Featured Snippets) */}
        <FAQ />

        {/* 8. CTA IMMERSIVE - Full-Screen Final Push */}
        <CTAImmersive />
      </div>
    </main>
  );
}
