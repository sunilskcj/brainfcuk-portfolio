import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useTheme } from './useTheme';

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should initialize with system preference', () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.isDarkMode).toBeDefined();
    expect(typeof result.current.isDarkMode).toBe('boolean');
  });

  it('should toggle theme from light to dark', () => {
    const { result } = renderHook(() => useTheme());
    const initialMode = result.current.isDarkMode;

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.isDarkMode).toBe(!initialMode);
  });

  it('should toggle theme from dark to light', () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.toggleTheme();
    });

    const firstToggle = result.current.isDarkMode;

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.isDarkMode).toBe(!firstToggle);
  });

  it('should persist theme preference to localStorage', () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.toggleTheme();
    });

    const savedValue = localStorage.getItem('darkMode');
    expect(savedValue).toBe(JSON.stringify(result.current.isDarkMode));
  });

  it('should add dark class to document when dark mode is enabled', () => {
    const { result } = renderHook(() => useTheme());

    // Set to dark mode
    if (!result.current.isDarkMode) {
      act(() => {
        result.current.toggleTheme();
      });
    }

    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('should remove dark class from document when dark mode is disabled', () => {
    const { result } = renderHook(() => useTheme());

    // Set to light mode
    if (result.current.isDarkMode) {
      act(() => {
        result.current.toggleTheme();
      });
    }

    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
});
