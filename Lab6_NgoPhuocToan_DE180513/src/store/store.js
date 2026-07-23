import { configureStore } from '@reduxjs/toolkit'
import quizReducer from './quizSlice'

/**
 * configureStore (Redux Toolkit) đã tích hợp sẵn redux-thunk middleware.
 * Package `redux-thunk` vẫn có trong package.json theo yêu cầu Lab 6.
 * createAsyncThunk (fetchQuestions, checkAnswers) chạy nhờ middleware này.
 */
export const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
})
