/**
 * Application configuration from environment variables
 * All environment variables must be prefixed with VITE_ to be accessible in Vite
 */

export const config = {
  // API Configuration
  apiUrl: import.meta.env.VITE_API_URL || 'https://api.yourdomain.com',

  // Contact Information
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL || 'hello@vox.agency',
    phone: import.meta.env.VITE_CONTACT_PHONE || '+1-555-123-4567',
  },

  // Analytics
  analytics: {
    trackingId: import.meta.env.VITE_GA_TRACKING_ID || '',
    measurementId: import.meta.env.VITE_GA_MEASUREMENT_ID || '',
    enabled: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  },

  // Social Media
  social: {
    twitter: import.meta.env.VITE_TWITTER_HANDLE || '@vox_agency',
    linkedin: import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/company/vox-agency',
    github: import.meta.env.VITE_GITHUB_URL || 'https://github.com/vox-agency',
  },

  // Site Configuration
  site: {
    url: import.meta.env.VITE_SITE_URL || 'https://yourdomain.com',
    name: import.meta.env.VITE_SITE_NAME || 'Vox Digital Agency',
  },

  // Feature Flags
  features: {
    pwa: import.meta.env.VITE_ENABLE_PWA === 'true',
  },

  // Environment
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
  mode: import.meta.env.MODE,
} as const;

export default config;
