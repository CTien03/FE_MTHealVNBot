import React from 'react';
import { NavLink } from 'react-router-dom';

const ChatbotLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#E0FFF9] to-[#E6F0FF]">
      {/* Navigation Bar */}

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center pt-20">
        {/* Robot Image */}
        <div className="w-32 h-32 mx-auto mb-8">
          <div className="relative w-full h-full">
            <div className="absolute w-4 h-4 bg-blue-400 rounded-full -top-2 left-1/2 transform -translate-x-1/2 animate-bounce"></div>
            <div className="w-full h-full bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="w-16 h-16 relative">
                <div className="absolute inset-0 bg-black rounded-t-2xl"></div>
                <div className="absolute w-3 h-3 bg-cyan-400 rounded-full left-3 top-6"></div>
                <div className="absolute w-3 h-3 bg-cyan-400 rounded-full right-3 top-6"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <h1 className="text-4xl font-bold mb-4">
          Xin chào! Mình là{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
           MTHealVNBot
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-gray-600 mb-8">
          Giúp bạn giải đáp thắc mắc, tra cứu thông tin một cách nhanh chóng và chính xác nhất!
        </p>

        {/* CTA Button */}
        <NavLink to={"/chat"} className="px-8 py-3 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors">
          BẮT ĐẦU NGAY
        </NavLink>
      </div>
    </div>
  );
};

export default ChatbotLanding;