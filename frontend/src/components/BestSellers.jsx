import React, { useRef } from 'react';
import ProductCard from './ProductCard';

const BestSellers = ({ products, onAddToCart }) => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 300;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section class="best-sellers-section" id="bestsellers">
      <h2 class="section-title">BEST SELLERS</h2>
      <div class="category-divider"><i class="fa-solid fa-star"></i></div>
      
      <div class="best-sellers-wrapper">
        <button 
          class="slider-nav prev-btn" 
          onClick={() => scroll('left')} 
          aria-label="Previous Products"
        >
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        
        <div class="products-slider-container" ref={sliderRef}>
          <div class="products-grid">
            {products.map((product) => (
              <ProductCard 
                key={product.id}
                name={product.name}
                price={product.price}
                oldPrice={product.oldPrice}
                img={product.img}
                rating={product.rating}
                reviews={product.reviews}
                isSale={product.isSale}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>
        
        <button 
          class="slider-nav next-btn" 
          onClick={() => scroll('right')} 
          aria-label="Next Products"
        >
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
};

export default BestSellers;
