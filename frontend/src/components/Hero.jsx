import React from 'react';

const Hero = () => {
  return (
    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <span class="hero-subtitle">ENHANCE YOUR NATURAL BEAUTY</span>
          <h1 class="hero-title">Glow Up With<br />Premium Beauty<br /><span class="highlight">Products</span></h1>
          <p class="hero-description">Discover high-quality makeup & skincare that makes you shine every day. Carefully crafted, dermatologically tested, and cruelty-free.</p>
          <div class="hero-actions">
            <a href="#" class="btn btn-primary">SHOP NOW</a>
            <a href="#" class="btn btn-text">BROWSE COLLECTIONS <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
        <div class="hero-image-wrapper">
          <div class="hero-circle-bg"></div>
          <img src="/images/hero_model.png" alt="Zack Beauty Model Showcase" class="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
