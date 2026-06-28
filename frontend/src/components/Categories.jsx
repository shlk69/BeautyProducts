import React from 'react';

const Categories = () => {
  const categoryItems = [
    { title: 'SKINCARE', img: '/images/category_skincare.png' },
    { title: 'MAKEUP', img: '/images/category_makeup.png' },
    { title: 'HAIRCARE', img: '/images/category_haircare.png' },
    { title: 'ACCESSORIES', img: '/images/category_accessories.png' },
    { title: 'FRAGRANCE', img: '/images/category_fragrance.png' }
  ];

  return (
    <section class="categories-section" id="shop">
      <div id="skincare" style={{scrollMarginTop: '80px'}}></div>
      <div id="makeup" style={{scrollMarginTop: '80px'}}></div>
      <div id="haircare" style={{scrollMarginTop: '80px'}}></div>
      <div id="accessories" style={{scrollMarginTop: '80px'}}></div>
      <h2 class="section-title">SHOP BY CATEGORY</h2>
      <div class="category-divider"><i class="fa-solid fa-crown"></i></div>
      <div class="categories-container">
        {categoryItems.map((cat, idx) => (
          <div class="category-card" key={idx}>
            <div class="category-img-box">
              <img src={cat.img} alt={`${cat.title} Category`} />
            </div>
            <h3>{cat.title}</h3>
            <a href="#" class="category-link">Shop Now <i class="fa-solid fa-arrow-right-long"></i></a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
