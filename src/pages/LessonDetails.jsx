import { useParams, useNavigate } from "react-router-dom";
import lessonContent from "../data/lessonContent";
import "./LessonDetails.css";

function LessonDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const lesson = lessonContent.find(
    (item) => item.id === Number(id)
  );

  if (!lesson) {
    return (
      <div className="lesson-not-found">
        <h2>Lesson Not Found</h2>
        <button onClick={() => navigate("/lessons")}>
          Back to Lessons
        </button>
      </div>
    );
  }

  return (
    <div className="lesson-details">

      {/* Header */}

      <button
        className="back-btn"
        onClick={() => navigate("/lessons")}
      >
        ← Back to Lessons
      </button>

      <div className="lesson-header">

        <div className="lesson-title">

          <h1>{lesson.title}</h1>

          <p>{lesson.description}</p>

          <div className="lesson-meta">

            <span>⭐ {lesson.xp} XP</span>

            <span>⏱ {lesson.duration}</span>

            <span>📚 {lesson.difficulty}</span>

          </div>

        </div>

      </div>

      {/* Progress */}

      <div className="progress-card">

        <h3>Your Progress</h3>

        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{ width: "40%" }}
          />

        </div>

        <span>40% Completed</span>

      </div>

      {/* Learning Objectives */}

      <div className="content-card">

        <h2>🎯 What You'll Learn</h2>

        <ul>

          {lesson.objectives.map((item, index) => (

            <li key={index}>
              ✅ {item}
            </li>

          ))}

        </ul>

      </div>

      {/* Lesson Sections */}

      <div className="content-card">

        <h2>📖 Lesson Sections</h2>

        {lesson.sections.map((section) => (

          <div
            key={section.id}
            className="section-item"
          >

            <div className="section-icon">
              {section.icon}
            </div>

            <div>

              <h3>{section.title}</h3>

              <p>{section.content}</p>

            </div>

          </div>

        ))}

      </div>

      {/* Rewards */}

      <div className="reward-card">

        <h2>🏆 Rewards</h2>

        <div className="reward-grid">

          <div>
            ⭐
            <h3>{lesson.rewards.xp} XP</h3>
          </div>

          <div>
            🏅
            <h3>{lesson.rewards.badge}</h3>
          </div>

          <div>
            🔓
            <h3>{lesson.rewards.unlock}</h3>
          </div>

        </div>

      </div>

      {/* Start Button */}

      <div className="start-btn-wrapper">

  <button
    className="start-learning-btn"
    onClick={() => navigate(`/learning/${lesson.id}`)}
  >
    Start Learning →
  </button>

   </div>

    </div>
  );
}

export default LessonDetails;