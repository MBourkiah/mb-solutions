# MB-SOLUTIONS FULL-WIDTH REDESIGN KONZEPT
## Senior UI/UX Designer Specification | Vercel/Linear/Stripe-Niveau

---

# 📊 PHASE 1: ANALYSE & BACKUP-STRATEGIE

## Typische Schwächen Standard-Agency-Startseiten

### ❌ Das Problem mit 08/15-Templates:

```
1. VISUAL MONOTONIE
   - Alle haben: 3-Spalten-Grid + Icon + Text + Button
   - Vorhersehbare Layouts (Center-Container, 1200px max)
   - Keine visuellen Überraschungen
   - Stockfotos statt einzigartige Visuals

2. VERSCHENKTER PLATZ
   - Fixed Container (1200-1400px) auf 2560px Screen
   - Riesen-Margins links/rechts verschenkt
   - Nicht für Wide Screens optimiert
   - Tablet-Breakpoint ignoriert

3. GENERISCHE SECTION-ARCHITEKTUR
   - Hero: Links Text, rechts Bild
   - Services: 3 Cards nebeneinander
   - Prozess: 4 Steps vertikal
   - CTA: zentriertes Formular
   → Kunde erinnert sich an NICHTS

4. FEHLENDE TIEFE
   - Flat Cards ohne Depth
   - Keine Glassmorphism/Layers
   - Statische Elemente (keine Animationen)
   - Kein visueller Rhythmus

5. MOBILE-FIRST VERNACHLÄSSIGT
   - Desktop → Mobile-Shrink (statt Mobile → Desktop-Grow)
   - Touch-Targets zu klein
   - Unlesbare Texte auf 375px
```

---

## 🔄 BACKUP-STRATEGIE für Bestehende Komponenten

### Vorgehen:

```bash
# 1. Legacy-Ordner erstellen
mkdir components/sections/legacy

# 2. Aktuelle Komponenten verschieben (als Backup)
mv components/sections/HeroModern.tsx → components/sections/legacy/HeroModern_v1.tsx
mv components/sections/ServicesBento.tsx → components/sections/legacy/ServicesBento_v1.tsx
# ... etc für alle Sections

# 3. Neue V2-Komponenten erstellen
components/sections/HeroFullWidth.tsx       (NEU)
components/sections/ServicesInteractive.tsx (NEU)
components/sections/ProcessJourney.tsx      (NEU)
# ... etc

# 4. Git Commit vor Redesign
git add .
git commit -m "BACKUP: Pre-Full-Width-Redesign - all sections archived"
```

### Fallback-Plan:
```tsx
// In app/page.tsx können wir jederzeit zurückschalten:

// Option A: Neue Full-Width Version
import { HeroFullWidth } from "@/components/sections/HeroFullWidth";

// Option B: Alte Version (Fallback)
import { HeroModern } from "@/components/sections/legacy/HeroModern_v1";

// Einfacher Toggle via Flag:
const USE_LEGACY = false; // true → alte Version
```

---

# 🎨 PHASE 2: FULL-WIDTH DESIGN-SYSTEM

## Design-Philosophie: "Wide Canvas Architecture"

```
GRUNDPRINZIP:
- Nutze die VOLLE Breite (Edge-to-Edge)
- Aber: Content bleibt lesbar (max 70ch für Text)
- Visuelle Elemente dürfen "ausbrechen"

SPACING-HIERARCHIE:
Level 1 (Enge):     16-24px  → zwischen kleinen Elementen
Level 2 (Standard): 32-48px  → zwischen Blöcken
Level 3 (Section):  64-96px  → zwischen Sections
Level 4 (Breath):   128-192px → für "Luftraum"

BREAKPOINTS (Tailwind):
xs:  0px    (320px min)
sm:  640px  (Phones)
md:  768px  (Tablets)
lg:  1024px (Laptops)
xl:  1280px (Desktop)
2xl: 1536px (Large Desktop)
3xl: 1920px (Wide Screens) → Custom Breakpoint!
```

---

## Container-Strategie: "Fluid Bounds"

