/**
 * MB-Solutions Premium Design System V2
 *
 * High-End Dark Theme inspired by:
 * - Vercel.com
 * - Linear.app
 * - Apple Vision
 * - T3.gg
 *
 * ✨ Features:
 * - Deep Navy color scheme (#0A0E27)
 * - Cyan/Blue highlights
 * - Precise spacing system (140px/100px/60px)
 * - Inter typography hierarchy
 * - 12-column grid system
 * - Mobile-first approach
 */

// ============================================
// 🎨 COLOR SYSTEM - Deep Navy Theme
// ============================================
export const premiumColors = {
  background: {
    primary: "#0A0E27",      // Deep Navy
    secondary: "#0F1629",    // Card background
    tertiary: "#141B35",     // Elevated surfaces
  },
  text: {
    primary: "#FFFFFF",      // Pure white
    secondary: "#A0AEC0",    // Muted
    tertiary: "#6B7280",     // More muted
  },
  accent: {
    cyan: "#06B6D4",         // Primary accent
    blue: "#3B82F6",         // Secondary accent
    purple: "#8B5CF6",       // Tertiary accent
  },
  border: {
    default: "rgba(255, 255, 255, 0.1)",
    hover: "rgba(6, 182, 212, 0.3)",
    focus: "rgba(59, 130, 246, 0.5)",
  },
  glow: {
    cyan: "rgba(6, 182, 212, 0.15)",
    blue: "rgba(59, 130, 246, 0.15)",
    subtle: "rgba(255, 255, 255, 0.03)",
  },
} as const;

// ============================================
// 📐 SPACING SYSTEM - Precise Measurements
// ============================================
export const premiumSpacing = {
  // Section Padding (Desktop / Tablet / Mobile)
  section: {
    desktop: "py-[140px]",   // 140px
    tablet: "md:py-[100px]", // 100px
    mobile: "py-[60px]",     // 60px
    combined: "py-[60px] md:py-[100px] lg:py-[140px]",
  },
  // Container
  container: {
    maxWidth: "max-w-[1280px]",  // 1280px max-width
    padding: "px-6 md:px-8 lg:px-12",
    full: "max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12",
  },
  // Grid System (12 columns)
  grid: {
    cols12: "grid grid-cols-12",
    gap: "gap-6 md:gap-8 lg:gap-12",
  },
  // Inner Spacing
  inner: {
    xs: "gap-4",       // 16px
    sm: "gap-6",       // 24px
    md: "gap-8",       // 32px
    lg: "gap-12",      // 48px
    xl: "gap-16",      // 64px
    "2xl": "gap-24",   // 96px
  },
  // Margins
  margin: {
    section: "mb-24 md:mb-32 lg:mb-40",
    heading: "mb-12 md:mb-16",
    subheading: "mb-6 md:mb-8",
    paragraph: "mb-4 md:mb-6",
  },
} as const;

// ============================================
// 📝 TYPOGRAPHY - Inter Font System
// ============================================
export const premiumTypography = {
  // Headlines (H1)
  h1: {
    desktop: "text-[72px] leading-[1.1] font-bold tracking-tight",
    tablet: "md:text-[56px]",
    mobile: "text-[40px]",
    combined: "text-[40px] md:text-[56px] lg:text-[72px] leading-[1.1] font-bold tracking-tight",
  },
  // Section Titles (H2)
  h2: {
    desktop: "text-[48px] leading-[1.2] font-bold tracking-tight",
    tablet: "md:text-[40px]",
    mobile: "text-[32px]",
    combined: "text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] font-bold tracking-tight",
  },
  // Subsection Titles (H3)
  h3: {
    desktop: "text-[36px] leading-[1.3] font-bold",
    tablet: "md:text-[32px]",
    mobile: "text-[24px]",
    combined: "text-[24px] md:text-[32px] lg:text-[36px] leading-[1.3] font-bold",
  },
  // Body Text
  body: {
    large: "text-[20px] md:text-[22px] leading-[1.6]",
    default: "text-[18px] md:text-[20px] leading-[1.6]",
    small: "text-[16px] md:text-[18px] leading-[1.6]",
  },
  // Labels & Captions
  label: {
    large: "text-[14px] md:text-[16px] font-semibold uppercase tracking-wider",
    default: "text-[12px] md:text-[14px] font-semibold uppercase tracking-wider",
    small: "text-[11px] md:text-[12px] font-medium uppercase tracking-wide",
  },
} as const;

