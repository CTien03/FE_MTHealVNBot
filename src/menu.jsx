

// import React, { useState, useEffect } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';

// const Header = () => {
//   const navigate = useNavigate();
  
//   // State để lưu thông tin người dùng
//   const [userInitial, setUserInitial] = useState('');

//   useEffect(() => {
//     // Lấy thông tin người dùng từ localStorage
//     const userName = localStorage.getItem('userName');
    
//     console.log("userName từ localStorage:", userName);  // Thêm logging để kiểm tra giá trị

//     if (userName) {
//       // Lấy chữ cái đầu tiên và viết hoa
//       const initial = userName.charAt(0).toUpperCase();
//       setUserInitial(initial);
//     } else {
//       console.log("Không tìm thấy userName trong localStorage");
//     }
//   }, []); // Chạy khi component được render lần đầu

//   const isLoggedIn = localStorage.getItem('authToken'); // Kiểm tra xem có token không

//   const handleLogout = () => {
//     // Xóa token và thông tin người dùng
//     localStorage.removeItem('authToken');
//     localStorage.removeItem('userName');
//     localStorage.removeItem('chatHistory'); 

//     // Chuyển hướng về trang chủ
//     navigate('/');
//   };

//   return (
//     <div className="bg-gradient-to-r from-[#E0FFF9] to-[#E6F0FF]">
//       {/* Navigation Bar */}
//       <nav className="p-4">
//         <div className="max-w-6xl mx-auto flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center">
//             <span className="text-xl font-bold">
//               <span className="text-blue-600">AIO</span>{' '}
//               <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
//                 Chatbot
//               </span>
//             </span>
//           </div>

//           {/* Menu Links */}
//           <div className="flex items-center space-x-6">
//             {/* Hiển thị các tab chỉ khi đã đăng nhập */}
//             {isLoggedIn ? (
//               <>
//                 <NavLink
//                   to="/"
//                   className={({ isActive }) =>
//                     isActive
//                       ? "px-4 py-2 rounded-md text-white bg-blue-600 font-medium"
//                       : "px-4 py-2 text-gray-600 font-medium hover:text-blue-600"
//                   }
//                 >
//                   TRANG CHỦ
//                 </NavLink>

//                 <NavLink
//                   to="/chat"
//                   className={({ isActive }) =>
//                     isActive
//                       ? "px-4 py-2 rounded-md text-white bg-blue-600 font-medium"
//                       : "px-4 py-2 text-gray-600 font-medium hover:text-blue-600"
//                   }
//                 >
//                   Trò chuyện
//                 </NavLink>
                
//                 <NavLink
//                   to="/faqs"
//                   className={({ isActive }) =>
//                     isActive
//                       ? "px-4 py-2 rounded-md text-white bg-blue-600 font-medium"
//                       : "px-4 py-2 text-gray-600 font-medium hover:text-blue-600"
//                   }
//                 >
//                   FAQs
//                 </NavLink>


//                 <NavLink
//                   to="/healthTracking"
//                   className={({ isActive }) =>
//                     isActive
//                       ? "px-4 py-2 rounded-md text-white bg-blue-600 font-medium"
//                       : "px-4 py-2 text-gray-600 font-medium hover:text-blue-600"
//                   }
//                 >
//                   Tình trạng sức khỏe
//                 </NavLink>

//                 <NavLink
//                   to="/feedback"
//                   className={({ isActive }) =>
//                     isActive
//                       ? "px-4 py-2 rounded-md text-white bg-blue-600 font-medium"
//                       : "px-4 py-2 text-gray-600 font-medium hover:text-blue-600"
//                   }
//                 >
//                   Báo lỗi/ Góp ý
//                 </NavLink>

//                 {/* Hiển thị chữ cái đầu của người dùng */}
//                 <div className="flex items-center space-x-4">
//                   <div className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full font-medium">
//                     {userInitial}
//                   </div>

