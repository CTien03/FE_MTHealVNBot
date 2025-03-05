// import React, { useState, useEffect } from 'react';
// import { IoSend } from "react-icons/io5";
// import { BiMessageDetail } from "react-icons/bi";

// const formatText = (text) => {
//   return text
//     .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // **chữ in đậm** → <strong>chữ in đậm</strong>
//     .replace(/- (.*?)/g, '<br>• $1') // "- danh sách" → xuống dòng với "• danh sách"
//     .replace(/(\d+\.)/g, '<br><strong>$1</strong>'); // "1. Tiêu đề" → Xuống dòng + in đậm số thứ tự
// };


// const ChatbotInterface = () => {
//   const [message, setMessage] = useState('');
//   const [chatHistory, setChatHistory] = useState(() => {
//     const savedHistory = localStorage.getItem('chatHistory');
//     return savedHistory ? JSON.parse(savedHistory) : [];
//   });

//   const welcomeMessage = "Hello! Đây là Chatbot, trợ lý đắc lực dành cho bạn! Bạn cần hỗ trợ gì hôm nay? 😊";

//   useEffect(() => {
//     localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
//   }, [chatHistory]);

//   const sendMessage = async () => {
//     if (message.trim() === '') return;

//     const newChat = { sender: "user", text: message };
//     setChatHistory(prev => [...prev, newChat]);

//     try {
//       const response = await fetch("https://be-mthealvnbot.onrender.com/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ question: message }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         if (data.success) {
//           const botResponse = { sender: "bot", text: data.response };
//           setChatHistory(prev => [...prev, botResponse]);
//         } else {
//           setChatHistory(prev => [...prev, { sender: "bot", text: "Có lỗi xảy ra, vui lòng thử lại." }]);
//         }
//       } else {
//         setChatHistory(prev => [...prev, { sender: "bot", text: "Lỗi kết nối với API." }]);
//       }
//     } catch (error) {
//       setChatHistory(prev => [...prev, { sender: "bot", text: "Lỗi kết nối với server." }]);
//     }

//     setMessage('');
//   };

//   return (
//     <div className="bg-gray-50 pt-4">
//       {/* <div className="max-w-6xl mx-auto grid grid-cols-12 gap-4 h-[calc(100vh-2rem)]"> */}
//       <div className="max-w-6xl mx-auto grid grid-cols-12 gap-4 max-h-[80vh] h-[80vh]">

        
//         {/* Lịch sử trò chuyện */}
//         <div className="col-span-3 bg-white rounded-lg p-4 shadow-sm">
//           <h2 className="text-lg font-medium mb-4">Lịch sử trò chuyện</h2>
//           <div className="text-gray-500 text-sm max-h-[calc(100vh-200px)] overflow-y-auto">
//             {chatHistory.length === 0 ? "Chưa có cuộc trò chuyện nào" : chatHistory.map((chat, index) => (
//               <div key={index} className="mb-1 text-gray-700 text-sm">
//                 {chat.sender === "user" ? "Bạn" : "Chatbot"}: {chat.text.slice(0, 20)}{chat.text.length > 20 ? "..." : ""}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Khu vực chat */}
//         <div className="col-span-6 flex flex-col bg-white rounded-lg shadow-sm">
//           <div className="flex-1 p-4 overflow-y-auto max-h-[calc(100vh-200px)]">
            
//             {/* Tin nhắn chào mừng của chatbot */}
//             <div className="flex items-start mb-4">
//               <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">🤖</div>
//               <div className="bg-blue-100 rounded-lg p-3 max-w-[80%]">
//                 <p className="text-gray-800">{welcomeMessage}</p>
//               </div>
//             </div>

//             {/* Hiển thị lịch sử chat */}
//             {chatHistory.map((chat, index) => (
//               <div key={index} className={`flex mb-4 ${chat.sender === "user" ? "justify-end" : "justify-start"}`}>
//                 {chat.sender === "bot" && (
//                   <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">🤖</div>
//                 )}
//                 <div
//                   className={`p-3 max-w-[80%] rounded-lg ${
//                     chat.sender === "user" ? "bg-gray-200 text-right" : "bg-blue-100 text-left"
//                   }`}
//                   dangerouslySetInnerHTML={{ __html: formatText(chat.text) }}
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Ô nhập tin nhắn */}
//           <div className="border-t p-4">
//             <div className="relative">
//               <input
//                 type="text"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 placeholder="Nhập câu hỏi tại đây..."
//                 className="w-full p-3 pr-12 rounded-lg border focus:outline-none focus:border-blue-500"
//               />
//               <button
//                 onClick={sendMessage}
//                 className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white"
//               >
//                 <IoSend size={18} />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* FAQs */}
//         <div className="col-span-3 bg-white rounded-lg p-4 shadow-sm">
//           <h2 className="text-lg font-medium mb-4">Những câu hỏi thường gặp</h2>
//           <div className="space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto">
//             {[
//               "Làm sao để biết tôi có bị rối loạn thần kinh không?",
//               "Chẩn đoán sẽ như thế nào?",
//               "Các phương pháp điều trị hiệu quả?"
//             ].map((faq, index) => (
//               <div key={index} className="flex items-start space-x-2 cursor-pointer" onClick={() => setMessage(faq)}>
//                 <BiMessageDetail size={16} className="mt-1 text-gray-400" />
//                 <span className="text-gray-600">{faq}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatbotInterface;





import React, { useState, useEffect } from 'react';
import { IoSend } from "react-icons/io5";
import { BiMessageDetail } from "react-icons/bi";

