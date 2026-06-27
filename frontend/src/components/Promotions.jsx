import React from 'react';

const Promotions = () => {
  return (
    <section class="banners-section">
      <div class="banners-container">
        <div class="promo-banner style-skincare" style={{ backgroundImage: `url('/images/banner_skincare.png')` }}>
          <div class="banner-content">
            <span class="banner-tag">SPECIAL OFFER</span>
            <h3>Up To 30% Off<br />On Skincare Products</h3>
            <a href="#" class="btn btn-primary btn-sm">SHOP NOW</a>
          </div>
        </div>
        <div class="promo-banner style-makeup" style={{ backgroundImage: `url('/images/banner_makeup.png')` }}>
          <div class="banner-content">
            <span class="banner-tag">NEW ARRIVALS</span>
            <h3>Fresh & Trendy<br />Makeup Collection</h3>
            <a href="#" class="btn btn-primary btn-sm">DISCOVER NOW</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
// 
