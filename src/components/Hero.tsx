import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-primary-400/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-primary-600/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="flex flex-col items-center text-center min-h-[85vh] justify-center max-w-5xl mx-auto">
          {/* Main Heading */}
          <div className="mb-12 animate-fade-in">
            <h1 className="text-display mb-8">
              <span className="block">Design for Outcomes.</span>
              <span className="block">Build with <span className="text-gradient">Empathy</span>.</span>
              <span className="block">Grow with Purpose.</span>
            </h1>
            <p className="text-body-lg max-w-3xl mx-auto mb-8">
              Vox is a full-service digital agency delivering comprehensive solutions across strategy, design, technology, and marketing.
              We serve clients globally with ROI-driven approaches and cutting-edge expertise.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-16 animate-slide-up max-w-2xl">
            <div className="text-center card-glass py-8 px-4">
              <div className="text-3xl font-bold text-raycast-900 dark:text-white mb-2">30+</div>
              <div className="text-body text-sm">Countries Served</div>
            </div>
            <div className="text-center card-glass py-8 px-4">
              <div className="text-3xl font-bold text-raycast-900 dark:text-white mb-2">4+</div>
              <div className="text-body text-sm">Years Experience</div>
            </div>
            <div className="text-center card-glass py-8 px-4">
              <div className="text-3xl font-bold text-raycast-900 dark:text-white mb-2">100%</div>
              <div className="text-body text-sm">ROI-Driven</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={scrollToContact}
              className="btn-primary group flex items-center justify-center space-x-2 text-base px-8 py-4"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={scrollToServices}
              className="btn-secondary group flex items-center justify-center space-x-2 text-base px-8 py-4"
            >
              <span>Explore Services</span>
              <Sparkles className="w-4 h-4" />
            </button>
          </div>

          {/* Service Areas Preview */}
          <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-body mb-6">Full-service digital solutions</p>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
              {['Strategy & Planning', 'UI/UX Design', 'Web Development', 'Mobile Apps', 'E-commerce', 'SEO & Marketing', 'Cloud Solutions', 'WordPress'].map((service) => (
                <span
                  key={service}
                  className="card-glass px-4 py-2 text-sm font-medium text-raycast-700 dark:text-raycast-300 hover:bg-white/90 dark:hover:bg-raycast-800/90 transition-colors cursor-default"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-60">
          <div className="w-6 h-10 border-2 border-raycast-400 dark:border-raycast-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-raycast-500 dark:bg-raycast-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;