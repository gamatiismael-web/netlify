import React, { useState, useEffect } from 'react';
import { ArrowRight, Bot, Play, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Automate', 'Optimize', 'Transform', 'Scale'];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-[#0A0A0A] flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,122,255,0.1),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-[#007AFF] rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-white/30 rounded-full animate-ping"></div>
      <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-[#007AFF]/50 rounded-full animate-bounce"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
          {/* Animated Icon */}
          <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="w-16 h-16 bg-[#007AFF]/10 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 hover:bg-[#007AFF]/20 transition-all duration-300 hover:scale-110 cursor-pointer group">
              <Bot className="w-8 h-8 text-[#007AFF] group-hover:animate-pulse" />
              <Sparkles className="w-4 h-4 text-[#007AFF] absolute translate-x-6 -translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
          
          {/* Animated Headlines */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-none">
              <span className="inline-block">
                <span className="text-[#007AFF] transition-all duration-500">
                  {words[currentWord]}
                </span>
              </span>{' '}
              Your Business.
              <br />
              <span className="text-gray-300">Unlock Your Time.</span>
            </h1>
          </div>
          
          {/* Animated Subheading */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Value-Connection AI builds smart systems that save you hours daily using custom AI-powered automation.
            </p>
          </div>
          
          {/* Interactive CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a 
              href="#quote"
              className="group bg-[#007AFF] hover:bg-[#0056CC] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-2xl hover:shadow-[#007AFF]/25 hover:scale-105 active:scale-95"
            >
              <span>Get Your Custom Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
            <a 
              href="#services"
              className="group text-white hover:text-gray-300 px-8 py-4 font-medium text-lg transition-all duration-300 border border-white/20 rounded-xl hover:border-white/40 hover:bg-white/5 flex items-center space-x-2"
            >
              <Play className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span>View Our Services</span>
            </a>
          </div>
          </div>
          
          {/* Right Image */}
          <div className={`transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=500" 
                alt="AI and automation technology" 
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#007AFF]/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;