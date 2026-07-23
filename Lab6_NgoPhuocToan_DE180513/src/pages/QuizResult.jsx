import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import PageBanner from '../components/PageBanner'
import { resetQuiz } from '../store/quizSlice'

function QuizResult() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // Dùng results từ Redux Thunk (checkAnswers) — đúng yêu cầu Lab
  const { questions, submitted, results } = useSelector((state) => state.quiz)

  if (!submitted) {
    return (
      <div className="quiz-page">
        <PageBanner title="Quiz Review" />
        <div className="quiz-content">
          <p>You have not submitted the quiz yet.</p>
          <Link to="/quizzes" className="btn btn-info">
            Go to Quiz
          </Link>
        </div>
      </div>
    )
  }

  const correctCount = results.filter((r) => r.isCorrect).length

  function handleReset() {
    dispatch(resetQuiz())
    navigate('/quizzes')
  }

  return (
    <div className="quiz-page">
      {/* Screenshot đề: /quiz/result vẫn hiện banner "Quiz Review" */}
      <PageBanner title="Quiz Review" />

      <div className="quiz-content">
        <p className="result-summary">
          You answered correctly <strong>{correctCount}</strong> /{' '}
          <strong>{questions.length}</strong> questions.
        </p>

        {results.map((result, index) => {
          const question = questions.find((q) => q.id === result.questionId)
          if (!question) return null

          return (
            <div
              key={result.questionId}
              className={`result-card${result.isCorrect ? ' correct' : ' wrong'}`}
            >
              <h5 className="result-question">
                Q{index + 1}. {question.question}
              </h5>

              <div className="result-options">
                {question.options.map((option) => (
                  <Form.Check
                    key={option}
                    type="radio"
                    name={`result-${result.questionId}`}
                    id={`result-${result.questionId}-${option}`}
                    label={option}
                    checked={result.selected === option}
                    readOnly
                    disabled
                  />
                ))}
              </div>

              <div className="result-answer-bar">
                Right answer is: <strong>{result.correctAnswer}</strong>
              </div>
            </div>
          )
        })}

        <div className="mt-3 mb-4 d-flex flex-wrap gap-2">
          <Link to="/quizzes">
            <Button className="quiz-action-btn">Quiz</Button>
          </Link>
          <Link to="/quiz/review">
            <Button className="quiz-action-btn">Quiz Review</Button>
          </Link>
          <Button className="quiz-action-btn" onClick={handleReset}>
            Reset Quiz
          </Button>
        </div>
      </div>
    </div>
  )
}

export default QuizResult
