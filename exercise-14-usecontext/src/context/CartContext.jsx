import { createContext, useContext, useMemo, useState } from 'react'

export const dishes = [
  { id: 1, name: 'Uthappizza', price: 4.99 },
  { id: 2, name: 'Zucchipakoda', price: 1.99 },
  { id: 3, name: 'Vadonut', price: 1.99 },
  { id: 4, name: 'ElaiCheese Cake', price: 2.99 },
]

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (dish) => {
    setCartItems((prev) => [...prev, { ...dish, cartId: Date.now() + Math.random() }])
  }

  const removeFromCart = (cartId) => {
    setCartItems((prev) => prev.filter((item) => item.cartId !== cartId))
  }

  const clearCart = () => setCartItems([])

  const totalCount = cartItems.length
  const totalValue = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price, 0),
    [cartItems],
  )

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, totalCount, totalValue }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}

export default CartContext
