import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Calendar, Sparkles, Zap, TrendingUp } from 'lucide-react';

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      className="py-24 bg-[#0A0A0A] relative overflow-hidden" 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#007AFF]/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(0,122,255,0.15),transparent_50%)]"></div>
      
      {/* Mouse follower effect */}
      <div 
        className="absolute w-96 h-96 bg-[#007AFF]/5 rounded-full blur-3xl transition-all duration-300 pointer-events-none"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-[#007AFF] rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-white/30 rounded-full animate-ping"></div>
      <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-[#007AFF]/50 rounded-full animate-bounce"></div>
      <Sparkles className="absolute top-32 right-32 w-6 h-6 text-[#007AFF]/30 animate-pulse" />
      <Zap className="absolute bottom-40 right-10 w-4 h-4 text-white/20 animate-bounce" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Headlines */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Start saving time{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007AFF] to-cyan-400 animate-pulse">
                today.
              </span>
            </h2>
          </div>
          
          {/* Subheading */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let AI handle the busywork. You focus on what matters.
            </p>
          </div>
          
          {/* Interactive CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a 
              href="https://calendly.com/gamati-ismael/training-session-booking" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-[#007AFF] to-[#0056CC] hover:from-[#0056CC] hover:to-[#003d99] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-2xl hover:shadow-[#007AFF]/25 hover:scale-105 active:scale-95 relative overflow-hidden"
              aria-label="Book a training session - opens in new tab"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <Calendar className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Book a Free Strategy Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
            </a>
            <button className="group text-white hover:text-gray-300 px-8 py-4 font-medium text-lg transition-all duration-300 border border-white/20 rounded-xl hover:border-white/40 hover:bg-white/5 hover:scale-105 active:scale-95">
              View Case Studies
            </button>
          </div>
          
          {/* Interactive Value Props */}
          <div className={`grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {[
              { icon: Calendar, title: "30-Day", subtitle: "Money-back guarantee" },
              { icon: Zap, title: "24/7", subtitle: "Technical support" },
              { icon: TrendingUp, title: "Free", subtitle: "Strategy consultation" }
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center group cursor-pointer hover:scale-110 transition-all duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#007AFF]/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-white group-hover:text-[#007AFF] transition-colors duration-300" />
                </div>
                <div className="text-2xl font-bold text-white mb-2 group-hover:text-[#007AFF] transition-colors duration-300">
                  {item.title}
                </div>
                <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {item.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;