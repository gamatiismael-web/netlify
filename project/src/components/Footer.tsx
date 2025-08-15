import React from 'react';
import { Zap, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-[#007AFF] rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">
                Value-Connection AI
              </span>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed mb-6">
              Transforming businesses through intelligent automation. We build AI-powered workflows that save time, reduce costs, and scale your operations.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4" />
                <a href="mailto:ismael@value-connection.com" className="hover:text-white transition-colors duration-200">
                  ismael@value-connection.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4" />
                <a href="tel:+447983485102" className="hover:text-white transition-colors duration-200">
                  +44 7983 485102
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="https://x.com/ValueConnec" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-[#007AFF] rounded-lg flex items-center justify-center transition-colors duration-200">
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">AI Automation</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">Workflow Integration</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">Custom Solutions</a></li>
              <li><a href="#quote" className="text-gray-400 hover:text-white transition-colors duration-200">Get Quote</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-white transition-colors duration-200">How It Works</a></li>
              <li><a href="#quote" className="text-gray-400 hover:text-white transition-colors duration-200">Get Quote</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 Value-Connection AI. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            Built for businesses ready to scale smarter.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;