import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { questions as quizData } from '../data/questions'

/** Redux Thunk: giả lập load danh sách câu hỏi (async) */
export const fetchQuestions = createAsyncThunk('quiz/fetchQuestions', async () => {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return quizData
})

/** Redux Thunk: kiểm tra đáp án người dùng với đáp án đúng */
export const checkAnswers = createAsyncThunk(
  'quiz/checkAnswers',
  async (payload, thunkAPI) => {
    // payload: giá trị truyền vào khi dispatch(checkAnswers(...))
    // Ở đây không cần truyền gì → bỏ qua payload
    // thunkAPI.getState(): lấy toàn bộ state Redux hiện tại
    await new Promise((resolve) => setTimeout(resolve, 200))

    const quizState = thunkAPI.getState().quiz
    const { questions, answers } = quizState

    const results = questions.map((q) => ({
      questionId: q.id,
      selected: answers[q.id] ?? null,
      correctAnswer: q.correctAnswer,
      isCorrect: answers[q.id] === q.correctAnswer,
    }))
    return results
  },
)

const initialState = {
  // Ban đầu rỗng — load qua fetchQuestions (Redux Thunk)
  questions: [],
  currentIndex: 0,
  answers: {},
  submitted: false,
  results: [],
  status: 'idle',
  error: null,
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    selectAnswer(state, action) {
      const { questionId, answer } = action.payload
      state.answers[questionId] = answer
      state.submitted = false
      state.results = []
    },
    goToQuestion(state, action) {
      const index = action.payload
      if (index >= 0 && index < state.questions.length) {
        state.currentIndex = index
      }
    },
    firstQuestion(state) {
      state.currentIndex = 0
    },
    prevQuestion(state) {
      if (state.currentIndex > 0) {
        state.currentIndex -= 1
      }
    },
    nextQuestion(state) {
      if (state.currentIndex < state.questions.length - 1) {
        state.currentIndex += 1
      }
    },
    lastQuestion(state) {
      state.currentIndex = Math.max(0, state.questions.length - 1)
    },
    resetQuiz(state) {
      state.currentIndex = 0
      state.answers = {}
      state.submitted = false
      state.results = []
      state.status = 'idle'
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.questions = action.payload
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(checkAnswers.pending, (state) => {
        state.status = 'checking'
      })
      .addCase(checkAnswers.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.submitted = true
        state.results = action.payload
      })
      .addCase(checkAnswers.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const {
  selectAnswer,
  goToQuestion,
  firstQuestion,
  prevQuestion,
  nextQuestion,
  lastQuestion,
  resetQuiz,
} = quizSlice.actions

export default quizSlice.reducer