```tsx
/* NICHT MEHR SO (Alte Container-Logik): */
<div className="max-w-7xl mx-auto px-8">
  {/* Alles eingequetscht */}
</div>

/* SONDERN SO (Full-Width mit Smart Bounds): */

// Variante A: Full-Width Background + Content Bounds
<section className="relative w-full py-32">
  {/* Background: Full Width */}
  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/10" />

  {/* Content: Bounded aber großzügig */}
  <div className="relative max-w-[1800px] mx-auto px-8 xl:px-16 2xl:px-24 3xl:px-32">
    {/* Inhalt */}
  </div>
</section>

// Variante B: Asymmetrisch (z.B. Hero)
<section className="relative w-full">
  <div className="grid grid-cols-12 gap-0">
    {/* Links: Content (7 cols) */}
    <div className="col-span-12 lg:col-span-7 px-8 xl:px-24 2xl:px-32">
      {/* Text hier, links-aligned */}
    </div>

    {/* Rechts: Visual (5 cols, bleeding edge) */}
    <div className="col-span-12 lg:col-span-5 relative">
      {/* Bild geht bis zum Rand! */}
    </div>
  </div>
</section>

// Variante C: Center-Burst (für Impact-Sections)
<section className="relative w-full flex items-center justify-center">
  <div className="w-full max-w-[2000px] px-4">
    {/* Sehr breiter Content, zentriert */}
  </div>
</section>
```

---

## Typografie-System

```css
/* FONT FAMILY */
--font-primary: 'Inter', -apple-system, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;

/* FLUID TYPE SCALE (vw-basiert für echte Responsiveness) */
/* Mobile → Desktop smooth scaling */

H1 (Hero):
  Mobile:  clamp(2.5rem, 8vw, 7rem)    /* 40px → 112px */
  Leading: 1.05
  Weight:  900 (Black)
  Tracking: -0.04em

H2 (Section):
  Mobile:  clamp(2rem, 5vw, 4rem)      /* 32px → 64px */
  Leading: 1.1
  Weight:  800
  Tracking: -0.03em

H3 (Subsection):
  Mobile:  clamp(1.5rem, 3vw, 2.5rem)  /* 24px → 40px */
  Leading: 1.2
  Weight:  700
  Tracking: -0.02em

Body Large:
  Mobile:  clamp(1.125rem, 1.5vw, 1.5rem)  /* 18px → 24px */
  Leading: 1.6
  Weight:  400

Body:
  Mobile:  clamp(1rem, 1.2vw, 1.25rem)     /* 16px → 20px */
  Leading: 1.7
  Weight:  400

Caption/Small:
  Mobile:  clamp(0.875rem, 1vw, 1rem)      /* 14px → 16px */
  Leading: 1.5
  Weight:  500
```

---

## Farb-System: "Neon-Tech-Dark"

```css
/* BACKGROUNDS */
--bg-primary: #0A0E27;        /* Sehr dunkles Blau */
--bg-elevated: #0F1629;       /* Cards/Elevated Surfaces */
--bg-surface: #141B33;        /* Subtle Surfaces */

/* BRAND GRADIENTS */
--gradient-primary: linear-gradient(135deg,
  #06B6D4 0%,    /* Cyan */
  #3B82F6 50%,   /* Blue */
  #8B5CF6 100%   /* Purple */
);

--gradient-glow: radial-gradient(circle at center,
  rgba(6, 182, 212, 0.15) 0%,
  rgba(59, 130, 246, 0.08) 50%,
  transparent 100%
);

/* TEXT */
--text-primary: #FFFFFF;
--text-secondary: #94A3B8;   /* Gray-400 */
--text-tertiary: #64748B;    /* Gray-500 */
--text-accent: #06B6D4;      /* Cyan */

/* BORDERS */
--border-subtle: rgba(255, 255, 255, 0.05);
--border-medium: rgba(255, 255, 255, 0.1);
--border-strong: rgba(255, 255, 255, 0.2);
--border-accent: rgba(6, 182, 212, 0.3);

/* SHADOWS & GLOWS */
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.4);
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.5);
--shadow-xl: 0 16px 64px rgba(0, 0, 0, 0.6);

--glow-cyan: 0 0 32px rgba(6, 182, 212, 0.3);
--glow-blue: 0 0 32px rgba(59, 130, 246, 0.3);
--glow-purple: 0 0 32px rgba(139, 92, 246, 0.3);
```

