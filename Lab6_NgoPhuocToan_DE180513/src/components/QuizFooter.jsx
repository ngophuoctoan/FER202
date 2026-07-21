import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button'
import { checkAnswers } from '../store/quizSlice'

function QuizFooter() {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const { answers, questions, status } = useSelector((state) => state.quiz)

  const answeredCount = Object.keys(answers).length
  const allAnswered = answeredCount === questions.length

  async function handleSubmit() {
    if (!allAnswered) {
      alert('Please answer all questions before submitting.')
      return
    }
    await dispatch(checkAnswers())
    navigate('/quiz/result')
  }

  return (
    <div className="quiz-footer-actions">
      <Button
        className={`quiz-action-btn${location.pathname === '/quizzes' ? ' active-page' : ''}`}
        onClick={() => navigate('/quizzes')}
      >
        Quiz
      </Button>
      <Button
        className={`quiz-action-btn${location.pathname === '/quiz/review' ? ' active-page' : ''}`}
        onClick={() => navigate('/quiz/review')}
      >
        Quiz Review
      </Button>
      <Button
        className="quiz-action-btn"
        onClick={handleSubmit}
        disabled={status === 'checking'}
      >
        {status === 'checking' ? 'Checking...' : 'Submit'}
      </Button>
    </div>
  )
}

export default QuizFooter
