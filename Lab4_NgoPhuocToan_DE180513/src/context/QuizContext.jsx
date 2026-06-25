import { createContext, useContext, useState } from "react";

import { quizData } from "../data/quizData";

const QuizContext = createContext(null);

export function QuizProvider({ children }) {
  const [questions, setQuestions] = useState(quizData);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  //màn hình cấu hình hay màn hình làm bài (QuizSetup or Quiz)
  const [isSetup, setIsSetup] = useState(true);
  const [answerFeedback, setAnswerFeedback] = useState(null);

  const startQuiz = (newQuestions) => {
    setQuestions(newQuestions);
    setIsSetup(false);
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setShowResult(false);
    setAnswerFeedback(null);
  };

  const selectAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  const submitAnswer = () => {
    if (!selectedAnswer) return;
    const displayQuestion = questions[currentQuestion];
    const isCorrect = selectedAnswer === displayQuestion.correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }
    setAnswerFeedback({
      isCorrect: isCorrect,
      message: isCorrect
        ? "Chính xác!"
        : "Sai rồi! Đáp án đúng là: " + displayQuestion.correctAnswer,
    });
  };

  const nextQuestion = () => {
    const nextIndex = currentQuestion + 1;
    setSelectedAnswer("");
    setAnswerFeedback(null);
    if (nextIndex < questions.length) {
      setCurrentQuestion(nextIndex);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setShowResult(false);
    setAnswerFeedback(null);
    setIsSetup(true);
  };

  const value = {
    questions: questions,
    currentQuestion: currentQuestion,
    selectedAnswer: selectedAnswer,
    score: score,
    showResult: showResult,
    isSetup: isSetup,
    answerFeedback: answerFeedback,
    startQuiz: startQuiz,
    selectAnswer: selectAnswer,
    submitAnswer: submitAnswer,
    nextQuestion: nextQuestion,
    restartQuiz: restartQuiz,
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
