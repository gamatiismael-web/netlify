import React, { useState, useEffect, useRef } from 'react';
import { Clock, PhoneOff, UserX, MessageSquareX, TrendingDown, AlertTriangle } from 'lucide-react';

const PainPoints = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const painPoints = [
    {
      icon: Clock,
      title: "Time-consuming scheduling",
      description: "Hours wasted on back-and-forth emails and phone calls just to book appointments",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: PhoneOff,
      title: "Missed calls/messages or emails",
      description: "Lost opportunities when customers can't reach you outside business hours",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: UserX,
      title: "No-shows",
      description: "Empty appointment slots costing you time and revenue without proper reminders",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MessageSquareX,
      title: "No feedback/review collection system",
      description: "Missing valuable insights to improve services and build social proof",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingDown,
      title: "Lack of lead collection system",
      description: "Potential customers slipping away without a proper system to capture and nurture leads",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(239,68,68,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="w-12 h-12 text-red-500 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Are These Problems Killing Your Business?
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every day you delay automation, you're losing money, time, and customers to competitors who've already made the switch
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className={`group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${point.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                <point.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                <span className="font-black">{point.title}</span>
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {point.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              <span className="font-black">Stop Losing Money</span> to These Problems
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Our AI automation solutions eliminate every single one of these pain points in just weeks
            </p>
            <a 
              href="https://calendly.com/gamati-ismael/training-session-booking"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-red-500/25 hover:scale-105 active:scale-95 inline-flex items-center space-x-2"
              aria-label="Book a training session - opens in new tab"
            >
              <span>Fix These Problems Now</span>
              <AlertTriangle className="w-5 h-5 group-hover:animate-pulse" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;