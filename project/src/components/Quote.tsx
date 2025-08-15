import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare } from 'lucide-react';

const Quote = () => {
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

  return (
    <section id="quote" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        {/* Header */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-6 tracking-tight">
            Get Your Custom Quote
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Tell us about your project and we'll provide a detailed proposal tailored to your specific needs
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-blue-800 font-medium">
              💬 <strong>Quick Quote:</strong> Use our AI chat bot in the bottom right corner for instant pricing and answers to your questions!
            </p>
          </div>
          </div>
          
          {/* Right Image */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <img 
              src="https://images.pexels.com/photos/8386425/pexels-photo-8386425.jpeg?auto=compress&cs=tinysrgb&w=800&h=384" 
              alt="AI consultation and custom quotes" 
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;