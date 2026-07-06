import React from 'react';
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
import AllProductsPage from './pages/AllProductsPage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import { useCart } from './context/CartContext';
import ProfilePage from './pages/ProfilePage';
import { useShopData } from './context/ShopDataContext';
import AdminPage from './pages/AdminPage';


function App() {
  const { addToCart, cartCount } = useCart();
  const { products } = useShopData();

  // Filter bestseller products from context
  const bestSellers = (products || []).filter(p => p.isBestseller);


  const handleAddToCart = (product) => {
    addToCart(product);
    showToastNotification(`Added ${product.name} to your bag!`);
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
            <BestSellers products={bestSellers} onAddToCart={handleAddToCart} />
            <Promotions />
            <Instagram />
            <Footer />
          </div>
        } />
        <Route path="/haircare" element={<HaircarePage />} />
        <Route path="/shop" element={<AllProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
