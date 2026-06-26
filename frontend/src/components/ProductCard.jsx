import React from 'react';

const ProductCard = ({ name, price, oldPrice, img, rating, reviews, isSale, onAddToCart }) => {
  return (
    <div class="product-card">
      <div class="product-img-box">
        {isSale && <span class="sale-badge">SALE</span>}
        <img src={img} alt={name} />
        <button class="add-to-cart-overlay" onClick={() => onAddToCart(name)}>ADD TO CART</button>
      </div>
      <div class="product-info">
        <div class="rating">
          {[...Array(5)].map((_, i) => (
            <i 
              key={i} 
              className={i < Math.floor(rating) ? "fa-solid fa-star" : "fa-regular fa-star"}
            ></i>
          ))}
          <span>({reviews})</span>
        </div>
        <h3 class="product-title">{name}</h3>
        <p class="product-price">
          {oldPrice && <span class="old-price">${oldPrice}</span>}
          ${price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
