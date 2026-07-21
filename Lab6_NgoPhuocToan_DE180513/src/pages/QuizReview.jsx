import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import QuizFooter from '../components/QuizFooter'
import { goToQuestion } from '../store/quizSlice'

function QuizReview() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { questions, answers } = useSelector((state) => state.quiz)

  function openQuestion(index) {
    dispatch(goToQuestion(index))
    navigate('/quizzes')
  }

  return (
    <div className="quiz-page">
      <PageBanner title="Quiz Review" />

      <div className="quiz-content">
        <div className="review-grid">
          {questions.map((q, index) => {
            const answered = Boolean(answers[q.id])
            return (
              <button
                key={q.id}
                type="button"
                className={`review-card${answered ? ' answered' : ' unanswered'}`}
                onClick={() => openQuestion(index)}
              >
                <div className="review-card-title">
                  Question No <span>{index + 1}</span>
                </div>
                <div className="review-card-status">
                  {answered ? 'Answered' : 'Not Answered'}
                </div>
              </button>
            )
          })}
        </div>

        <hr className="review-divider" />
        <QuizFooter />
      </div>
    </div>
  )
}

export default QuizReview
