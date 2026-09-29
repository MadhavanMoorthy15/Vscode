import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [cartCount, setCartCount] = useState(0)

  function addToCart(product) {
    const existing = cart.find(item => item.id === product.id)
    if (existing) {
      // increase quantity
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      )
      setCart(updatedCart)
      setCartCount(cartCount + 1)
    } else {
      setCart([...cart, { ...product, qty: 1 }])
      setCartCount(cartCount + 1)
    }
  }

  function removeFromCart(id) {
    const item = cart.find(i => i.id === id)
    const newCart = cart.filter(i => i.id !== id)
    setCart(newCart)
    setCartCount(cartCount - (item ? item.qty : 0))
  }

  function updateQuantity(id, qty) {
    if (qty <= 0) {
      removeFromCart(id)
      return
    }
    const newCart = cart.map(item => {
      if (item.id === id) {
        item.qty = qty
      }
      return item
    })
    setCart(newCart)
    // recount
    let count = 0
    newCart.forEach(i => count += i.qty)
    setCartCount(count)
  }

  function clearCart() {
    setCart([])
    setCartCount(0)
  }

  function getCartTotal() {
    let total = 0
    cart.forEach(item => {
      total += item.price
    })
    return total
  }

  return (
    <CartContext.Provider value={{
      cart, cartCount, addToCart, removeFromCart, updateQuantity, clearCart, getCartTotal
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
