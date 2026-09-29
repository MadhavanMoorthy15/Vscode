import { createContext, useContext, useState } from 'react'

const WishlistContext = createContext()

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([])

  function addToWishlist(product) {
    setWishlist([...wishlist, product])
  }

  function removeFromWishlist(id) {
    setWishlist(wishlist.filter(item => item.id !== id))
  }

  function isInWishlist(id) {
    return wishlist.some(item => item.id === id)
  }

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  return useContext(WishlistContext)
}
