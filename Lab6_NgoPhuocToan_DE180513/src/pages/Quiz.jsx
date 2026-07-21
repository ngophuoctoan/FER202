import { useSelector, useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button'
import PageBanner from '../components/PageBanner'
import QuizFooter from '../components/QuizFooter'
import {
  selectAnswer,
  firstQuestion,
  prevQuestion,
  nextQuestion,
  lastQuestion,
} from '../store/quizSlice'

function Quiz() {
  const dispatch = useDispatch()
  const { questions, currentIndex, answers } = useSelector((state) => state.quiz)

  const question = questions[currentIndex]
  if (!question) {
    return <p className="p-4">No questions available.</p>
  }

  const selected = answers[question.id] || ''

  return (
    <div className="quiz-page">
      <PageBanner title="JavaScript Quiz" />

      <div className="quiz-content">
        <p className="quiz-question-text">
          Q.{currentIndex + 1} {question.question}
        </p>

        <div className="quiz-options-grid">
          {question.options.map((option) => (
            <label
              key={option}
              htmlFor={`q${question.id}-${option}`}
              className={`quiz-option${selected === option ? ' selected' : ''}`}
            >
              <input
                type="radio"
                className="form-check-input"
                name={`question-${question.id}`}
                id={`q${question.id}-${option}`}
                value={option}
                checked={selected === option}
                onChange={() =>
                  dispatch(selectAnswer({ questionId: question.id, answer: option }))
                }
              />
              <span>{option}</span>
            </label>
          ))}
        </div>

        <div className="quiz-nav-row">
          <Button
            className="quiz-nav-btn"
            onClick={() => dispatch(firstQuestion())}
            disabled={currentIndex === 0}
          >
            First
          </Button>
          <Button
            className="quiz-nav-btn"
            onClick={() => dispatch(prevQuestion())}
            disabled={currentIndex === 0}
          >
            Prev
          </Button>
          <Button
            className="quiz-nav-btn"
            onClick={() => dispatch(nextQuestion())}
            disabled={currentIndex === questions.length - 1}
          >
            Next
          </Button>
          <Button
            className="quiz-nav-btn"
            onClick={() => dispatch(lastQuestion())}
            disabled={currentIndex === questions.length - 1}
          >
            Last
          </Button>
        </div>

        <QuizFooter />
      </div>
    </div>
  )
}

export default Quiz
