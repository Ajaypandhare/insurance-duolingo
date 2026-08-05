import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

function Navbar() {
  return (

    
    <nav className="navbar">

      <div className="logo">
        🛡️ Insurance Duolingo
      </div>

      <div className="nav-links">

        <NavLink
  to="/home"
  className={({ isActive }) =>
    isActive ? "active nav-item" : "nav-item"
  }
>
  🏠 Home
</NavLink>

        <NavLink
          to="/lessons"
          className={({ isActive }) =>
            isActive ? "active nav-item" : "nav-item"
          }
        >
          📚 Lessons
        </NavLink>

        <NavLink
          to="/quiz"
          className={({isActive}) =>
            isActive ? "active nav-item" : "nav-item"
          }
           >
          📝 Quiz
          </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "active nav-item" : "nav-item"
          }
        >
          Profile
        </NavLink>

        <NavLink
  to="/achievements"
  className={({ isActive }) =>
    isActive ? "active nav-item" : "nav-item"
  }
>
  🏆 Achievements
</NavLink>

      </div>

      <div className="user-info">

        <div className="xp">
            ⭐ 350 XP
        </div>

        <div className="streak">
            🔥 7 Day
        </div>

      </div>

    </nav>
  );

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("isLoggedIn");

    navigate("/login");

};
<button
    className="logout-btn"
    onClick={logout}
>
    Logout
</button>
}

export default Navbar;