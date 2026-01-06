# 🎨 IDEOGRAM IMAGE GENERATION PROMPTS

**Projekt:** MB-Solutions Control Room Hero
**Plattform:** IDEOGRAM (ideogram.ai)
**Datum:** 2026-01-06

---

## 🖼️ BILD 1: HERO BACKGROUND

### **Verwendung:**
- Full-width Hero Background
- Atmosphärische Basis für gesamte Hero Section
- Unter Text + Dashboard Panel

### **Technische Specs:**
- **Dateiname:** `hero-bg.png`
- **Format:** PNG (nicht JPG!)
- **Ziel-Größe:** 2560×1440px
- **Aspect Ratio:** 16:9
- **Dateipfad:** `c:\MB-Solutions\public\images\hero-bg.png`

### **IDEOGRAM Prompt:**
```
Dark atmospheric server room interior, deep blue and black tones, shallow depth of field with bokeh lights in background, modern data center aesthetic, cinematic lighting from top-left, subtle cyan and blue accent lights, professional tech environment, moody and premium, ultra-wide angle, 16:9 aspect ratio, high contrast, photorealistic
```

### **IDEOGRAM Settings:**
- **Aspect Ratio:** 16:9 (Landscape)
- **Style:** Realistic / Photographic
- **Quality:** High
- **Magic Prompt:** ON (für bessere Interpretation)

### **Was wichtig ist:**
- ✅ Dunkle Atmosphäre (deep blue/black)
- ✅ Bokeh-Lichter im Hintergrund (Tiefe)
- ✅ Cyan/Blue Akzente (passt zur Brand)
- ✅ Shallow Depth of Field (professionell)
- ✅ Nicht zu beschäftigt (Text muss lesbar bleiben)

### **Vermeiden:**
- ❌ Zu helle Bereiche
- ❌ Störende Details im Zentrum
- ❌ Zu viel Kontrast
- ❌ Klare Gesichter/Personen (DSGVO)

---

## 🎞️ BILD 2: GRAIN TEXTURE (AKTIV)

### **Verwendung:**
- Subtiles Film-Grain-Overlay
- Premium-Look (Vercel/Linear-Style)
- 3% Opacity mit mix-blend-overlay

### **Technische Specs:**
- **Dateiname:** `grain-texture.png`
- **Format:** PNG
- **Ziel-Größe:** 1920×1080px (oder höher)
- **Aspect Ratio:** 16:9
- **Dateipfad:** `c:\MB-Solutions\public\images\grain-texture.png`

### **IDEOGRAM Prompt:**
```
Subtle film grain texture, monochromatic noise pattern, fine grain overlay, neutral gray, minimal contrast, seamless tileable texture, professional photography grain effect, 16:9 aspect ratio, high resolution
```

### **IDEOGRAM Settings:**
- **Aspect Ratio:** 16:9 (Landscape)
- **Style:** Design / Pattern
- **Quality:** High
- **Magic Prompt:** OFF (wir wollen genau das, was wir sagen)

### **✅ EMPFEHLUNG: BILD #2**
Von den 4 generierten Bildern ist **Bild #2** (zweites von links) perfekt:
- Feinste Körnung
- Gleichmäßige Verteilung
- Neutral (nicht zu hell/dunkel)
- Perfekt für 3% Opacity

### **Was wichtig ist:**
- ✅ Feine, gleichmäßige Körnung
- ✅ Monochrom (grau/schwarz)
- ✅ Tileable (nahtlos wiederholbar)
- ✅ Subtil (nicht zu auffällig)

### **Vermeiden:**
- ❌ Zu grobes Grain
- ❌ Farbige Muster
- ❌ Sichtbare Wiederholungen
- ❌ Zu starker Kontrast

---

## 📊 BILD 3: DASHBOARD PANEL (OPTIONAL)

### **Verwendung:**
- Floating Dashboard Visual (rechte Seite)
- Aktuell: Live React Components
- Optional: Statisches PNG als Fallback

### **Technische Specs:**
- **Dateiname:** `dashboard-panel.png`
- **Format:** PNG mit Transparenz
- **Ziel-Größe:** 1200×1400px
- **Aspect Ratio:** 6:7 (Portrait)
- **Dateipfad:** `c:\MB-Solutions\public\images\dashboard-panel.png`

### **IDEOGRAM Prompt:**
```
Modern dark UI dashboard interface, performance metrics display, real-time analytics graph with cyan and blue gradient lines, minimalist card design, dark navy background with subtle grid pattern, floating metric cards showing "98.4 Performance Score" and "2.1s Load Time", glassmorphism elements, clean typography, high-end SaaS product aesthetic, portrait orientation 6:7, dark mode, premium quality
```

### **IDEOGRAM Settings:**
- **Aspect Ratio:** Custom 6:7 (Portrait)
- **Style:** UI Design / Digital
- **Quality:** Highest
- **Magic Prompt:** ON

