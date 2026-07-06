import React, { createContext, useContext, useState, useEffect } from 'react';

const ShopDataContext = createContext();

const initialProducts = [
  // Skincare
  {
    id: 1,
    name: 'Hyaluronic Acid Serum',
    price: 24.99,
    img: '/images/product_serum.png',
    rating: 5,
    reviews: 123,
    isSale: false,
    isBestseller: true,
    category: 'skincare',
    desc: 'Deep hydration serum infused with pure hyaluronic acid for plump, radiant skin.'
  },
  {
    id: 3,
    name: 'Collagen Night Cream',
    price: 19.99,
    img: '/images/product_night_cream.png',
    rating: 5,
    reviews: 123,
    isSale: false,
    isBestseller: true,
    category: 'skincare',
    desc: 'Overnight collagen-boosting moisturizer that restores firmness and reduces fine lines.'
  },
  {
    id: 101,
    name: 'Vitamin C Brightening Cleanser',
    price: 16.99,
    oldPrice: 21.99,
    img: '/images/category_skincare.png',
    rating: 4,
    reviews: 84,
    isSale: true,
    isBestseller: false,
    category: 'skincare',
    desc: 'Refreshing daily cleanser that washes away impurities and illuminates dull skin.'
  },
  // Makeup
  {
    id: 2,
    name: 'Makeup Brush Set (10pcs)',
    price: 29.99,
    img: '/images/product_brush_set.png',
    rating: 5,
    reviews: 123,
    isSale: false,
    isBestseller: true,
    category: 'makeup',
    desc: 'Premium synthetic fiber brushes for professional-grade makeup application.'
  },
  {
    id: 4,
    name: 'Matte Lipstick',
    price: 14.59,
    oldPrice: 19.99,
    img: '/images/product_lipstick.png',
    rating: 5,
    reviews: 123,
    isSale: true,
    isBestseller: true,
    category: 'makeup',
    desc: 'Highly pigmented matte lipstick that stays vibrant all day without drying.'
  },
  {
    id: 201,
    name: 'Liquid Foundation SPF 15',
    price: 22.49,
    img: '/images/category_makeup.png',
    rating: 4,
    reviews: 65,
    isSale: false,
    isBestseller: false,
    category: 'makeup',
    desc: 'Lightweight buildable foundation that matches skin tone for a flawless finish.'
  },
  // Haircare
  {
    id: 301,
    name: 'Argan Oil Hair Serum',
    price: 22.99,
    oldPrice: 29.99,
    img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 214,
    isSale: true,
    isBestseller: false,
    category: 'haircare',
    subCategory: 'oil-serum',
    tag: 'BESTSELLER',
    desc: 'Lightweight serum with pure Moroccan argan oil for frizz-free, glossy hair.'
  },
  {
    id: 302,
    name: 'Keratin Repair Mask',
    price: 18.99,
    img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 98,
    isSale: false,
    isBestseller: false,
    category: 'haircare',
    subCategory: 'mask-treatment',
    tag: 'NEW',
    desc: 'Deep repair treatment that restores elasticity and shine in damaged hair.'
  },
  {
    id: 303,
    name: 'Scalp Refresh Shampoo',
    price: 15.99,
    img: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 176,
    isSale: false,
    isBestseller: false,
    category: 'haircare',
    subCategory: 'shampoo',
    desc: 'Gentle, sulfate-free shampoo that cleanses and balances scalp health.'
  },
  {
    id: 304,
    name: 'Biotin Volume Conditioner',
    price: 16.49,
    oldPrice: 21.99,
    img: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 132,
    isSale: true,
    isBestseller: false,
    category: 'haircare',
    subCategory: 'conditioner',
    tag: 'SALE',
    desc: 'Adds body and volume while nourishing strands with biotin & panthenol.'
  },
  {
    id: 305,
    name: 'Rose Water Hair Mist',
    price: 12.99,
    img: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 94,
    isSale: false,
    isBestseller: false,
    category: 'haircare',
    subCategory: 'mist',
    desc: 'Hydrating hair mist that adds shine and a delicate rose scent to locks.'
  },
  {
    id: 306,
    name: 'Herbal Detangling Spray',
    price: 14.99,
    img: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 78,
    isSale: false,
    isBestseller: false,
    category: 'haircare',
    subCategory: 'mist',
    desc: 'Detangles unruly hair instantly while nourishing with herbal extracts.'
  },
  {
    id: 307,
    name: 'Coconut Milk Leave-in Conditioner',
    price: 17.99,
    img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 112,
    isSale: false,
    isBestseller: false,
    category: 'haircare',
    subCategory: 'conditioner',
    desc: 'Deeply hydrates and protects hair from heat damage with organic coconut milk.'
  },
  {
    id: 308,
    name: 'Charcoal Detox Scalp Scrub',
    price: 21.99,
    img: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 86,
    isSale: false,
    isBestseller: false,
    category: 'haircare',
    subCategory: 'mask-treatment',
    desc: 'Exfoliating scalp treatment infused with activated charcoal to remove build-up.'
  },
  {
    id: 309,
    name: 'Nourishing Hair Growth Oil',
    price: 26.99,
    img: 'https://images.unsplash.com/photo-1610399215015-596be165924f?w=400&h=400&fit=crop',
    rating: 5,
    reviews: 143,
    isSale: false,
    isBestseller: false,
    category: 'haircare',
    subCategory: 'oil-serum',
    desc: 'Stimulates follicles and strengthens roots with a blend of castor and rosemary oils.'
  },
  {
    id: 310,
    name: 'Silk Protein Styling Cream',
    price: 19.49,
    img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop',
    rating: 4,
    reviews: 57,
    isSale: false,
    isBestseller: false,
    category: 'haircare',
    subCategory: 'styling',
    desc: 'Provides flexible hold, definition, and smooth shine for all hair types.'
  },
  // Accessories
  {
    id: 401,
    name: 'Gold Eyelash Curler',
    price: 12.99,
    img: '/images/category_accessories.png',
    rating: 5,
    reviews: 43,
    isSale: false,
    isBestseller: false,
    category: 'accessories',
    desc: 'Ergonomic eyelash curler plated in 24k gold for perfect lift and curl.'
  },
  {
    id: 402,
    name: 'Premium Cosmetic Bag',
    price: 18.99,
    img: '/images/product_brush_set.png',
    rating: 5,
    reviews: 29,
    isSale: false,
    isBestseller: false,
    category: 'accessories',
    desc: 'Luxury waterproof travel bag with spacious departments for makeup storage.'
  },
  // Fragrance
  {
    id: 501,
    name: 'Lavender Soy Candle',
    price: 15.99,
    img: '/images/category_fragrance.png',
    rating: 4,
    reviews: 38,
    isSale: false,
    isBestseller: false,
    category: 'fragrance',
    desc: 'Hand-poured natural soy wax candle infused with organic lavender oils.'
  },
  {
    id: 5,
    name: 'Luxury Perfume',
    price: 34.99,
    oldPrice: 49.99,
    img: '/images/product_perfume.png',
    rating: 5,
    reviews: 123,
    isSale: true,
    isBestseller: true,
    category: 'fragrance',
    desc: 'Exquisite signature scent with warm notes of vanilla, amber, and light jasmine.'
  }
];

