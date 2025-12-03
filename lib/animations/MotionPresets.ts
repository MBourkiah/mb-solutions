/**
 * MB-Solutions Motion Presets
 *
 * Cinematic, premium animation system inspired by Linear, Vercel, Framer
 *
 * Features:
 * - Global animation variants
 * - Smooth easing functions
 * - Scroll-based animations
 * - Staggered containers
 * - Parallax effects
 */

import { Variants, Transition } from "framer-motion";

// ============================================
// EASING CURVES (Premium Motion)
// ============================================

export const easings = {
  // Smooth, professional (most common)
  smooth: [0.25, 0.1, 0.25, 1] as const,

  // Snappy for UI interactions
  snappy: [0.4, 0, 0.2, 1] as const,

  // Elastic for playful elements
  elastic: [0.68, -0.55, 0.265, 1.55] as const,

  // Cinematic for hero sections
  cinematic: [0.22, 1, 0.36, 1] as const,

  // Soft for subtle movements
  soft: [0.16, 1, 0.3, 1] as const,
};

// ============================================
// TRANSITION PRESETS
// ============================================

export const transitions = {
  fast: { duration: 0.3, ease: easings.snappy } as Transition,
  normal: { duration: 0.5, ease: easings.smooth } as Transition,
  slow: { duration: 0.8, ease: easings.smooth } as Transition,
  cinematic: { duration: 1, ease: easings.cinematic } as Transition,

  spring: {
    type: "spring",
    stiffness: 300,
    damping: 30,
  } as Transition,

  springBouncy: {
    type: "spring",
    stiffness: 400,
    damping: 25,
  } as Transition,
} as const;

// ============================================
// FADE ANIMATIONS
// ============================================

export const fadeUp: Variants = {
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

export const fadeDown: Variants = {
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

export const fadeLeft: Variants = {
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

export const fadeRight: Variants = {
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

// ============================================
// SCALE ANIMATIONS
// ============================================

export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: transitions.normal,
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: transitions.fast,
  },
};

export const scaleInBounce: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: transitions.springBouncy,
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: transitions.fast,
  },
};

// ============================================
// BLUR FADE ANIMATIONS (Premium)
// ============================================

export const blurFadeUp: Variants = {
  initial: {
    opacity: 0,
    y: 30,
    filter: "blur(8px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: easings.smooth,
    },
  },
  exit: {
    opacity: 0,
    y: 15,
    filter: "blur(4px)",
    transition: transitions.fast,
  },
};

export const blurFadeIn: Variants = {
  initial: {
    opacity: 0,
    filter: "blur(10px)",
  },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: easings.smooth,
    },
  },
  exit: {
    opacity: 0,
    filter: "blur(5px)",
    transition: transitions.fast,
  },
};

// ============================================
// STAGGERED CONTAINERS
// ============================================

export const staggeredContainer: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const staggeredContainerFast: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

export const staggeredContainerSlow: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

// ============================================
// PARALLAX & SCROLL ANIMATIONS
// ============================================

export const parallaxScroll = (distance: number = 100): Variants => ({
  initial: { y: 0 },
  animate: {
    y: [-distance, distance],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 20,
        ease: "linear",
      },
    },
  },
});

export const floatSlow: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 8,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export const floatMedium: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-15, 15, -15],
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export const floatFast: Variants = {
  initial: { y: 0, rotate: 0 },
  animate: {
    y: [-20, 20, -20],
    rotate: [-5, 5, -5],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

// ============================================
// GLOW & PULSE ANIMATIONS
// ============================================

export const glowPulse: Variants = {
  initial: { opacity: 0.5 },
  animate: {
    opacity: [0.5, 1, 0.5],
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export const glowPulseSlow: Variants = {
  initial: { opacity: 0.3 },
  animate: {
    opacity: [0.3, 0.7, 0.3],
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

// ============================================
// HOVER ANIMATIONS
// ============================================

export const hoverLift = {
  initial: { y: 0 },
  hover: {
    y: -8,
    transition: transitions.fast,
  },
};

export const hoverScale = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: transitions.fast,
  },
};

export const hoverGlow = {
  initial: { filter: "brightness(1)" },
  hover: {
    filter: "brightness(1.1)",
    transition: transitions.fast,
  },
};

// ============================================
// VIEWPORT REVEAL ANIMATIONS
// ============================================

export const viewportReveal: Variants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easings.smooth,
    },
  },
};

export const viewportRevealBlur: Variants = {
  initial: {
    opacity: 0,
    y: 40,
    filter: "blur(10px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: easings.smooth,
    },
  },
};

// ============================================
// CARD ANIMATIONS
// ============================================

export const cardHover: Variants = {
  initial: { y: 0 },
  hover: {
    y: -4,
    transition: {
      duration: 0.3,
      ease: easings.snappy,
    },
  },
};

export const cardHoverGlow: Variants = {
  initial: {
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)"
  },
  hover: {
    boxShadow: "0 8px 40px rgba(26, 127, 216, 0.2)",
    transition: {
      duration: 0.3,
      ease: easings.snappy,
    },
  },
};

// ============================================
// ROTATION & SPIN ANIMATIONS
// ============================================

export const rotateIn: Variants = {
  initial: {
    opacity: 0,
    rotate: -10,
  },
  animate: {
    opacity: 1,
    rotate: 0,
    transition: transitions.normal,
  },
};

export const spinSlow = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Create custom stagger with specific delay
 */
export const createStaggerContainer = (
  staggerDelay: number = 0.1,
  childDelay: number = 0.2
): Variants => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: childDelay,
    },
  },
});

/**
 * Create custom fade direction
 */
export const createFadeDirection = (
  x: number = 0,
  y: number = 0
): Variants => ({
  initial: {
    opacity: 0,
    x,
    y,
  },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: transitions.normal,
  },
});

/**
 * Viewport configuration for scroll animations
 */
export const viewportConfig = {
  once: true,
  margin: "-100px",
  amount: 0.3,
} as const;

export const viewportConfigLazy = {
  once: true,
  margin: "-50px",
  amount: 0.1,
} as const;

export const viewportConfigEager = {
  once: false,
  margin: "-200px",
  amount: 0.5,
} as const;
