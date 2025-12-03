# Vertical Spacing System - MB-Solutions

**Design System für konsistenten Vertical Rhythm auf Vercel/Linear-Niveau**

---

## 📐 Core Spacing Scale (8px Grid-basiert)

```css
/* SECTION SPACING (py-X) */
--space-section-sm:   80px   (py-20)   /* Kompakte Sections */
--space-section-md:   96px   (py-24)   /* Standard ⭐ DEFAULT */
--space-section-lg:   128px  (py-32)   /* Große Sections */
--space-section-xl:   160px  (py-40)   /* Hero, Major CTAs */

/* BLOCK SPACING (mb-X) */
--space-block-sm:     32px   (mb-8)    /* Zwischen kleineren Blöcken */
--space-block-md:     48px   (mb-12)   /* Standard */
--space-block-lg:     64px   (mb-16)   /* Große Gaps */

/* ELEMENT SPACING (gap-X, mb-X) */
--space-element-xs:   16px   (gap-4)   /* Tight elements */
--space-element-sm:   24px   (gap-6)   /* Standard element spacing */
--space-element-md:   32px   (gap-8)   /* Comfortable spacing */
```

---

## 🎯 Container Max-Width System

```tsx
/* CONTAINER WIDTHS */
Hero Section:          max-w-[1440px]  /* Full-width feel */
Standard Sections:     max-w-7xl       /* 1280px - DEFAULT */
Text-Heavy Content:    max-w-6xl       /* 1152px */
Blog/Article Content:  max-w-4xl       /* 896px */
```

### Usage Pattern:

```tsx
// OPTION 1: Full-Width BG + Centered Content
<section className="relative py-24 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
  <div className="max-w-7xl mx-auto px-8 lg:px-16">
    {/* Content */}
  </div>
</section>

// OPTION 2: Contained Section
<section className="relative py-24">
  <div className="max-w-7xl mx-auto px-8 lg:px-16">
    {/* Content */}
  </div>
</section>

// OPTION 3: Hero (Edge-to-Edge)
<section className="relative min-h-screen">
  <div className="max-w-[1440px] mx-auto px-8 lg:px-16 xl:px-24">
    {/* Content */}
  </div>
</section>
```

---

## 📊 Grid System (12-Column)

```tsx
/* HERO LAYOUT (60/40 Split) */
<div className="grid grid-cols-12 gap-12 lg:gap-16">
  <div className="col-span-12 lg:col-span-7">
    {/* Content - 7 Columns */}
  </div>
  <div className="col-span-12 lg:col-span-5">
    {/* Visual - 5 Columns */}
  </div>
</div>

/* ALTERNATIVE: 50/50 Split */
<div className="grid grid-cols-12 gap-12">
  <div className="col-span-12 lg:col-span-6">
    {/* Left */}
  </div>
  <div className="col-span-12 lg:col-span-6">
    {/* Right */}
  </div>
</div>

/* BENTO GRID (3 Columns) */
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Cards */}
</div>
```

---

## 🏗️ Section Anatomy

```tsx
<section className="relative py-24">  {/* Section Padding */}
  <div className="max-w-7xl mx-auto px-8 lg:px-16">  {/* Container */}

    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-16">

      {/* Badge */}
      <div className="mb-6">
        {/* Badge Component */}
      </div>

      {/* Heading */}
      <h2 className="text-5xl font-black mb-6">
        Heading
      </h2>

      {/* Subheading */}
      <p className="text-xl text-gray-400">
        Description
      </p>

    </div>

    {/* Section Content */}
    <div className="grid grid-cols-12 gap-8">
      {/* Content */}
    </div>

  </div>
</section>
```

---

## 📏 Typography Spacing Rules

```css
/* HEADING TO TEXT */
h1 → p:    mb-6  (24px)
h2 → p:    mb-6  (24px)
h3 → p:    mb-4  (16px)

/* TEXT TO CTA */
p → button:    mb-8  (32px)

/* SECTION TITLE TO CONTENT */
Section Header → Content:    mb-12  (48px)
Section Header → Content:    mb-16  (64px) /* For large sections */
```

---

## ✅ Real-World Examples

### Hero Section
```tsx
<section className="relative min-h-screen flex items-center">
  <div className="max-w-[1440px] mx-auto px-8 lg:px-16 xl:px-24 w-full">
    <div className="grid grid-cols-12 gap-12 lg:gap-16 items-center">
      <div className="col-span-12 lg:col-span-7 space-y-8">
        {/* Content */}
      </div>
      <div className="col-span-12 lg:col-span-5">
        {/* Visual */}
      </div>
    </div>
  </div>
</section>
```

