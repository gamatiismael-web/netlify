import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar, Globe } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "ismael@value-connection.com",
      description: "Send us an email anytime",
      color: "from-blue-500 to-cyan-500",
      href: "mailto:ismael@value-connection.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+44 7983 485102",
      description: "Mon-Fri from 9am to 6pm GMT",
      color: "from-green-500 to-emerald-500",
      href: "tel:+447983485102"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "United Kingdom",
      description: "Remote-first with global reach",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "< 24 hours",
      description: "We respond to all inquiries quickly",
      color: "from-orange-500 to-red-500"
    }
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-gray-50" ref={sectionRef}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-green-50 p-12 rounded-3xl border border-green-200">
            <MessageCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Message Sent Successfully!
            </h2>
            <p className="text-lg text-green-700 mb-6">
              Thank you for reaching out! We've received your message and will get back to you within 24 hours.
            </p>
            <p className="text-green-600">
              Check your email for a confirmation.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-6 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with AI automation? Let's start the conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {/* Hero Image */}
            <div className="mb-8">
              <img 
                src="https://images.pexels.com/photos/8386428/pexels-photo-8386428.jpeg?auto=compress&cs=tinysrgb&w=800&h=256" 
                alt="Contact our AI automation team" 
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
            
            <h3 className="text-2xl font-bold text-[#0A0A0A] mb-8">
              Let's Connect
            </h3>
            <p className="text-gray-600 mb-12 text-lg leading-relaxed">
              Whether you have questions about our services, want to discuss a project, or just want to say hello, we'd love to hear from you.
            </p>

            {/* Contact Cards */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => info.href && window.open(info.href, '_self')}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0A0A0A] group-hover:text-[#007AFF] transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-[#007AFF] font-medium">{info.details}</p>
                      <p className="text-gray-500 text-sm">{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <a 
                href="https://calendly.com/gamati-ismael/training-session-booking"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#007AFF] hover:bg-[#0056CC] text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 active:scale-95"
                aria-label="Book a training session - opens in new tab"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Training Session</span>
              </a>
              <a 
                href="#services"
                className="w-full border-2 border-[#007AFF] text-[#007AFF] hover:bg-[#007AFF] hover:text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 active:scale-95"
              >
                <Globe className="w-5 h-5" />
                <span>View Our Services</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#0A0A0A] mb-8">
                Send us a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name *"
                      required
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20 transition-all duration-300 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email *"
                      required
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20 transition-all duration-300 outline-none"
                    />
                  </div>
                </div>
                
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20 transition-all duration-300 outline-none"
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message *"
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20 transition-all duration-300 outline-none resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[#007AFF] hover:bg-[#0056CC] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-2xl hover:shadow-[#007AFF]/25 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;