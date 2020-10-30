import React, { useState } from "react";
import QCard from "./QCard";

const GameBoard = ({ questions }) => {
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [selectedInput, setSelectedInput] = useState(null);
  const [currentQ, setCurrentQ] = useState(questions[0]); // questions[1]
  const [answered, setAnswered] = useState(false);

  const handleSelect = (e) => {
    setSelected(e.target.value);
    setSelectedInput(e.target);
  };

  const reset = () => {
    setSelected("");
    selectedInput.checked = false;
    setAnswered(false);
  }

  const submitAnswer = (e) => {
    e.preventDefault();
    checkAnswer();
  };

  const nextQ = (e) => {
    e.preventDefault();
    const nextIndex = questions.indexOf(currentQ) + 1;
    setCurrentQ(questions[nextIndex]); // not setting the currentQ to the next index. use the index to get next question.
    reset();
  };

  const checkAnswer = () => {
    // if the correct answer is selected
    if (selected == currentQ.correct) {
      setScore(score + 1);
      setAnswered(true);
      console.log("correct");
    }
    // if the incorrect answer is selected
    if (selected !== currentQ.correct && selected !== "") {
      console.log("incorrect");
      setAnswered(true);
    }
    // if no answer is selected
    if (selected == "") {
      console.log("please select an answer");
    }
  };

  return (
    <div>
      <QCard
        data={currentQ}
        handleSelect={handleSelect}
        submitAnswer={submitAnswer}
      />
      { answered ? (
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

      <h3>Score: {score} / 21</h3>
    </div>
  );
};

export default GameBoard;
