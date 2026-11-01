import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Register.css";

import companyLogo from "../../assets/logo.png";


function Register() {

  const navigate = useNavigate();


  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);


  const [formData, setFormData] = useState({

    firstName: "",
    lastName: "",
    email: "",
    department: "",
    designation: "",
    country: "USA",
    password: "",
    confirmPassword: ""

  });


  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((previous) => ({

      ...previous,

      [name]: value

    }));

  };


  const handleRegister = (e) => {

    e.preventDefault();


    // Password validation

    if (formData.password !== formData.confirmPassword) {

      alert("Passwords do not match.");

      return;

    }


    // Basic password validation

    if (formData.password.length < 8) {

      alert("Password must contain at least 8 characters.");

      return;

    }


    // Temporary static registration flow

    console.log("Registration Data:", formData);


    navigate("/verify-otp", {

      state: {

        purpose: "register",

        email: formData.email,

        registrationData: formData

      }

    });

  };


  return (

    <div className="register-page">


      {/* Background */}

      <div className="bg-circle circle1"></div>

      <div className="bg-circle circle2"></div>



      <div className="register-card">


        {/* LEFT SIDE */}

        <div className="register-left">


          <img

            src={companyLogo}

            alt="Company Logo"

            className="company-logo"

          />


          <h1>

            Join Insurance Learning

          </h1>


          <p>

            Create your account and begin your

            learning journey with interactive lessons,

            quizzes and AI-powered recommendations.

          </p>


          <div className="register-features">

            <div>

              📚 Interactive Insurance Lessons

            </div>


            <div>

              📝 Knowledge-Based Quizzes

            </div>


            <div>

              ⭐ Earn XP & Achievements

            </div>


            <div>

              🤖 AI Learning Recommendations

            </div>

          </div>


        </div>



        {/* RIGHT SIDE */}

        <div className="register-right">


          <h2>

            Create Account

          </h2>


          <p className="register-subtitle">

            Register yourself to start learning.

          </p>



          <form onSubmit={handleRegister}>


            {/* NAME */}

            <div className="row">


              <div className="form-group">

                <label htmlFor="firstName">

                  First Name

                </label>


                <input

                  id="firstName"

                  name="firstName"

                  type="text"

                  placeholder="Ajay"

                  value={formData.firstName}

                  onChange={handleChange}

                  required

                />

              </div>



              <div className="form-group">

                <label htmlFor="lastName">

                  Last Name

                </label>


                <input

                  id="lastName"

                  name="lastName"

                  type="text"

                  placeholder="Pandhare"

                  value={formData.lastName}

                  onChange={handleChange}

                  required

                />

              </div>


            </div>



            {/* EMAIL */}

            <div className="form-group">

              <label htmlFor="email">

                Company Email

              </label>


              <input

                id="email"

                name="email"

                type="email"

                placeholder="ajay@company.com"

                value={formData.email}

                onChange={handleChange}

                required

              />

            </div>



            {/* DEPARTMENT */}

            <div className="form-group">

              <label htmlFor="department">

                Department

              </label>


              <select

                id="department"

                name="department"

                value={formData.department}

                onChange={handleChange}

                required

              >

                <option value="">

                  Select Department

                </option>


                <option value="Claims">

                  Claims

                </option>


                <option value="Operations">

                  Operations

                </option>


                <option value="Legal">

                  Legal

                </option>


                <option value="Underwriting">

                  Underwriting

                </option>


                <option value="Customer Service">

                  Customer Service

                </option>


                <option value="Fraud Detection">

                  Fraud Detection

                </option>


                <option value="Finance">

                  Finance

                </option>


                <option value="Technology">

                  Technology

                </option>


                <option value="Human Resources">

                  Human Resources

                </option>


                <option value="Actuarial">

                  Actuarial

                </option>


              </select>

            </div>



            {/* DESIGNATION */}

            <div className="form-group">

              <label htmlFor="designation">

                Designation

              </label>


              <input

                id="designation"

                name="designation"

                type="text"

                placeholder="Software Engineer"

                value={formData.designation}

                onChange={handleChange}

                required

              />

            </div>



            {/* COUNTRY */}

            <div className="form-group">

              <label htmlFor="country">

                Country

              </label>


              <select

                id="country"

                name="country"

                value={formData.country}

                onChange={handleChange}

              >

                <option value="USA">

                  USA

                </option>


                <option value="Canada">

                  Canada

                </option>


                <option value="United Kingdom">

                  United Kingdom

                </option>


                <option value="India">

                  India

                </option>


              </select>

            </div>



            {/* PASSWORD */}

            <div className="form-group">

              <label htmlFor="password">

                Password

              </label>


              <div className="password-box">


                <input

                  id="password"

                  name="password"

                  type={

                    showPassword

                      ? "text"

                      : "password"

                  }

                  placeholder="Enter password"

                  value={formData.password}

                  onChange={handleChange}

                  required

                />


                <button

                  type="button"

                  className="eye-btn"

                  onClick={() =>

                    setShowPassword(

                      !showPassword

                    )

                  }

                >

                  {showPassword ? "🙈" : "👁"}

                </button>


              </div>

            </div>



            {/* CONFIRM PASSWORD */}

            <div className="form-group">

              <label htmlFor="confirmPassword">

                Confirm Password

              </label>


              <div className="password-box">


                <input

                  id="confirmPassword"

                  name="confirmPassword"

                  type={

                    showConfirmPassword

                      ? "text"

                      : "password"

                  }

                  placeholder="Confirm password"

                  value={formData.confirmPassword}

                  onChange={handleChange}

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

                  {showConfirmPassword

                    ? "🙈"

                    : "👁"}

                </button>


              </div>

            </div>



            {/* REGISTER */}

            <button

              className="register-btn"

              type="submit"

            >

              Create Account →

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