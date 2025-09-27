import React, { useState, useRef } from 'react';
import { Code2, Smartphone, Cloud, Users, ArrowRight, TrendingUp, Palette, Megaphone, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import { SERVICES } from '../utils/constants';

const iconMap = {
  Code2,
  Smartphone,
  Cloud,
  Users,
  TrendingUp,
  Palette,
  Megaphone,
  ShoppingCart
};

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'strategy', label: 'Strategy' },
    { id: 'design', label: 'Design' },
    { id: 'technology', label: 'Technology' },
    { id: 'marketing', label: 'Marketing' }
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(service => {
        // Map service IDs to categories
        const categoryMap: { [key: string]: string[] } = {
          'strategy': ['research-planning', 'system-analysis', 'ux-prototyping', 'technical-consultation'],
          'design': ['branding', 'ui-design', 'graphic-design'],
          'technology': ['web-development', 'mobile-development', 'ecommerce-solutions', 'wordpress-development', 'cloud-solutions'],
          'marketing': ['seo-optimization', 'sem-advertising', 'social-media-marketing', 'social-media-advertising']
        };
        return categoryMap[activeCategory]?.includes(service.id) || false;
      });

  const itemsPerSlide = 4;
  const maxSlides = Math.ceil(filteredServices.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  const currentServices = filteredServices.slice(
    currentSlide * itemsPerSlide,
    (currentSlide + 1) * itemsPerSlide
  );

  return (
    <section id="services" className="section-padding bg-gray-50 dark:bg-gray-900 bg-code-symbols terminal-cursor">
      <div className="container-custom">
        {/* Header with Category Tabs */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              There's a <span className="text-gradient">service</span> for that.
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive solutions across all business verticals.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1 border border-gray-300 dark:border-gray-700">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setCurrentSlide(0);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-primary-500 text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          {maxSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
            </>
          )}

          {/* Services Grid */}
          <div
            ref={containerRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500 ease-in-out"
            key={`${activeCategory}-${currentSlide}`}
          >
            {currentServices.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];

              return (
                <div
                  key={`${service.id}-${currentSlide}`}
                  className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-primary-600 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 h-full">
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">
                            {service.title}
                          </h4>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                    </div>

                    {/* Service Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    {/* Technologies Preview */}
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        {service.technologies.slice(0, 2).join(', ')}
                        {service.technologies.length > 2 && ` +${service.technologies.length - 2} more`}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 flex-shrink-0"></div>
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          +{service.features.length - 3} more
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Slide Indicators */}
          {maxSlides > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: maxSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    currentSlide === index
                      ? 'bg-primary-500 w-8'
                      : 'bg-gray-400 dark:bg-gray-500 hover:bg-gray-500 dark:hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Browse More Link */}
        <div className="text-left mt-12">
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors group"
          >
            <span className="text-lg font-medium">Browse thousands more</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;