import axios from 'axios';

// Định nghĩa 1 client Axios cơ bản với URL cội nguồn (Base URL)
// Như vậy bạn không cần phải gõ lại chuỗi này ở mọi chỗ nữa.
const apiClient = axios.create({
  baseURL: 'https://localhost:7155/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authApi = {
  // Hàm gọi API Đăng nhập
  login: async (email, password) => {
    try {
      const response = await apiClient.post('/Auth/login', { email, password });
      // axios tự động parse JSON (response.data) cho bạn, không cần await response.json()
      return response.data;
    } catch (error) {
      let message = 'Đăng nhập thất bại. Hãy kiểm tra lại kết nối hoặc thông tin!';
      
      const serverData = error.response?.data;
      if (serverData) {
        if (typeof serverData === 'string') {
          message = serverData;
        } else if (serverData.message) {
          message = serverData.message;
        } else if (serverData.errors) {
          const errorKeys = Object.keys(serverData.errors);
          if (errorKeys.length > 0) message = serverData.errors[errorKeys[0]][0];
        } else {
          message = JSON.stringify(serverData);
        }
      }
      
      throw new Error(message);
    }
  },

  // Hàm gọi API Đăng ký
  register: async (fullName, email, password) => {
    try {
      const response = await apiClient.post('/Auth/register', { fullName, email, password });
      return response.data;
    } catch (error) {
      let message = 'Đăng ký thất bại. Vui lòng kiểm tra lại!';
      
      const serverData = error.response?.data;
      if (serverData) {
        if (typeof serverData === 'string') {
          message = serverData;
        } else if (serverData.message) {
          message = serverData.message;
        } else if (serverData.errors) {
          // Bắt lỗi Validation của .NET (Trả về dạng object "errors")
          const errorKeys = Object.keys(serverData.errors);
          if (errorKeys.length > 0) {
            // Lấy dòng báo lỗi đầu tiên để hiển thị cho người dùng
            message = serverData.errors[errorKeys[0]][0];
          }
        } else {
          // Nếu không thuộc các form trên, ép kiểu JSON thay vì để [object Object]
          message = JSON.stringify(serverData);
        }
      }
      
      throw new Error(message);
    }
  }
};
