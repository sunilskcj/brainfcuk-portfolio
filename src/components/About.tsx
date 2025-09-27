import React from 'react';
import { Heart, Target, Zap, Users, Trophy, Clock, Globe, Code } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Outcome-Driven',
      description: 'Every strategy, design, and development decision is made with measurable outcomes in mind.'
    },
    {
      icon: Heart,
      title: 'Built with Empathy',
      description: 'We deeply understand user needs and business challenges to create meaningful solutions.'
    },
    {
      icon: Zap,
      title: 'Purpose-Led Growth',
      description: 'Sustainable growth through strategic planning and purposeful execution across all channels.'
    },
    {
      icon: Globe,
      title: 'Global Expertise',
      description: 'Serving clients in 30+ countries with adaptable solutions and diverse perspectives.'
    }
  ];

  const stats = [
    { icon: Globe, value: '30+', label: 'Countries Served', description: 'Global reach' },
    { icon: Trophy, value: '4+', label: 'Years Experience', description: 'Combined expertise' },
    { icon: Target, value: '100%', label: 'ROI-Driven', description: 'Results focused' },
    { icon: Code, value: '200+', label: 'Projects', description: 'Successfully delivered' }
  ];

  return (
    <section id="about" className="section-padding gradient-bg">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-heading mb-6">
            About <span className="text-gradient">Vox</span>
          </h2>
          <p className="text-body-lg max-w-3xl mx-auto">
            We're a full-service digital agency that designs for outcomes, builds with empathy,
            and grows with purpose. Serving clients globally with comprehensive digital solutions.
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
                <strong className="text-raycast-900 dark:text-white">Vox</strong> is a comprehensive digital agency
                with <strong className="text-primary-600">4+ years of combined experience</strong> serving clients
                across <strong className="text-primary-600">30+ countries</strong>. We bridge strategy, design,
                technology, and marketing to deliver complete digital solutions.
              </p>
              <p>
                Our expertise spans <strong className="text-gray-900 dark:text-white">research & planning,
                UI/UX design, web & mobile development, e-commerce, and digital marketing</strong>.
                From startups to enterprises, we adapt our engagement models to meet diverse business needs.
              </p>
              <p>
                What sets us apart is our <strong className="text-gray-900 dark:text-white">ROI-driven approach</strong>
                and commitment to measurable outcomes. We don't just build beautiful products – we create
                strategic digital assets that drive growth and deliver results.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl border-l-4 border-primary-500">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Our Mission</h4>
              <p className="text-gray-700 dark:text-gray-300">
                To empower businesses with strategic digital solutions that drive measurable outcomes,
                foster meaningful connections, and create sustainable growth through innovative design,
                cutting-edge technology, and data-driven marketing.
              </p>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-2xl p-8 flex flex-col justify-center items-center text-center">
              <div className="text-6xl mb-6">🧠</div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Full-Service Excellence</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Strategy, design, technology, and marketing unified under one roof for seamless execution.
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
                  className="liquid-glass-card hover:liquid-glass-hover text-center group rounded-2xl p-6"
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
                className="text-center group liquid-glass rounded-2xl p-6 hover:liquid-glass-hover"
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
        <div className="card-glass rounded-3xl p-8 md:p-12 text-center border-2 border-primary-200 dark:border-primary-800">
          <h3 className="text-heading mb-8 text-raycast-900 dark:text-white">Why Choose Vox?</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-2">🌍 Global Reach</div>
              <p className="opacity-90">Serving clients across 30+ countries with local insights</p>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">📊 ROI-Driven</div>
              <p className="opacity-90">Every decision backed by data and focused on outcomes</p>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">🔧 Full-Service</div>
              <p className="opacity-90">Complete digital solutions from strategy to execution</p>
            </div>
          </div>
          <p className="text-xl mb-8 opacity-90">
            Ready to partner with a digital agency that delivers measurable results across strategy, design, technology, and marketing?
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-primary px-8 py-4 text-base inline-flex items-center space-x-2"
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