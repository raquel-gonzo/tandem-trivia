import React, { useState } from "react";
import QCard from "./QCard";

const GameBoard = ({ questions }, shuffle) => {
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [selectedInput, setSelectedInput] = useState(null);
  const [currentQ, setCurrentQ] = useState(questions[0]); // questions[1]
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState('');
  const endOfGame = 10;
  const nextIndex = questions.indexOf(currentQ) + 1;

  const handleSelect = (e) => {
    setSelected(e.target.value);
    setSelectedInput(e.target);
  };

  const reset = () => {
    setSelected("");
    selectedInput.checked = false;
    setIsAnswered(false);
    setIsCorrect('');
  };

  const submitAnswer = (e) => {
    e.preventDefault();
    checkAnswer();
  };

  const nextQ = (e) => {
    e.preventDefault();
    setCurrentQ(questions[nextIndex]); // not setting the currentQ to the next index. use the index to get next question.
    reset();
  };

  const playAgain = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  const checkAnswer = () => {
    // if the correct answer is selected
    if (selected === currentQ.correct) {
      setScore(score + 1);
      setIsAnswered(true);
      console.log("correct");
      setIsCorrect("correct")
    }
    // if the incorrect answer is selected
    if (selected !== currentQ.correct && selected !== "") {
      setIsAnswered(true);
      console.log("incorrect");
      setIsCorrect("incorrect")
    }
  };

  return (
    <div>
      <div id="game-board">
        <div className="q-card">
        <QCard data={currentQ} handleSelect={handleSelect} qNum={nextIndex}/>
        {isAnswered && currentQ === questions[endOfGame - 1] ? (
          ""
        ) : (
          <button
            id="submit"
            onClick={submitAnswer}
            className={
              (!isAnswered && selected === "") || isAnswered
                ? "btn btn-outline-dark disabled"
                : "btn btn-dark"
            }
            disabled={(!isAnswered && selected === "") || isAnswered}
          >
            Submit Answer
          </button>
        )}
        </div>
        <div id="score-and-reveal">
          <h4 id="score">
            Score: <br/>
            {score} / {10}
          </h4>
          { isCorrect === "correct" && isCorrect !== "" ? (
            <span>Correct!</span>
          ) : (
            ''
          )}
          { isCorrect === "incorrect" && isCorrect !== "" ? (
            <span>Incorrect</span>
          ) : (
            ''
          )}
        </div>
      </div>
{/* ******************************************************************************* */}
      <div>
        {isAnswered && currentQ !== questions[endOfGame - 1] ? (
          <button
            id="next-q-btn"
            type="button"
            className="btn btn-dark"
            onClick={nextQ}
          >
            Next Question
          </button>
        ) : (
          ""
        )}
      </div>
{/* ******************************************************************************* */}
      {questions[nextIndex] === questions[endOfGame] && isAnswered ? (
        <div>
          <p>
            Thanks for playing! Final Score: {score} / {10}
          </p>
          <button
            type="button"
            className="btn btn-dark"
            onClick={playAgain}
          >
            Play Again
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default GameBoard;
