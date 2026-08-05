import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import companyLogo from "../../assets/Allstate-Logo-Blue.png";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    setLoading(true);

    setTimeout(() => {

      if (
        email === "admin@allstate.com" &&
        password === "Admin@123"
      ) {

        localStorage.setItem("isLoggedIn", "true");

        if (rememberMe) {
          localStorage.setItem("rememberEmail", email);
        } else {
          localStorage.removeItem("rememberEmail");
        }

        navigate("/home");

      } else {

        setError("Invalid email or password.");

      }

      setLoading(false);

    }, 1000);

  };

  return (

    <div className="login-page">

      <div className="bg-circle circle1"></div>
      <div className="bg-circle circle2"></div>

      <div className="login-card">

        {/* LEFT */}

        <div className="login-left">

          <img
            src={companyLogo}
            alt="Allstate"
            className="company-logo"
          />

          <h1>

            Insurance Learning Platform

          </h1>

          <p>

            Learn insurance through interactive lessons,
            quizzes, achievements and AI-powered guidance.

          </p>

          <div className="feature-list">

            <div>📚 Interactive Lessons</div>

            <div>🏆 XP & Badges</div>

            <div>🤖 AI Recommendations</div>

            <div>📜 Certificates</div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="login-right">

          <h2>Welcome Back 👋</h2>

          <p>

            Sign in to continue your learning journey.

          </p>

          <form onSubmit={handleLogin}>

            <label htmlFor="email">

              Company Email

            </label>

            <div className="input-group">

              <span className="input-icon">
                📧
              </span>

              <input
                id="email"
                type="email"
                placeholder="admin@allstate.com"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                autoComplete="email"
              />

            </div>

            <label htmlFor="password">

              Password

            </label>

            <div className="input-group">

              <span className="input-icon">
                🔒
              </span>

              <input
                id="password"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Admin@123"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                autoComplete="current-password"
              />

              <button
                type="button"
                className="eye-btn"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? "🙈" : "👁"}
              </button>

            </div>

            <div className="login-options">

              <label className="remember">

                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() =>
                    setRememberMe(!rememberMe)
                  }
                />

                Remember Me

              </label>

              <Link to="/forgot-password">

                Forgot Password?

              </Link>

            </div>

            {error && (

              <div className="error-message">

                {error}

              </div>

            )}
            <button
            className="login-btn"
            type="submit"
>

            {/* <button
              className="login-btn"
              type="submit"
              disabled={loading}
            > */}

              {loading
                ? "Signing In..."
                : "Sign In"}

            </button>

          </form>

          <div className="divider">

            OR

          </div>

          <button className="microsoft-btn">

            🏢 Continue with Microsoft

          </button>

          <p className="register-text">

            New User?

            <Link to="/register">

              Register Yourself

            </Link>

          </p>

          <div className="demo-box">

            <h4>Demo Credentials</h4>

            <p>

              <strong>Email:</strong>

              admin@allstate.com

            </p>

            <p>

              <strong>Password:</strong>

              Admin@123

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Login;