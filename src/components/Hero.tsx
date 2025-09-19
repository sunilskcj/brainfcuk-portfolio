import React from 'react';
import { ArrowRight, Sparkles, Zap, Code2 } from 'lucide-react';

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
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 text-primary-300/20 animate-float">
          <Code2 size={60} />
        </div>
        <div className="absolute top-40 right-20 text-secondary-300/20 animate-float" style={{ animationDelay: '1s' }}>
          <Zap size={40} />
        </div>
        <div className="absolute bottom-40 left-20 text-accent-300/20 animate-float" style={{ animationDelay: '2s' }}>
          <Sparkles size={50} />
        </div>
        <div className="absolute bottom-20 right-10 text-primary-300/20 animate-float" style={{ animationDelay: '0.5s' }}>
          <Code2 size={35} />
        </div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="flex flex-col items-center text-center min-h-[80vh] justify-center">
          {/* Main Heading */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="inline-block">We Build</span>{' '}
              <span className="text-gradient-alt bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Digital Dreams
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-200 mb-4">
              <span className="typewriter">Young. Passionate. Experienced. Ready to Hustle.</span>
            </div>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              BrainFcuk delivers cutting-edge web applications, mobile solutions, and cloud consulting.
              4+ years of experience building trust through innovation for startups, fintech, and healthcare.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-12 animate-slide-up">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">4+</div>
              <div className="text-gray-300 text-sm md:text-base">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300 text-sm md:text-base">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-300 text-sm md:text-base">Client Satisfaction</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={scrollToContact}
              className="btn-primary group flex items-center justify-center space-x-2 text-lg px-8 py-4"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToServices}
              className="btn-secondary group flex items-center justify-center space-x-2 text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-900"
            >
              <span>Explore Services</span>
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
          </div>

          {/* Tech Stack Preview */}
          <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-gray-400 mb-4">Powered by cutting-edge technologies</p>
            <div className="flex flex-wrap justify-center gap-6 opacity-80">
              {['.NET', 'React', 'TypeScript', 'PostgreSQL', 'AWS', 'GCP', 'Docker', 'Kubernetes'].map((tech) => (
                <span
                  key={tech}
                  className="glass-effect px-4 py-2 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;