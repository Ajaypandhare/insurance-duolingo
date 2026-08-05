import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import quizQuestions from "../data/quizQuestions";

import "./Quiz.css";


function Quiz(){

    const {id} = useParams();

    const navigate = useNavigate();


    const questions = quizQuestions[id] || [];
    navigate("/quiz/5")


    const [current,setCurrent] = useState(0);

    const [selected,setSelected] = useState("");

    const [score,setScore] = useState(0);



    const handleNext = () => {

    let finalScore = score;


    if(selected === questions[current].answer){
        finalScore++;
    }


    if(current + 1 < questions.length){

        setScore(finalScore);

        setCurrent(current + 1);

        setSelected("");

    }
    else{


        navigate("/result", {

            state: {

                score: finalScore,

                total: questions.length,

                lessonId: id

            }

        });


    }

};



    return(

        <div className="quiz-page">


            <div className="quiz-card">


                <div className="quiz-header">


                    <h1>
                        📝 Insurance Quiz
                    </h1>


                    <p>
                        Question {current+1} / {questions.length}
                    </p>


                </div>




                <div className="progress-container">

                    <div

                    className="quiz-progress"

                    style={{
                        width:
                        `${((current+1)/questions.length)*100}%`
                    }}

                    >

                    </div>

                </div>




                <h2>

                    {questions[current]?.question}

                </h2>



                <div className="options">


                {
                    questions[current]?.options.map(
                        option=>(


                        <button

                        key={option}

                        className={
                            selected===option
                            ?
                            "option active"
                            :
                            "option"
                        }

                        onClick={()=>setSelected(option)}

                        >

                            {option}

                        </button>


                    ))
                }


                </div>




                <button

                className="next-btn"

                disabled={!selected}

                onClick={handleNext}

                >

                {
                    current + 1 === questions.length
                    ?
                    "Finish Quiz 🎉"
                    :
                    "Next Question →"
                }

                </button>



            </div>


        </div>


    );

}


export default Quiz;