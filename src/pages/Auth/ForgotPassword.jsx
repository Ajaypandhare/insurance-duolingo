import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    // Later call backend API

   navigate("/verify-otp", {
  state: {
    purpose: "forgot-password",
    email: email,
  },
});

  };

  return (

    <div className="forgot-page">

      <div className="forgot-card">

        <div className="forgot-icon">

          🔐

        </div>

        <h1>Forgot Password?</h1>

        <p>

          Enter your company email address.

          <br />

          We'll send you a One-Time Password (OTP).

        </p>

        <form onSubmit={handleSubmit}>

          <label>

            Company Email

          </label>

          <input

            type="email"

            placeholder="john@company.com"

            value={email}

            onChange={(e)=>setEmail(e.target.value)}

            required

          />

          <button
            className="forgot-btn"
            type="submit"
          >

            Send OTP

          </button>

        </form>

        <button

          className="back-btn"

          onClick={()=>navigate("/login")}

        >

          ← Back to Login

        </button>

      </div>

    </div>

  );

}

export default ForgotPassword;