/**
 * Throttle function to limit execution rate
 * @param func Function to throttle
 * @param delay Delay in milliseconds
 * @returns Throttled function
 */
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout | null = null;
  let lastExecuted = 0;

  return (...args: Parameters<T>) => {
    const now = Date.now();

    if (now - lastExecuted >= delay) {
      func(...args);
      lastExecuted = now;
    } else {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
        lastExecuted = Date.now();
      }, delay - (now - lastExecuted));
    }
  };
};

/**
 * Debounce function to delay execution
 * @param func Function to debounce
 * @param delay Delay in milliseconds
 * @returns Debounced function
 */
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};
