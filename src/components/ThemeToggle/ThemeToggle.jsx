import "./ThemeToggle.css";
import { useTheme } from "../../context/ThemeContext";

function ThemeToggle() {

  const { darkMode, setDarkMode } = useTheme();

  return (

    <button
      className="theme-toggle"
      onClick={() => setDarkMode(!darkMode)}
    >

      {darkMode ? "☀️" : "🌙"}

    </button>

  );

}

export default ThemeToggle;