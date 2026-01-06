# 🚀 Premium Website - Modern, Clean, DSGVO-Konform

Eine hochwertige, moderne Website, erstellt mit **Next.js 15**, **React**, **Tailwind CSS**, **Framer Motion** und **shadcn/ui**.

Vollständig **DSGVO/GDPR-konform** mit Cookie-Consent-System und Privacy-First Analytics.

---

## ✨ Features

### 🎨 **Modern Design System**
- **Premium Farbpalette** mit Electric Blue (#0066FF) als Primary Color
- **Fluid Typography** - Responsive Schriftgrößen ohne Media Queries
- **Inter Variable Font** - Modern, professionell, performant
- **Glass Morphism**, Gradient Text, Glow Effects
- **Custom Scrollbar** - Minimalistisch & modern
- **Dark Mode Ready** - Vorbereitet für Theme-Switching

### 🎬 **Animations & Interactions**
- **Framer Motion** Integration mit vordefinierten Presets
- **Smooth Easing Functions** (Apple-inspiriert)
- **Scroll Animations** - FadeIn, SlideIn, ScaleIn, BlurIn
- **Stagger Animations** für Listen & Grids
- **Micro-Interactions** - Hover, Tap, Float Effects

### 🔒 **DSGVO/GDPR Compliance**
- ✅ **Cookie-Consent-Banner** mit granularer Kontrolle
- ✅ **4 Cookie-Kategorien**: Notwendig, Funktional, Analyse, Marketing
- ✅ **localStorage-basiert** (kein Backend erforderlich)
- ✅ **Legal Pages**: Datenschutz, Impressum, Cookie-Richtlinie
- ✅ **Privacy-First Analytics** (Plausible - optional)

### ⚡ **Performance & SEO**
- **Next.js 15** App Router
- **Server Components** by default
- **Optimized Metadata** für SEO
- **Open Graph & Twitter Cards**
- **Preconnect** zu externen Ressourcen
- **Font Optimization** mit next/font

---

## 📂 Projektstruktur

```
premium-website/
├── app/
│   ├── layout.tsx              # Root Layout (SEO, Fonts, GDPR)
│   ├── page.tsx                # Homepage (Hero + Features)
│   ├── globals.css             # Global Styles + Custom Utilities
│   ├── privacy/page.tsx        # Datenschutzerklärung
│   ├── imprint/page.tsx        # Impressum
│   └── cookies/page.tsx        # Cookie-Richtlinie
│
├── components/
│   ├── layout/
│   │   └── CookieConsent.tsx   # GDPR Cookie Banner
│   ├── analytics/
│   │   └── PlausibleAnalytics.tsx  # Privacy-First Analytics
│   └── ui/                     # shadcn/ui Komponenten
│
├── lib/
│   ├── animations.ts           # Framer Motion Presets
│   ├── consent.ts              # GDPR Consent Management
│   └── utils.ts                # Utility Functions (cn)
│
├── hooks/
│   └── useConsent.ts           # Cookie Consent Hook
│
├── tailwind.config.ts          # Design System Config
└── next.config.js              # Next.js Config
```

---

## 🚀 Getting Started

### **1. Installation**

```bash
# Navigate to project folder
cd premium-website

# Install dependencies (already installed)
npm install

# Start development server
npm run dev
```

Die Website ist dann verfügbar unter: **http://localhost:3000**

---

### **2. Personalisierung**

#### **a) Firmeninformationen anpassen**

Datei: `app/layout.tsx`

```tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"), // 👈 Deine Domain
  title: {
    default: "Your Company | Premium Web Solutions", // 👈 Dein Firmenname
    template: "%s | Your Company",
  },
  description: "...", // 👈 Deine Beschreibung
  // ...
};
```

#### **b) Legal Pages ausfüllen**

**Impressum** (`app/imprint/page.tsx`):
- Firmenname, Adresse, Kontaktdaten
- USt-IdNr.
- Berufsbezeichnung

**Datenschutzerklärung** (`app/privacy/page.tsx`):
- Verantwortliche Stelle
- Kontaktdaten
- Hosting-Anbieter

**Cookie-Richtlinie** (`app/cookies/page.tsx`):
- Bereits ausgefüllt, ggf. anpassen

#### **c) Farben anpassen**

Datei: `app/globals.css`

```css
:root {
  --primary: 217 100% 50%;  /* #0066FF - Electric Blue */
  --accent: 262 83% 58%;    /* #8B5CF6 - Purple */
  /* ... */
}
```

**Farbgenerator**: [uicolors.app](https://uicolors.app)

#### **d) Analytics aktivieren (Optional)**

1. **Plausible Account erstellen**: [plausible.io](https://plausible.io)
2. Datei `app/layout.tsx` bearbeiten:

```tsx
{/* Uncomment this line */}
<PlausibleAnalytics domain="your-domain.com" enabled={true} />
```

---

## 🎨 Design System

### **Farben**

| Farbe | Light Mode | Dark Mode | Verwendung |
|-------|-----------|-----------|------------|
| `background` | #FAFAFA | #0A0A0A | Hintergrund |
| `foreground` | #0A0A0A | #FAFAFA | Text |
| `primary` | #0066FF | #4D94FF | CTAs, Links |
| `accent` | #8B5CF6 | #A78BFA | Highlights |
| `muted` | #F4F4F5 | #1F1F1F | Subtle BG |
| `border` | #E4E4E7 | #27272A | Borders |

### **Typography**

```tsx
// Headlines
<h1 className="text-5xl font-bold">Headline</h1>

// Body Text
<p className="text-base text-muted-foreground">Text</p>

// Gradient Text
<span className="gradient-text">Premium</span>
```

### **Spacing**

- **Section Padding**: `py-24 md:py-32 lg:py-40`
- **Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Cards**: `p-6 rounded-2xl`

### **Animationen**

```tsx
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

<motion.div
  variants={fadeInUp}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
>
  Content
</motion.div>
```

**Verfügbare Presets**:
- `fadeInUp`, `fadeInDown`, `fadeInLeft`, `fadeInRight`
- `scaleIn`, `blurIn`, `slideInBottom`
- `staggerContainer` + `staggerItem`
- `cardHover`, `buttonTap`

---

## 📱 DSGVO / Cookie Consent

### **Cookie-Banner anpassen**

Datei: `components/layout/CookieConsent.tsx`

Das Banner erscheint automatisch beim ersten Besuch. User können wählen:
- ✅ **Alle akzeptieren**
- ⚙️ **Einstellungen** (granular)
- ❌ **Nur notwendige**

### **Cookie-Kategorien**

| Kategorie | Beschreibung | Erforderlich? |
|-----------|-------------|---------------|
| `necessary` | Grundfunktionen | Ja (immer aktiv) |
| `functional` | Theme, Sprache | Nein |
| `analytics` | Plausible Analytics | Nein |
| `marketing` | Tracking, Ads | Nein |

### **Consent im Code verwenden**

```tsx
import { useConsent } from "@/hooks/useConsent";

const { isEnabled, acceptAll, rejectAll } = useConsent();

if (isEnabled("analytics")) {
  // Load analytics script
}
```

### **Script mit Consent laden**

```tsx
import { loadScript } from "@/lib/consent";

loadScript(
  "https://example.com/script.js",
  "marketing" // Category
);
```

---

## 🛠️ Tech Stack

| Technologie | Version | Verwendung |
|------------|---------|------------|
| **Next.js** | 15.x | Framework, Routing, SSR |
| **React** | 19.x | UI Library |
| **TypeScript** | 5.x | Type Safety |
| **Tailwind CSS** | 4.x | Styling |
| **Framer Motion** | 11.x | Animations |
| **shadcn/ui** | Latest | UI Components |
| **Lucide Icons** | Latest | Icons |

---

## 📦 Verfügbare Scripts

```bash
# Development Server
npm run dev

# Production Build
npm run build

# Start Production Server
npm run start

# Linting
npm run lint

# Type Check
npm run type-check
```

---

## 🚢 Deployment

### **Vercel (Empfohlen)**

1. Push Code zu GitHub
2. Import in Vercel: [vercel.com/new](https://vercel.com/new)
3. Deploy mit einem Klick

### **Andere Plattformen**

- **Netlify**: `npm run build` → Deploy `out/` Ordner
- **Cloudflare Pages**: Gleicher Prozess
- **Eigener Server**: `npm run build && npm run start`

---

## 📝 Nächste Schritte

### **Phase 1: Content**
- [ ] Texte anpassen (Hero, About, Services)
- [ ] Bilder hinzufügen (`/public/images/`)
- [ ] Logo & Favicon erstellen
- [ ] OG Image für Social Media (`1200x630px`)

### **Phase 2: Sections**
- [ ] About Section erstellen
- [ ] Services Section
- [ ] Projekte/Portfolio
- [ ] Kontaktformular
- [ ] Navigation/Header

### **Phase 3: Advanced**
- [ ] Contact Form Backend (z.B. Resend, Nodemailer)
- [ ] CMS Integration (z.B. Sanity, Contentful)
- [ ] Blog Section
- [ ] Animationen verfeinern
- [ ] Performance Optimierung

---

## 🎯 Design-Prinzipien

Diese Website folgt modernen Design-Prinzipien:

1. **Viel Weißraum** - Atmet, nicht überladen
2. **Klare Hierarchie** - Typografie führt den Blick
3. **Subtle Interactions** - Smooth, nicht aufdringlich
4. **Progressive Disclosure** - Information on demand
5. **Performance First** - Schnell > Fancy
6. **Accessibility** - Keyboard Navigation, Focus States
7. **Mobile First** - Responsive by design

---

## 🔗 Nützliche Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com)
- [DSGVO Guide](https://dsgvo-gesetz.de)
- [Plausible Analytics](https://plausible.io)

---

## 📄 Lizenz

Dieses Projekt ist für kommerzielle Nutzung freigegeben.

---

## 💬 Support

Bei Fragen oder Problemen:
- Issues auf GitHub öffnen
- Dokumentation lesen
- Community fragen

---

**Viel Erfolg mit deiner Premium Website! 🚀**
