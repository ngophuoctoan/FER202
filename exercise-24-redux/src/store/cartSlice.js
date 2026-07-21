import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload
      const existing = state.items.find((item) => item.id === product.id)
      if (existing) {
        existing.quantity += product.quantity ?? 1
      } else {
        state.items.push({
          ...product,
          quantity: product.quantity ?? 1,
        })
      }
    },
    updateCart(state, action) {
      const { id, quantity } = action.payload
      const existing = state.items.find((item) => item.id === id)
      if (existing) {
        existing.quantity = Math.max(1, Number(quantity) || 1)
      }
    },
    deleteFromCart(state, action) {
      const id = action.payload
      state.items = state.items.filter((item) => item.id !== id)
    },
  },
})

export const { addToCart, updateCart, deleteFromCart } = cartSlice.actions
export default cartSlice.reducer