const initialCategories = [
  { id: 'skincare', name: 'Skincare', img: '/images/category_skincare.png', desc: 'Nourish and glow' },
  { id: 'makeup', name: 'Makeup', img: '/images/category_makeup.png', desc: 'Express your beauty' },
  { id: 'haircare', name: 'Haircare', img: '/images/category_haircare.png', desc: 'Strong and shiny' },
  { id: 'fragrance', name: 'Fragrance', img: '/images/category_fragrance.png', desc: 'Enchanting aromas' },
  { id: 'accessories', name: 'Accessories', img: '/images/category_accessories.png', desc: 'Luxury beauty tools' }
];

const initialHero = {
  title: 'Explore All Beauty',
  subtitle: 'Carefully curated premium beauty products for your skin, hair, and makeup essentials.',
  img: '/images/herobanner.png'
};

const initialOrders = [
  {
    id: 'ZB-89241',
    date: 'June 18, 2026',
    total: 79.57,
    status: 'Delivered',
    items: 'Hyaluronic Acid Serum x1, Matte Lipstick x2'
  },
  {
    id: 'ZB-88104',
    date: 'May 04, 2026',
    total: 34.99,
    status: 'Shipped',
    items: 'Luxury Perfume x1'
  },
  {
    id: 'ZB-87910',
    date: 'April 12, 2026',
    total: 49.98,
    status: 'Delivered',
    items: 'Collagen Night Cream x1, Makeup Brush Set x1'
  }
];

export const ShopDataProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('zack_beauty_products');
    return saved ? JSON.parse(saved) : initialProducts;
  });

  const [categories, setCategories] = useState(() => {
    const saved = localStorage.getItem('zack_beauty_categories');
    return saved ? JSON.parse(saved) : initialCategories;
  });

  const [hero, setHero] = useState(() => {
    const saved = localStorage.getItem('zack_beauty_hero');
    return saved ? JSON.parse(saved) : initialHero;
  });

  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem('zack_beauty_orders');
    return saved ? JSON.parse(saved) : initialOrders;
  });

  useEffect(() => {
    localStorage.setItem('zack_beauty_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('zack_beauty_categories', JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem('zack_beauty_hero', JSON.stringify(hero));
  }, [hero]);

  useEffect(() => {
    localStorage.setItem('zack_beauty_orders', JSON.stringify(orders));
  }, [orders]);

  // Product Actions
  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Date.now(),
      rating: 5,
      reviews: 0
    };
    setProducts(prev => [newProduct, ...prev]);
  };

  const updateProduct = (id, updatedFields) => {
    setProducts(prev => prev.map(p => p.id === Number(id) ? { ...p, ...updatedFields } : p));
  };

  const deleteProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== Number(id)));
  };

  // Category Actions
  const addCategory = (category) => {
    const newCategory = {
      ...category,
      id: category.name.toLowerCase().replace(/\s+/g, '-')
    };
    setCategories(prev => [...prev, newCategory]);
  };

  const updateCategory = (id, updatedFields) => {
    setCategories(prev => prev.map(c => c.id === id ? { ...c, ...updatedFields } : c));
  };

  const deleteCategory = (id) => {
    setCategories(prev => prev.filter(c => c.id !== id));
  };

  // Banner Actions
  const updateHero = (updatedHero) => {
    setHero(prev => ({ ...prev, ...updatedHero }));
  };

  // Order Actions
  const addOrder = (order) => {
    const newOrder = {
      ...order,
      id: `ZB-${Math.floor(10000 + Math.random() * 90000)}`,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' }),
      status: 'Processing'
    };
    setOrders(prev => [newOrder, ...prev]);
  };

  const updateOrderStatus = (orderId, status) => {
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status } : o));
  };

  return (
    <ShopDataContext.Provider value={{
      products,
      categories,
      hero,
      orders,
      addProduct,
      updateProduct,
      deleteProduct,
      addCategory,
      updateCategory,
      deleteCategory,
      updateHero,
      addOrder,
      updateOrderStatus
    }}>
      {children}
    </ShopDataContext.Provider>
  );
};

export const useShopData = () => useContext(ShopDataContext);
