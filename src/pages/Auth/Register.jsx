import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import companyLogo from "../../assets/logo.png";

function Register() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = (e) => {

    e.preventDefault();

    // Later connect Spring Boot

    navigate("/verify-otp", {
  state: {
    purpose: "register",
    email: email,
  },
});

  };

  return (

    <div className="register-page">

      <div className="bg-circle circle1"></div>
      <div className="bg-circle circle2"></div>

      <div className="register-card">

        {/* Left */}

        <div className="register-left">

          <img
            src={companyLogo}
            alt="Logo"
            className="company-logo"
          />

          <h1>Join Insurance Learning</h1>

          <p>

            Create your account and begin your
            learning journey with interactive lessons,
            quizzes and AI recommendations.

          </p>

        </div>

        {/* Right */}

        <div className="register-right">

          <h2>Create Account</h2>

          <form onSubmit={handleRegister}>

            <div className="row">

              <div>

                <label>First Name</label>

                <input
                  type="text"
                  placeholder="Ajay"
                  required
                />

              </div>

              <div>

                <label>Last Name</label>

                <input
                  type="text"
                  placeholder="Pandhare"
                  required
                />

              </div>

            </div>
<label htmlFor="firstName">First Name</label>

<input
  id="firstName"
  type="text"
/>

<label htmlFor="lastName">Last Name</label>

<input
  id="lastName"
  type="text"
/>

<label htmlFor="companyEmail">Company Email</label>

<input
  id="companyEmail"
  type="email"
/>

<label htmlFor="department">Department</label>

<select id="department">
  ...
</select>

            <label>Designation</label>

            <input
              type="text"
              placeholder="Software Engineer"
            />

            <label>Country</label>

            <select>

              <option>USA</option>

              <option>Canada</option>

              <option>United Kingdom</option>

              <option>India</option>

            </select>

            <label>Password</label>

            <div className="password-box">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
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

            <label>Confirm Password</label>

            <div className="password-box">

              <input
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                placeholder="Confirm Password"
                required
              />

              <button
                type="button"
                className="eye-btn"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
              >
                {showConfirmPassword ? "🙈" : "👁"}
              </button>

            </div>

            <button
              className="register-btn"
              type="submit"
            >

              Register

            </button>

          </form>

          <p className="login-link">

            Already have an account?

            <Link to="/login">

              Sign In

            </Link>

          </p>

        </div>

      </div>

    </div>

  );

}

export default Register;