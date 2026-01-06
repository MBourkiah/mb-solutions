# MB-Solutions Homepage - VOLLSTÄNDIGES BACKUP
**Erstellt am:** 2025-12-02
**Status:** Komplette Sicherung vor Redesign

---

## 📋 INHALTSVERZEICHNIS
1. [Aktuelle Struktur](#aktuelle-struktur)
2. [Hero Section](#hero-section)
3. [Services Section](#services-section)
4. [About Section](#about-section)
5. [USPs Section](#usps-section)
6. [Process Section](#process-section)
7. [CTA Section](#cta-section)
8. [Design-Elemente](#design-elemente)
9. [Bilder & Assets](#bilder-assets)

---

## 🎯 AKTUELLE STRUKTUR

### Page Layout (app/page.tsx)
```typescript
Komponenten-Hierarchie:
1. HeroModern
2. ServicesModern
3. AboutModern
4. USPsModern
5. ProcessModern
6. CTAModern

Background: #0A0E27 (Dark Navy)
Ambient Gradients: Cyan/Blue (sehr subtil, opacity: 30%)
Grid Pattern: 64×64px radial dots
```

---

## 🦸 HERO SECTION

### Layout & Inhalt
**Struktur:** Split-Layout (50/50)
- **Links:** Content Block
- **Rechts:** Hero Visual mit Floating Cards

### Texte
**Badge:** "Verfügbar für neue Projekte" (grüner Puls-Dot)

**H1 (Massive Typography):**
```
Digitale
Lösungen,
die performen
```
- Font-Size: 6xl - 9xl (responsive)
- Letter-Spacing: -0.04em
- Gradient auf "die performen": Cyan → Blue → Purple

**Subheadline:**
```
Next.js Webentwicklung und IT-Services für mittelständische Unternehmen.
Performance-optimiert. Skalierbar. DSGVO-konform.
```
- Font-Size: xl - 3xl
- Color: Gray-300 / White (accent)

### CTAs
1. **Primary CTA:** "Kostenlose Tech-Analyse"
   - Gradient: Cyan → Blue
   - Icon: Zap
   - Shadow: cyan-500/30

2. **Secondary CTA:** "Leistungen ansehen"
   - BG: white/5
   - Border: white/10

### Trust Signals
- Antwort in <2h (CheckCircle2, cyan-400)
- 98+ Lighthouse Score
- DSGVO-Ready

### Visual (Rechts)
**Main Image:**
- Aspect Ratio: 4:5 (Portrait)
- Max-Width: 650px
- Border: 2px white/20
- Glow: -inset-16, blur-100px, animated pulse
- Datei: `/placeholder-hero.webp`
- Overlay: Cyan/Blue gradient

**4 Floating Stat Cards:**
1. Top-Left: "5+ Jahre Erfahrung" (Award, Cyan)
2. Bottom-Left: "98/100 Performance" (TrendingUp, Green)
3. Top-Right: "50+ Projekte" (Rocket, Purple)
4. Bottom-Right: "100% Zufriedenheit" (5 Stars, Yellow)

---

## 💼 SERVICES SECTION

### Header
**Badge:** "Unsere Leistungen" (Code2 Icon)
**H2:** "Full-Service Technologie"
**Description:** "Von der ersten Zeile Code bis zum laufenden Betrieb..."

### Service Cards (3 Columns)
**Grid:** lg:grid-cols-3, gap-10-12

#### 1. Webentwicklung
- **Icon:** Code2
- **Subtitle:** "Next.js & React"
- **Color:** Cyan
- **Image:** `/placeholder-service-web.webp`
- **Features:**
  - Next.js 14+ mit App Router
  - SEO-optimiert & Performance-First
  - Responsive Design (Mobile-First)
  - API-Integration & Backend
- **CTA:** "Beratung anfragen" → #kontakt

#### 2. IT-Services
- **Icon:** Server
- **Subtitle:** "Infrastructure & Support"
- **Color:** Blue
- **Image:** `/placeholder-service-infrastructure.webp`
- **Features:**
  - Cloud-Infrastruktur (AWS, Vercel)
  - 24/7 System-Monitoring
  - Automatisierte Backup-Strategien
  - Security Audits & Updates

#### 3. Digitalisierung
- **Icon:** Rocket
- **Subtitle:** "Automation & Integration"
- **Color:** Purple
- **Image:** `/placeholder-service-automation.webp`
- **Features:**
  - Workflow-Automatisierung
  - Custom API-Entwicklung
  - Datenbank-Design & Optimierung
  - Tool-Integrationen (CRM, ERP)

### Card Design
- **Aspect Ratio (Image):** 16:10
- **Border:** white/10, hover: white/20
- **BG:** white/[0.03], hover: white/[0.05]
- **Rounded:** 3xl
- **Hover Effect:** y: -8px, glow effect
- **Transition:** 500ms

---

## 👤 ABOUT SECTION

### Layout
**Grid:** 2 Columns (lg:grid-cols-2)
- **Links:** Content
- **Rechts:** Image mit Floating Badge

### Texte
**Badge:** "Über MB-Solutions" (Award Icon)

**H2:** "Technische Exzellenz für den Mittelstand"

**Paragraphen (3):**
1. "Wir sind spezialisiert auf moderne Webentwicklung... Performance, Skalierbarkeit und Zuverlässigkeit."
2. "Mit Next.js, React und TypeScript... persönlicher Service, transparente Kommunikation..."
3. "Von der ersten Codezeile bis zum produktiven Betrieb..."

### Stats Grid (4 Cards)
1. **98+ Lighthouse Score** (Target, Cyan)
2. **99.9% Uptime SLA** (TrendingUp, Blue)
3. **<2h Response Zeit** (Users, Green)
4. **100% DSGVO-konform** (Award, Purple)

### Visual (Rechts)
- **Image:** `/placeholder-about.webp`
- **Aspect Ratio:** 4:5
- **Max-Width:** 600px
- **Floating Badge:** "100% DSGVO-konform"
  - Position: Bottom-Right (-8, -8)
  - Animated: y-float
  - Gradient Text: Cyan → Blue

---

## ⚡ USPs SECTION

### Header
**Badge:** "Warum MB-Solutions?" (Zap Icon)
**H2:** "Technologie, die überzeugt"
**Description:** "Enterprise-Level Qualität für den Mittelstand..."

### USP Cards (8 Cards)
**Grid:** sm:grid-cols-2, lg:grid-cols-4

1. **Performance-First** (Zap, Cyan)
   - "98+ Lighthouse Score als Standard..."

2. **Antwort in <2h** (Clock, Blue)
   - "Reaktionszeit unter 2 Stunden"

3. **DSGVO-konform** (Shield, Green)
   - "100% deutsche Server..."

4. **Enterprise Security** (Lock, Purple)
   - "Bank-Level Sicherheit..."

5. **99.9% Uptime** (Server, Orange)
   - "Hochverfügbare Infrastruktur..."

6. **Persönlicher Support** (Headphones, Pink)
   - "Ein fester Ansprechpartner..."

7. **Skalierbare Architektur** (Rocket, Indigo)
   - "Von 100 auf 100k Nutzer"

8. **Transparente Dokumentation** (FileCheck, Emerald)
   - "Vollständige Projektdokumentation..."

### Card Design
- **Rounded:** 3xl
- **BG:** white/[0.02], hover: white/[0.04]
- **Border:** white/10, hover: white/20
- **Icon Container:** 16×16, rounded-2xl
- **Hover:** y: -8px, glow effect

---

## 🔄 PROCESS SECTION

### Header
**Badge:** "Unser Prozess" (TrendingUp Icon)
**H2:** "Von der Idee zum Launch"
**Description:** "Strukturiert, transparent und effizient."

### Process Steps (4 Steps, Vertical Timeline)

#### 01 - Technische Analyse
- **Icon:** Target
- **Duration:** 1-2 Tage
- **Text:** "Im kostenlosen Erstgespräch analysieren wir Ihre Anforderungen..."

#### 02 - Konzept & Planung
- **Icon:** FileCheck
- **Duration:** 3-5 Tage
- **Text:** "Detaillierte System-Architektur, Tech-Stack-Definition..."

#### 03 - Development & Testing
- **Icon:** Code2
- **Duration:** 2-8 Wochen
- **Text:** "Agile, sprint-basierte Entwicklung..."

#### 04 - Launch & Support
- **Icon:** Rocket
- **Duration:** Ongoing
- **Text:** "Production Deployment auf Enterprise-Infrastruktur..."

### Design
- **Layout:** Alternierend (Links-Rechts)
- **Number:** 8xl-9xl, white/[0.03], massive
- **Connecting Lines:** Vertical, white/10 → transparent
- **Spacing:** space-y-20 (md: 28)

---

## 📞 CTA SECTION

### Layout
**Grid:** 2 Columns (lg:grid-cols-2)

### Texte
**Badge:** "Verfügbar für neue Projekte" (Puls-Dot, Cyan)

**H2:**
```
Bereit für den
nächsten technologischen
Schritt?
```
- "Schritt?" in Gradient: Cyan → Blue

**Subheadline:**
```
Lassen Sie uns über Ihr Projekt sprechen. Kostenlose Erstberatung,
keine Verpflichtungen, nur ehrliche technische Expertise.
```

### CTAs
1. **Primary:** "Tech-Call buchen" (Calendar Icon)
   - Link: /contact
   - Gradient BG: Cyan → Blue

2. **Secondary:** "E-Mail schreiben" (MessageSquare)
   - Link: mailto:info@mb-solutions.biz
   - BG: white/[0.03]

### Trust Signals (Bottom)
- Antwort in <2h
- Kostenlose Erstberatung
- Keine Verpflichtung

### Visual (Rechts)
- **Image:** `/placeholder-cta.webp`
- **Aspect Ratio:** 4:5
- **Floating Badge:** "<2h Response Zeit"
  - Position: Top-Right
  - Animated: y-float

---

## 🎨 DESIGN-ELEMENTE

### Farben
```css
Primary BG: #0A0E27 (Dark Navy)
Secondary BG: #0F1629 (Slightly Lighter)
Accent Cyan: #06B6D4
Accent Blue: #3B82F6
Accent Purple: #8B5CF6
Text White: #FFFFFF
Text Gray: #D1D5DB (gray-300)
Text Light Gray: #9CA3AF (gray-400)
```

### Gradients
```css
Primary Gradient: from-cyan-500 → via-blue-500 → to-blue-600
Hero Gradient: from-cyan-500 → to-blue-500 → to-purple-500
Card Hover: from-cyan-500/20 → via-blue-500/20 → to-purple-500/20
```

### Borders
```css
Default: border-white/10
Hover: border-white/20
Strong: border-white/30
Card Borders: 1-2px, rounded-2xl/3xl
```

### Shadows
```css
Default: shadow-xl
Hover: shadow-2xl
Glow: shadow-cyan-500/30
Hover Glow: shadow-cyan-500/50
Blur Effects: blur-[80px] - blur-[150px]
```

### Typography
```css
H1: text-6xl → 9xl, font-black, letter-spacing: -0.04em
H2: text-5xl → 8xl, font-black, letter-spacing: -0.03em
H3: text-3xl → 4xl, font-black
Body Large: text-xl → 3xl, font-light
Body: text-lg → xl, font-light
Small: text-sm → base, font-medium
```

### Spacing
```css
Section Padding: py-20 → py-36 (responsive)
Horizontal Padding: px-8 → px-48 (responsive)
Gap (Grid): gap-8 → gap-24
Whitespace (MB): mb-8 → mb-20
```

### Animations
```css
Initial Opacity: 0
Animate Opacity: 1
Y-Movement: -20 → 0, 20 → 0, 40 → 0
Duration: 0.6s → 1.2s
Delay: Staggered 0.1s - 0.3s
Hover Y: -8px
Float Animation: y: [0, -10/20, 0], duration: 3-8s, infinite
```

---

## 🖼️ BILDER & ASSETS

### Aktuelle Bild-Platzhalter
1. `/placeholder-hero.webp` - Hero Visual (4:5, 1200×1500px)
2. `/placeholder-service-web.webp` - Webentwicklung (16:10)
3. `/placeholder-service-infrastructure.webp` - IT-Services (16:10)
4. `/placeholder-service-automation.webp` - Digitalisierung (16:10)
5. `/placeholder-about.webp` - Über uns (4:5)
6. `/placeholder-cta.webp` - CTA Section (4:5)

### Bildstil
- **Format:** WebP
- **Stil:** Modern, Tech-fokussiert
- **Farben:** Dark Navy/Cyan/Blue Palette
- **Overlays:** Gradient Overlays (cyan/blue, 10-15% opacity)
- **Borders:** Rounded-3xl, border: white/10-20
- **Glow Effects:** Ambient blur behind images

---

## ✅ BACKUP COMPLETE
Alle Inhalte, Texte, Layouts und Design-Elemente wurden gesichert.
Stand: 2025-12-02
