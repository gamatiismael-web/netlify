import React, { useState, useEffect, useRef } from 'react';
import { Bot, MessageSquare, Globe, Calendar, ArrowRight, CheckCircle, Star } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Bot,
      title: "Lead Capture Bot with CRM Integration",
      description: "Intelligent chatbots that capture leads 24/7 and automatically sync with your CRM system for seamless follow-up.",
      features: [
        "24/7 automated lead qualification",
        "CRM integration (HubSpot, Salesforce, Pipedrive)",
        "Smart conversation flows",
        "Lead scoring and routing",
        "Multi-channel deployment"
      ],
      color: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      icon: MessageSquare,
      title: "Super Customer Support Chatbot",
      description: "AI-powered support system that handles customer inquiries instantly, reducing response time and improving satisfaction.",
      features: [
        "Instant customer query resolution",
        "Knowledge base integration",
        "Escalation to human agents",
        "Multi-language support",
        "Analytics and insights"
      ],
      color: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      icon: Globe,
      title: "New Era Website",
      description: "Modern, AI-enhanced websites that adapt to user behavior and optimize for conversions automatically.",
      features: [
        "AI-powered personalization",
        "Conversion optimization",
        "Mobile-first responsive design",
        "SEO optimization",
        "Performance analytics"
      ],
      color: "from-green-500 to-emerald-500",
      popular: false
    },
    {
      icon: Calendar,
      title: "24/7 Booking System",
      description: "Intelligent appointment scheduling system that handles bookings around the clock with automated confirmations and reminders.",
      features: [
        "24/7 automated appointment scheduling",
        "Calendar integration (Google, Outlook, Calendly)",
        "Smart availability management",
        "Automated confirmations and reminders",
        "Multi-timezone support"
      ],
      color: "from-orange-500 to-red-500",
      popular: false
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
        setActiveService((prev) => (prev + 1) % services.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible, services.length]);

  return (
    <section id="services" className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-6 tracking-tight">
            Our AI-Powered Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business operations with our comprehensive suite of AI automation solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border-2 ${
                activeService === index 
                  ? 'border-[#007AFF] shadow-[#007AFF]/20 scale-105' 
                  : 'border-gray-100 hover:border-[#007AFF]/30'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setActiveService(index)}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#007AFF] to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Service Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Service Content */}
              <h3 className="text-2xl font-bold text-[#0A0A0A] mb-4 group-hover:text-[#007AFF] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Service Navigation Dots */}
        <div className="flex justify-center space-x-2 mb-12">
          {services.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeService === index ? 'bg-[#007AFF] scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => setActiveService(index)}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative text-center bg-gradient-to-r from-[#007AFF] to-cyan-500 p-12 rounded-3xl text-white overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400" 
              alt="AI automation background" 
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="relative z-10">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss which AI solution is perfect for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://calendly.com/gamati-ismael/training-session-booking" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-[#007AFF] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-95 inline-block text-center"
              aria-label="Book a training session - opens in new tab"
            >
              Book Training Session
            </a>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#007AFF] transition-all duration-300 hover:scale-105 active:scale-95">
              View Case Studies
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;