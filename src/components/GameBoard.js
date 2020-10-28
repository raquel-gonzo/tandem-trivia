import React, { useState, useEffect } from "react";
import QCard from "./QCard";
import Data from "../data.json";

const GameBoard = () => {
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [currentQ, setCurrentQ] = useState(Data[0])


  const handleSelect = (e) => {
    setSelected(e.target.value)
  }

  const submitAnswer = (e) => {
    e.preventDefault();
    checkAnswer()
  }

  const checkAnswer = () => {
    if (selected == currentQ.correct){
      setScore(score + 1);
      console.log('correct');
    }
    else {
      console.log('incorrect');
    }
  }

  const getQ = () => {
    return Data[0]
  }

  return (
    <div>
      <QCard data={getQ()} handleSelect={handleSelect} submitAnswer={submitAnswer} />
      <button type="button" className="btn btn-outline-dark">Next Question</button>
      <h3>Score: {score} / 10</h3>
    </div>
  );
};

export default GameBoard;
