import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import '../styles/AboutPage.css';

const AboutPage = () => {
  const { cartCount } = useCart();

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const values = [
    {
      icon: 'fa-solid fa-paw',
      title: 'Cruelty Free',
      description: 'We firmly believe that beauty should never demand sacrifice. None of our ingredients or products are ever tested on animals.'
    },
    {
      icon: 'fa-solid fa-seedling',
      title: '100% Natural Ingredients',
      description: 'We source the purest active botanicals, ensuring our formulations are free from harmful synthetic chemicals, parabens, and toxins.'
    },
    {
      icon: 'fa-solid fa-stethoscope',
      title: 'Dermatologist Tested',
      description: 'Scientifically validated and clinically tested to suit even the most sensitive skin types. Gentle, safe, and highly effective.'
    },
    {
      icon: 'fa-solid fa-earth-americas',
      title: 'Sustainable Sourcing',
      description: 'Our ingredients are ethically harvested, supporting local communities and preserving the ecosystem for future generations.'
    }
  ];

  const philosophyIngredients = [
    {
      name: 'Hyaluronic Acid',
      type: 'Hydration Booster',
      desc: 'Locks in moisture up to 1000x its weight, keeping the skin plump, radiant, and intensely hydrated.',
      img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop'
    },
    {
      name: 'Argan Oil',
      type: 'Nourishing Elixir',
      desc: 'Rich in vitamin E and essential fatty acids, it restores hair softness, tames frizz, and adds a natural satin glow.',
      img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=300&h=300&fit=crop'
    },
    {
      name: 'Rose Water',
      type: 'Soothing Toner',
      desc: 'Naturally balances skin pH, reduces redness, and delivers an instant boost of refreshing floral hydration.',
      img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=300&h=300&fit=crop'
    }
  ];

  return (
    <div className="about-page-wrapper">
      <Header cartCount={cartCount} />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <span className="hero-subtitle">OUR IDENTITY</span>
          <h1 className="hero-title">Redefining Clean Beauty</h1>
          <p className="hero-description">
            We craft premium, natural formulations that celebrate and enhance your organic radiance. Pure, gentle, and luxury without compromise.
          </p>
          <div className="hero-scroll-indicator">
            <span className="mouse-wheel"></span>
          </div>
        </div>
      </section>

      {/* Our Story / Journey Section */}
      <section className="about-story">
        <div className="about-container grid-two-cols">
          <div className="story-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&fit=crop" 
              alt="Natural Skincare Routine" 
              className="story-image"
            />
            <div className="story-image-accent"></div>
          </div>
          <div className="story-text-wrapper">
            <span className="section-badge">OUR JOURNEY</span>
            <h2 className="section-title">Born from a passion for pure wellness.</h2>
            <p className="story-paragraph">
              Founded in 2021, Zack Beauty emerged from a simple realization: the beauty industry was filled with harsh synthetic chemicals that compromised long-term skin health. We envisioned a different path.
            </p>
            <p className="story-paragraph">
              Our quest led us to collaborate with leading botanists and dermatologists to harvest the active powers of raw nature. Every formula is carefully researched, ethically sourced, and crafted to deliver visible, beautiful results.
            </p>
            <div className="story-stats">
              <div className="stat-item">
                <span className="stat-num">98%</span>
                <span className="stat-label">Natural Ingredients</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">50K+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">100%</span>
                <span className="stat-label">Cruelty-Free certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="about-values">
        <div className="about-container">
          <div className="section-header text-center">
            <span className="section-badge">WHAT WE STAND FOR</span>
            <h2 className="section-title">Our Pillars of Promise</h2>
            <p className="section-subtitle">
              We hold ourselves to the highest standards of safety, quality, and environmental consciousness.
            </p>
          </div>
          
          <div className="values-grid">
            {values.map((val, idx) => (
              <div className="value-card" key={idx}>
                <div className="value-icon-box">
                  <i className={val.icon}></i>
                </div>
                <h3 className="value-card-title">{val.title}</h3>
                <p className="value-card-desc">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredient Showcase */}
      <section className="about-ingredients">
        <div className="about-container">
          <div className="section-header text-center">
            <span className="section-badge">WHAT WE PUT IN</span>
            <h2 className="section-title">Nature's Active Superstars</h2>
            <p className="section-subtitle">
              Each bottle is packed with high-concentration, nutrient-rich botanicals that feed your skin.
            </p>
          </div>

          <div className="ingredients-grid">
            {philosophyIngredients.map((ing, idx) => (
              <div className="ingredient-card" key={idx}>
                <div className="ingredient-img-wrapper">
                  <img src={ing.img} alt={ing.name} className="ingredient-img" />
                </div>
                <div className="ingredient-info">
                  <span className="ing-type">{ing.type}</span>
                  <h3 className="ing-name">{ing.name}</h3>
                  <p className="ing-desc">{ing.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="exclusions-box">
            <h4>Formulated Without:</h4>
            <div className="exclusions-list">
              <span><i className="fa-solid fa-ban"></i> Parabens</span>
              <span><i className="fa-solid fa-ban"></i> Sulfates (SLS & SLES)</span>
              <span><i className="fa-solid fa-ban"></i> Phthalates</span>
              <span><i className="fa-solid fa-ban"></i> Mineral Oils</span>
              <span><i className="fa-solid fa-ban"></i> Synthetic Dyes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Statement Section */}
      <section className="about-founder">
        <div className="about-container grid-two-cols align-center">
          <div className="founder-text">
            <span className="section-badge font-serif italic">A Message from the Founder</span>
            <blockquote className="founder-quote">
              "True beauty is an expression of self-love and wellness. We don't believe in covering up your skin, but rather nurturing it so that you feel confident and beautiful in your own skin every single day."
            </blockquote>
            <div className="founder-sign">
              <h4 className="founder-name">Zackary Sterling</h4>
              <p className="founder-title">Founder & CEO, Zack Beauty</p>
            </div>
          </div>
          <div className="founder-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&fit=crop" 
              alt="Zackary Sterling - Founder" 
              className="founder-image"
            />
            <div className="founder-img-accent"></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
