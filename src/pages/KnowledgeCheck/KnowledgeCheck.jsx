import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import knowledgeCheck from "../../data/knowledgeCheck";
import "./KnowledgeCheck.css";

function KnowledgeCheck() {
  const { id } = useParams();
  const navigate = useNavigate();

  const question = knowledgeCheck.find(
    (item) => item.lessonId === Number(id)
  );

  const [selectedOption, setSelectedOption] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!question) {
    return (
      <div className="knowledge-empty">
        <h2>No Knowledge Check Found</h2>

        <button onClick={() => navigate("/lessons")}>
          Back to Lessons
        </button>
      </div>
    );
  }

  const isCorrect =
    selectedOption === question.correctAnswer;

  return (
    <div className="knowledge-page">

      {/* Background Shapes */}

      <div className="bg-circle circle1"></div>
      <div className="bg-circle circle2"></div>
      <div className="bg-circle circle3"></div>

      {/* Header */}

      <header className="knowledge-header">

        <button
          className="exit-btn"
          onClick={() => navigate("/lessons")}
        >
          ← Exit
        </button>

        <div className="header-right">

          <div className="xp-chip">
            ⭐ 340 XP
          </div>

          <div className="streak-chip">
            🔥 7 Days
          </div>

        </div>

      </header>

      {/* Progress */}

      <div className="progress-section">

        <div className="progress-top">

          <span>Knowledge Check</span>

          <span>Question 1 / 1</span>

        </div>

        <div className="progress-track">

          <div
            className="progress-fill"
            style={{ width: "100%" }}
          />

        </div>

      </div>

      {/* Main Card */}

      <div className="knowledge-card">

        <div className="brain-icon">
          🧠
        </div>

        <h1>
          {question.question}
        </h1>

        <p className="subtitle">
          Select the correct answer
        </p>

        {/* Options */}

        <div className="option-list">

          {question.options.map((option, index) => {

            const isSelected =
              selectedOption === option;

            let optionClass = "option-card";

            if (isSelected)
              optionClass += " selected";

            if (submitted) {

              if (
                option === question.correctAnswer
              ) {
                optionClass += " correct";
              }

              if (
                isSelected &&
                option !== question.correctAnswer
              ) {
                optionClass += " wrong";
              }

            }

            return (

              <div
                key={index}
                className={optionClass}
                onClick={() => {

                  if (!submitted) {
                    setSelectedOption(option);
                  }

                }}
              >

                <div className="option-icon">

                  {index === 0 && "🛡️"}
                  {index === 1 && "🏦"}
                  {index === 2 && "💰"}
                  {index === 3 && "📄"}

                </div>

                <div>

                  <h3>{option}</h3>

                </div>

              </div>

            );

          })}

        </div>

        {/* Result */}

        {submitted && (

          <div
            className={
              isCorrect
                ? "answer-box success"
                : "answer-box error"
            }
          >

            <h2>

              {isCorrect
                ? "🎉 Excellent!"
                : "❌ Incorrect"}

            </h2>

            {!isCorrect && (

              <p>

                Correct Answer:

                <strong>

                  {" "}
                  {question.correctAnswer}

                </strong>

              </p>

            )}

            <p>

              {question.explanation}

            </p>

            {isCorrect && (

              <div className="reward-chip">

                ⭐ +{question.xp} XP

              </div>

            )}

          </div>

        )}

        {/* Bottom Button */}

        {!submitted ? (

          <button
            className="action-btn"
            disabled={!selectedOption}
            onClick={() => setSubmitted(true)}
          >
            Check Answer →
          </button>

        ) : (

          <button
            className="action-btn"
            onClick={() => navigate(`/quiz/${id}`)}
          >
            Continue to Quiz →
          </button>

        )}

      </div>

    </div>
  );
}

export default KnowledgeCheck;