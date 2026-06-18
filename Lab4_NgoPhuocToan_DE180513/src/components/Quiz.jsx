import { useEffect } from "react";

import { useQuiz } from "../context/QuizContext";
import Question from "./Question";
import QuizSetup from "./QuizSetup";
import Result from "./Result";
import "./Quiz.css";

function Quiz() {
  const {
    questions,
    currentQuestion,
    setCurrentQuestion,
    selectedAnswer,
    setSelectedAnswer,
    score,
    setScore,
    showResult,
    setShowResult,
    isSetup,
    setIsSetup,
    answerFeedback,
    setAnswerFeedback,
    displayQuestion,
    setDisplayQuestion,
  } = useQuiz();

  useEffect(() => {
    if (!isSetup && !showResult && questions[currentQuestion]) {
      setDisplayQuestion(questions[currentQuestion]);
      setSelectedAnswer("");
      setAnswerFeedback(null);
    }
  }, [
    currentQuestion,
    questions,
    isSetup,
    showResult,
    setDisplayQuestion,
    setSelectedAnswer,
    setAnswerFeedback,
  ]);

  const handleSubmit = () => {
    if (!selectedAnswer || !displayQuestion) return;

    const isCorrect = selectedAnswer === displayQuestion.correctAnswer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setAnswerFeedback({
      isCorrect,
      message: isCorrect
        ? "Chính xác!"
        : `Sai rồi! Đáp án đúng là: ${displayQuestion.correctAnswer}`,
    });
  };

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setShowResult(false);
    setAnswerFeedback(null);
    setDisplayQuestion(null);
    setIsSetup(true);
  };

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
            <Result onRestart={handleRestart} />
          ) : (
            <Question onSubmit={handleSubmit} onNext={handleNext} />
          )}
        </>
      )}
    </div>
  );
}

export default Quiz;
