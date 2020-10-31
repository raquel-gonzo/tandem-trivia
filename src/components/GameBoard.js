import React, { useState } from "react";
import QCard from "./QCard";

const GameBoard = ({ questions }, shuffle) => {
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [selectedInput, setSelectedInput] = useState(null);
  const [currentQ, setCurrentQ] = useState(questions[0]); // questions[1]
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState('');
  const endOfGame = questions.length;
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
        <QCard data={currentQ} handleSelect={handleSelect} />
        <div id="score-and-reveal">
          <h3 id="score">
            Score: {score} / {questions.length}
          </h3>
          { isCorrect === "correct" && isCorrect !== "" ? (
            <h4>Correct!</h4>
          ) : (
            ''
          )}
          { isCorrect === "incorrect" && isCorrect !== "" ? (
            <h4>Incorrect</h4>
          ) : (
            ''
          )}
        </div>
      </div>

      <div id="bottom-btns">
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

      {questions[nextIndex] === questions[endOfGame] && isAnswered ? (
        <div>
          <p>
            Thanks for playing! Final Score: {score} / {questions.length}
          </p>
          <button
            type="button"
            className="btn btn-outline-dark"
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
