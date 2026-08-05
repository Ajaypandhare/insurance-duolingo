import "./Profile.css";

function Profile() {
  return (
    <div className="profile-page">

      {/* Hero Section */}

      <div className="profile-header">

        <div className="profile-left">

          <img
            src="https://i.pravatar.cc/180"
            alt="Profile"
            className="profile-image"
          />

          <div>

            <h1>Ajay Pandhare</h1>

            <span className="level">
              🎯 Intermediate Learner
            </span>

            <p>
              Software Engineer
            </p>

          </div>

        </div>

        <button className="edit-btn">
          Edit Profile
        </button>

      </div>

      {/* Personal Information */}

      <section className="profile-card">

        <h2>👤 Personal Information</h2>

        <div className="info-grid">

          <div className="info-item">
            <span>📧 Email</span>
            <strong>ajay@email.com</strong>
          </div>

          <div className="info-item">
            <span>📱 Mobile</span>
            <strong>+91 XXXXX XXXXX</strong>
          </div>

          <div className="info-item">
            <span>🌍 Country</span>
            <strong>USA</strong>
          </div>

          <div className="info-item">
            <span>🏢 Company</span>
            <strong>Allstate</strong>
          </div>

          <div className="info-item">
            <span>🏬 Department</span>
            <strong>Claims</strong>
          </div>

          <div className="info-item">
            <span>💼 Designation</span>
            <strong>Software Engineer</strong>
          </div>

          <div className="info-item">
            <span>⭐ Total XP</span>
            <strong>350 XP</strong>
          </div>

          <div className="info-item">
            <span>🔥 Current Streak</span>
            <strong>7 Days</strong>
          </div>

        </div>

      </section>

      {/* ================= AI Recommendation ================= */}

<section className="ai-section">

  <div className="ai-card">

    <div className="ai-left">

      <div className="ai-icon">
        🤖
      </div>

      <div>

        <h2>AI Learning Recommendation</h2>

        <p>
          Based on your learning progress, strengths, and quiz scores,
          we recommend your next lesson.
        </p>

      </div>

    </div>

    <div className="recommendation-card">

      <div className="recommendation-header">

        <span className="recommend-badge">
          Recommended Next Lesson
        </span>

      </div>

      <h3>🏥 Health Insurance Basics</h3>

      <p>
        Your Life Insurance score is excellent (92%), but your
        Health Insurance knowledge is limited. Completing this
        lesson will improve your overall learning score.
      </p>

      <div className="recommendation-info">

        <div>
          ⭐
          <strong>80 XP</strong>
        </div>

        <div>
          ⏱
          <strong>15 min</strong>
        </div>

        <div>
          🎯
          <strong>Intermediate</strong>
        </div>

      </div>

      <button className="start-ai-btn">
        Start Recommended Lesson →
      </button>

    </div>

  </div>

</section>

{/* ================= Certificates ================= */}

<section className="certificate-section">

  <h2>🎓 My Certificates</h2>

  <div className="certificate-grid">

    <div className="certificate-card">

      <div className="certificate-icon">
        🏆
      </div>

      <h3>Insurance Fundamentals</h3>

      <p>
        Successfully completed the Insurance Fundamentals learning path.
      </p>

      <div className="certificate-footer">

        <span className="certificate-date">
          Completed: 10 Aug 2026
        </span>

        <button className="certificate-btn">
          View Certificate
        </button>

      </div>

    </div>

    <div className="certificate-card locked">

      <div className="certificate-icon">
        🔒
      </div>

      <h3>Life Insurance Specialist</h3>

      <p>
        Complete all Life Insurance modules to unlock this certificate.
      </p>

      <div className="certificate-footer">

        <span className="certificate-date">
          Locked
        </span>

        <button className="certificate-btn disabled">
          Locked
        </button>

      </div>

    </div>

  </div>

</section>

      {/* Learning Statistics */}

      <section className="learning-stats">

        <h2>📊 Learning Statistics</h2>

        <div className="stats-grid">

          <div className="stat-card">
            <div className="emoji">⭐</div>
            <h3>350</h3>
            <p>Total XP</p>
          </div>

          <div className="stat-card">
            <div className="emoji">📚</div>
            <h3>12</h3>
            <p>Lessons Completed</p>
          </div>

          <div className="stat-card">
            <div className="emoji">📝</div>
            <h3>8</h3>
            <p>Quiz Passed</p>
          </div>

          <div className="stat-card">
            <div className="emoji">🔥</div>
            <h3>7</h3>
            <p>Day Streak</p>
          </div>

          <div className="stat-card">
            <div className="emoji">🏆</div>
            <h3>4</h3>
            <p>Badges</p>
          </div>

          <div className="stat-card">
            <div className="emoji">⏱</div>
            <h3>5h 40m</h3>
            <p>Learning Time</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Profile;