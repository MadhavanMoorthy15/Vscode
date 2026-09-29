import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // BUG 1: Cart count not updating consistently - we compute count from a stale closure
  // The count is stored separately and only updated in some code paths
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    // BUG 1: cartCount only increments by 1 even when adding existing item,
    // but when removing, we decrement by quantity - inconsistent
    setCartCount((c) => c + 1);
  };

  const removeFromCart = (productId) => {
    const item = cartItems.find((i) => i.id === productId);
    setCartItems((prev) => prev.filter((i) => i.id !== productId));
    // BUG 1 continued: decrement by full quantity but add only incremented by 1
    if (item) {
      setCartCount((c) => Math.max(0, c - item.quantity));
    }
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
    // BUG 1 continued: cartCount is NOT updated when quantity changes
  };

  const clearCart = () => {
    setCartItems([]);
    setCartCount(0);
  };

  // BUG 4: Incorrect total price calculation - uses originalPrice instead of price for discounted items
  // when quantity > 1, and also forgets to multiply by quantity in one branch
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      if (item.quantity > 1) {
        // Bug: uses originalPrice instead of discounted price
        return total + item.originalPrice * item.quantity;
      }
      return total + item.price;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, cartCount, addToCart, removeFromCart, updateQuantity, clearCart, getCartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
