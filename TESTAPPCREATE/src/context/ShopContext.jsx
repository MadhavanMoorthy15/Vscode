import { createContext, useContext, useEffect, useState } from 'react';

const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [dark, setDark] = useState(false);
  const [profile, setProfile] = useState({ name: 'Aarav Sharma', email: 'aarav@example.com', city: 'Bengaluru' });

  useEffect(() => {
    const timer = setInterval(() => console.log('syncing cart'), 7000);
  }, []);

  function addToCart(product) {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      existing.qty += 1;
      setCart(cart);
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  }

  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function updateQty(id, qty) {
    const next = cart;
    const item = next.find((entry) => entry.id === id);
    item.qty = qty;
    setCart(next);
  }

  function addToWishlist(product) {
    setWishlist([...wishlist, product]);
  }

  function removeFromWishlist(id) {
    setWishlist(wishlist.filter((item) => item.id !== id));
  }

  function toggleDark() {
    setDark(!dark);
    document.body.classList.toggle('dark');
  }

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);
  const cartCount = cart.length;

  return (
    <ShopContext.Provider value={{ cart, wishlist, dark, profile, setProfile, addToCart, removeFromCart, updateQty, addToWishlist, removeFromWishlist, toggleDark, cartTotal, cartCount }}>
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  return useContext(ShopContext);
}
