import React, { useState } from 'react';
import { authApi } from '../api/authApi';

function RegisterPage({ onNavigate }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    // 1. Kiểm tra Validate Mật khẩu ở Frontend trước khi gọi API
    if (password.length < 6) {
      setError('Mật khẩu phải có ít nhất 6 ký tự!');
      return; // Dừng lại không chạy code bên dưới nữa
    }

    setIsLoading(true);
    setError(null);
    setSuccessMsg('');

    try {
      // Dùng authApi từ thư mục api chúng ta vừa tách ra
      await authApi.register(fullName, email, password);

      // Đăng ký thành công
      console.log('Đăng ký thành công!');
      setSuccessMsg('Đăng ký thành công! Đang chuyển hướng về trang đăng nhập...');
      
      // Delay để người dùng đọc được thông báo
      setTimeout(() => {
        onNavigate('login');
      }, 1500);

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
      <div style={{ maxWidth: '400px', width: '100%', background: '#fff', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '24px', fontSize: '24px' }}>Create an Account</h2>
        
        {error && <div style={{ color: 'red', marginBottom: '16px', textAlign: 'center', fontSize: '14px', background: '#ffebee', padding: '10px', borderRadius: '4px' }}>{error}</div>}
        {successMsg && <div style={{ color: 'green', marginBottom: '16px', textAlign: 'center', fontSize: '14px', background: '#e8f5e9', padding: '10px', borderRadius: '4px' }}>{successMsg}</div>}

        <form onSubmit={handleRegister}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Full Name</label>
            <input 
              type="text" 
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name" 
              style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #ddd', boxSizing: 'border-box' }}
              required 
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address" 
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
              placeholder="Create a password (min 6 characters)" 
              style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #ddd', boxSizing: 'border-box' }}
              minLength={6}
              required 
            />
          </div>
          
          <button 
            type="submit" 
            disabled={isLoading}
            style={{ width: '100%', padding: '12px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: isLoading ? 'not-allowed' : 'pointer', fontSize: '16px' }}
          >
            {isLoading ? 'Wait...' : 'Register'}
          </button>
        </form>
        
        <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: '#666' }}>
          Already have an account?{' '}
          <button 
            type="button" 
            onClick={() => onNavigate('login')}
            style={{ background: 'none', border: 'none', color: '#3b82f6', fontWeight: '600', cursor: 'pointer', padding: 0 }}
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;