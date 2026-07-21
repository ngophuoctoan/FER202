import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const sampleProducts = [
  {
    id: '123456',
    name: 'Example Product',
    price: 9.99,
    description: 'This is an example product.',
    catalogs: ['catalog1', 'catalog2'],
  },
  {
    id: '123457',
    name: 'React Hoodie',
    price: 39.5,
    description: 'Comfortable hoodie for frontend developers.',
    catalogs: ['apparel', 'react'],
  },
  {
    id: '123458',
    name: 'Redux Mug',
    price: 14.25,
    description: 'Keep your state hot with this mug.',
    catalogs: ['home', 'redux'],
  },
]

/** Async thunk: giả lập gọi API rồi thêm product mới vào store */
export const addProductAsync = createAsyncThunk(
  'products/addProductAsync',
  async (product) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return {
      ...product,
      id: product.id || String(Date.now()),
      catalogs: Array.isArray(product.catalogs)
        ? product.catalogs
        : String(product.catalogs || '')
            .split(',')
            .map((c) => c.trim())
            .filter(Boolean),
      price: Number(product.price),
    }
  },
)

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: sampleProducts,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProductAsync.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(addProductAsync.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items.push(action.payload)
      })
      .addCase(addProductAsync.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default productsSlice.reducer
