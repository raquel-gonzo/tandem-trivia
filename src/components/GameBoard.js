import React, { useState } from "react";
import QCard from "./QCard";

const GameBoard = ({ questions }, shuffle) => {
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [selectedInput, setSelectedInput] = useState(null);
  const [currentQ, setCurrentQ] = useState(questions[0]); // questions[1]
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState("");
  const endOfGame = 10;
  const nextIndex = questions.indexOf(currentQ) + 1;
  const rightAns = currentQ.correct;

  const handleSelect = (e) => {
    setSelected(e.target.value);
    setSelectedInput(e.target);
  };

  const reset = () => {
    setSelected("");
    selectedInput.checked = false;
    setIsAnswered(false);
    setIsCorrect("");
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
      setIsCorrect("correct");
    }
    // if the incorrect answer is selected
    if (selected !== currentQ.correct && selected !== "") {
      setIsAnswered(true);
      console.log("incorrect");
      setIsCorrect("incorrect");
    }
  };
  let isCorrectText = "";
  if (isCorrect === "correct" && isCorrect !== "") {
    isCorrectText = "Correct!"
  } else if (isCorrect === "incorrect" && isCorrect !== "") {
    isCorrectText = "Incorrect"
  }

  return (
    <div>
      <div id="game-board">
        <div id="score-and-reveal">

          <h4 id="score">
            Score: <br />
            {score} / {10}
          </h4>
          <p id="is-correct-text">{isCorrectText}</p>
        </div>
        <div className="q-card">
          <QCard
            data={currentQ}
            handleSelect={handleSelect}
            qNum={nextIndex}
            isAnswered={isAnswered}
            rightAns={rightAns}
          />
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
      </div>
      {/* ******************************************************************************* */}
      <div id="next-q-btn">
        {isAnswered && currentQ !== questions[endOfGame - 1] ? (
          <button type="button" className="btn btn-dark" onClick={nextQ}>
            Next Question
          </button>
        ) : (
          ""
        )}
      </div>
      {/* ******************************************************************************* */}
      {questions[nextIndex] === questions[endOfGame] && isAnswered ? (
        <div id="end-screen">
          <h1>
            Thanks for playing! Final Score: {score} / {10}
          </h1>
          <button
            id="play-again-btn"
            type="button"
            className="btn btn-dark"
            onClick={playAgain}
            >
            Play Again
          </button>
          <div id="footer">
            <p>This app was created by Rachel Gonzalez for Tandem's apprentice software engineer coding challenge (October 2020).</p>
            <div id="links">
            <a href="https://rachel-gonzalez.netlify.app/"><img className="connect" alt="Portfolio"  src="https://res.cloudinary.com/raquel-gonzo/image/upload/c_scale,w_250/v1604183387/Portfolio_SVG.svg" /></a>
            <a href="https://github.com/raquel-gonzo"><img className="connect" alt="GitHub"  src="https://res.cloudinary.com/raquel-gonzo/image/upload/c_scale,w_250/v1604183366/GitHub_SVG.svg" /></a>
            <a href="https://www.linkedin.com/in/rgonzalezviolin/"><img className="connect" alt="LinkedIn"  src="https://res.cloudinary.com/raquel-gonzo/image/upload/c_scale,w_250/v1604183360/LinkedIn_SVG.svg" /></a>
          </div>
          </div>

        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default GameBoard;
