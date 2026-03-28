import React, { useState } from 'react';
import { PinIcon, StarIcon, UserIcon } from '../components/common/Icons';
import AddBoardgameModal from '../components/marketplace/AddBoardgameModal';

function ProfilePage({ user }) {
  const [activeTab, setActiveTab] = useState('listings');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [myListings, setMyListings] = useState([]); // Array that will be populated from API later
  
  // Tên hiển thị (lấy từ email nếu không có name)
  const displayName = user?.fullName || (user?.email ? user.email.split('@')[0] : 'User Name');

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '60px' }}>
      
      {/* Container chính */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', paddingTop: '40px', paddingLeft: '20px', paddingRight: '20px' }}>
        
        {/* HEADER / BANNER BỌC THÔNG TIN */}
        <div style={{ backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
          {/* Banner */}
          <div style={{ height: '160px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)' }}></div>
          
          {/* Nội dung Header */}
          <div style={{ padding: '0 32px 32px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative' }}>
            
            <div style={{ display: 'flex', alignItems: 'flex-end', marginTop: '-50px' }}>
              {/* Avatar */}
              <div style={{ 
                width: '120px', height: '120px', borderRadius: '50%', border: '4px solid #fff', 
                backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center',
                overflow: 'hidden', flexShrink: 0
              }}>
                <span style={{ fontSize: '40px', color: '#64748b' }}>
                  {displayName.charAt(0).toUpperCase()}
                </span>
              </div>
              
              {/* Thông tin User */}
              <div style={{ marginLeft: '24px', paddingBottom: '10px' }}>
                <h1 style={{ margin: '0 0 8px 0', fontSize: '28px', color: '#1e293b' }}>{displayName}</h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#64748b', fontSize: '14px' }}>
                  
                  {/* Rating */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ display: 'flex', color: '#fbbf24', width: '16px' }}><StarIcon /></span>
                    <span style={{ display: 'flex', color: '#fbbf24', width: '16px' }}><StarIcon /></span>
                    <span style={{ display: 'flex', color: '#fbbf24', width: '16px' }}><StarIcon /></span>
                    <span style={{ display: 'flex', color: '#fbbf24', width: '16px' }}><StarIcon /></span>
                    <span style={{ display: 'flex', color: '#fbbf24', width: '16px' }}><StarIcon /></span>
                    <strong style={{ color: '#1e293b', marginLeft: '4px' }}>4.8</strong> 
                    <span>(24 reviews)</span>
                  </div>

                  {/* Location */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: '#f1f5f9', padding: '4px 8px', borderRadius: '12px' }}>
                    <span style={{ width: '14px' }}><PinIcon /></span>
                    <span>Ho Chi Minh City</span>
                  </div>

                  {/* Join Date */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: '#f1f5f9', padding: '4px 8px', borderRadius: '12px' }}>
                    <span style={{ width: '14px', fill: 'currentColor' }}><svg viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/></svg></span>
                    <span>Since Mar 2024</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Nút thao tác */}
            <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
              <button style={{ padding: '8px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: '#fff', fontWeight: '500', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '16px' }}><UserIcon/></span>
                Edit Profile
              </button>
              <button style={{ padding: '8px', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                {/* Icon setting mượn tạm SVG */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              </button>
            </div>
          </div>
        </div>

        {/* CÁC THẺ THỐNG KÊ (STATS) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '24px' }}>
          {[
            { label: 'Listings', icon: '📦', value: '3' },
            { label: 'Rentals', icon: '📅', value: '2' },
            { label: 'Purchases', icon: '🛍️', value: '2' }
          ].map((stat, i) => (
            <div key={i} style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '24px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>{stat.icon}</div>
              <h3 style={{ margin: '0', fontSize: '24px', color: '#1e293b' }}>{stat.value}</h3>
              <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: '14px' }}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* TABS (Danh mục) */}
        <div style={{ display: 'flex', gap: '16px', marginTop: '32px', borderBottom: '1px solid #e2e8f0' }}>
          {[
            { id: 'listings', label: 'My Listings' },
            { id: 'rentals', label: 'My Rentals' },
            { id: 'purchases', label: 'Purchases' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '12px 24px',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === tab.id ? '2px solid #3b82f6' : '2px solid transparent',
                color: activeTab === tab.id ? '#3b82f6' : '#64748b',
                fontWeight: activeTab === tab.id ? '600' : '400',
                fontSize: '15px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* NỘI DUNG LISTINGS */}
        <div style={{ marginTop: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '18px', color: '#1e293b', margin: 0 }}>My Listings ({myListings.length})</h2>
            <button onClick={() => setIsModalOpen(true)} style={{ backgroundColor: '#f59e0b', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '8px', fontWeight: '500', cursor: 'pointer' }}>
              + Add New
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {myListings.length === 0 ? (
              <div style={{ padding: '24px', textAlign: 'center', color: '#64748b', fontSize: '15px', backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                You haven't listed any board games yet.
              </div>
            ) : (
            myListings.map(item => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  {/* Ảnh sản phẩm */}
                  <img src={item.image} alt={item.title} style={{ width: '80px', height: '80px', borderRadius: '8px', objectFit: 'cover' }} />
                  
                  {/* Thông tin SP */}
                  <div>
                    <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', color: '#1e293b' }}>{item.title}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px' }}>
                      <span style={{ color: '#f59e0b', fontWeight: '600' }}>{item.buyPrice}</span>
                      <span style={{ color: '#64748b' }}>{item.rentPrice}</span>
                      <span style={{ color: '#64748b', fontSize: '12px' }}>• {item.condition}</span>
                    </div>

                    {/* Các Nút Action của Item */}
                    <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                      <button style={{ padding: '6px 12px', fontSize: '12px', borderRadius: '6px', border: '1px solid #cbd5e1', backgroundColor: '#fff', cursor: 'pointer' }}>👁 View</button>
                      <button style={{ padding: '6px 12px', fontSize: '12px', borderRadius: '6px', border: '1px solid #cbd5e1', backgroundColor: '#fff', cursor: 'pointer' }}>✏️ Edit</button>
                      <button style={{ padding: '6px 12px', fontSize: '12px', borderRadius: '6px', border: '1px solid #fecaca', backgroundColor: '#fef2f2', color: '#ef4444', cursor: 'pointer' }}>🗑 Remove</button>
                    </div>
                  </div>
                </div>

                  {/* Status Badge */}
                  <div style={{ height: '100%', display: 'flex', alignItems: 'flex-start', alignSelf: 'flex-start' }}>
                    <span style={{ backgroundColor: '#dcfce7', color: '#16a34a', padding: '4px 12px', borderRadius: '16px', fontSize: '12px', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ width: '6px', height: '6px', backgroundColor: '#16a34a', borderRadius: '50%', display: 'inline-block' }}></span>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>

      <AddBoardgameModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        user={user} 
        onAdded={() => {
          alert('Boardgame added successfully!');
          // Có thể fetch lại danh sách boardgame ở đây
        }} 
      />
    </div>
  );
}

export default ProfilePage;