### **⚠️ HINWEIS:**
Dieses Bild ist **OPTIONAL**.
Die aktuelle Implementation nutzt **Live React Components** mit echten animierten Metriken.
Das ist besser als ein statisches Bild!

**Nur verwenden, wenn:**
- Performance-Probleme auftreten
- Einfacheres Styling gewünscht
- Schnellere Load-Zeit wichtig

---

## 🔄 ALTERNATIVE PROMPTS (FALLS ERGEBNIS NICHT PASST)

### **Hero Background - Alternative 1 (Abstrakter):**
```
Abstract dark technology background, flowing data streams, subtle circuit board patterns, deep navy and black gradient, ambient cyan glow, professional corporate aesthetic, minimal but sophisticated, 16:9 ultra-wide, photorealistic rendering
```

### **Hero Background - Alternative 2 (Office-Style):**
```
Modern minimalist office at night, floor-to-ceiling windows with city lights bokeh, dark interior with subtle blue accent lighting, empty desk with glowing monitor, premium corporate environment, cinematic depth of field, 16:9 aspect ratio, moody and atmospheric
```

### **Grain Texture - Alternative:**
```
Fine film grain overlay texture, black and white noise, analog photography grain, seamless pattern, subtle and minimal, professional post-processing effect, tileable, 1920x1080 resolution
```

---

## 📐 BILDGRÖSZEN-ÜBERSICHT

| Bild | Dateiname | Größe | Ratio | Format | Status |
|------|-----------|-------|-------|--------|--------|
| **Hero BG** | `hero-bg.png` | 2560×1440px | 16:9 | PNG | 🔴 Ausstehend |
| **Grain Texture** | `grain-texture.png` | 1920×1080px | 16:9 | PNG | ✅ Bild #2 wählen |
| **Dashboard** | `dashboard-panel.png` | 1200×1400px | 6:7 | PNG | ⚪ Optional |

---

## 🎯 QUALITÄTS-CHECKLISTE

### **Für Hero Background:**
- [ ] Dunkle Atmosphäre (nicht zu hell)
- [ ] Bokeh/Depth of Field vorhanden
- [ ] Cyan/Blue Akzente sichtbar
- [ ] Zentrum relativ leer (für Text)
- [ ] Keine störenden Details
- [ ] Professioneller, premium Look
- [ ] 2560×1440px oder größer
- [ ] PNG-Format

### **Für Grain Texture:**
- [ ] Feine, gleichmäßige Körnung
- [ ] Monochrom (schwarz/weiß/grau)
- [ ] Keine Farbstiche
- [ ] Tileable (nahtlos)
- [ ] Nicht zu grob
- [ ] **Bild #2 ausgewählt**
- [ ] PNG-Format

---

## 💾 DOWNLOAD UND SPEICHERUNG

### **Von IDEOGRAM herunterladen:**
1. Bild generieren lassen
2. Bestes Ergebnis auswählen
3. Rechtsklick → "Bild speichern als..."
4. Als PNG speichern (nicht JPG konvertieren!)

### **Dateinamen:**
```
✅ hero-bg.png           (nicht hero-bg.jpg)
✅ grain-texture.png     (nicht grain.png)
✅ dashboard-panel.png   (optional)
```

### **Speicherpfad:**
```
c:\MB-Solutions\public\images\
```

---

## 🚀 NACH DEM DOWNLOAD

### **Nächster Schritt:**
Sag mir Bescheid:
> "Bilder sind gespeichert in public/images/"

Dann mache ich automatisch:
1. ✅ Image-Komponenten in `HeroControlRoom.tsx` aktivieren
2. ✅ Fallback-Gradienten entfernen
3. ✅ Build testen
4. ✅ Git commit + push
5. ✅ Bereit für `npm run dev`

---

## 📚 ZUSÄTZLICHE TIPPS

### **IDEOGRAM Best Practices:**
- Mehrere Varianten generieren (4-6 Bilder)
- Beste Version auswählen
- Bei Bedarf Prompt anpassen und neu generieren
- "Magic Prompt" für kreativere Interpretation
- "Negative Prompt" um ungewollte Elemente zu vermeiden

### **Negative Prompts (wenn unterstützt):**
```
people, faces, text, logos, bright colors, cartoonish, low quality, blurry, oversaturated
```

### **Wenn Ergebnis nicht passt:**
- Prompt verfeinern (mehr Details)
- Style-Setting ändern
- Mehrere Durchläufe
- Alternative Prompts (siehe oben)

---

## ✅ FINAL CHECKLIST

- [ ] Hero Background von IDEOGRAM generiert
- [ ] Hero Background als `hero-bg.png` gespeichert
- [ ] Grain Texture **Bild #2** ausgewählt
- [ ] Grain Texture als `grain-texture.png` gespeichert
- [ ] Beide Bilder in `public/images/` Ordner
- [ ] Mir Bescheid gesagt für Code-Aktivierung

---

**Bereit für IDEOGRAM! 🎨**
