# MB-Solutions - Bildkonzept & KI-Prompts
**Teil 4 des Enterprise Redesigns**
**Erstellt:** 2025-12-02

---

# 📸 TEIL 4: BILDKONZEPT & VISUELLE SPRACHE

## Visuelle Markenstrategie

### Brand Photography Style:
- **Mood:** Dark, modern, tech-focused
- **Colors:** Navy blue base with cyan/blue accents
- **Lighting:** Ambient, moody, RGB LED accents
- **Composition:** Clean, professional, not sterile
- **Authenticity:** Real setups > Stock photos

### Bildkategorien:
1. **Tech Workspace** - Developer setups, modern offices
2. **Abstract Tech** - Data viz, networks, futuristic UI
3. **Product Screenshots** - Real code, dashboards, websites
4. **People** - Founder portrait, team photos, testimonials
5. **UI Elements** - Dashboard mockups, interface close-ups

---

# 🖼️ SECTION-BY-SECTION BILDPROMPTS

## 1. HERO SECTION

### Hauptbild: Tech Workspace Hero Shot

**Verwendungszweck:** Hero Visual rechts (Portrait 4:5)
**Größe:** 1200×1500px, WebP, Quality 95

**Midjourney/DALL-E Prompt:**
```
Professional tech workspace photography, modern developer desk setup
viewed from 45-degree angle, MacBook Pro with Next.js code visible on
display, wireless mechanical keyboard, magic mouse, AirPods Pro on desk,
minimalist desk lamp with warm light, large monitor in background showing
React component tree, dark wooden desk surface, concrete wall background,
ambient blue and cyan LED strip lighting creating rim light effect,
coffee mug with steam, small succulent plant, very shallow depth of field,
Sony A7IV quality, f/1.4 aperture, professional color grading with teal
and orange tones, moody atmosphere, 4:5 vertical portrait composition,
ultra sharp focus on keyboard area, cinematic lighting, 8k resolution,
photorealistic, hyper detailed --ar 4:5 --v 6 --style raw
```

**Alternative Prompt (abstrakter):**
```
Futuristic developer workspace, holographic code interface floating above
sleek desk, transparent UI elements with cyan and blue glow, dark navy
background, particle effects, depth of field, sci-fi aesthetic meets
professional office, modern minimalist setup, ambient occlusion, ray
tracing, unreal engine 5 quality render, 4:5 portrait, dramatic lighting,
volumetric fog, 8k --ar 4:5 --stylize 750
```

**Canva-Alternative:**
- Suche: "Modern developer workspace dark theme"
- Filter: Dark, blue tones
- Edit: Overlay mit Cyan/Blue gradient (20% opacity)
- Enhance: Contrast +20, Saturation cyan channel +15

---

## 2. TECH STACK SHOWCASE

### Tech Logos: SVG Monochrome

**Beschaffung:**
- **Option A:** Offizielle Brand Assets (next.js/brand, react/brand)
- **Option B:** Simple Icons Library (simpleicons.org)
- **Option C:** SVG Repo (svgrepo.com)

**Style Processing:**
```css
/* Convert to monochrome */
filter: grayscale(100%) brightness(0.4);
opacity: 0.4;

/* Hover state */
&:hover {
  filter: grayscale(0%) brightness(1);
  opacity: 1;
  filter: drop-shadow(0 0 20px rgba(6, 182, 212, 0.5));
}
```

**Keine KI-Prompts nötig** - Logos von offiziellen Quellen

---

## 3. SERVICES BENTO GRID

### 3.1 Webentwicklung (HERO CARD)

**Verwendungszweck:** Große Service Card
**Größe:** 1920×1200px (16:10), WebP

