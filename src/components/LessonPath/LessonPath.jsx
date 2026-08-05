import lessons from "../../data/lessons";
import LessonNode from "../LessonNode/LessonNode";
import "./LessonPath.css";

function LessonPath() {
  return (
    <div className="lesson-path">

      {lessons.map((lesson) => (
        <LessonNode
          key={lesson.id}
          lesson={lesson}
        />
      ))}

    </div>
  );
}

export default LessonPath;