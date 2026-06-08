function Result({ score, totalQuestions, onRestart }) {
  return (
    <div className="quiz-card quiz-result">
      <h2>Kết quả</h2>

      <p className="quiz-score">
        {score}/{totalQuestions}
      </p>
      <p className="quiz-score-label">Điểm của bạn</p>

      <button className="quiz-btn" onClick={onRestart}>
        Chơi lại
      </button>
    </div>
  );
}

export default Result;
