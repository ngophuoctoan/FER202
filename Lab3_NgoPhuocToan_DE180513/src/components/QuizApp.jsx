import { useState } from "react";

import Question from "./Question";
import Result from "./Result";
import questions from "../data/questions";
import "./Quiz.css";

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState("");

  const [score, setScore] = useState(0);

  const [showResult, setShowResult] = useState(false);

  const handleSubmit = () => {
    if (!selectedAnswer) return;

    const currentQuiz = questions[currentQuestion];

    if (selectedAnswer === currentQuiz.answer) {
      setScore((prev) => prev + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);

      setSelectedAnswer("");
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="quiz-app">
      <h1>Quiz App</h1>

      {!showResult && (
        <p className="quiz-progress">
          Câu {currentQuestion + 1}/{questions.length}
        </p>
      )}

      {showResult ? (
        <Result
          score={score}
          totalQuestions={questions.length}
          onRestart={handleRestart}
        />
      ) : (
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={setSelectedAnswer}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default QuizApp;
