import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/HaircarePage.css';

const haircareProducts = [
  {
    id: 1,
    name: 'Argan Oil Hair Serum',
    price: 22.99,
    oldPrice: 29.99,
    tag: 'BESTSELLER',
    img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 214,
    desc: 'Lightweight serum with pure Moroccan argan oil for frizz-free, glossy hair.'
  },
  {
    id: 2,
    name: 'Keratin Repair Mask',
    price: 18.99,
    oldPrice: null,
    tag: 'NEW',
    img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 98,
    desc: 'Deep repair treatment that restores elasticity and shine in damaged hair.'
  },
  {
    id: 3,
    name: 'Scalp Refresh Shampoo',
    price: 15.99,
    oldPrice: null,
    tag: null,
    img: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 176,
    desc: 'Gentle, sulfate-free shampoo that cleanses and balances scalp health.'
  },
  {
    id: 4,
    name: 'Biotin Volume Conditioner',
    price: 16.49,
    oldPrice: 21.99,
    tag: 'SALE',
    img: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 132,
    desc: 'Adds body and volume while nourishing strands with biotin & panthenol.'
  },
  {
    id: 5,
    name: 'Rose Water Hair Mist',
    price: 12.99,
    oldPrice: null,
    tag: null,
    img: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 89,
    desc: 'Refreshing floral mist that hydrates and adds a soft, natural fragrance.'
  },
  {
    id: 6,
    name: 'Hot Oil Treatment',
    price: 19.99,
    oldPrice: null,
    tag: 'NEW',
    img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 61,
    desc: 'Pre-shampoo warming oil blend for ultra-soft, manageable hair.'
  }
];

const tips = [
  {
    icon: 'fa-temperature-low',
    title: 'Avoid Heat Damage',
    desc: 'Always use a heat protectant spray before styling with hot tools. Keep temperature below 180°C for healthier hair.'
  },
  {
    icon: 'fa-droplet',
    title: 'Deep Condition Weekly',
    desc: 'Apply a hydrating mask from mid-length to tips every 7 days to restore moisture and prevent breakage.'
  },
  {
    icon: 'fa-scissors',
    title: 'Trim Regularly',
    desc: 'A trim every 8–12 weeks prevents split ends from traveling up the shaft and keeps your style fresh.'
  },
  {
    icon: 'fa-bed',
    title: 'Silk Pillowcase',
    desc: 'Switch to a silk or satin pillowcase to reduce friction, frizz, and breakage while you sleep.'
  }
];

const StarRating = ({ rating }) => (
  <div className="hc-stars">
    {[1, 2, 3, 4, 5].map(i => (
      <i key={i} className={`fa-star ${i <= rating ? 'fa-solid' : 'fa-regular'}`}></i>
    ))}
  </div>
);

