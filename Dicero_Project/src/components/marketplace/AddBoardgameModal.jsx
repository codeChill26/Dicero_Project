import React, { useState } from 'react';
import { boardgameApi } from '../../api/boardgameApi';

const formatNumber = (num) => {
  if (!num) return '';
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const parseNumber = (str) => {
  if (!str) return 0;
  return Number(str.toString().replace(/,/g, ''));
};

function AddBoardgameModal({ isOpen, onClose, user, onAdded }) {
  const [formData, setFormData] = useState({
    title: '',
    numberOfPlayers: 2,
    gamePlay: 1, // Default is Cooperative
    description: '',
    priceSell: '',
    priceRent: '',
    imageUrl: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (name === 'priceSell' || name === 'priceRent') {
      const parsedNum = parseNumber(value);
      if (!isNaN(parsedNum)) {
        setFormData({ ...formData, [name]: formatNumber(parsedNum) });
      }
    } else {
      setFormData({
        ...formData,
        [name]: type === 'number' ? Number(value) : value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const payload = {
        title: formData.title,
        numberOfPlayers: Number(formData.numberOfPlayers),
        gamePlay: Number(formData.gamePlay),
        description: formData.description,
        priceSell: parseNumber(formData.priceSell),
        priceRent: parseNumber(formData.priceRent),
        ownerId: Number(user?.id || user?.userId || 0),
        imageUrl: formData.imageUrl
      };
      console.log('Sending payload:', payload); // Log ra để dễ debug
      
      const token = user?.token; // Try to extract token from the user object
      await boardgameApi.createBoardgame(payload, token);
      
      if (onAdded) onAdded();
      onClose();
    } catch (err) {
      console.error('API Error:', err);
      // Hiển thị chi tiết lỗi nếu có từ err.message (đã bọc trong base API)
      setError(err.message || 'Lỗi kết nối. Hãy kiểm tra server đã chạy đúng hay chưa!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={modalOverlayStyle}>
      <div style={modalContentStyle}>
        <h2 style={{ marginTop: 0, fontSize: '24px' }}>Add New Boardgame</h2>
        {error && <div style={{ color: 'red', marginBottom: '16px', background: '#ffebee', padding: 10, borderRadius: 5 }}>{error}</div>}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          <label style={labelStyle}>
            Title:
            <input name="title" value={formData.title} onChange={handleChange} required style={inputStyle} />
          </label>
          
          <div style={{ display: 'flex', gap: '16px' }}>
            <label style={{ ...labelStyle, flex: 1 }}>
              Number of Players:
              <input type="number" name="numberOfPlayers" value={formData.numberOfPlayers} onChange={handleChange} required min="1" style={inputStyle} />
            </label>
            <label style={{ ...labelStyle, flex: 1 }}>
              Game Play:
              <select name="gamePlay" value={formData.gamePlay} onChange={handleChange} required style={inputStyle}>
                <option value={1}>Cooperative</option>
                <option value={2}>Competitive</option>
                <option value={3}>Solo</option>
                <option value={4}>TeamBased</option>
                <option value={5}>RolePlaying</option>
                <option value={6}>Strategy</option>
                <option value={7}>Party</option>
                <option value={8}>Abstract</option>
                <option value={9}>Bluffing</option>
                <option value={10}>Other</option>
              </select>
            </label>
          </div>

          <label style={labelStyle}>
            Description:
            <textarea name="description" value={formData.description} onChange={handleChange} required rows={3} style={{ ...inputStyle, resize: 'vertical' }} />
          </label>
          
          <div style={{ display: 'flex', gap: '16px' }}>
            <label style={{ ...labelStyle, flex: 1 }}>
              Price Sell (VND):
              <input type="text" name="priceSell" value={formData.priceSell} onChange={handleChange} required placeholder="0" style={inputStyle} />
            </label>
            <label style={{ ...labelStyle, flex: 1 }}>
              Price Rent (VND):
              <input type="text" name="priceRent" value={formData.priceRent} onChange={handleChange} required placeholder="0" style={inputStyle} />
            </label>
          </div>

          <label style={labelStyle}>
            Image URL:
            <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} required style={inputStyle} />
          </label>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '16px' }}>
            <button type="button" onClick={onClose} disabled={loading} style={cancelBtnStyle}>Cancel</button>
            <button type="submit" disabled={loading} style={submitBtnStyle}>
              {loading ? 'Submitting...' : 'Post Boardgame'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const modalOverlayStyle = {
  position: 'fixed',
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000
};

const modalContentStyle = {
  backgroundColor: '#fff',
  padding: '24px',
  borderRadius: '8px',
  width: '100%',
  maxWidth: '500px',
  maxHeight: '90vh',
  overflowY: 'auto',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
};

const labelStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  fontSize: '14px',
  fontWeight: '500'
};

const inputStyle = {
  padding: '8px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '14px'
};

const cancelBtnStyle = {
  padding: '8px 16px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  backgroundColor: '#fff',
  cursor: 'pointer'
};

const submitBtnStyle = {
  padding: '8px 16px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#ef6b2f',
  color: '#fff',
  fontWeight: 'bold',
  cursor: 'pointer'
};

export default AddBoardgameModal;