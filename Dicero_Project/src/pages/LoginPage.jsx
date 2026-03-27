import React, { useState } from 'react';
import { authApi } from '../api/authApi';

function LoginPage({ onNavigate, onLogin }) {
  // 1. Tạo state để lưu trữ giá trị người dùng nhập vào
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // State để hiển thị thông báo lỗi hoặc trạng thái loading
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // 2. Hàm gọi API khi submit form
  const handleLogin = async (e) => {
    e.preventDefault(); // Cái này RẤT QUAN TRỌNG: Ngăn trang web tải lại (reload) sau khi bấm submit form!
    setIsLoading(true);
    setError(null);

    try {
      // Gọi tới file api để thực thi axios
      const data = await authApi.login(email, password);
      
      console.log('Login thành công !', data);
      
      // Gọi hàm onLogin truyền từ App.jsx xuống để lưu thông tin user
      onLogin({ email: email, token: data.token });

      // Thành công thì chuyển hướng về trang chủ
      onNavigate('home');

    } catch (err) {
      // (TẠM ĐỂ TEST UI: Nếu chưa có Backend, bạn có thể uncomment 2 dòng dưới để mock login thành công nhé)
      // onLogin({ email: email });
      // onNavigate('home');
      
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
      <div style={{ maxWidth: '400px', width: '100%', background: '#fff', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '24px', fontSize: '24px' }}>Welcome Back</h2>
        
        {/* Hiển thị lỗi nếu có */}
        {error && <div style={{ color: 'red', marginBottom: '16px', textAlign: 'center', fontSize: '14px', background: '#ffebee', padding: '10px', borderRadius: '4px' }}>{error}</div>}

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #ddd', boxSizing: 'border-box' }}
              required 
            />
          </div>
          
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password" 
              style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #ddd', boxSizing: 'border-box' }}
              required 
            />
          </div>
          
          <button 
            type="submit" 
            disabled={isLoading}
            style={{ width: '100%', padding: '12px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: isLoading ? 'not-allowed' : 'pointer', fontSize: '16px' }}
          >
            {isLoading ? 'Wait...' : 'Login'}
          </button>
        </form>
        
        <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: '#666' }}>
          Don't have an account?{' '}
          <button 
            type="button" 
            onClick={() => onNavigate('register')}
            style={{ background: 'none', border: 'none', color: '#3b82f6', fontWeight: '600', cursor: 'pointer', padding: 0 }}
          >
            Register here
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;