import { createContext, useContext, useState } from "react";

import { quizData } from "../data/quizData";

const QuizContext = createContext(null);

export function QuizProvider({ children }) {
  const [questions, setQuestions] = useState(quizData);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isSetup, setIsSetup] = useState(true);
  const [answerFeedback, setAnswerFeedback] = useState(null);
  const [displayQuestion, setDisplayQuestion] = useState(null);

  const value = {
    questions,
    setQuestions,
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
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export function useQuiz() {
  const context = useContext(QuizContext);

  if (!context) {
    throw new Error("useQuiz must be used within QuizProvider");
  }

  return context;
}
