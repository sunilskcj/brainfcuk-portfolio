import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 flex justify-center pt-4" role="navigation" aria-label="Main navigation">
      <div className={`transition-all duration-300 rounded-2xl px-6 py-3 ${
        isScrolled
          ? 'backdrop-blur-lg bg-white/[0.02] dark:bg-white/[0.015] border border-white/10 dark:border-white/5 shadow-sm'
          : 'bg-transparent'
      }`} style={isScrolled ? {
        backdropFilter: 'blur(16px) saturate(220%)',
        WebkitBackdropFilter: 'blur(16px) saturate(220%)',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.025) 0%, rgba(255,255,255,0.008) 50%, rgba(255,255,255,0.02) 100%)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.02), inset 0 1px 0 rgba(255,255,255,0.08)'
      } : {}}>
        <div className="flex justify-between items-center min-w-[800px] max-w-4xl">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-raycast-900 dark:text-white">
              Vox
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-raycast-600 dark:text-raycast-400 hover:text-raycast-900 dark:hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-raycast-100 dark:hover:bg-raycast-800"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg bg-raycast-100 dark:bg-raycast-800 hover:bg-raycast-200 dark:hover:bg-raycast-700 transition-colors duration-200 border border-raycast-300 dark:border-raycast-700"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              aria-pressed={isDarkMode}
              type="button"
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4 text-amber-500" aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4 text-raycast-600" aria-hidden="true" />
              )}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2.5 rounded-lg bg-raycast-100 dark:bg-raycast-800 hover:bg-raycast-200 dark:hover:bg-raycast-700 border border-raycast-300 dark:border-raycast-700 focus:outline-none transition-colors duration-200"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                type="button"
              >
                {isMenuOpen ? (
                  <X className="h-4 w-4 text-raycast-600 dark:text-raycast-400" aria-hidden="true" />
                ) : (
                  <Menu className="h-4 w-4 text-raycast-600 dark:text-raycast-400" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Mobile Navigation - Positioned outside the floating container */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80">
          <div className="card-glass rounded-xl p-3 shadow-xl" role="menu">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-raycast-600 dark:text-raycast-400 hover:text-raycast-900 dark:hover:text-white block w-full text-center px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-raycast-100 dark:hover:bg-raycast-800"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;