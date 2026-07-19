import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Top Announcement Bar */}
      <div class="top-announcement">
        <p><i class="fa-solid fa-truck-fast"></i> <strong>FREE SHIPPING</strong> on all orders over ₹500 | 30 Days Easy Returns</p>
      </div>

      {/* Header Navigation */}
      <header class="main-header">
        <div class="header-container">
          {/* Logo */}
          <Link to="/" class="logo" onClick={closeMenu}>
            <span class="logo-icon"><i class="fa-solid fa-leaf"></i></span>
            Zack <span>BEAUTY</span>
          </Link>

          {/* Desktop Navigation Menu */}
          <nav class="navbar">
            <ul class="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/shop">Skincare</Link></li>
              <li><Link to="/shop">Makeup</Link></li>
              <li><Link to="/haircare">Haircare</Link></li>
              <li><Link to="/shop">Accessories</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          {/* Utility Actions */}
          <div class="header-actions">
            <button class="action-btn" aria-label="Search"><i class="fa-solid fa-magnifying-glass"></i></button>
            <Link to="/profile" className="action-btn" aria-label="Account"><i className="fa-regular fa-user"></i></Link>
            <Link to="/cart" className="action-btn cart-toggle-btn" aria-label="Cart">
              <i className="fa-solid fa-bag-shopping"></i>
              <span className="cart-badge" id="cartCount">{cartCount}</span>
            </Link>
            {/* Hamburger Button */}
            <button
              class={`hamburger-btn${menuOpen ? ' open' : ''}`}
              aria-label="Toggle Menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div class={`mobile-nav${menuOpen ? ' active' : ''}`}>
          <ul class="mobile-nav-links">
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/shop" onClick={closeMenu}>Shop</Link></li>
            <li><Link to="/shop" onClick={closeMenu}>Skincare</Link></li>
            <li><Link to="/shop" onClick={closeMenu}>Makeup</Link></li>
            <li><Link to="/haircare" onClick={closeMenu}>Haircare</Link></li>
            <li><Link to="/shop" onClick={closeMenu}>Accessories</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
