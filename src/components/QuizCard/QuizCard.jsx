import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import quizData from "../../data/quizData";
import "./Quiz.css";

function Quiz() {
  const { id } = useParams();
  const navigate = useNavigate();

  const questions = quizData.filter(
    (item) => item.lessonId === Number(id)
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [answers, setAnswers] = useState([]);

  const question = questions[currentQuestion];

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  const handleNext = () => {
    if (!selectedOption) return;

    const updatedAnswers = [...answers];

    updatedAnswers[currentQuestion] = {
      questionId: question.id,
      selectedAnswer: selectedOption,
      correct:
        selectedOption === question.correctAnswer,
    };

    setAnswers(updatedAnswers);

    if (currentQuestion === questions.length - 1) {
      const score = updatedAnswers.filter(
        (item) => item.correct
      ).length;

      navigate("/result", {
        state: {
          score,
          total: questions.length,
          lessonId: id,
        },
      });

      return;
    }

    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption("");
  };

  const handlePrevious = () => {
    if (currentQuestion === 0) return;

    setCurrentQuestion(currentQuestion - 1);

    setSelectedOption(
      answers[currentQuestion - 1]?.selectedAnswer || ""
    );
  };

  return (
    <div className="quiz-page">

      {/* Background */}

      <div className="quiz-bg one"></div>
      <div className="quiz-bg two"></div>

      {/* Header */}

      <header className="quiz-header">

        <button
          className="exit-btn"
          onClick={() => navigate("/lessons")}
        >
          ← Exit
        </button>

        <div className="header-info">

          <div className="xp-chip">
            ⭐ 350 XP
          </div>

          <div className="streak-chip">
            🔥 7 Days
          </div>

        </div>

      </header>

      {/* Progress */}

      <div className="quiz-progress">

        <div className="progress-title">

          <span>
            Question {currentQuestion + 1}
          </span>

          <span>
            {questions.length}
          </span>

        </div>

        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          ></div>

        </div>

      </div>

      {/* Card */}

      <div className="quiz-card">

        <div className="question-icon">
          📝
        </div>

        <h1>{question.question}</h1>

        <p className="question-subtitle">
          Select the best answer
        </p>

        <div className="option-grid">

          {question.options.map((option, index) => (

            <div
              key={index}
              className={`option-card ${
                selectedOption === option
                  ? "selected"
                  : ""
              }`}
              onClick={() =>
                setSelectedOption(option)
              }
            >

              <div className="option-letter">

                {String.fromCharCode(65 + index)}

              </div>

              <span>{option}</span>

            </div>

          ))}

        </div>

        {/* Footer */}

        <div className="quiz-footer">

          <button
            className="previous-btn"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            ← Previous
          </button>

          <button
            className="next-btn"
            disabled={!selectedOption}
            onClick={handleNext}
          >
            {currentQuestion ===
            questions.length - 1
              ? "Finish Quiz"
              : "Next →"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default Quiz;