---

## Component-Patterns: "Premium-Tier"

### Glass Card (Glassmorphism):
```tsx
<div className="
  relative
  backdrop-blur-xl
  bg-white/[0.02]
  border border-white/10
  rounded-3xl
  p-8
  shadow-2xl
  hover:bg-white/[0.04]
  hover:border-white/20
  transition-all duration-500
">
  {/* Glow behind */}
  <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

  {/* Content */}
  <div className="relative z-10">
    ...
  </div>
</div>
```

### Floating Element (mit Depth):
```tsx
<div className="
  relative
  transform-gpu
  hover:-translate-y-2
  transition-transform duration-300
">
  {/* Shadow Layer 1 */}
  <div className="absolute -inset-2 bg-black/20 rounded-2xl blur-md" />

  {/* Shadow Layer 2 (bigger, softer) */}
  <div className="absolute -inset-6 bg-cyan-500/10 rounded-3xl blur-3xl" />

  {/* Main Content */}
  <div className="relative bg-[#0F1629] rounded-2xl p-6">
    ...
  </div>
</div>
```

### Tech Orb (Ambient Light):
```tsx
<div className="absolute top-20 right-0 w-[800px] h-[800px] pointer-events-none">
  <div className="
    w-full h-full
    bg-gradient-radial from-cyan-500/20 via-blue-500/10 to-transparent
    rounded-full
    blur-[120px]
    animate-pulse
  " style={{ animationDuration: '8s' }} />
</div>
```

---

# 🏗️ PHASE 3: NEUE SECTION-ARCHITEKTUR

---

## SECTION 1: HERO FULL-WIDTH (Edge-to-Edge Asymmetric)

### Konzept:
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ┌─────────────────────────┐    ╔═══════════════════════════╗  │
│  │ [Status Badge]          │    ║                           ║  │
│  │                         │    ║    ┌─────────────────┐    ║  │
│  │ DIGITALE LÖSUNGEN,      │    ║    │                 │    ║  │
│  │ DIE PERFORMEN           │    ║    │   HERO IMAGE    │    ║  │
│  │                         │    ║    │   (Glass Card)  │    ║  │
│  │ Subheadline mit Value   │    ║    │                 │    ║  │
│  │ Proposition (2-3 Zeilen)│    ║    │  [Floating      │    ║  │
│  │                         │    ║    │   Stats]        │    ║  │
│  │ [CTA Primary]           │    ║    │                 │    ║  │
│  │ [CTA Secondary]         │    ║    └─────────────────┘    ║  │
│  │                         │    ║                           ║  │
│  │ [Trust Badges x3]       │    ╚═══════════════════════════╝  │
│  └─────────────────────────┘         (Geht bis Edge →)        │
│   60% Width (max 800px)              40% Width                │
└─────────────────────────────────────────────────────────────────┘
     ↑                                      ↑
  Left-aligned Text              Right: Visual bleeding edge
