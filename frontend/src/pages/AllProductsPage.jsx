import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import '../styles/AllProductsPage.css';

// All products mock database
const allProductsData = [
  // Skincare
  {
    id: 1,
    name: 'Hyaluronic Acid Serum',
    price: 24.99,
    img: '/images/product_serum.png',
    rating: 5,
    reviews: 123,
    isSale: false,
    category: 'skincare',
    desc: 'Deep hydration serum infused with pure hyaluronic acid for plump, radiant skin.'
  },
  {
    id: 3,
    name: 'Collagen Night Cream',
    price: 19.99,
    img: '/images/product_night_cream.png',
    rating: 5,
    reviews: 123,
    isSale: false,
    category: 'skincare',
    desc: 'Overnight collagen-boosting moisturizer that restores firmness and reduces fine lines.'
  },
  {
    id: 101,
    name: 'Vitamin C Brightening Cleanser',
    price: 16.99,
    oldPrice: 21.99,
    img: '/images/category_skincare.png', // Fallback or placeholder, categories look nice
    rating: 4,
    reviews: 84,
    isSale: true,
    category: 'skincare',
    desc: 'Refreshing daily cleanser that washes away impurities and illuminates dull skin.'
  },
  // Makeup
  {
    id: 2,
    name: 'Makeup Brush Set (10pcs)',
    price: 29.99,
    img: '/images/product_brush_set.png',
    rating: 5,
    reviews: 123,
    isSale: false,
    category: 'makeup',
    desc: 'Premium synthetic fiber brushes for professional-grade makeup application.'
  },
  {
    id: 4,
    name: 'Matte Lipstick',
    price: 14.59,
    oldPrice: 19.99,
    img: '/images/product_lipstick.png',
    rating: 5,
    reviews: 123,
    isSale: true,
    category: 'makeup',
    desc: 'Highly pigmented matte lipstick that stays vibrant all day without drying.'
  },
  {
    id: 201,
    name: 'Liquid Foundation SPF 15',
    price: 22.49,
    img: '/images/category_makeup.png',
    rating: 4,
    reviews: 65,
    isSale: false,
    category: 'makeup',
    desc: 'Lightweight buildable foundation that matches skin tone for a flawless finish.'
  },
  // Haircare
  {
    id: 301,
    name: 'Argan Oil Hair Serum',
    price: 22.99,
    oldPrice: 29.99,
    img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 214,
    isSale: true,
    category: 'haircare',
    desc: 'Lightweight serum with pure Moroccan argan oil for frizz-free, glossy hair.'
  },
  {
    id: 302,
    name: 'Keratin Repair Mask',
    price: 18.99,
    img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 98,
    isSale: false,
    category: 'haircare',
    desc: 'Deep repair treatment that restores elasticity and shine in damaged hair.'
  },
  {
    id: 303,
    name: 'Scalp Refresh Shampoo',
    price: 15.99,
    img: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 176,
    isSale: false,
    category: 'haircare',
    desc: 'Gentle, sulfate-free shampoo that cleanses and balances scalp health.'
  },
  // Fragrance
  {
    id: 5,
    name: 'Luxury Perfume',
    price: 34.99,
    oldPrice: 49.99,
    img: '/images/product_perfume.png',
    rating: 5,
    reviews: 123,
    isSale: true,
    category: 'fragrance',
    desc: 'Exquisite blend of floral and woody notes designed for special occasions.'
  },
  {
    id: 401,
    name: 'Rose Oud Body Mist',
    price: 18.00,
    img: '/images/category_fragrance.png',
    rating: 5,
    reviews: 42,
    isSale: false,
    category: 'fragrance',
    desc: 'Sensual body mist featuring rich rose petals and dark agarwood.'
  },
  // Accessories
  {
    id: 501,
    name: 'Rose Quartz Facial Roller',
    price: 15.99,
    oldPrice: 24.99,
    img: '/images/category_accessories.png',
    rating: 4,
    reviews: 56,
    isSale: true,
    category: 'accessories',
    desc: 'Dual-sided facial massager to promote blood circulation and reduce puffiness.'
  }
];

export default function AllProductsPage() {
  const [cartCount, setCartCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const handleAddToCart = (productName) => {
    setCartCount(prev => prev + 1);
    // Simple toast notification
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> Added ${productName} to your bag!`;
    
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
  const filteredProducts = allProductsData
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
