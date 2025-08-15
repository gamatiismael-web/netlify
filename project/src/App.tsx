import React, { useEffect } from 'react';
import { preloadImage } from './utils/lazyLoad';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Quote from './components/Quote';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ChatbotOverlay from './components/ChatbotOverlay';

function App() {
  useEffect(() => {
    // Preload critical images
    const criticalImages = [
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=500'
    ];
    
    criticalImages.forEach(src => {
      preloadImage(src).catch(() => {
        // Silently handle preload failures
      });
    });

    // Smooth scrolling for anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleClick));

    // Add scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleClick));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <PainPoints />
      <Services />
      <HowItWorks />
      <Quote />
      <Contact />
      <CTA />
      <Footer />
      <ChatbotOverlay />
    </div>
  );
}

export default App;