```

### Layout-Specs:
```tsx
<section className="relative min-h-screen flex items-center overflow-hidden">
  {/* Full-Width Background Gradients */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#0A0E27] via-[#0F1629] to-[#0A0E27]" />

  {/* Ambient Tech Orbs */}
  <div className="absolute top-0 right-0 w-[1000px] h-[1000px]">
    <div className="w-full h-full bg-gradient-radial from-cyan-500/15 to-transparent blur-[150px] animate-pulse" />
  </div>

  {/* Grid Layout: 12 Columns */}
  <div className="relative z-10 w-full max-w-[2000px] mx-auto grid grid-cols-12 gap-0 items-center min-h-screen">

    {/* LEFT: Content (7 columns, left-padded) */}
    <div className="col-span-12 lg:col-span-7 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-32 py-20">
      <div className="max-w-[700px]"> {/* Text-Breite begrenzen */}
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-gray-300">Verfügbar für neue Projekte</span>
        </div>

        {/* H1 - Fluid Typography */}
        <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-black leading-[1.05] tracking-tight mb-6">
          <span className="block text-white">Digitale</span>
          <span className="block text-white">Lösungen,</span>
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            die performen
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-[clamp(1.125rem,1.5vw,1.5rem)] text-gray-300 leading-relaxed mb-10 max-w-[600px]">
          Next.js Webentwicklung und IT-Services für mittelständische Unternehmen.
          <span className="text-white font-semibold"> Performance-optimiert. Skalierbar. DSGVO-konform.</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a href="#kontakt" className="
            group inline-flex items-center justify-center gap-3
            px-8 py-4
            bg-gradient-to-r from-cyan-500 to-blue-600
            rounded-2xl
            font-bold text-base
            shadow-2xl shadow-cyan-500/30
            hover:shadow-cyan-500/50 hover:scale-105
            transition-all duration-300
          ">
            <span>Kostenlose Tech-Analyse</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a href="#leistungen" className="
            inline-flex items-center justify-center gap-3
            px-8 py-4
            bg-white/5 border border-white/10
            rounded-2xl
            font-semibold text-base
            hover:bg-white/10 hover:border-white/20
            transition-all duration-300
          ">
            <span>Leistungen ansehen</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-cyan-400" />
            <span className="text-sm text-gray-400">Antwort in &lt;2h</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-cyan-400" />
            <span className="text-sm text-gray-400">98+ Lighthouse Score</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-cyan-400" />
            <span className="text-sm text-gray-400">DSGVO-Ready</span>
          </div>
        </div>
      </div>
    </div>

    {/* RIGHT: Hero Visual (5 columns, bleeding edge) */}
    <div className="col-span-12 lg:col-span-5 relative h-full flex items-center">
      {/* Glass Card Container */}
      <div className="relative w-full h-[600px] lg:h-[700px]">
        {/* Glow Behind */}
        <div className="absolute -inset-8 bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-purple-500/30 rounded-[3rem] blur-[120px] opacity-70 animate-pulse" />

        {/* Glass Frame */}
        <div className="relative h-full p-4 rounded-3xl bg-white/[0.02] backdrop-blur-2xl border border-white/10 shadow-2xl">
          <div className="relative h-full rounded-2xl overflow-hidden">
            <img
              src="/hero-dashboard.webp"
              alt="..."
              className="w-full h-full object-cover"
            />
            {/* Color Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/15 mix-blend-overlay" />
          </div>
        </div>

        {/* Floating Stat Cards (outside glass) */}
        <div className="absolute -top-8 -left-8 ...">
          {/* Stats wie gehabt */}
        </div>
      </div>
    </div>

  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
    <div className="flex flex-col items-center gap-2 animate-bounce">
      <span className="text-xs text-gray-500 uppercase tracking-wider">Scroll</span>
      <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent" />
    </div>
  </div>
</section>
```

### Texte (Deutsch, B2B-fokussiert):

**H1 Varianten:**
```
Option 1 (aktuell):
"Digitale Lösungen, die performen"

Option 2:
"Software, die Ihr Business beschleunigt"

Option 3:
"Digitalisierung für den Mittelstand. Ohne Kompromisse."
```

**Subheadline:**
```
"Next.js Webentwicklung und IT-Services für mittelständische Unternehmen.
Performance-optimiert. Skalierbar. DSGVO-konform."

Alternative:
"Wir entwickeln maßgeschneiderte Web-Lösungen, die Ihre Prozesse automatisieren,
Ihre Kunden begeistern und messbar Ergebnisse liefern."
```

---

## BILD-PLATZHALTER 1: Hero Visual

```
BESCHREIBUNG:
Dashboard-Screenshot einer modernen SaaS-Anwendung mit Performance-Metriken

INHALT:
- Dark Mode UI (dunkelblau/anthrazit)
- Große Zahl "98" (Lighthouse Score) prominent
- Aufwärts-gerichtete Graphen (Erfolgs-Visualisierung)
- Cyan/Blaue Akzentfarben
- Glassmorphic Cards
- Clean, modern, minimalistisch

ASPECT RATIO:  4:5 (vertikal)
DESKTOP SIZE:  1200×1500px
MOBILE SIZE:   600×750px
FORMAT:        WebP (oder PNG → WebP konvertieren)

CANVA/KI PROMPT:
"Modern dark mode SaaS dashboard UI showing performance analytics,
large '98' score display, upward trending graphs in cyan and blue colors,
glassmorphism cards, clean minimalist design, professional tech aesthetic,
dark blue background (#0A0E27), 4:5 aspect ratio, high quality"

MIDJOURNEY PROMPT:
"sleek dark mode web dashboard, performance metrics, 98 lighthouse score prominently
displayed, cyan and blue neon accents, glassmorphism UI elements, upward trending
graphs, minimalist professional design, tech aesthetic, dark navy background,
ultra detailed, 4k quality --ar 4:5 --style raw --v 6"
```

---

## SECTION 2: SERVICES INTERACTIVE (Horizontal Switcher)

### Konzept: NICHT 3 statische Cards, sondern ein interaktiver Service-Switcher

```
┌──────────────────────────────────────────────────────────────┐
│                  [SERVICES - Header]                         │
│                                                              │
│  ┌───────────┬───────────┬───────────┐                      │
│  │ Tab: Web  │ Tab: IT   │ Tab: Auto │  ← Tabs/Pills       │
│  └───────────┴───────────┴───────────┘                      │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  ╔═══════════════════╗  ┌────────────────────────┐  │    │
│  │  ║                   ║  │ Webentwicklung         │  │    │
│  │  ║   SERVICE IMAGE   ║  │                        │  │    │
│  │  ║   (aktiver Tab)   ║  │ • Next.js Full-Stack  │  │    │
│  │  ║                   ║  │ • Performance-First   │  │    │
│  │  ╚═══════════════════╝  │ • DSGVO-konform       │  │    │
│  │                         │                        │  │    │
│  │                         │ [CTA: Mehr erfahren]  │  │    │
│  │                         └────────────────────────┘  │    │
│  └─────────────────────────────────────────────────────┘    │
│                    ↑ Wechselt beim Tab-Click                │
└──────────────────────────────────────────────────────────────┘
```

### Layout-Implementierung:

```tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "webdev",
    tab: "Webentwicklung",
    title: "Next.js Full-Stack Development",
    description: "Maßgeschneiderte Webanwendungen, die Ihre Kunden begeistern und Ihr Business skalieren.",
    features: [
      "Performance-First: 98+ Lighthouse Score garantiert",
      "SEO-optimiert für Google-Rankings",
      "DSGVO-konform & sicher",
      "Wartung & Support inklusive"
    ],
    image: "/services/webdev.webp",
    cta: "Web-Projekt anfragen"
  },
  {
    id: "it",
    tab: "IT-Services",
    title: "Professionelle IT-Betreuung",
    description: "Zuverlässige IT-Infrastruktur, damit Sie sich auf Ihr Kerngeschäft konzentrieren können.",
    features: [
      "Proaktive Wartung & Monitoring",
      "Cloud-Migration & Setup",
      "Security-Audits",
      "24/7 Support-Hotline"
    ],
    image: "/services/it-services.webp",
    cta: "IT-Beratung buchen"
  },
  {
    id: "automation",
    tab: "Automatisierung",
    title: "Prozess-Automatisierung",
    description: "Sparen Sie Zeit und Kosten durch intelligente Automatisierung Ihrer Workflows.",
    features: [
      "Workflow-Analyse & Optimierung",
      "API-Integrationen",
      "Daten-Synchronisation",
      "Custom Tools & Scripts"
    ],
    image: "/services/automation.webp",
    cta: "Automatisierung starten"
  }
];

