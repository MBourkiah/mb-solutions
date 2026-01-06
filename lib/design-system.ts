/**
 * MB-Solutions Premium Design System
 *
 * Inspired by: Stripe, Vercel, Linear
 *
 * ✨ Features:
 * - 8px spacing grid
 * - Consistent typography scale
 * - Premium animation variants
 * - Color system
 * - Reusable utilities
 */

// ============================================
// 📐 SPACING SYSTEM (8px Grid)
// ============================================
export const spacing = {
  section: {
    mobile: "py-12",      // 96px
    tablet: "sm:py-16",   // 128px
    desktop: "lg:py-20",  // 160px
    xl: "xl:py-24",       // 192px
  },
  container: {
    padding: "px-4 sm:px-6 lg:px-8",
    maxWidth: "max-w-7xl mx-auto",
  },
  gap: {
    xs: "gap-2",       // 8px
    sm: "gap-4",       // 16px
    md: "gap-6",       // 24px
    lg: "gap-8",       // 32px
    xl: "gap-12",      // 48px
    "2xl": "gap-16",   // 64px
  },
  margin: {
    section: "mb-12 sm:mb-16 lg:mb-20",
    heading: "mb-10 sm:mb-12",
    subheading: "mb-5 sm:mb-6",
  },
} as const;

// ============================================
// 📝 TYPOGRAPHY SCALE
// ============================================
export const typography = {
  display: {
    // Hero Headlines
    xl: "text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]",
    lg: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]",
    md: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]",
  },
  heading: {
    h1: "text-3xl sm:text-4xl md:text-5xl font-bold leading-tight",
    h2: "text-2xl sm:text-3xl md:text-4xl font-bold leading-tight",
    h3: "text-xl sm:text-2xl md:text-3xl font-bold leading-tight",
    h4: "text-lg sm:text-xl md:text-2xl font-semibold leading-tight",
  },
  body: {
    xl: "text-lg sm:text-xl md:text-2xl leading-relaxed",
    lg: "text-base sm:text-lg md:text-xl leading-relaxed",
    md: "text-base sm:text-lg leading-relaxed",
    sm: "text-sm sm:text-base leading-relaxed",
  },
  label: {
    lg: "text-sm sm:text-base font-semibold uppercase tracking-wider",
    md: "text-xs sm:text-sm font-semibold uppercase tracking-wide",
    sm: "text-xs font-medium uppercase tracking-wide",
  },
} as const;

// ============================================
// 🎨 PREMIUM ANIMATION VARIANTS
// ============================================
export const animations = {
  // Fade Up with Blur
  fadeUp: {
    initial: { opacity: 0, y: 24, filter: "blur(4px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -24, filter: "blur(4px)" },
  },
  // Fade In
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  // Scale In
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
  // Slide In from Right
  slideInRight: {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  },
  // Slide In from Left
  slideInLeft: {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 40 },
  },
  // Stagger Container
  staggerContainer: {
    initial: "initial",
    animate: "animate",
    variants: {
      animate: {
        transition: {
          staggerChildren: 0.08,
          delayChildren: 0.1,
        },
      },
    },
  },
  // Stagger Child
  staggerChild: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
} as const;

// ============================================
// 🎯 EASING CURVES
// ============================================
export const easing = {
  smooth: [0.25, 0.1, 0.25, 1],
  snappy: [0.16, 1, 0.3, 1],
  springy: { type: "spring", stiffness: 300, damping: 30 },
} as const;

// ============================================
// 🌈 COLOR UTILITIES
// ============================================
export const colors = {
  glow: {
    accent: "rgba(6, 182, 212, 0.25)",
    primary: "rgba(59, 130, 246, 0.25)",
    purple: "rgba(139, 92, 246, 0.25)",
  },
  gradient: {
    accentToPrimary: "from-accent via-primary to-accent",
    primaryToAccent: "from-primary via-accent to-primary",
    subtle: "from-background via-muted/5 to-background",
  },
} as const;

// ============================================
// 🎭 GLASS MORPHISM STYLES
// ============================================
export const glass = {
  card: "bg-card/40 backdrop-blur-xl border border-border/50",
  cardHover: "hover:bg-card/60 hover:border-accent/30",
  subtle: "bg-background/80 backdrop-blur-md border border-border/30",
  strong: "bg-card/60 backdrop-blur-2xl border border-border/40",
} as const;

// ============================================
// 💫 HOVER EFFECTS
// ============================================
export const hover = {
  lift: "hover:-translate-y-2 transition-transform duration-300",
  glow: "hover:shadow-lg hover:shadow-accent/20 transition-shadow duration-300",
  scale: "hover:scale-105 transition-transform duration-300",
  magnetic: {
    initial: { x: 0, y: 0 },
    whileHover: { x: 4, y: -4 },
    transition: { duration: 0.2 },
  },
} as const;

// ============================================
// 📦 COMPONENT PRESETS
// ============================================
export const presets = {
  button: {
    primary: "px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-accent via-primary to-accent rounded-xl font-semibold text-base sm:text-lg text-white",
    secondary: "px-6 sm:px-8 py-3.5 sm:py-4 bg-background/50 hover:bg-background/80 backdrop-blur-sm border-2 border-border hover:border-accent/50 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300",
  },
  card: {
    default: "p-6 sm:p-8 bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-accent/30 transition-all duration-300",
    elevated: "p-6 sm:p-8 bg-card/60 backdrop-blur-xl border border-border/40 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300",
  },
  badge: {
    default: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm",
    solid: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent to-primary text-white",
  },
} as const;

// ============================================
// 🎬 TRANSITION PRESETS
// ============================================
export const transitions = {
  fast: { duration: 0.2 },
  normal: { duration: 0.3 },
  slow: { duration: 0.6 },
  spring: { type: "spring", stiffness: 300, damping: 30 },
} as const;

// ============================================
// 📱 BREAKPOINTS
// ============================================
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

// Export all
export const designSystem = {
  spacing,
  typography,
  animations,
  easing,
  colors,
  glass,
  hover,
  presets,
  transitions,
  breakpoints,
} as const;

export default designSystem;
