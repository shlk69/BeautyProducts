import React from 'react';

const Footer = () => {
  return (
    <>
      {/* Bottom Quality Badges */}
      <section class="footer-badges-section">
        <div class="badges-container">
          <div class="badge-item">
            <span class="badge-icon"><i class="fa-solid fa-paw"></i></span>
            <h4>CRUELTY FREE</h4>
            <p>We never test on animals</p>
          </div>
          <div class="badge-item">
            <span class="badge-icon"><i class="fa-solid fa-seedling"></i></span>
            <h4>NATURAL INGREDIENTS</h4>
            <p>Clean & safe for your skin</p>
          </div>
          <div class="badge-item">
            <span class="badge-icon"><i class="fa-solid fa-stethoscope"></i></span>
            <h4>DERMATOLOGICALLY TESTED</h4>
            <p>Gentle & safe formulas</p>
          </div>
          <div class="badge-item">
            <span class="badge-icon"><i class="fa-solid fa-headset"></i></span>
            <h4>CUSTOMER SUPPORT</h4>
            <p>We're here to help you</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="site-footer">
        <div class="footer-container">
          <div class="footer-col brand-col">
            <a href="#" class="logo">
              <span class="logo-icon"><i class="fa-solid fa-leaf"></i></span>
              Zack <span>BEAUTY</span>
            </a>
            <p class="footer-desc">Enhance your natural beauty with our luxury skincare and makeup products. Clean formulas designed for gorgeous results.</p>
            <div class="social-links">
              <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i class="fa-brands fa-instagram"></i></a>
              <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
              <a href="#"><i class="fa-brands fa-twitter"></i></a>
            </div>
          </div>
          <div class="footer-col">
            <h3>QUICK LINKS</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Products</a></li>
              <li><a href="#">Beauty Blog</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h3>CUSTOMER SERVICE</h3>
            <ul>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Returns & Refunds</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div class="footer-col newsletter-col">
            <h3>NEWSLETTER</h3>
            <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form class="subscribe-form" onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully!'); }}>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 Zack Beauty. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
