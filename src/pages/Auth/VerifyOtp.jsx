import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./VerifyOtp.css";

function VerifyOtp() {

  const navigate = useNavigate();

  const { state } = useLocation(); 

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const [timer, setTimer] = useState(60);

  const inputs = useRef([]);

  useEffect(() => {

    if (timer === 0) return;

    const interval = setInterval(() => {

      setTimer((prev) => prev - 1);

    }, 1000);

    return () => clearInterval(interval);

  }, [timer]);

  const handleChange = (value, index) => {

    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];

    newOtp[index] = value;

    setOtp(newOtp);

    if (value && index < 5) {

      inputs.current[index + 1].focus();

    }

  };

  const handleKeyDown = (e, index) => {

    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {

      inputs.current[index - 1].focus();

    }

  };

  const handleVerify = () => {

    const code = otp.join("");

    // Temporary OTP

   if (code === "123456") {

  if (state?.purpose === "forgot-password") {

    navigate("/reset-password");

  } else {

    navigate("/dashboard");

  }

} else {

  alert("Invalid OTP");

}

  };

  const resendOtp = () => {

    setOtp(["","","","","",""]);

    setTimer(60);

    alert("OTP Sent Again");

  };

  return (

    <div className="otp-page">

      <div className="otp-card">

        <div className="otp-icon">

          📧

        </div>

        <h1>Verify Your Email</h1>

        <p>

          We've sent a verification code to

          <br />

          <strong>ajay@company.com</strong>

        </p>

        <div className="otp-inputs">

          {otp.map((digit, index) => (

            <input

              key={index}

              maxLength="1"

              value={digit}

              ref={(el) => (inputs.current[index] = el)}

              onChange={(e) =>
                handleChange(e.target.value, index)
              }

              onKeyDown={(e) =>
                handleKeyDown(e, index)
              }

            />

          ))}

        </div>

        <button
          className="verify-btn"
          onClick={handleVerify}
        >

          Verify OTP

        </button>

        <div className="timer">

          {timer > 0 ? (

            <>Resend OTP in 00:{timer.toString().padStart(2, "0")}</>

          ) : (

            <button
              className="resend-btn"
              onClick={resendOtp}
            >

              Resend OTP

            </button>

          )}

        </div>

      </div>

    </div>

  );

}

export default VerifyOtp;