import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResetPassword.css";

function ResetPassword() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const getStrength = () => {

    if (password.length >= 10) return "Strong";

    if (password.length >= 6) return "Medium";

    return "Weak";

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (password !== confirmPassword) {

      alert("Passwords do not match");

      return;

    }

    alert("Password Changed Successfully");

    navigate("/login");

  };

  return (

    <div className="reset-page">

      <div className="reset-card">

        <div className="reset-icon">

          🔒

        </div>

        <h1>

          Reset Password

        </h1>

        <p>

          Create a strong password to secure your account.

        </p>

        <form onSubmit={handleSubmit}>

          <label>

            New Password

          </label>

          <div className="password-box">

            <input

              type={showPassword ? "text" : "password"}

              placeholder="New Password"

              value={password}

              onChange={(e)=>setPassword(e.target.value)}

              required

            />

            <button

              type="button"

              className="eye-btn"

              onClick={()=>setShowPassword(!showPassword)}

            >

              {showPassword ? "🙈" : "👁"}

            </button>

          </div>

          <div className={`strength ${getStrength().toLowerCase()}`}>

            Password Strength : {getStrength()}

          </div>

          <label>

            Confirm Password

          </label>

          <div className="password-box">

            <input

              type={showConfirm ? "text" : "password"}

              placeholder="Confirm Password"

              value={confirmPassword}

              onChange={(e)=>setConfirmPassword(e.target.value)}

              required

            />

            <button

              type="button"

              className="eye-btn"

              onClick={()=>setShowConfirm(!showConfirm)}

            >

              {showConfirm ? "🙈" : "👁"}

            </button>

          </div>

          <button

            className="reset-btn"

            type="submit"

          >

            Update Password

          </button>

        </form>

        <button

          className="login-btn"

          onClick={()=>navigate("/login")}

        >

          ← Back to Login

        </button>

      </div>

    </div>

  );

}

export default ResetPassword;