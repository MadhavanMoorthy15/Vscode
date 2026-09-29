import { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([]);

  // BUG 2: Wishlist duplicate entries - uses push-style mutation instead of checking duplicates properly
  // The check uses == instead of === and compares name instead of id in one path
  const addToWishlist = (product) => {
    const exists = wishlistItems.find((item) => item.name == product.name);
    if (!exists) {
      // BUG 12: State mutation bug - directly mutates state array
      wishlistItems.push(product);
      setWishlistItems(wishlistItems);
    } else {
      // Still adds duplicate because the comparison is unreliable (name match with ==)
      // and we re-set the same mutated array reference, React may not re-render
      setWishlistItems([...wishlistItems, product]);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const isInWishlist = (productId) => {
    return wishlistItems.some((item) => item.id === productId);
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}
