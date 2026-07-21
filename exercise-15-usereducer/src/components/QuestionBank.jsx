import { useReducer } from 'react'

const questions = [
  {
    id: 1,
    questionText: 'What is the capital of Australia?',
    options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
    answer: 'Canberra',
  },
  {
    id: 2,
    questionText: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Mars', 'Jupiter', 'Mercury'],
    answer: 'Mars',
  },
  {
    id: 3,
    questionText: 'What is the largest ocean on Earth?',
    options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
    answer: 'Pacific',
  },
  {
    id: 4,
    questionText: 'Which language runs in a web browser?',
    options: ['Java', 'C', 'Python', 'JavaScript'],
    answer: 'JavaScript',
  },
]

const initialState = {
  questions,
  currentQuestion: 0,
  selectedOption: '',
  score: 0,
  showScore: false,
}

function quizReducer(state, action) {
  switch (action.type) {
    case 'SELECT_OPTION':
      return { ...state, selectedOption: action.payload }
    case 'NEXT_QUESTION': {
      const isCorrect =
        state.selectedOption === state.questions[state.currentQuestion].answer
      const nextScore = isCorrect ? state.score + 1 : state.score
      const nextIndex = state.currentQuestion + 1

      if (nextIndex >= state.questions.length) {
        return {
          ...state,
          score: nextScore,
          showScore: true,
          selectedOption: '',
        }
      }

      return {
        ...state,
        score: nextScore,
        currentQuestion: nextIndex,
        selectedOption: '',
      }
    }
    case 'RESTART_QUIZ':
      return { ...initialState }
    default:
      return state
  }
}

function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState)
  const { questions, currentQuestion, selectedOption, score, showScore } = state

  if (showScore) {
    return (
      <div className="quiz score-screen">
        <h3>Quiz Completed!</h3>
        <p className="score-text">
          You scored {score} / {questions.length}
        </p>
        <button type="button" onClick={() => dispatch({ type: 'RESTART_QUIZ' })}>
          Restart Quiz
        </button>
      </div>
    )
  }

  const q = questions[currentQuestion]

  return (
    <div className="quiz">
      <p className="progress">
        Question {currentQuestion + 1} / {questions.length}
      </p>
      <h3>{q.questionText}</h3>
      <ul className="options">
        {q.options.map((option) => (
          <li key={option}>
            <label className={selectedOption === option ? 'selected' : ''}>
              <input
                type="radio"
                name="quiz-option"
                value={option}
                checked={selectedOption === option}
                onChange={() =>
                  dispatch({ type: 'SELECT_OPTION', payload: option })
                }
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      <button
        type="button"
        disabled={!selectedOption}
        onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
      >
        {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
      </button>
    </div>
  )
}

export default QuestionBank
