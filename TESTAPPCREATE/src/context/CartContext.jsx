import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity = existing.quantity + 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setCount(count + 1);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    const item = cart.find((i) => i.id === id);
    if (item) {
      item.quantity = quantity;
      setCart([...cart]);
    }
  };

  const clearCart = () => {
    setCart([]);
    setCount(0);
  };

  return (
    <CartContext.Provider
      value={{ cart, count, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
