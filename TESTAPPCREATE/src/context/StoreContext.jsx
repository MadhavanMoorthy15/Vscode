import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { products } from "../data/products";

const StoreContext = createContext(null);

const seedUser = {
  name: "Aanya Sharma",
  email: "aanya.sharma@example.com",
  phone: "9876543210",
  address: "14, Lakeview Apartments, Indiranagar, Bengaluru 560038",
};

export function StoreProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([2, 11, 22]);
  const [orders, setOrders] = useState([
    {
      id: "MLY10482",
      date: "12 Mar 2026",
      total: 7999,
      status: "Delivered",
      items: 1,
    },
    {
      id: "MLY09811",
      date: "02 Feb 2026",
      total: 1499,
      status: "Delivered",
      items: 2,
    },
  ]);
  const [user, setUser] = useState(seedUser);
  const [dark, setDark] = useState(false);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("martly-cart");
    if (saved) {
      try {
        setCart(JSON.parse(saved));
      } catch {
        /* ignore */
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("martly-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  function toast(message) {
    const id = Date.now();
    setToasts((t) => [...t, { id, message }]);
    setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id));
    }, 2200);
  }

  function addToCart(productId, qty = 1) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === productId);
      if (existing) {
        existing.qty += qty;
        return [...prev];
      }
      return [...prev, { id: productId, qty }];
    });
    toast("Added to cart");
  }

  function updateQty(productId, qty) {
    setCart((prev) =>
      prev
        .map((item) => (item.id === productId ? { ...item, qty } : item))
        .filter((item) => item.qty > 0)
    );
  }

  function removeFromCart(productId) {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  }

  function toggleWishlist(productId) {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      }
      // push then also concat — junior "just in case" duplication
      prev.push(productId);
      return prev.concat(productId);
    });
    toast("Wishlist updated");
  }

  function placeOrder(details) {
    const order = {
      id: "MLY" + Math.floor(10000 + Math.random() * 89999),
      date: new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      total: cartTotal,
      status: "Processing",
      items: cart.length,
      details,
    };
    setOrders((o) => [order, ...o]);
    setCart([]);
    toast("Order placed");
    return order;
  }

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  // BUG: total uses MRP instead of selling price, and ignores quantity for the second pass incorrectly
  const cartTotal = cart.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.id);
    if (!product) return sum;
    return sum + product.mrp * item.qty;
  }, 0);

  const cartItems = cart.map((item) => ({
    ...item,
    product: products.find((p) => p.id === item.id),
  }));

  const value = useMemo(
    () => ({
      cart,
      cartItems,
      cartCount,
      cartTotal,
      wishlist,
      orders,
      user,
      dark,
      toasts,
      setUser,
      setDark,
      addToCart,
      updateQty,
      removeFromCart,
      toggleWishlist,
      placeOrder,
      toast,
    }),
    [cart, wishlist, orders, user, dark, toasts]
  );

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

export function useStore() {
  return useContext(StoreContext);
}
