import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import LessonDetails from "./pages/LessonDetails";
import Learning from "./pages/Learning";
import KnowledgeCheck from "./pages/KnowledgeCheck/KnowledgeCheck";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result/Result";
import Profile from "./pages/Profile";
import Achievements from "./pages/Achievements/Achievements";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import VerifyOtp from "./pages/Auth/VerifyOtp";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import QuizHub from "./pages/QuizHub";


import "./App.css";

function App() {

  const location = useLocation();

  const authPages = [
    "/",
    "/login",
    "/register",
    "/verify-otp",
    "/forgot-password",
    "/reset-password",
  ];

  const hideNavbar = authPages.includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>

        {/* Authentication */}

        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Dashboard */}

        <Route path="/home" element={<Home />} />

        {/* Learning */}

        <Route path="/lessons" element={<Lessons />} />
        <Route path="/lesson/:id" element={<LessonDetails />} />
        <Route path="/learning/:id" element={<Learning />} />
        <Route path="/knowledge-check/:id" element={<KnowledgeCheck />} />
        <Route path="/quiz" element={<QuizHub />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/result" element={<Result />} />

        {/* User */}

        <Route path="/profile" element={<Profile />} />
        <Route path="/achievements" element={<Achievements />} />

      </Routes>

    </>
  );
}

export default App;