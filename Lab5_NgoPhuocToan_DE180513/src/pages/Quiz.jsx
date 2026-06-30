import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import QuestionItem from '../components/QuestionItem'
import { questions } from '../data/questions'

function Quiz() {
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const allAnswered = questions.every((q) => answers[q.id])

  let correctCount = 0
  if (submitted) {
    correctCount = questions.filter((q) => answers[q.id] === q.correctAnswer).length
  }

  function selectAnswer(questionId, option) {
    const newAnswers = {}
    for (const id in answers) {
      newAnswers[id] = answers[id]
    }
    newAnswers[questionId] = option
    setAnswers(newAnswers)
    setSubmitted(false)
  }

  function submitQuiz() {
    setSubmitted(true)
  }

  function resetQuiz() {
    setAnswers({})
    setSubmitted(false)
  }

  return (
    <Container>
      <h1 className="mb-4">Quiz</h1>

      {submitted && (
        <Alert variant={correctCount === questions.length ? 'success' : 'warning'}>
          Bạn trả lời đúng <strong>{correctCount}</strong> / <strong>{questions.length}</strong> câu.
        </Alert>
      )}

      {!submitted && !allAnswered && (
        <Alert variant="info">Vui lòng chọn đáp án cho tất cả câu hỏi trước khi nộp bài.</Alert>
      )}

      {questions.map((question) => (
        <QuestionItem
          key={question.id}
          question={question}
          selectedAnswer={answers[question.id] || ''}
          onAnswerChange={selectAnswer}
          submitted={submitted}
        />
      ))}

      <Button variant="primary" onClick={submitQuiz} disabled={!allAnswered || submitted}>
        Submit
      </Button>

      {submitted && (
        <Button variant="outline-secondary" className="ms-2" onClick={resetQuiz}>
          Làm lại
        </Button>
      )}
    </Container>
  )
}

export default Quiz
