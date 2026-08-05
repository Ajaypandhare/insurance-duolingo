import "./LessonNode.css";

function LessonNode({ lesson }) {
  return (
    <div className={`lesson-node ${lesson.status}`}>

      <div className="lesson-circle">
        {lesson.status === "locked" ? "🔒" : lesson.icon}
      </div>

      <h3>{lesson.title}</h3>

      <p>{lesson.xp} XP</p>

      {lesson.status === "current" && (
        <button>Start Lesson</button>
      )}

    </div>
  );
}

export default LessonNode;