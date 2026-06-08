function Question({
  question,
  options,
  selectedAnswer,
  onSelectAnswer,
  onSubmit,
}) {
  return (
    <div className="quiz-card">
      <h2>{question}</h2>

      <div className="quiz-options">
        {options.map((option) => (
          <label
            key={option}
            className={`quiz-option${selectedAnswer === option ? " selected" : ""}`}
          >
            <input
              type="radio"
              name="answer"
              value={option}
              checked={selectedAnswer === option}
              onChange={() => onSelectAnswer(option)}
            />
            {option}
          </label>
        ))}
      </div>

      <button
        className="quiz-btn"
        onClick={onSubmit}
        disabled={!selectedAnswer}
      >
        Submit
      </button>
    </div>
  );
}

export default Question;