### Standard Section
```tsx
<section className="relative py-24">
  <div className="max-w-7xl mx-auto px-8 lg:px-16">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-5xl font-black mb-6">Title</h2>
      <p className="text-xl text-gray-400">Description</p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      {/* Cards */}
    </div>
  </div>
</section>
```

### Full-Width BG Section
```tsx
<section className="relative py-32 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
  <div className="max-w-6xl mx-auto px-8 lg:px-16">
    {/* Content */}
  </div>
</section>
```

---

## 🎨 Responsive Spacing

```tsx
/* MOBILE TO DESKTOP PROGRESSION */

/* Padding X (Horizontal) */
px-6        /* Mobile (24px) */
md:px-8     /* Tablet (32px) */
lg:px-16    /* Desktop (64px) */
xl:px-24    /* Large Desktop (96px) */

/* Padding Y (Vertical) */
py-16       /* Mobile sections (64px) */
md:py-20    /* Tablet sections (80px) */
lg:py-24    /* Desktop sections (96px) */
xl:py-32    /* Large sections (128px) */

/* Gaps */
gap-6       /* Mobile (24px) */
md:gap-8    /* Tablet (32px) */
lg:gap-12   /* Desktop (48px) */
xl:gap-16   /* Large Desktop (64px) */
```

---

## 🚫 Common Mistakes to Avoid

```tsx
/* ❌ BAD - Inconsistent spacing */
<section className="py-20">...</section>
<section className="py-28">...</section>
<section className="py-16">...</section>

/* ✅ GOOD - Consistent system */
<section className="py-24">...</section>
<section className="py-24">...</section>
<section className="py-32">...</section>  /* Only for hero/major */

/* ❌ BAD - Random max-widths */
<div className="max-w-[1200px]">...</div>
<div className="max-w-5xl">...</div>

/* ✅ GOOD - Systematic widths */
<div className="max-w-7xl">...</div>  /* Standard */
<div className="max-w-6xl">...</div>  /* Text-heavy */

/* ❌ BAD - Arbitrary gaps */
<div className="grid gap-10">...</div>

/* ✅ GOOD - System-based gaps */
<div className="grid gap-8">...</div>  /* Standard */
<div className="grid gap-12">...</div> /* Larger */
```

---

## 🎯 Quick Reference Cheat Sheet

```
SECTIONS:
min-h-screen       → Hero only
py-24              → Standard section ⭐
py-32              → Large section
py-40              → Major CTA

CONTAINERS:
max-w-[1440px]     → Hero
max-w-7xl          → Standard ⭐
max-w-6xl          → Text-heavy
max-w-4xl          → Articles

GRIDS:
grid-cols-12       → Complex layouts
gap-8              → Standard ⭐
gap-12             → Large

SPACING:
mb-6               → Heading to Text
mb-8               → Text to CTA
mb-12/16           → Section Title to Content
```

---

## 🏆 Vercel/Linear-Style Consistency

**Key Principles:**
1. **8px Grid** - Alles basiert auf 8px Inkrementen
2. **Limited Choices** - Nur 3-4 Spacing-Optionen pro Kategorie
3. **Consistent Containers** - max-w-7xl als Standard
4. **Vertical Rhythm** - py-24 als Default für Sections
5. **Responsive Scaling** - Mobile starts smaller, scales up

---

## 📝 Usage Checklist

Bevor du eine neue Section erstellst:

- [ ] Section Padding: py-24 (oder py-32 für große)?
- [ ] Container: max-w-7xl (Standard)?
- [ ] Grid: 12-column system für complex layouts?
- [ ] Gap: gap-8 (Standard) oder gap-12 (groß)?
- [ ] Responsive: Mobile-first spacing?
- [ ] Header Spacing: mb-16 zwischen Title und Content?

---

## 🎨 Apply to Existing Sections

Gehe durch alle Sections und wende das System an:

```tsx
// VORHER
<section className="py-20 md:py-28">
  <div className="px-8 md:px-12 lg:px-20 max-w-[1300px] mx-auto">

// NACHHER
<section className="py-24">
  <div className="max-w-7xl mx-auto px-8 lg:px-16">
```

---

**Dieses System garantiert:**
✅ Visuelle Konsistenz
✅ Professioneller Vertical Rhythm
✅ Vercel/Linear-Niveau
✅ Easy Maintenance
✅ Responsive by Design
