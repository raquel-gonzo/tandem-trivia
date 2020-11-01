import "./App.css";
import GameBoard from "./components/GameBoard";
import React, { useState } from "react";
import Data from "./data.json";
import { shuffle } from "./functions";

function App() {
  const [startGame, setStartGame] = useState(false);
  const [questions, setQuestions] = useState([]);

  const funcStart = (e) => {
    e.preventDefault();
    setStartGame(true);
    const shuffledData = shuffle(Data);
    setQuestions(shuffledData);
  };

  return (
    <div className="App">
      <div id="start">
        <h1>Tandem Trivia</h1>
        {startGame ? (
          <GameBoard questions={questions} />
        ) : (
          <>
            <button
              id="start-btn"
              type="button"
              className="btn btn-dark"
              onClick={funcStart}
            >
              Start Playing
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
