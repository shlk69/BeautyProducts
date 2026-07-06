import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import '../styles/AllProductsPage.css';
import { useCart } from '../context/CartContext';

import { useShopData } from '../context/ShopDataContext';

export default function AllProductsPage() {

  const { products } = useShopData();
  const { addToCart, cartCount } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const handleAddToCart = (product) => {
    addToCart(product);
    // Simple toast notification
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> Added ${product.name} to your bag!`;
    
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

  // Filter and sort products
  const filteredProducts = (products || [])
    .filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low-high') {
        return a.price - b.price;
      }
      if (sortBy === 'price-high-low') {
        return b.price - a.price;
      }
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      // default / featured
      return a.id - b.id;
    });

  return (
    <div className="App">
      <Header cartCount={cartCount} />

      {/* Hero Header */}
      <section className="all-products-hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Explore All Beauty</h1>
          <p>Carefully curated premium beauty products for your skin, hair, and makeup essentials.</p>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="catalog-section">
        {/* Toolbar: Category Filters, Search, Sort */}
        <div className="catalog-toolbar">
          <div className="search-box-wrapper">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="category-filters">
            {[
              { id: 'all', label: 'All Products' },
              { id: 'skincare', label: 'Skincare' },
              { id: 'makeup', label: 'Makeup' },
              { id: 'haircare', label: 'Haircare' },
              { id: 'fragrance', label: 'Fragrance' },
              { id: 'accessories', label: 'Accessories' }
            ].map(cat => (
              <button
                key={cat.id}
                className={`filter-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="sort-wrapper">
            <label htmlFor="sort-select">Sort By: </label>
            <select 
              id="sort-select" 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-dropdown"
            >
              <option value="featured">Featured</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="catalog-grid">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id}
                name={product.name}
                price={product.price}
                oldPrice={product.oldPrice}
                img={product.img}
                rating={product.rating}
                reviews={product.reviews}
                isSale={product.isSale}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="no-products-found">
            <i className="fa-regular fa-face-frown"></i>
            <h3>No Products Found</h3>
            <p>Try refining your search query or choosing another category.</p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
