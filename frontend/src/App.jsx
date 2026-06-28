import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Categories from './components/Categories';
import BestSellers from './components/BestSellers';
import Promotions from './components/Promotions';
import Instagram from './components/Instagram';
import Footer from './components/Footer';
import HaircarePage from './pages/HaircarePage';

function App() {
  const [cartCount, setCartCount] = useState(0);

  // Best Sellers Products Array
  const products = [
    {
      id: 1,
      name: 'Hyaluronic Acid Serum',
      price: 24.99,
      img: '/images/product_serum.png',
      rating: 5,
      reviews: 123,
      isSale: false
    },
    {
      id: 2,
      name: 'Makeup Brush Set (10pcs)',
      price: 29.99,
      img: '/images/product_brush_set.png',
      rating: 5,
      reviews: 123,
      isSale: false
    },
    {
      id: 3,
      name: 'Collagen Night Cream',
      price: 19.99,
      img: '/images/product_night_cream.png',
      rating: 5,
      reviews: 123,
      isSale: false
    },
    {
      id: 4,
      name: 'Matte Lipstick',
      price: 14.59,
      oldPrice: 19.99,
      img: '/images/product_lipstick.png',
      rating: 5,
      reviews: 123,
      isSale: true
    },
    {
      id: 5,
      name: 'Luxury Perfume',
      price: 34.99,
      oldPrice: 49.99,
      img: '/images/product_perfume.png',
      rating: 5,
      reviews: 123,
      isSale: true
    }
  ];

  const handleAddToCart = (productName) => {
    setCartCount(prev => prev + 1);
    showToastNotification(`Added ${productName} to your bag!`);
  };

  const showToastNotification = (message) => {
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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <Header cartCount={cartCount} />
            <Hero />
            <Features />
            <Categories />
            <BestSellers products={products} onAddToCart={handleAddToCart} />
            <Promotions />
            <Instagram />
            <Footer />
          </div>
        } />
        <Route path="/haircare" element={<HaircarePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
