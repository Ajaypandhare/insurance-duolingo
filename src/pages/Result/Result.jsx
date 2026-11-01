import { useLocation, useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import "./Result.css";


function Result() {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) {
    return (
      <div className="result-empty">
        <h2>No Result Found</h2>

        <button onClick={() => navigate("/lessons")}>
          Back to Lessons
        </button>
      </div>
    );
  }

  const { score, total, lessonId } = state;

  const percentage = Math.round((score / total) * 100);

  const width = window.innerWidth;
  const height = window.innerHeight;

  const showConfetti = percentage >= 70;

  let badge = "";
  let message = "";
  let xp = 0;
  let emoji = "";

  if (percentage >= 90) {
    badge = "🏆 Insurance Master";
    message = "Outstanding! You're becoming an insurance expert.";
    xp = 120;
    emoji = "🥳";
  } else if (percentage >= 75) {
    badge = "🥇 Insurance Pro";
    message = "Excellent work! Keep learning.";
    xp = 100;
    emoji = "🎉";
  } else if (percentage >= 50) {
    badge = "🥈 Insurance Learner";
    message = "Good job! Practice a little more.";
    xp = 70;
    emoji = "😊";
  } else {
    badge = "📘 Beginner";
    message = "Don't worry. Review the lesson and try again.";
    xp = 40;
    emoji = "💪";
  }
 

  return (

    <
      
    >
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={350}
          gravity={0.15}
        />
      )}
      

      <div className="result-page">
         <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      />

        <div className="result-bg one"></div>
        <div className="result-bg two"></div>

        <div className="result-card">

          <div className="result-icon">
            {emoji}
          </div>

          <h1>Quiz Completed 🎉</h1>

          <p className="message">
            {message}
          </p>

          <div className="score-circle">

            <h2>{percentage}%</h2>

            <span>{score} / {total}</span>

          </div>

          <div className="stats-grid">

            <div className="stat-box">

              <span>⭐</span>

              <h3>{xp}</h3>

              <p>XP Earned</p>

            </div>

            <div className="stat-box">

              <span>🏅</span>

              <h3>{badge}</h3>

              <p>Badge</p>

            </div>

            <div className="stat-box">

              <span>🎯</span>

              <h3>{score}</h3>

              <p>Correct</p>

            </div>

          </div>

          <div className="achievement-box">

            <h2>Achievement Unlocked</h2>

            <p>
              🎉 You successfully completed your lesson.
            </p>

          </div>

          <div className="button-group">

            <button
              className="secondary-btn"
              onClick={() => navigate(`/quiz/${lessonId}`)}
            >
              Retry Quiz
            </button>

            <button
              className="primary-btn"
              onClick={() => navigate("/lessons")}
            >
              Continue Learning →
            </button>

          </div>

        </div>

      </div>
    </>
  );
}

export default Result;