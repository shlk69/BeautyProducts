import React from 'react';

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
          <a href="#" class="logo">
            <span class="logo-icon"><i class="fa-solid fa-leaf"></i></span>
            Zack <span>BEAUTY</span>
          </a>

          {/* Navigation Menu */}
          <nav class="navbar">
            <ul class="nav-links">
              <li><a href="#" class="active">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Skincare</a></li>
              <li><a href="#">Makeup</a></li>
              <li><a href="#">Haircare</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
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
