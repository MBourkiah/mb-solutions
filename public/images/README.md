# 🎨 MB-Solutions Bilderverwaltung

## 📁 Ordnerstruktur

```
/public/images/
├── /hero/
│   ├── hero-dashboard.svg ✅ (Placeholder)
│   └── hero-dashboard.webp (TODO: Generieren)
├── /services/
│   ├── service-webdev.svg ✅ (Placeholder)
│   ├── service-it.svg ✅ (Placeholder)
│   ├── service-automation.svg ✅ (Placeholder)
│   └── [Echte .webp Bilder TODO]
├── /cases/
│   ├── case-bau-portal.svg ✅ (Placeholder)
│   ├── case-it-corporate.svg ✅ (Placeholder)
│   ├── case-ecommerce.svg ✅ (Placeholder)
│   └── [Echte .webp Bilder TODO]
└── /backgrounds/
    ├── cta-background.svg ✅ (Placeholder)
    └── cta-background.webp (Optional)
```

## ✅ Was wurde vorbereitet?

### 1. Ordnerstruktur ✅
- Alle benötigten Ordner sind angelegt
- Struktur folgt dem Redesign-Konzept

### 2. SVG-Placeholder ✅
- 8 professionelle SVG-Placeholder erstellt
- Korrekte Aspect Ratios (4:5, 4:3, 16:9, 3:2, 21:9)
- Marken-Farbschema (Cyan → Blue → Purple)
- Icons und Labels für jeden Typ
- Sofort verwendbar in der Entwicklung

### 3. Generierungs-Guide ✅
- Siehe: `BILD-GENERIERUNG-GUIDE.md` im Root
- Copy-Paste Prompts für Canva & Midjourney
- Step-by-Step Workflows
- WebP Konvertierungs-Anleitung

## 🎯 Nächste Schritte

### Phase 1: Bildgenerierung (AKTUELL)
Du kannst jetzt die Bilder generieren:

**Priorität:**
1. 🔥 `hero-dashboard.webp` (Höchste Priorität)
2. ⭐ `service-webdev.webp`
3. ⭐ `case-bau-portal.webp`
4. Restliche Bilder

**Siehe:** `BILD-GENERIERUNG-GUIDE.md` für alle Prompts & Workflows

### Phase 2: Implementierung (Nach Bildgenerierung)
- Backup bestehender Components
- Design System Setup
- 6 neue Sections implementieren
- Responsive Testing
- Lighthouse Optimierung

## 📊 Bild-Spezifikationen Übersicht

| Datei | Format | Größe | Aspect | Priorität |
|-------|--------|-------|--------|-----------|
| hero-dashboard.webp | WebP | 1200×1500 | 4:5 | 🔥 #1 |
| service-webdev.webp | WebP | 1600×1200 | 4:3 | ⭐ #2 |
| service-it.webp | WebP | 1600×1200 | 4:3 | - |
| service-automation.webp | WebP | 1600×1200 | 4:3 | - |
| case-bau-portal.webp | WebP | 1920×1080 | 16:9 | ⭐ #3 |
| case-it-corporate.webp | WebP | 1600×1200 | 4:3 | - |
| case-ecommerce.webp | WebP | 1500×1000 | 3:2 | - |
| cta-background.webp | WebP | 2560×1080 | 21:9 | Optional |

## 🔄 Status Tracking

### ✅ Completed:
- [x] Ordnerstruktur erstellt
- [x] SVG-Placeholder generiert
- [x] Bildgenerierungs-Guide geschrieben
- [x] Prompts für Canva & Midjourney vorbereitet
- [x] WebP-Konvertierungs-Workflow dokumentiert

### 🎨 TODO (Deine Aufgabe):
- [ ] Bilder mit Canva/Midjourney generieren
- [ ] WebP-Konvertierung durchführen
- [ ] Bilder in korrekte Ordner legen
- [ ] Mich informieren wenn fertig → Implementierung starten

## 💡 Verwendung der Placeholder

Die SVG-Placeholder können **sofort** in der Entwicklung verwendet werden:

```tsx
// Beispiel HeroModern.tsx
<Image
  src="/images/hero/hero-dashboard.svg"
  alt="Hero Dashboard"
  fill
  className="object-cover"
/>
```

**Nach Bildgenerierung einfach ersetzen:**
```tsx
<Image
  src="/images/hero/hero-dashboard.webp"
  alt="Hero Dashboard"
  fill
  className="object-cover"
/>
```

## 📖 Weitere Dokumentation

- **BILD-GENERIERUNG-GUIDE.md** - Komplette Anleitung zur Bildgenerierung
- **FULL-WIDTH-REDESIGN-KONZEPT.md** - Part 1 des Redesign-Konzepts
- **FULL-WIDTH-REDESIGN-PART2.md** - Part 2 mit allen Sections & Specs

---

**Stand:** 2025-12-02
**Status:** Bereit für Bildgenerierung ✅
