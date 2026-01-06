/**
 * MB-Solutions Animation Library
 *
 * This file re-exports all animations from MotionPresets.ts
 * for easy importing throughout the application.
 *
 * Usage:
 * import { fadeUp, scaleIn, staggeredContainer } from "@/lib/animations";
 */

export * from "./MotionPresets";

// Also export for backwards compatibility
export {
  fadeUp as fadeInUp,
  staggeredContainer as staggerContainer,
  fadeUp as staggerItem,
  cardHover,
} from "./MotionPresets";