const formatText = (text) => {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // **chữ in đậm** → <strong>chữ in đậm</strong>
    .replace(/- (.*?)/g, '<br>• $1') // "- danh sách" → xuống dòng với "• danh sách"
    .replace(/(\d+\.)/g, '<br><strong>$1</strong>'); // "1. Tiêu đề" → Xuống dòng + in đậm số thứ tự
};

const ChatbotInterface = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState(() => {
    const savedHistory = localStorage.getItem('chatHistory');
    return savedHistory ? JSON.parse(savedHistory) : [];
  });
  const [faqs, setFaqs] = useState([]);
  const [filteredFaqs, setFilteredFaqs] = useState([]);
  const [loading, setLoading] = useState(false);

  const welcomeMessage = "Hello! Đây là Chatbot, trợ lý đắc lực dành cho bạn! Bạn cần hỗ trợ gì hôm nay? 😊";

  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
  }, [chatHistory]);

  useEffect(() => {
    const fetchFAQs = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://be-mthealvnbot.onrender.com/api/question");
        const data = await response.json();
        console.log("Dữ liệu API:", data); // Kiểm tra dữ liệu API
        setFaqs(data.message.map(item => item.Question)); // Lấy câu hỏi từ dữ liệu API
        setFilteredFaqs(data.message.slice(0, 10).map(item => item.Question)); // Lấy 10 câu hỏi đầu tiên
      } catch (error) {
        console.error("Lỗi khi tải câu hỏi:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFAQs();
  }, []);

  const sendMessage = async () => {
    if (message.trim() === '') return;

    const newChat = { sender: "user", text: message };
    setChatHistory(prev => [...prev, newChat]);

    try {
      const response = await fetch("https://be-mthealvnbot.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: message }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          const botResponse = { sender: "bot", text: data.response };
          setChatHistory(prev => [...prev, botResponse]);
        } else {
          setChatHistory(prev => [...prev, { sender: "bot", text: "Có lỗi xảy ra, vui lòng thử lại." }]);
        }
      } else {
        setChatHistory(prev => [...prev, { sender: "bot", text: "Lỗi kết nối với API." }]);
      }
    } catch (error) {
      setChatHistory(prev => [...prev, { sender: "bot", text: "Lỗi kết nối với server." }]);
    }

    setMessage('');
  };

  // Hàm lọc các câu hỏi khi người dùng nhập vào
  const filterFAQs = (query) => {
    if (!query) {
      setFilteredFaqs(faqs.slice(0, 10)); // Hiển thị 10 câu hỏi đầu tiên nếu không có truy vấn
    } else {
      const filtered = faqs.filter(faq => faq.toLowerCase().includes(query.toLowerCase()));
      setFilteredFaqs(filtered.slice(0, 10)); // Giới hạn kết quả là 10 câu hỏi
    }
  };

  return (
    <div className="bg-gray-50 pt-4">
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-4 max-h-[80vh] h-[80vh]">

        {/* Lịch sử trò chuyện */}
        <div className="col-span-3 bg-white rounded-lg p-4 shadow-sm">
          <h2 className="text-lg font-medium mb-4">Lịch sử trò chuyện</h2>
          <div className="text-gray-500 text-sm max-h-[calc(100vh-200px)] overflow-y-auto">
            {chatHistory.length === 0 ? "Chưa có cuộc trò chuyện nào" : chatHistory.map((chat, index) => (
              <div key={index} className="mb-1 text-gray-700 text-sm">
                {chat.sender === "user" ? "Bạn" : "Chatbot"}: {chat.text.slice(0, 20)}{chat.text.length > 20 ? "..." : ""}
              </div>
            ))}
          </div>
        </div>

        {/* Khu vực chat */}
        <div className="col-span-6 flex flex-col bg-white rounded-lg shadow-sm">
          <div className="flex-1 p-4 overflow-y-auto max-h-[calc(100vh-200px)]">
            
            {/* Tin nhắn chào mừng của chatbot */}
            <div className="flex items-start mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">🤖</div>
              <div className="bg-blue-100 rounded-lg p-3 max-w-[80%]">
                <p className="text-gray-800">{welcomeMessage}</p>
              </div>
            </div>

            {/* Hiển thị lịch sử chat */}
            {chatHistory.map((chat, index) => (
              <div key={index} className={`flex mb-4 ${chat.sender === "user" ? "justify-end" : "justify-start"}`}>
                {chat.sender === "bot" && (
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">🤖</div>
                )}
                <div
                  className={`p-3 max-w-[80%] rounded-lg ${
                    chat.sender === "user" ? "bg-gray-200 text-right" : "bg-blue-100 text-left"
                  }`}
                  dangerouslySetInnerHTML={{ __html: formatText(chat.text) }}
                />
              </div>
            ))}
          </div>

          {/* Ô nhập tin nhắn */}
          <div className="border-t p-4">
            <div className="relative">
              <input
                type="text"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  filterFAQs(e.target.value); // Lọc câu hỏi khi người dùng nhập
                }}
                placeholder="Nhập câu hỏi tại đây..."
                className="w-full p-3 pr-12 rounded-lg border focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={sendMessage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white"
              >
                <IoSend size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="col-span-3 bg-white rounded-lg p-4 shadow-sm">
          <h2 className="text-lg font-medium mb-4">Những câu hỏi thường gặp</h2>
          <div className="space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto">
            {loading ? (
              <div>Đang tải câu hỏi...</div>
            ) : filteredFaqs.length === 0 ? (
              <div>Không có câu hỏi nào.</div>
            ) : (
              filteredFaqs.map((faq, index) => (
                <div key={index} className="flex items-start space-x-2 cursor-pointer" onClick={() => setMessage(faq)}>
                  <BiMessageDetail size={16} className="mt-1 text-gray-400" />
                  <span className="text-gray-600">{faq}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotInterface;
