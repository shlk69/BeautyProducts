import React from 'react';

const Features = () => {
  const uspList = [
    { icon: 'fa-truck', title: 'FREE SHIPPING', desc: 'On all orders over $50' },
    { icon: 'fa-award', title: 'HIGH QUALITY', desc: 'Premium quality products' },
    { icon: 'fa-arrows-rotate', title: 'EASY RETURNS', desc: '30-days money back guarantee' },
    { icon: 'fa-shield-halved', title: 'SECURE PAYMENT', desc: '100% secure checkout' }
  ];

  return (
    <section class="usp-section">
      <div class="usp-container">
        {uspList.map((item, index) => (
          <div class="usp-card" key={index}>
            <div class="usp-icon"><i class={`fa-solid ${item.icon}`}></i></div>
            <div class="usp-info">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
