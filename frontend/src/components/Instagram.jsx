import React from 'react';

const Instagram = () => {
  const instaImages = [
    '/images/product_serum.png',
    '/images/category_makeup.png',
    '/images/hero_model.png',
    '/images/category_skincare.png',
    '/images/product_lipstick.png',
    '/images/product_perfume.png'
  ];

  return (
    <section class="instagram-section">
      <h2 class="section-title">FOLLOW US ON INSTAGRAM</h2>

      <div class="insta-grid">
        {instaImages.map((imgSrc, idx) => (
          <div class="insta-item" key={idx}>
            <img src={imgSrc} alt={`Instagram Post ${idx + 1}`} />
            <div class="insta-overlay"><i class="fa-brands fa-instagram"></i></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instagram;
