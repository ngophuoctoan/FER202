import { useState } from "react";

import { useQuiz } from "../context/QuizContext";

const emptyQuestion = () => ({
  question: "",
  answers: ["", "", ""],
  correctAnswer: "",
});

function QuizSetup() {
  const { questions, startQuiz } = useQuiz();
  const [formQuestions, setFormQuestions] = useState(questions);

  const updateQuestion = (index, field, value) => {
    setFormQuestions((prev) =>
      prev.map((item, i) => {
        if (i === index) {
          const newItem = {
            question: item.question,
            answers: item.answers,
            correctAnswer: item.correctAnswer,
          };
          newItem[field] = value;
          return newItem;
        }
        return item;
      }),
    );
  };

  const updateAnswer = (qIndex, aIndex, value) => {
    setFormQuestions((prev) =>
      prev.map((item, i) => {
        if (i === qIndex) {
          const newAnswers = item.answers.map((answer, j) =>
            j === aIndex ? value : answer,
          );
          const newItem = {
            question: item.question,
            answers: newAnswers,
            correctAnswer: item.correctAnswer,
          };
          return newItem;
        }
        return item;
      }),
    );
  };

  const addQuestion = () => {
    setFormQuestions((prev) => prev.concat(emptyQuestion()));
  };

  const removeQuestion = (index) => {
    if (formQuestions.length === 1) return;
    setFormQuestions((prev) => prev.filter((item, i) => i !== index));
  };

  const handleStart = () => {
    // Duyệt qua từng câu để kiểm tra tính hợp lệ và đưa ra thông báo lỗi chi tiết cho người dùng
    for (let i = 0; i < formQuestions.length; i++) {
      const item = formQuestions[i];
      if (!item.question.trim()) {
        alert(`Vui lòng nhập nội dung câu hỏi tại Câu số ${i + 1}!`);
        return;
      }
      if (item.answers.some((answer) => !answer.trim())) {
        alert(`Vui lòng nhập đầy đủ cả 3 đáp án lựa chọn tại Câu số ${i + 1}!`);
        return;
      }
      if (!item.correctAnswer.trim()) {
        alert(`Vui lòng chọn đáp án đúng cho Câu số ${i + 1}!`);
        return;
      }
    }

    startQuiz(formQuestions);
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
