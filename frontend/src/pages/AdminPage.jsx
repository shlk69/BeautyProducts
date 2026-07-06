import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useShopData } from '../context/ShopDataContext';
import '../styles/AdminPage.css';

const AdminPage = () => {
  const {
    products,
    categories,
    hero,
    orders,
    addProduct,
    updateProduct,
    deleteProduct,
    updateCategory,
    updateHero,
    updateOrderStatus
  } = useShopData();

  const [activeTab, setActiveTab] = useState('dashboard');
  const [productSearch, setProductSearch] = useState('');
  const [orderSearch, setOrderSearch] = useState('');

  // Modals state
  const [productModal, setProductModal] = useState({ open: false, mode: 'add', data: null });
  const [categoryModal, setCategoryModal] = useState({ open: false, data: null });

  // Form states
  const [productForm, setProductForm] = useState({
    name: '',
    price: '',
    oldPrice: '',
    img: '',
    category: 'skincare',
    subCategory: '',
    desc: '',
    tag: '',
    isSale: false,
    isBestseller: false
  });

  const [categoryForm, setCategoryForm] = useState({
    id: '',
    name: '',
    desc: '',
    img: ''
  });

  const [heroForm, setHeroForm] = useState({
    title: hero.title || '',
    subtitle: hero.subtitle || '',
    img: hero.img || ''
  });

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
      zIndex: '99999',
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

  // Product submission
  const handleProductSubmit = (e) => {
    e.preventDefault();
    const parsedData = {
      ...productForm,
      price: parseFloat(productForm.price) || 0,
      oldPrice: productForm.oldPrice ? parseFloat(productForm.oldPrice) : null
    };

    if (productModal.mode === 'add') {
      addProduct(parsedData);
      showToast(`Added product "${productForm.name}" successfully!`);
    } else {
      updateProduct(productModal.data.id, parsedData);
      showToast(`Updated product "${productForm.name}" successfully!`);
    }
    setProductModal({ open: false, mode: 'add', data: null });
  };

  // Open Edit Product
  const openEditProduct = (product) => {
    setProductForm({
      name: product.name,
      price: product.price.toString(),
      oldPrice: product.oldPrice ? product.oldPrice.toString() : '',
      img: product.img,
      category: product.category,
      subCategory: product.subCategory || '',
      desc: product.desc || '',
      tag: product.tag || '',
      isSale: product.isSale || false,
      isBestseller: product.isBestseller || false
    });
    setProductModal({ open: true, mode: 'edit', data: product });
  };

  const openAddProduct = () => {
    setProductForm({
      name: '',
      price: '',
      oldPrice: '',
      img: '',
      category: 'skincare',
      subCategory: '',
      desc: '',
      tag: '',
      isSale: false,
      isBestseller: false
    });
    setProductModal({ open: true, mode: 'add', data: null });
  };

  // Category submission
  const handleCategorySubmit = (e) => {
    e.preventDefault();
    updateCategory(categoryForm.id, {
      name: categoryForm.name,
      desc: categoryForm.desc,
      img: categoryForm.img
    });
    showToast(`Updated category "${categoryForm.name}" successfully!`);
    setCategoryModal({ open: false, data: null });
  };

  // Open Edit Category
  const openEditCategory = (cat) => {
    setCategoryForm({
      id: cat.id,
      name: cat.name,
      desc: cat.desc || '',
      img: cat.img
    });
    setCategoryModal({ open: true, data: cat });
  };

  // Hero submission
  const handleHeroSubmit = (e) => {
    e.preventDefault();
    updateHero(heroForm);
    showToast('Homepage Hero Banner configurations updated!');
  };

  // Calculations for stats
  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0).toFixed(2);
  const activeOrdersCount = orders.filter(o => o.status === 'Processing' || o.status === 'Shipped').length;

  return (
    <div className="admin-wrapper">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <i className="fa-solid fa-leaf"></i> Zack <span>ADMIN</span>
        </div>
        <nav className="admin-menu">
          <button 
            className={`admin-menu-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <i className="fa-solid fa-chart-line"></i> Dashboard
          </button>
          <button 
            className={`admin-menu-btn ${activeTab === 'products' ? 'active' : ''}`}
            onClick={() => setActiveTab('products')}
          >
            <i className="fa-solid fa-boxes-stacked"></i> Products
          </button>
          <button 
            className={`admin-menu-btn ${activeTab === 'categories' ? 'active' : ''}`}
            onClick={() => setActiveTab('categories')}
          >
            <i className="fa-solid fa-tags"></i> Categories
          </button>
          <button 
            className={`admin-menu-btn ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            <i className="fa-solid fa-receipt"></i> Orders
          </button>
          <button 
            className={`admin-menu-btn ${activeTab === 'content' ? 'active' : ''}`}
            onClick={() => setActiveTab('content')}
          >
            <i className="fa-solid fa-sliders"></i> Storefront Banners
          </button>
        </nav>

        <div className="admin-sidebar-footer">
          <Link to="/" className="admin-home-link">
            <i className="fa-solid fa-arrow-left"></i> View Live Store
          </Link>
        </div>
      </aside>

      {/* Main Panel */}
      <main className="admin-main">
        <header className="admin-header">
          <div>
            <h1>Admin Management Center</h1>
            <p>Welcome back, Administrator. Real-time changes are auto-persisted.</p>
          </div>
          <div className="admin-avatar-box">
            <span style={{ fontSize: '0.85rem', color: '#A69595', marginRight: '10px' }}>Admin Mode</span>
            <i className="fa-solid fa-circle-user" style={{ fontSize: '2rem', color: '#C84B70' }}></i>
          </div>
        </header>

        {/* STATS STRIP (Always visible on dashboard tab) */}
        {activeTab === 'dashboard' && (
          <>
            <div className="admin-stats-grid">
              <div className="admin-stat-card">
                <div className="admin-stat-icon sales"><i className="fa-solid fa-dollar-sign"></i></div>
                <div className="admin-stat-info">
                  <span>Total Sales</span>
                  <h3>${totalRevenue}</h3>
                </div>
              </div>
              <div className="admin-stat-card">
                <div className="admin-stat-icon products"><i className="fa-solid fa-box"></i></div>
                <div className="admin-stat-info">
                  <span>Catalog Size</span>
                  <h3>{products.length} Items</h3>
                </div>
              </div>
              <div className="admin-stat-card">
                <div className="admin-stat-icon orders"><i className="fa-solid fa-spinner"></i></div>
                <div className="admin-stat-info">
                  <span>Active Orders</span>
                  <h3>{activeOrdersCount}</h3>
                </div>
              </div>
              <div className="admin-stat-card">
                <div className="admin-stat-icon users"><i className="fa-solid fa-gem"></i></div>
                <div className="admin-stat-info">
                  <span>VIP Members</span>
                  <h3>12 Registered</h3>
                </div>
              </div>
            </div>

            <div className="admin-section-card">
              <h2>Quick Actions</h2>
              <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                <button className="btn-admin-primary" onClick={openAddProduct}>
                  <i className="fa-solid fa-plus"></i> Add New Product
                </button>
                <button className="btn-admin-secondary" onClick={() => setActiveTab('orders')}>
                  Manage Active Orders
                </button>
                <button className="btn-admin-secondary" onClick={() => setActiveTab('content')}>
                  Customize Store Banners
                </button>
              </div>
            </div>
          </>
        )}

        {/* PRODUCTS MANAGEMENT TAB */}
        {activeTab === 'products' && (
          <div className="admin-section-card">
            <div className="admin-section-header">
              <h2>All Products</h2>
              <div className="admin-search-bar">
                <input 
                  type="text" 
                  className="admin-search-input" 
                  placeholder="Search products..."
                  value={productSearch}
                  onChange={(e) => setProductSearch(e.target.value)}
                />
                <button className="btn-admin-primary" onClick={openAddProduct}>
                  <i className="fa-solid fa-plus"></i> Add Product
                </button>
              </div>
            </div>

            <div className="admin-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Subcategory</th>
                    <th>Price</th>
                    <th>Old Price</th>
                    <th>Flags</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products
                    .filter(p => p.name.toLowerCase().includes(productSearch.toLowerCase()))
                    .map(p => (
                      <tr key={p.id}>
                        <td>
                          <div className="admin-product-meta-cell">
                            <img src={p.img} alt={p.name} className="admin-product-thumb" />
                            <div>
                              <div className="admin-product-name">{p.name}</div>
                              <div className="admin-product-desc">{p.desc}</div>
                            </div>
                          </div>
                        </td>
                        <td><span style={{ textTransform: 'capitalize' }}>{p.category}</span></td>
                        <td><span style={{ textTransform: 'capitalize' }}>{p.subCategory || '-'}</span></td>
                        <td style={{ fontWeight: '600' }}>${Number(p.price).toFixed(2)}</td>
                        <td>{p.oldPrice ? `$${Number(p.oldPrice).toFixed(2)}` : '-'}</td>
                        <td>
                          <div style={{ display: 'flex', gap: '5px' }}>
                            {p.isBestseller && <span style={{ background: '#d4af37', color: '#000', fontSize: '0.7rem', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>BEST</span>}
                            {p.isSale && <span style={{ background: '#C84B70', color: '#fff', fontSize: '0.7rem', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>SALE</span>}
                          </div>
                        </td>
                        <td>
                          <div className="admin-action-btns">
                            <button className="admin-icon-btn edit" onClick={() => openEditProduct(p)} title="Edit">
                              <i className="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button className="admin-icon-btn delete" onClick={() => {
                              if (window.confirm(`Are you sure you want to delete ${p.name}?`)) {
                                deleteProduct(p.id);
                                showToast(`Deleted product "${p.name}".`);
                              }
                            }} title="Delete">
                              <i className="fa-solid fa-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* CATEGORIES MANAGEMENT TAB */}
        {activeTab === 'categories' && (
          <div className="admin-section-card">
            <div className="admin-section-header">
              <h2>Categories Manager</h2>
            </div>
            <div className="admin-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Category ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Image Source</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map(c => (
                    <tr key={c.id}>
                      <td style={{ fontWeight: '600', color: '#C84B70' }}>{c.id}</td>
                      <td style={{ color: '#FFF', fontWeight: '600' }}>{c.name}</td>
                      <td>{c.desc}</td>
                      <td style={{ fontSize: '0.8rem', color: '#A69595' }}>{c.img}</td>
                      <td>
                        <button className="admin-icon-btn edit" onClick={() => openEditCategory(c)}>
                          <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ORDERS MANAGEMENT TAB */}
        {activeTab === 'orders' && (
          <div className="admin-section-card">
            <div className="admin-section-header">
              <h2>Orders Tracker</h2>
              <input 
                type="text" 
                className="admin-search-input" 
                placeholder="Search Order ID..."
                value={orderSearch}
                onChange={(e) => setOrderSearch(e.target.value)}
              />
            </div>
            <div className="admin-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Items</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Status Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders
                    .filter(o => o.id.toLowerCase().includes(orderSearch.toLowerCase()))
                    .map(o => (
                      <tr key={o.id}>
                        <td style={{ fontWeight: '600', color: '#FFF' }}>{o.id}</td>
                        <td>{o.date}</td>
                        <td style={{ maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{o.items}</td>
                        <td style={{ fontWeight: '600' }}>${Number(o.total).toFixed(2)}</td>
                        <td>
                          <span style={{
                            padding: '4px 10px',
                            borderRadius: '20px',
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            backgroundColor: o.status === 'Delivered' ? 'rgba(46,204,113,0.15)' : o.status === 'Shipped' ? 'rgba(52,152,219,0.15)' : 'rgba(241,196,15,0.15)',
                            color: o.status === 'Delivered' ? '#2ecc71' : o.status === 'Shipped' ? '#3498db' : '#f1c40f'
                          }}>{o.status}</span>
                        </td>
                        <td>
                          <select 
                            className="admin-status-select"
                            value={o.status}
                            onChange={(e) => {
                              updateOrderStatus(o.id, e.target.value);
                              showToast(`Order ${o.id} marked as ${e.target.value}`);
                            }}
                          >
                            <option value="Processing">Processing</option>
                            <option value="Shipped">Shipped</option>
                            <option value="Delivered">Delivered</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* HOMEPAGE BANNER CONFIG MANAGEMENT TAB */}
        {activeTab === 'content' && (
          <div className="admin-section-card" style={{ maxWidth: '700px' }}>
            <h2>Storefront Customizer</h2>
            <p style={{ color: '#A69595', marginBottom: '25px', fontSize: '0.9rem' }}>
              Modify landing texts and graphics instantly.
            </p>
            <form onSubmit={handleHeroSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="admin-form-group">
                <label>Main Hero Title</label>
                <input 
                  type="text" 
                  value={heroForm.title}
                  onChange={(e) => setHeroForm({ ...heroForm, title: e.target.value })}
                  required
                />
              </div>
              <div className="admin-form-group">
                <label>Hero Description</label>
                <textarea 
                  rows="3"
                  value={heroForm.subtitle}
                  onChange={(e) => setHeroForm({ ...heroForm, subtitle: e.target.value })}
                  required
                  style={{ background: '#120F0F', color: '#FFF', border: '1px solid rgba(200,75,112,0.15)', padding: '10px', borderRadius: '6px' }}
                />
              </div>
              <div className="admin-form-group">
                <label>Hero Banner Image Link</label>
                <input 
                  type="text" 
                  value={heroForm.img}
                  onChange={(e) => setHeroForm({ ...heroForm, img: e.target.value })}
                  required
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                <button type="submit" className="btn-admin-primary">
                  <i className="fa-solid fa-floppy-disk"></i> Apply Live Changes
                </button>
              </div>
            </form>
          </div>
        )}
      </main>

      {/* ADD / EDIT PRODUCT MODAL */}
      {productModal.open && (
        <div className="admin-modal-overlay" onClick={() => setProductModal({ open: false, mode: 'add', data: null })}>
          <div className="admin-modal-card" onClick={(e) => e.stopPropagation()}>
            <h3>{productModal.mode === 'add' ? 'Add New Beauty Product' : 'Edit Product'}</h3>
            <form onSubmit={handleProductSubmit} className="admin-form">
              <div className="admin-form-group full-width">
                <label>Product Name</label>
                <input 
                  type="text" 
                  value={productForm.name}
                  onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                  required 
                />
              </div>
              <div className="admin-form-group">
                <label>Price ($)</label>
                <input 
                  type="number" 
                  step="0.01"
                  value={productForm.price}
                  onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
                  required 
                />
              </div>
              <div className="admin-form-group">
                <label>Old Price ($)</label>
                <input 
                  type="number" 
                  step="0.01"
                  value={productForm.oldPrice}
                  onChange={(e) => setProductForm({ ...productForm, oldPrice: e.target.value })}
                  placeholder="Optional"
                />
              </div>
              <div className="admin-form-group">
                <label>Main Category</label>
                <select 
                  value={productForm.category}
                  onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                >
                  <option value="skincare">Skincare</option>
                  <option value="makeup">Makeup</option>
                  <option value="haircare">Haircare</option>
                  <option value="fragrance">Fragrance</option>
                  <option value="accessories">Accessories</option>
                </select>
              </div>
              <div className="admin-form-group">
                <label>Haircare Subcategory</label>
                <select 
                  value={productForm.subCategory}
                  onChange={(e) => setProductForm({ ...productForm, subCategory: e.target.value })}
                >
                  <option value="">None (Non-haircare)</option>
                  <option value="shampoo">Shampoo</option>
                  <option value="conditioner">Conditioner</option>
                  <option value="mask-treatment">Mask & Treatment</option>
                  <option value="oil-serum">Oil & Serum</option>
                  <option value="mist">Mist</option>
                  <option value="styling">Styling</option>
                </select>
              </div>
              <div className="admin-form-group full-width">
                <label>Image URL</label>
                <input 
                  type="text" 
                  value={productForm.img}
                  onChange={(e) => setProductForm({ ...productForm, img: e.target.value })}
                  required 
                />
              </div>
              <div className="admin-form-group full-width">
                <label>Short Description</label>
                <textarea 
                  rows="3"
                  value={productForm.desc}
                  onChange={(e) => setProductForm({ ...productForm, desc: e.target.value })}
                  required
                  style={{ background: '#120F0F', color: '#FFF', border: '1px solid rgba(200,75,112,0.15)', padding: '10px', borderRadius: '6px' }}
                />
              </div>
              <div className="admin-form-group">
                <label>Product Display Tag</label>
                <input 
                  type="text" 
                  value={productForm.tag}
                  onChange={(e) => setProductForm({ ...productForm, tag: e.target.value })}
                  placeholder="e.g. BESTSELLER, NEW, SALE"
                />
              </div>
              <div className="admin-form-group" style={{ justifyContent: 'center' }}>
                <label className="admin-checkbox-group">
                  <input 
                    type="checkbox" 
                    checked={productForm.isBestseller}
                    onChange={(e) => setProductForm({ ...productForm, isBestseller: e.target.checked })}
                  />
                  <span>Mark as Bestseller</span>
                </label>
                <label className="admin-checkbox-group">
                  <input 
                    type="checkbox" 
                    checked={productForm.isSale}
                    onChange={(e) => setProductForm({ ...productForm, isSale: e.target.checked })}
                  />
                  <span>Mark as Sale Item</span>
                </label>
              </div>

              <div className="admin-modal-actions">
                <button type="button" className="btn-admin-secondary" onClick={() => setProductModal({ open: false, mode: 'add', data: null })}>
                  Cancel
                </button>
                <button type="submit" className="btn-admin-primary">
                  {productModal.mode === 'add' ? 'Create Product' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* EDIT CATEGORY MODAL */}
      {categoryModal.open && (
        <div className="admin-modal-overlay" onClick={() => setCategoryModal({ open: false, data: null })}>
          <div className="admin-modal-card" onClick={(e) => e.stopPropagation()}>
            <h3>Customize Category: {categoryForm.name}</h3>
            <form onSubmit={handleCategorySubmit} className="admin-form">
              <div className="admin-form-group full-width">
                <label>Category Label Name</label>
                <input 
                  type="text" 
                  value={categoryForm.name}
                  onChange={(e) => setCategoryForm({ ...categoryForm, name: e.target.value })}
                  required 
                />
              </div>
              <div className="admin-form-group full-width">
                <label>Short Description Text</label>
                <input 
                  type="text" 
                  value={categoryForm.desc}
                  onChange={(e) => setCategoryForm({ ...categoryForm, desc: e.target.value })}
                  required 
                />
              </div>
              <div className="admin-form-group full-width">
                <label>Category Icon/Thumbnail URL</label>
                <input 
                  type="text" 
                  value={categoryForm.img}
                  onChange={(e) => setCategoryForm({ ...categoryForm, img: e.target.value })}
                  required 
                />
              </div>

              <div className="admin-modal-actions">
                <button type="button" className="btn-admin-secondary" onClick={() => setCategoryModal({ open: false, data: null })}>
                  Cancel
                </button>
                <button type="submit" className="btn-admin-primary">
                  Save Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