// ============================================
// 🎬 ANIMATIONS - Premium Motion
// ============================================
export const premiumAnimations = {
  // Fade Up with Blur (Premium effect)
  fadeUpBlur: {
    initial: { opacity: 0, y: 40, filter: "blur(10px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -20, filter: "blur(5px)" },
  },
  // Fade In
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  // Scale with Blur
  scaleBlur: {
    initial: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
  },
  // Slide from Right
  slideRight: {
    initial: { opacity: 0, x: 60, filter: "blur(8px)" },
    animate: { opacity: 1, x: 0, filter: "blur(0px)" },
    exit: { opacity: 0, x: -60, filter: "blur(8px)" },
  },
  // Slide from Left
  slideLeft: {
    initial: { opacity: 0, x: -60, filter: "blur(8px)" },
    animate: { opacity: 1, x: 0, filter: "blur(0px)" },
    exit: { opacity: 0, x: 60, filter: "blur(8px)" },
  },
  // Stagger Container
  stagger: {
    container: {
      animate: {
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2,
        },
      },
    },
    item: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
    },
  },
} as const;

// ============================================
// 🎯 EASING CURVES - Smooth Motion
// ============================================
export const premiumEasing = {
  smooth: [0.25, 0.1, 0.25, 1],        // Smooth easing
  snappy: [0.16, 1, 0.3, 1],           // Snappy easing
  bounce: [0.68, -0.55, 0.265, 1.55],  // Bounce effect
  spring: {
    type: "spring" as const,
    stiffness: 260,
    damping: 20,
  },
} as const;

// ============================================
// 🌈 GRADIENT SYSTEM
// ============================================
export const premiumGradients = {
  // Text Gradients
  text: {
    cyanBlue: "bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent",
    bluePurple: "bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent",
    subtle: "bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent",
  },
  // Background Gradients
  background: {
    radial: "bg-gradient-radial from-cyan-500/10 via-transparent to-transparent",
    conic: "bg-gradient-conic from-cyan-500/20 via-blue-500/20 to-cyan-500/20",
    mesh: "bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5",
  },
  // Border Gradients
  border: {
    default: "border-gradient-to-r from-cyan-500/30 via-blue-500/30 to-cyan-500/30",
    hover: "border-gradient-to-r from-cyan-500/60 via-blue-500/60 to-cyan-500/60",
  },
} as const;

// ============================================
// 💎 GLASS MORPHISM - Premium Effects
// ============================================
export const premiumGlass = {
  card: "bg-white/[0.02] backdrop-blur-xl border border-white/10",
  cardHover: "hover:bg-white/[0.04] hover:border-cyan-500/30 transition-all duration-300",
  strong: "bg-white/[0.05] backdrop-blur-2xl border border-white/20",
  subtle: "bg-white/[0.01] backdrop-blur-md border border-white/5",
} as const;

// ============================================
// 🎭 COMPONENT PRESETS
// ============================================
export const premiumPresets = {
  // Buttons
  button: {
    primary: "px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300",
    secondary: "px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:border-cyan-500/50 rounded-xl font-semibold transition-all duration-300",
    ghost: "px-6 py-3 hover:bg-white/5 rounded-lg font-medium transition-all duration-200",
  },
  // Cards
  card: {
    default: "p-8 md:p-10 lg:p-12 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl hover:border-cyan-500/30 transition-all duration-300",
    elevated: "p-8 md:p-10 lg:p-12 bg-white/[0.05] backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300",
    minimal: "p-6 md:p-8 bg-white/[0.01] backdrop-blur-md border border-white/5 rounded-xl",
  },
  // Badges
  badge: {
    default: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 backdrop-blur-sm",
    gradient: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25",
    outline: "inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-cyan-500/30 text-cyan-400",
  },
} as const;

// ============================================
// 📱 RESPONSIVE BREAKPOINTS
// ============================================
export const premiumBreakpoints = {
  sm: "640px",   // Mobile landscape
  md: "768px",   // Tablet
  lg: "1024px",  // Desktop
  xl: "1280px",  // Large desktop
  "2xl": "1536px", // Extra large
} as const;

// ============================================
// 🎪 HOVER EFFECTS
// ============================================
export const premiumHover = {
  lift: "hover:-translate-y-2 transition-transform duration-300",
  glow: "hover:shadow-2xl hover:shadow-cyan-500/20 transition-shadow duration-300",
  scale: "hover:scale-[1.02] transition-transform duration-300",
  magnetic: {
    whileHover: { y: -4, x: 4 },
    transition: { duration: 0.2, ease: "easeOut" },
  },
} as const;

// ============================================
// 📦 EXPORT ALL
// ============================================
export const premiumDesignSystem = {
  colors: premiumColors,
  spacing: premiumSpacing,
  typography: premiumTypography,
  animations: premiumAnimations,
  easing: premiumEasing,
  gradients: premiumGradients,
  glass: premiumGlass,
  presets: premiumPresets,
  breakpoints: premiumBreakpoints,
  hover: premiumHover,
} as const;

export default premiumDesignSystem;