export function ServicesInteractive() {
  const [activeTab, setActiveTab] = useState(0);
  const currentService = services[activeTab];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" />

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-8 xl:px-16 2xl:px-24">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-wider text-gray-400">
            Full-Service
          </span>

          <h2 className="text-[clamp(2rem,5vw,4rem)] font-black leading-tight tracking-tight mb-6">
            <span className="text-white">Was wir für Sie </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">entwickeln</span>
          </h2>

          <p className="text-[clamp(1.125rem,1.5vw,1.5rem)] text-gray-400 leading-relaxed">
            Von der Website bis zur kompletten IT-Infrastruktur – alles aus einer Hand.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center gap-4 mb-12">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(index)}
              className={`
                relative px-8 py-3 rounded-full font-semibold text-base
                transition-all duration-300
                ${activeTab === index
                  ? 'bg-white/10 text-white border-2 border-cyan-500/50'
                  : 'bg-white/5 text-gray-400 border-2 border-white/10 hover:bg-white/8 hover:text-white'
                }
              `}
            >
              {service.tab}

              {/* Active Indicator */}
              {activeTab === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Content Switcher (Animated) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
          >
            {/* Left: Image */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl" />

              <div className="relative h-full p-3 rounded-3xl bg-white/[0.02] backdrop-blur border border-white/10">
                <div className="relative h-full rounded-2xl overflow-hidden">
                  <img
                    src={currentService.image}
                    alt={currentService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/15 mix-blend-overlay" />
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                {currentService.title}
              </h3>

              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                {currentService.description}
              </p>

              <ul className="space-y-3 mb-8">
                {currentService.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-base text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#kontakt" className="
                inline-flex items-center gap-2
                px-6 py-3
                bg-gradient-to-r from-cyan-500 to-blue-600
                rounded-xl
                font-semibold text-base
                hover:scale-105
                transition-transform duration-300
              ">
                {currentService.cta}
                <svg className="w-5 h-5" />
              </a>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
```

---

## BILD-PLATZHALTER 2-4: Service Images

### WEBDEV IMAGE:
```
BESCHREIBUNG:
Modern gestaltete Website auf MacBook, Code-Editor im Hintergrund

INHALT:
- MacBook Pro Display
- Darauf: cleane, moderne Website (E-Commerce oder Corporate)
- Im Hintergrund dezent: VS Code mit Next.js/React Code
- Cyan/Blaue Akzentfarben
- Professional Desktop-Setup

ASPECT RATIO:  4:3 (horizontal)
SIZE:          1600×1200px (Desktop), 800×600px (Mobile)
FORMAT:        WebP

KI PROMPT:
"Professional web development workspace, MacBook Pro displaying modern e-commerce
website with clean UI, VS Code editor in background showing Next.js code,
cyan and blue accent colors, minimalist desk setup, professional lighting,
tech aesthetic, 4k quality --ar 4:3"
```

### IT-SERVICES IMAGE:
```
BESCHREIBUNG:
Server-Rack / Cloud-Infrastruktur Visualisierung

INHALT:
- Moderne Server-Visualisierung (nicht Foto, sondern 3D/Illustration)
- Cloud-Icons
- Netzwerk-Verbindungen (leuchtende Linien)
- Monitoring-Dashboards im Hintergrund
- Futuristisch aber professionell

ASPECT RATIO:  4:3
SIZE:          1600×1200px
FORMAT:        WebP

KI PROMPT:
"Modern cloud infrastructure visualization, 3D server illustration,
glowing network connections, monitoring dashboards, professional tech aesthetic,
cyan and blue neon lights, dark background, isometric view, high detail --ar 4:3"
```

### AUTOMATION IMAGE:
```
BESCHREIBUNG:
Workflow-Automatisierung Diagramm mit Verbindungen

INHALT:
- Flowchart/Workflow-Visualisierung
- App-Icons verbunden durch animierte Linien
- Zentral: Automatisierungs-Symbol
- Modern, clean, tech-forward
- Zeigt Integration verschiedener Tools

ASPECT RATIO:  4:3
SIZE:          1600×1200px
FORMAT:        WebP

KI PROMPT:
"Workflow automation diagram, app icons connected by glowing lines,
central automation hub, modern UI elements, glassmorphism effects,
cyan and blue colors, dark background, clean professional design,
tech illustration style --ar 4:3"
```

---

## SECTION 3: PROCESS JOURNEY (Horizontal Timeline)

### Konzept: Horizontaler Scrolling-Prozess (nicht vertikal!)

```
┌────────────────────────────────────────────────────────────────┐
│              [PROZESS - Header]                                │
│                                                                │
│  ← Scroll →  Horizontale Timeline                             │
│                                                                │
│  ┌──────┐   ┌──────┐   ┌──────┐   ┌──────┐   ┌──────┐        │
│  │  1   │───│  2   │───│  3   │───│  4   │───│  5   │        │
│  │Strat-│   │ Plan │   │Build │   │Test  │   │Launch│        │
│  │egie  │   │      │   │      │   │      │   │      │        │
│  └──────┘   └──────┘   └──────┘   └──────┘   └──────┘        │
│                                                                │
│     ↓ Details erscheinen beim Hover/Scroll                    │
└────────────────────────────────────────────────────────────────┘
```

### Implementierung:

```tsx
const processSteps = [
  {
    number: "01",
    title: "Strategie & Analyse",
    description: "Wir analysieren Ihre Anforderungen, definieren Ziele und erstellen eine klare Roadmap.",
    duration: "1-2 Wochen",
    deliverables: ["Anforderungsdokument", "Wireframes", "Projektplan"]
  },
  {
    number: "02",
    title: "Konzeption & Design",
    description: "UI/UX Design, technische Architektur und Datenbank-Modellierung.",
    duration: "2-3 Wochen",
    deliverables: ["Design-System", "Prototyp", "Tech-Stack-Spezifikation"]
  },
  {
    number: "03",
    title: "Entwicklung",
    description: "Agile Entwicklung in 2-Wochen-Sprints mit regelmäßigen Updates.",
    duration: "6-12 Wochen",
    deliverables: ["Weekly Demos", "Code-Reviews", "Progress-Reports"]
  },
  {
    number: "04",
    title: "Testing & QA",
    description: "Ausführliche Tests auf allen Devices, Performance-Optimierung, Security-Audits.",
    duration: "1-2 Wochen",
    deliverables: ["Test-Reports", "Performance-Scores", "Bug-Fixes"]
  },
  {
    number: "05",
    title: "Launch & Support",
    description: "Deployment, Monitoring-Setup und laufende Betreuung Ihres Projekts.",
    duration: "Ongoing",
    deliverables: ["Live-Website", "Dokumentation", "Wartungs-Support"]
  }
];

export function ProcessJourney() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-8 xl:px-16 2xl:px-24">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-wider text-gray-400">
            Unser Prozess
          </span>

          <h2 className="text-[clamp(2rem,5vw,4rem)] font-black leading-tight mb-6">
            <span className="text-white">Vom Briefing zum </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Launch</span>
          </h2>

          <p className="text-[clamp(1.125rem,1.5vw,1.5rem)] text-gray-400">
            Transparenter, agiler Prozess – Sie sind immer im Loop.
          </p>
        </div>

        {/* Horizontal Scrolling Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Number Circle */}
                <div className="relative mx-auto mb-6 w-16 h-16 flex items-center justify-center">
                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Circle */}
                  <div className="relative w-16 h-16 rounded-full bg-white/5 border-2 border-white/20 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                    <span className="text-2xl font-black bg-gradient-to-br from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div className="
                  relative p-6 rounded-2xl
                  bg-white/[0.02] border border-white/10
                  hover:bg-white/[0.05] hover:border-white/20
                  transition-all duration-300
                  min-h-[300px]
                ">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400">
                      {step.duration}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Deliverables:</span>
                    <ul className="mt-2 space-y-1">
                      {step.deliverables.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-cyan-400" />
                          <span className="text-xs text-gray-400">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA at End */}
        <div className="mt-16 text-center">
          <a href="#kontakt" className="
            inline-flex items-center gap-3
            px-8 py-4
            bg-gradient-to-r from-cyan-500 to-blue-600
            rounded-2xl
            font-bold text-base
            hover:scale-105
            transition-transform duration-300
          ">
            <span>Nächster Schritt: Tech-Call buchen</span>
            <svg className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
```

---

*[FORTSETZUNG IM NÄCHSTEN PART - zu lang für eine Message]*

**Was als Nächstes kommt:**
- Section 4: Case Studies (Demo-Projekte)
- Section 5: Trust & Expertise
- Section 6: CTA Immersive
- Komplette Bild-Platzhalter-Liste
- Implementierungs-Checkliste

Soll ich fortfahren? 🚀