**Midjourney Prompt:**
```
Modern web development environment, ultra wide monitor displaying beautiful
Next.js application with component architecture visible, VS Code with
dark theme on left side, Figma design file on right side, clean code
editor with syntax highlighting in cyan and blue, browser DevTools open
showing 98 Lighthouse score, multiple windows tiled perfectly, professional
desk setup from above, dark theme everything, ambient blue LED backlighting,
keyboard and mouse visible at bottom, coffee cup, wireless headphones,
minimal and clean aesthetic, shot from directly above at 90 degrees,
perfect symmetry, tech photography, depth of field, tack sharp focus,
16:10 landscape ratio, 8k resolution --ar 16:10 --v 6 --style raw
```

**Alternative (UI-fokussiert):**
```
Clean modern website interface design, luxury e-commerce landing page
mockup, dark navy background, glassmorphism cards with product images,
cyan and blue accent colors, smooth gradients, floating UI elements,
depth and shadows, Vercel-style design language, minimalist and premium,
ultra modern web design, Figma quality, perfect typography, 16:10 ratio,
high contrast, professional --ar 16:10 --stylize 500
```

---

### 3.2 IT-Services (COMPACT CARD)

**Verwendungszweck:** Kleinere Service Card
**Größe:** 1000×1000px (1:1 Square), WebP

**Midjourney Prompt:**
```
Modern server room infrastructure, professional data center with glowing
server racks, blue and cyan LED status lights, network cables with
fiber optic glow, close-up perspective, shallow depth of field focusing
on one rack, dark atmospheric lighting, volumetric fog between racks,
futuristic technology aesthetic, clean and organized cabling, status
LEDs blinking, professional photography, enterprise technology,
square 1:1 composition, cinematic lighting, teal color grading,
8k resolution, ultra sharp --ar 1:1 --v 6 --style raw
```

**Alternative (Cloud-fokussiert):**
```
Abstract cloud infrastructure visualization, 3D network of glowing nodes
and connections, data flowing between servers represented by light streams,
dark background with blue and cyan accent lighting, geometric server icons,
AWS/Azure cloud aesthetic, modern tech illustration, isometric perspective,
depth layers, professional and clean, square composition 1:1, digital art,
octane render quality --ar 1:1 --stylize 600
```

---

### 3.3 Digitalisierung (WIDE CARD)

**Verwendungszweck:** Breite Service Card
**Größe:** 1600×1200px (4:3), WebP

**Midjourney Prompt:**
```
Digital transformation visualization, abstract representation of workflow
automation, connected data nodes forming network pattern, API integration
concept art, database symbols connected by glowing lines, data flowing
in circular patterns, purple and cyan gradient color scheme, particles
and light effects, modern tech illustration style, clean and professional,
dark navy background, depth of field with foreground elements sharp,
corporate technology aesthetic, 4:3 landscape ratio, high quality digital
art, Behance quality --ar 4:3 --stylize 700
```

**Alternative (Process-fokussiert):**
```
Modern business process diagram visualization, clean flowchart with
glowing connections, automated workflow representation, robotic arm
interacting with digital interface, holographic data screens, purple
and blue neon accents, futuristic office environment, depth and layers,
professional tech photography meets 3D illustration, wide 4:3 composition,
atmospheric lighting, ultra modern --ar 4:3 --v 6 --style raw
```

---

## 4. PROJECT SPOTLIGHT

### Laptop Mockup mit Screenshot

**Verwendungszweck:** Featured Project Showcase
**Größe:** 2560×1080px (21:9 Ultrawide), WebP

**Midjourney Prompt:**
```
Professional MacBook Pro mockup floating in dark space, e-commerce website
visible on screen showing modern product grid and clean UI, laptop viewed
at slight 3D angle, dark navy background with dramatic lighting, cyan and
blue rim lighting on laptop edges, floating UI elements and components
around the laptop (cards, buttons, icons), subtle particle effects, depth
of field, cinema 4D style render, ultra realistic product photography,
premium and sleek, ambient occlusion, ray tracing, ultrawide 21:9 format,
8k resolution, photorealistic --ar 21:9 --stylize 600
```

