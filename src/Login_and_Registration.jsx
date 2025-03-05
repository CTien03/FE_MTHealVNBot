// import React, { useState } from 'react';

// const LoginRegistrationPage = () => {
//   const [activeTab, setActiveTab] = useState('login');
  
//   return (
//     <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 p-4">
//       <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-2xl font-bold text-blue-600 mb-2">
//             AIO Chatbot
//           </h1>
//           <p className="text-gray-600">
//             {activeTab === 'login' 
//               ? 'Đăng nhập vào tài khoản của bạn'
//               : 'Tạo tài khoản mới'}
//           </p>
//         </div>
        
//         {/* Tabs */}
//         <div className="flex mb-8 bg-gray-100 rounded-lg p-1">
//           <button
//             className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors duration-150
//               ${activeTab === 'login' 
//                 ? 'bg-white text-blue-600 shadow-sm' 
//                 : 'text-gray-500 hover:text-gray-700'}`}
//             onClick={() => setActiveTab('login')}
//           >
//             Đăng nhập
//           </button>
//           <button
//             className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors duration-150
//               ${activeTab === 'register' 
//                 ? 'bg-white text-blue-600 shadow-sm' 
//                 : 'text-gray-500 hover:text-gray-700'}`}
//             onClick={() => setActiveTab('register')}
//           >
//             Đăng ký
//           </button>
//         </div>

//         {/* Login Form */}
//         {activeTab === 'login' && (
//           <form className="space-y-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
//                 placeholder="Nhập email của bạn"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Mật khẩu
//               </label>
//               <input
//                 type="password"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
//                 placeholder="Nhập mật khẩu"
//               />
//             </div>
//             <div className="flex items-center justify-between">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                 />
//                 <span className="ml-2 text-sm text-gray-600">
//                   Ghi nhớ đăng nhập
//                 </span>
//               </label>
//               <a
//                 href="#"
//                 className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
//               >
//                 Quên mật khẩu?
//               </a>
//             </div>
//             <button
//               type="submit"
//               className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
//             >
//               Đăng nhập
//             </button>
//           </form>
//         )}

