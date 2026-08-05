import "./Achievements.css";

const achievements = [
  {
    id: 1,
    icon: "🥇",
    title: "First Lesson",
    description: "Complete your first insurance lesson.",
    status: "unlocked",
    progress: 100,
    xp: 50,
  },
  {
    id: 2,
    icon: "🔥",
    title: "7 Day Streak",
    description: "Learn for 7 consecutive days.",
    status: "unlocked",
    progress: 100,
    xp: 100,
  },
  {
    id: 3,
    icon: "🧠",
    title: "Quiz Master",
    description: "Score 100% in any quiz.",
    status: "progress",
    progress: 70,
    xp: 150,
  },
  {
    id: 4,
    icon: "📘",
    title: "Life Insurance Expert",
    description: "Complete all Life Insurance lessons.",
    status: "progress",
    progress: 45,
    xp: 200,
  },
  {
    id: 5,
    icon: "🏥",
    title: "Health Insurance Expert",
    description: "Complete all Health Insurance lessons.",
    status: "locked",
    progress: 0,
    xp: 250,
  },
  {
    id: 6,
    icon: "🚗",
    title: "Auto Insurance Expert",
    description: "Complete all Auto Insurance lessons.",
    status: "locked",
    progress: 0,
    xp: 250,
  },
];

function Achievements() {
  return (
    <div className="achievement-page">

      {/* Header */}

      <section className="achievement-header">

        <div>

          <h1>🏆 Achievements</h1>

          <p>
            Unlock badges, earn XP and become an Insurance Expert.
          </p>

        </div>

        <div className="level-card">

          <span>Insurance Learner</span>

          <h2>Level 4</h2>

        </div>

      </section>

      {/* Statistics */}

      <div className="achievement-stats">

        <div className="stat-box">
          <h2>350</h2>
          <p>⭐ Total XP</p>
        </div>

        <div className="stat-box">
          <h2>4</h2>
          <p>🏆 Badges</p>
        </div>

        <div className="stat-box">
          <h2>12</h2>
          <p>📚 Lessons</p>
        </div>

        <div className="stat-box">
          <h2>7</h2>
          <p>🔥 Streak</p>
        </div>

      </div>

      {/* Overall Progress */}

      <div className="overall-progress">

        <div className="progress-title">

          <span>Achievement Progress</span>

          <span>4 / 20</span>

        </div>

        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{ width: "20%" }}
          ></div>

        </div>

      </div>

      {/* Category */}

      <div className="category-buttons">

        <button className="active">All</button>

        <button>Learning</button>

        <button>XP</button>

        <button>Quiz</button>

        <button>Special</button>

      </div>

      {/* Achievement Grid */}

      <div className="achievement-grid">

        {achievements.map((item) => (

          <div
            key={item.id}
            className={`achievement-card ${item.status}`}
          >

            <div className="achievement-icon">

              {item.icon}

            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <div className="reward">

              ⭐ {item.xp} XP

            </div>

            {item.status === "unlocked" && (

              <span className="badge unlocked">
                ✅ Unlocked
              </span>

            )}

            {item.status === "locked" && (

              <span className="badge locked">
                🔒 Locked
              </span>

            )}

            {item.status === "progress" && (

              <>

                <div className="small-progress">

                  <div
                    className="small-fill"
                    style={{
                      width: `${item.progress}%`,
                    }}
                  ></div>

                </div>

                <span className="progress-text">

                  {item.progress}% Complete

                </span>

              </>

            )}

          </div>

        ))}

      </div>

      {/* Next Achievement */}

      <section className="next-achievement">

        <h2>🚀 Next Achievement</h2>

        <div className="next-card">

          <div className="next-icon">

            👑

          </div>

          <div className="next-content">

            <h3>Insurance Champion</h3>

            <p>
              Complete 20 lessons to unlock this legendary badge.
            </p>

            <div className="small-progress">

              <div
                className="small-fill"
                style={{ width: "60%" }}
              ></div>

            </div>

            <span>12 / 20 Lessons</span>

          </div>

        </div>

      </section>

    </div>
  );
  
}


export default Achievements;