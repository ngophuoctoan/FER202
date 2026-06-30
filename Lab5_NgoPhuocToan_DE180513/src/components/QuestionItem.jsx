function QuestionItem({ question, selectedAnswer, onAnswerChange, submitted }) {
  const isCorrect = selectedAnswer === question.correctAnswer

  let boxClass = 'question-item mb-4'
  if (submitted) {
    boxClass += isCorrect ? ' question-correct' : ' question-wrong'
  }

  return (
    <div className={boxClass}>
      <p className="fw-bold">
        Question {question.id}: {question.question}
      </p>

      {question.options.map((option) => {
        let optionClass = 'form-check'
        if (submitted && option === question.correctAnswer) optionClass += ' option-correct'
        if (submitted && option === selectedAnswer && !isCorrect) optionClass += ' option-wrong'

        return (
          <div key={option} className={optionClass}>
            <input
              className="form-check-input"
              type="radio"
              name={`question-${question.id}`}
              id={`q${question.id}-${option}`}
              checked={selectedAnswer === option}
              onChange={() => onAnswerChange(question.id, option)}
              disabled={submitted}
            />
            <label className="form-check-label" htmlFor={`q${question.id}-${option}`}>
              {option}
            </label>
          </div>
        )
      })}

      {submitted && isCorrect && <p className="text-success result-text">✓ Đúng</p>}

      {submitted && !isCorrect && (
        <div className="result-text">
          <p className="text-danger mb-1">✗ Đáp án sai</p>
          <p className="text-success mb-0">Đáp án đúng là: {question.correctAnswer}</p>
        </div>
      )}
    </div>
  )
}

export default QuestionItem
