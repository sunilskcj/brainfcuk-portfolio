import { useCallback } from 'react';

/**
 * Custom hook for smooth scrolling to sections
 * @returns Object with scrollToSection function
 */
export const useScrollTo = () => {
  const scrollToSection = useCallback((selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return { scrollToSection, scrollToTop };
};
