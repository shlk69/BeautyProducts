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
    desc: 'Lightweight serum with pure Moroccan argan oil for frizz-free, glossy hair.',
    category: 'oil-serum'
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
    desc: 'Deep repair treatment that restores elasticity and shine in damaged hair.',
    category: 'mask-treatment'
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
    desc: 'Gentle, sulfate-free shampoo that cleanses and balances scalp health.',
    category: 'shampoo'
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
    desc: 'Adds body and volume while nourishing strands with biotin & panthenol.',
    category: 'conditioner'
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
    desc: 'Refreshing floral mist that hydrates and adds a soft, natural fragrance.',
    category: 'oil-serum'
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
    desc: 'Pre-shampoo warming oil blend for ultra-soft, manageable hair.',
    category: 'mask-treatment'
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

const quizQuestions = [
  {
    id: 'concern',
    question: 'What is your primary hair concern?',
    options: [
      { value: 'frizz', text: 'Frizzy & Unruly Hair', icon: 'fa-wind' },
      { value: 'damage', text: 'Damage & Split Ends', icon: 'fa-band-aid' },
      { value: 'dryness', text: 'Dryness & Dullness', icon: 'fa-tint-slash' },
      { value: 'volume', text: 'Flat & Thinning Hair', icon: 'fa-compress-alt' }
    ]
  },
  {
    id: 'type',
    question: 'What is your hair type?',
    options: [
      { value: 'straight', text: 'Straight / Fine', icon: 'fa-grip-lines' },
      { value: 'wavy', text: 'Wavy / Medium', icon: 'fa-water' },
      { value: 'curly', text: 'Curly / Coily', icon: 'fa-redo-alt' }
    ]
  }
];

const quizRecommendations = {
  'frizz-straight': {
    title: 'Sleek & Smooth Routine',
    products: [1, 5],
    desc: 'A lightweight hydration combination to keep fine hair frizz-free and ultra-glossy without weighing it down.'
  },
  'frizz-wavy': {
    title: 'Frizz-Control Wave Routine',
    products: [1, 2],
    desc: 'Deep Keratin repair combined with Argan Oil to lock out humidity and define beautiful, bouncy waves.'
  },
  'frizz-curly': {
    title: 'Coil Definition & Moisture Routine',
    products: [1, 2, 6],
    desc: 'The ultimate moisturizing trio to saturate curly locks, prevent breakage, and define rich coils.'
  },
  'damage-straight': {
    title: 'Keratin Fortifying Routine',
    products: [2, 4],
    desc: 'Biotin-infused volume paired with repair mask to reconstruct damaged strands and promote fullness.'
  },
  'damage-wavy': {
    title: 'Restorative Wave Therapy',
    products: [2, 6],
    desc: 'A nourishing combination of hot oil pre-treatment and keratin repair mask to restore wave elasticity.'
  },
  'damage-curly': {
    title: 'Deep Damage Reconstruction',
    products: [2, 6, 1],
    desc: 'Saturates curly hair with deep keratin repair, hot oil nutrients, and argan oil to seal split ends.'
  },
  'dryness-straight': {
    title: 'Light Hydration Glow',
    products: [5, 1],
    desc: 'Rose water mist refreshes, while a touch of argan oil locks in glossy shine for a brilliant finish.'
  },
  'dryness-wavy': {
    title: 'Moisture Lock Therapy',
    products: [2, 5],
    desc: 'Infuse waves with a deeply conditioning mask and refresh daily with rose water hydration.'
  },
  'dryness-curly': {
    title: 'Rich Moisture Saturation',
    products: [6, 2, 5],
    desc: 'The complete dry hair solution: intensive hot oil, deep conditioning mask, and rose water hydration.'
  },
  'volume-straight': {
    title: 'Volume Booster Routine',
    products: [4, 3],
    desc: 'Scalp cleansing shampoo removes residue while Biotin conditioner infuses weightless body.'
  },
  'volume-wavy': {
    title: 'Bouncy Volume & Repair',
    products: [4, 5],
    desc: 'Add body with Biotin volume conditioner and keep waves refreshed and light with Rose Water Mist.'
  },
  'volume-curly': {
    title: 'Defined Curl Volume',
    products: [3, 4, 1],
    desc: 'Cleanse the scalp thoroughly, condition with Biotin for bounce, and style with Argan Oil serum.'
  }
};

