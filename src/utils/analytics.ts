import { config } from './config';

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      targetId: any,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Initialize Google Analytics
 */
export const initAnalytics = (): void => {
  if (!config.analytics.enabled || !config.analytics.trackingId) {
    console.log('Analytics disabled or tracking ID not set');
    return;
  }

  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${config.analytics.trackingId}`;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', config.analytics.trackingId, {
    send_page_view: true,
  });
};

/**
 * Track custom events
 * @param eventName - Name of the event
 * @param eventParams - Additional event parameters
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, unknown>
): void => {
  if (!config.analytics.enabled || !window.gtag) {
    console.log('Analytics not initialized or disabled');
    return;
  }

  window.gtag('event', eventName, eventParams);
};

/**
 * Track page views
 * @param url - Page URL
 * @param title - Page title
 */
export const trackPageView = (url: string, title?: string): void => {
  if (!config.analytics.enabled || !window.gtag) {
    return;
  }

  window.gtag('config', config.analytics.trackingId, {
    page_path: url,
    page_title: title,
  });
};

/**
 * Track form submissions
 * @param formName - Name of the form
 * @param formData - Form data
 */
export const trackFormSubmit = (
  formName: string,
  formData?: Record<string, unknown>
): void => {
  trackEvent('form_submit', {
    form_name: formName,
    ...formData,
  });
};

/**
 * Track button clicks
 * @param buttonName - Name/ID of the button
 * @param location - Location of the button on the page
 */
export const trackButtonClick = (
  buttonName: string,
  location?: string
): void => {
  trackEvent('button_click', {
    button_name: buttonName,
    location,
  });
};

/**
 * Track outbound links
 * @param url - Destination URL
 * @param linkText - Text of the link
 */
export const trackOutboundLink = (url: string, linkText?: string): void => {
  trackEvent('outbound_link', {
    destination_url: url,
    link_text: linkText,
  });
};

/**
 * Track errors
 * @param error - Error object or message
 * @param fatal - Whether the error is fatal
 */
export const trackError = (error: Error | string, fatal = false): void => {
  const errorMessage = error instanceof Error ? error.message : error;
  const errorStack = error instanceof Error ? error.stack : undefined;

  trackEvent('exception', {
    description: errorMessage,
    fatal,
    stack: errorStack,
  });
};

export default {
  init: initAnalytics,
  trackEvent,
  trackPageView,
  trackFormSubmit,
  trackButtonClick,
  trackOutboundLink,
  trackError,
};
