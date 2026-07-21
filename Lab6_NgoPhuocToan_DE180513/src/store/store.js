import { configureStore } from '@reduxjs/toolkit'
import quizReducer from './quizSlice'

// configureStore của Redux Toolkit đã tích hợp sẵn redux-thunk middleware
export const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
})