**Alternative (Multi-Device):**
```
Multiple device mockups showcasing responsive website, MacBook Pro in
center, iPad to left, iPhone to right, all displaying same website in
different layouts, floating in dark gradient space, blue and cyan accent
lighting, devices at artistic angles, clean and modern presentation,
UI visible on all screens, professional product photography style,
depth between devices, shadows and reflections, ultrawide composition
21:9, premium tech showcase, 8k quality --ar 21:9 --v 6 --style raw
```

**Canva-Methode:**
1. Use "Laptop Mockup" template
2. Insert real screenshot of website (can be placeholder UI)
3. Add background: Dark gradient (Navy → Black)
4. Add glow effect around laptop (Cyan/Blue)
5. Add floating elements: Small UI cards, icons (semi-transparent)

---

## 5. PROCESS VISUALIZATION

### Optional: Process Illustration

**Verwendungszweck:** Als Background oder separate Illustration
**Größe:** 1920×1080px (16:9), WebP

**Midjourney Prompt:**
```
Minimal tech process flow diagram, four connected stages represented by
glowing geometric nodes, clean lines connecting each stage with animated
appearance, icons for analysis, planning, development, launch, abstract
and minimal design, cyan and blue accent colors on dark navy background,
isometric perspective, subtle depth and shadows, professional infographic
style, modern and clean, vector-like quality, 16:9 landscape, corporate
tech aesthetic --ar 16:9 --stylize 400
```

**Alternative:** Nutze Icons + Custom SVG Lines (keine extra Bilder nötig)

---

## 6. ABOUT + TEAM AUTHENTICITY

### 6.1 Founder Portrait

**Verwendungszweck:** Personal Branding Photo
**Größe:** 1000×1250px (4:5 Portrait), WebP

**Shooting-Brief (für echten Fotografen):**
```
SETTING:
- Modern office or home office
- Tech equipment visible but blurred in background (monitors, keyboard)
- Natural window light from side
- Minimal, clean aesthetic

SUBJECT:
- Casual business attire (no tie, button-down or polo)
- Sitting at desk or standing near workspace
- Direct eye contact with camera
- Slight smile, approachable expression
- Relaxed, confident posture

TECHNICAL:
- 85mm lens, f/2.8 aperture
- Shallow depth of field (background blur)
- Natural light + subtle fill light
- Professional color grading (teal/orange)
- 4:5 portrait ratio
- High resolution, sharp focus on eyes
```

**KI-Prompt (falls kein echtes Foto):**
```
Professional portrait photography of tech entrepreneur in modern office,
male in early 30s, casual business attire, sitting at minimal desk with
laptop, natural window lighting from left creating soft shadows, blurred
background showing monitors and tech setup, direct eye contact, friendly
and confident expression, shallow depth of field f/2.0, professional
corporate photography, tack sharp focus on face, natural colors with
subtle teal grading, 4:5 portrait composition, Sony A7IV quality, 8k
resolution, photorealistic, detailed --ar 4:5 --v 6 --style raw --q 2
```

**Wichtig:** Falls KI-generiert, Disclaimer beachten oder echtes Foto bevorzugen!

---

### 6.2 Office/Workspace Ambient

**Verwendungszweck:** Background für About Section (optional)
**Größe:** 1920×1080px (16:9), WebP

**Midjourney Prompt:**
```
Modern tech startup office interior, empty minimal workspace with large
windows, natural light, clean desk with laptop and monitor, ergonomic
chair, concrete walls, wooden floor, indoor plants, ambient blue LED
lighting accents, professional photography, architectural photography
style, wide angle 24mm, no people, clean and organized, depth of field,
ultra sharp, corporate real estate photography aesthetic, 16:9 landscape,
8k resolution --ar 16:9 --v 6 --style raw
```

---

## 7. EXPERTISE PANEL GRID

### 7.1 Performance Chart Visualization

**Verwendungszweck:** Hero Panel in Expertise Section
**Größe:** 800×600px, WebP

**Midjourney Prompt:**
```
Lighthouse performance metrics dashboard mockup, clean UI showing 98/100
score, performance gauge with green indicator, line charts showing speed
improvements, dark theme interface, cyan and green accent colors, modern
web analytics dashboard aesthetic, detailed graphs and numbers, professional
data visualization, flat design with depth, corporate tech UI, wide aspect,
high quality UI design --ar 4:3 --stylize 400
```

