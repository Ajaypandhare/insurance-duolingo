import "./LessonCard.css";

function LessonCard({ lesson }) {
  return (
    <div className="lesson-card">

      <div className="lesson-header">
        <h3>{lesson.title}</h3>

        {lesson.completed ? (
          <span className="completed">Completed</span>
        ) : (
          <span className="pending">New</span>
        )}
      </div>

      <p>{lesson.category}</p>

      <div className="lesson-footer">
        <span>⏱ {lesson.duration}</span>

        <span>⭐ {lesson.xp} XP</span>
      </div>

      <button className="lesson-btn">
        Start Lesson
      </button>

    </div>
  );
}

export default LessonCard;