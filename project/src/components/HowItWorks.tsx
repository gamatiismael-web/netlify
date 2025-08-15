import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Wrench, Rocket, CheckCircle, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      icon: MessageCircle,
      title: "Discovery Call",
      description: "We dive deep into your business processes to understand your unique challenges and identify automation opportunities that will deliver the highest impact.",
      details: ["Process mapping", "Pain point analysis", "ROI calculation", "Custom strategy"]
    },
    {
      icon: Wrench,
      title: "Build & Automate",
      description: "Our expert team designs and develops custom AI-powered workflows tailored specifically to your business needs, integrating seamlessly with your existing tools.",
      details: ["Custom workflow design", "AI integration", "Tool connections", "Testing & optimization"]
    },
    {
      icon: Rocket,
      title: "Launch & Support",
      description: "We thoroughly test, deploy, and optimize your automation systems, then provide ongoing support to ensure peak performance and continuous improvement.",
      details: ["System deployment", "Performance monitoring", "24/7 support", "Continuous optimization"]
    }
  ];

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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section id="process" className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-6 tracking-tight">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Our proven 3-step process transforms your business operations from manual to automated in just weeks
          </p>
          </div>
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <img 
              src="https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800&h=320" 
              alt="AI workflow automation process" 
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        
        {/* Interactive Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative group cursor-pointer transform transition-all duration-500 ${
                activeStep === index ? 'scale-105' : 'hover:scale-102'
              } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setActiveStep(index)}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#007AFF]/20 to-transparent transform translate-x-6 -translate-y-1/2">
                  <div className={`h-full bg-gradient-to-r from-[#007AFF] to-cyan-500 transition-all duration-1000 ${
                    activeStep > index ? 'w-full' : 'w-0'
                  }`}></div>
                </div>
              )}
              
              {/* Step Card */}
              <div className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border-2 relative z-10 ${
                activeStep === index 
                  ? 'border-[#007AFF] shadow-[#007AFF]/20' 
                  : 'border-gray-100 hover:border-[#007AFF]/30'
              }`}>
                {/* Step Number */}
                <div className={`absolute -top-4 -left-4 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                  activeStep === index 
                    ? 'bg-[#007AFF] text-white scale-110' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {activeStep > index ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    (index + 1).toString().padStart(2, '0')
                  )}
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  activeStep === index 
                    ? 'bg-gradient-to-r from-[#007AFF] to-cyan-500 text-white scale-110' 
                    : 'bg-[#007AFF]/10 text-[#007AFF] group-hover:bg-[#007AFF]/20'
                }`}>
                  <step.icon className="w-8 h-8" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-[#0A0A0A] mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {step.description}
                </p>
                
                {/* Details List */}
                <div className={`space-y-2 transition-all duration-500 ${
                  activeStep === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-[#007AFF] rounded-full"></div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Progress Indicator */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2">
            {steps.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeStep === index ? 'bg-[#007AFF] scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setActiveStep(index)}
              />
            ))}
          </div>
        </div>
        
        {/* Interactive CTA */}
        <div className="text-center">
          <a 
            href="https://calendly.com/gamati-ismael/training-session-booking"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#007AFF] hover:bg-[#0056CC] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#007AFF]/25 hover:scale-105 active:scale-95 flex items-center space-x-2 mx-auto"
            aria-label="Book a training session - opens in new tab"
          >
            <span>Start Your Automation Journey</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;