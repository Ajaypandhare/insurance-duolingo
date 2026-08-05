import { useNavigate } from "react-router-dom";
import quizzes from "../data/quizzes";

import "./QuizHub.css";


function QuizHub(){

    const navigate = useNavigate();


    return(

        <div className="quizhub-page">


            {/* Header */}

            <section className="quizhub-header">


                <div>

                    <h1>
                        📝 Insurance Quiz Center
                    </h1>


                    <p>
                        Test your knowledge, earn XP,
                        unlock badges and become an insurance expert.
                    </p>

                </div>


                <div className="user-stats">


                    <div>
                        ⭐
                        <strong>
                            350
                        </strong>
                        XP
                    </div>


                    <div>
                        🔥
                        <strong>
                            7
                        </strong>
                        Days
                    </div>


                    <div>
                        🏆
                        <strong>
                            Gold
                        </strong>
                    </div>


                </div>


            </section>



            {/* AI Recommendation */}


            <section className="ai-card">


                <h2>
                    🤖 AI Recommended Quiz
                </h2>


                <p>
                    Based on your learning progress,
                    we recommend:
                </p>


                <h3>
                    🕵️ Insurance Fraud Detection
                </h3>


                <button
                onClick={()=>navigate("/quiz/5")}
                >
                    Start Recommended Quiz →
                </button>


            </section>




            {/* Daily Challenge */}


            <section className="daily-card">


                <h2>
                    🔥 Daily Challenge
                </h2>


                <p>
                    Complete 5 questions and earn
                    ⭐ 150 XP
                </p>


                <button>
                    Play Challenge
                </button>


            </section>





            {/* Quiz List */}


            <h2 className="section-title">
                All Insurance Quizzes
            </h2>



            <div className="quiz-grid">


            {
                quizzes.map((quiz)=>(


                    <div 
                    className="quiz-card"
                    key={quiz.id}
                    >


                        <div className="quiz-icon">
                            {quiz.icon}
                        </div>


                        <h2>
                            {quiz.title}
                        </h2>


                        <span 
                        className={
                            `level ${quiz.level.toLowerCase()}`
                        }
                        >
                            {quiz.level}
                        </span>



                        <div className="quiz-info">

                            <p>
                                📝 {quiz.questions} Questions
                            </p>


                            <p>
                                ⏱ {quiz.duration}
                            </p>


                            <p>
                                ⭐ {quiz.xp} XP
                            </p>

                        </div>



                        {
                            quiz.progress > 0 &&

                            <div className="progress-box">

                                <div
                                style={{
                                    width:`${quiz.progress}%`
                                }}
                                ></div>

                            </div>

                        }



                        <button
                        onClick={()=>
                            navigate(`/quiz/${quiz.id}`)
                        }
                        >

                        {
                            quiz.progress > 0
                            ?
                            "Continue Quiz"
                            :
                            "Start Quiz"
                        }

                        </button>


                    </div>


                ))
            }


            </div>


        </div>

    );

}


export default QuizHub;