import React from 'react';
import { Heart, Target, Zap, Users, Trophy, Clock, Globe, Code } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion-Driven',
      description: 'We pour our hearts into every project, treating your success as our own.'
    },
    {
      icon: Target,
      title: 'Results-Focused',
      description: 'Every line of code we write serves a purpose in achieving your business goals.'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We stay ahead of trends, bringing cutting-edge solutions to traditional problems.'
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'We believe in collaboration, not just delivery. Your vision shapes our execution.'
    }
  ];

  const stats = [
    { icon: Trophy, value: '4+', label: 'Years Experience', description: 'Industry expertise' },
    { icon: Clock, value: '24/7', label: 'Dedication', description: 'Always learning' },
    { icon: Globe, value: '100%', label: 'Remote-First', description: 'Global mindset' },
    { icon: Code, value: '50+', label: 'Projects', description: 'Successfully delivered' }
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-800">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-gradient">BrainFcuk</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're not just another development agency. We're young, passionate professionals
            who hustle hard to build trust through innovation.
          </p>
        </div>

        {/* Main Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h3>
            <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                <strong className="text-gray-900 dark:text-white">BrainFcuk</strong> was born from a simple belief:
                technology should solve real problems, not create new ones. As young professionals with
                <strong className="text-primary-600 dark:text-primary-400"> 4+ years of industry experience</strong>,
                we've seen the gap between what businesses need and what they get.
              </p>
              <p>
                We specialize in <strong className="text-gray-900 dark:text-white">fintech and healthcare</strong>
                because these industries impact lives. When we build a financial platform or healthcare solution,
                we're not just writing code – we're enabling businesses to serve people better.
              </p>
              <p>
                Our approach is different. We don't just deliver projects; we build partnerships.
                We hustle hard, stay curious, and never stop learning because technology never stops evolving.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl border-l-4 border-primary-500">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Our Mission</h4>
              <p className="text-gray-700 dark:text-gray-300">
                To empower startups and businesses with innovative technology solutions that drive growth,
                build trust, and create lasting impact in their industries.
              </p>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-2xl p-8 flex flex-col justify-center items-center text-center">
              <div className="text-6xl mb-6">🧠</div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Think Different</h4>
              <p className="text-gray-600 dark:text-gray-300">
                We challenge conventional approaches and bring fresh perspectives to every project.
              </p>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-primary-500 text-white p-4 rounded-xl animate-float">
              <Code className="w-8 h-8" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-secondary-500 text-white p-4 rounded-xl animate-float" style={{ animationDelay: '1s' }}>
              <Zap className="w-8 h-8" />
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            What Drives Us
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={value.title}
                  className="card hover:scale-105 text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Why Choose BrainFcuk?</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-2">🚀 Fast Delivery</div>
              <p className="opacity-90">We move fast without compromising quality</p>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">🎯 Laser Focus</div>
              <p className="opacity-90">Specialized in fintech, healthcare, and startups</p>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">🤝 True Partnership</div>
              <p className="opacity-90">Your success is our success</p>
            </div>
          </div>
          <p className="text-xl mb-8 opacity-90">
            Ready to work with a team that's as passionate about your project as you are?
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
            <span>Let's Build Something Amazing</span>
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;