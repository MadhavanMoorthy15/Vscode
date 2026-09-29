import { createContext, useContext, useEffect, useState } from 'react'

const ShopContext = createContext()

export function ShopProvider({ children }) {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart') || '[]'))
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem('wishlist') || '[]'))
  const [darkMode, setDarkMode] = useState(false)
  const [toast, setToast] = useState('')

  useEffect(() => { localStorage.setItem('cart', JSON.stringify(cart)) }, [cart])
  useEffect(() => { localStorage.setItem('wishlist', JSON.stringify(wishlist)) }, [wishlist])
  useEffect(() => { if (toast) setTimeout(() => setToast(''), 2400) }, [toast])

  const addToCart = (product, quantity = 1) => {
    const existing = cart.find((item) => item.id === product.id)
    if (existing) {
      existing.quantity += quantity
      setCart([...cart])
    } else setCart([...cart, { ...product, quantity }])
    setToast(`${product.name} added to cart`)
  }

  const updateQuantity = (id, quantity) => {
    const item = cart.find((entry) => entry.id === id)
    if (item) item.quantity = Math.max(1, quantity)
    setCart(cart)
  }
  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id))
  const addToWishlist = (product) => { setWishlist([...wishlist, product]); setToast('Saved to wishlist') }
  const removeFromWishlist = (id) => setWishlist(wishlist.filter((item) => item.id !== id))
  const cartCount = cart.length

  return <ShopContext.Provider value={{ cart, wishlist, darkMode, toast, cartCount, addToCart, updateQuantity, removeFromCart, addToWishlist, removeFromWishlist, setDarkMode }}>{children}</ShopContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useShop = () => useContext(ShopContext)
