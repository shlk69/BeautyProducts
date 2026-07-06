import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './context/CartContext.jsx'
import { ShopDataProvider } from './context/ShopDataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopDataProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ShopDataProvider>
  </React.StrictMode>,
)

