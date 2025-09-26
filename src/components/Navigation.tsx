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
    { name: 'Technologies', href: '#technologies' },
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
    <nav className="fixed w-full top-0 z-50 flex justify-center pt-4">
      <div className={`transition-all duration-300 rounded-2xl px-6 py-3 ${
        isScrolled
          ? 'backdrop-blur-xl bg-white/80 dark:bg-raycast-900/80 border border-raycast-200/50 dark:border-raycast-800/50 shadow-lg'
          : 'bg-transparent'
      }`}>
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
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4 text-amber-500" />
              ) : (
                <Moon className="h-4 w-4 text-raycast-600" />
              )}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2.5 rounded-lg bg-raycast-100 dark:bg-raycast-800 hover:bg-raycast-200 dark:hover:bg-raycast-700 border border-raycast-300 dark:border-raycast-700 focus:outline-none transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <X className="h-4 w-4 text-raycast-600 dark:text-raycast-400" />
                ) : (
                  <Menu className="h-4 w-4 text-raycast-600 dark:text-raycast-400" />
                )}
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Mobile Navigation - Positioned outside the floating container */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80">
          <div className="card-glass rounded-xl p-3 shadow-xl">
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