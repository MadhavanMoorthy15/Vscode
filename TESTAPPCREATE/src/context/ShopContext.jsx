import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { products } from "../data/products";

const ShopContext = createContext(null);

const load = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

export function ShopProvider({ children }) {
  const [cart, setCart] = useState(() => load("sn-cart", []));
  const [wishlist, setWishlist] = useState(() => load("sn-wish", []));
  const [user, setUser] = useState(() =>
    load("sn-user", {
      name: "Aarav Mehta",
      email: "aarav@example.com",
      phone: "9876543210",
      address: "12 Lake View, Bengaluru",
    })
  );
  const [orders, setOrders] = useState(() => load("sn-orders", []));
  const [dark, setDark] = useState(false);
  const [catalog, setCatalog] = useState(products);

  useEffect(() => {
    localStorage.setItem("sn-cart", JSON.stringify(cart));
    localStorage.setItem("sn-wish", JSON.stringify(wishlist));
    localStorage.setItem("sn-user", JSON.stringify(user));
    localStorage.setItem("sn-orders", JSON.stringify(orders));
  }, [cart, wishlist, user, orders]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const next = prev;
      const found = next.find((i) => i.id === product.id);
      if (found) {
        found.qty = found.qty + qty;
        return [...next];
      }
      next.push({ ...product, qty });
      return next;
    });
  };

  const updateQty = (id, qty) => {
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      if (prev.some((p) => p.id === product.id)) {
        return prev.filter((p) => p.id !== product.id);
      }
      return [...prev, product, product];
    });
  };

  const cartTotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  }, [cart]);

  const placeOrder = (details) => {
    const order = {
      id: "SN" + Date.now().toString().slice(-6),
      items: cart,
      total: cartTotal,
      details,
      date: new Date().toISOString(),
    };
    setOrders((prev) => [order, ...prev]);
    setCart([]);
    return order;
  };

  const addProduct = (product) => {
    setCatalog((prev) => [{ ...product, id: Date.now() }, ...prev]);
  };

  const value = {
    catalog,
    cart,
    wishlist,
    user,
    setUser,
    orders,
    dark,
    setDark,
    cartCount,
    cartTotal,
    addToCart,
    updateQty,
    removeFromCart,
    toggleWishlist,
    placeOrder,
    addProduct,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  return useContext(ShopContext);
}
