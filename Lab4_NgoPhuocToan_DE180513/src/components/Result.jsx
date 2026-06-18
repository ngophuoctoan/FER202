import { useQuiz } from "../context/QuizContext";

function Result({ onRestart }) {
  const { score, questions } = useQuiz();

  return (
    <div className="quiz-card quiz-result">
      <h2>Kết quả</h2>

      <p className="quiz-score">
        {score}/{questions.length}
      </p>
      <p className="quiz-score-label">Điểm của bạn</p>

      <button className="quiz-btn" onClick={onRestart}>
        Làm lại
      </button>
    </div>
  );
}

export default Result;
