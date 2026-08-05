import "./Home.css";
import lessons from "../data/lessons";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import companyLogo from "../assets/logo.png";

function Home() {
  return (
    <div className="home-container">

      {/* Hero Banner */}
    <section className="hero-dashboard">

  {/* Left */}

  <div className="dashboard-left">

    <span className="welcome-tag">
      👋 Welcome Back, Ajay
    </span>

    <h1>Insurance Academy</h1>

    <p>
      Learn insurance through interactive lessons,
      quizzes, achievements and AI-powered recommendations.
    </p>

    <div className="hero-buttons">

      <button className="continue-btn">
        Continue Learning →
      </button>

      <button className="outline-btn">
        Explore Lessons
      </button>

    </div>

  </div>

  {/* Right */}

  <div className="dashboard-right">

    <div className="company-card">

      <img
        src={companyLogo}
        alt="Allstate Logo"
        className="company-logo"
      />

      <h3>Powered by Allstate</h3>

      <p>
        Insurance Learning Platform
      </p>

    </div>

    <div className="stats-grid">

      <div className="stat-card">
        <span>🔥</span>

        <div>
          <h2>7</h2>
          <p>Day Streak</p>
        </div>

      </div>

      <div className="stat-card">
        <span>⭐</span>

        <div>
          <h2>350</h2>
          <p>Total XP</p>
        </div>

      </div>

      <div className="stat-card">
        <span>📚</span>

        <div>
          <h2>6</h2>
          <p>Lessons</p>
        </div>

      </div>

      <div className="stat-card">
        <span>🏆</span>

        <div>
          <h2>4</h2>
          <p>Badges</p>
        </div>

      </div>

    </div>

    <div className="progress-dashboard">

      <div className="progress-header">

        <span>Learning Progress</span>

        <span>65%</span>

      </div>

      <ProgressBar progress={65} />

    </div>

  </div>

</section>

      {/* Today's Lesson */}
      <section className="today-card">

        <div>

          <span className="section-label">
            Today's Lesson
          </span>

          <h2>❤️ Life Insurance Basics</h2>

          <p>
            Duration : 8 min • Easy • Reward : ⭐80 XP
          </p>

        </div>

        <button className="resume-btn">
          Resume
        </button>

      </section>

      {/* Continue Learning */}

      <div className="section-header">
        <h2>Continue Learning</h2>
      </div>

      {/* Continue Learning Cards */}

<div className="lesson-grid">

  {lessons.map((lesson) => (

    <div
      key={lesson.id}
      className={`modern-lesson-card ${lesson.status}`}
    >

      {/* Top */}

      <div className="lesson-top">

        <div
          className="lesson-circle"
          style={{ background: lesson.color }}
        >
          {lesson.status === "locked"
            ? "🔒"
            : lesson.icon}
        </div>

        <div className="lesson-heading">

          <h3>{lesson.title}</h3>

          <span className="lesson-category">

            {lesson.category}

          </span>

        </div>

        <div
          className={`lesson-level ${lesson.difficulty.toLowerCase()}`}
        >

          {lesson.difficulty}

        </div>

      </div>

      {/* Description */}

      <p className="lesson-description">

        {lesson.description}

      </p>

      {/* Info */}

      <div className="lesson-info-row">

        <span>⭐ {lesson.xp} XP</span>

        <span>⏱ {lesson.duration}</span>

        <span>📚 {lesson.totalLessons} Topics</span>

      </div>

      {/* Progress */}

      <div className="progress-wrapper">

        <div className="progress-header">

          <span>Progress</span>

          <span>{lesson.progress}%</span>

        </div>

        <ProgressBar progress={lesson.progress} />

      </div>

      {/* Button */}

      <button
        className={
          lesson.status === "completed"
            ? "review-modern-btn"
            : lesson.status === "current"
            ? "continue-modern-btn"
            : "locked-modern-btn"
        }
      >

        {lesson.status === "completed"
          ? "📖 Review Lesson"

          : lesson.status === "current"

          ? "▶ Continue Learning"

          : "🔒 Locked"}

      </button>

    </div>

  ))}

</div>

      {/* Achievement */}

      <section className="achievement-card">

        <h2>🏆 Recent Achievement</h2>

        <div className="achievement-list">

          <div className="badge">
            🥇
            <span>First Lesson</span>
          </div>

          <div className="badge">
            🔥
            <span>7 Day Streak</span>
          </div>

          <div className="badge">
            ⭐
            <span>300 XP</span>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;