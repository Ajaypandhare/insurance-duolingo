import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Lessons.css";
import lessons from "../data/lessons";

function Lessons() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Basics",
    "Life",
    "Health",
    "Auto",
    "Travel",
  ];

  const filteredLessons = lessons.filter((lesson) => {
    const matchSearch = lesson.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchCategory =
      category === "All" || lesson.category === category;

    return matchSearch && matchCategory;
  });

  const openLesson = (lesson) => {
    if (lesson.status !== "locked") {
      navigate(`/lesson/${lesson.id}`);
    }
  };

  return (
    <div className="lessons-page">

      {/* Header */}

      <div className="page-header">
        <h1>📚 Insurance Learning Path</h1>

        <p>
          Learn insurance one module at a time and
          unlock new lessons as you progress.
        </p>
      </div>

      {/* Search */}

      <div className="search-box">
        <input
          type="text"
          placeholder="🔍 Search lesson..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Categories */}

      <div className="category-list">
        {categories.map((item) => (
          <button
            key={item}
            className={
              category === item ? "active-category" : ""
            }
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Lesson Cards */}

      <div className="lesson-container">

        {filteredLessons.map((lesson) => (

          <div
            key={lesson.id}
            className={`lesson-card ${lesson.status}`}
          >

            <div className="lesson-left">

              <div className="lesson-icon">
                {lesson.status === "locked"
                  ? "🔒"
                  : lesson.icon}
              </div>

              <div className="lesson-content">

                <div className="lesson-title-row">

                  <h2>{lesson.title}</h2>

                  <span className="difficulty">
                    {lesson.difficulty}
                  </span>

                </div>

                <p>{lesson.description}</p>

                <div className="lesson-info">

                  <span>⭐ {lesson.xp} XP</span>

                  <span>⏱ {lesson.duration}</span>

                  <span>📚 {lesson.totalLessons} Topics</span>

                </div>

                {lesson.status !== "locked" && (

                  <div className="progress-wrapper">

                    <div className="progress-bar">

                      <div
                        className="progress-fill"
                        style={{
                          width: `${lesson.progress}%`,
                        }}
                      />

                    </div>

                    <span>{lesson.progress}%</span>

                  </div>

                )}

              </div>

            </div>

            <div className="lesson-right">

            {lesson.status === "current" && (
  <button
    className="premium-btn continue-premium"
    onClick={() => openLesson(lesson)}
  >
    ▶ Continue
  </button>
)}


{lesson.status === "completed" && (
  <button
    className="premium-btn review-premium"
    onClick={() => openLesson(lesson)}
  >
    📖 Review
  </button>
)}


{lesson.status === "locked" && (
  <button
    className="premium-btn locked-premium"
    disabled
  >
    🔒 Locked
  </button>
)}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Lessons;