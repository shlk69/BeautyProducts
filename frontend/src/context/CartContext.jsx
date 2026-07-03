import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('zack_beauty_cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('zack_beauty_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.name === product.name);
      if (existing) {
        return prev.map(item =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { 
        id: product.id || Date.now(),
        name: product.name,
        price: Number(product.price) || 0,
        img: product.img || '/images/product_serum.png',
        quantity: 1 
      }];
    });
  };

  const removeFromCart = (productName) => {
    setCartItems(prev => prev.filter(item => item.name !== productName));
  };

  const updateQuantity = (productName, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productName);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.name === productName ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