**Alternative:** Nutze echten Lighthouse Report Screenshot + Design Overlay

---

## 8. TESTIMONIALS CAROUSEL

### Customer Portrait Photos

**Verwendungszweck:** Testimonial Cards
**Größe:** 500×500px (1:1 Square), WebP

**Option A: Echte Kunden (BEST)**
- Professional headshots
- Konsistenter Style (gleiche Belichtung, Hintergrund)
- Friendly, approachable expressions

**Option B: Stock Photos**
- Quelle: Unsplash, Pexels (lizenzfrei)
- Suche: "professional portrait business"
- Filter: European, age 30-50, friendly expression
- Edit: Konsistentes Color Grading (alle etwas blaustichig)

**Option C: KI-generiert**

**Midjourney Prompt (Person 1):**
```
Professional corporate headshot portrait, confident male CEO in early 40s,
friendly smile, direct eye contact, grey suit jacket, white shirt, modern
office background blurred, natural soft lighting, photorealistic, Canon 5D
quality, 85mm lens f/2.8, professional business photography, square 1:1
crop, high resolution --ar 1:1 --v 6 --style raw --q 2
```

**Midjourney Prompt (Person 2 - weiblich):**
```
Professional business portrait photography, confident female CTO in mid 30s,
friendly and approachable expression, direct eye contact, smart casual
attire blazer, modern tech office background softly blurred, natural window
lighting, photorealistic, professional corporate photography, square 1:1
composition, sharp focus on eyes, 8k quality --ar 1:1 --v 6 --style raw --q 2
```

**Wichtig:**
- Diversity (mix male/female, verschiedene Alter)
- Konsistenter fotografischer Style
- Alle square 1:1 format
- Friendly, nicht zu steif

---

## 9. TECH DASHBOARD PREVIEW

### Live Dashboard Mockup

**Verwendungszweck:** Dashboard Section
**Größe:** 1920×1200px (16:10), WebP

**Midjourney Prompt:**
```
Modern web application analytics dashboard interface design, dark theme
UI with cyan and blue accents, multiple metric cards showing uptime 99.9%
and response times, clean line charts and bar graphs, status indicators
all green, professional data visualization, Vercel/Linear style dashboard
aesthetic, glassmorphism elements, subtle shadows and depth, premium SaaS
interface, wide screen layout 16:10, detailed UI elements, high quality
product design, Figma/Dribbble quality --ar 16:10 --stylize 600
```

**Alternative:** Screenshot von echtem Monitoring Tool
- Grafana Dashboard
- Vercel Analytics
- Custom Dashboard
+ Design Overlay (blur sensible data, add branding)

---

## 10. CTA IMMERSIVE

### Keine zusätzlichen Bilder nötig
- Background: Pure code (gradients + particles)
- Optional: Subtle tech pattern overlay

**Falls gewünscht - Abstract Background:**

**Midjourney Prompt:**
```
Abstract technology background, flowing data streams and particles, network
of glowing cyan and blue lines connecting nodes, dark navy gradient
background, depth of field, subtle and not distracting, minimal and elegant,
corporate tech aesthetic, wide landscape 21:9, atmospheric, depth layers,
ultra high quality abstract art --ar 21:9 --stylize 300
```

---

# 🎨 BILDBEARBEITUNG & OPTIMIERUNG

## Post-Processing Guidelines

### Für ALLE Bilder:

**1. Color Grading:**
```
Base: Shift towards cool tones (teal/cyan)
Highlights: +10 Blue
Shadows: +15 Cyan/Teal
Contrast: +15
Saturation: -5 (dezenter)
```

**2. Overlay (für Konsistenz):**
```css
/* Über jedes Bild legen */
background: linear-gradient(
  135deg,
  rgba(6, 182, 212, 0.08) 0%,
  transparent 50%,
  rgba(59, 130, 246, 0.08) 100%
);
mix-blend-mode: overlay;
```