//                   {/* Nút Logout */}
//                   <button
//                     onClick={handleLogout}
//                     className="px-4 py-2 text-gray-600 font-medium hover:text-blue-600"
//                   >
//                     Đăng xuất
//                   </button>
//                 </div>
//               </>
//             ) : (
//               // Hiển thị nút "Đăng nhập" nếu chưa đăng nhập
//               <NavLink
//                 to="/"
//                 className="px-4 py-2 text-gray-600 font-medium hover:text-blue-600"
//               >
//                 Đăng nhập
//               </NavLink>
//             )}
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Header;


import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [userInitial, setUserInitial] = useState("?");
  // const [userInitial, setUserInitial] = useState(
  //   localStorage.getItem("userName")?.charAt(0).toUpperCase() || "?"
  // );

  

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("https://be-mthealvnbot.onrender.com/api/user_Name_current");
        if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu người dùng");

        const data = await response.json();
        console.log("Dữ liệu từ API:", data);

        if (data.userName) {
          const initial = data.userName.charAt(0).toUpperCase();
          console.log("Chữ cái đầu:", initial);
          setUserInitial(initial);
          localStorage.setItem("userName", data.userName); // Lưu vào localStorage để dự phòng
        }
      } catch (error) {
        console.error("Lỗi:", error);
        const savedUserName = localStorage.getItem("userName");
        if (savedUserName) {
          setUserInitial(savedUserName.charAt(0).toUpperCase());
        }
      }
    };

    fetchUserData();
  }, []);


  const isLoggedIn = localStorage.getItem("authToken");

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userName");
    localStorage.removeItem("chatHistory");
    navigate("/");
  };

  return (
    <div className="bg-gradient-to-r from-[#E0FFF9] to-[#E6F0FF]">
      <nav className="p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                MTHealVNBot
              </span>
            </span>
          </div>

          <div className="flex items-center space-x-6">
            {isLoggedIn ? (
              <>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "px-4 py-2 rounded-md text-white bg-blue-600 font-medium"
                      : "px-4 py-2 text-gray-600 font-medium hover:text-blue-600"
                  }
                >
                  TRANG CHỦ
                </NavLink>
                <NavLink
                  to="/chat"
                  className={({ isActive }) =>
                    isActive
                      ? "px-4 py-2 rounded-md text-white bg-blue-600 font-medium"
                      : "px-4 py-2 text-gray-600 font-medium hover:text-blue-600"
                  }
                >
                  Trò chuyện
                </NavLink>
                
                <NavLink
                  to="/healthTracking"
                  className={({ isActive }) =>
                    isActive
                      ? "px-4 py-2 rounded-md text-white bg-blue-600 font-medium"
                      : "px-4 py-2 text-gray-600 font-medium hover:text-blue-600"
                  }
                >
                  Tình trạng sức khỏe
                </NavLink>
                <NavLink
                  to="/faqs"
                  className={({ isActive }) =>
                    isActive
                      ? "px-4 py-2 rounded-md text-white bg-blue-600 font-medium"
                      : "px-4 py-2 text-gray-600 font-medium hover:text-blue-600"
                  }
                >
                  FAQs
                </NavLink>
                <NavLink
                  to="/feedback"
                  className={({ isActive }) =>
                    isActive
                      ? "px-4 py-2 rounded-md text-white bg-blue-600 font-medium"
                      : "px-4 py-2 text-gray-600 font-medium hover:text-blue-600"
                  }
                >
                  Góp ý
                </NavLink>

                <div className="flex items-center space-x-4">
                  {/* Hiển thị chữ cái đầu của userName */}
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full font-medium">
                    {userInitial}
                  </div>

                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 text-gray-600 font-medium hover:text-blue-600"
                  >
                    Đăng xuất
                  </button>
                </div>
              </>
            ) : (
              <NavLink
                to="/"
                className="px-4 py-2 text-gray-600 font-medium hover:text-blue-600"
              >
                Đăng nhập
              </NavLink>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
