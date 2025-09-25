import React, { useState } from 'react';
import { Tag, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../utils/constants';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'in-progress':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'planned':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'fintech':
        return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
      case 'web':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'mobile':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'cloud':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing our expertise through real-world projects that solve complex business challenges
            with innovative technology solutions.
          </p>
        </div>

        {/* Featured Project - Currently Working On */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Currently Building</h3>
            <p className="text-gray-600 dark:text-gray-300">Our latest project in active development</p>
          </div>

          {PROJECTS.filter(project => project.status === 'in-progress').map((project) => (
            <div
              key={project.id}
              className="card hover:scale-102 bg-gradient-to-br from-white to-primary-50 dark:from-gray-800 dark:to-primary-900/20 border-2 border-primary-200 dark:border-primary-700"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Project Image */}
                <div className="order-2 md:order-1">
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/50 dark:to-secondary-900/50 rounded-xl flex items-center justify-center">
                    <div className="text-primary-400 dark:text-primary-500 text-6xl font-bold">
                      {project.title.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                      {project.status === 'in-progress' ? '🚧 In Progress' : project.status}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(project.category)}`}>
                      <Tag className="w-3 h-3 inline mr-1" />
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.longDescription}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Built with:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">Progress</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>

                  <button className="btn-primary">
                    View Project Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Upcoming Projects</h3>
            <p className="text-gray-600 dark:text-gray-300">Exciting projects in our pipeline</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.filter(project => project.status !== 'in-progress').map((project, index) => (
              <div
                key={project.id}
                className="card hover:scale-105 group cursor-pointer"
                onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="text-gray-400 dark:text-gray-500 text-4xl font-bold">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                    {project.status === 'planned' ? '📋 Planned' : project.status}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(project.category)}`}>
                    <Tag className="w-3 h-3 inline mr-1" />
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded text-xs">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                  {selectedProject === project.id ? 'Hide Details' : 'Learn More'}
                  <ArrowRight className={`w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform ${selectedProject === project.id ? 'rotate-90' : ''}`} />
                </div>

                {/* Expanded Details */}
                {selectedProject === project.id && (
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 animate-slide-up">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.longDescription}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="card bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
            <h3 className="text-3xl font-bold mb-4">Have a Project in Mind?</h3>
            <p className="text-xl mb-8 opacity-90">
              Let's turn your ideas into reality with our proven expertise and passion for innovation.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;