import { lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load components for better performance
const Services = lazy(() => import('./components/Services'));
const Projects = lazy(() => import('./components/Projects'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] bg-primary-600 text-white px-4 py-2 rounded-lg font-medium shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      >
        Skip to main content
      </a>
      <Navigation />
      <Suspense fallback={<LoadingSpinner fullScreen message="Loading..." />}>
        <main id="main-content">
          <Hero />
          <Services />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;