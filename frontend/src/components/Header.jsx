import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartCount }) => {
  return (
    <>
      {/* Top Announcement Bar */}
      <div class="top-announcement">
        <p><i class="fa-solid fa-truck-fast"></i> <strong>FREE SHIPPING</strong> on all orders over $50 | 30 Days Easy Returns</p>
      </div>

      {/* Header Navigation */}
      <header class="main-header">
        <div class="header-container">
          {/* Logo */}
          <Link to="/" class="logo">
            <span class="logo-icon"><i class="fa-solid fa-leaf"></i></span>
            Zack <span>BEAUTY</span>
          </Link>

          {/* Navigation Menu */}
          <nav class="navbar">
            <ul class="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/shop">Skincare</Link></li>
              <li><Link to="/shop">Makeup</Link></li>
              <li><Link to="/haircare">Haircare</Link></li>
              <li><Link to="/shop">Accessories</Link></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          {/* Utility Actions */}
          <div class="header-actions">
            <button class="action-btn" aria-label="Search"><i class="fa-solid fa-magnifying-glass"></i></button>
            <button class="action-btn" aria-label="Account"><i class="fa-regular fa-user"></i></button>
            <button class="action-btn cart-toggle-btn" aria-label="Cart">
              <i class="fa-solid fa-bag-shopping"></i>
              <span class="cart-badge" id="cartCount">{cartCount}</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
