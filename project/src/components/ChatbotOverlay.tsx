import React, { useState } from 'react';
import { MessageCircle, X, Clock } from 'lucide-react';

const ChatbotOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chatbot Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="group bg-[#007AFF] hover:bg-[#0056CC] text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:shadow-[#007AFF]/25 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center space-x-3"
          aria-label="Open chat - Ask a question"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="hidden sm:block font-medium">Ask a question</span>
        </button>
      </div>

      {/* Maintenance Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Modal */}
          <div className="relative bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl animate-scale-in">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors duration-200"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="text-center">
              {/* Icon */}
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-orange-500" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#0A0A0A] mb-4">
                Chatbot Under Maintenance
              </h3>

              {/* Message */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our AI assistant is currently being updated with new features. 
                <br />
                <span className="font-semibold text-orange-600">Available shortly!</span>
              </p>

              {/* Alternative Actions */}
              <div className="space-y-3">
                <a 
                  href="https://calendly.com/gamati-ismael/training-session-booking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#007AFF] hover:bg-[#0056CC] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 inline-block"
                  onClick={() => setIsOpen(false)}
                >
                  Book a Free Consultation
                </a>
                <a 
                  href="mailto:ismael@value-connection.com"
                  className="w-full border-2 border-[#007AFF] text-[#007AFF] hover:bg-[#007AFF] hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 inline-block"
                  onClick={() => setIsOpen(false)}
                >
                  Send us an Email
                </a>
              </div>

              {/* Footer */}
              <p className="text-sm text-gray-500 mt-6">
                Thank you for your patience!
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotOverlay;