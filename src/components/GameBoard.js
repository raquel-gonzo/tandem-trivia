import React, { useState } from "react";
import QCard from "./QCard";

const GameBoard = ({ questions }) => {
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [selectedInput, setSelectedInput] = useState(null);
  const [currentQ, setCurrentQ] = useState(questions[0]); // questions[1]
  const [isAnswered, setIsAnswered] = useState(false);
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
    }
    // if the incorrect answer is selected
    if (selected !== currentQ.correct && selected !== "") {
      console.log("incorrect");
      setIsAnswered(true);
    }
    // if no answer is selected
    if (selected === "") {
      console.log("please select an answer");
    }
  };

  return (
    <div>
      <QCard data={currentQ} handleSelect={handleSelect} />

      {isAnswered && currentQ === questions[endOfGame - 1] ? (
        ""
      ) : (
        <button 
          id="submit" 
          onClick={submitAnswer} 
          className={(!isAnswered && selected === "") || isAnswered ? "btn btn-light disabled" : "btn btn-light"}
          disabled={(!isAnswered && selected === "") || isAnswered}
        >
          Submit Answer
        </button>
      )}

      {isAnswered && currentQ !== questions[endOfGame - 1] ? (
        <div>
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={nextQ}
          >
            Next Question
          </button>
        </div>
      ) : (
        ""
      )}
      {questions[nextIndex] === questions[endOfGame] && isAnswered ? (
        <div>
          <p>Thanks for playing! Final Score: {score} / {questions.length}</p>
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

      <h3>Score: {score} / {questions.length}</h3>
    </div>
  );
};

export default GameBoard;
