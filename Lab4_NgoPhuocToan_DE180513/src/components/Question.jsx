import { useQuiz } from "../context/QuizContext";

function Question({ onSubmit, onNext }) {
  const { selectedAnswer, setSelectedAnswer, answerFeedback, displayQuestion } =
    useQuiz();

  if (!displayQuestion) return null;

  const { question, answers } = displayQuestion;

  return (
    <div className="quiz-card">
      <h2>{question}</h2>

      <div className="quiz-options">
        {answers.map((option) => (
          <label
            key={option}
            className={`quiz-option${selectedAnswer === option ? " selected" : ""}${
              answerFeedback
                ? option === displayQuestion.correctAnswer
                  ? " correct"
                  : selectedAnswer === option
                    ? " incorrect"
                    : ""
                : ""
            }`}
          >
            <input
              type="radio"
              name="answer"
              value={option}
              checked={selectedAnswer === option}
              onChange={() => setSelectedAnswer(option)}
              disabled={answerFeedback !== null}
            />
            {option}
          </label>
        ))}
      </div>

      {answerFeedback && (
        <p
          className={`quiz-feedback ${
            answerFeedback.isCorrect ? "correct" : "incorrect"
          }`}
        >
          {answerFeedback.message}
        </p>
      )}

      {!answerFeedback ? (
        <button
          className="quiz-btn"
          onClick={onSubmit}
          disabled={!selectedAnswer}
        >
          Submit
        </button>
      ) : (
        <button className="quiz-btn" onClick={onNext}>
          Câu tiếp theo
        </button>
      )}
    </div>
  );
}

export default Question;
