/**
 * UI and Performance Constants
 * Extracted magic numbers for better maintainability
 */

// Animation Constants
export const ANIMATION = {
  STAGGER_INCREMENT: 100, // ms between each staggered animation
  FLOAT_DELAY: 1000, // ms delay for floating animations
  FLOAT_DELAY_SECOND: 2000, // ms delay for second floating element
  FADE_IN_DURATION: 600, // ms for fade-in animations
  SLIDE_UP_DELAY: 300, // ms delay for slide-up animations
  SLIDE_UP_DELAY_EXTENDED: 600, // ms extended delay for slide-up
  CAROUSEL_TRANSITION: 500, // ms for carousel transitions
} as const;

// Scroll Constants
export const SCROLL = {
  THRESHOLD: 10, // px before applying scrolled state
  THROTTLE_DELAY: 100, // ms for scroll event throttling
} as const;

// Project Progress (in percentages)
export const PROJECT_PROGRESS = {
  FINTECH_APP: 75,
  HEALTHCARE_PORTAL: 0,
  STARTUP_MVP: 0,
} as const;

// Carousel/Slider Constants
export const CAROUSEL = {
  ITEMS_PER_SLIDE: 4,
  AUTO_PLAY_DELAY: 5000, // ms
} as const;

// Form Constants
export const FORM = {
  SUBMIT_DELAY: 2000, // ms simulated submission delay
  RESET_DELAY: 3000, // ms before resetting form after success
  SUCCESS_DISPLAY_DURATION: 3000, // ms to display success message
} as const;

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

// Z-Index Layers
export const Z_INDEX = {
  DROPDOWN: 10,
  STICKY: 20,
  FIXED: 30,
  MODAL_BACKDROP: 40,
  MODAL: 50,
  POPOVER: 60,
  TOOLTIP: 70,
  NOTIFICATION: 80,
  SKIP_LINK: 100,
} as const;

// Loading States
export const LOADING = {
  MIN_DISPLAY_TIME: 300, // ms minimum time to show loading spinner
  TIMEOUT: 30000, // ms maximum time to wait before timing out
} as const;

// Debounce/Throttle Delays
export const DELAYS = {
  SEARCH_DEBOUNCE: 300, // ms
  RESIZE_THROTTLE: 150, // ms
  SCROLL_THROTTLE: 100, // ms
  INPUT_DEBOUNCE: 500, // ms
} as const;

export default {
  ANIMATION,
  SCROLL,
  PROJECT_PROGRESS,
  CAROUSEL,
  FORM,
  BREAKPOINTS,
  Z_INDEX,
  LOADING,
  DELAYS,
};
