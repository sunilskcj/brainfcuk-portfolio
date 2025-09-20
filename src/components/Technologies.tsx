import React, { useState } from 'react';
import { TECHNOLOGIES } from '../utils/constants';

const Technologies: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Technologies', color: 'gray' },
    { id: 'frontend', name: 'Frontend', color: 'blue' },
    { id: 'backend', name: 'Backend', color: 'green' },
    { id: 'database', name: 'Database', color: 'purple' },
    { id: 'cloud', name: 'Cloud', color: 'orange' },
    { id: 'mobile', name: 'Mobile', color: 'pink' },
    { id: 'devops', name: 'DevOps', color: 'red' }
  ];

  const filteredTechnologies = selectedCategory === 'all'
    ? TECHNOLOGIES
    : TECHNOLOGIES.filter(tech => tech.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      frontend: 'from-blue-500 to-blue-600',
      backend: 'from-green-500 to-green-600',
      database: 'from-purple-500 to-purple-600',
      cloud: 'from-orange-500 to-orange-600',
      mobile: 'from-pink-500 to-pink-600',
      devops: 'from-red-500 to-red-600'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <section id="technologies" className="section-padding bg-white dark:bg-gray-800">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We work with cutting-edge technologies to deliver robust, scalable, and maintainable solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTechnologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group card hover:scale-105 text-center relative overflow-hidden"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(tech.category)} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>

                {/* Name */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {tech.name}
                </h3>

                {/* Proficiency Bar */}
                <div className="mb-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Proficiency</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">{tech.proficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`bg-gradient-to-r ${getCategoryColor(tech.category)} h-2 rounded-full transition-all duration-500 ease-out`}
                      style={{ width: selectedCategory === 'all' || selectedCategory === tech.category ? `${tech.proficiency}%` : '0%' }}
                    ></div>
                  </div>
                </div>

                {/* Category Badge */}
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium capitalize ${
                  tech.category === 'frontend' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                  tech.category === 'backend' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
                  tech.category === 'database' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' :
                  tech.category === 'cloud' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' :
                  tech.category === 'mobile' ? 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300' :
                  'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                }`}>
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">20+</div>
            <div className="text-gray-600 dark:text-gray-300">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">6</div>
            <div className="text-gray-600 dark:text-gray-300">Core Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-300">Modern Stack</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-300">Learning</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;