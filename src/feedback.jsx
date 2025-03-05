// import React, { useState } from 'react';

// const FeedbackForm = () => {
//   const [formData, setFormData] = useState({
//     feedback: '',
//     email: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log('Form submitted:', formData);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <div className="text-center mb-6">
//         <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
//           Góp ý 
//         </h1>
//         <p className="text-gray-600 mt-2">
//           Sự đóng góp ý kiến từ các bạn sẽ là sự hỗ trợ đắc lực giúp chúng tôi ngày càng tốt hơn hoàn thiện sản phẩm hơn.
//         </p>
//       </div>

//       <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 space-y-4">
//         <div>
//           <textarea
//             name="feedback"
//             value={formData.feedback}
//             onChange={handleChange}
//             placeholder="Nhập phản hồi của bạn tại đây!"
//             className="w-full h-32 p-3 border rounded-lg resize-none focus:outline-none focus:border-blue-500 bg-white"
//           />
//         </div>

//         <div>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email của bạn"
//             className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500 bg-white"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
//         >
//           GỬI Ý KIẾN
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FeedbackForm;



import React, { useState } from 'react';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Gửi feedback đến server Python
    const response = await fetch('https://be-mthealvnbot.onrender.com/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ feedback }),
    });

    if (response.ok) {
      setIsSubmitted(true);  // Đánh dấu đã gửi thành công
      setFeedback(''); // Xóa nội dung nhập vào

      // Sau 4 giây, reset form
      setTimeout(() => {
        setIsSubmitted(false);
      }, 2000);  // 2 giây
    } else {
      console.error('Có lỗi xảy ra khi gửi feedback');
    }
  };

  const handleChange = (e) => {
    setFeedback(e.target.value);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Góp ý
        </h1>
        <p className="text-gray-600 mt-2">
          Sự đóng góp ý kiến từ các bạn sẽ là sự hỗ trợ đắc lực giúp chúng tôi ngày càng tốt hơn hoàn thiện sản phẩm hơn.
        </p>
      </div>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 space-y-4">
          <div>
            <textarea
              name="feedback"
              value={feedback}
              onChange={handleChange}
              placeholder="Nhập phản hồi của bạn tại đây!"
              className="w-full h-32 p-3 border rounded-lg resize-none focus:outline-none focus:border-blue-500 bg-white"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            GỬI Ý KIẾN
          </button>
        </form>
      ) : (
        <div className="bg-white rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold text-green-500">Cảm ơn bạn đã góp ý!</h2>
          <p className="text-gray-600 mt-2">Chúng tôi sẽ xem xét phản hồi của bạn ngay lập tức.</p>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
