import React, { useState, useEffect } from "react";
import QCard from "./QCard";
import Data from "../data.json";

const GameBoard = () => {
  const [score, setScore] = useState(0);

  return (
    <div>
      <QCard />
      <button type="button" className="btn">Next Question</button>
      <h3>Score: {score} / 10</h3>
    </div>
  );
};

export default GameBoard;
