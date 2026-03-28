import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://localhost:7155/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const boardgameApi = {
  // Hàm tạo boardgame mới
  createBoardgame: async (payload, token) => {
    try {
      const response = await apiClient.post('/BoardGame', payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      let message = 'Tạo boardgame thất bại. Vui lòng kiểm tra lại!';
      
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
  }
};
