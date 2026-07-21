import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import PageBanner from '../components/PageBanner'

function QuizResult() {
  const { questions, answers, submitted, results } = useSelector(
    (state) => state.quiz,
  )

  if (!submitted) {
    return (
      <div className="quiz-page">
        <PageBanner title="Quiz Review" />
        <div className="quiz-content">
          <p>You have not submitted the quiz yet.</p>
          <Link to="/quizzes" className="btn btn-info text-white">
            Go to Quiz
          </Link>
        </div>
      </div>
    )
  }

  const correctCount = results.filter((r) => r.isCorrect).length

  return (
    <div className="quiz-page">
      <PageBanner title="Quiz Review" />

      <div className="quiz-content">
        <p className="result-summary">
          You answered correctly <strong>{correctCount}</strong> /{' '}
          <strong>{questions.length}</strong> questions.
        </p>

        {questions.map((q, index) => {
          const selected = answers[q.id]
          const isCorrect = selected === q.correctAnswer

          return (
            <div
              key={q.id}
              className={`result-card${isCorrect ? ' correct' : ' wrong'}`}
            >
              <h5 className="result-question">
                Q{index + 1}. {q.question}
              </h5>

              <div className="result-options">
                {q.options.map((option) => (
                  <Form.Check
                    key={option}
                    type="radio"
                    name={`result-${q.id}`}
                    id={`result-${q.id}-${option}`}
                    label={option}
                    checked={selected === option}
                    readOnly
                    disabled
                  />
                ))}
              </div>

              <div className="result-answer-bar">
                Right answer is: <strong>{q.correctAnswer}</strong>
              </div>
            </div>
          )
        })}

        <div className="mt-3 mb-4">
          <Link to="/quizzes">
            <Button className="quiz-action-btn me-2">Quiz</Button>
          </Link>
          <Link to="/quiz/review">
            <Button className="quiz-action-btn">Quiz Review</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default QuizResult
