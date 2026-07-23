import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import QuizFooter from '../components/QuizFooter'
import { fetchQuestions, goToQuestion } from '../store/quizSlice'

function QuizReview() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { questions, answers, status } = useSelector((state) => state.quiz)

  useEffect(() => {
    if (questions.length === 0) {
      dispatch(fetchQuestions())
    }
  }, [dispatch, questions.length])

  function openQuestion(index) {
    dispatch(goToQuestion(index))
    navigate('/quizzes')
  }

  return (
    <div className="quiz-page">
      <PageBanner title="Quiz Review" />

      <div className="quiz-content">
        {questions.length === 0 ? (
          <p>Loading questions...</p>
        ) : (
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
        )}

        <hr className="review-divider" />
        <QuizFooter />
      </div>
    </div>
  )
}

export default QuizReview
