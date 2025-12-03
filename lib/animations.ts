/**
 * Premium Animation Presets for Framer Motion
 * Apple/Linear/Vercel-inspired easing & timing
 */

import { Transition, Variants } from "framer-motion";

// ============================================
// EASING FUNCTIONS (Apple-Style)
// ============================================
export const easing = {
  // Standard smooth easing (most common)
  smooth: [0.25, 0.1, 0.25, 1] as const,

  // Snappy for quick interactions (buttons, hovers)
  snappy: [0.4, 0.0, 0.2, 1] as const,

  // Bouncy for playful elements
  bounce: [0.68, -0.55, 0.265, 1.55] as const,

  // Spring-like for natural motion
  spring: [0.175, 0.885, 0.32, 1.275] as const,
};

// ============================================
// TRANSITION PRESETS
// ============================================
export const transitions = {
  fast: { duration: 0.2, ease: easing.snappy } as Transition,
  normal: { duration: 0.4, ease: easing.smooth } as Transition,
  slow: { duration: 0.8, ease: easing.smooth } as Transition,

  // Spring physics (natural, organic)
  spring: {
    type: "spring",
    stiffness: 260,
    damping: 20,
  } as Transition,

  springBouncy: {
    type: "spring",
    stiffness: 400,
    damping: 25,
  } as Transition,
};

// ============================================
// ANIMATION VARIANTS
// ============================================

// Fade In from Bottom (most common scroll animation)
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: transitions.normal,
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: transitions.fast,
  },
};

// Fade In from Top
export const fadeInDown: Variants = {
  initial: {
    opacity: 0,
    y: -40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: transitions.normal,
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: transitions.fast,
  },
};

// Fade In from Left
export const fadeInLeft: Variants = {
  initial: {
    opacity: 0,
    x: -40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: transitions.normal,
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: transitions.fast,
  },
};

// Fade In from Right
export const fadeInRight: Variants = {
  initial: {
    opacity: 0,
    x: 40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: transitions.normal,
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: transitions.fast,
  },
};

// Scale In (cards, modals)
export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: transitions.spring,
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: transitions.fast,
  },
};

// Blur In (premium effect)
export const blurIn: Variants = {
  initial: {
    opacity: 0,
    filter: "blur(10px)",
  },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    transition: transitions.slow,
  },
  exit: {
    opacity: 0,
    filter: "blur(10px)",
    transition: transitions.fast,
  },
};

// Stagger Container (for lists, grids)
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

// Stagger Item (child elements)
export const staggerItem: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: transitions.spring,
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: transitions.fast,
  },
};

// Hero Text Reveal (word-by-word)
export const textReveal: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing.smooth,
    },
  },
};

// Gradient Shift (animated gradients)
export const gradientShift: Variants = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 5,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

// Float Effect (subtle hover)
export const float: Variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

// Slide In from Bottom (mobile menus)
export const slideInBottom: Variants = {
  initial: {
    y: "100%",
  },
  animate: {
    y: 0,
    transition: transitions.spring,
  },
  exit: {
    y: "100%",
    transition: transitions.fast,
  },
};

// Slide In from Top (notifications)
export const slideInTop: Variants = {
  initial: {
    y: "-100%",
  },
  animate: {
    y: 0,
    transition: transitions.spring,
  },
  exit: {
    y: "-100%",
    transition: transitions.fast,
  },
};

// Rotate In (icons, badges)
export const rotateIn: Variants = {
  initial: {
    opacity: 0,
    rotate: -10,
  },
  animate: {
    opacity: 1,
    rotate: 0,
    transition: transitions.springBouncy,
  },
};

// Card Hover (subtle lift)
export const cardHover: Variants = {
  initial: {
    y: 0,
  },
  hover: {
    y: -8,
    transition: transitions.spring,
  },
};

// Button Press Effect
export const buttonTap: Variants = {
  initial: {
    scale: 1,
  },
  tap: {
    scale: 0.95,
  },
};

// ============================================
// SCROLL ANIMATION CONFIGS
// ============================================

// Default scroll trigger (when element enters viewport)
export const scrollTrigger = {
  initial: "initial",
  whileInView: "animate",
  viewport: { once: true, amount: 0.3 }, // Trigger when 30% visible
};

// Repeat scroll animation
export const scrollTriggerRepeat = {
  initial: "initial",
  whileInView: "animate",
  whileHover: "hover",
  viewport: { once: false, amount: 0.5 },
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Create staggered delay for list items
 * @param index - Item index
 * @param baseDelay - Base delay in seconds
 */
export const staggerDelay = (index: number, baseDelay = 0.1) => ({
  transition: {
    delay: index * baseDelay,
  },
});

/**
 * Get viewport config based on screen size
 * @param mobile - Mobile amount (0-1)
 * @param desktop - Desktop amount (0-1)
 */
export const responsiveViewport = (mobile = 0.2, desktop = 0.3) => ({
  viewport: {
    once: true,
    amount: typeof window !== "undefined" && window.innerWidth < 768 ? mobile : desktop,
  },
});

// ============================================
// PREMIUM CINEMATIC ANIMATIONS
// ============================================

// Blur Fade Up (Hero Headlines)
export const blurFadeUp: Variants = {
  initial: {
    opacity: 0,
    y: 60,
    filter: "blur(20px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: easing.smooth,
    },
  },
};

// Blur Scale (Premium Cards)
export const blurScale: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
    filter: "blur(15px)",
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: easing.snappy,
    },
  },
};

// Parallax Float (Images, Mockups)
export const parallaxFloat: Variants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 8,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

// Micro Tilt (Hover Interaction)
export const microTilt: Variants = {
  hover: {
    rotateY: 5,
    rotateX: -5,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: easing.snappy,
    },
  },
};

// Ambient Glow (Cards, Buttons)
export const ambientGlow: Variants = {
  hover: {
    boxShadow: "0 0 40px rgba(26, 127, 216, 0.4)",
    transition: {
      duration: 0.3,
      ease: easing.smooth,
    },
  },
};

// Smooth Stagger (Apple-style)
export const smoothStagger: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
      when: "beforeChildren",
    },
  },
};

// Stagger Child Item
export const staggerChild: Variants = {
  initial: {
    opacity: 0,
    y: 30,
    filter: "blur(10px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: easing.smooth,
    },
  },
};

// Slide Fade (Section Transitions)
export const slideFade: Variants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: easing.smooth,
    },
  },
};

// Organic Scale (Natural entrance)
export const organicScale: Variants = {
  initial: {
    opacity: 0,
    scale: 0.85,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 0.8,
    },
  },
};

// Soft Bounce (CTA Buttons)
export const softBounce: Variants = {
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.98,
  },
};

// Reveal Text (Word by Word)
export const revealText: Variants = {
  initial: {
    opacity: 0,
    y: 20,
    filter: "blur(8px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: easing.smooth,
    },
  },
};

// Cinematic Entrance (Hero Sections)
export const cinematicEntrance: Variants = {
  initial: {
    opacity: 0,
    y: 100,
    scale: 0.9,
    filter: "blur(30px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};
