import { useEffect, useState } from "react";
import { Card, CardContent, TextField } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

// Chuyển đổi điểm số thành số để vẽ biểu đồ
const mapScoreToNumber = (score) => {
  return score === "Tốt" ? 3 : score === "Khá" ? 2 : score === "Trung bình" ? 1 : 0;
};

// Chuyển đổi ngày từ "YYYY-MM-DD" thành "DD/MM/YYYY"
const formatDate = (dateString) => {
  const parts = dateString.split("-");
  return parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : dateString;
};

// Hàm chọn màu nền theo mức độ sức khỏe
const getScoreColor = (score) => {
  if (score === "Yếu") return "bg-red-500 text-white";
  if (score === "Trung bình") return "bg-yellow-300 text-black";
  if (score === "Khá") return "bg-blue-300 text-black";
  if (score === "Tốt") return "bg-green-500 text-white";
  return "";
};

const HealthTracking = () => {
  const [tableData, setTableData] = useState([]);
  const [searchDate, setSearchDate] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch("https://be-mthealvnbot.onrender.com/api/get_user_data")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setTableData(data);

          // Chuyển dữ liệu cho biểu đồ
          const formattedChartData = data.map((item) => ({
            date: formatDate(item.Time.split(" ")[0]),
            score: mapScoreToNumber(item.Score),
          }));

          setChartData(formattedChartData);
        }
      })
      .catch((error) => console.error("Lỗi khi gọi API:", error));
  }, []);

  // Xử lý tìm kiếm theo ngày
  const handleSearch = (e) => {
    const inputDate = e.target.value;
    setSearchDate(inputDate);

    if (inputDate.trim() === "") {
      setSearchResults([]);
      return;
    }

    // Lọc dữ liệu theo ngày
    const results = tableData.filter(
      (item) => formatDate(item.Time.split(" ")[0]) === inputDate
    );
    setSearchResults(results);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-xl font-bold text-center text-purple-600">📊 THEO DÕI SỨC KHỎE</h1>
      <p className="text-center text-gray-600 mt-2">Theo dõi sức khỏe tinh thần của bạn</p>

      {/* Biểu đồ sức khỏe */}
      <Card sx={{ mt: 3, p: 2 }}>
        <CardContent>
          <h2 className="text-lg font-semibold mb-4">Biểu đồ sức khỏe tinh thần</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <XAxis dataKey="date" tick={{ fontSize: 12 }} />
              <YAxis domain={[0, 3]} ticks={[0, 1, 2, 3]} tickFormatter={(val) => ["Yếu", "Trung bình", "Khá", "Tốt"][val]} />
              <Tooltip formatter={(val) => ["Yếu", "Trung bình", "Khá", "Tốt"][val]} />
              <Legend />
              <Line type="monotone" dataKey="score" stroke="#007bff" strokeWidth={2} dot={{ fill: "orange", r: 5 }} connectNulls={true} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Thanh tìm kiếm */}
      <div className="flex justify-end mt-4">
        <TextField
          label="Tìm kiếm theo ngày"
          variant="outlined"
          size="small"
          onChange={handleSearch}
          value={searchDate}
        />
      </div>

      {/* Kết quả tìm kiếm */}
      {searchDate && (
        <Card sx={{ mt: 3, p: 2 }}>
          <CardContent>
            <h2 className="text-lg font-semibold mb-4">Kết quả tìm kiếm ({searchDate})</h2>
            <div className="overflow-y-auto max-h-[80vh] border border-gray-300 rounded-md">
              <table className="border-collapse w-full text-sm">
                <thead className="sticky top-0 bg-gray-200">
                  <tr>
                    <th className="border px-4 py-2">Username</th>
                    <th className="border px-4 py-2">Time</th>
                    <th className="border px-4 py-2">Score</th>
                    <th className="border px-4 py-2">Content</th>
                    <th className="border px-4 py-2">Total guess</th>
                  </tr>
                </thead>
                <tbody>
                  {searchResults.length > 0 ? (
                    searchResults.map((item, index) => (
                      <tr key={index} className="border">
                        <td className="border px-4 py-2 text-justify whitespace-normal break-words">{item.Username}</td>
                        <td className="border px-4 py-2 text-justify whitespace-normal break-words">{formatDate(item.Time.split(" ")[0])}</td>
                        <td className={`border px-4 py-2 text-justify whitespace-normal break-words ${getScoreColor(item.Score)}`}>
                          {item.Score}
                        </td>
                        <td className="border px-4 py-2 text-justify whitespace-normal break-words">{item.Content}</td>
                        <td className="border px-4 py-2 text-justify whitespace-normal break-words">{item["Total guess"]}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center py-4 text-gray-500">Không có dữ liệu</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Bảng dữ liệu chi tiết */}
      <Card sx={{ mt: 3, p: 2 }}>
        <CardContent>
          <h2 className="text-lg font-semibold mb-4">Bảng dữ liệu chi tiết</h2>
          <div className="overflow-y-auto max-h-[80vh] border border-gray-300 rounded-md">
            <table className="border-collapse w-full text-sm">
              <thead className="sticky top-0 bg-gray-200">
                <tr>
                  <th className="border px-4 py-2">Username</th>
                  <th className="border px-4 py-2">Time</th>
                  <th className="border px-4 py-2">Score</th>
                  <th className="border px-4 py-2">Content</th>
                  <th className="border px-4 py-2">Total guess</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => (
                  <tr key={index} className="border">
                    <td className="border px-4 py-2 text-justify whitespace-normal break-words">{item.Username}</td>
                    <td className="border px-4 py-2 text-justify whitespace-normal break-words">{formatDate(item.Time.split(" ")[0])}</td>
                    <td className={`border px-4 py-2 text-justify whitespace-normal break-words ${getScoreColor(item.Score)}`}>
                      {item.Score}
                    </td>
                    <td className="border px-4 py-2 text-justify whitespace-normal break-words">{item.Content}</td>
                    <td className="border px-4 py-2 text-justify whitespace-normal break-words">{item["Total guess"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HealthTracking;