//         {/* Register Form */}
//         {activeTab === 'register' && (
//           <form className="space-y-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Họ và tên
//               </label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
//                 placeholder="Nhập họ và tên"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
//                 placeholder="Nhập email của bạn"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Mật khẩu
//               </label>
//               <input
//                 type="password"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
//                 placeholder="Nhập mật khẩu"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Xác nhận mật khẩu
//               </label>
//               <input
//                 type="password"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
//                 placeholder="Nhập lại mật khẩu"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
//             >
//               Đăng ký
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LoginRegistrationPage;




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const LoginRegistrationPage = () => {
//   const [activeTab, setActiveTab] = useState('login');
//   const [formData, setFormData] = useState({
//     fullname: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     try {
//       if (activeTab === 'login') {
//         const response = await axios.post('https://be-mthealvnbot.onrender.com/login', {
//           email: formData.email,
//           password: formData.password
//         });
//         setMessage(response.data.message);
//         if (response.data.success) {
//           navigate('/home');
//         }
//       } else {
//         if (formData.password !== formData.confirmPassword) {
//           setMessage('Mật khẩu xác nhận không khớp!');
//           return;
//         }
//         const response = await axios.post('https://be-mthealvnbot.onrender.com/register', {
//           fullname: formData.fullname,
//           email: formData.email,
//           password: formData.password
//         });
//         setMessage(response.data.message);
//         if (response.data.success) {
//           setActiveTab('login');
//         }
//       }
//     } catch (error) {
//       setMessage(error.response?.data?.message || 'Có lỗi xảy ra!');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 p-4">
//       <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
//         <div className="text-center mb-8">
//           <h1 className="text-2xl font-bold text-blue-600 mb-2">AIO Chatbot</h1>
//           <p className="text-gray-600">{activeTab === 'login' ? 'Đăng nhập vào tài khoản của bạn' : 'Tạo tài khoản mới'}</p>
//         </div>
//         <div className="flex mb-8 bg-gray-100 rounded-lg p-1">
//           <button className={`flex-1 py-2 rounded-lg ${activeTab === 'login' ? 'bg-white text-blue-600' : 'text-gray-500'}`} onClick={() => setActiveTab('login')}>Đăng nhập</button>
//           <button className={`flex-1 py-2 rounded-lg ${activeTab === 'register' ? 'bg-white text-blue-600' : 'text-gray-500'}`} onClick={() => setActiveTab('register')}>Đăng ký</button>
//         </div>
//         {message && <p className="text-red-500 text-center mb-4">{message}</p>}
//         <form className="space-y-6" onSubmit={handleSubmit}>
//           {activeTab === 'register' && (
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
//               <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" placeholder="Nhập họ và tên" required />
//             </div>
//           )}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//             <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" placeholder="Nhập email" required />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Mật khẩu</label>
//             <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" placeholder="Nhập mật khẩu" required />
//           </div>
//           {activeTab === 'register' && (
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Xác nhận mật khẩu</label>
//               <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" placeholder="Nhập lại mật khẩu" required />
//             </div>
//           )}
//           <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-lg">{activeTab === 'login' ? 'Đăng nhập' : 'Đăng ký'}</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginRegistrationPage;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginRegistrationPage = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      navigate('/home');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsLoading(true);

    try {
      if (!validateEmail(formData.email)) {
        setMessage('Email không hợp lệ!');
        return;
      }

      if (!validatePassword(formData.password)) {
        setMessage('Mật khẩu phải có ít nhất 6 ký tự!');
        return;
      }

      if (activeTab === 'login') {
        const response = await axios.post('https://be-mthealvnbot.onrender.com/login', {
          email: formData.email,
          password: formData.password
        });
        setMessage(response.data.message);
        if (response.data.success) {
          localStorage.setItem('authToken', response.data.token);
          setTimeout(() => navigate('/home'), 1000);
        }
      } else {
        if (formData.password !== formData.confirmPassword) {
          setMessage('Mật khẩu xác nhận không khớp!');
          return;
        }
        const response = await axios.post('https://be-mthealvnbot.onrender.com/register', {
          fullname: formData.fullname,
          email: formData.email,
          password: formData.password
        });
        setMessage(response.data.message);
        if (response.data.success) {
          setActiveTab('login');
        }
      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message || 'Có lỗi xảy ra!');
      } else if (error.request) {
        setMessage('Không có phản hồi từ máy chủ. Vui lòng thử lại sau.');
      } else {
        setMessage('Có lỗi xảy ra khi gửi yêu cầu.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-blue-600 mb-2">MTHealVNBot</h1>
          <p className="text-gray-600">{activeTab === 'login' ? 'Đăng nhập vào tài khoản của bạn' : 'Tạo tài khoản mới'}</p>
        </div>
        <div className="flex mb-8 bg-gray-100 rounded-lg p-1">
          <button className={`flex-1 py-2 rounded-lg ${activeTab === 'login' ? 'bg-white text-blue-600' : 'text-gray-500'}`} onClick={() => setActiveTab('login')}>Đăng nhập</button>
          <button className={`flex-1 py-2 rounded-lg ${activeTab === 'register' ? 'bg-white text-blue-600' : 'text-gray-500'}`} onClick={() => setActiveTab('register')}>Đăng ký</button>
        </div>
        {message && <p className={`text-center mb-4 ${message.includes('thành công') ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {activeTab === 'register' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tên tài khoản</label>
              <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" placeholder="Nhập họ và tên" required />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" placeholder="Nhập email" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mật khẩu</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" placeholder="Nhập mật khẩu" required />
          </div>
          {activeTab === 'register' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Xác nhận mật khẩu</label>
              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" placeholder="Nhập lại mật khẩu" required />
            </div>
          )}
          <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-lg" disabled={isLoading}>
            {isLoading ? 'Đang xử lý...' : activeTab === 'login' ? 'Đăng nhập' : 'Đăng ký'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginRegistrationPage;