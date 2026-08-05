import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import lessonContent from "../data/lessonContent";
import "./Learning.css";

function Learning() {

    const { id } = useParams();
    const navigate = useNavigate();

    const lesson = lessonContent.find(
        (item) => item.id === Number(id)
    );

    const [currentSlide, setCurrentSlide] = useState(0);

    if (!lesson) {
        return (
            <div className="learning-not-found">
                <h2>Lesson Not Found</h2>

                <button onClick={() => navigate("/lessons")}>
                    Back
                </button>
            </div>
        );
    }

    const slide = lesson.sections[currentSlide];

    const nextSlide = () => {

        if (currentSlide < lesson.sections.length - 1) {
            setCurrentSlide(currentSlide + 1);
        } else {
           navigate(`/knowledge-check/${lesson.id}`);
        }

    };

    const previousSlide = () => {

        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }

    };

    const progress =
        ((currentSlide + 1) / lesson.sections.length) * 100;

    return (

        <div className="learning-container">

            {/* Progress */}

            <div className="learning-progress">

                <div className="progress-bar">

                    <div
                        className="progress-fill"
                        style={{ width: `${progress}%` }}
                    />

                </div>

                <span>

                    {currentSlide + 1} / {lesson.sections.length}

                </span>

            </div>

            {/* Card */}

            <div className="learning-card">

                <div className="slide-icon">

                    {slide.icon}

                </div>

                <h1>

                    {slide.title}

                </h1>

                <p>

                    {slide.type === "example" ? (

  <>
    <h2>{slide.heading}</h2>

    <div className="story-box">
      {slide.story.map((item, index) => (
        <p key={index}>✅ {item}</p>
      ))}
    </div>

    <div className="takeaway-box">
      <h3>💡 Key Learning</h3>
      <p>{slide.takeaway}</p>
    </div>
  </>

) : (

  <p>{slide.content}</p>

)}

                </p>

            </div>

            {/* Buttons */}

            <div className="learning-buttons">

                <button
                    className="previous-btn"
                    disabled={currentSlide === 0}
                    onClick={previousSlide}
                >
                    ← Previous
                </button>

                <button
                    className="next-btn"
                    onClick={nextSlide}
                >
                    {currentSlide === lesson.sections.length - 1
                        ? "Start Quiz →"
                        : "Next →"}
                </button>

            </div>

        </div>

    );

}

export default Learning;