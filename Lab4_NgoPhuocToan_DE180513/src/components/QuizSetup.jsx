import { useState } from "react";

import { useQuiz } from "../context/QuizContext";

const emptyQuestion = () => ({
  question: "",
  answers: ["", "", ""],
  correctAnswer: "",
});

function QuizSetup() {
  const { questions, setQuestions, setIsSetup } = useQuiz();
  const [formQuestions, setFormQuestions] = useState(questions);

  const updateQuestion = (index, field, value) => {
    setFormQuestions((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item)),
    );
  };

  const updateAnswer = (qIndex, aIndex, value) => {
    setFormQuestions((prev) =>
      prev.map((item, i) =>
        i === qIndex
          ? {
              ...item,
              answers: item.answers.map((answer, j) =>
                j === aIndex ? value : answer,
              ),
            }
          : item,
      ),
    );
  };

  const addQuestion = () => {
    setFormQuestions((prev) => [...prev, emptyQuestion()]);
  };

  const removeQuestion = (index) => {
    if (formQuestions.length === 1) return;
    setFormQuestions((prev) => prev.filter((_, i) => i !== index));
  };

  const handleStart = () => {
    const validQuestions = formQuestions.filter(
      (item) =>
        item.question.trim() &&
        item.answers.every((answer) => answer.trim()) &&
        item.correctAnswer.trim(),
    );

    if (validQuestions.length === 0) return;

    setQuestions(validQuestions);
    setIsSetup(false);
  };

  return (
    <div className="quiz-card">
      <h2>Thiết lập câu hỏi</h2>

      {formQuestions.map((item, qIndex) => (
        <div key={qIndex} className="setup-question">
          <label>
            Câu hỏi {qIndex + 1}
            <input
              type="text"
              value={item.question}
              onChange={(e) =>
                updateQuestion(qIndex, "question", e.target.value)
              }
              placeholder="Nhập câu hỏi"
            />
          </label>

          {item.answers.map((answer, aIndex) => (
            <label key={aIndex}>
              Đáp án {aIndex + 1}
              <input
                type="text"
                value={answer}
                onChange={(e) => updateAnswer(qIndex, aIndex, e.target.value)}
                placeholder={`Đáp án ${aIndex + 1}`}
              />
            </label>
          ))}

          <label>
            Đáp án đúng
            <select
              value={item.correctAnswer}
              onChange={(e) =>
                updateQuestion(qIndex, "correctAnswer", e.target.value)
              }
            >
              <option value="">Chọn đáp án đúng</option>
              {item.answers.map(
                (answer, aIndex) =>
                  answer.trim() && (
                    <option key={aIndex} value={answer}>
                      {answer}
                    </option>
                  ),
              )}
            </select>
          </label>

          {formQuestions.length > 1 && (
            <button
              type="button"
              className="quiz-btn quiz-btn-secondary"
              onClick={() => removeQuestion(qIndex)}
            >
              Xóa câu
            </button>
          )}
        </div>
      ))}

      <div className="setup-actions">
        <button
          type="button"
          className="quiz-btn quiz-btn-secondary"
          onClick={addQuestion}
        >
          Thêm câu hỏi
        </button>
        <button type="button" className="quiz-btn" onClick={handleStart}>
          Bắt đầu Quiz
        </button>
      </div>
    </div>
  );
}

export default QuizSetup;
