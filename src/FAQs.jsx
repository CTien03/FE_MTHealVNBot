import React, { useState } from 'react';
import { IoAdd, IoRemove } from "react-icons/io5";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "Chatbot hoạt động như thế nào?",
      answer: "Chatbot hoạt động bằng cách từ câu hỏi của người dùng, sử dụng kỹ thuật tìm văn bản liên quan đến câu hỏi trong bộ dữ liệu đã được vector hóa (text similarity) và lưu trữ thông qua vector database. Giúp lấy ra những đoạn văn bản có liên quan sau đó dùng mô hình ngôn ngữ lớn (LLM) để sinh câu trả lời."
    },
    {
      question: "Cách sử dụng chatbot để tra cứu thông tin",
      answer: "Chatbot cung cấp giao diện đơn giản để tra cứu thông tin. Bạn chỉ cần nhập câu hỏi vào ô chat và nhấn gửi. Chatbot sẽ tự động tìm kiếm và trả lời dựa trên nguồn dữ liệu đã được cấu hình."
    },
    {
      question: "Thông tin từ chatbot có đáng tin cậy không?",
      answer: "Chatbot được xây dựng dựa trên các nguồn dữ liệu đáng tin cậy. Tuy nhiên, bạn nên kiểm chứng thông tin từ nhiều nguồn khác nhau để đảm bảo tính chính xác."
    },
    {
      question: "Tôi có thể liên hệ hỗ trợ như thế nào?",
      answer: "Bạn có thể liên hệ hỗ trợ qua email support@nttu.edu.vn hoặc hotline 1900 2039 trong giờ hành chính."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-center text-2xl font-bold text-blue-600 mb-8">
        Những câu hỏi thường gặp (FAQs)
      </h1>
      
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <button
              className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50"
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              <span className="text-gray-400">
                {openIndex === index ? 
                  <IoRemove size={20} /> : 
                  <IoAdd size={20} />
                }
              </span>
            </button>
            
            {openIndex === index && (
              <div className="p-4 bg-gray-50 border-t">
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;