const faqs = [
  {
    q: 'How often should I use the Keratin Repair Mask?',
    a: 'For best results, use it 1–2 times a week in place of your regular conditioner. Leave it on damp hair for 10–15 minutes before rinsing thoroughly with cool water.'
  },
  {
    q: 'Are Zack Beauty products sulfate-free?',
    a: 'Yes, all our haircare products are 100% sulfate-free, paraben-free, and safe for color-treated or chemically processed hair.'
  },
  {
    q: 'What is the best way to apply the Argan Oil Hair Serum?',
    a: 'Apply 1–2 pumps to damp hair from mid-lengths to ends before blow-drying. You can also apply a tiny fraction of a pump to dry hair to tame flyaways and add instant shine.'
  },
  {
    q: 'How does the Hot Oil Treatment work?',
    a: 'Warm the bottle in a cup of hot tap water for 1 minute. Apply to dry hair and scalp, massaging gently. Leave it on for 10–15 minutes, then shampoo and rinse as usual.'
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
  
  // Category Filter state
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Quiz state
  const [quizAnswersState, setQuizAnswersState] = useState({ concern: '', type: '' });
  const [currentQuizStep, setCurrentQuizStep] = useState(0);
  const [showQuizResult, setShowQuizResult] = useState(false);

  // FAQ Accordion state
  const [activeFaq, setActiveFaq] = useState(null);

  const handleAdd = (product) => {
    setCartCount(prev => prev + 1);
    setAddedId(product.id);
    showToastNotification(`Added ${product.name} to your bag!`);
    setTimeout(() => setAddedId(null), 1500);
  };

  const showToastNotification = (message) => {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${message}`;
    
    Object.assign(toast.style, {
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      backgroundColor: '#2D2424',
      color: '#FFF',
      padding: '12px 24px',
      borderRadius: '4px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
      zIndex: '9999',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '0.85rem',
      letterSpacing: '0.5px',
      fontFamily: 'Inter, sans-serif',
      transform: 'translateY(100px)',
      opacity: '0',
      transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)'
    });
    
    toast.querySelector('i').style.color = '#C84B70';
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.transform = 'translateY(0)';
      toast.style.opacity = '1';
    }, 100);
    
    setTimeout(() => {
      toast.style.transform = 'translateY(20px)';
      toast.style.opacity = '0';
      setTimeout(() => {
        toast.remove();
      }, 400);
    }, 3000);
  };

  // Filter products
  const filteredProducts = selectedCategory === 'all'
    ? haircareProducts
    : haircareProducts.filter(p => p.category === selectedCategory);

  // Handle Quiz selection
  const handleQuizSelect = (key, value) => {
    const nextAnswers = { ...quizAnswersState, [key]: value };
    setQuizAnswersState(nextAnswers);

    if (currentQuizStep < quizQuestions.length - 1) {
      setCurrentQuizStep(prev => prev + 1);
    } else {
      setShowQuizResult(true);
    }
  };

  const resetQuiz = () => {
    setQuizAnswersState({ concern: '', type: '' });
    setCurrentQuizStep(0);
    setShowQuizResult(false);
  };

  const getQuizResult = () => {
    const key = `${quizAnswersState.concern}-${quizAnswersState.type}`;
    return quizRecommendations[key] || { title: 'Personalized Routine', products: [1, 2], desc: 'A custom-selected balance of nutrients to revitalize your hair.' };
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="App">
      <Header cartCount={cartCount} />

      {/* ── HERO ── */}
      <section className="hc-hero">
        <div className="hc-hero-overlay" />
        <div className="hc-hero-content">
          <span className="hc-hero-tag">
            <i className="fa-solid fa-wind animate-wind"></i>&nbsp; HAIRCARE COLLECTION
          </span>
          <h1>
            Restore. Strengthen.<br />
            <span className="hc-hero-accent">Glow.</span>
          </h1>
          <p>Premium formulas crafted to nourish every strand — from root to tip.</p>
          <div className="hc-hero-btns">
            <a href="#hc-products" className="btn btn-primary">SHOP NOW</a>
            <a href="#hc-routine-finder" className="btn btn-text">
              Routine Finder &nbsp;<i className="fa-solid fa-wand-magic-sparkles"></i>
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
          { num: '50K+', label: 'Happy Customers', icon: 'fa-smile' },
          { num: '100%', label: 'Natural Ingredients', icon: 'fa-seedling' },
          { num: '4.9★', label: 'Average Rating', icon: 'fa-star' },
          { num: '30-Day', label: 'Money Back', icon: 'fa-shield-halved' }
        ].map((s, i) => (
          <div className="hc-stat-item" key={i}>
            <i className={`fa-solid ${s.icon} hc-stat-icon`}></i>
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

        {/* Filter categories */}
        <div className="hc-filter-bar">
          {[
            { id: 'all', label: 'All Products' },
            { id: 'shampoo', label: 'Shampoo' },
            { id: 'conditioner', label: 'Conditioner' },
            { id: 'mask-treatment', label: 'Masks & Treatments' },
            { id: 'oil-serum', label: 'Oils & Serums' }
          ].map(cat => (
            <button
              key={cat.id}
              className={`hc-filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="hc-products-grid">
          {filteredProducts.map(product => (
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

      {/* ── ROUTINE FINDER QUIZ ── */}
      <section className="hc-quiz-section" id="hc-routine-finder">
        <div className="hc-quiz-card">
          {!showQuizResult ? (
            <div className="hc-quiz-step-content">
              <span className="hc-quiz-badge">ROUTINE FINDER</span>
              <h2>Find Your Perfect Hair Routine</h2>
              <div className="hc-quiz-progress-bar">
                <div 
                  className="hc-quiz-progress-fill" 
                  style={{ width: `${((currentQuizStep) / quizQuestions.length) * 100}%` }}
                />
              </div>
              <p className="hc-quiz-step-num">Step {currentQuizStep + 1} of {quizQuestions.length}</p>
              <h3 className="hc-quiz-question">{quizQuestions[currentQuizStep].question}</h3>
              <div className="hc-quiz-options">
                {quizQuestions[currentQuizStep].options.map(opt => (
                  <button
                    key={opt.value}
                    className="hc-quiz-opt-btn"
                    onClick={() => handleQuizSelect(quizQuestions[currentQuizStep].id, opt.value)}
                  >
                    <i className={`fa-solid ${opt.icon} hc-opt-icon`}></i>
                    <span>{opt.text}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="hc-quiz-result">
              <span className="hc-quiz-badge success">YOUR MATCH</span>
              <h2>{getQuizResult().title}</h2>
              <p className="hc-quiz-result-desc">{getQuizResult().desc}</p>
              
              <h4 className="hc-recommended-title">Recommended Products:</h4>
              <div className="hc-recommended-grid">
                {getQuizResult().products.map(pId => {
                  const prod = haircareProducts.find(p => p.id === pId);
                  if (!prod) return null;
                  return (
                    <div key={prod.id} className="hc-rec-card">
                      <img src={prod.img} alt={prod.name} />
                      <div className="hc-rec-info">
                        <h5>{prod.name}</h5>
                        <p>${prod.price.toFixed(2)}</p>
                        <button 
                          className={`hc-rec-add-btn ${addedId === prod.id ? 'added' : ''}`}
                          onClick={() => handleAdd(prod)}
                        >
                          {addedId === prod.id ? 'Added!' : 'Add to Bag'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <button className="btn btn-primary btn-reset" onClick={resetQuiz}>
                Retake Quiz &nbsp;<i className="fa-solid fa-redo"></i>
              </button>
            </div>
          )}
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

      {/* ── FAQs SECTION ── */}
      <section className="hc-faq-section">
        <div className="hc-section-head">
          <p className="hc-section-sub">COMMON QUESTIONS</p>
          <h2 className="hc-section-title">Frequently Asked Questions</h2>
          <div className="hc-divider"><i className="fa-solid fa-circle-question"></i></div>
        </div>
        <div className="hc-faq-container">
          {faqs.map((faq, i) => (
            <div 
              className={`hc-faq-item ${activeFaq === i ? 'active' : ''}`} 
              key={i}
              onClick={() => toggleFaq(i)}
            >
              <div className="hc-faq-question">
                <h3>{faq.q}</h3>
                <span className="hc-faq-icon-box">
                  <i className={`fa-solid ${activeFaq === i ? 'fa-minus' : 'fa-plus'}`}></i>
                </span>
              </div>
              <div className="hc-faq-answer">
                <p>{faq.a}</p>
              </div>
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