export default function HaircarePage() {
  const [cartCount, setCartCount] = useState(0);
  const [addedId, setAddedId] = useState(null);

  const handleAdd = (product) => {
    setCartCount(prev => prev + 1);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <div className="App">
      <Header cartCount={cartCount} />

      {/* ── HERO ── */}
      <section className="hc-hero">
        <div className="hc-hero-overlay" />
        <div className="hc-hero-content">
          <span className="hc-hero-tag">
            <i className="fa-solid fa-wind"></i>&nbsp; HAIRCARE COLLECTION
          </span>
          <h1>
            Restore. Strengthen.<br />
            <span className="hc-hero-accent">Glow.</span>
          </h1>
          <p>Premium formulas crafted to nourish every strand — from root to tip.</p>
          <div className="hc-hero-btns">
            <a href="#hc-products" className="btn btn-primary">SHOP NOW</a>
            <a href="#hc-tips" className="btn btn-text">
              Hair Tips &nbsp;<i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="hc-hero-badge-group">
          <div className="hc-hero-badge"><i className="fa-solid fa-leaf"></i> Natural</div>
          <div className="hc-hero-badge"><i className="fa-solid fa-paw"></i> Cruelty-Free</div>
          <div className="hc-hero-badge"><i className="fa-solid fa-flask"></i> Dermatologist Tested</div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="hc-stats">
        {[
          { num: '50K+', label: 'Happy Customers' },
          { num: '100%', label: 'Natural Ingredients' },
          { num: '4.9★', label: 'Average Rating' },
          { num: '30-Day', label: 'Money Back' }
        ].map((s, i) => (
          <div className="hc-stat-item" key={i}>
            <strong>{s.num}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── PRODUCTS ── */}
      <section className="hc-products-section" id="hc-products">
        <div className="hc-section-head">
          <p className="hc-section-sub">HANDPICKED FOR YOU</p>
          <h2 className="hc-section-title">Best Haircare Products</h2>
          <div className="hc-divider"><i className="fa-solid fa-spa"></i></div>
        </div>

        <div className="hc-products-grid">
          {haircareProducts.map(product => (
            <div className="hc-product-card" key={product.id}>
              {product.tag && (
                <span className={`hc-product-tag hc-tag-${product.tag.toLowerCase()}`}>
                  {product.tag}
                </span>
              )}
              <div className="hc-product-img-box">
                <img src={product.img} alt={product.name} loading="lazy" />
                <div className="hc-product-overlay">
                  <button
                    className={`hc-quick-add ${addedId === product.id ? 'added' : ''}`}
                    onClick={() => handleAdd(product)}
                  >
                    {addedId === product.id
                      ? <><i className="fa-solid fa-check"></i> Added!</>
                      : <><i className="fa-solid fa-bag-shopping"></i> Add to Bag</>
                    }
                  </button>
                </div>
              </div>
              <div className="hc-product-info">
                <h3 className="hc-product-name">{product.name}</h3>
                <p className="hc-product-desc">{product.desc}</p>
                <div className="hc-product-meta">
                  <StarRating rating={product.rating} />
                  <span className="hc-reviews">({product.reviews})</span>
                </div>
                <div className="hc-product-price-row">
                  <span className="hc-price">${product.price.toFixed(2)}</span>
                  {product.oldPrice && (
                    <span className="hc-old-price">${product.oldPrice.toFixed(2)}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROMO BANNER ── */}
      <section className="hc-promo">
        <div className="hc-promo-content">
          <span className="hc-promo-tag">LIMITED OFFER</span>
          <h2>Get 25% Off Your First Haircare Order</h2>
          <p>Use code <strong>HAIRLOVE25</strong> at checkout. Valid for new customers only.</p>
          <a href="#hc-products" className="btn btn-primary">CLAIM OFFER</a>
        </div>
        <div className="hc-promo-deco">
          <i className="fa-solid fa-spa hc-deco-icon"></i>
        </div>
      </section>

      {/* ── TIPS ── */}
      <section className="hc-tips-section" id="hc-tips">
        <div className="hc-section-head">
          <p className="hc-section-sub">EXPERT ADVICE</p>
          <h2 className="hc-section-title">Haircare Tips</h2>
          <div className="hc-divider"><i className="fa-solid fa-crown"></i></div>
        </div>
        <div className="hc-tips-grid">
          {tips.map((tip, i) => (
            <div className="hc-tip-card" key={i}>
              <div className="hc-tip-icon">
                <i className={`fa-solid ${tip.icon}`}></i>
              </div>
              <h3>{tip.title}</h3>
              <p>{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="hc-testimonials">
        <div className="hc-section-head">
          <p className="hc-section-sub">REAL REVIEWS</p>
          <h2 className="hc-section-title">What Our Customers Say</h2>
          <div className="hc-divider"><i className="fa-solid fa-heart"></i></div>
        </div>
        <div className="hc-reviews-grid">
          {[
            { name: 'Priya S.', text: 'The Argan Oil Serum completely transformed my frizzy hair. I use it every morning and my hair has never looked this shiny!', stars: 5 },
            { name: 'Meera K.', text: 'I was skeptical at first but the Keratin Repair Mask gave me salon-level results at home. Highly recommend!', stars: 5 },
            { name: 'Alisha R.', text: 'The Scalp Refresh Shampoo is so gentle — no more itchy scalp. My hair feels clean and lightweight all day.', stars: 4 }
          ].map((r, i) => (
            <div className="hc-review-card" key={i}>
              <StarRating rating={r.stars} />
              <p className="hc-review-text">"{r.text}"</p>
              <strong className="hc-reviewer">— {r.name}</strong>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
