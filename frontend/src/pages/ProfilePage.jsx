import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import '../styles/ProfilePage.css';
import { useShopData } from '../context/ShopDataContext';

const ProfilePage = () => {
  const { addToCart, cartCount } = useCart();
  const { orders } = useShopData();
  const [activeTab, setActiveTab] = useState('overview');
  
  // User profile state
  const [user, setUser] = useState({
    firstName: 'Sophia',
    lastName: 'Loren',
    email: 'sophia.loren@luxurybeauty.com',
    phone: '+1 (555) 234-5678',
    birthday: '1995-09-24',
    memberSince: 'March 2024',
    tier: 'Gold VIP Member',
    points: 1250,
  });

  // Saved Addresses state
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      fullName: 'Sophia Loren',
      street: '742 Evergreen Terrace',
      city: 'Springfield',
      state: 'IL',
      zip: '62704',
      phone: '+1 (555) 234-5678',
      isDefault: true
    },
    {
      id: 2,
      fullName: 'Sophia Loren (Office)',
      street: '100 Luxury Plaza, Suite 400',
      city: 'Chicago',
      state: 'IL',
      zip: '60601',
      phone: '+1 (555) 987-6543',
      isDefault: false
    }
  ]);

  // Wishlist state
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: 'Hyaluronic Acid Serum',
      price: 24.99,
      img: '/images/product_serum.png',
    },
    {
      id: 3,
      name: 'Collagen Night Cream',
      price: 19.99,
      img: '/images/product_night_cream.png',
    },
    {
      id: 5,
      name: 'Luxury Perfume',
      price: 34.99,
      img: '/images/product_perfume.png',
    }
  ]);


  const showToast = (message) => {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${message}`;
    
    Object.assign(toast.style, {
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      backgroundColor: '#2D2424',
      color: '#FFF',
      padding: '12px 24px',
      borderRadius: '4px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
      zIndex: '9999',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '0.85rem',
      letterSpacing: '0.5px',
      fontFamily: 'Inter, sans-serif',
      transform: 'translateY(100px)',
      opacity: '0',
      transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)'
    });
    
    toast.querySelector('i').style.color = '#C84B70';
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.transform = 'translateY(0)';
      toast.style.opacity = '1';
    }, 100);
    
    setTimeout(() => {
      toast.style.transform = 'translateY(20px)';
      toast.style.opacity = '0';
      setTimeout(() => {
        toast.remove();
      }, 400);
    }, 3000);
  };

  const handleSettingsSave = (e) => {
    e.preventDefault();
    showToast('Your account details have been successfully updated!');
  };

  const handleSetDefaultAddress = (id) => {
    setAddresses(prev => prev.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })));
    showToast('Default shipping address updated!');
  };

  const handleDeleteAddress = (id) => {
    setAddresses(prev => prev.filter(addr => addr.id !== id));
    showToast('Address removed successfully.');
  };

  const handleRemoveWishlist = (id) => {
    setWishlist(prev => prev.filter(item => item.id !== id));
    showToast('Product removed from wishlist.');
  };

  const handleAddToBag = (product) => {
    addToCart(product);
    showToast(`Added ${product.name} to your bag!`);
  };

  const handleAddNewAddress = () => {
    const newAddr = {
      id: Date.now(),
      fullName: 'Sophia Loren',
      street: '123 New Beverly Hills Rd',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90210',
      phone: '+1 (555) 234-5678',
      isDefault: false
    };
    setAddresses(prev => [...prev, newAddr]);
    showToast('New shipping address added!');
  };

  return (
    <div className="profile-page-wrapper">
      <Header cartCount={cartCount} />
      
      <div className="profile-container">
        <div className="profile-title-section">
          <h1>My Sanctuary</h1>
          <p>Manage your account, view beauty milestones, and track your orders</p>
        </div>

        <div className="profile-grid">
          {/* Sidebar */}
          <aside className="profile-sidebar">
            <div className="profile-avatar-container">
              <img 
                src="/images/avatar.png" 
                alt="Profile Avatar" 
                className="profile-avatar"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256';
                }}
              />
              <span className="tier-badge">{user.tier.split(' ')[0]} VIP</span>
            </div>
            
            <div className="profile-info">
              <h3>{user.firstName} {user.lastName}</h3>
              <p className="membership-info">{user.tier} &bull; Member since {user.birthday.split('-')[0]}</p>
            </div>

            <nav className="profile-nav-menu">
              <button 
                className={`profile-nav-btn ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                <i className="fa-solid fa-grip"></i> Overview
              </button>
              <button 
                className={`profile-nav-btn ${activeTab === 'orders' ? 'active' : ''}`}
                onClick={() => setActiveTab('orders')}
              >
                <i className="fa-solid fa-clock-rotate-left"></i> Order History
              </button>
              <button 
                className={`profile-nav-btn ${activeTab === 'addresses' ? 'active' : ''}`}
                onClick={() => setActiveTab('addresses')}
              >
                <i className="fa-solid fa-map-location-dot"></i> Shipping Addresses
              </button>
              <button 
                className={`profile-nav-btn ${activeTab === 'wishlist' ? 'active' : ''}`}
                onClick={() => setActiveTab('wishlist')}
              >
                <i className="fa-regular fa-heart"></i> My Wishlist
              </button>
              <button 
                className={`profile-nav-btn ${activeTab === 'settings' ? 'active' : ''}`}
                onClick={() => setActiveTab('settings')}
              >
                <i className="fa-solid fa-sliders"></i> Account Settings
              </button>
            </nav>
          </aside>

          {/* Main Content Area */}
          <main className="profile-content-area">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="tab-content">
                <h2>Account Overview</h2>
                <div className="overview-stats-grid">
                  <div className="stat-card">
                    <div className="stat-icon"><i className="fa-solid fa-gem"></i></div>
                    <div className="stat-info">
                      <span>Loyalty Points</span>
                      <h4>{user.points} pts</h4>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon"><i className="fa-solid fa-box"></i></div>
                    <div className="stat-info">
                      <span>Total Orders</span>
                      <h4>{orders.length}</h4>
                    </div>
                  </div>
                </div>

                <div className="loyalty-progress-box">
                  <div className="progress-header">
                    <span>Gold VIP Status Progress</span>
                    <strong>1,250 / 2,000 Points</strong>
                  </div>
                  <div className="progress-bar-bg">
                    <div className="progress-bar-fill" style={{ width: '62.5%' }}></div>
                  </div>
                  <p className="progress-footer">
                    Earn <strong>750 more points</strong> to unlock the <span>Platinum Elite Tier</span> for free global express shipping!
                  </p>
                </div>

                <h3>Recent Activity</h3>
                <div style={{ marginTop: '20px' }}>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    Welcome back, Sophia! You have <strong>1 processing order</strong> en route to Springfield.
                  </p>
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="tab-content">
                <h2>Order History</h2>
                <div className="orders-table-container">
                  <table className="orders-table">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Items</th>
                        <th>Total</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((ord) => (
                        <tr key={ord.id}>
                          <td className="order-id">{ord.id}</td>
                          <td>{ord.date}</td>
                          <td>
                            <span className={`order-status ${ord.status.toLowerCase()}`}>
                              {ord.status}
                            </span>
                          </td>
                          <td style={{ maxWidth: '240px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {ord.items}
                          </td>
                          <td style={{ fontWeight: '600' }}>₹{ord.total}</td>
                          <td>
                            <button className="order-btn-detail" onClick={() => showToast(`Opening tracker for ${ord.id}...`)}>
                              Track
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Addresses Tab */}
            {activeTab === 'addresses' && (
              <div className="tab-content">
                <h2>Shipping Addresses</h2>
                <div className="addresses-grid">
                  {addresses.map((addr) => (
                    <div className={`address-card ${addr.isDefault ? 'default' : ''}`} key={addr.id}>
                      {addr.isDefault && <span className="default-badge">DEFAULT</span>}
                      <div className="address-details">
                        <h4>{addr.fullName}</h4>
                        <p>{addr.street}</p>
                        <p>{addr.city}, {addr.state} {addr.zip}</p>
                        <p style={{ marginTop: '8px', fontSize: '0.8rem' }}><i className="fa-solid fa-phone"></i> {addr.phone}</p>
                      </div>
                      <div className="address-actions">
                        {!addr.isDefault && (
                          <button className="address-action-btn" onClick={() => handleSetDefaultAddress(addr.id)}>
                            Set Default
                          </button>
                        )}
                        <button className="address-action-btn" onClick={() => showToast('Address editing is simulated.')}>
                          <i className="fa-solid fa-pen"></i> Edit
                        </button>
                        <button className="address-action-btn" onClick={() => handleDeleteAddress(addr.id)}>
                          <i className="fa-regular fa-trash-can"></i> Delete
                        </button>
                      </div>
                    </div>
                  ))}
                  <button className="address-card add-address-card" onClick={handleAddNewAddress}>
                    <div className="add-address-content">
                      <i className="fa-solid fa-plus"></i>
                      <p>Add New Address</p>
                    </div>
                  </button>
                </div>
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === 'wishlist' && (
              <div className="tab-content">
                <h2>My Wishlist</h2>
                {wishlist.length === 0 ? (
                  <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginTop: '40px' }}>Your wishlist is empty.</p>
                ) : (
                  <div className="wishlist-grid">
                    {wishlist.map((item) => (
                      <div className="wishlist-card" key={item.id}>
                        <button className="wishlist-remove-btn" onClick={() => handleRemoveWishlist(item.id)}>
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                        <div className="wishlist-img-wrapper">
                          <img src={item.img} alt={item.name} />
                        </div>
                        <div className="wishlist-details">
                          <h4>{item.name}</h4>
                          <div className="wishlist-price-bar">
                            <span className="wishlist-price">₹{item.price}</span>
                            <button 
                              className="wishlist-btn-add" 
                              onClick={() => handleAddToBag(item)}
                              aria-label="Add to Bag"
                            >
                              <i className="fa-solid fa-bag-shopping"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="tab-content">
                <h2>Account Settings</h2>
                <form className="settings-form" onSubmit={handleSettingsSave}>
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      value={user.firstName}
                      onChange={(e) => setUser({...user, firstName: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      value={user.lastName}
                      onChange={(e) => setUser({...user, lastName: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={user.email}
                      onChange={(e) => setUser({...user, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      value={user.phone}
                      onChange={(e) => setUser({...user, phone: e.target.value})}
                    />
                  </div>
                  <div className="form-group full-width">
                    <label htmlFor="birthday">Birthday</label>
                    <input 
                      type="date" 
                      id="birthday" 
                      value={user.birthday}
                      onChange={(e) => setUser({...user, birthday: e.target.value})}
                    />
                  </div>
                  <div className="settings-actions">
                    <button type="submit" className="btn-save-settings">
                      <i className="fa-solid fa-floppy-disk"></i> Save Settings
                    </button>
                  </div>
                </form>
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProfilePage;