**3. Export Settings:**
```
Format: WebP
Quality: 90-95 (Hero images), 80-85 (smaller images)
Max-Width: As specified per section
Compression: Squoosh.app or Cloudinary
```

**4. Responsive Versions:**
```
Hero: 1200px, 900px, 600px
Services: 1920px, 1280px, 640px
Square: 1000px, 500px, 250px
```

---

# 📦 ASSET ORGANIZATION

## Ordnerstruktur:

```
/public/images/
├── hero/
│   ├── hero-visual.webp (1200x1500)
│   ├── hero-visual@2x.webp (2400x3000)
│   └── hero-visual-mobile.webp (800x1000)
│
├── services/
│   ├── webentwicklung.webp (1920x1200)
│   ├── it-services.webp (1000x1000)
│   └── digitalisierung.webp (1600x1200)
│
├── projects/
│   └── featured-laptop-mockup.webp (2560x1080)
│
├── about/
│   ├── founder-portrait.webp (1000x1250)
│   └── office-ambient.webp (1920x1080)
│
├── testimonials/
│   ├── customer-1.webp (500x500)
│   ├── customer-2.webp (500x500)
│   └── customer-3.webp (500x500)
│
├── dashboard/
│   └── analytics-mockup.webp (1920x1200)
│
└── logos/
    ├── tech-stack/
    │   ├── nextjs.svg
    │   ├── react.svg
    │   ├── typescript.svg
    │   └── ...
    └── clients/
        └── (client logos)
```

---

# 🔧 IMPLEMENTATION CODE

## Next.js Image Component

```typescript
import Image from 'next/image';

// Hero Image
<Image
  src="/images/hero/hero-visual.webp"
  alt="MB-Solutions - Modern Tech Workspace"
  fill
  sizes="(max-width: 768px) 100vw,
         (max-width: 1024px) 50vw,
         650px"
  quality={95}
  priority
  className="object-cover"
/>

// Service Card Image
<Image
  src="/images/services/webentwicklung.webp"
  alt="Webentwicklung Services - Next.js & React"
  fill
  sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         33vw"
  quality={90}
  className="object-cover group-hover:scale-110 transition-transform duration-700"
/>

// Testimonial Avatar
<Image
  src="/images/testimonials/customer-1.webp"
  alt="Max Mustermann - CEO TechRetail"
  width={500}
  height={500}
  className="rounded-full"
  quality={85}
/>
```

---

# ✅ BILDKONZEPT ZUSAMMENFASSUNG

## Benötigte Bilder (Priorität):

**MUST-HAVE (Minimum Viable Product):**
1. ✅ Hero Visual (1200×1500) - Tech Workspace
2. ✅ Webentwicklung Service (1920×1200)
3. ✅ IT-Services Service (1000×1000)
4. ✅ Digitalisierung Service (1600×1200)
5. ✅ Founder Portrait (1000×1250)

**NICE-TO-HAVE (Phase 2):**
6. Featured Project Mockup (2560×1080)
7. Dashboard Preview (1920×1200)
8. Testimonial Photos (3x 500×500)
9. Office Ambient (1920×1080)

**OPTIONAL (Falls Zeit/Budget):**
10. Abstract Backgrounds
11. Process Illustrations
12. Custom Graphics

---

# 🎯 QUICK START CHECKLISTE

Für schnellen Launch:

1. **Hero:** 1 gutes Tech Workspace Foto → Midjourney Prompt #1
2. **Services:** 3 Bilder → Midjourney Prompts #3.1-3.3
3. **About:** 1 Portrait → Echtes Foto (WICHTIG) oder Placeholder
4. **Rest:** Nutze Gradients + Icons (keine extra Bilder nötig)

**Gesamtaufwand:** 5 Bilder = Komplett funktionale Homepage

---

**ENDE TEIL 4 - Bildkonzept & Prompts**
**Weiter mit Teil 5: Design-System & Implementation Guide**
