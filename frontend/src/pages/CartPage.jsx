import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const [isCheckedOut, setIsCheckedOut] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const shippingCost = cartTotal >= 500 || cartTotal === 0 ? 0 : 50.00;
  const taxCost = cartTotal * 0.18; // 18% GST/tax for India
  const grandTotal = cartTotal + shippingCost + taxCost;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    setIsCheckedOut(true);
    clearCart();
  };

  return (
    <div className="App">
      <Header cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} />

      {/* Cart Page Banner */}
      <section className="cart-hero-section">
        <div className="cart-hero-overlay"></div>
        <div className="cart-hero-content">
          <h1>Your Shopping Bag</h1>
          <p>Review your luxury beauty selections and proceed to checkout.</p>
        </div>
      </section>

      <section className="cart-content-container">
        {isCheckedOut ? (
          <div className="checkout-success-message">
            <div className="success-icon">
              <i className="fa-solid fa-circle-check"></i>
            </div>
            <h2>Order Placed Successfully!</h2>
            <p>Thank you for shopping with Zack Beauty. Your order details and tracking link have been sent to your email.</p>
            <Link to="/shop" className="btn-continue-shopping">CONTINUE SHOPPING</Link>
          </div>
        ) : cartItems.length === 0 ? (
          <div className="empty-cart-state">
            <div className="empty-bag-icon">
              <i className="fa-solid fa-bag-shopping"></i>
            </div>
            <h2>Your bag is currently empty</h2>
            <p>It looks like you haven't added any luxury beauty products yet.</p>
            <Link to="/shop" className="btn-continue-shopping">EXPLORE OUR SHOP</Link>
          </div>
        ) : (
          <div className="cart-grid">
            {/* Cart Items List */}
            <div className="cart-items-panel">
              <div className="panel-header">
                <h2>Items ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})</h2>
              </div>
              <div className="cart-items-list">
                {cartItems.map((item) => (
                  <div key={item.name} className="cart-item-row">
                    <div className="cart-item-image">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className="cart-item-details">
                      <h3 className="cart-item-name">{item.name}</h3>
                      <p className="cart-item-price">₹{item.price.toFixed(2)}</p>
                    </div>
                    <div className="cart-item-actions-wrapper">
                      <div className="quantity-controller">
                        <button 
                          className="qty-btn" 
                          onClick={() => updateQuantity(item.name, item.quantity - 1)}
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                        <span className="qty-value">{item.quantity}</span>
                        <button 
                          className="qty-btn" 
                          onClick={() => updateQuantity(item.name, item.quantity + 1)}
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                      <p className="cart-item-subtotal">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button 
                        className="remove-item-btn" 
                        onClick={() => removeFromCart(item.name)}
                        title="Remove product"
                      >
                        <i className="fa-regular fa-trash-can"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary & Checkout Form */}
            <div className="cart-summary-panel">
              <div className="summary-card">
                <h3>Order Summary</h3>
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>₹{cartTotal.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  <span>{shippingCost === 0 ? 'FREE' : `₹${shippingCost.toFixed(2)}`}</span>
                </div>
                <div className="summary-row">
                  <span>Estimated Tax</span>
                  <span>₹{taxCost.toFixed(2)}</span>
                </div>
                <div className="summary-divider"></div>
                <div className="summary-row grand-total">
                  <span>Total</span>
                  <span>₹{grandTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Form */}
              <div className="checkout-card">
                <h3>Shipping & Payment Info</h3>
                <form onSubmit={handleCheckoutSubmit} className="checkout-form">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input 
                      type="text" 
                      name="fullName" 
                      required 
                      value={formData.fullName} 
                      onChange={handleInputChange} 
                      placeholder="Jane Doe" 
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      placeholder="jane@example.com" 
                    />
                  </div>
                  <div className="form-group">
                    <label>Shipping Address</label>
                    <input 
                      type="text" 
                      name="address" 
                      required 
                      value={formData.address} 
                      onChange={handleInputChange} 
                      placeholder="123 Luxury Way" 
                    />
                  </div>
                  <div className="form-row-2">
                    <div className="form-group">
                      <label>City</label>
                      <input 
                        type="text" 
                        name="city" 
                        required 
                        value={formData.city} 
                        onChange={handleInputChange} 
                        placeholder="Beverly Hills" 
                      />
                    </div>
                    <div className="form-group">
                      <label>Zip Code</label>
                      <input 
                        type="text" 
                        name="zip" 
                        required 
                        value={formData.zip} 
                        onChange={handleInputChange} 
                        placeholder="90210" 
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Card Number</label>
                    <input 
                      type="text" 
                      name="cardNumber" 
                      required 
                      value={formData.cardNumber} 
                      onChange={handleInputChange} 
                      placeholder="xxxx xxxx xxxx xxxx" 
                    />
                  </div>
                  <div className="form-row-2">
                    <div className="form-group">
                      <label>Expiry Date</label>
                      <input 
                        type="text" 
                        name="expiry" 
                        required 
                        value={formData.expiry} 
                        onChange={handleInputChange} 
                        placeholder="MM/YY" 
                      />
                    </div>
                    <div className="form-group">
                      <label>CVV</label>
                      <input 
                        type="password" 
                        name="cvv" 
                        required 
                        value={formData.cvv} 
                        onChange={handleInputChange} 
                        placeholder="***" 
                        maxLength="3"
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn-place-order">
                    PLACE ORDER &middot; ₹{grandTotal.toFixed(2)}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
