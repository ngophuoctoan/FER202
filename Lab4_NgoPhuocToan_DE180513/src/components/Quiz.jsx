import { useQuiz } from "../context/QuizContext";
import Question from "./Question";
import QuizSetup from "./QuizSetup";
import Result from "./Result";
import "./Quiz.css";

function Quiz() {
  const {
    questions,
    currentQuestion,
    showResult,
    isSetup,
    submitAnswer,
    nextQuestion,
    restartQuiz,
  } = useQuiz();

  return (
    <div className="quiz-app">
      <h1>Quiz App</h1>

      {isSetup ? (
        <QuizSetup />
      ) : (
        <>
          {!showResult && (
            <p className="quiz-progress">
              Câu {currentQuestion + 1}/{questions.length}
            </p>
          )}

          {showResult ? (
            <Result onRestart={restartQuiz} />
          ) : (
            <Question onSubmit={submitAnswer} onNext={nextQuestion} />
          )}
        </>
      )}
    </div>
  );
}

export default Quiz;
